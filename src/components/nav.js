import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
export default class nav extends React.Component {
  AddU = () => {
    this.props.history.push(`/addunit`);
  };
  AddC = () => {
    this.props.history.push(`/set`);
  };
  render() {
    return (
      <div id="header">
        <AppBar position="static">
          <Toolbar>
            <Typography>
              <h1>
                Exam<span>Setter.</span>{" "}
              </h1>
            </Typography>
            <Button onClick={this.AddC}>Add Course</Button>
            <Button onClick={this.AddU}>Add Unit</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
