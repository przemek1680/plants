import { Typography, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./NavBarStyles";

const NavBar = (props) => {
  const classes = useStyles();
  return <>{props.name}</>;
};
export default NavBar;
