import jwt from "jsonwebtoken";
import { jwtVerify } from "jose";

const JWT_SECRET = "219a2f62b007699ee20a10a878026bd2c4de5d51f1847ee154c3f4bcfc5c07d8520df768058172f7d4f1387074d076a63c68";

export async function jwtSign(payload: string | object | Buffer, expiresIn: string) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, JWT_SECRET, { expiresIn }, function (err, token) {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
}

export async function jwtVerifyCustom(token: string) {
  try {
    const decoded = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
    return decoded.payload as {
      jti: string;
      iat: number;
    };
  } catch (err) {
    throw new Error("The token has been expired");
  }
}
