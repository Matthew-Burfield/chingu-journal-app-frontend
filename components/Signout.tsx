import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Button from "@material-ui/core/Button";
import { CURRENT_USER_QUERY } from "../components/GetLoggedInUser";
import { ALL_JOURNALS_QUERY } from "../components/JournalEntries";

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = () => {
  const [signout] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [
      { query: CURRENT_USER_QUERY },
      { query: ALL_JOURNALS_QUERY }
    ]
  });
  const onClick = e => {
    signout();
  };
  return (
    <Button onClick={onClick} color="inherit">
      Signout
    </Button>
  );
};

export default Signout;
