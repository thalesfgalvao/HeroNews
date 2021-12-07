import * as S from './style'
export type HomeProps = {
  children: React.ReactNode
}

export const Home = ({ children }: HomeProps) => {
  return (
    <S.Wrapper>
      <S.Container>{children}</S.Container>
    </S.Wrapper>
  )
}
