import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';
import './NavBarStyles.css';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  const {setInTheme, setOutTheme, theme} = useContext(ContextGlobal)

  const isDarkMode = theme === "dark" || false;

  const cambiarTema = () => {     
    if (isDarkMode){
      setOutTheme(); 
    } else {
      setInTheme()
    };
  }

  return (
    <nav className={`${theme} nav`}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <p className='tituloNav'>DH Odonto</p>
      <div>
        <Link to='/home'><h3>Home</h3></Link>
        <Link to='/contacto'><h3>Contact</h3></Link>
        <Link to='/favs'><h3>Favs</h3></Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button className={`${theme} buttonTheme`} onClick={cambiarTema}>{isDarkMode ? "☀" : "🌙"}</button>
      </div>
    </nav>
  )
}

export default Navbar