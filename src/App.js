import Hero from "./components/hero/Hero";
import AboutUs from "./components/about-us/AboutUs";
import AboutYou from "./components/about-you/AboutYou";
import WorkingDay from "./components/day/WorkingDay";
import Benefits from "./components/benefits/Benefits";
import Copyright from "./components/copyright/Copyright";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Hero />
      <AboutUs />
      <AboutYou />
      <WorkingDay />
      <Benefits />
      <Copyright />
    </div>
  );
}

export default App;
