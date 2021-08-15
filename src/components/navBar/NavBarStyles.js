import {
    makeStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',

    },
    container: {
        minHeight: "60px",
        backgroundColor: "red"
    },

}));

export default useStyles;