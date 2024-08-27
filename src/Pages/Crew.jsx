import data from "../data.json";
import "./Crew.css";
import { useState } from "react";
import douglas from '../assets/crew/image-douglas-hurley.png'
import mark from '../assets/crew/image-mark-shuttleworth.png'
import victor from '../assets/crew/image-victor-glover.png'
import anousheh from '../assets/crew/image-anousheh-ansari.png'

export const Crew = () => {

const [index, setIndex] = useState(0);
  const { crew } = data;

  const crewImages = [douglas, mark, victor, anousheh];

  


  console.log(crew);
  return (
    <>
      <div className="crew-overlay">
        <div className="crew-container">
          <article className="box-1">
            <h4>
              <span>02</span> MEET YOUR CREW
            </h4>
          </article>

          <section className="box-2">
            <h3>{crew[index].role}</h3>
            <h3>{crew[index].name}</h3>
            <p>{crew[index].bio}</p>
          </section>

          <section className="box-3">
            <button onClick={()=> setIndex(0)}>0</button>
            <button onClick={()=> setIndex(1)}>1</button>
            <button onClick={()=> setIndex(2)}>2</button>
            <button onClick={()=> setIndex(3)}>3</button>
            <img  src={crewImages[index]}/>
          </section>
        </div>
      </div>
    </>
  );
};
