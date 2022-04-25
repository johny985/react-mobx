import React, { Component } from "react";
import { Container } from "@material-ui/core";
import SearchBar from "../src/components/SearchBar";

class App extends Component {
  render() {
    return (
      <Container>
        <SearchBar></SearchBar>
      </Container>
    );
  }
}

export default App;
