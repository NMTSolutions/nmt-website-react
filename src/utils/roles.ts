import { IUser } from "../context/UserContext/UserContext";

export enum Role {
  Visitor = "visitor",
  Admin = "admin",
}

export const hasRoles = (user: IUser, role: Role) => {
  const userRoles = user.role === 2 ? Role.Admin : Role.Visitor;
  return role === userRoles;
};
