import { Route, Redirect, RouteProps } from 'react-router-dom'

// auth context
// import { useAuth } from '../../contexts/Auth';

const PrivateRoute = ({ component, exact, path }: RouteProps) => {
  const isAuth = false

  return (
    <>
      <Route
        exact={exact}
        path={path}
        component={isAuth ? component : () => <Redirect to="/login" />}
      />
    </>
  )
}

export default PrivateRoute
