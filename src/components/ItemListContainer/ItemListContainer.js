import { ItemList } from '../ItemList/ItemList'
import './ItemListContainer.scss'


export const ItemListContainer = ({greeting}) =>{

    return (
        <div className="contenedor">
            <h2>Item List Container</h2>
            {greeting}
            <ItemList/>
        </div>

    )
}
