import * as gql from "graphql";
import {
  Charging_history,
  User,
  User_input,
  station,
  station_input,
} from "./Types.gql";
import {
  create_admin,
  create_customer,
  create_history,
  create_owner,
  login_cus,
  login_user,
} from "../controller/User.contorller";
import { contx } from "../types";
import { encode } from "../Util/JWT";
export default new gql.GraphQLObjectType({
  name: "mutation",
  description: "All CUD function run hear",
  fields: () => ({
    admin_or_owner_login: {
      type: User,
      args: {
        email: {
          type: gql.GraphQLString,
        },
        password: {
          type: gql.GraphQLString,
        },
      },
      resolve: async (_: any, args, ctx: contx) => {
        const user: any = await login_user(args);
        ctx.res.cookie("token", encode({ id: user.id }), {
          expires: new Date(new Date().setDate(new Date().getDate() + 31)),
        });
        return user;
      },
    },
    login_customer: {
      type: new gql.GraphQLObjectType({
        name: "USERwithstation",
        fields: () => ({
          user: {
            type: User,
          },
          historyS: {
            type: new gql.GraphQLObjectType({
              name: "Histroy2",
              fields: () => ({
                history: {
                  type: new gql.GraphQLList(
                    new gql.GraphQLObjectType({
                      name: "HH1",
                      fields: () => ({
                        history: { type: Charging_history },
                        station: { type: station },
                      }),
                    })
                  ),
                },
              }),
            }),
          },
        }),
      }),
      args: {
        mobile_number: {
          type: gql.GraphQLString,
        },
      },
      resolve: async (_, ags, ctx: contx) => {
        const cus: any = await login_cus(ags);
        ctx.res.cookie("token", encode({ id: cus.id }), {
          expires: new Date(new Date().setHours(new Date().getHours() + 4)),
        });
        return cus;
      },
    },
    create_customer: {
      type: User,
      args: {
        first_name: {
          type: gql.GraphQLString,
        },
        last_name: {
          type: gql.GraphQLString,
        },
        mobile_number: {
          type: gql.GraphQLString,
        },
        email: {
          type: gql.GraphQLString,
        },
      },
      resolve: async (_: any, ags, ctx: contx) => {
        const c = await create_customer({ ...ags, password: ags.email });
        ctx.res.cookie("token", encode({ id: c.id }), {
          expires: new Date(new Date().setHours(new Date().getHours() + 4)),
        });
        return c;
      },
    },
    create_history: {
      type: new gql.GraphQLObjectType({
        name: "USER_with_station",
        fields: () => ({
          user: {
            type: User,
          },
          historyS: {
            type: new gql.GraphQLObjectType({
              name: "Histroy1",
              fields: () => ({
                history: {
                  type: new gql.GraphQLList(
                    new gql.GraphQLObjectType({
                      name: "HH",
                      fields: () => ({
                        history: { type: Charging_history },
                        station: { type: station },
                      }),
                    })
                  ),
                },
              }),
            }),
          },
        }),
      }),
      args: {
        history: {
          type: new gql.GraphQLInputObjectType({
            name: "History_input",
            fields: () => ({
              charing_mod: {
                type: gql.GraphQLString,
              },
              charing_value: {
                type: gql.GraphQLString,
              },
              charing_from: {
                type: gql.GraphQLString,
              },
              charing_to: {
                type: gql.GraphQLString,
              },
              is_pay: {
                type: gql.GraphQLBoolean,
              },
              date_time: {
                type: gql.GraphQLString,
              },
              charing_state: {
                type: new gql.GraphQLEnumType({
                  name: "CHARING_STATEd",
                  values: {
                    full: {
                      value: "full",
                    },
                    stop: {
                      value: "stop",
                    },
                  },
                }),
              },
              payment_method: {
                type: new gql.GraphQLEnumType({
                  name: "PAYMENTs",
                  description: "ALL TYPE ACCEPT PAYMENT METHOD",
                  values: {
                    upi: {
                      value: "UPI",
                    },
                  },
                }),
              },
            }),
          }),
        },
        station: {
          type: station_input,
        },
      },
      resolve: (_: any, ags, ctx: contx) => {
        const x = create_history(ctx.req.cookies.token, ags);
        ctx.res.clearCookie("token");
        return x;
      },
    },
    crate_owner: {
      type: User,
      args: {
        station: {
          type: station_input,
        },
        user: {
          type: User_input,
        },
      },
      resolve: (_: any, ags, ctx: contx) => {
        const owner = create_owner(ctx.req.cookies.token, ags);
        return owner;
      },
    },
    crate_admin: {
      type: User,
      args: {
        user: {
          type: User_input,
        },
      },
      resolve: (_: any, ags, ctx: contx) => {
        const owner = create_admin(ctx.req.cookies.token, ags.user);
        return owner;
      },
    },
  }),
});
