import React, { Component } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@mui/icons-material/Delete";
class SearchBar extends Component {
  render() {
    return (
      <TextField
        inputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon></SearchIcon>
              <DeleteIcon></DeleteIcon>
            </InputAdornment>
          ),
        }}
      ></TextField>
    );
  }
}

export default SearchBar;
