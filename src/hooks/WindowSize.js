import { useEffect, useState } from 'react';

const WindowSize = () => {

  const [windowSizes, setWindowSizes] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const handleResize = () => {
    setWindowSizes({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  useEffect(() => {

    window.addEventListener("resize", handleResize, false)

  }, []);

  return windowSizes;

}

export default WindowSize;