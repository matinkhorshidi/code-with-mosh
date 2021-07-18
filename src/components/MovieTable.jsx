import React, { Component } from 'react';

import Like from './common/like';

import { Button } from 'semantic-ui-react';
import { getMovies } from '../services/fakeMovieService';

class MovieTable extends Component {
  state = { movies: getMovies() };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });

    //   ravesh 2
    //     var array = [...this.state.movies];
    //     let index = array.indexOf(movie);
    //     if (index !== -1) {
    //       array.splice(index, 1);
    //       this.setState({ movies: array });
    //     }
  };
  likeClicked = (movie) => {
    console.log(movie);
    let movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div className="ui section hidden divider">
          Showing {this.state.movies.length} movies{' '}
        </div>
        <div className="ui hidden section divider"></div>
        <table className="ui very basic table" style={{ textAlign: 'center' }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Gener</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.likeClicked(movie)}
                  />
                </td>
                <td>
                  <Button negative onClick={() => this.handleDelete(movie)}>
                    delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieTable;
