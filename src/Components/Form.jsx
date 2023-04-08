import React, { useContext, useState } from 'react'
import './FormStyles.css';
import { ContextGlobal } from './utils/global.context';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const {theme} = useContext(ContextGlobal)

  const [user, setUser] = useState({
    nombre: '',
    email: ''
  })

  const [show, setShow] = useState(false)
  
  const [err, setErr] = useState(false)

  function validarEmail(email) {
    var patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(user.nombre.charAt(0) !== " " && user.nombre.length > 5 && validarEmail(user.email)){
        setShow(true)
        setErr(false)
    } else {
        setErr(true)
    }

}

  return (
    <div className='form'>
      <form onSubmit={handleSubmit} className={`${theme}`}>
        <input placeholder="Full name" type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
        <input placeholder="Email" type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
        <button>Send</button>
        {err && 'Por favor verifique su información nuevamente'}
      </form>
      {show  && `Gracias ${user.nombre}, te contactaremos cuando antes vía mail`}
    </div>
  );
};

export default Form;
