import React from "react";
//Images
import img1 from "../Images/brand1.jpg";
import img2 from "../Images/logo2.jpg";
import img3 from "../Images/logo3.jpg";

function Home(props) {
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row" >
            <div className="col-sm-6" style={{ marginTop: "20px" }}>
              <img src={img2} alt="img"/>
            </div>
            <div className="col-sm-6">
              <div className="container-fluid d-flex justify-content-center ">
                <div className="row ">
                  <div className="column-sm-6">
                    <h1>
                      <strong style={{ display: "flex", marginTop: "80px" }}>
                        Find your dream job now
                      </strong>
                    </h1>
                    <h6 className="d-flex justify-content-center">
                      Millon jobs for you to explore
                    </h6>
                    <div className="mt-4">
                      <h4>
                        <strong>
                          World's leading companies are here for you..
                        </strong>
                      </h4>
                      <h5 className="d-flex justify-content-center">
                        You are just a step away to get your dream job!
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center my-4">
          <div className="card" style={{ borderRadius: "80px", width: "90vh" }}>
            <div className="card-body">
              <div className="d-flex justify-content-center mt-3 ">
                <p>
                  <strong style={{ fontSize: "25px" }}>
                    Get contacted by top companies hiring on Finder!
                  </strong>
                </p>
              </div>
              <div className="d-flex justify-content-center mt-3 ">
                <button
                  type="button"
                  className="btn btn-success justify-content-center mx-auto "
                  style={{
                    width: "200px",
                    backgroundColor: "#A30000",
                    borderRadius: "125px",
                  }}
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center my-5">
          <form className="form-inline">
            <input
              className="form-control"
              type="search"
              placeholder="Search dream job/dream company here"
              aria-label="Search"
              style={{ width: "50vh", height: "10vh", borderRadius: "50" }}
            />
            <button
              className="btn btn-primary"
              type="submit"
              style={{ height: "10vh", borderRadius: "50" }}
            >
              Search
            </button>
          </form>
        </div>
        <div className="d-flex justify-content-center mt-3 ">
          <h3>
            <strong>Trending jobs on Finder today!</strong>
          </h3>
        </div>

        <div className="container-fluid">
          <div className="row d-flex justify-content-center mt-3">
            <div className="col-sm-3 d-flex justify-content-center">
              <div className="card " style={{width:'170px', height:'110px'}}>
                <div className="card-body">
                  <h5 className="card-title">
                    <i
                      className="fa-brands d-flex justify-content-center fa-2xl fa-amazon"
                      style={{ color: "#000" }}
                    ></i>
                  </h5>
                  <p className="card-text d-flex justify-content-center mt-4">
                    Get SDE jobs at Amazon.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 d-flex justify-content-center">
              <div className="card" style={{width:'170px', height:'110px'}}>
                <div className="card-body">
                  <h5 className="card-title">
                    <i
                      className="fa-brands d-flex justify-content-center fa-2xl fa-windows"
                      style={{ color: "blue" }}
                    ></i>
                  </h5>
                  <p className="card-text d-flex justify-content-center mt-4 ml-1">
                    Data Analyst at Microsoft.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 d-flex justify-content-center">
              <div className="card" style={{width:'150px', height:'110px'}}>
                <div className="card-body">
                  <h5 className="card-title">
                    <i
                      className="fa-brands d-flex justify-content-center fa-2xl fa-aws"
                      style={{  color: "#000" }}
                    ></i>
                  </h5>
                  <p className="card-text d-flex justify-content-center mt-4">
                    Cloud engineer at Amazon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-3 ">
          <h3>
            <strong>Explore top companies hiring now</strong>
          </h3>
        </div>

        <div className="container-fluid">
          <div className="row d-flex justify-content-center mt-3">
            <div className="col-sm-3">
              <div className="card" style={{ width: "15rem" }}>
                <div className="card-body">
                  <i
                    style={{ color: "red", marginLeft: "70px" }}
                    className="fa-solid fa-xl fa-industry"
                  ></i>
                  <h4 className="text-center mt-3">
                    Fortune 500<i className="fa-solid fa-arrow-right"></i>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card" style={{ width: "15rem" }}>
                <div className="card-body">
                  <i
                    style={{  marginLeft: "70px", color: "black" }}
                    className="fa-solid fa-xl fa-industry"
                  ></i>
                  <h4 className="text-center mt-3">
                    Unicorns<i className="fa-solid fa-arrow-right"></i>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card" style={{ width: "15rem" }}>
                <div className="card-body">
                  <i
                    style={{ marginLeft: "70px", color: "blue" }}
                    className="fa-solid fa-xl fa-industry"
                  ></i>
                  <h4 className="text-center mt-3">
                    Startups<i className="fa-solid fa-arrow-right"></i>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-3 ">
          <h3>
            <strong>Featured companies actively hiring</strong>
          </h3>
        </div>

        <div className="d-flex justify-content-center mt-3 ml-4 mr-4 ">
          <div className="row d-flex justify-content-center mt-3">
            <div className="col-sm-3 ">
              <div className="card"style={{width:'170px', height:'110px'}}>
                <div className="card-body ">
                  <h5 className="card-title">
                    <i className="d-flex justify-content-center fa-brands fa-2xl fa-amazon mt-2"></i>
                  </h5>
                  <p className="card-text mt-4">Helping world to connect.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 ">
              <div className="card" style={{width:'170px', height:'110px'}}>
                <div className="card-body">
                  <h5 className="card-title">
                    <i
                      className="d-flex justify-content-center fa-brands fa-2xl fa-amazon-pay mt-2"
                      style={{ color: "black" }}
                    ></i>
                  </h5>
                  <p className="card-text mt-4">Helping world to connect.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card" style={{width:'170px', height:'110px'}}>
                <div className="card-body">
                  <h5 className="card-title">
                    <i
                      className="d-flex justify-content-center fa-brands fa-2xl fa-google mt-2"
                      style={{ color: "red" }}
                    ></i>
                  </h5>
                  <p className="card-text mt-4">Helping world to connect.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card" style={{width:'170px', height:'110px'}}>
                <div className="card-body">
                  <h5 className="card-title">
                    <i
                      className="d-flex mt-1 justify-content-center fa-brands fa-2xl fa-microsoft mt-2"
                      style={{ color: "#4385F4" }}
                    ></i>
                  </h5>
                  <p className="card-text mt-4">Helping world to connect.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3 ">
          <button
            type="button"
            className="btn"
            style={{
              borderRadius: "77px",
              padding: "18px 74px",
              fontSize: "100%",
              lineHeight: "1",
              fontWeight: "bold",
              backgroundColor: "#fff",
              color: "#4385F4",
            }}
          >
            View more companies
          </button>
        </div>

        <div className="d-flex justify-content-center mt-3 ">
          <h3>
            <strong>Sponsored companies</strong>
          </h3>
        </div>

        <div className="d-flex justify-content-center mt-3 ml-4 mr-4 ">
          <div className="row justify-content-center">
            <div className="col-sm-2">
              <div className="card ">
                <div className="card-body ">
                  <i
                    className="fa-brands fa-2xl fa-amazon"
                    style={{ marginLeft: "55px" }}
                  ></i>
                  <p className="card-text">World's largest internet company.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2 ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i
                      className="fa-brands fa-2xl fa-amazon-pay"
                      style={{ marginLeft: "55px", color: "blue" }}
                    ></i>
                  </h5>
                  <p className="card-text">Helping wolrd in online transaction.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i
                      className="fa-brands fa-2xl fa-google-drive"
                      style={{ marginLeft: "55px", color: "green" }}
                    ></i>
                  </h5>
                  <p className="card-text">Helping world to connect.</p>
                </div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i
                      className="fa-brands fa-2xl fa-google-pay"
                      style={{ marginLeft: "55px", color: "#000" }}
                    ></i>
                  </h5>
                  <p className="card-text">Helping worls to connect.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i
                      className="fa-brands fa-2xl fa-google-drive"
                      style={{ marginLeft: "55px", color: "green" }}
                    ></i>
                  </h5>
                  <p className="card-text">Helping worls to connect.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i
                      className="fa-brands fa-2xl fa-amazon"
                      style={{ marginLeft: "55px", color: "blue" }}
                    ></i>
                  </h5>
                  <p className="card-text">Helping worls to connect.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2 mt-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i
                      className="fa-brands fa-2xl fa-aws"
                      style={{ marginLeft: "55px", color: "#000" }}
                    ></i>
                  </h5>
                  <p className="card-text">Helping worls to connect.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2 mt-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i
                      className="fa-brands fa-2xl fa-cc-amazon-pay"
                      style={{ marginLeft: "55px", color: "#000" }}
                    ></i>
                  </h5>
                  <p className="card-text">Helping worls to connect.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2 mt-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i
                      className="fa-brands fa-2xl fa-google"
                      style={{ marginLeft: "55px", color: "red" }}
                    ></i>
                  </h5>
                  <p className="card-text">Helping worls to connect.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2 mt-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i
                      className="fa-brands fa-2xl fa-amazon"
                      style={{ marginLeft: "55px", color: "#000" }}
                    ></i>
                  </h5>
                  <p className="card-text">Helping worls to connect.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2 mt-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i
                      className="fa-brands fa-2xl fa-amazon-pay"
                      style={{ marginLeft: "55px", color: "#000" }}
                    ></i>
                  </h5>
                  <p className="card-text">Helping World to connect.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2 mt-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i
                      className="fa-brands fa-2xl fa-aws"
                      style={{ marginLeft: "55px", color: "red" }}
                    ></i>
                  </h5>
                  <p className="card-text">Helping world to connect.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4 ">
          <button
            type="button"
            className="btn"
            style={{
              borderRadius: "77px",
              padding: "18px 74px",
              fontSize: "100%",
              lineHeight: "1",
              fontWeight: "bold",
              backgroundColor: "#fff",
              color: "#4385F4",
            }}
          >
            View more sponsored companies
          </button>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <div className="ml-5"
                style={{ marginTop: "100px", marginBottom: "20px" }}
              >
                <h4 >
                  <strong>Interview preparation</strong>
                </h4>
              </div>
              <div className="mb-5">
                <img src={img3} alt="img"/>
              </div>
            </div>
            <div className="col-sm-9 mt-5">
              <div className="row">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 class="card-title">
                          <i
                            className="fa-brands fa-2xl fa-aws"
                            style={{ marginLeft: "25px", color: "red" }}
                          ></i>
                        </h5>
                        <p className="card-text">
                          AWS is subsidiary of Awazon.Get preparation material
                          for interview here.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i
                            className="fa-brands fa-2xl fa-windows"
                            style={{ marginLeft: "55px", color: "blue" }}
                          ></i>
                        </h5>
                        <p className="card-text">
                          Microsoft is world's leading company get preparation
                          material for interview here.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-2">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i
                            className="fa-brands fa-2xl fa-amazon"
                            style={{ marginLeft: "15px", color: "blue" }}
                          ></i>
                        </h5>
                        <p className="card-text">
                          Amazon is world's leading internet company get
                          preparation material for interview here.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-2">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i
                            className="fa-brands fa-2xl fa-google"
                            style={{ marginLeft: "15px", color: "violet" }}
                          ></i>
                        </h5>
                        <p className="card-text">
                          Microsoft is world's leading company get preparation
                          material for interview here.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-2">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i
                            className="fa-brands fa-2xl fa-amazon-pay"
                            style={{ marginLeft: "15px", color: "black" }}
                          ></i>
                        </h5>
                        <p className="card-text">
                          Amazon Pay helps in online transaction and it is
                          subsidiary of Amazon, get preparation material for
                          interview here.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-2">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i
                            className="fa-brands fa-2xl fa-google-drive"
                            style={{ marginLeft: "15px", color: " green" }}
                          ></i>
                        </h5>
                        <p className="card-text">
                          Drive is subsidiary of Google, get preparation
                          material for interview here.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-5" style={{ width: "180vh" }}>
          <div className="card">
            <h2 className="card-header d-flex justify-content-center">
              Accelerate your job search with premium services
            </h2>
            <div className="card-body">
              <p className="card-text d-flex justify-content-center">
                Services to help you get hired, faster: from preparing your CV,
                getting recruiter attention, finding the right jobs, and more!
              </p>
              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-outline-dark">
                  Resume writing
                </button>
                <button type="button" className="btn btn-outline-dark">
                  Priority display
                </button>
                <button type="button" className="btn btn-outline-dark">
                  Resume display
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <div style={{ marginTop: "150px" }}>
                <p><strong>by Finer leaning</strong></p>
                <h4 className="header">
                  <strong>Grow your career through learning</strong>
                </h4>
                <img src={img1} style={{ width: "300px", height: "250px" }} alt="img" />
              </div>
            </div>
            <div className="col-sm-9 mt-5">
              <div className="row">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <p className="card-title">Data Science</p>
                    <h4 className="card-subtitle mb-2 ">
                      Artificial Intelligence
                    </h4>
                    <p className="card-text">
                      Learn in demand AI skills like deep learning, NLP,
                      computer vision and more for career groeth acrossdifferent
                      roles.
                    </p>
                  </div>
                </div>
                <div className="card ml-3" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <p className="card-title">Cloud Technologies</p>
                    <h4 className="card-subtitle mb-2 ">AWS</h4>
                    <p className="card-text">
                      Learn in demand AI skills like deep learning, NLP,
                      computer vision and more for career groeth acrossdifferent
                      roles.
                    </p>
                  </div>
                </div>
                <div className="card ml-3" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <p className="card-title">Programming</p>
                    <h4 className="card-subtitle mb-2 ">
                      Data structure and Algorithms
                    </h4>
                    <p className="card-text">
                      Learn in demand AI skills like deep learning, NLP,
                      computer vision and more for career groeth acrossdifferent
                      roles.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <p className="card-title">Container</p>
                    <h4 className="card-subtitle mb-2 ">Docker</h4>
                    <p className="card-text">
                      Learn in demand AI skills like deep learning, NLP,
                      computer vision and more for career groeth acrossdifferent
                      roles.
                    </p>
                  </div>
                </div>
                <div className="card ml-3" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <p className="card-title">Source code management</p>
                    <h4 className="card-subtitle mb-2 ">Git</h4>
                    <p className="card-text">
                      Learn in demand AI skills like deep learning, NLP,
                      computer vision and more for career groeth acrossdifferent
                      roles.
                    </p>
                  </div>
                </div>
                <div className="card ml-3" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <p className="card-title">Data Science</p>
                    <h4 className="card-subtitle mb-2 ">Robotics</h4>
                    <p className="card-text">
                      Learn in demand AI skills like deep learning, NLP,
                      computer vision and more for career groeth acrossdifferent
                      roles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bot */}
        {/* <div
        className="fixed-bottom mx-4 mb-2"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginLeft: "auto",
        }}
      >
        <i
          class="fa-solid fa-2xl fa-robot"
          style={{
            position: "absolute",
            bottom: 10,
            right: 15,
            height: "45px",
            width: "35px",
            alignItems: "center",
            borderRadius: "100px",
            color: "#DC3545",
          }}
        ></i>
        <p>
          <strong>Ask help</strong>{" "}
        </p>
      </div> */}
        
      </div>
    </>
  );
}

export default Home;
