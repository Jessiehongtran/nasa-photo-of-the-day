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
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default App;
