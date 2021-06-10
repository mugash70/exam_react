import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  CardActions,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  InputBase
} from "@material-ui/core";
import { SearchIcon } from "@material-ui/icons";
import "materialize-css/dist/css/materialize.min.css";
import { getForUnits } from "../actions/add";
class addUnits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 10
    };
  }
  createData(School, program) {
    return { School, program };
  }
  rows = [
    this.createData("India", "IN", "vduvgsdvctsdg"),
    this.createData("China", "CN"),
    this.createData("Italy", "IT"),
    this.createData("United States", "US"),
    this.createData("Canada", "CA"),
    this.createData("Australia", "AU"),
    this.createData("Germany", "DE"),
    this.createData("Ireland", "IE"),
    this.createData("Mexico", "MX"),
    this.createData("Japan", "JP"),
    this.createData("France", "FR"),
    this.createData("United Kingdom", "GB"),
    this.createData("Russia", "RU"),
    this.createData("Nigeria", "NG"),
    this.createData("Brazil", "BR")
  ];
  columns = [
    {
      id: "school",
      label: "School",
      minWidth: 170,
      format: (value) => value.toLocaleString("en-US")
    },
    { id: "program", label: "Program", minWidth: 100 }
  ];

  handleChangePage = (newPage) => {
    this.setPage(newPage);
  };
  handleChangeRowsPerPage = (e) => {
    // this.setRowsPerPage(event.target.value);
    this.setState({ [e.target.name]: e.target.value });
    this.setPage(0);
  };

  handleChange = (e) => {
    // this.setRowsPerPage(event.target.value);
    this.setState({ [e.target.name]: e.target.value });
    this.setPage(0);
  };

  ///
  componentDidMount() {
    console.log(getForUnits());
  }

  //add
  setOpen = () => {};
  setPage = () => {};

  handleClickOpen = () => {
    this.setOpen(true);
  };

  handleClose = () => {
    this.setOpen(false);
  };
  handleSub = () => {
    //
    var { school, program, year, sem, units } = 3;
    this.AddC();
  };
  AddC = () => {
    this.props.history.push(`/`);
  };
  render() {
    console.log(this.row);
    var ListZoteProgram = (
      <React.Fragment>
        <table className="striped">
          <thead>
            <tr>
              <th>School</th>
              <th>Program</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>pure and applied</td>
              <td>cs</td>

              <Button
                size="small"
                color="primary"
                onClick="f"
                style={{ marginLeft: "50%" }}
                variant="contained"
              >
                select
              </Button>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );

    return (
      <div>
        <form onSubmit={this.handleSub}>
          {/* add Course */}
          <br />
          <br />

          <Card
            variant="outlined"
            style={{
              position: "relative",
              maxWidth: 1045,
              marginLeft: "16%"
            }}
          >
            <CardContent>
              <h4>Add units</h4>
              <Typography color="textSecondary" gutterBottom></Typography>
              <Typography variant="h5" component="h2">
                <Grid>{ListZoteProgram}</Grid>

                <br />
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Semester
                  </InputLabel>

                  <Select
                    native
                    name="semester"
                    onChange={this.handleChange}
                    label="semester"
                    inputProps={{
                      name: "semester",
                      id: "outlined-age-native-simple"
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>semester 1</option>
                    <option value={20}>semester 2</option>
                    <option value={30}>semester 3</option>
                  </Select>
                </FormControl>
                <br />
                <br />
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-age-native-simple">
                    year
                  </InputLabel>

                  <Select
                    native
                    name="semester"
                    onChange={this.handleChange}
                    label="semester"
                    inputProps={{
                      name: "semester",
                      id: "outlined-age-native-simple"
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>year 1</option>
                    <option value={20}>year 2</option>
                    <option value={30}>year 3</option>
                  </Select>
                </FormControl>
                <br />
                <br />
                <Grid>
                  <TextField
                    id="outlined-basic"
                    label="Units in the program"
                    variant="outlined"
                    name="program"
                    style={{ width: "50%" }}
                  />
                  <Button class="btn-floating " style={{ marginLeft: "20px" }}>
                    <i class="material-icons">add</i>
                  </Button>
                </Grid>
                <div
                  className="card"
                  style={{
                    float: "right",
                    marginTop: "-250px",
                    marginLeft: "260px"
                  }}
                >
                  <div className="card-content"></div>
                  <div className="card-tabs">
                    <ul className="tabs tabs-fixed-width">
                      <li className="tab">
                        <a href="#test4">Units entered</a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-content grey lighten-4">
                    <div id="test4">unit_data</div>
                  </div>
                </div>
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                type="submit"
                style={{ marginLeft: "50%" }}
                variant="contained"
              >
                SUBMIT
              </Button>
            </CardActions>
          </Card>
        </form>
      </div>
    );
  }
}
export default addUnits;
