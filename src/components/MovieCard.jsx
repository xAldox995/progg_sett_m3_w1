import { Col } from "react-bootstrap"
const MovieCard = (props) => {
    return (
        <Col>
            <img className="img-fluid movie-poster" src={props.poster} alt={props.title} />
            <p>{props.title}</p>
          </Col>
    )
}

export default MovieCard