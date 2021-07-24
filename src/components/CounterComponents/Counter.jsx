import React, { Component } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';

class Counter extends Component {
  render() {
    let LabelColor = this.props.counter.value === 0 ? 'warning' : 'primary';
    let updatedCountLabel = () => {
      return this.props.counter.value === 0 ? 'zero' : this.props.counter.value;
    };
    return (
      <Container>
        <Row style={{ marginBottom: '12px' }}>
          <Col className="d-grid" style={{ textAlign: 'center' }}>
            <Button
              variant={LabelColor}
              size="lg"
              style={{
                textAlign: 'center',
                // backgroundColor: LabelColor,
              }}
            >
              {updatedCountLabel()}
            </Button>
          </Col>
          <Col className="d-grid" style={{ textAlign: 'right' }}>
            <Button
              onClick={() => this.props.onIncrement(this.props.counter)}
              size="lg"
              style={{ padding: '5px 30px' }}
            >
              +
            </Button>
          </Col>
          <Col className="d-grid" style={{ textAlign: 'left' }}>
            <Button
              onClick={() => this.props.onDecrement(this.props.counter)}
              disabled={this.props.counter.value === 0 ? true : false}
              size="lg"
              style={{ padding: '5px 30px' }}
            >
              -
            </Button>
          </Col>
          <Col xs={6} style={{ textAlign: 'right' }}>
            <Button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              variant="danger"
              style={{ padding: '8px 30px' }}
            >
              DELETE
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Counter;
