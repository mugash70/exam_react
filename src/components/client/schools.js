import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { schooldata } from "../test";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

const schools = () => {
  const classes = useStyles();
  const [school, setSchool] = useState([]);
  const [search, setSearch] = useState("");

  const getSchoolData = async () => {
    try {
      const data = await axios.get(
        "http://makeup-api.herokuapp.com/api/v1/Schools.json?brand=maybelline"
      );
      console.log(data.data);
      setSchool(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSchoolData();
  }, []);
  return (
    <div className="App" style={{ maxWidth: 1054, marginLeft: "300px" }}>
      <h1>Schools</h1>
      <TextField
        type="text"
        placeholder="Search here"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>School Name</StyledTableCell>
              <StyledTableCell align="right">select</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schooldata
              .filter((data) => {
                if (search == "") {
                  return data;
                } else if (
                  data.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return data;
                }
              })
              .map((data) => {
                return (
                  <StyledTableRow key={data.id}>
                    <StyledTableCell component="th" scope="row">
                      <Link to="/programs">{data.name}</Link>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default schools;
