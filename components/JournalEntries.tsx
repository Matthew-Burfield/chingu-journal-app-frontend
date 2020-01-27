import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Typography from "@material-ui/core/Typography";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import JournalEntry from "./JournalEntry";

const ALL_JOURNALS_QUERY = gql`
  query ALL_JOURNALS_QUERY {
    journals {
      id
      title
      body
    }
  }
`;

const journals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const JournalEntries = () => (
  <Query query={ALL_JOURNALS_QUERY}>
    {({ data, error, loading }) => {
      if (loading) return <Typography>Loading</Typography>;
      if (error) return <Typography>Error: {error.message}</Typography>;
      return (
        <GridList cols={3}>
          {data.journals.map(journal => (
            <GridListTile key={journal.id}>
              <JournalEntry journal={journal} />
            </GridListTile>
          ))}
        </GridList>
      );
    }}
  </Query>
);

export default JournalEntries;
