import './App.css';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Story from './components/Story/Story';
import Training from './components/Training/Training';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Story />
      <Training />
    </div>
  );
}

export default App;
