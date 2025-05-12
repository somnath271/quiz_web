import React, { useContext } from "react";
import DataContext from "../context/dataContext";

const Start = () => {
  const { startQuiz, showStart } = useContext(DataContext);
  return (
    <section
      className="text-white text-center bg-dark"
      style={{ display: `${showStart ? "block" : "none"}` }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-8">
            <h1 className="text-primary">Welcome to basic React JS Quiz</h1>
            <button
              onClick={startQuiz}
              className="btn btn-secondary px-4 py-2 fw-bold"
            >
              <h5>Start Quiz</h5>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
