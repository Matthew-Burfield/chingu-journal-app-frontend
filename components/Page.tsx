import React, { Component } from "react";
import Container from "@material-ui/core/Container";

import Header from "./Header";

interface tProps {
  children: JSX.Element;
}

const Page = (props: tProps) => (
  <>
    <Header />
    <Container maxWidth="sm">{props.children}</Container>
  </>
);

export default Page;
