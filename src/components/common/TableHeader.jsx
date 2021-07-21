import React, { Component } from 'react';

// columns : Array
// sortColumn : object
//  onSort : Function

class TableHeader extends Component {
  state = {};

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.props.handleSort(column.path)}
              style={{ cursor: 'pointer' }}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
