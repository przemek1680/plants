import { Typography, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./BannerStyles";

const Banner = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.banner}>Plants</Typography>
    </>
  );
};
export default Banner;
