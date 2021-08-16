import {
    makeStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',

    },
    container: {
        width: "100%",
        backgroundColor: "#48594D",
    },
    item: {
        textAlign: "center",
        color: "white",
        marginLeft: "auto",
        marginRight: "auto",
        minHeight: "40px",
    },

}));

export default useStyles;