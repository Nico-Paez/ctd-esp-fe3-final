import Card from '../Components/Card'
import React, { useContext, useEffect, useState } from 'react'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {theme} = useContext(ContextGlobal)

  const [dataDentista, setDataDentista] = useState([])

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
      fetch(url)
      .then(response => response.json())
      .then(data => setDataDentista(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <main className={`${theme} nav`}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dataDentista.map((dentista)=>(
          <Card key={dentista.id} name = {dentista.name} username = {dentista.username} id = {dentista.id}/>
        ))}
      </div>
    </main>
  )
}

export default Home