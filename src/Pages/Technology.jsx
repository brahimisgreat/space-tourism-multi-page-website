import data from "../data.json";
import { useState } from "react";
import launchVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import "./Technology.css";
import launchVehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import spaceCapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";
import PropTypes from "prop-types";

export const Technology = ({ setPath }) => {
  setPath("technology");
  const [technology] = useState(data.technology);
  const [index, setIndex] = useState(0);
  const images = [
    launchVehiclePortrait,
    spaceportPortrait,
    spaceCapsulePortrait,
  ];

  Technology.propTypes = {
    setPath: PropTypes.func.isRequired,
  };

  const imagesLandscape = [
    launchVehicleLandscape,
    spaceportLandscape,
    spaceCapsuleLandscape,
  ];
  const ismobile = window.innerWidth < 768;
  console.log(ismobile);

  

  console.log(index);

  return (
    <>
      <div className="technology-page">
        <section className="techSection">
          <div className="tech-header">
            <span>03</span>
            <h3>SPACE LAUNCH 101</h3>
          </div>
        </section>

        <section className="tech-img-section">
          <img
            className="tech-img"
            src={images[index]}
            alt="image of space aircraft"
          />
          <img
            className="tech-tablet-desktop"
            src={imagesLandscape[index]}
            alt="image of space aircraft"
          />
        </section>

        <section>
          <div className="tech-nav">
            <button
              className={index === 0 ? "active" : ""}
              onClick={() => setIndex(0)}
            >
              1
            </button>
            <button
              className={index === 1 ? "active" : ""}
              onClick={() => setIndex(1)}
            >
              2
            </button>
            <button
              className={index === 2 ? "active" : ""}
              onClick={() => setIndex(2)}
            >
              3
            </button>
          </div>
        </section>

        <section>
          <div className="tech-info">
            <h3>THE TERMINOLOGY...</h3>
            <h2>{technology[index].name}</h2>
            <p>{technology[index].description}</p>
          </div>
        </section>
      </div>
    </>
  );
};
