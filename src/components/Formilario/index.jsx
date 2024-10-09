import { useState, useEffect } from "react";

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    useEffect(() => {
        console.log('o componente inciou');

        return () => {
            console.log('O componente finalizou');
        }
    }, []);

    useEffect(() => {
        console.log('o do nome estado mudou');
    }, [nome]);

    useEffect(() => {
        console.log("materia A mudou para: " + materiaA);
    }, [materiaA, materiaB, materiaC]);

    const alteraNome = (event) => {
        //console.log(event.target.value);
        //setNome(event.target.value);
        setNome(estadoAnterior =>{
            //console.log(estadoAnterior);
            return event.target.value;
        })
    }

    const renderizaResultado = () =>{
        const soma = materiaA+materiaB+materiaC;
        const media = soma /3;

        if(media>=7){
            return (
                <p>Olá {nome} foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome} não foi aprovado</p>
            )
        }
    }

    return(
        <form>
        <ul>
            {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
            

            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota da matéria A" onChange={event => setMateriaA(parseInt(event.target.value))} />
            <input type="number" placeholder="Nota da matéria B" onChange={event => setMateriaB(parseInt(event.target.value))} />
            <input type="number" placeholder="Nota da matéria C" onChange={event => setMateriaC(parseInt(event.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;