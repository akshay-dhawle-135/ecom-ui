import { useEffect, useState } from 'react';

export default function DataPage({ type }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}?_limit=10`)
      .then((res) => res.json())
      .then(setData);
  }, [type]);

  const keys = data.length ? Object.keys(data[0]).slice(0, 5) : []; // limit columns

  return (
    <div>
      <h2>{type.toUpperCase()}</h2>
      <table border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            {keys.map((k) => (
              <th key={k}>{k}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {keys.map((k) => (
                <td key={k}>{String(row[k])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
