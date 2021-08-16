import { makeStyles } from "@material-ui/core/styles";

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
  banner: {
    fontSize: "42px",
    fontFamily: "Dancing Script",
    textAlign: "center",
  },
}));

export default useStyles;
