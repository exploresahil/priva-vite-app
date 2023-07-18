import * as gql from "graphql";
import * as types from "./Types.gql";
import { contx } from "../types";
import { get_all_station, get_all_user } from "../controller/User.contorller";
export default new gql.GraphQLObjectType({
  name: "Query",
  description: "All Read function run hear",
  fields: () => ({
    get_all_user: {
      type: new gql.GraphQLList(types.User),
      resolve: (_: any, __: any, ctx: contx) => {
        const { token } = ctx.req.cookies;
        return get_all_user(token);
      },
    },
    get_station: {
      type: new gql.GraphQLList(types.station),
      resolve: (_: any, __: any, ctx: contx) => {
        const { token } = ctx.req.cookies;
        return get_all_station(token);
      },
    },
  }),
});
