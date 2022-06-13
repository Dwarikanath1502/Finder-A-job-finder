import React from "react";
import { Link } from "react-router-dom";

function Resources() {
  return (
    <>
      <div style={{ height: "180vh" }}>
        <div
          className="container-fluid d-flex justify-content-center"
          style={{ marginTop: "80px" }}
        >
          <div className="row">
            <div className="col-sm-12">
              <h4>
                <strong>Services we provide to build your career!</strong>
              </h4>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-4">
          <div className="row">
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
          </div>
        </div>

        <div className="container-fluid mt-4">
          <div className="row">
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
                  <h5 className="card-title">Software Development Manager</h5>
                  <p className="card-text">
                    Software development managers are leaders in the technology
                    industry. They are responsible for developing software as
                    well as leading and managing the team involved in
                    development. If your career goal is to work as a software
                    development manager.
                  </p>
                  <Link to="#" class="btn btn-primary">
                    click me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-sm-6">
              <div className="card mb-3 ml-3 mr-3">
                <div className="card-body">
                  <h5 className="card-title">Helps in avoiding job scams</h5>
                  <p className="card-text">
                    Never give out personal information like your social
                    security or bank account number over email or phone. Never
                    take cashier's checks or money orders as a form of payment.
                    ...
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
                  <h5 className="card-title">Databse Engineer cheatsheet</h5>
                  <p className="card-text">
                    A database engineer creates and manages databases for a
                    company or organization. This involves designing and
                    building databases to suit a purpose. The database engineer
                    must also install and configure the database.
                  </p>
                  <Link to="#" class="btn btn-primary">
                    click me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-4">
          <div className="row">
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
                  <h5 className="card-title">Software Development Manager</h5>
                  <p className="card-text">
                    Software development managers are leaders in the technology
                    industry. They are responsible for developing software as
                    well as leading and managing the team involved in
                    development. If your career goal is to work as a software
                    development manager.
                  </p>
                  <Link to="#" class="btn btn-primary">
                    click me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resources;
