import Typography from "@material-ui/core/Typography";

const ErrorMessage = ({ error }) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <Typography>{error.message.replace("GraphQL error: ", "")}</Typography>
    ));
  }
  return (
    <Typography>{error.message.replace("GraphQL error: ", "")}</Typography>
  );
};

export default ErrorMessage;
