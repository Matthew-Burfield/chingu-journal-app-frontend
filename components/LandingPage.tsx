import React, { useRef, useEffect } from "react";
import Typical from "react-typical";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import ButtonLink from "./ButtonLink";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "100vh",
      backgroundColor: "#333",
      color: "green",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    appbar: {
      background: "transparent",
      boxShadow: "none",
      paddingBottom: 150
    },
    toolbar: {
      display: "flex",
      justifyContent: "flex-end"
    }
  })
);

const LandingPage = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root} component="section">
        <AppBar className={classes.appbar} position="static">
          <Toolbar className={classes.toolbar}>
            <ButtonLink href="/signup">Signup</ButtonLink>
            <ButtonLink href="/login">Login</ButtonLink>
          </Toolbar>
        </AppBar>
        <Typography variant="h1">
          <Typical steps={["Digital Journal."]} />
        </Typography>
        <Typography variant="h6" component="h3" color="secondary">
          Create an account or login to start
        </Typography>
      </Box>
    </>
  );
};

export default LandingPage;
