import { useEffect, useState } from "react";
import Header from "./layouts/Header"
function App() {


  // cada componente tem seu estado
  const [nome, setNome] = useState('Max');
  const [contador, setContador] = useState(0);
  const [tema, setTema] = useState('light') 

  // cada função é um evento que acontece quando um botão é clicado
  // useEffect é um ciclo de vida do componente
  // a função de callback é chamada quando o componente é montado, quando ele é atualizado e quando ele é desmontado
  // o useEffect recebe um array como segundo argumento. Se esse array for modificado, a função de callback será chamada novamente
  // se o array está vazio, a função de callback será chamada apenas uma vez quando o componente é montado
  function mensagem(){
    setNome ('Gege..');
  }
  function aumentar(){
    setContador(contador +1);
  }
  function diminuir(){
    setContador(contador -1);
  }

  // O useEffect é chamado somente quando o contador muda de 11 para algum número diferente de 11 ou quando o contador é menor que 1
  useEffect(() => {
    if(contador === 11 || contador < 1){
      setContador(1);
    }
  }, [contador]);

  function trocarTema() {
    if(tema === 'light') {
      setTema('dark')
    } else {
      setTema('light')
    }
  }

  return (
    <>
    <div id={tema}>
      <button onClick={() => trocarTema()}>
        {tema === 'light' ? 'Escuro' : 'Claro'}
      </button>
      <h1>FDEV009{nome}</h1>
      <h1>Contador {contador}</h1>
      <button onClick={mensagem}>Clique aqui</button>
      <p></p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Diminuir</button>
      <Header/>
      </div>
    </>
  )

  
}

export default App;
