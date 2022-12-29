import Desktop from "./desktop/Desktop";
import { menuLinks } from "./menuLinks";
import Mobile from "./mobile/Mobile";
import WindowSize from "../../../hooks/WindowSize";

const Menu = () => {
  
  const width = WindowSize().width

  return (
    width > 768 ?
      <Desktop data={menuLinks} />
      :
      <Mobile data={menuLinks} />
  );

}

export { Menu }