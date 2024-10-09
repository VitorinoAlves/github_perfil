import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formilario";
import ReposList from "./components/ReposList";
import './global.css'


function App() {
  const [formularioVisivel, setFormularioVisivel]=useState(false);
  const [nomeUsuario, setNomeUsuario]=useState('');
  return(
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}></input>
    
    {nomeUsuario.length>4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario}/>
        <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}
    
    {formularioVisivel && (
      <Formulario />
    )}
    
    <button onClick={() => setFormularioVisivel(!formularioVisivel)} type="button">toggle form</button>
    </>
    
  )
}

export default App
