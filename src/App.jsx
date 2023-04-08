import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import {ContextGlobal} from './Components/utils/global.context'
import { useContext } from "react";

function App() {

  const {theme} = useContext(ContextGlobal)

  return (
      <div className={`${theme} App`}> 
            <Navbar/>
              <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/dentista/:id' element={<Detail/>}/>
                <Route path='/contacto' element={<Contact/>}/>
                <Route path='/favs' element={<Favs/>}/>
              </Routes>
            <Footer/>
      </div>
  );
}

export default App;
