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
        position: 'fixed',

    },
    container: {
        minHeight: "60px",
        backgroundColor: "#BFBFBD",
        width: "65%",
        marginLeft: "auto",
        marginRight: "auto",
        fontFamily: "Barlow Condensed",
        fontSize: "32px",
        textAlign: "center"
    },
    back: {
        backgroundColor: "#BFBFBD"
    },
    item: {
        lineHeight: "60px"
    }

}));

export default useStyles;