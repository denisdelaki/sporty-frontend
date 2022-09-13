import React, { useState } from "react";

function Countries() {
    const [countries, setCountries] = useState([])
    useState(() => {
        fetch(
          "https://apiv3.apifootball.com/?action=get_countries&APIkey=e3d29ea6462a794ef963d228f1737e2ac2c9a5f86c085b948f1127fd8e75a17c"
        )
          .then((res) => res.json())
          .then((countries) => {
            setCountries(countries.slice(3, 200));
          });
        
    }, [])
    const gameCountries = Object.keys(countries).map((country) => (
      <div >
        <div key={countries[country].country_id} className="country">
          <p>Country ID: {countries[country].country_id}</p>
          <img className="country-image" src={countries[country].country_logo} alt="logo" />
          <p>Country Name: {countries[country].country_name}</p>
        </div>
      </div>
    ));
    return (
       
        <div id="countries">
            {gameCountries}
        </div>
   ) 
}
export default Countries