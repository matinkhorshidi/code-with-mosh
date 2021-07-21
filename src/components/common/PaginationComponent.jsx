import React, { Component } from 'react';

import { Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../../styles/App.css';

class PaginationComponent extends Component {
  state = {};
  render() {
    let active = this.props.active;
    let items = [];
    for (let number = 1; number <= this.props.size; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          activeLabel={''}
          onClick={() => this.props.pagClicked(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return (
      <Pagination
        style={{
          justifyContent: 'center',
        }}
        size="lg"
      >
        {items.length === 1 ? null : items}
      </Pagination>
    );
  }
}

PaginationComponent.propTypes = {
  size: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  pagClicked: PropTypes.func.isRequired,
};

export default PaginationComponent;
