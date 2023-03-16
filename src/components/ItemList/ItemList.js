import { useState } from "react"
import { Item } from "../Item/Item"

export const ItemList = () =>{
    
    const [productos, setProductos] = useState([])
    fetch('../../data/productos.json').then(data => {
        data.json()
    }).then(productos => {
       console.log(productos)
    }).catch(err => {console.log(err);})



    return (
        <div>

        </div>
    )
}