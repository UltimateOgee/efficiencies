import React from "react";


/**
 * Props object definition
 * @typedef {Object} Entry
 * @property {string} name - Name of the play
 * @property {number} efficiency - Current efficiency of the play
 * @property {string[]} histroy - List of past 5 outcomes for the play denoted by X,F,2,3
 */

/**
 * Props object definition
 * @typedef {Object} Props
 * @property {Entry[]} entries - ID for the bar chart
 */

/**
 * Creates a bar chart using the data passed in through props
 * @param {Props} props 
 */
export default function EfficiencyTable({entries = []}) {
  // TODO - remove table warnings
  
  const getEfficiencyColor = (e) => {
    if(e > .5) return('green');
    if(e > .3) return('orange');
    return('red');
  };

  const getHistoryColor = (p) => {
    if(p === 'X') return('red');
    if(p === 'F') return('orange');
    if(p === '2') return('blue');
    if(p === '3') return('green');
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
          {entries.map(entry => {
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