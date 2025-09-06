import BarraLateral from './containers/BarraLatera'
import ListaDeTarefas from './containers/ListaDeTarefas'
import EstiloGlobal, { Container } from './style'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
