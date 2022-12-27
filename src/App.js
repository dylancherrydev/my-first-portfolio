import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

// styles
import './App.scss';

// hooks
import { useTheme } from './hooks/useTheme';

function App() {
  const { darkness } = useTheme()

  return (
    <div className={`App ${darkness}`}>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
