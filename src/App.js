import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { useState } from 'react';
import About from './components/About/About';

function App() {
  const [darkness, setDarkness] = useState('dark')

  return (
    <div className="App" id={darkness}>
      <Navbar darkness={darkness} setDarkness={setDarkness}/>
      <Home darkness={darkness} />
      <About darkness={darkness} />
    </div>
  );
}

export default App;
