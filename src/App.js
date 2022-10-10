import "./App.scss";
import Forecast from "./components/content/Forecast";
import UseFetch from "./components/content/UseFetch";

const App = ()=> {

  const [data] = UseFetch("http://api.openweathermap.org/data/2.5/forecast?lat=56.4118&lon=10.8949&appid=34432d43abb73163c0b689bca70f0469&units=metric");
  // const [data] = UseFetch("assets/settings.json");

  return (
    <div id="mainContainer">

      <header id="header" >
        Vejret
      </header>

      <section>

        {
          data && 
          <Forecast items={data.list} />
        }


        <section id="subgrid" className="grid">
          <article id="mImg">
            <figure>
              <img src="/assets/images/image1.jpeg" />
              <figcaption>
                Blå himmel, sol og forår: Men vinden snyder dig i de her dage
              </figcaption>
            </figure>
          </article>

          <article id="mImg">
            <figure>
              <img src="/assets/images/image2.jpeg" />
              <figcaption>
                Ok ... Så er vi med igen ... det svigter aldrig, ok sydover lige
                nu
              </figcaption>
            </figure>
          </article>
        </section>

        <article id="bottomArticle">
          <figure>
            <img src="/assets/images/summer.jpeg" />
          </figure>
          <div>
            <header id="article-image-right-text">
              Det bliver varmere snart
            </header>
            <span>Op til 19 grader og høj sol lige om hjørnet...</span>
          </div>
        </article>

      </section>

    </div>
  );
}

export default App;
