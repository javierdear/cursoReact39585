import { useState, useEffect } from "react"
import { Item } from "../Item/Item"

export const ItemList = () =>{
    
    const [productos, setProductos] = useState([])
      useEffect(() => {
          fetch(
            "https://raw.githubusercontent.com/javierdear/cursoReact39585/main/src/data/MOCK_DATA.json"
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setProductos(data);
            })
            .catch((error) => console.log(error));
        }, []);

    return (
        <div>

        </div>
    )
}