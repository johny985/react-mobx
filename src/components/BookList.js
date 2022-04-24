import React, { Component } from "react";
import { List, ListItem, Container } from "@mui/material";
import BookListItem from "./BookListItem";

class BookList extends Component {
  render() {
    const { books } = this.props;

    return (
      <Container maxWidth="sm">
        <List>
          {books.map((el) => {
            return (
              <ListItem>
                <BookListItem book={el}></BookListItem>
              </ListItem>
            );
          })}
        </List>
      </Container>
    );
  }
}

export default BookList;
