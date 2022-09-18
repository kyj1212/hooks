import { useState } from "react";
import {Link} from "react-router-dom"


const [put,setPut] = useState("")

function Input(){
    function onChange(event){
        setPut()

    }

    return(
        <input onChange={onChange}  value={put} type="text"></input>
        <button Link to="/hook"></button>
    )
}

export default Input;