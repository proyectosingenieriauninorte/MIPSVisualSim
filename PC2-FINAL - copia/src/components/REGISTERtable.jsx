import React from 'react';
import '../styles/Tables.css';

const REGISTERtable = ({ registers}) => {
  return (
    <div id="simulation-tables" className='tables-container'>
      <table id="registerTable" className='REGISTERtable'>
        <thead>
          <tr className='values'>
            <th>Register</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(registers).map((reg) => (
            <tr key={reg} className='values'>
              <td>{reg}</td>
              <td>{`0x${registers[reg].toString(16).toUpperCase()}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default REGISTERtable;
