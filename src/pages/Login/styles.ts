import styled, { css, keyframes } from 'styled-components'
import { Card, Form } from 'antd'

const AppearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-5rem)
  } to {
    opacity: 1;
    transform: translateX(0rem);
  }
`

export const AnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${AppearFromLeft} 1s;
`

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.default};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${theme.fonts.family.secundary};
  `}
`

export const TitleLogin = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    text-align: center;
    margin-bottom: 2.5rem;
  `}
`

export const FormLogin = styled(Form)`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xsmall};
    margin-top: 4rem;
  `};
`

export const LoginCard = styled(Card)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.darkGrey};
    max-width: 500rem;
    display: flex;
    flex-direction: column;
    border-radius: 2rem;
    padding: 5rem 5rem 2rem 5rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0.2rem 0.1rem 0.2rem 0.1rem;
  `}
`

export const BottomFormLoginElements = styled.div`
  display: flex;
  margin-top: 1rem;
`

export const ForgotPassword = styled.p`
  ${({ theme }) => css`
    margin-top: 0.8rem;
    margin-left: 0.8rem;
    font-size: ${theme.fonts.sizes.xsmall};
    color: ${theme.colors.grey};
    text-align: right;
    transition: 100ms ease-in;
    max-width: 13rem;

    &:hover {
      color: ${theme.colors.darkGrey};
      transition: 100ms ease-out;
    }
  `}
`

export const CopyrightWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 6rem;
`

export const LoginPageText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xsmall};
    color: ${theme.colors.lightGrey};
  `}
`
