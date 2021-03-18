import React, { ChangeEvent } from "react";
import { User } from "./UserForm";
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, IconButton, TextField, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

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

const styles = {
  button: {
    margin: 15,
  },
};

const UserDetailsStep = ({
  nextStep,
  handleChange,
  values,
}: UserDetailsStepProps) => {
  const handleNextStep = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <AppBar position="static" title="Test">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Fill-in basic information</Typography>
          </Toolbar>
        </AppBar>
        <br />
        <TextField
          placeholder="First Name"
          id="firstName"
          onChange={handleChange}
          defaultValue={values.firstName}
        />
        <br />
        <TextField
          placeholder="Last Name"
          id="lastName"
          onChange={handleChange}
          defaultValue={values.lastName}
        />
        <br />
        <TextField
          placeholder="Age"
          id="age"
          type="number"
          onChange={handleChange}
          defaultValue={values.age}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          style={styles.button}
          onClick={handleNextStep}
        >
          Continue
        </Button>
      </div>
    </MuiThemeProvider>
  );
};

export default UserDetailsStep;
