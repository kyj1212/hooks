import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

redirect(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Input/>}/>
      <Route path="/hook" element={<Button/>}
    </Routes>
  </BrowserRouter>
)

export default App;