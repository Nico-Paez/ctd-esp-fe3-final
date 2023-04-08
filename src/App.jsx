import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import {ContextProvider} from './Components/utils/global.context'

function App() {
  return (
      <div className="App"> 
          <ContextProvider>
            <Navbar/>
              <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/dentista/:id' element={<Detail/>}/>
                <Route path='/contacto' element={<Contact/>}/>
                <Route path='/favs' element={<Favs/>}/>
              </Routes>
            <Footer/>
          </ContextProvider>
      </div>
  );
}

export default App;
