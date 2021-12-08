import styled, { css } from 'styled-components'
import { Card } from 'antd'

export const Wrapper = styled(Card)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.darkGrey};
    max-width: 500rem;
    border-radius: 2rem;
    padding: 5rem 5rem 2rem 5rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0.2rem 0.1rem 0.2rem 0.1rem;
  `};
`

export const Container = styled.div``
