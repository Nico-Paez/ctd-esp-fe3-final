import React, { useState, useEffect, useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import './DetailStyle.css';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const {theme} = useContext(ContextGlobal)

  const [dataDentista, setDataDentista] = useState([]);

  let identificadorID = JSON.parse(localStorage.getItem("user"))
    const url = `https://jsonplaceholder.typicode.com/users/${identificadorID}`
  
    useEffect(() => {
      try{
        fetch(url)
        .then(response => response.json())
        .then(data => setDataDentista(data))
      }catch(err){
        console.log(err)
      }
    }, []);

  return (
    <>
      <h1 className={`${theme}`}>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className={`${theme} datos`}>
        <div>
          <p className='p-1'>Name:</p>
          <p className={`${theme} p-2`}>{dataDentista.name}</p>
        </div>
        <div>
          <p className='p-1'>Email:</p>
          <p className={`${theme} p-2`}>{dataDentista.email}</p>
        </div>
        <div>
          <p className='p-1'>Phone:</p>
          <p className={`${theme} p-2`}>{dataDentista.phone}</p>
        </div>
        <div>
          <p className='p-1'>Website:</p>
          <p className={`${theme} p-2`}>{dataDentista.website}</p>
        </div>
      </div>
    </>
  )
}

export default Detail