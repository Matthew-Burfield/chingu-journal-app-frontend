import Page from "../components/Page";
import GetLoggedInUser from "../components/GetLoggedInUser";
import LandingPage from "../components/LandingPage";
import HomePage from "../components/Home";

const Home = () => (
  <GetLoggedInUser>
    {currentUser => {
      if (currentUser !== null) {
        return <HomePage user={currentUser} />;
      }
      return <LandingPage />;
    }}
  </GetLoggedInUser>
);

export default Home;
