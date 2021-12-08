import styled, { css, DefaultTheme } from 'styled-components'
import { Button as AntdButton } from 'antd'
import { IButtonProps } from '.'

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.darkSuccess};
    &:hover {
      background: ${theme.colors.success};
    }
  `,
  grey: (theme: DefaultTheme) => css`
    background: ${theme.colors.grey};
    &:hover {
      background: ${theme.colors.lightGrey};
    }
  `,
  redDefault: (theme: DefaultTheme) => css`
    background: ${theme.colors.red};
    &:hover {
      background: ${theme.colors.error};
    }
  `
}

export const Button = styled(AntdButton)<IButtonProps>`
  ${({ theme, kind }) => css`
    && {
      background-color: ${theme.colors.success};
      color: ${theme.colors.white};
      width: 15rem;
      border-radius: 2rem;
      border: none;
      transition: 200ms ease-in;

      &:hover {
        background-color: ${theme.colors.darkSuccess};
        color: white;
        text-decoration: none;
      }

      ${kind && wrapperModifiers[kind](theme)}
    }
  `}
`
