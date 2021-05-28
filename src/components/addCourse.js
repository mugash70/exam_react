import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  CardActions,
  Button,
  Grid
} from "@material-ui/core";
class addCourse extends React.Component {
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    var { school, program, year } = this.state;
    var user = { school, program, year };
    console.log(user);
    // this.(user);
  };
  render() {
    var CourseCard = (
      <React.Fragment>
        {/* add Course */}
        <form onSubmit={this.handleSubmit}>
          <Card
            variant="outlined"
            style={{
              position: "relative",
              maxWidth: 645,
              marginLeft: "30%"
            }}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {/* <span>Add your school of choice</span> */}
              </Typography>
              <Typography variant="h5" component="h2">
                <Grid>
                  <TextField
                    id="outlined-basic"
                    label="school e.g. (Pure and Applied Science)"
                    variant="outlined"
                    name="school"
                    style={{ width: "50%" }}
                    onChange={this.handleInputChange}
                  />
                </Grid>
                <br />
                <Grid>
                  <TextField
                    id="outlined-basic"
                    label="program e.g. (Bs.information Technology...)"
                    variant="outlined"
                    name="program"
                    onChange={this.handleInputChange}
                    style={{ width: "50%" }}
                  />
                </Grid>
                <br />
                <TextField
                  id="outlined-basic"
                  label="Year e.g. (y1,y2,y3 ...etc)"
                  variant="outlined"
                  name="year"
                  onChange={this.handleInputChange}
                  style={{ width: "50%" }}
                />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </CardActions>
          </Card>
        </form>
      </React.Fragment>
    );
    return <div>{CourseCard}</div>;
  }
}
export default addCourse;
