import './Navbar.scss'
import mateLogo from './mate.png'
import { CartWidget } from '../CartWidget/CartWidget'


export const Navbar = () => {

    return(
        <header className="header">
            <div className="header__container">
                <div className='logo__container'>
                    <img src={mateLogo} alt='logo' className='header__logo'></img> 
                     <h1 className="header__logo">La Unión del Mate</h1>
                </div>
              
                <nav className="navbar">
                    <a href="#" className="navbar__link">Inicio</a>
                    <a href="#" className="navbar__link">Mates</a>
                    <a href="#" className="navbar__link">Bombillas</a>
                    <a href="#" className="navbar__link">Accesorios</a>
                </nav>

            <CartWidget/>
            </div>
        </header>
    )
}