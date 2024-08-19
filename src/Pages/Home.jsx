import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <section className="home">
        <div className="overlay">
          <article>
            <h1>
              SO, YOU WANT TO TRAVEL TO <span>space</span>
            </h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </article>

          <article>
            <button>
                <Link to='/destination'>EXPLORE</Link>
            </button>
          </article>
        </div>
      </section>
    </>
  );
};
