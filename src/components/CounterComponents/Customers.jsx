import React, { Component } from 'react';
import CounterApp from './CounterApp';

import { Row, Col } from 'react-bootstrap';

class Customers extends Component {
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
    );
  }
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

export default Customers;
