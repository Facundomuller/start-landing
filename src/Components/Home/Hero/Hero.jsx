import heroImage from "/img/home/web-wall.jpg";

const Hero = () => {
  
  return (
    <div className="heroImage">
      <img src={heroImage} alt="Imagen" />
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