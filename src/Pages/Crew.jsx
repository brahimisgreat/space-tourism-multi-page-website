import data from "../data.json";
import "./Crew.css";
import { useState } from "react";
import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";

export const Crew = () => {
  const [index, setIndex] = useState(0);
  const { crew } = data;

  const crewImages = [douglas, mark, victor, anousheh];

  console.log(crew);
  return (
    <>
      <div className="crew-bg"></div>
      <article className="crew">
        <div className="crew-title">
          <section className="crew-section">
            <span>02</span>
            <h4>MEET YOUR CREW</h4>
          </section>

          <section>
            <span>{crew[index].role}</span>
            <h3>{crew[index].name}</h3>
          </section>

          <section>
            <p>{crew[index].bio}</p>
          </section>

          <nav>
            <button onClick={() => setIndex(0)}></button>
            <button onClick={() => setIndex(1)}></button>
            <button onClick={() => setIndex(2)}></button>
            <button onClick={() => setIndex(3)}></button>
          </nav>
        </div>

        <div>
          <img src={crewImages[index]} alt="image of crew member" />
        </div>
      </article>
    </>
  );
};
