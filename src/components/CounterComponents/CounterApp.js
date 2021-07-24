import React, { Component } from 'react';
import Counter from './Counter';
import { Container, Row, Col, Button } from 'react-bootstrap';

class CounterApp extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Button
              variant="secondary"
              onClick={this.props.onReset}
              style={{ marginBottom: '20px', backgroundColor: 'grey' }}
            >
              RESET
            </Button>
            <Row>
              {this.props.counters.map((counter) => (
                <Counter
                  key={counter.id}
                  counter={counter}
                  onDelete={this.props.onDelete}
                  onDecrement={this.props.onDecrement}
                  onIncrement={this.props.onIncrement}
                />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CounterApp;
