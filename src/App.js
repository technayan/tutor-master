import './App.css';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import StayConnected from './components/StayConnected/StayConnected';
import Story from './components/Story/Story';
import Training from './components/Training/Training';
import WhySection from './components/WhySection/WhySection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Story />
      <Training />
      <WhySection />
      <StayConnected />
    </div>
  );
}

export default App;
