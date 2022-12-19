import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';

// styles
import './App.scss';

// hooks
import { useTheme } from './hooks/useTheme';

function App() {
  const { darkness, changeDarkness } = useTheme()

  return (
    <div className={`App ${darkness}`}>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
