import { isNumber } from 'lodash';
import { useEffect, useState } from 'react';

export default function Table({ data }) {
  const [sortColumn, setSortColumn] = useState(Object.keys(data[0])[0]);
  const [sortData, updateSortData] = useState(data);

  useEffect(() => {
    let newData = sortData.slice();
    if (sortColumn === 'reverse') {
      console.log('reverse');
      newData.reverse();
    } else {
      console.log('sort by ', sortColumn);
      if (isNumber(newData[0][sortColumn]))
        newData.sort((obj1, obj2) => obj1[sortColumn] - obj2[sortColumn]);
      else
        newData.sort((obj1, obj2) =>
          obj1[sortColumn].localeCompare(obj2[sortColumn])
        );
    }
    updateSortData(newData);
  }, [sortColumn]);

  return (
    <table className="table">
      <Thead
        headers={Object.keys(sortData[0])}
        sortColumn={sortColumn}
        setSortColumn={setSortColumn}></Thead>
      <Tbody data={sortData}></Tbody>
    </table>
  );
}

function Thead({ headers, sortColumn, setSortColumn }) {
  return (
    <thead>
      <tr>
        {headers.map((header, i) => (
          <th
            key={i}
            onClick={(e) => {
              if (sortColumn === header) setSortColumn('reverse');
              else setSortColumn(header);
            }}>
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
