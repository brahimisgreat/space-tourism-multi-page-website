import planetsData from "../data.json";
import moon from "../assets/destination/image-moon.webp";
import { Link } from "react-router-dom";
import "./Destination.css";
import { useState } from "react";

export const Destination = () => {
  const [planets] = useState(planetsData.destinations);
  const [PlanetIndex, setPlanetIndex] = useState(0);

  console.log(planets[PlanetIndex]);

  return (
    <>
      <section className="destination">
        <header>
          <span></span>
          <h4>PICK YOUR DESTINATION</h4>
        </header>

        <div>
          <img src={moon} alt="moon" />
        </div>

        <section className="explanation">
          <nav>
            <button onClick={() => setPlanetIndex(0)}>MOON</button>
            <button onClick={() => setPlanetIndex(1)}>MARS</button>
            <button onClick={() => setPlanetIndex(2)}>EUROPA</button>
            <button onClick={() => setPlanetIndex(3)}>TITAN</button>
          </nav>

          <div className="planetName-container">
            <h2></h2>
          </div>

          <div className="planet-description-container">
            <p></p>
          </div>

          <div className="planetsStats-container">
            <div className="distance">
              <span></span>
              <p></p>
            </div>

            <div className="travelTime">
              <span></span>
              <p></p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
