import { Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import routes from './Routes'

//loading component to fallback other components
// const Loading = <Loading />;

//to add another router you nedd to put and config all your routes in routes.js
const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          {routes.map((route, index) => (
            <route.route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes
