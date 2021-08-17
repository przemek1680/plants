import {
    makeStyles
} from "@material-ui/core/styles";

import WebFont from "webfontloader";

WebFont.load({
    google: {
        families: ["Dancing Script:300,400,700", "cursive"],
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",

    },
    container: {
        backgroundColor: "#748C7A"
    },
    head: {
        fontSize: "70px",
        fontFamily: "Dancing Script",
        textAlign: "center",
        marginTop: "60px",
    },
    content: {
        margin: "60px",
        textAlign: "justify",
        fontSize: "24px",
        fontFamily: "Dancing Script",

    }, 
    image:{
        backgroundColor:"#022601"
    }
}));

export default useStyles;