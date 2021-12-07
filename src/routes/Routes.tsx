import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from '../pages/Home/Home'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  )
}
