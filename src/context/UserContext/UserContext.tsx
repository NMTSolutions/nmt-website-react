import { createContext } from "react";

export interface IUser {
  uid: number;
  fullname: string;
  username: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  token: string;
  refreshToken: string;
  refreshTokenExpiresAt: Date;
  role: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ISignupFormData {
  fullname: string;
  username: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  addressLine1: string;
  addressLine2: string;
  postalCode: string;
  phone: string;
  city: string;
  state: string;
  dateOfBirth: string;
}

export interface ISigninFormData {
  usernameOrEmail: string;
  password: string;
}

export interface IAuthResponse {
  status: string;
  user?: IUser;
  error?: any;
}

export interface IUserContext {
  user: IUser | null;
  isAccountLoading: boolean;
  signup: (signupFormData: ISignupFormData) => Promise<IAuthResponse>;
  login: (signinFormData: ISigninFormData) => Promise<IAuthResponse>;
  signout: () => void;
}

const initialContext: IUserContext = {
  user: null,
  isAccountLoading: false,
  signup: async () => ({} as IAuthResponse),
  login: async (signinFormData: ISigninFormData) => ({} as IAuthResponse),
  signout: async () => {},
};

const UserContext = createContext(initialContext);

export default UserContext;
