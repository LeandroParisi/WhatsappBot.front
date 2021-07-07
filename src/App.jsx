import React from 'react'
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ProtectedRoute from 'templates/ProtectedRoute'
import { RootProvider } from './store'
import { Login, Dashboard } from './pages'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <useProtectRoutes />
        <RootProvider>
          <Switch>
            <Route exact path="/app/login" component={Login} />
            <ProtectedRoute exact path="/app/dashboard" component={Dashboard} />
          </Switch>
        </RootProvider>
      </BrowserRouter>
    </>
  )
}

export default App
