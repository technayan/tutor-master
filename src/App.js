import './App.css';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Story from './components/Story/Story';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Story />
    </div>
  );
}

export default App;
