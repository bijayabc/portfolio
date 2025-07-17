import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App; 