import React from "react";
import "./App.css";
import PhotoCard from "./Components/PhotoCard"

function App() {
  return (
    <div className="App">
      <h1>
      Astronomy 
      </h1>
      <p>
      Photos of the day
      </p>
      <PhotoCard/>
    </div>
  );
}

export default App;
