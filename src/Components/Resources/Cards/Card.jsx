import "./Card.css"

const Card = ({title, children}) => {

  return (
    <div className="cardContainer">
      <h3>{title}</h3>
      <div className="cardContent">
        {children}
      </div>
    </div>
  );

}

export default Card;