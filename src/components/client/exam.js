import React, { useState, useEffect } from "react";
import logo from "./images/1.png";
import axios from "axios";
import { saveAs } from "file-saver";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

const ControlledInputs = (props) => {
  const [question, setquestion] = useState({ quiz: "" });
  const [exam, setExam] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setquestion({ ...question, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.quiz) {
      const newquestion = { ...question, id: new Date().getTime().toString() };
      setExam([...exam, newquestion]);
      setquestion({ quiz: "" });
    }
  };
  var [details, getDetails] = useState("");

  var handleQuestion = () => {
    createAndDownloadPdf();
    var ID = props.match.params.id;
    axios
      .post(`/user/send_quiz/${ID}`, exam)
      .then((res) => console.log(res))
      .then(createAndDownloadPdf())
      .catch((err) => console.log(err));
  };
  // post pdf
  var createAndDownloadPdf = () => {
    console.log(details);
    axios
      .post(`/create-pdf`, details)
      .then(() => axios.get(`/fetch-pdf`, { responseType: "blob" }))
      .then((res) => {
        var pdfBlob = new Blob([res.data], { type: "application/pdf" });

        var myReader = new FileReader();
        myReader.onload = function (event) {
          console.log(JSON.stringify(myReader.result.data));
        };
        saveAs(pdfBlob, "Examination.pdf");
      });
  };

  var getAllDetails = (Id) => {
    var Id = props.match.params.id;
    axios
      .get(`/user/${Id}`)
      .then((rep) => {
        var year = rep.data;
        getDetails(year);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllDetails();
  }, []);
  return (
    <>
      <div className="split left">
        <div className="row s12 m8">
          <div className="card" style={{ float: "none", padding: "40px" }}>
            <div className="card-content">
              <form>
                <div className="form-control">
                  <label htmlFor="quiz" style={{ color: "black" }}>
                    <h4>Write Question : </h4>
                  </label>
                  <textarea
                    type="text"
                    id="quiz"
                    name="quiz"
                    value={question.quiz}
                    onChange={handleChange}
                    style={{ height: "400px" }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary blue"
                  onClick={handleSubmit}
                >
                  Add Question
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="split right">
        <div className="row s12 m8">
          <div className="card" style={{ float: "none", padding: "40px" }}>
            <div className="card-image">
              <img className="img2" src={logo} alt="3" />
            </div>
            <br></br>
            <div>
              <h6 style={{ marginLeft: "290px" }}>
                {details.academic_year} Academic year
              </h6>
              <h6 style={{ marginLeft: "370px" }}>{details.type_exam} </h6>
              <h6 style={{ marginLeft: "150px" }}>{details.cat_program} </h6>
              <h6 style={{ marginLeft: "370px" }}>{details.unit_code} </h6>
              <span style={{ float: "left" }}>DATE:{details.date}</span>
              <span style={{ float: "right" }}>TIME:{details.time}</span>
              {/* <br /> */}

              <h4>
                ..........................................................................................................................
              </h4>
            </div>
            <div className="card-content">
              <div className="exams_list">
                {exam.map((question) => {
                  const { id, quiz } = question;
                  return (
                    <div key={id} className="item">
                      <h5>
                        <li>{quiz}</li>
                      </h5>
                    </div>
                  );
                })}
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary blue"
                    onClick={handleQuestion}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlledInputs;
