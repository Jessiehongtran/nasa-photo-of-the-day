import React from "react";
import "./App.css";
import PhotoGrid from "./Components/PhotoGrid"
import {Header, Tagline} from "./Components/Style"


function App() {
  return (
    <div className="App">
      <Header>
      Astronomy is amazing
      </Header>
      <Tagline>
      That's why we've saved these moments
      </Tagline>
      <PhotoGrid/>
    </div>
  );
}
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default App;
