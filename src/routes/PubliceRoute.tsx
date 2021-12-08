import { Route, Redirect, RouteProps } from 'react-router-dom'

// auth context
// import { useAuth } from '../../contexts/Auth';

const PublicRoute = ({ component, exact, path }: RouteProps) => {
  const isAuth = false

  return (
    <>
      <Route
        exact={exact}
        path={path}
        component={isAuth ? () => <Redirect to="/home" /> : component}
      />
    </>
  )
}

export default PublicRoute
