import * as gql from "graphql";

export const User = new gql.GraphQLObjectType({
  name: "USERS",
  description: "ALL USER FILEDs",
  fields: () => ({
    id: {
      type: gql.GraphQLID,
    },
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
    role: {
      type: new gql.GraphQLEnumType({
        values: {
          admin: {
            value: "super_admin",
          },
          owners: {
            value: "owners",
          },
          customers: {
            value: "customers",
          },
        },
        name: "USER_ROLEs",
        description: "USER ROLE",
      }),
    },
  }),
});

export const Charging_history = new gql.GraphQLObjectType({
  name: "HISTORY",
  description: "ALL CHARGING HISTORY",
  fields: () => ({
    id: {
      type: gql.GraphQLID,
    },
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
        name: "CHARING_STATE",
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

    user: {
      type: User,
    },
    payment_method: {
      type: new gql.GraphQLEnumType({
        name: "PAYMENT",
        description: "ALL TYPE ACCEPT PAYMENT METHOD",
        values: {
          upi: {
            value: "UPI",
          },
        },
      }),
    },
  }),
});

export const station = new gql.GraphQLObjectType({
  name: "STATION",
  description: "ALL USER STATION",
  fields: () => ({
    id: {
      type: gql.GraphQLID,
    },
    location: {
      type: gql.GraphQLString,
    },
    owner: {
      type: User,
    },
  }),
});

export const User_input = new gql.GraphQLInputObjectType({
  name: "USER_INPUT",
  description: "All USER INPUT",
  fields: () => ({
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
    password: {
      type: gql.GraphQLString,
    },
  }),
});
export const station_input = new gql.GraphQLInputObjectType({
  name: "station_INPUT",
  description: "All station INPUT",
  fields: () => ({
    location: {
      type: gql.GraphQLString,
    },
    owner: {
      type: User_input,
    },
  }),
});
