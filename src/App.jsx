import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Dishes from "./components/Dishes.jsx";
import About from "./components/About.jsx";
import Mission from "./components/Mission.jsx";
import Expertise from "./components/Expertise.jsx";
import Review from "./components/Review.jsx";


function App() {

  return (
      <main className="overflow-y-hidden text-neutral-200 antialiased">
          <Hero/>
          <Navbar/>
          <Dishes/>
          <About/>
          <Mission/>
          <Expertise/>
          <Review/>
      </main>
  )
}

export default App;
