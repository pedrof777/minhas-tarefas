import { Provider } from 'react-redux'

import BarraLateral from './containers/BarraLatera'
import ListaDeTarefas from './containers/ListaDeTarefas'
import EstiloGlobal, { Container } from './style'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
