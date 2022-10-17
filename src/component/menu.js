import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"
import '../App.css'

function Menu(){
    const navigate = useNavigate()

    function homebutton(){
        navigate('/')
    }
    function shopbutton(){
        navigate('/shop')
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
                    <h2 class="menubutton">Menu</h2>
                    <h2 onClick={shopbutton} class="firstorderbutton">Shopping</h2>
                    <h2 class='loginbutton'>Login</h2>   
                </div>
            </div>
            <div class='ourmenu'>
                Our Menu
            </div>
            <div class='pizza'>
            
                <div class='cheesephotodiv'>
                    <img class='cheesephoto' src='/img/pizza.png'></img>
                    <h2 class='cheeseinfor'>Cheese Pizza</h2>         
                    <h4 class='cheeseprice'>                  
                    $19.12 <button class='button'>장바구니</button>
                    </h4>
                </div>

                <div class='gogumaphotodiv'>
                    <img class='cheesephoto' src='/img/pizza.png'></img>
                    <h2 class='cheeseinfor'>고구마 피자 </h2>         
                    <h4 class='cheeseprice'>$19.12 <button class='button'>장바구니</button></h4>
                </div>

                <div class='pepephotodiv'>
                    <img class='cheesephoto' src='/img/pizza.png'></img>
                    <h2 class='cheeseinfor'>페퍼로니 피자</h2>         
                    <h4 class='cheeseprice'>$19.12 <button class='button'>장바구니</button></h4>
                </div>  
               
                 
            </div>
           
        </motion.div>
    )
}

export default Menu;