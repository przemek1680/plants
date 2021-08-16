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
        width: "100%"
    },
    welcome: {
        textAlign: "center",
        marginTop: "175px",
        fontFamily: "Dancing Script",
        fontSize: "65px"
    },
    desc: {
        marginBottom: "175px",
        textAlign: "center",
        fontFamily: "Dancing Script",
        fontSize: "45px"
    }
}));

export default useStyles;