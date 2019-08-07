import React from 'react';
import Jumbotron from "./components/jumbotron/Jumbotron";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/cards/Card";
import Footer from "./components/footer/Footer";
import starwars from "./starwars.json";
import React, { Component } from "react";


//sets the state to zero
class App extends Component {
  state = {
    characters,
    clickedCharacters: [],
    score: 0
  }
}








// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
