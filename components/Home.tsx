import Typography from "@material-ui/core/Typography";
import Page from "../components/Page";
import CreateJournal from "../components/CreateJournal";
import JournalEntries from "../components/JournalEntries";

interface Props {
  user: any;
}

const Home = ({ user }: Props) => {
  return (
    <Page>
      <>
        <Typography variant="h4" gutterBottom>
          Digital Journal
          <Typography variant="caption" gutterBottom color="textSecondary">
            | Create a note
          </Typography>
        </Typography>
        <CreateJournal />
        <JournalEntries />
      </>
    </Page>
  );
};

export default Home;
