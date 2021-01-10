import React, { Component } from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BrowserRouter as Link } from "react-router-dom";

export default class WebFooter extends Component {
  render() {
    return (
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Created and Maintained by</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p className="name">Pratiksha Bhangdiya</p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <Link to="https://github.com/moroshko/react-autosuggest/blob/master/test/always-render-suggestions/AutosuggestApp.js">
                      <FaLinkedinIn className="fab fa-linkedin linkedin-bg"></FaLinkedinIn>
                    </Link>
                    <Link to="https://www.facebook.com/pratiksha.somani2">
                      <FaFacebookF className="fab fa-facebook facebook-bg"></FaFacebookF>
                    </Link>
                    <Link to="https://github.com/pratiksha92">
                      <FaGithub className="fab fa-github instagram-bg"></FaGithub>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="">about</Link>
                    </li>
                    <li>
                      <Link to="">movies</Link>
                    </li>
                    <li>
                      <Link to="">Series</Link>
                    </li>
                    <li>
                      <Link to="">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link to="">
                      <img
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
                        className="img-fluid"
                        alt="logo"
                      ></img>
                    </Link>
                  </div>
                  <div className="footer-text">
                    <p>
                      This product uses the TMDB API but is not endorsed or
                      certified by TMDB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 text-center">
                <div className="copyright-text">
                  <p>Copyright &copy; 2021, All Right Reserved </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
