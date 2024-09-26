import CartWidget from './CartWidget'
import logo from '../../assets/logo.jpeg'
import "./navbar.scss"
const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-lg">
        <div className='brand'>
          <img src={logo} alt="" width={35} />
        </div>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">AnaStore</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Iphone</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mac</a>
              </li>
              <li className="nav-item">
                <CartWidget />
              </li>
            </ul>
          </div>
        </div>
      </nav>  
  )
}


export default NavBar