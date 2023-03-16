import { useState } from "react"

export const Contador = () =>{

const [counter, setCounter] = useState(0)
    console.log(counter)

    const handleClick = () =>{
        setCounter( counter + 1)
        console.log(counter)
    }

    return(
        <div className="container my-5">
            <button onClick={handleClick} className="btn btn-primary">Click me!</button>
            <p>Clicks: {counter}</p>
        </div>
    )
}

