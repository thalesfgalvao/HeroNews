import { useState } from 'react'
import * as S from './styles'
import Input from '../../components/Input'
import { useFormik } from 'formik'
import { SignInSchema } from '../../schemas/SignIn'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import InputPassword from '../../components/InputPassword'
import { Card } from '../../components/Card'

const Login = () => {
  const [validateOnChange, setValidateOnChange] = useState(false)

  //eslint-disable-next-line
  const handleLogin = (values: any) => {
    console.log(values)
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      handleLogin(values)
    },
    validationSchema: SignInSchema,
    validateOnChange: validateOnChange,
    validateOnBlur: validateOnChange
  })
  return (
    <S.Wrapper>
      <S.AnimationContainer>
        <Card>
          <S.TitleLogin>Login</S.TitleLogin>
          <S.FormLogin
            onSubmitCapture={() => {
              formik.handleSubmit()
              setValidateOnChange(true)
            }}
          >
            <Input
              label="Email"
              placeholder="Type your email"
              style={{ marginBottom: '2rem' }}
              error={formik.errors.email}
              {...formik.getFieldProps('email')}
            />
            <InputPassword
              label="Password"
              type="password"
              placeholder="Type your password"
              style={{ marginBottom: '3rem' }}
              error={formik.errors.password}
              {...formik.getFieldProps('password')}
            />
            <S.BottomFormLoginElements>
              <Button kind="redDefault" htmlType="submit" onClick={handleLogin}>
                Login
              </Button>
              <Link to="/RecoverPassword">
                <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
              </Link>
            </S.BottomFormLoginElements>
          </S.FormLogin>
          <S.CopyrightWrapper>
            <S.LoginPageText>&reg; Hero News</S.LoginPageText>
          </S.CopyrightWrapper>
        </Card>
      </S.AnimationContainer>
    </S.Wrapper>
  )
}
export default Login
