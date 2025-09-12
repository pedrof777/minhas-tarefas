import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar JS',
      'Youtube aulao ',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      1
    ),
    new Tarefa(
      'Estudar React',
      'Aula 3 EBAC',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      2
    ),
    new Tarefa(
      'Estudar TS',
      '',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
