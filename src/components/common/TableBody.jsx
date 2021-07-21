import React, { Component } from 'react';

var _ = require('lodash');

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content)
      return (
        column.content(item) && column.content(item, this.props.data.length)
      );
    return _.get(item, column.path);
  };
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column, inde) => (
              <td key={inde}>{this.renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
