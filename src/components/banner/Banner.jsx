import { Typography, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./BannerStyles";

const Banner = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.banner}>Syngonium.pl</Typography>
    </>
  );
};
export default Banner;
