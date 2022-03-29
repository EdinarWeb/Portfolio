import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
          <li>
            <a href="#intro">Home</a>
          </li>
          <li>
            <a href="#portfolio">Portafolio</a>
          </li>
          <li>
            <a href="#works">Trabajos</a>
          </li>
          <li>
            <a href="#testimonials">Testimonios</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
    </div>
  )
}

export default Menu