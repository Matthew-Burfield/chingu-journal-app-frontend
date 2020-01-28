import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "../components/GetLoggedInUser";
import { ALL_JOURNALS_QUERY } from "../components/JournalEntries";
import ErrorMessage from "../components/ErrorMessage";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signup(name: $name, email: $email, password: $password) {
      id
    }
  }
`;

const Signup = () => {
  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION, {
    refetchQueries: [
      { query: CURRENT_USER_QUERY },
      { query: ALL_JOURNALS_QUERY }
    ]
  });
  const router = useRouter();
  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = data => {
    signup({ variables: data });
    reset();
    router.push("/");
  };
  return (
    <>
      <ErrorMessage error={error} />
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <Grid container spacing={3}>
          <Grid item md={12}>
            <TextField
              required
              inputRef={register({ required: true })}
              name="name"
              id="name"
              label="Name"
              fullWidth
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              required
              inputRef={register({ required: true })}
              name="email"
              id="email"
              label="Email"
              type="email"
              fullWidth
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              required
              inputRef={register({ required: true })}
              name="password"
              id="password"
              label="Password"
              type="password"
              fullWidth
            />
          </Grid>
          <Grid item md={12}>
            <Button type="submit" color="primary" variant="contained">
              Sign up
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Signup;
