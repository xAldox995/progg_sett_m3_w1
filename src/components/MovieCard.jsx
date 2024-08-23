import { Col } from "react-bootstrap"
const MovieCard = (props) => {
    return (
        <Col>
            <img className="img-fluid movie-poster" src={props.poster} alt={props.title} />
          </Col>
    )
}

export default MovieCard