import { Typography, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./AboutStyles";
import FittedImage from "react-fitted-image";
import image2 from "../../Image/2.jpg";
const About = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container item xs={12} className={classes.container}>
        <Grid item xs={12} md={6}>
          <Typography className={classes.head}>O nas</Typography>
          <Typography className={classes.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nulla
            lacus. Nullam ac justo tincidunt, pellentesque diam id, eleifend
            velit. Morbi at ex sit amet erat porttitor tincidunt finibus quis
            lectus. Etiam scelerisque, enim vitae aliquet ullamcorper, urna est
            molestie velit, a venenatis odio eros sagittis tortor. Nulla
            vehicula, erat pretium laoreet suscipit, dolor neque tincidunt
            felis, quis porttitor nisi dui at dui. Etiam quis tortor blandit,
            egestas urna in, tempus ex. Aliquam dictum pretium nibh nec
            suscipit.Quisque nec leo consectetur lectus lacinia dictum. Fusce
            tempor tortor et arcu varius rutrum. Donec sodales erat ac convallis
            dignissim. Duis hendrerit placerat ante, vitae malesuada nisl
            commodo eu. Suspendisse aliquet finibus imperdiet. Nam ac dapibus
            velit, vel mollis velit. Vestibulum iaculis egestas nisl. Donec
            purus nisl, faucibus et dapibus ut, volutpat ac metus.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <FittedImage fit="contain" src={image2} />
        </Grid>
      </Grid>
    </>
  );
};
export default About;
