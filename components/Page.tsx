import React, { Component } from "react";
import Container from "@material-ui/core/Container";

import Header from "./Header";

interface Props {
  children: JSX.Element;
}

const Page = (props: Props) => (
  <>
    <Header />
    <Container maxWidth="sm">{props.children}</Container>
  </>
);

export default Page;
