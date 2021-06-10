import axios from "axios";
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
import { Link } from "react-router-dom";

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

const program = () => {
  const classes = useStyles();
  const [Program, setProgram] = useState([]);
  const [search, setSearch] = useState("");
  const handleClick = () => {
    console.log("goog");
  };
  const getProgramData = async () => {
    try {
      const data = await axios.get(
        "http://makeup-api.herokuapp.com/api/v1/program.json?brand=maybelline"
      );
      console.log(data.data);
      setProgram(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProgramData();
  }, []);
  return (
    <div className="App" style={{ maxWidth: 1054, marginLeft: "300px" }}>
      <h1>program</h1>
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
              <StyledTableCell>Program Name</StyledTableCell>
              <StyledTableCell align="right">select</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Program.filter((program) => {
              if (search == "") {
                return program;
              } else if (
                program.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return program;
              }
            }).map((program) => {
              return (
                <StyledTableRow key={program.id}>
                  <StyledTableCell component="th" scope="row">
                    <Link to="/set" onClick={handleClick()}>
                      {program.name}
                    </Link>
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
export default program;
