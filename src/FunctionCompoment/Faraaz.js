import React ,{ useState, useEffect } from "react"

function Faraaz(){
    const [brand, setBrand] = useState("Ford");
    const [models, setModels] = useState("Mustang");
    const [color, setColor] = useState("red");
    const [year, setYear] = useState(1964);

    const changeColor = () => {
        setColor("blue");
        setBrand("bmw");
        setYear("2023");
        setModels("ford");
    }

    return(
        <>
        <p>my brand is {brand}</p>
        <p>my brand is {models}</p>
        <p>my brand is {year}</p>
        <p>my brand is {color}</p>
        <button onClick={changeColor}>change color</button>
        </>
    )

}

export default Faraaz
