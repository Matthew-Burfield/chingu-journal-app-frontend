import Typography from "@material-ui/core/Typography";
import CreateJournal from "../components/CreateJournal";
import JournalEntries from "../components/JournalEntries";

const Home = () => (
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
);

export default Home;
