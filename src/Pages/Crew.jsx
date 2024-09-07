import data from "../data.json";
import "./Crew.css";
import { useState } from "react";
import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";

export const Crew = ({setPath, path}) => {
  setPath('crew');
  console.log(path);
  const [index, setIndex] = useState(0);
  const { crew } = data;

  const crewImages = [douglas, mark, victor, anousheh];

  console.log(crew);
  return (
    <>
      <article className="crew-page">
        <div className="crew-title ">
          <section className="crew-section">
            <span>02</span>
            <h4>MEET YOUR CREW</h4>
          </section>

          <section className="role">
            <span>{crew[index].role}</span>
            <h3>{crew[index].name}</h3>
          </section>

          <section className="bio">
            <p>{crew[index].bio}</p>
          </section>

          <nav className="crew-nav">
            <button onClick={() => setIndex(0)} className={index === 0 ? 'active' : ''}></button>
            <button onClick={() => setIndex(1)} className={index === 1 ? 'active' : ''} ></button>
            <button onClick={() => setIndex(2)} className={index === 2 ? 'active' : ''} ></button>
            <button onClick={() => setIndex(3)} className={index === 3 ? 'active' : ''} ></button>
          </nav>
        </div>

        <div className="img">
          <img  src={crewImages[index]} alt="image of crew member" />
        </div>
      </article>
    </>
  );
};
