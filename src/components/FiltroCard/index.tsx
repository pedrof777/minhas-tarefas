import * as S from './styles'

export type Props = {
  ativo?: boolean
  legenda: string
  contador: number
}

const FiltroCard = ({ contador, legenda, ativo }: Props) => (
  <div>
    <S.Card ativo={ativo}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  </div>
)

export default FiltroCard
