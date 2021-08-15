import { Typography, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./FooterStyles";

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container itemxs={12} xl={12} className={classes.container}>
      <Grid item className={classes.item}>
        <Typography>
          {"Copyright © "}
          {new Date().getFullYear()} P. Kotala & R. Howis
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Footer;
