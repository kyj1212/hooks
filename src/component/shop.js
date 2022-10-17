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
            <div class="shopbag">
                <span class='shopbagspan'>장바구니</span> 
            </div>
            <div class='shopdiv'>       
                <label class='labelbox'>
                    <input class='checkbox' type="checkbox"/>전체 선택
                </label>
                <button class='removebutton'>
                    선택 삭제
                </button><br/>
                <div class='pizzaproductname'>
                   <span class='pizzaproductnamesp'>Pedro's Pizza 상품(3개)</span>
                </div>
                <div class='cheeseheight'>
                    <label class='cheeselabel'>
                        <input class='checkbox' type="checkbox"/>
                    </label>
                    <img class='shopcheeseimg' src='/img/pizza.png'></img>
                    <span class='cheesefont'>
                        [Pedro] Cheese Pizza
                    </span>
                    <button class='cheesevalue'>{cheesequan}</button>
                    <button onClick={addbutton} class='cheeseadd'>+</button>
                    <button onClick={subbutton} class='cheesesub'>-</button>
                    <span class='cheeseprice'>19.12$</span>
                </div>
            </div>
            <div class='payment'>
                <div class='expectpay'>
                    <span class='expectpayspan'>예상결제금액</span>
                </div>
                <span class='expectpayspan2'>예상결제금액</span>
                <span class='realpatment'>{price}$</span>
                <button class='finshpay'>주문하기 ({cheesequan}개)</button>
            </div>   
        </motion.div>
    )
}

export default Shop;