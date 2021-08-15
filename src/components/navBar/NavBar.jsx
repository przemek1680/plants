import { Typography, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./NavBarStyles";
import Item from "./Item";

const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container item xs={12} xl={12} className={classes.container}>
        <Grid item xs={12} md={3}>
          <Item />
        </Grid>
        <Grid item xs={12} md={3}>
          <Item />
        </Grid>
        <Grid item xs={12} md={3}>
          <Item />
        </Grid>
        <Grid item xs={12} md={3}>
          <Item />
        </Grid>
      </Grid>
    </>
  );
};
export default NavBar;
