import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { RootProvider } from './store'
import { Login } from './pages'

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <RootProvider>
          <Switch>
            <Route exact path="/app/login" component={Login} />
          </Switch>
        </RootProvider>
      </BrowserRouter>
    </>
  )
}

export default App
