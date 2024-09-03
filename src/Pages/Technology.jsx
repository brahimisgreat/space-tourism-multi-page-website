import data from "../data.json";
import { useState } from "react";
import bgMobile from "../assets/technology/background-technology-mobile.jpg";
import bgDesktop from "../assets/technology/background-technology-desktop.jpg";
import launchVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import "./Technology.css";

export const Technology = () => {
  const [technology] = useState(data.technology);
  const [index, setIndex] = useState(0);
  const images = [
    launchVehiclePortrait,
    spaceportPortrait,
    spaceCapsulePortrait,
  ];

  const handleClick = () => {
    console.log('clicked')
  }

  console.log(index);

  return (
    <>
    <div className="technology-bg"></div>
      <div className="technology">
        <section>
          <div className="tech-header">
            <span>03</span>
            <h3>SPACE LAUNCH 101</h3>
          </div>
        </section>

        <section>
          <img
            className="tech-img"
            src={images[index]}
            alt="image of space aircraft"
          />
        </section>

        <section>
          <div className="tech-nav">
            <button className={index === 0 ? "active" : ""} onClick={() => setIndex(0)}>1</button>
            <button className={index === 1 ? "active" : ""} onClick={() => setIndex(1)}>2</button>
            <button className={index === 2 ? "active" : ""} onClick={() => setIndex(2) }>3</button>
          </div>
        </section>

        <section>
          <div className="tech-info">
            <h3>THE TERMINOLOGY...</h3>
            <h2>{technology[index].name}</h2>
            <p>
              {technology[index].description}
            </p>
          </div>
        </section>
      </div>
    
    </>
  );
};
