import {
    makeStyles
} from "@material-ui/core/styles";

import WebFont from "webfontloader";

WebFont.load({
    google: {
        families: ["Barlow Condensed:300,400,700", "cursive"],
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
    },
    container: {
        width: "100%"
    },
    welcome: {
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Barlow Condensed",
        fontSize: "65px"
    },
    desc: {
        marginBottom: "100px",
        textAlign: "center",
        fontFamily: "Barlow Condensed",
        fontSize: "45px"
    }
}));

export default useStyles;