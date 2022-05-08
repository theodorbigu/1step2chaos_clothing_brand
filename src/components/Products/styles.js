import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "rgba(0, 0, 0, 0.79)",
    padding: theme.spacing(20),
  },
  root: {
    flexGrow: 1,
  },
  backgroundVideo: {
    height: "100vh",
    width: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    zIndex: "-2",
    objectFit: "cover",
  },
  backgroundLayer: {
    backgroundColor: "black",
    height: "100vh",
    width: "100%",
    left: 0,
    top: 0,
    position: "fixed",
    zIndex: "-1",
    objectFit: "cover",
  },
}));
