import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

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
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    display: "inline-block",
  },
};

const SuccessStep = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div style={styles.root}>
        <AppBar position="static" title="Test">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Success!</Typography>
          </Toolbar>
        </AppBar>
        <Typography variant="h6">Thank you for using the app!</Typography>
        <Typography variant="h6">You will get an email soon.</Typography>
      </div>
    </MuiThemeProvider>
  );
};

export default SuccessStep;
