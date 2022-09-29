import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import StayConnected from './components/StayConnected/StayConnected';
import Story from './components/Story/Story';
import ToTop from './components/ToTop/ToTop';
import Trainer from './components/Trainer/Trainer';
import Training from './components/Training/Training';
import TrainingOverview from './components/TrainingOverview/TrainingOverview';
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
      <TrainingOverview />
      <Trainer />
      <ToTop />
      <Footer />
    </div>
  );
}

export default App;
