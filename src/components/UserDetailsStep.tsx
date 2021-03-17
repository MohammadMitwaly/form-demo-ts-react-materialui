import React, { ChangeEvent, useState } from "react";
import { User } from "./UserForm";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

interface UserDetailsStepProps {
  nextStep: () => void;
  handleChange: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  values: User;
}

const UserDetailsStep = ({
  nextStep,
  handleChange,
  values,
}: UserDetailsStepProps) => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default UserDetailsStep;
