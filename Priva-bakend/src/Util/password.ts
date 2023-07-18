import { HmacSHA512 } from "crypto-js";
import { compare, hash, genSalt } from "bcrypt";
import env from "../env";

export const pass_encode = async (password: string) => {
  let p1 = HmacSHA512(password, env.passwd_key).toString();
  let p2 = hash(p1, await genSalt(14));
  return p2;
};

export const pass_decode = async (password: string, hash: string) => {
  let p1 = HmacSHA512(password, env.passwd_key).toString();
  return await compare(p1, hash);
};
