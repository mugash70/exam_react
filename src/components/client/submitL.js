import { Component, Fragment } from "react";
import he from "./images/88.jpg";
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select
} from "@material-ui/core";
import axios from "axios";
import "materialize-css/dist/css/materialize.min.css";
class submitL extends Component {
  state = {
    name: "",
    academic_year: "",
    type_exam: "",
    cat_program: "",
    unit_code: "",
    date: "",
    time: "",
    Data: []
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  AddUser = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(`/user`, this.state)
      .then((res) => {
        var Id = res.data.id;
        this.setState({ Id });
        this.onSelect(Id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onSelect(Id) {
    this.props.history.push(`/set/${Id}`);
  }
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    var { Id } = this.state;

    var Info = (
      <Fragment>
        <div
          className="d-flex justify-content-center ml-4"
          style={{
            float: "none",
            padding: "200px",
            marginTop: "-150px",
            marginLeft: "200px",
            position: "relative",
            maxWidth: 1045
            // backgroundColor: "grey"
          }}
        >
          <div className="col s12 m8">
            <Card
              style={{
                position: "relative",
                maxWidth: 1045
              }}
            >
              <CardContent>
                <h3 className="col d-flex justify-content-center">
                  Fill in the Data to procced:
                </h3>
                <form onSubmit={this.AddUser} style={{ margin: "100px" }}>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        id="name"
                        type="text"
                        onChange={this.handleInputChange}
                        name="name"
                        required
                      />
                      <label htmlFor="name" style={{ color: "black" }}>
                        Lecture's name:
                      </label>
                    </div>
                  </div>
                  <FormControl
                    variant="outlined"
                    style={{ marginLeft: "100px" }}
                  >
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Type of Exam
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
                      style={{ maxWidth: 1045 }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>CAT 1</option>
                      <option value={20}>CAT 2</option>
                      <option value={30}>MAIN EXAM</option>
                    </Select>
                  </FormControl>

                  <br />
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        id="date"
                        type="date"
                        onChange={this.handleInputChange}
                        name="date"
                        required
                      />
                      <label htmlFor="date" style={{ color: "black" }}>
                        Date :
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        id="time"
                        type="time"
                        onChange={this.handleInputChange}
                        name="time"
                        required
                      />
                      <label htmlFor="time" style={{ color: "black" }}>
                        Time:
                      </label>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary blue col d-flex justify-content-center"
                    type="submit"
                  >
                    Set your Examination
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Fragment>
    );
    return (
      <div
        style={{
          backgroundImage: `url(${he} )`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        {/* <Navv /> */}
        {Info}
      </div>
    );
  }
}
export default submitL;
