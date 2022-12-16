import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value = {{ theme, toggleTheme }}>
    <div className="App" id={theme}>
      <Navbar/>
      <Home />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
