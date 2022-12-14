import React, { useEffect, useState } from "react";
import Betslip from "./Betslip";

function Prediction() {
  const [predictions, setPrediction] = useState([])
  const [betslip, setBetslip]=useState({})
  
  let today = new Date();
  let currentDate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let tommorrow =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    (today.getDate() + 1);
  function handleBet() {
    //   console.log(bet)
        
  }
  useEffect(() => {
       
    fetch(`https://apiv3.apifootball.com/?action=get_predictions&from=${currentDate}&to=${tommorrow}&APIkey=e3d29ea6462a794ef963d228f1737e2ac2c9a5f86c085b948f1127fd8e75a17c`)
      .then(res => res.json())
      .then((predictions) => {
        setPrediction(predictions)
      })
        
  }, [])
  useEffect(() => {
    fetch("http://localhost:3000/betslip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(predictions),
    })
      .then((res) => res.json())
      .then(betslip => {
        setBetslip(...betslip)
      })
  }, [])
    const bet = Object.keys(predictions).map((Prediction) => (
      <div key={predictions[Prediction].match_id} className="bettable">
        <table>
          <tr>
            <td>Game ID: {predictions[Prediction].match_id}</td>
            <td>League: {predictions[Prediction].league_name}</td>
            <td>
              Status:{" "}
              {
                (predictions[Prediction].match_status = " "
                  ? "To Start"
                  : predictions[Prediction].match_status)
              }
            </td>
          </tr>
          <tr>
            <td>Match Date: {predictions[Prediction].match_date}</td>
            <td>KickOff Time: {predictions[Prediction].match_time}</td>
            <td>Country: {predictions[Prediction].country_name}</td>
          </tr>
          <tr>
            <th>Home Team Formation</th>
            <th>Away Team Formation</th>
          </tr>
          <tr>
            <td>{predictions[Prediction].match_hometeam_system}</td>
            <td>{predictions[Prediction].match_awayteam_system}</td>
          </tr>
        </table>
        <table>
          <tr>
            <th>Home Team</th>
            <th>Away Team</th>
          </tr>
          <tr>
            <td> {predictions[Prediction].match_hometeam_name}</td>
            <td>{predictions[Prediction].match_awayteam_name}</td>
          </tr>
          <tr>
            <th>Home</th>
            <th>Draw</th>
            <th>Away</th>
            <th>Both</th>
            <th>Un 1.5</th>
            <th>OV 1.5</th>
            <th>Un 2.5</th>
            <th>OV 2.5</th>
          </tr>
          <tr>
            <td>
              <button
                onClick={() =>
                  handleBet(
                    predictions[Prediction],
                    predictions[Prediction].prob_HW / 100
                  )
                }
              >
                {predictions[Prediction].prob_HW / 100}
              </button>
            </td>
            <td>
              <button>{predictions[Prediction].prob_D / 100}</button>
            </td>
            <td>
              <button>{predictions[Prediction].prob_AW / 100}</button>
            </td>
            <td>
              <button>{predictions[Prediction].prob_bts / 100}</button>
            </td>
            <td>
              <button>{predictions[Prediction].prob_U / 100}</button>
            </td>
            <td>
              <button>{predictions[Prediction].prob_O / 100}</button>
            </td>
            <td>
              <button>{predictions[Prediction].prob_U_1 / 100}</button>
            </td>
            <td>
              <button>{predictions[Prediction].prob_O_1 / 100}</button>
            </td>
          </tr>
        </table>
      </div>
    ));
  return (
    <div>
      <div className="bet">{bet}</div>
      <Betslip  />
    </div>
  );
}
export default Prediction 
