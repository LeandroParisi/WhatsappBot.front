import React from 'react'
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import routes from 'shared/libs/routes/routes'
import ProtectedRoute from 'shared/templates/ProtectedRoute'
import { RootProvider } from './store'
import {
  Login,
  Dashboard,
  Branches,
  Menus,
  Products,
  Promotions,
  Coupons,
  Account,
  Configurations,
} from './pages'
import 'react-toastify/dist/ReactToastify.css'
import 'assets/scss/reset.scss'

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <RootProvider>
          <Switch>
            <Route exact path={routes.login} component={Login} />
            <ProtectedRoute exact path={routes.dashboard} component={Dashboard} />
            <ProtectedRoute exact path={routes.menus} component={Menus} />
            <ProtectedRoute exact path={routes.products} component={Products} />
            <ProtectedRoute exact path={routes.promotions} component={Promotions} />
            <ProtectedRoute exact path={routes.coupons} component={Coupons} />
            <ProtectedRoute exact path={routes.branches} component={Branches} />
            <ProtectedRoute exact path={routes.account} component={Account} />
            <ProtectedRoute exact path={routes.settings} component={Configurations} />
            <Route exact path="*">
              <Redirect to={routes.login} />
            </Route>
          </Switch>
        </RootProvider>
      </BrowserRouter>
    </>
  )
}

export default App
