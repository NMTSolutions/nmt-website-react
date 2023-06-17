import React, { useContext, useState } from "react";
import UserContext, {
  ISignupFormData,
} from "../../context/UserContext/UserContext";
import Dialog from "../Dialog/Dialog";
import TextField from "../TextField/TextField";
import CheckboxInput from "../Input/CheckboxInput";

const initialSignupFormValues = {
  fullname: "",
  username: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
  addressLine1: "",
  addressLine2: "",
  postalCode: "",
  phone: "",
  city: "",
  state: "",
  dateOfBirth: "",
};

const SignupDialog = ({
  isSignupFormOpen,
  closeSignupForm,
}: {
  isSignupFormOpen: boolean;
  closeSignupForm: () => void;
}) => {
  const [signupFormData, setSignupFormData] = useState(initialSignupFormValues);
  const [isLoading, setIsLoading] = useState(false);
  const userContext = useContext(UserContext);

  const handleSignupFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSignupFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSignup = async () => {
    setIsLoading(true);
    const clean: { [key: string]: string } = {};
    Object.entries(signupFormData).forEach(
      (entry) => (clean[entry[0]] = entry[1].trim()),
    );
    console.log(clean);
    await userContext.signup(clean as unknown as ISignupFormData);
    setIsLoading(false);
    closeSignupForm();
  };
  return (
    <Dialog
      open={isSignupFormOpen}
      heading="Register"
      isLoading={isLoading}
      content={
        <div className="signup-form">
          <div className="signup-form username">
            <TextField
              name="fullname"
              label="Full Name"
              height="3rem"
              type="text"
              disabled={isLoading}
              onChange={handleSignupFormChange}
              value={signupFormData.fullname}
            />
            <TextField
              name="username"
              label="Username"
              height="3rem"
              type="text"
              disabled={isLoading}
              onChange={handleSignupFormChange}
              value={signupFormData.username}
            />
          </div>
          <div className="signup-form email">
            <TextField
              name="email"
              label="Email"
              height="3rem"
              type="email"
              disabled={isLoading}
              onChange={handleSignupFormChange}
              value={signupFormData.email}
            />
            <TextField
              name="confirmEmail"
              label="Confirm Email"
              height="3rem"
              type="email"
              disabled={isLoading}
              onChange={handleSignupFormChange}
              value={signupFormData.confirmEmail}
            />
          </div>
          <div className="signup-form password">
            <TextField
              name="password"
              label="Password"
              type="password"
              height="3rem"
              disabled={isLoading}
              onChange={handleSignupFormChange}
              value={signupFormData.password}
            />
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              height="3rem"
              disabled={isLoading}
              onChange={handleSignupFormChange}
              value={signupFormData.confirmPassword}
            />
          </div>

          <div className="signup-form address">
            <TextField
              name="addressLine1"
              label="Address Line 1"
              height="3rem"
              disabled={isLoading}
              onChange={handleSignupFormChange}
              value={signupFormData.addressLine1}
            />
            <TextField
              name="addressLine2"
              label="Address Line 2"
              height="3rem"
              disabled={isLoading}
              onChange={handleSignupFormChange}
              value={signupFormData.addressLine2}
            />
          </div>
          <div className="signup-form contact">
            <TextField
              name="postalCode"
              label="Postal Code"
              height="3rem"
              disabled={isLoading}
              onChange={handleSignupFormChange}
              value={signupFormData.postalCode}
            />
            <TextField
              name="phone"
              label="Phone"
              height="3rem"
              type="number"
              disabled={isLoading}
              onChange={handleSignupFormChange}
              value={signupFormData.phone}
            />
          </div>
          <div className="signup-form city">
            <TextField
              name="city"
              label="City"
              height="3rem"
              disabled={isLoading}
              onChange={handleSignupFormChange}
              value={signupFormData.city}
            />
            <TextField
              name="state"
              label="State/Province"
              height="3rem"
              disabled={isLoading}
              onChange={handleSignupFormChange}
              value={signupFormData.state}
            />
          </div>
          <div className="dob">
            <TextField
              name="dateOfBirth"
              label="Date of Birth"
              type="text"
              disabled={isLoading}
              onFocus={(event) => {
                event.target.type = "date";
              }}
              onBlur={(event) => {
                event.target.type = "text";
              }}
              onChange={handleSignupFormChange}
              value={signupFormData.dateOfBirth}
            />
          </div>
          <div className="terms">
            <CheckboxInput label="I accept the Terms & Conditions By Signing up." />
          </div>
        </div>
      }
      action="Register"
      onClose={closeSignupForm}
      onCancel={closeSignupForm}
      onAction={handleSignup}
    />
  );
};

export default SignupDialog;
