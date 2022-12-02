import Hero from "./Hero/Hero";

import "./Home.css";
import Servicios from "./Servicios/Servicios";

const Home = () => {

  return (
    <div className="home">
      <Hero />
      <Servicios />
    </div>
  );

}

export { Home }