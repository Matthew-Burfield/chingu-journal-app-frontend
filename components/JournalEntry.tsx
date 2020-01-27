import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

type tJournal = {
  id: number;
  title: string;
  body: string;
};

interface Props {
  journal: tJournal;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      maxWidth: 150
      // color: theme.palette.text.secondary
    }
  })
);

const JournalEntry = (props: Props) => {
  const classes = useStyles();
  const { title, body } = props.journal;
  return (
    <Paper className={classes.paper}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Typography>{title}</Typography>
        </Grid>
        <Grid item>
          <Typography>{body}</Typography>
        </Grid>
        <Grid container item justify="space-around">
          <Grid>
            <Button>
              <Typography color="primary">Edit</Typography>
            </Button>
          </Grid>
          <Grid>
            <Button>
              <Typography color="error">Delete</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default JournalEntry;
