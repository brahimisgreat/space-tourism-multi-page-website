import planetsData from "../data.json";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import { NavLink } from "react-router-dom";
import "./Destination.css";
import { useState } from "react";

export const Destination = () => {
  const [planets] = useState(planetsData.destinations);
  const [PlanetIndex, setPlanetIndex] = useState(0);

  const planetImages = [moon, mars, europa, titan];

  function handleClick(index) {
    setPlanetIndex(index)
  }

  return (
    <>
    <div className="bg">
    </div>

      <section className="destination">
        <header>
          <div className="des-title">
            <span>0{PlanetIndex + 1}</span>
            <h4>PICK YOUR DESTINATION</h4>
          </div>

          <div>
            <img className="img w-56 h-56" src={planetImages[PlanetIndex]} alt="moon" />
          </div>
        </header>

        <section className="explanation">
          <nav>
            <button className={PlanetIndex === 0 ? 'active': ''} onClick={()=> handleClick(0)} >MOON</button>
            <button className={PlanetIndex === 1 ? 'active': ''} onClick={()=> handleClick(1)}>MARS</button>
            <button className={PlanetIndex === 2 ? 'active': ''} onClick={()=> handleClick(2)}>EUROPA</button>
            <button className={PlanetIndex === 3 ? 'active': ''} onClick={()=> handleClick(3)}>TITAN</button>
          </nav>

          <div className="planetName-container border-solid">
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
