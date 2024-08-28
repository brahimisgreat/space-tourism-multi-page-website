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
      <div className="crew-overlay">
        <div className="crew-container">
          <article className="box-1">
            <h4>
              <span>02</span> MEET YOUR CREW
            </h4>
          </article>

          <section className="box-2 flex flex-col gap-2">
            <h4>{crew[index].role}</h4>
            <h3>{crew[index].name}</h3>
            <p>{crew[index].bio}</p>
          </section>

          <section className="box-3">
            <div className="button-container">
              <button style={index == 0 ? {backgroundColor: 'white'}: {backgroundColor:'#484848'}}  onClick={() => setIndex(0)}></button>
              <button style={index == 1 ? {backgroundColor: 'white'}: {backgroundColor:'#484848'}} onClick={() => setIndex(1)}></button>
              <button style={index == 2 ? {backgroundColor: 'white'}: {backgroundColor:'#484848'}} onClick={() => setIndex(2)}></button>
              <button style={index == 3 ? {backgroundColor: 'white'}: {backgroundColor:'#484848'}} onClick={() => setIndex(3)}></button>
            </div>
            <div className="img-container">
              <img src={crewImages[index]} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
