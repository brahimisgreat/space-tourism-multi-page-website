import planetsData from "../data.json";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import { Link } from "react-router-dom";
import "./Destination.css";
import { useState } from "react";

export const Destination = () => {
  const [planets] = useState(planetsData.destinations);
  const [PlanetIndex, setPlanetIndex] = useState(0);

  const planetImages = [moon, mars, europa, titan];

  return (
    <>
    <div className="bg">
    </div>

      <section className="destination">
        <header>
          <div>
            <span>0{PlanetIndex + 1}</span>
            <h4>PICK YOUR DESTINATION</h4>
          </div>

          <div>
            <img className="w-56 " src={planetImages[PlanetIndex]} alt="moon" />
          </div>
        </header>

        <section className="explanation">
          <nav>
            <button onClick={() => setPlanetIndex(0)}>MOON</button>
            <button onClick={() => setPlanetIndex(1)}>MARS</button>
            <button onClick={() => setPlanetIndex(2)}>EUROPA</button>
            <button onClick={() => setPlanetIndex(3)}>TITAN</button>
          </nav>

          <div className="planetName-container">
            <h2>{planets[PlanetIndex].name}</h2>
          </div>

          <div className="planet-description-container">
            <p>{planets[PlanetIndex].description}</p>
          </div>

          <div className="planetsStats-container">
            <div className="distance">
              <span>AVG. DISTANCE</span>
              <p>{planets[PlanetIndex].distance}</p>
            </div>

            <div className="travelTime">
              <span>EST. TRAVEL TIME</span>
              <p>{planets[PlanetIndex].travel}</p>
            </div>
          </div>
        </section>
      </section>
    
    </>
  );
};
