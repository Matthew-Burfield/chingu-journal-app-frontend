import App from "next/app";
import Head from "next/head";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import withData from "../lib/withData";
import Page from "../components/Page";
import theme from "../lib/theme";

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
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }
  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Head>
            <title>Digial Journal</title>
          </Head>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default withData(MyApp);
