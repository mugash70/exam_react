import React from "react";
import "./styles.css";
import AddC from "./components/addCourse";
import AddU from "./components/addUnits";
import Home from "./components/Homepage";
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
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
