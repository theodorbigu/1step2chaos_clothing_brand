import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    //maxWidth: 345, //original width style
    maxWidth: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  media: {
    minHeight: "250px",
    paddingTop: "56.25%", // 16:9
    // objectFit: "cover",
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    flexDirection: "column",
  },
}));
