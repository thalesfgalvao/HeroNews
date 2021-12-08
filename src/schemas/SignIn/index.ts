import * as Yup from 'yup'

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(6, 'Your password is too short! Min of 6 caracters')
    .max(16, 'Your password is too long! Max of 16 caracters!')
    .required()
})
