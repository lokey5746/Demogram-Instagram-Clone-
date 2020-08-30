import React from "react";
import "./App.css";

function App() {
  return (
    // BEM
    <div className="app">
      <div className="app__header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram logo"
        />
      </div>
    </div>
  );
}

export default App;
