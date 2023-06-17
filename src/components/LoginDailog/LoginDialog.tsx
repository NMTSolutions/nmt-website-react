import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext/UserContext";
import Dialog from "../Dialog/Dialog";
import TextField from "../TextField/TextField";

const initialSigninFormData = {
  usernameOrEmail: "",
  password: "",
};

const LoginDialog = ({
  isSigninFormOpen,
  closeSigninForm,
}: {
  isSigninFormOpen: boolean;
  closeSigninForm: () => void;
}) => {
  const [signinFormData, setSigninFormData] = useState(initialSigninFormData);
  const [isLoading, setIsLoading] = useState(false);

  const userContext = useContext(UserContext);

  const handleSigninFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSigninFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLogin = async () => {
    setIsLoading(true);
    await userContext.login({
      usernameOrEmail: signinFormData.usernameOrEmail.trim(),
      password: signinFormData.password.trim(),
    });
    setIsLoading(false);
    closeSigninForm();
  };

  return (
    <Dialog
      open={isSigninFormOpen}
      heading="Login"
      isLoading={isLoading}
      content={
        <div className="signin-form">
          <div className="signin-form username">
            <TextField
              name="usernameOrEmail"
              label="Username or Email"
              height="3rem"
              type="text"
              disabled={isLoading}
              onChange={handleSigninFormChange}
              value={signinFormData.usernameOrEmail}
            />
          </div>
          <div className="signin-form password">
            <TextField
              name="password"
              label="Password"
              height="3rem"
              type="password"
              disabled={isLoading}
              onChange={handleSigninFormChange}
              value={signinFormData.password}
            />
          </div>
        </div>
      }
      action="Login"
      onClose={closeSigninForm}
      onCancel={closeSigninForm}
      onAction={handleLogin}
    />
  );
};

export default LoginDialog;
