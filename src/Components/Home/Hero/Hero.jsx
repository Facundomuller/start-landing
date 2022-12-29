import heroImage from "/img/home/web-wall.jpg";
import heroImageMb from "/img/home/web-wall-mobile.png";
import WindowSize from "../../../hooks/WindowSize";

const Hero = () => {

  const width = WindowSize().width

  return (
    <div className="heroImage">
      {
        width < 768 ?
        <img src={heroImageMb} alt="Imagen" />
        :
        <img src={heroImage} alt="Imagen" /> 
      }
      <div className="heroContent">
        <div className="heroContentText">
          <h2>
            Creamos tu página web a medida
          </h2>
          <a href="/">
            <button>
              Hablemos!
            </button>
          </a>
        </div>
      </div>
    </div>
  );

}

export default Hero;