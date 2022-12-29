import { useState } from "react";

const Mobile = ({data}) => {

  const [openClose, setOpenClose] = useState({
    display: "none",
    opacity:  "0",
    right: "-300%"
  });
  const [burguer, setBurguer] = useState("")

  const setStateMenu = () => {

    if (openClose.display === "none") {
      setOpenClose({
        display: "block",
        opacity:  "0",
        right: "-300%"
      });
      setTimeout(() => {
        setOpenClose({
          display: "block",
          opacity:  "1",
          right: "0%"
        })
      }, 300);
    } else {
      setOpenClose({
        opacity:  "0",
        right: "-300%"
      });
      setTimeout(() => {
        setOpenClose({
          display: "none",
        });
      }, 300);
    }

    burguer === "" ? setBurguer("close") : setBurguer("");

  }

  const openCloseMenu = (openClose)

  return (

    <>
      <div className={`mobileMenuBtn ${burguer}`} onClick={setStateMenu}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="mobileListMenu" style={openCloseMenu}>
        <ul>
          {
            data.map((item) => {

              if (!item.visible) {
                
              } else {
                return (

                  <li key={item.id}>
                    <a href={item.url}>
                      <p>{item.title}</p>
                    </a>
                  </li>
                
                )
              }

            })
          }
        </ul>
      </div>
      <div className="shadowMenu" style={openCloseMenu} onClick={setStateMenu}></div>
    </>
    
  );

}

export default Mobile;