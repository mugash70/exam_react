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
    // var { school, program } = this.state;
    // var user = { school, program };
    // console.log(user);
    // this.(user);\
    this.AddC();
  };
  AddC = () => {
    this.props.history.push(`/addunit`);
  };
  render() {
    var CourseCard = (
      <React.Fragment>
        <Card
          variant="outlined"
          style={{
            position: "relative",
            maxWidth: 1045,
            marginLeft: "16%",
            marginTop: "10%"
          }}
        >
          <CardContent>
            {/* add Course */}
            <form onSubmit={this.handleSubmit} style={{ marginLeft: "30%" }}>
              <h4>Add School to procced</h4>

              <Typography color="textSecondary" gutterBottom></Typography>
              <Typography variant="h5" component="h2">
                <Grid>
                  <TextField
                    id="outlined-basic"
                    label="school:(Pure and Applied Science)"
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
                    label="program:(Bs.IT...)"
                    variant="outlined"
                    name="program"
                    onChange={this.handleInputChange}
                    style={{ width: "50%" }}
                  />
                </Grid>
                <br />
              </Typography>

              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  type="submit"
                  style={{ marginLeft: "100px" }}
                >
                  Countinue
                </Button>
              </CardActions>
            </form>
          </CardContent>
        </Card>
      </React.Fragment>
    );
    return <div>{CourseCard}</div>;
  }
}
export default addCourse;
