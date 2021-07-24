import React, { Component } from 'react';

import MovieTable from './MovieTable';
import ListGroup from '../common/ListGroupComponent.jsx';
import MovieDetails from './MovieDetails';

import { getMovies } from '../../services/fakeMovieService';
import { getGenres } from '../../services/fakeGenreService';
import { Row, Col } from 'react-bootstrap';

import { Switch, Route } from 'react-router-dom';
import PaginationComponent from './../common/PaginationComponent';
import _ from 'lodash';
import { paginate } from '../../utils/paginate';

class Movies extends Component {
  state = {
    movies: [],
    geners: [],
    CurrentPage: 1,
    PageSize: 4,
    sortColumn: { path: 'title', order: 'asc' },
    selectedGenre: { name: 'AllGenres', _id: 0 },
  };

  componentDidMount() {
    const geners = [{ name: 'AllGenres', _id: 0 }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      geners,
    });
  }

  render() {
    const { totalCount, data } = this.getPageData();
    let itemsCount = this.state.movies.length;
    return (
      <Row>
        <div className="ui horizontal section divider">Movie Table</div>
        <Col sm={2}>
          <ListGroup
            items={this.state.geners}
            selectedGenre={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
            onAllItemSelect={this.handleAllGenreSelect}
          />
        </Col>
        <Col sm={10}>
          <MovieTable
            movies={this.state.movies}
            likeMovieClicked={this.likeMovieClicked}
            handleDeleteMovie={this.handleDeleteMovie}
            CurrentPage={this.state.CurrentPage}
            PageSize={this.state.PageSize}
            selectedGenre={this.state.selectedGenre}
            updateItemCount={this.updateItemCount}
            handleSort={this.handleSort}
            sortColumn={this.state.sortColumn}
            data={data}
            totalCount={totalCount}
          />

          <br />
        </Col>
        <PaginationComponent
          size={this.state.PageSize}
          active={this.state.CurrentPage}
          pagClicked={this.handlePagClicked}
          itemsCount={totalCount}
        />
        <Switch>
          <Route path="/movies/:id" exact>
            <MovieDetails movies={this.state.movies} />
          </Route>
        </Switch>
      </Row>
    );
  }
  getPageData = () => {
    const { selectedGenre, movies, sortColumn, CurrentPage, PageSize } =
      this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? movies.filter((m) => m.genre._id === selectedGenre._id)
        : movies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const PagMovies = paginate(sorted, CurrentPage, PageSize);
    console.log('filtered.length');
    console.log(filtered.length);
    return { totalCount: filtered.length, data: PagMovies };
  };
  // ! movie Functions
  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.setState({ sortColumn });
  };
  handleGenreSelect = (gener) => {
    this.setState({ selectedGenre: gener, CurrentPage: 1 });
  };
  handlePagClicked = (CurrentPage) => {
    this.setState({ CurrentPage });
  };
  handleDeleteMovie = (movie, Movieslength) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    // change page when page is empty
    if (Movieslength === 1) {
      this.setState({ CurrentPage: this.state.CurrentPage - 1 });
    }
  };

  likeMovieClicked = (movie) => {
    let movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
}

export default Movies;
