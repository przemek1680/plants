import {
    makeStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',

    },
    container: {
        width: "100%",
        minHeight: "800px",
    },
    back: {
        maxWidth: "100%",
        width: "auto",
        height: "auto"
    }

}));

export default useStyles;