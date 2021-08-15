import React, { Suspense } from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./MainPageStyles";
import Footer from "../footer/Footer";
import Banner from "../banner/Banner";
import Home from "../home/Home";
import NavBar from "../navBar/NavBar";
const MainPage = () => {
  const classes = useStyles();
  return (
    <>
      <Banner></Banner>
      <NavBar />
      <Home />
      <Footer></Footer>
    </>
  );
};

export default MainPage;
