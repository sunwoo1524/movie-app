import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?limit=50&sort_by=rating");

    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <h1>로딩중학교...</h1>
          </div>
        ) : (
          <div className="movies">
            {
              movies.map(movie => {
                return <Movie
                          key={movie.id}
                          id={movie.id}
                          title={movie.title}
                          year={movie.year}
                          summary={movie.summary}
                          poster={movie.medium_cover_image}
                          genres={movie.genres}
                       />;
              })
            }
          </div>
        )}
      </section>
    );
  }
}

export default App;