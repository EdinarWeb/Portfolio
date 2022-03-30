import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#intro">Home</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#portfolio">Portafolio</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#works">Trabajos</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#testimonials">Testimonios</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
    </div>
  )
}

export default Menu