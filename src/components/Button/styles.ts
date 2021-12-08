import styled, { css, DefaultTheme } from 'styled-components'
import { Button as AntdButton } from 'antd'
import { IButtonProps } from '.'
import { shade } from 'polished'

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.darkSuccess};
    &:hover {
      ${shade(0.2, theme.colors.darkSuccess)};
    }
  `,
  grey: (theme: DefaultTheme) => css`
    background: ${theme.colors.grey};
    &:hover {
      background: ${shade(0.2, theme.colors.grey)};
    }
  `,
  redDefault: (theme: DefaultTheme) => css`
    background: ${theme.colors.red};
    &:hover {
      background: ${shade(0.2, theme.colors.red)};
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
