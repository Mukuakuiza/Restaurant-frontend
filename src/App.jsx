import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Dishes from "./components/Dishes.jsx";


function App() {

  return (
      <main className="overflow-y-hidden text-neutral-200 antialiased">
          <Hero/>
          <Navbar/>
          <Dishes/>
      </main>
  )
}

export default App;
