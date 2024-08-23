import { Col, Row, Button } from "react-bootstrap";

const FooterComp = function () {
  return (
    <Row className="justify-content-center mt-5">
      <Col className="col-6">
        <Row>
          <Col className="mb-2">
            <i className="bi bi-facebook footer-icon me-2"></i>
            <i className="bi bi-instagram footer-icon me-2"></i>
            <i className="bi bi-twitter-x footer-icon me-2"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
          <Col className="footer-links">
            <p>
              <a href="#">Audio and Subtitles</a>
            </p>
            <p>
              <a href="#">Media Center</a>
            </p>
            <p>
              <a href="#">Privacy</a>
            </p>
            <p>
              <a href="#">Contact us</a>
            </p>
          </Col>
          <div className="col footer-links">
            <p>
              <a href="#">Audio Description</a>
            </p>
            <p>
              <a href="#">Investor Relations</a>
            </p>
            <p>
              <a href="#">Legal Notices</a>
            </p>
          </div>
          <div className="col footer-links">
            <p>
              <a href="#">Help Center</a>
            </p>
            <p>
              <a href="#">Jobs</a>
            </p>
            <p>
              <a href="#">Cookie Preferences</a>
            </p>
          </div>
          <div className="col footer-links">
            <p>
              <a href="#">Gift Cards</a>
            </p>
            <p>
              <a href="#">Terms of Use</a>
            </p>
            <p>
              <a href="#">Corporate Information</a>
            </p>
          </div>
        </Row>
        <Row>
          <Col className="mb-2">
            <Button variant="outline-secondary" className=" rounded-0 mt-3">
              Service Code
            </Button>
          </Col>
        </Row>
        <Row className="row">
          <Col className="mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default FooterComp;
