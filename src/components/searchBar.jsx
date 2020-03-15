import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: 900
    },
    [theme.breakpoints.up("md")]: {
      width: 700
    }
  }
}));

const SearchBar = props => {
  const classes = useStyles();

  const onInputChange = term => {
    props.onSearchTermChange(term);
  };

  return (
    <InputBase
      onChange={event => onInputChange(event.target.value)}
      placeholder="Search…"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput
      }}
      inputProps={{ "aria-label": "search" }}
    />
  );
};

export default SearchBar;
