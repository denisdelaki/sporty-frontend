import React, { useEffect, useState } from "react";

function Standings() {
    const [standings, setStandings] = useState([])
    useEffect(() => {
        fetch("https://apiv3.apifootball.com/?action=get_standings&league_id=302&APIkey=e3d29ea6462a794ef963d228f1737e2ac2c9a5f86c085b948f1127fd8e75a17c")
            .then(res => res.json())
            .then(standing => {
            setStandings(standing)
        })
    })
    return (
        <div>
            standing
       </div>
   ) 
}
export default Standings