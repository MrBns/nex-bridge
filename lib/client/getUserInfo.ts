"use client";

import { IUser } from "../server/model/UserModel";

export interface ILocalUser {
  _id: string;
  username: string;
  email: string;
  role: "admin" | "author";
}

export default function getLocalUserInfo () {
  return new Promise<ILocalUser>((resolve, reject) => {
    try {
      const localToken = localStorage.getItem("token");
      if (!localToken) return reject("no token found");
      const userDataPart = localToken.split(".")?.[1];

      if (!userDataPart) return reject("Invalid Token");
      const userData = JSON.parse(atob(userDataPart)).data as ILocalUser;
      return resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
}
