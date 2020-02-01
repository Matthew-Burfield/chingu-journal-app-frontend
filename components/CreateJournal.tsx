import React from "react";
import { useForm } from "react-hook-form";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { ALL_JOURNALS_QUERY } from "./JournalEntries";

const CREATE_JOURNAL_MUTATION = gql`
  mutation CREATE_JOURNAL_MUTATION($title: String!, $body: String!) {
    createJournal(title: $title, body: $body) {
      title
      body
    }
  }
`;

const CreateJournal = () => {
  const [createJournal] = useMutation(CREATE_JOURNAL_MUTATION, {
    refetchQueries: [{ query: ALL_JOURNALS_QUERY }]
  });
  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = data => {
    createJournal({ variables: data });
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <TextField
            required
            inputRef={register({ required: true })}
            name="title"
            id="title"
            label="title"
            fullWidth
          />
        </Grid>
        <Grid item md={12}>
          <TextField
            required
            inputRef={register({ required: true })}
            name="body"
            id="body"
            label="body"
            multiline
            fullWidth
          />
        </Grid>
        <Grid item md={12}>
          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreateJournal;
