import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, AppBar, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "static",
  },
  link: {
    color: "inherit",
    padding: theme.spacing(2),
    fontSize: 24,
    textDecoration: "none",
    fontFamily: "sans-serif",
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.container}>
      <Toolbar>
        <Link to="/signin" className={classes.link}>
          Sign in
        </Link>
        <Link to="/register" className={classes.link}>
          Register
        </Link>
        <Link to="/dashboard" className={classes.link}>
          Dashboard
        </Link>
        <Link to="/create-test" className={classes.link}>
          Create a New Test
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
