import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"

function Shop(){
    const navigate = useNavigate()
    function homebutton(){
        navigate('/')
    }
    function menubutton(event){
        navigate('/menu')
    }
    return(
        <motion.div
        initial={{opacity : 0}}
        animate={{opacity : 1}}
        exit={{opacity : 0}}
        >
           <div class='height'>
                <div className="pizzaname">
                    <h2>Pedro Pizza</h2>
                </div>
                <div class="buttonstate">
                    <h2 onClick={homebutton} class='homebutton'>Home</h2>
                    <h2 onClick={menubutton} class="menubutton">Menu</h2>
                    <h2 class="firstorderbutton">Shopping</h2>
                    <h2 class='loginbutton'>Login</h2>   
                </div>     
            </div>
           
        </motion.div>
    )
}

export default Shop;