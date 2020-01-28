import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Typography from "@material-ui/core/Typography";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import JournalEntry from "./JournalEntry";
import ErrorMessage from "./ErrorMessage";

const ALL_JOURNALS_QUERY = gql`
  query ALL_JOURNALS_QUERY {
    journals {
      id
      title
      body
      createdAt
      updatedAt
    }
  }
`;

const JournalEntries = () => {
  const { loading, error, data } = useQuery(ALL_JOURNALS_QUERY);
  if (loading) return <Typography>Loading</Typography>;
  if (error) return <ErrorMessage error={error} />;
  return (
    <GridList cols={3}>
      {data.journals.map(journal => (
        <GridListTile key={journal.id}>
          <JournalEntry journal={journal} />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default JournalEntries;
export { ALL_JOURNALS_QUERY };
