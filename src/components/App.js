import React from 'react';
import CounterApp from './CounterApp';
import MovieTable from './MovieTable';
import NavBar from './NavBar';
import Badge from 'react-bootstrap/Badge';

class App extends React.Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 5 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          products={this.state.counters.filter((c) => c.value > 0).length}
        />
        <div className="ui container">
          <div className="ui horizontal section divider">Shop card</div>
          <CounterApp
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
          <div className="ui hidden section divider"></div>
          <div className="ui hidden section divider"></div>
          <div className="ui horizontal section divider">Movie Table</div>
          <MovieTable />
        </div>
        <div>
          <Badge bg="primary">Primary</Badge>{' '}
          <Badge bg="secondary">Secondary</Badge>{' '}
          <Badge bg="success">Success</Badge> <Badge bg="danger">Danger</Badge>{' '}
          <Badge bg="warning" text="dark">
            Warning
          </Badge>{' '}
          <Badge bg="info">Info</Badge>{' '}
          <Badge bg="light" text="dark">
            Light
          </Badge>{' '}
          <Badge bg="dark">Dark</Badge>
        </div>
      </React.Fragment>
    );
  }

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
