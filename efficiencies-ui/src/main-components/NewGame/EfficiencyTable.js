import React from "react";


/**
 * Props object definition
 * @typedef {Object} Data
 * @property {string} name - Name of the play
 * @property {number} efficiency - Current efficiency of the play
 * @property {string[]} histroy - List of past 5 outcomes for the play denoted by X,F,2,3
 */

/**
 * Props object definition
 * @typedef {Object} Props
 * @property {Data[]} data - ID for the bar chart
 */

/**
 * Creates a bar chart using the data passed in through props
 * @param {Props} props 
 */
export default function EfficiencyTable({data = [], possession}) {
  // TODO - remove table warnings

  const getEfficiencyColor = (e) => {
    if(e > .5) return('green');
    if(e > .3) return('orange');
    return('red');
  };

  const getHistoryColor = (p) => {
    if(possession === 'Offense'){
      if(p === 'X') return('red');
      if(p === 'F') return('orange');
      if(p === '2') return('blue');
      if(p === '3') return('green');
    }else {
      if(p === 'X') return('green');
      if(p === 'F') return('blue');
      if(p === '2') return('orange');
      if(p === '3') return('red');
    }
  };

  return (
    <>
      <table style={{borderSpacing: 10}}>
        <thead>
          <tr>
            <th>Play</th>
            <th>Efficieny</th>
            <th>History</th>
          </tr>
        </thead>
        <tbody>
          {data.map(entry => {
            return(<tr>
              <td>{entry.name}</td>
              
              <td 
              style={{color: getEfficiencyColor(entry.efficiency)}}
              >
                {entry.efficiency}
              </td>
              
              <td>
                {entry.history.map(p => {
                  return(
                  <span
                  style={{color: getHistoryColor(p), paddingRight: 10}}
                  >
                    {p}
                  </span>);
                })}
              </td>
            </tr>);
          })}
        </tbody>
      </table>
    </>
  );
}