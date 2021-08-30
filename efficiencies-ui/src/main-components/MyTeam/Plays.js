import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import AddTableItem from "./AddTableItem";
import { useSelector } from "react-redux";

export default function Plays() {
  // If playFields is changed, you must also change interface in RootReducer
  const playFields = ['Name', 'Type', 'Possession'];
  const [plays, setPlays] = useState([]);

  const reduxPlays = useSelector(({ firebase: { profile } }) => profile.plays)
  useEffect(() => {
    setPlays(reduxPlays);
  }, [reduxPlays])

  // Potential table example - https://material-ui.com/components/tables/#ReactVirtualizedTable.js
  return (
    <>
      <Typography variant="h5">
      Plays
      </Typography>
      
      <Typography variant="h5">
      Offense
      </Typography>

      <table>
        <tr>
          {playFields.map(field => <th>{field}</th>)}
        </tr>
        {plays ? plays.map(play => 
          {if (play.Possession !== 'Defence') {
            return(<tr>
              {playFields.map(field => 
                <td>{play[field] }</td>
              )}
            </tr>)
          }else return null}
          ) : 'loading...'}

        <AddTableItem fields={playFields} type='plays'/>
      </table>

      <Typography variant="h5">
      Defence
      </Typography>

      <table>
        <tr>
          {playFields.map(field => <th>{field}</th>)}
        </tr>
        {plays ? plays.map(play => 
          {if (play.Possession !== 'Offense') {
            return(<tr>
              {playFields.map(field => 
                <td>{play[field] }</td>
              )}
            </tr>)
          }else return null}
          ) : 'loading...'}

        <AddTableItem fields={playFields} type='plays'/>
      </table>
    </>
  );
}