import { Navbar } from "./components/Navbar/Navbar";
import './App.css'
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return(

        <div>
            <Navbar />

            <ItemListContainer greeting={"Bienvenidos a mi ecommerce"}/>

            
        </div>
    )
}

export default App;