import { buildQueries } from "@testing-library/react";
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";



function Home(){
    const navigate = useNavigate()
    
    function menubutton(event){
        navigate('/menu')
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
                    <h2 class='homebutton'>Home</h2>
                    <h2 onClick={menubutton} class="menubutton">Menu</h2>
                    <h2 onClick={shopbutton} class="firstorderbutton">Shopping</h2>
                    <h2 class='loginbutton'>Login</h2>
                    
                </div>
            </div>
            <div style={{
                background: 'url(/img/pizza.png)',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                width: "100vw"           
            }}>
            <div class="title">
                <h1>Pedro's Pizza</h1>
                <div class="subtitle">
                    pedro피자 주문하러 가기
                </div>
                </div>
            </div>
           
        </motion.div>         
    )
}

export default Home;