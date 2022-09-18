import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Input from './Routes/input'
import Button from './Routes/button'

const App = () => {
 return (
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Input/>}/>
      <Route path="/hook" element={<Button/>}/>
    </Routes>
  </BrowserRouter>
)
}

export default App;