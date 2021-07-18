import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Counter from './Counter';

class CounterApp extends Component {
  render() {
    return (
      <div>
        <Button
          onClick={this.props.onReset}
          primary
          style={{ marginBottom: '20px', marginLeft: '10px' }}
        >
          RESET
        </Button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onDecrement={this.props.onDecrement}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default CounterApp;
