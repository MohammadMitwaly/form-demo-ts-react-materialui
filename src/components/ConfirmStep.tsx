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
  List,
  ListItem,
  Typography,
  ListSubheader,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

interface ConfirmStepProps {
  nextStep: () => void;
  previousStep: () => void;
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
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    display: "inline-block",
  },
};

const ConfirmStep = ({ nextStep, previousStep, values }: ConfirmStepProps) => {
  const handleNextStep = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    nextStep();
  };

  const handlePreviousStep = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    previousStep();
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div style={styles.root}>
        <AppBar position="static" title="Test">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Confirm your details</Typography>
          </Toolbar>
        </AppBar>
        <br />
        <List
          style={{
            width: "100%",
            textAlign: "center",
            display: "inline-blocks",
          }}
        >
          <ListSubheader>Information:</ListSubheader>
          <ListItem key="0" style={{ textAlign: "center" }}>
            <ListItemText primary="First name" secondary={values.firstName} />
          </ListItem>
          <ListItem key="1" style={{ textAlign: "center" }}>
            <ListItemText primary="Last name" secondary={values.lastName} />
          </ListItem>
          <ListItem key="2" style={{ textAlign: "center" }}>
            <ListItemText primary="Age" secondary={values.age} />
          </ListItem>
          <ListItem key="3" style={{ textAlign: "center" }}>
            <ListItemText primary="Country" secondary={values.country} />
          </ListItem>
          <ListItem key="4" style={{ textAlign: "center" }}>
            <ListItemText primary="Occupation" secondary={values.job} />
          </ListItem>
        </List>

        <br />
        <Button
          variant="contained"
          color="secondary"
          style={styles.button}
          onClick={handlePreviousStep}
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

export default ConfirmStep;
