import React from 'react';
import '../styles/Tables.css';

const RAMtable = ({ memory }) => {
  return (
    <div id="simulation-tables" className='tables-container'>
      <table id="ramTable" className='RAMtable' >
        <thead>
          <tr className='values'>
            <th>Address</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(memory)
            .filter(addr => parseInt(addr) <= 0xF)
            .map((addr) => (
              <tr key={addr} className='values'>
                <td>{`0x${parseInt(addr).toString(16).toUpperCase()}`}</td>
                <td>{`0x${memory[addr].toString(16).toUpperCase()}`}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RAMtable;
