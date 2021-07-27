import React from 'react'
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
// import ProtectedRoute from 'templates/ProtectedRoute'
import routes from 'libs/routes'
import { RootProvider, DashboardProvider } from './store'
import { Login, Dashboard } from './pages'
import 'react-toastify/dist/ReactToastify.css'
import 'assets/scss/reset.scss'

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <RootProvider>
          <DashboardProvider>
            <Switch>
              <Route exact path={routes.login} component={Login} />
              <Route exact path={routes.dashboard} component={Dashboard} />
              <Route exact path="*">
                <Redirect to={routes.login} />
              </Route>
            </Switch>
          </DashboardProvider>
        </RootProvider>
      </BrowserRouter>
    </>
  )
}

export default App
