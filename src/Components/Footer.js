import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function App() {
  return (
    <div style={{marginTop: '00px'}}>
      <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>
                <h3>
                  <strong>Finder.com</strong>
                </h3>
              </h6>
              <p>Company's Description</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <p>
                <a href="#!" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Careers
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Employer home
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Site Map
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <p>
                <a href="#!" className="text-reset">
                  Help center
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Summons/Notices
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Grievances
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Report issue
                </a>
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
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Dwarikanath
        </a>
      </div>
    </MDBFooter>
    </div>
  );
}
