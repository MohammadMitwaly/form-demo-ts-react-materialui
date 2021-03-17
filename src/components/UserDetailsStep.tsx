import React, { ChangeEvent } from "react";
import { User } from "./UserForm";
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";

interface UserDetailsStepProps {
  nextStep: () => void;
  handleChange: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  values: User;
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const UserDetailsStep = ({
  nextStep,
  handleChange,
  values,
}: UserDetailsStepProps) => {
  return (
    <MuiThemeProvider theme={theme}>
      <h1>Hello</h1>
    </MuiThemeProvider>
  );
};

export default UserDetailsStep;
