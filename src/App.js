import "./App.scss";

function App() {

  return (
    <div id="mainContainer">

      <header id="header" >
        Vejret
      </header>

      <section>

        <figure id="myComponent" style={{ backgroundColor: "#ccc" }}>
          <img src="/assets/images/weather-component.png" />
        </figure>

        <section id="subgrid" className="grid">
          <article id="mImg">
            <figure>
              <img src="/assets/images/image1.jpeg" />
              <figcaption>
                Blå himmel, sol og forår: Men vinden snyder dig i de her dage
              </figcaption>
            </figure>
          </article>

          <article div id="mImg">
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
