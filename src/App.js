import React from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import Calc from './components/Calc';
import Concept from './components/Concept';
import WhyContract from './components/WhyContract';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Calc />
      <Concept />
      <WhyContract />
    </div>
  );
}

export default App;
