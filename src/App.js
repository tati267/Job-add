import Hero from "./components/hero/Hero";
import AboutUs from "./components/about-us/AboutUs";
import AboutYou from "./components/about-you/AboutYou";
import WorkingDay from "./components/day/WorkingDay";
import Benefits from "./components/benefits/Benefits";
import "./App.css";

function App() {
  return (
    <div class="container">
      <Hero />
      <AboutUs />
      <AboutYou />
      <WorkingDay />
      <Benefits />
    </div>
  );
}

export default App;
