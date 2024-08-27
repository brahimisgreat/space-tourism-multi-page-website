import data from "../data.json";
import "./Crew.css";
import { useState } from "react";

export const Crew = () => {

const [index, setIndex] = useState(0);
  const { crew } = data;

  


  console.log(crew);
  return (
    <>
      <div className="crew-overlay">
        <div>
          <article className="box-1">
            <h4>
              <span></span> MEET YOUR CREW
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
            <button onClick={()=> setIndex(2)}></button>
            <button onClick={()=> setIndex(3)}></button>
            <img />
          </section>
        </div>
      </div>
    </>
  );
};
