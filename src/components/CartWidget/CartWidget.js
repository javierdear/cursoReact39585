import carritoIcono from './carritoLogo.png'


export const CartWidget = () => {

    return(
        <div>
            <p className='contador'>1</p>
            <img className='cartIcon' src={carritoIcono} alt='carrito'/>
            
        </div>
    )
} 
