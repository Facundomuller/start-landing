import Card from "../../Resources/Cards/Card";

const Servicios = () => {

  return (
    <div className="servicios container">
      <h2 className="serviciosTitle">¿Que Hacemos?</h2>
      <div className="serviciosCards">
        <Card
          title="Desarrollo web"
        >
          <p>
            Digitalizamos tu emprendimento y/o negocio y llevamos tus ideas a la web.
          </p>
        </Card>
        <Card
          title="Mantenimiento y soporte"
        >
          <p>
            Te ayudamos en la evolucion y nuevas implementaciones de tu sitio.
          </p>
        </Card>
      </div>
    </div>
  );

}

export default Servicios;