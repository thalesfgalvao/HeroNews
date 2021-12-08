import * as S from './styles'
import React from 'react'
import { ButtonProps } from 'antd'

export interface IButtonProps extends ButtonProps {
  children: string
  kind?: 'primary' | 'grey' | 'redDefault'
}
export const Button = ({
  children,
  type,
  kind = 'primary',
  ...rest
}: IButtonProps) => {
  return (
    <S.Button kind={kind} type={type} {...rest}>
      {children}
    </S.Button>
  )
}
