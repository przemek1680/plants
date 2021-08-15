import {
    makeStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',

    },
    container: {
        width: "100%",
        backgroundColor: "#014034",
    },
    image: {
        maxWidth: "100%",
    }

}));

export default useStyles;