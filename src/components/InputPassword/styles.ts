import { Input as AntdInput } from 'antd'
import styled, { css } from 'styled-components'

interface IErrors {
  error?: string
}

export const InputPassword = styled(AntdInput.Password)<IErrors>`
  && {
    ${({ theme, error }) => css`
      width: 100%;
      font-size: ${theme.fonts.sizes.small};
      height: 3.4rem;
      border-radius: 0.8rem;
      padding: 1rem;
      color: ${theme.colors.grey};
      padding: 0rem 1rem 0rem 3rem;

      &:hover {
        outline: none;
      }

      ${error &&
      css`
        border-color: ${theme.colors.error};
      `};
    `};
  }
`

export const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors.darkGrey};
    margin-bottom: 0.5rem;
  `}
`
