import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { GraphQLSchema } from "graphql";
import db from "./Database";
import Cookie from "cookie-parser";
import gql from "./GQL";
import QueryGql from "./GQL/Query.gql";
import MutationGQL from "./GQL/mutation.gql";
import { decode, encode } from "./Util/JWT";
import cors from "cors";
const app = express();
app.use(cors());
app.use(Cookie());
app.all("/gql", (req, res, nex) =>
  createHandler({
    context: { req, res },
    schema: new GraphQLSchema({
      query: QueryGql,
      mutation: MutationGQL,
    }),
  })(req, res, nex)
);
app.post("/token/refresh", async (req, res) => {
  try {
    const data = decode(req.cookies.token);
    const dat = await db.user.findUnique({ where: { id: data.id } });
    if (dat == null) return res.status(501).send("USER not found");
    res.cookie("token", encode({ id: dat.id }));
    return res.send("ok");
  } catch (e) {
    return res.status(501).send(e);
  }
});
app.listen(8085, async () => {
  await db.$connect();
  console.log("http://localhost:8085");
});
