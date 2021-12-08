import { useState } from 'react'
import * as S from './styles'
import Input from '../../components/Input/'
import { useFormik } from 'formik'
import { SignInSchema } from '../../schemas/SignIn'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

const RecoverPassword = () => {
  const [validateOnChange, setValidateOnChange] = useState(false)
  //eslint-disable-next-line
  const handleRecover = (values: any) => {
    console.log(values)
  }
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: (values) => {
      handleRecover(values)
    },
    validationSchema: SignInSchema,
    validateOnChange: validateOnChange,
    validateOnBlur: validateOnChange
  })
  return (
    <S.Wrapper>
      <S.AnimationContainer>
        <S.Card>
          <S.Title>Recover your password</S.Title>
          <S.Text>Please check your email to recover you password</S.Text>
          <S.Form
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
            <S.ButtonWrapper>
              <Link to="/login">
                <Button kind="grey">Go back</Button>
              </Link>
              <Button
                kind="redDefault"
                htmlType="submit"
                onClick={handleRecover}
              >
                Send a email
              </Button>
            </S.ButtonWrapper>
          </S.Form>
          <S.CopyrightWrapper>
            <S.RecoverPageText>&reg; Hero News</S.RecoverPageText>
          </S.CopyrightWrapper>
        </S.Card>
      </S.AnimationContainer>
    </S.Wrapper>
  )
}

export default RecoverPassword
