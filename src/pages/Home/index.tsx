import * as S from './styles'

export type HomeProps = {
  children: React.ReactNode
}

export const Home = () => {
  return (
    <S.Wrapper>
      <S.Container>Início</S.Container>
    </S.Wrapper>
  )
}

export default Home
