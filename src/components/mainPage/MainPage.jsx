import React, { Suspense } from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./MainPageStyles";
import Footer from "../footer/Footer";
import Banner from "../banner/Banner";

const MainPage = () => {
  const classes = useStyles();
  return (
    <>
    <Banner></Banner>
    <Typography>siema</Typography>
    <Footer></Footer>
    </>
  );
};

export default MainPage;
