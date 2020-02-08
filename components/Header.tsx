import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import ButtonLink from "./ButtonLink";
import GetLoggedInUser from "./GetLoggedInUser";
import Signout from "./Signout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <GetLoggedInUser>
            {currentUser => (
              <>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Digial Journal
                </Typography>
                {currentUser ? (
                  <Signout />
                ) : (
                  <>
                    <ButtonLink href="/signup">Signup</ButtonLink>
                    <ButtonLink href="/login">Login</ButtonLink>
                  </>
                )}
              </>
            )}
          </GetLoggedInUser>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
