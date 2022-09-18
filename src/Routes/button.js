import React, {useState} from 'react';
import {useSearchParams} from 'react-router-dom';


function Button(){ 
    const [searchParams] = useSearchParams();
    const [value,setValue] = useState(searchParams.get("value"))

    return(
       <div>
          {value}
       </div>
    )
}

export default Button;