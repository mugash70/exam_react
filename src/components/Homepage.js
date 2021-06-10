import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Collapse,
  Typography,
  Button
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import HomeCard from "./Home";
class Homepage extends React.Component {
  useStyles = (makeStyles) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontFamily: "Nunito"
    },
    appbar: {
      background: "none"
    },
    appbarWrapper: {
      width: "80%",
      margin: "0 auto"
    },
    appbarTitle: {
      flexGrow: "1"
    },
    icon: {
      color: "#fff",
      fontSize: "2rem"
    },
    colorText: {
      color: "#5AFF3D"
    },
    container: {
      textAlign: "center"
    },
    title: {
      color: "#fff",
      fontSize: "4.5rem"
    },
    goDown: {
      color: "#5AFF3D",
      fontSize: "4rem"
    }
  });

  AddU = () => {
    this.props.history.push(`/addcourse`);
  };
  AddC = () => {
    this.props.history.push(`/schools`);
  };

  render() {
    this.state = {
      checked: false
    };
    this.classes = this.useStyles();

    var { checked } = this.state;

    var home2 = (
      <React.Fragment>
        <div id="header">
          <AppBar position="static">
            <Toolbar>
              <Typography>
                <h3>
                  Exam<span>Setter.</span>{" "}
                </h3>
              </Typography>
              <Button onClick={this.AddC}>Set Exam</Button>

              <Button onClick={this.AddU}>Add school and Unit</Button>
            </Toolbar>
          </AppBar>

          <Collapse
            in={checked}
            {...(checked ? { timeout: 1000 } : {})}
            collapsedHeight={50}
          >
            <div className={this.classes.container}>
              <h1 className={this.classes.title}>
                Welcome to blah blah........................ <br />
                My<span className={this.classes.colorText}>Island.</span>
              </h1>
              <Scroll to="place-to-visit" smooth={true}>
                <IconButton>
                  <ExpandMoreIcon className={this.classes.goDown} />
                </IconButton>
              </Scroll>
            </div>
          </Collapse>
        </div>
      </React.Fragment>
    );
    return (
      <div className="homeP">
        {/* {home} */}
        {home2}
        <HomeCard />
      </div>
    );
  }
}
export default Homepage;
