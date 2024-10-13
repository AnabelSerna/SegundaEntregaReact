import CartWidget from "./CartWidget"
import { BsBox } from "react-icons/bs";
import { Link } from "react-router-dom"

import "./navbar.css"

const NavBar = () => {

  return (
    <nav className="navbar">

      <ul className="categories">
        <li className="category">
          <Link to="/category/Iphone" className="text-link">Iphone</Link>
        </li>
        <li className="category">
          <Link to="/category/Watch" className="text-link" >Watch</Link>
        </li>
        <li className="category">
          <Link to="/category/macbook" className="text-link">Macbook</Link>
        </li>
      </ul>

      <Link to="/" className="brand primary-font-color">
        <p className="title-brand ">Inicio</p>
      </Link>

      <CartWidget />
    </nav>
  )
}
export default NavBar