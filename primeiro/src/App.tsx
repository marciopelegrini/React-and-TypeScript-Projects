import { Header } from "./components/header";
import { useState } from "react";

export default function App(){
  const [input, setInput] = useState("");
  const [aluno, setAluno] = useState("");

  function mostrarAluno(){
    setAluno(input);
  }

  return(
    <div>
      <Header/>
      <hr/>
      <Aluno nome = "Marcio" idade={35}/>
      <Aluno nome = "Andrei" idade={23}/>

      <br/>
      <input 
        placeholder="Digite un nome"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br/>
      <button onClick={mostrarAluno}>Mostrar Aluno</button>
      <br/>
      <h3>Bem vindo: {aluno} </h3>
    </div>
  )
}

interface AlunoProps{
  nome: string;
  idade: number;
}

function Aluno({ nome, idade }: AlunoProps){
  return(
    <div>
      <h2>Aluno: { nome } </h2>
      <h3>Idade: {idade}</h3>
    </div>
  )
} 