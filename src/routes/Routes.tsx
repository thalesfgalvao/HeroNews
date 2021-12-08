import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PubliceRoute'

const Home = React.lazy(() => import('../pages/Home'))
const Login = React.lazy(() => import('../pages/Login'))
const RecoverPassword = React.lazy(() => import('../pages/RecoverPassword'))

//attribute -  path : string - exact: boolean - route : component (wich router component will render the att component)
//at end, put the route in array "routes"

//root
const LoginRedirect = () => <Redirect to="/home" />

const root = {
  path: '/',
  component: LoginRedirect,
  exact: true,
  route: Route
}

//home
const home = {
  path: '/home',
  component: Home,
  exact: false,
  route: PrivateRoute
}

//login
const login = {
  path: '/login',
  component: Login,
  exact: false,
  route: PublicRoute
}

//forgot password
const recoverPassword = {
  path: '/recoverPassword',
  component: RecoverPassword,
  exact: false,
  route: PublicRoute
}

const routes = [root, login, recoverPassword, home]

export default routes
