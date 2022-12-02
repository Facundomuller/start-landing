import { NavLinks } from "./NavLinks/NavLinks";
import devClimbersLogo from "/img/devclimbers.png"

import "./Header.css";

const Header = () => {

  //let devClimbersLogo = process.env.PUBLIC_URL + "/devclimbers.png";

  return (

    <header className="headerContainer">
      <div className="headerRow container">
        <div className="logo">
          <img src={devClimbersLogo} alt="" />
        </div>
        <div className="navbar">
          <NavLinks />
        </div>
      </div>
    </header>

  )

}

export { Header }