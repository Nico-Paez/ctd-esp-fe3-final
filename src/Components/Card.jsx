import React, { useContext, useEffect, useState } from "react";
import './CardStyles.css';
import { Link } from 'react-router-dom'
import { ContextGlobal } from "./utils/global.context";
import img from "../assets/doctor.jpg";


const Card = ({ name, username, id }) => {

  const {theme} = useContext(ContextGlobal)

  const {setInData} = useContext(ContextGlobal)

  const [boton, setBoton] = useState('')
  
  const [boton2, setBoton2] = useState('invisible')

  useEffect(() => {
    const favouriteDentist = localStorage.getItem('dentistFav')
    if(favouriteDentist){        
      let favoritesParsed = JSON.parse(favouriteDentist)       
      const filteredDentist = favoritesParsed.filter(item => item.id !== id)       
      const doesExist = filteredDentist.length !== favoritesParsed.length;        
      doesExist ? setBoton2('') : setBoton2('invisible')
      doesExist ? setBoton('invisible') : setBoton('')
      localStorage.setItem('dentistFav', JSON.stringify(favoritesParsed))
    } 
  }, [])

  function setID() {
    setInData(id);
  }

  const addFav = (favsAdd)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const favouriteDentist = localStorage.getItem('dentistFav')     
    if(favouriteDentist){        
      let favoritesParsed = JSON.parse(favouriteDentist)       
      const filteredDentist = favoritesParsed.filter(item => item.id !== favsAdd.id)       
      const doesExist = filteredDentist.length !== favoritesParsed.length;        
      doesExist ? favoritesParsed = filteredDentist : favoritesParsed.push(favsAdd)
      doesExist ? setBoton('') : setBoton('invisible')
      doesExist ? setBoton2('invisible') : setBoton2('')
      localStorage.setItem('dentistFav', JSON.stringify(favoritesParsed))
    }else{
      localStorage.setItem('dentistFav', JSON.stringify([favsAdd]))       
    }
  }

  return (
    <div className={`${theme} card`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <img className="imgDoctor" src={img} alt="doctor.jpg" />
        <div className="div-card">
        <Link to={`/dentista/${id}`} onClick={setID}>
            <h4>{name}</h4>
        </Link>
        <p>{username}</p>
        </div>
        
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={() => addFav({name, username, id})} className={`favButton ${boton} ${theme}`}>Add fav</button>
        <button onClick={() => addFav({name, username, id})} className={`favButton ${boton2} ${theme}`}>Delete fav</button>
    </div>
  );
};

export default Card;