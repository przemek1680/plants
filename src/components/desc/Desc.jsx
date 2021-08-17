import { Typography, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./DescStyles";

const Desc = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container item xs={12} className={classes.container}></Grid>
      <Grid item xs={12}>
        <Typography className={classes.welcome}>Cześć!</Typography>
        <Typography className={classes.desc}>
          Miło, ze jesteś :)
        </Typography>
      </Grid>
    </>
  );
};
export default Desc;
