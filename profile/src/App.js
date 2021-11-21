
import './App.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Skills/>
    </div>
  );
}

export default App;
