import styled, { css, keyframes } from 'styled-components'
import { Card as AntdCard, Form as AntdForm } from 'antd'

const AppearFromRight = keyframes`
  from{
    opacity: 0; 
    transform: translateX(5rem)
  } to {
    opacity: 1;
    transform: translateX(0rem);
  }
`

export const AnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${AppearFromRight} 1s;
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
export const Card = styled(AntdCard)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.darkGrey};
    max-width: 50rem;
    display: flex;
    flex-direction: column;
    border-radius: 2rem;
    padding: 5rem 5rem 2rem 5rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0.2rem 0.1rem 0.2rem 0.1rem;
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
  `}
`
export const Form = styled(AntdForm)``

export const ButtonWrapper = styled.div`
  margin-top: 1rem;
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.grey};
    font-size: 1rem;
  `}
`

export const CopyrightWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 6rem;
`

export const RecoverPageText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xsmall};
    color: ${theme.colors.lightGrey};
  `}
`
