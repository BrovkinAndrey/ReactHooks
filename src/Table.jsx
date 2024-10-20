import { isNumber } from 'lodash';
import { useState } from 'react';
import { useImmer } from 'use-immer';

export default function Table({ data }) {
  const [sortColumn, setSortColumn] = useState(Object.keys(data[0])[0]);
  const [sortData, updateSortData] = useImmer(data);

  function handleSortTable(sortBy) {
    if (sortBy === sortColumn) updateSortData((draft) => draft.reverse());
    else {
      updateSortData((draft) =>
        isNumber(draft[0][sortBy])
          ? draft.sort((obj1, obj2) => obj1[sortBy] - obj2[sortBy])
          : draft.sort((obj1, obj2) => obj1[sortBy].localeCompare(obj2[sortBy]))
      );
      setSortColumn(sortBy);
    }
  }

  return (
    <table className="table">
      <Thead
        headers={Object.keys(sortData[0])}
        handleSortTable={handleSortTable}></Thead>
      <Tbody data={sortData}></Tbody>
    </table>
  );
}

function Thead({ headers, handleSortTable }) {
  return (
    <thead>
      <tr>
        {headers.map((header, i) => (
          <th key={i} onClick={(e) => handleSortTable(header)}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function Tbody({ data }) {
  return (
    <tbody>
      {data.map((row, i) => (
        <tr key={i}>
          {Object.entries(row).map(([key, value], i) => (
            <td key={i}>{value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
