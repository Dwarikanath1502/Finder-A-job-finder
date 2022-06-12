import React from "react";
import { Link } from "react-router-dom";
import Bot from "./Bot";

function Resources() {
  return (
    <>
      <div style={{ backgroundColor: "grey", height: "130vh" }}>
        <div className="container-fluid d-flex justify-content-center my-2">
          <h2 style={{ marginTop: "70px" }}>
            <strong>Resouces which help you to get a job</strong>
          </h2>
        </div>
        <div className="d-flex justify-content-center my-5">
          <div className="row ">
            <div className="col-sm-6">
              <div className="card mb-3 ml-3 mr-3">
                <div className="card-body">
                  <h5 className="card-title">Build Your Resume</h5>
                  <p className="card-text">
                    It details your skills and training, work experience, and
                    education, and, most importantly, the accomplishments you
                    have made with past employers. It should also inform the
                    employer of your career objective.
                  </p>
                  <Link
                    to={{ pathname: "https://buildresume.learncodeonline.in/" }}
                    target="_blank"
                    class="btn btn-primary"
                  >
                    click me
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card mb-3 ml-3 mr-3">
                <div className="card-body">
                  <h5 className="card-title">SDE - 1 Sheet</h5>
                  <p className="card-text">
                    Software development engineers (SDE) work in a range of
                    industries to apply the principles and techniques of
                    computer engineering, information analysis, and computer
                    science to design, build, and develop their employers'
                    computer systems and software.
                  </p>
                  <Link to="#" class="btn btn-primary">
                    click me
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card mb-3 ml-3 mr-3">
                <div className="card-body">
                  <h5 className="card-title">SDE-2 Sheet</h5>
                  <p className="card-text">
                    When you are within a company, you get opportunities to
                    solve problems and contribute to showcase yourself and grow
                    the knowledge. It may take upto 1-3 years to move up from
                    SDE I to SDE II.
                  </p>
                  <Link to="#" class="btn btn-primary">
                    click me
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card mb-3 ml-3 mr-3">
                <div className="card-body">
                  <h5 className="card-title">Software Development Manager</h5>
                  <p className="card-text">
                    Software development managers are leaders in the technology
                    industry. They are responsible for developing software as
                    well as leading and managing the team involved in
                    development. If your career goal is to work as a software
                    development manager,
                  </p>
                  <Link to="#" class="btn btn-primary">
                    click me
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card mb-3 ml-3 mr-3">
                <div className="card-body">
                  <h5 className="card-title">Avoid job scams</h5>
                  <p className="card-text">
                    Never give out personal information like your social
                    security or bank account number over email or phone. Never
                    take cashier's checks or money orders as a form of payment.
                    ...
                  </p>
                  <Link to="#" class="btn btn-primary">
                    click me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Bot />
      </div>
    </>
  );
}

export default Resources;
