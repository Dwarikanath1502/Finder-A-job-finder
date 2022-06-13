import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div style={{marginTop: '00px'}}>
      <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link to="/" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="/" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="/" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </Link>
          <Link to="/" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="/" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link to="/" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </Link>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>
                <p>
                  <strong>Finder.com</strong>
                </p>
              </h6>
              <p>Company's Description</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <p>
                <Link to="/" className="text-reset">
                  About Us
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Careers
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Employer home
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Site Map
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <p>
                <Link to="#!" className="text-reset">
                  Help center
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Summons/Notices
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Grievances
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Report issue
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <p>
                <i className="fas fa-home me-3"></i> Privacy policy
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                abc@xyz.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> 91 xxxx-xxxx-xx
              </p>
              <p>
                <i className="fas fa-print me-3"></i> Trust and Safety
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <Link className="text-reset fw-bold" to="https://mdbootstrap.com/">
          Dwarikanath
        </Link>
      </div>
    </MDBFooter>
    </div>
  );
}
