import { Component } from "react";
import MovieCard from "./MovieCard";
import { Row } from "react-bootstrap";

class MoviesComp extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetch(this.props.urlForFetch)
      .then((response) => {
        if (response.ok) {
          console.log("La response è ok");
          return response.json();
        } else {
          throw new Error("Dati non recuperati");
        }
      })
      .then((dataMovies) => {
        this.setState({ movies: dataMovies.Search });
      })
      .catch((error) => {
        console.log("Sei nell' error del catch", error);
      });
  }
  render() {
    return (
      <div className="my-5 text-light fs-3 fw-medium">
        <p>{this.props.title}</p>
        <Row xs={2} md={3} lg={6} className="g-3">
          {/* <Col>
            <img src="https://placedog.net/275" alt="bau" />
          </Col> */}
          {this.state.movies.slice(0, 6).map((movie) => {
            return (
              <MovieCard
                key={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
              />
            );
          })}
        </Row>
      </div>
    );
  }
}

export default MoviesComp;
