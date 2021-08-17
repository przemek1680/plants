import { Typography, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./NavBarStyles";
import Item from "./Item";

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.back}>
      <Grid container item xs={12} xl={12} className={classes.container}>
        <Grid item xs={12} md={2} className={classes.item}>
          <Item name={"Home"} />
        </Grid>
        <Grid item xs={12} md={2} className={classes.item}>
          <Item name={"O nas"} />
        </Grid>
        <Grid item xs={12} md={2} className={classes.item}>
          <Item name={"Kontakt"} />
        </Grid>
        <Grid item xs={12} md={2} className={classes.item}>
          <Item name={"Rośliny"} />
        </Grid>
        <Grid item xs={12} md={2} className={classes.item}>
          <Item name={"Porady"} />
        </Grid>
        <Grid item xs={12} md={2} className={classes.item}>
          <Item name={"Rafał Chuj"} />
        </Grid>
      </Grid>
    </div>
  );
};
export default NavBar;
