import planets from "../data.json";
import moon from "../assets/destination/image-moon.webp";
import { NavLink } from "react-router-dom";
import "./Moon.css";

export const Destination = () => {
  const planet = planets.destinations[0];

  console.log(planet);

  return (
    <>
      <div className="destinations-overlay">
        <section className="Destinations">
          <div className="yes">
            <h3>
              <span>01</span> PICK YOUR DESTINATION
            </h3>
            <img src={moon} alt="moon" />
          </div>

          <div className="explanations">
            <div className="planets-nav">
              <NavLink to="/destination" className="planet">
                MOON
              </NavLink>
              <NavLink to="/mars" className="planet">
                MARS
              </NavLink>
              <NavLink to="/europa" className="planet">
                EUROPA
              </NavLink>
              <NavLink to="/titan" className="planet">
                TITAN
              </NavLink>
            </div>

            <h1>{planet.name}</h1>

            <p>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>

            <hr />

            <div className="travel-time">
              <div className="travel">
                <span>AVG. DISTANCE</span>
                <p>{planet.distance}</p>
              </div>
              <div className="time">
                <span>EST TRAVEL TIME</span>
                <p>{planet.travel}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
