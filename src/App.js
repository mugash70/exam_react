import React from "react";
import "./styles.css";
import AddC from "./components/addCourse";
import AddU from "./components/addUnits";
import Home from "./components/Homepage";
import Exams_Comp from "./components/client/exam";
import Input from "./components/client/submitL";
import programs from "./components/client/program";
import schools from "./components/client/schools";
import unitCode from "./components/client/unitsCode";
import i from "./components/images/12.jpg";
import { Route, Switch, BrowserRouter } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${i})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          margin: "0",
          width: "100vw",
          height: "100vh"
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/addcourse" component={AddC} />
            <Route path="/addunit" component={AddU} />
            <Route exact path="/set/:id" component={Exams_Comp} />
            <Route exact path="/set" component={Input} />
            <Route exact path="/schools" component={schools} />
            <Route exact path="/programs" component={programs} />
            <Route exact path="/units" component={unitCode} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
