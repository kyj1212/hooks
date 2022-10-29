import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"
import React, { useState,useRef } from "react";

function Shop(){
    const useref = useRef()
    const navigate = useNavigate()
    const [check,setCheck] = useState()
    const [check2,setCheck2] = useState()
    
    function allchecked(event){
        if(event.target.checked==true){
            setCheck(true)
            setCheck2(true)
        }

        if(event.target.checked==false){
            setCheck(false)
            setCheck2(false)
        }
    }
    
    function personalcheck(event){
       if(event.target.checked==false){
        setCheck2(false)
        setCheck(false)
       }
       if(event.target.checked==true){
        setCheck2(true)
        setCheck(true)
       }
        
        
    }

  

    function checkremove(){

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
                        <input class='checkbox' type="checkbox" onClick={allchecked} checked={check}/>전체 선택
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
                        <input class='checkbox' type="checkbox" onClick={personalcheck} checked={check2} ref={useref}/>
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
            <span className='pay'>
                <div className='paytitle'>
                    <span className='paytitlespan'>
                        결제예상금액
                    </span>
                </div>
                <div className='payprice'>
                    <span className='paypricetitle'>결제예상금액</span>
                    <span className='paypricenumber'>0원</span>
                </div>
                <div className='paybutton'>
                    <button onClick={checkremove} className='paybuttoncs'>
                        주문하기 (0원)
                    </button>
                </div>
            </span>
        </div>
    
    </motion.div>
    )
}

export default Shop;