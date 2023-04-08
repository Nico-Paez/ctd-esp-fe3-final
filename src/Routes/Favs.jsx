import Card from '../Components/Card'
import React, { useCallback, useContext, useState } from 'react'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {theme} = useContext(ContextGlobal)

  const [dentista, setDentista] = useState(JSON.parse(localStorage.getItem('dentistFav')))
    useCallback(() => {
      (async () => {
        const getData = () => {
          return JSON.parse(localStorage.getItem('dentistFav'))
        }   
        setDentista(getData())
      })();
    }, [])

  return (
    <>
      <h1 className={`${theme}`}>Dentists Favs</h1>
      <div className={`${theme} card-grid`}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {dentista && dentista.map((dentista)=>(
        <Card key={dentista.id} name={dentista.name} username={dentista.username} id={dentista.id} />
        ))}
      </div>
    </>
  );
};

export default Favs;
