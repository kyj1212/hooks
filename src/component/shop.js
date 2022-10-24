import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"
import React, { useState } from "react";

function Shop(){
    const navigate = useNavigate()
    const [cheesequan,setCheesequan] = useState(0)
    
    const price = cheesequan * 19.12

    function addbutton(){
        setCheesequan(cheesequan+1)
    }
    function subbutton(){
        if(cheesequan==0){
            alert("수량을 눌러주세요")
        }else{
            setCheesequan(cheesequan-1)
        }    
    }
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
            <div className='shoppingtitle'>
                <h1>장바구니</h1>
            </div>

        <div className='box'>
            <div className='testtest'>
                <div className='shoppingbox'>      
                    <label class='labelbox'>
                        <input class='checkbox' type="checkbox"/>전체 선택
                    </label>
                    <button class='removebutton'>
                        선택 삭제
                    </button>
                </div>
                <div className='productpizza'>
                    <span className='productpizzaspan'>Pedro's Pizza Product (3개)</span>
                </div>
                <div className='product'>
                    <label class='labelboxcheese'>
                        <input class='checkbox' type="checkbox"/>
                    </label>
                
                    <div className='productimgdiv'>
                        <img className='productimg' src='/img/pizza.png'></img>                  
                    </div>
                    <span className='pizzatitle'>[Pedero] Cheese Pizza</span>
                    <span className='addsub'>
                        <input type='text' class='cheesevalue' value='1'></input>
                        <button class='cheeseadd'>추가</button>
                        <button class='cheesesub'>삭제</button>
                    </span>
                </div>
            </div>       
            <span className='hell'>asd</span>
        </div>
    </motion.div>
    )
}

export default Shop;