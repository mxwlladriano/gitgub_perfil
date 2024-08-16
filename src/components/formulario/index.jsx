import { useState, useEffect } from "react"

const Formulario = (props) => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('iniciou');

        return() => {
            console.log("Finalizou")
        }
    }, []);


    useEffect(() => {
        console.log('O Estado mudou');
    }, [nome]);

    useEffect(() => {
        console.log('A materia mudou');
    }, [materiaA, materiaB,materiaC]);

    const alteraNome = (evento) => {
        setNome(estadoAnterior =>{


            return evento.target.value;
        })
    }

    const renderizaResultado = () =>{
        const soma = materiaA + materiaB + materiaC;
        const media = soma/3;

        if (media >= 7) {
            return(
                <p> Olá {nome} você foi aprovado!</p>
            )
        } else{
            return(
                <p> Olá {nome} você não foi aprovado!</p>
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

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota Materia A" onChange={({target}) => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota Materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota Materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario