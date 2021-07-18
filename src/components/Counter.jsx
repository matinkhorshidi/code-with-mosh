import React, { Component } from 'react';
import { Button, Grid, Label } from 'semantic-ui-react';

import { Navbar, Container, Badge } from 'react-bootstrap';

class Counter extends Component {
  render() {
    let LabelColor = this.props.counter.value === 0 ? 'yellow' : 'blue';
    let updatedCountLabel = () => {
      return this.props.counter.value === 0 ? 'zero' : this.props.counter.value;
    };
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <Grid>
              <Grid.Column width={3} textAlign="center">
                <Label
                  color={LabelColor}
                  horizontal
                  style={{
                    textAlign: 'center',
                    fontSize: '19px',
                    color: 'black',
                    // backgroundColor: LabelColor,
                  }}
                >
                  {updatedCountLabel()}
                </Label>
              </Grid.Column>
              <Grid.Column width={2}>
                <Button
                  color={'grey'}
                  onClick={() => this.props.onIncrement(this.props.counter.id)}
                >
                  +
                </Button>
              </Grid.Column>
              <Grid.Column width={2}>
                <Button
                  color={'grey'}
                  onClick={() => this.props.onDecrement(this.props.counter.id)}
                  disabled={this.props.counter.value === 0 ? true : false}
                >
                  -
                </Button>
              </Grid.Column>
              <Grid.Column width={5}>
                <Button
                  onClick={() => this.props.onDelete(this.props.counter.id)}
                  negative
                >
                  DELETE
                </Button>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Counter;
