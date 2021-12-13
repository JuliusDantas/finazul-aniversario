import React from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import Calc from './components/Calc';
import Concept from './components/Concept';
import WhyContract from './components/WhyContract';
import HowTo from './components/HowTo';
import Faq from './components/Faq';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Calc />
      <Concept />
      <WhyContract />
      <HowTo />
      <Faq />
    </div>
  );
}

export default App;
