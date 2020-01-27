import App from "next/app";
import { ApolloProvider } from "react-apollo";
import withData from "../lib/withData";
import Page from "../components/Page";

interface tPageProps {
  query?: string;
}

interface tProps {
  apollo: any;
}

class MyApp extends App<tProps> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps: tPageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    );
  }
}

export default withData(MyApp);
