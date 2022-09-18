import { useState } from "react";
import {Link} from "react-router-dom"




function Input(){
    const [put,setPut] = useState("")

    function onChange(event){
        setPut(event.target.value)
    }


    return(
        <div>
           <input  onChange={onChange}  value={put} type="text"></input>
           <Link to={{pathname:'/hook', search:`value=${put}`}}>
           <button>move</button>
           </Link>
        </div>
    )
}

export default Input;