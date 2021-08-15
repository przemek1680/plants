import { Typography, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./HomeStyles";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container item xs={12} xl={12} className={classes.container}>
        HOME
      </Grid>
    </>
  );
};
export default Home;
