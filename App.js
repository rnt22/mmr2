import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [SearchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState([]);
  const API_KEY = "RGAPI-cff5d841-3c4f-438a-81f5-a9b69d2efae1";

  function searchForPlayer(event) {
  // Set up the correct API call
var APICallString = "https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+SearchText + "?api_key=" + API_KEY;
  // Handle the API call
 axios.get (APICallString).then(function (response) {
  // Succes
 setPlayerData(response.data);
}).catch(function (error) {
// Error
console.log(error);
 })
  }

console.log(playerData);

  return (
    <div className="App">
    <div className="container"></div>
    <h5>League Of Legends, Meu MMR</h5>
    <input type="text" onChange={e => setSearchText(e.target.value)}></input>
    <button onClick={e => searchForPlayer(e)}>Ver Meu MMR</button>
    <div>
  {JSON.stringify(playerData) != '{}' ? 
  <>
  <p>{playerData.name} </p>
  <img width="100" height="100" src={"http://ddragon.leagueoflegends.com/cdn/12.16.1/img/profileicon/" + playerData.profileIconId + ".png"}/>
  <p>nivel {playerData.summonerLevel} </p>
  </>
  : 
  <><p> nao </p></>
  }
</div>
    </div>
    
  );
}


export default App;
