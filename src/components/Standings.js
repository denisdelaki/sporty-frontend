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
        <div className="standing">
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
              <th></th>
              <th>Home</th>
              <th>Away</th>
              <th>Overall</th>
            </tr>
            <tr>
              <td> League Losses:</td>
              <td>{standings[standing].home_league_L}</td>
              <td>{standings[standing].away_league_L}</td>
              <td>{standings[standing].overall_league_L}</td>
            </tr>
            <tr>
              <td> League Wins:</td>
              <td>{standings[standing].home_league_W}</td>
              <td>{standings[standing].away_league_W}</td>
              <td>{standings[standing].overall_league_W}</td>
            </tr>
            <tr>
            <td>League Points:</td>
            <td>{standings[standing].home_league_PTS}</td>
            <td>{standings[standing].away_league_PTS}</td>
            <td>{standings[standing].overall_league_PTS}</td>
            </tr>
            <tr>
              <td>League GA:</td>
              <td>{standings[standing].home_league_GA}</td>
              <td>{standings[standing].away_league_GA}</td>
              <td>{standings[standing].overall_league_GA}</td>
                </tr> 
                <tr>
              <td>League GF:</td>
              <td>{standings[standing].home_league_GF}</td>
              <td>{standings[standing].away_league_GF}</td>
              <td>{standings[standing].overall_league_GF}</td>
              </tr>
              <tr>
              <td>League Pos:</td>
              <td>{standings[standing].home_league_position}</td>
              <td>{standings[standing].away_league_position}</td>
              <td>{standings[standing].overall_league_position}</td>
            </tr>
          </table>
        </div>
      </div>
    ));
    return (
        <div className="standings">
           {gameStanding}
       </div>
   ) 
}
export default Standings