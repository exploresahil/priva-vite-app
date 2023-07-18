import jwt from "jsonwebtoken";
import env from "../env";
export const encode = (data: any) => {
  return jwt.sign(data, env.jwt_key, {
    expiresIn: "31d",
  });
};
export const decode = (token: string): jwt.JwtPayload => {
  return jwt.verify(token, env.jwt_key) as jwt.JwtPayload;
};
