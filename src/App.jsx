import React from 'react'
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ProtectedRoute from 'templates/ProtectedRoute'
import routes from 'libs/routes'
import { RootProvider } from './store'
import { Login, Dashboard } from './pages'
import 'react-toastify/dist/ReactToastify.css'
import 'assets/scss/reset.scss'

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <useProtectRoutes />
        <RootProvider>
          <Switch>
            <Route exact path={routes.login} component={Login} />
            <ProtectedRoute exact path={routes.dashboard} component={Dashboard} />
          </Switch>
        </RootProvider>
      </BrowserRouter>
    </>
  )
}

export default App
