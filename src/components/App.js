import React from 'react';
import CounterApp from './CounterApp';
import MovieTable from './MovieTable';
import NavBar from './NavBar';
import Pagination from './common/PaginationComponent';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { Container, Row, Col } from 'react-bootstrap';
import ListGroup from './common/ListGroupComponent.jsx';

class App extends React.Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 5 },
    ],
    movies: [],
    geners: [],
    CurrentPage: 1,
    PageSize: 4,
    sortColumn: { path: 'title', order: 'asc' },
  };

  componentDidMount() {
    const geners = [{ name: 'AllGenres' }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      geners,
    });
  }

  render() {
    let itemsCount = this.state.movies.length;
    let pageSize = Math.ceil(itemsCount / this.state.PageSize);
    return (
      <React.Fragment>
        <NavBar
          products={this.state.counters.filter((c) => c.value > 0).length}
        />
        <Container>
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
              />

              <br />
            </Col>
            <Pagination
              size={pageSize}
              active={this.state.CurrentPage}
              pagClicked={this.handlePagClicked}
            />
          </Row>
          <Row>
            <Col>
              <div className="ui hidden  section divider"></div>
              <div className="ui horizontal section divider">Shop card</div>
              <CounterApp
                counters={this.state.counters}
                onDelete={this.handleDelete}
                onDecrement={this.handleDecrement}
                onIncrement={this.handleIncrement}
                onReset={this.handleReset}
              />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
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

  // ! Counter Functions
  handleIncrement = (counter) => {
    let counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    let counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value--;
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    let counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  handleReset = () => {
    let counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
}

export default App;
