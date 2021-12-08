import * as S from './styles'

export interface ICardProps {
  children: React.ReactNode
}

export const Card = ({ children }: ICardProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}
