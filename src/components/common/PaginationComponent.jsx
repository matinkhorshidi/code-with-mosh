import React, { Component } from 'react';

import { Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../../styles/App.css';

class PaginationComponent extends Component {
  render() {
    //console.log(items);
    console.log('itemsCount');
    console.log(this.props.itemsCount);
    console.log('size');
    console.log(this.props.size);
    const paginationListCount = Math.ceil(
      this.props.itemsCount / this.props.size
    );
    console.log('paginationListCount');
    console.log(paginationListCount);
    /*     if (paginationListCount === 1) return null; */
    /*     const paginationListCountArray = _.range(1, paginationListCount + 1); */
    let active = this.props.active;
    let items = [];
    for (let number = 1; number <= paginationListCount; number++) {
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
    console.log('items');
    console.log(items);

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
