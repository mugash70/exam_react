import React from "react";
import { Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
class Homepage extends React.Component {
  render() {
    var home = (
      <React.Fragment>
        <Toolbar style={{ marginLeft: "80%", position: "relative" }}>
          <h3>
            {" "}
            <NavLink to="/addcourse">Add Course</NavLink>
          </h3>
          <h3>
            <NavLink to="/addunit">Add Unit</NavLink>
          </h3>
        </Toolbar>
      </React.Fragment>
    );
    return <div className="homeP">{home}</div>;
  }
}
export default Homepage;
