import React, { Component } from "react";
import { List, ListItem } from "@mui/material";
import BookListItem from "./BookListItem";

class BookList extends Component {
  render() {
    const { books } = this.props;

    return (
      <List>
        <ListItem>
          <BookListItem book={books[0]}></BookListItem>
        </ListItem>
        <ListItem>item-02</ListItem>
        <ListItem>item-03</ListItem>
      </List>
    );
  }
}

export default BookList;
