import React, { Component } from 'react';

import Like from './common/like';
import { Button } from 'semantic-ui-react';
import { paginate } from '../utils/paginate';
import TableHeader from './common/TableHeader';
var _ = require('lodash');

class MovieTable extends Component {
  columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    { key: 'like' },
    { key: 'delete' },
  ];
  render() {
    if (this.props.movies.length === 0) return <div>'no movie to show'</div>;
    const filtered =
      this.props.selectedGenre && this.props.selectedGenre._id
        ? this.props.movies.filter(
            (m) => m.genre._id === this.props.selectedGenre._id
          )
        : this.props.movies;

    const sorted = _.orderBy(
      filtered,
      [this.props.sortColumn.path],
      [this.props.sortColumn.order]
    );

    const PagMovies = paginate(
      sorted,
      this.props.CurrentPage,
      this.props.PageSize
    );

    return (
      <div>
        <div className="ui section hidden divider">
          Showing {filtered.length} movies
        </div>
        <div className="ui hidden section divider"></div>

        <table className="ui very basic table">
          <TableHeader
            columns={this.columns}
            sortColumn={this.props.sortColumn}
            handleSort={this.props.handleSort}
          />
          <tbody>
            {PagMovies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.props.likeMovieClicked(movie)}
                  />
                </td>
                <td>
                  <Button
                    negative
                    onClick={() =>
                      this.props.handleDeleteMovie(movie, PagMovies.length)
                    }
                  >
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
