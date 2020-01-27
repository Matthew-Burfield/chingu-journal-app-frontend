import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Meta from "./Meta";
import Header from "./Header";

interface tProps {
  children: JSX.Element;
}

const Page = (props: tProps) => (
  <>
    <CssBaseline />
    <Meta />
    <Header />
    <Container maxWidth="sm">{props.children}</Container>
  </>
);

export default Page;
