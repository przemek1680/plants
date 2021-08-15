import { Typography, Grid } from '@material-ui/core';
import React from 'react';
import useStyles from './BannerStyles';

const Banner = () => {
    const classes = useStyles();
    return (
        <>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_Lcb-lsxMuER2-yP2GoV_kOZm4-wyaVzfa3fAXTSUhO64FCaMoBLyuTA0B56TBA1O5c&usqp=CAU"}></img>
        <Typography>siema</Typography>
        </>
    );
};
export default Banner;