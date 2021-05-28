import axios from "axios";
import { findErrors } from "./error";
export var addcourses = ({ school, program, year }) => {
  var course = { school, program, year };
  axios
    .post("/api/addcourse", course)
    .then((res) => dispatch({ payload: res.data }))
    .catch((err) =>
      dispatch(findErrors(err.response.data, err.response.status))
    );
};
export var getForUnits = () => {
  try {
    axios.get("/api/addcourse").then((req, res) => {
      console.log(res);
    });
  } catch (error) {
    console.log(error);
  }
};
export var addUnit = ({ semester, units }) => {
  var Units = { semester, units };
  try {
    axios.post("/api/addcourse/units", Units).then((req, res) => {
      console.log(res);
    });
  } catch (error) {
    console.log(error);
  }
};
