
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Project from './components/Projects/Project';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
    <Project/>
      <Skills />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
