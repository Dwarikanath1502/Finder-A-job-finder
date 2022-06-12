import React from "react";
import Bot from "./Bot";

function Jobs() {
  return (
    <>
    <div style={{backgroundColor:'grey'}}>
      <div className="container-fluid">
        {/* Top bar */}
        <div
          classNameName="d-flex justify-content-center"
          style={{ marginTop: "73px", marginBottom: "30px" }}
        >
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <i class="fa-solid fa-2xl fa-magnifying-glass"></i>
            <h6 className="ml-5 font-weight-bold">
              Showing results for jobs...
            </h6>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto"></ul>
              <div>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "#4A90E2",
                    borderRadius: "20px",
                  }}
                  className="btn btn-outline my-2 my-sm-0"
                  type="submit"
                >
                  save Alert
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <div class="card mb-3">
              <div class="card-body">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6">
                      <h4>All Filters</h4>
                    </div>
                    <div className="col-sm-6">
                      <button type="button" class="btn btn-sm btn-light">
                        <strong>Apply filters</strong>
                      </button>
                    </div>
                  </div>
                </div>

                <hr style={{ borderWidth: "5px", borderColor: "#000000" }} />
                
                <h5 class="card-title">Department</h5>
                <p class="card-text">
                  {/* inputgroups */}
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <p className="ml-2 mt-1 font-weight-bold">
                      Computer Science
                    </p>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <p className="ml-2 mt-1 font-weight-bold">
                      Information & Tech
                    </p>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <p className="ml-2 mt-1 font-weight-bold">Data Science</p>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <p className="ml-2 mt-1 font-weight-bold">
                      Software Engineering
                    </p>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <p className="ml-2 mt-1 font-weight-bold">Teaching</p>
                  </div>
                </p>
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">Work From Home</h5>
                <p class="card-text">
                  {/* inputgroups */}
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <p className="ml-2 mt-1 font-weight-bold">
                      WFH during COVID
                    </p>
                  </div>
                </p>
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">Location</h5>
                <p class="card-text">
                  {/* inputgroups */}
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <p className="ml-2 mt-1 font-weight-bold">Banglore</p>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <p className="ml-2 mt-1 font-weight-bold">Chennai</p>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <p className="ml-2 mt-1 font-weight-bold">Hyderabad</p>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <p className="ml-2 mt-1 font-weight-bold">Delhi</p>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <p className="ml-2 mt-1 font-weight-bold">Jaipur</p>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <p className="ml-2 mt-1 font-weight-bold">Kolkata</p>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <p className="ml-2 mt-1 font-weight-bold">Noida</p>
                  </div>
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Top companies</h5>
                <p class="card-text">
                  {/* inputgroups */}
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <p className="ml-2 mt-1 font-weight-bold">Google</p>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <p className="ml-2 mt-1 font-weight-bold">Amazon</p>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <p className="ml-2 mt-1 font-weight-bold">Facebook</p>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <p className="ml-2 mt-1 font-weight-bold">IBM</p>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <p className="ml-2 mt-1 font-weight-bold">Byjus</p>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <p className="ml-2 mt-1 font-weight-bold">Netflix</p>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <p className="ml-2 mt-1 font-weight-bold">TCS</p>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-7 ml-5">
            <div class="card">
              <div class="card-header">
                Openings For MS dynamics CRM developer at Mindtree
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  Openings For MS dynamics CRM developer at Mindtree
                  <i
                    class="fa-brands fa-2xl fa-google-drive"
                    style={{ marginLeft: "125px", color: " blue" }}
                  ></i>
                </h5>
                <p class="card-text">
                  Skills and experience:
                  <ul>
                    <li>Dynamic CRM</li>
                    <li>Database</li>
                    <li>Apache spark</li>
                    <li>Laravel</li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="card mt-2">
              <div class="card-header">Openings at Amazon</div>
              <div class="card-body">
                <h5 class="card-title">
                  Openings For Software Development Enginner at Amazon
                  <i
                    class="fa-brands fa-2xl fa-amazon"
                    style={{ marginLeft: "125px", color: "black" }}
                  ></i>
                </h5>
                <p class="card-text">
                  Skills and experience:
                  <ul>
                    <li>Django</li>
                    <li>React</li>
                    <li>Apache spark</li>
                    <li>Laravel</li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="card mt-2">
              <div class="card-header">Openings at Microsoft</div>
              <div class="card-body">
                <h5 class="card-title">
                  Openings for Database Analyst role at Microsoft
                  <i
                    class="fa-brands fa-2xl fa-microsoft"
                    style={{ marginLeft: "165px", color: " blue" }}
                  ></i>
                </h5>
                <p class="card-text">
                  Skills and experience:
                  <ul>
                    <li>Dynamic CRM</li>
                    <li>Database</li>
                    <li>Apache spark</li>
                    <li>Laravel</li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="card mt-2">
              <div class="card-header">Openings at AWS</div>
              <div class="card-body">
                <h5 class="card-title">
                  Openings for cloud scientist/ clous enfineer at AWS
                  <i
                    class="fa-brands fa-2xl fa-aws"
                    style={{ marginLeft: "125px", color: " black" }}
                  ></i>
                </h5>
                <p class="card-text">
                  Skills and experience:
                  <ul>
                    <li>Cloud Knowledge</li>
                    <li>AWS</li>
                    <li>DBMS</li>
                    <li>Serverless</li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="card mt-2">
              <div class="card-header">Openings for SDE at Google</div>
              <div class="card-body">
                <h5 class="card-title">
                  OpeningSoftware Development engineer role at google
                  <i
                    class="fa-brands fa-2xl fa-google"
                    style={{ marginLeft: "125px", color: " violet" }}
                  ></i>
                </h5>
                <p class="card-text">
                  Skills and experience:
                  <ul>
                    <li>DSA</li>
                    <li>DBMS</li>
                    <li>fluent spesking</li>
                    <li>SEO</li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="card mt-2">
              <div class="card-header">
                Openings For MS dynamics CRM developer at Mindtree
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  Openings For MS dynamics CRM developer at Mindtree
                  <i
                    class="fa-brands fa-2xl fa-google-drive"
                    style={{ marginLeft: "125px", color: " green" }}
                  ></i>
                </h5>
                <p class="card-text">
                  Skills and experience:
                  <ul>
                    <li>Dynamic CRM</li>
                    <li>Database</li>
                    <li>Apache spark</li>
                    <li>Laravel</li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="card mt-2">
              <div class="card-header">
                Openings For MS dynamics CRM developer at Mindtree
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  Openings For MS dynamics CRM developer at Mindtree
                  <i
                    class="fa-brands fa-2xl fa-aws"
                    style={{ marginLeft: "125px", color: " blue" }}
                  ></i>
                </h5>
                <p class="card-text">
                  Skills and experience:
                  <ul>
                    <li>Dynamic CRM</li>
                    <li>Database</li>
                    <li>Apache spark</li>
                    <li>Laravel</li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="card mt-2">
              <div class="card-header">
                Openings For MS dynamics CRM developer at Mindtree
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  Openings For MS dynamics CRM developer at Mindtree
                  <i
                    class="fa-brands fa-2xl fa-windows"
                    style={{ marginLeft: "125px", color: " #4385F4" }}
                  ></i>
                </h5>
                <p class="card-text">
                  Skills and experience:
                  <ul>
                    <li>Dynamic CRM</li>
                    <li>Database</li>
                    <li>Apache spark</li>
                    <li>Laravel</li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="card mt-2">
              <div class="card-header">
                Openings For MS dynamics CRM developer at Mindtree
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  Openings For MS dynamics CRM developer at Mindtree
                  <i
                    class="fa-brands fa-2xl fa-amazon"
                    style={{ marginLeft: "125px", color: " #000000" }}
                  ></i>
                </h5>
                <p class="card-text">
                  Skills and experience:
                  <ul>
                    <li>Dynamic CRM</li>
                    <li>Database</li>
                    <li>Apache spark</li>
                    <li>Laravel</li>
                  </ul>
                </p>
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

export default Jobs;
