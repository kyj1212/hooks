import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from './component/home' 
import Menu from './component/menu'
import Shop from './component/shop'

const Router = () => {

 return (
 <BrowserRouter>
  <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path='/shop' element={<Shop/>}/>
    </Routes>
    </AnimatePresence>
  </BrowserRouter>
)
}

export default Router; 