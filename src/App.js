import React from "react";
import "./App.css";
import PhotoGrid from "./Components/PhotoGrid"

function App() {
  return (
    <div className="App">
      <h1>
      Astronomy is amazing
      </h1>
      <p>That's why we have captured these moments for discovering</p>
      <p>
      Photos of the day
      </p>
      <PhotoGrid/>
    </div>
  );
}

export default App;
