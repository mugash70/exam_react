import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  CardActions,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  FormControl,
  InputLabel,
  Select
} from "@material-ui/core";
import { AddIcon, Fab } from "@material-ui/icons";
// import Fab from '@material-ui/icons'
import { getForUnits } from "../actions/add";
class addUnits extends React.Component {
  State: {
    page: "",
    setPage: "",
    rowsPerPage: "",
    setRowsPerPage: ""
  };
  createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }
  rows = [
    this.createData("India", "IN", 1324171354, 3287263),
    this.createData("China", "CN", 1403500365, 9596961),
    this.createData("Italy", "IT", 60483973, 301340),
    this.createData("United States", "US", 327167434, 9833520),
    this.createData("Canada", "CA", 37602103, 9984670),
    this.createData("Australia", "AU", 25475400, 7692024),
    this.createData("Germany", "DE", 83019200, 357578),
    this.createData("Ireland", "IE", 4857000, 70273),
    this.createData("Mexico", "MX", 126577691, 1972550),
    this.createData("Japan", "JP", 126317000, 377973),
    this.createData("France", "FR", 67022000, 640679),
    this.createData("United Kingdom", "GB", 67545757, 242495),
    this.createData("Russia", "RU", 146793744, 17098246),
    this.createData("Nigeria", "NG", 200962417, 923768),
    this.createData("Brazil", "BR", 210147125, 8515767)
  ];
  columns = [
    { id: "school", label: "School", minWidth: 170 },
    { id: "program", label: "Program", minWidth: 100 },
    {
      id: "year",
      label: "Year",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US")
    }
  ];

  handleChangePage = (event, newPage) => {
    this.setPage(newPage);
  };
  handleChangeRowsPerPage = (event) => {
    this.setRowsPerPage(+event.target.value);
    this.setPage(0);
  };
  ///
  componentDidMount() {
    console.log(getForUnits());
  }
  setOpen = () => {};
  setAge = () => {};
  handleChange = (event) => {
    this.setAge(Number(event.target.value) || "");
  };

  handleClickOpen = () => {
    this.setOpen(true);
  };

  handleClose = () => {
    this.setOpen(false);
  };

  render() {
    var ListZoteProgram = (
      <React.Fragment>
        <div>
          <Paper>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {this.columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.rows
                    .slice(
                      this.page * this.rowsPerPage,
                      this.page * this.rowsPerPage + this.rowsPerPage
                    )
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={this.row.code}
                        >
                          {this.columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={this.rows.length}
              rowsPerPage={this.rowsPerPage}
              page={this.page}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </React.Fragment>
    );

    return (
      <div>
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
            <h2>Add units</h2>
            <Typography color="textSecondary" gutterBottom></Typography>
            <Typography variant="h5" component="h2">
              <Grid>{ListZoteProgram}</Grid>
              <br />
              <Grid>
                <TextField
                  id="outlined-basic"
                  label="Units in the program"
                  variant="outlined"
                  name="program"
                  style={{ width: "50%" }}
                />
              </Grid>
              {/* <AddIcon />
              <Fab
               size="small" 
               color="secondary" 
               aria-label="add" ><AddIcon/></Fab> */}
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
      </div>
    );
  }
}
export default addUnits;
