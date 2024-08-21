import { Link } from "react-router-dom";

export const Home = () => {


  const handleClick = () => {
  }
  return (
    <>
      <section className="home flex items-center px-5">
        <div className="overlay flex  flex-col items-center">

          <article className="home-article1  " >
            <h1 className="home-h1 text-xs  text-gray-400 text-center tracking-widest mb-2 lg:text-left">
              SO, YOU WANT TO TRAVEL TO <span className=" home-h1-span block mt-3 lg:text-left ">SPACE</span>
            </h1>
            <p className="  ">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </article>

          <article className="home-article2 mt-20">
            <button className=" rounded-full w-36 h-36 bg-white text-gray-800 font-bold animate-pulse  " onClick={handleClick} >
                <Link to='/destination'>EXPLORE</Link>
            </button>
          </article>

        </div>
      </section>
    </>
  );
};
