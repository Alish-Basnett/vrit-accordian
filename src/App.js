import React from "react";
import Accordion from "./components/Accordian";
import "./App.css"; // Import your CSS file with the gradient animation

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center moving-gradient-bg">
      <Accordion />
    </div>
  );
};

export default App;
