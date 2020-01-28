import Typography from "@material-ui/core/Typography";
import { Query } from "react-apollo";
import gql from "graphql-tag";

type Props = {
  children: Function;
};

const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      id
      name
      email
      permissions
    }
  }
`;

const GetLoggedInUser = (props: Props) => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data }) => {
      if (data && data.me) return props.children(data.me);
      return props.children(null);
    }}
  </Query>
);

export default GetLoggedInUser;
export { CURRENT_USER_QUERY };
