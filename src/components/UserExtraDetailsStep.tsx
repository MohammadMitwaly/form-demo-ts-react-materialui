import React, { ChangeEvent, useState } from "react";
import { User } from "./UserForm";
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Button,
  IconButton,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import countries from "../data/countries";

interface UserExtraDetailsStepProps {
  nextStep: () => void;
  previousStep: () => void;
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

const UserExtraDetailsStep = ({
  nextStep,
  previousStep,
  handleChange,
  values,
}: UserExtraDetailsStepProps) => {
  const handleNextStep = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    nextStep();
  };

  const [countriesList, setCountriesList] = useState(() => {
    return countries.data.map((item: any) => {
      return <MenuItem value={item.name}>{item.name}</MenuItem>;
    });
  });

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <AppBar position="static" title="Test">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">A few extra things</Typography>
          </Toolbar>
        </AppBar>
        <br />
        <Select
          id="country"
          value={values.country}
          onChange={(event) =>
            handleChange(
              event as React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
            )
          }
        >
          <MenuItem value="None">None</MenuItem>
          {countriesList}
        </Select>
        <br />
        <TextField
          placeholder="What is your occupation?"
          id="job"
          onChange={handleChange}
          defaultValue={values.lastName}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          style={styles.button}
          onClick={previousStep}
        >
          Previous
        </Button>
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

export default UserExtraDetailsStep;
