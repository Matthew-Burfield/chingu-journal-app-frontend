import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { MutationFunctionOptions } from "react-apollo";
import gql from "graphql-tag";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ALL_JOURNALS_QUERY } from "../components/JournalEntries";

type tJournal = {
  id: MutationFunctionOptions<any, Record<string, any>>;
  title: string;
  body: string;
};

interface Props {
  journal: tJournal;
}

const DELETE_JOURNAL_MUTATION = gql`
  mutation DELETE_JOURNAL_MUTATION($id: ID!) {
    deleteJournal(id: $id) {
      id
    }
  }
`;

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
  const { id, title, body } = props.journal;
  const [deleteJournal] = useMutation(DELETE_JOURNAL_MUTATION, {
    refetchQueries: [{ query: ALL_JOURNALS_QUERY }]
  });
  const handleDelete = () => {
    deleteJournal({ variables: { id } });
  };
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
            <Button onClick={handleDelete}>
              <Typography color="error">Delete</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default JournalEntry;
