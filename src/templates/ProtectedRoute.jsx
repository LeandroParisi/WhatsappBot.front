import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Route, useHistory } from 'react-router-dom'
import userAuth from '../services/userAuth'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const history = useHistory()

  useEffect(() => {
    const authenticate = async () => {
      const response = await userAuth()
      if (response.status !== 200) {
        history.push('/app/login')
      }
    }
    authenticate()
  }, [])

  return (
    <Route
      {...rest}
      render={
      (props) => <Component {...rest} {...props} />
    }
    />
  )
}

ProtectedRoute.propTypes = {
  component: PropTypes.element.isRequired,
}

export default ProtectedRoute
