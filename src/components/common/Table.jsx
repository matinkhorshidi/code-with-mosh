import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = (props) => {
  const { columns, sortColumn, handleSort, data } = props;
  return (
    <table className="ui very basic table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        handleSort={handleSort}
      />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
