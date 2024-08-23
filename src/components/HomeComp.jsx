import { Component } from "react";
import { Row, Col } from "react-bootstrap";

class MovieCard extends Component {
  render() {
    return (
      <div className="mt-5">
        <Row xs={2} md={3} lg={6} className="g-5">
          <Col>
            <img src="https://placedog.net/275" alt="bau" />
          </Col>
          <Col>
            <img src="https://placedog.net/275" alt="bau" />
          </Col>
          <Col>
            <img src="https://placedog.net/275" alt="bau" />
          </Col>
          <Col>
            <img src="https://placedog.net/275" alt="bau" />
          </Col>
          <Col>
            <img src="https://placedog.net/275" alt="bau" />
          </Col>
          <Col>
            <img src="https://placedog.net/275" alt="bau" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default MovieCard;
