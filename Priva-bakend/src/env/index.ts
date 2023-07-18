import { config } from "dotenv";
config();

export default {
  jwt_key: process.env.JWT_TOKEN_KEY,
  passwd_key: process.env.PASSWORD_HASHING_KEY,
} as {
  jwt_key: string;
  passwd_key: string;
};
