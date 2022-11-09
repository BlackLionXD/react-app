
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Create';
export default function App(){


return(
  <BrowserRouter>
     <div className="App">
      <Navbar/>
     <div className="content">
        <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path = "/create" element= {<Create/>}/>

        </Routes>
     </div>

     </div>


  </BrowserRouter>


);
}
