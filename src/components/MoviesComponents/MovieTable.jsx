import React, { Component } from 'react';

import Like from '../common/like';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Table from '../common/Table';

class MovieTable extends Component {
  columns = [
    {
      path: 'title',
      label: 'Title',
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: (movie) => (
        <Like
          liked={movie.liked}
          onClick={() => this.props.likeMovieClicked(movie)}
        />
      ),
    },
    {
      key: 'delete',
      content: (movie, length) => (
        <Button
          negative
          onClick={() => this.props.handleDeleteMovie(movie, length)}
        >
          delete
        </Button>
      ),
    },
  ];

  /*   getPageData = () => {
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

    return { totalCount: filtered.length, data: PagMovies };
  }; */
  render() {
    if (this.props.movies.length === 0) return <div>'no movie to show'</div>;
    /*     const { totalCount, data } = this.getPageData(); */
    return (
      <div>
        <div className="ui section hidden divider">
          Showing {this.props.totalCount} movies
        </div>
        <div className="ui hidden section divider"></div>

        <Table
          data={this.props.data}
          columns={this.columns}
          sortColumn={this.props.sortColumn}
          handleSort={this.props.handleSort}
        />
      </div>
    );
  }
}

export default MovieTable;
