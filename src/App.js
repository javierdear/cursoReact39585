import { Navbar } from "./components/Navbar/Navbar";
import './App.css'
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Contador } from "./ejemplos/Contador/Contador";
import ItemCount from "./ejemplos/ItemCount/ItemCount";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return(

        <div>
            <Navbar />

            <ItemListContainer greeting={"Bienvenidos a mi ecommerce"}/>

            <Contador/>
            <ItemCount/>

            
        </div>
    )
}

export default App;