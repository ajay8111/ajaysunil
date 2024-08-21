import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Project';
import Footer from './components/Footer';
import LeafAnimation from './components/LeafAnimation'; // Import the LeafAnimation component
import './App.css';

function App() {
  return (
    <div className="App">
      <LeafAnimation /> {/* Add the LeafAnimation component */}
      <Header />
      <About />
      <Skills />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
