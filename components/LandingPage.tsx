import React, { useRef, useEffect } from "react";
import Typist from "react-typist";
import Typical from "react-typical";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "100vh",
      backgroundColor: "#333",
      color: "green",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: 150
    }
  })
);

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} component="section">
      <Typography variant="h1">
        <Typical steps={["Digital Journal."]} />
      </Typography>
      <Typography variant="h6" component="h3" color="secondary">
        Create an account or login to start
      </Typography>
    </Box>
  );
};

export default LandingPage;
