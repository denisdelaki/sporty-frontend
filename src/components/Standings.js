import React, { useEffect, useState } from "react";

function Standings() {
    const [standings, setStandings] = useState([])
    useEffect(() => {
        fetch("https://apiv3.apifootball.com/?action=get_standings&league_id=302&APIkey=e3d29ea6462a794ef963d228f1737e2ac2c9a5f86c085b948f1127fd8e75a17c")
            .then(res => res.json())
            .then(standing => {
            setStandings(standing)
        })
    }, [])
    const gameStanding = Object.keys(standings).map((standing) => (
      <div>
        <div>
          <table>
            <tr>
              <th>Team ID</th>
              <th>Team Name</th>
              <th>League Name</th>
            </tr>
            <tr>
              <td>{standings[standing].team_id}</td>
              <td>{standings[standing].team_name}</td>
              <td>{standings[standing].league_name}</td>
            </tr>
          </table>
          <img src={standings[standing].team_badge} alt="Badge" />
          <table>
            <tr>
              <th>Home</th>
              <th>Away</th>
              <th>Overall</th>
            </tr>
            <tr>
              <p>
                League Losses:
                <td>{standings[standing].home_league_L}</td>
              </p>
              <p>
                League Wins:
                <td>{standings[standing].home_league_W}</td>
              </p>
              <p>
                League Points:
                <td>{standings[standing].home_league_PTS}</td>
              </p>
              <p>
                League GA:
                <td>{standings[standing].home_league_GA}</td>
              </p>
              <p>
                League GF:
                <td>{standings[standing].home_league_GF}</td>
              </p>
              <p>
                League Position:
                <td>{standings[standing].home_league_position}</td>
              </p>
            </tr>
          </table>
        </div>
      </div>
    ));
    return (
        <div>
            standing
       </div>
   ) 
}
export default Standings