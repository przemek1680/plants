import { Typography, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./HomeStyles";
import image1 from "../../Image/3.jpg";
import FittedImage from "react-fitted-image";
import Desc from "../desc/Desc";
import About from "../about/About";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container item xs={12} xl={12} className={classes.container}>
        <FittedImage fit="contain" src={image1} className={classes.photo}/>
        <Desc />
        <About />
      </Grid>
    </>
  );
};
export default Home;
