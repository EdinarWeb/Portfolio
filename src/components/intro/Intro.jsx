import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {

  const textRef = useRef() ;
  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true, 
      backDelay:  2000,
      backSpeed:  50,
      strings: ["Programador", "Diseñador", "Creador de Contenido"] 
    });
  },[]);
  return (
    <div className='intro' id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="./assets/man.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hola, Soy</h2>
            <h1>Tony Mejias</h1>
            <h3>Freelance <span ref={textRef}>Designer</span></h3>
          </div>
          <a href="#portfolio">
            <img src="./assets/down.png" alt="" />
          </a>
        </div>
    </div>
  )
}

export default Intro