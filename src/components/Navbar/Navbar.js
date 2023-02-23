import './Navbar.scss'

export const Navbar = () => {

    return(
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">LOGO</h1>
        
                <nav className="navbar">
                    <a href="#" className="navbar__link">Inicio</a>
                    <a href="#" className="navbar__link">Productos</a>
                    <a href="#" className="navbar__link">Nosotros</a>
                    <a href="#" className="navbar__link">Contacto</a>
                </nav>
            </div>
        </header>
    )
}