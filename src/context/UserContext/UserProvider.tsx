import React, { useEffect, useState } from "react";

import UserContext, {
  IAuthResponse,
  ISigninFormData,
  ISignupFormData,
  IUser,
  IUserContext,
} from "./UserContext";
import environment, { ENV } from "../../env";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isAccountLoading, setIsAccountLoading] = useState(true);

  useEffect(() => {
    accountLookup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const baseUrl =
    environment === ENV.Production
      ? "http://api.nmt-solutions.in"
      : "http://localhost:8000";

  const signup = async (signupFormData: ISignupFormData) => {
    try {
      const res = await fetch(`${baseUrl}/signup`, {
        method: "POST",
        body: JSON.stringify(signupFormData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const parsedResponse = await res.json();

      if (parsedResponse.status === "success") {
        setUser(parsedResponse.user);

        localStorage.setItem("user", JSON.stringify(user));
      }
      return { status: "success" } as IAuthResponse;
    } catch (error) {
      console.log(error);
      return { status: " error" } as IAuthResponse;
    }
  };

  const login = async (signinFormData: ISigninFormData) => {
    try {
      const res = await fetch(`${baseUrl}/login`, {
        method: "POST",
        body: JSON.stringify(signinFormData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const parsedResponse = await res.json();

      if (parsedResponse.status === "success") {
        setUser(parsedResponse.user);

        localStorage.setItem("user", JSON.stringify(parsedResponse.user));
      }
      return { status: "success" } as IAuthResponse;
    } catch (error) {
      console.log(error);
      return { status: " error" } as IAuthResponse;
    }
  };

  const accountLookup = async () => {
    try {
      const userData = localStorage.getItem("user");

      if (userData) {
        const parsedUserData = JSON.parse(userData);

        const res = await fetch(`${baseUrl}/account-lookup`, {
          method: "POST",
          body: JSON.stringify({
            uid: parsedUserData.uid,
            refreshToken: parsedUserData.refreshToken,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const parsedResponse = await res.json();

        if (parsedResponse.status === "success") {
          setUser(parsedResponse.user as IUser);
          localStorage.setItem("user", JSON.stringify(parsedResponse.user));
          setIsAccountLoading(false);
        } else {
          if (parsedResponse.message === "Invalid refresh token.") {
            setUser(null);
          }
        }
      }
    } catch (error) {
      console.log(error);
      return { status: " error" } as IAuthResponse;
    }
  };

  const signout = async () => {
    try {
      setUser(null);
      localStorage.removeItem("user");
      return { status: "success" } as IAuthResponse;
    } catch (error) {
      console.log(error);
      return { status: " error" } as IAuthResponse;
    }
  };

  const context: IUserContext = {
    isAccountLoading,
    user,
    signup,
    login,
    signout,
  };
  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
