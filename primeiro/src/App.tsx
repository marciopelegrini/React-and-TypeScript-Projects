import { Header } from "./components/header";

export default function App(){
  return(
    <div>
      <Header/>
      <hr/>
      <Aluno nome = "Marcio" idade={35}/>
      <Aluno nome = "Andrei" idade={23}/>
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