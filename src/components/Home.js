import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./cardImage";
import examtemp from "./homeimages";
import useWindowPosition from "../actions/useWindowsPosition";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column"
    }
  }
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard examtemp={examtemp[0]} checked={checked} />
      <ImageCard examtemp={examtemp[1]} checked={checked} />
    </div>
  );
}
