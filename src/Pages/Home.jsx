import { Link, } from "react-router-dom";
import "./Home.css";

export const Home = ({setPath, path}) => {
  setPath('home');
  console.log(path);



  return (
    <>
      <section className="home ">
        <div className="home-container ">

          <article className="home-article1  " >
            <h1 className="home-h1 ">
              SO, YOU WANT TO TRAVEL TO <span className=" home-h1-span ">SPACE</span>
            </h1>
            <p className="home-p">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </article>

          <article className="home-article2">
            <button className="home-button animate-pulse"  >
                <Link to='/destination'>EXPLORE</Link>
            </button>
          </article>

        </div>
      </section>
    </>
  );
};
