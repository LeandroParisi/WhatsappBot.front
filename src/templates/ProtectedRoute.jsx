import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useLoading from 'hooks/useLoading'
import routes from 'libs/routes'
import { Route, useHistory } from 'react-router-dom'
import userAuth from '../services/users/userAuth'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true)
  const history = useHistory()

  useEffect(() => {
    const authenticate = async () => {
      const response = await userAuth()
      if (response.status !== 200) {
        history.push(routes.login)
      } else {
        setIsLoading(false)
      }
    }
    authenticate()
  }, [])

  return (
    <>
      {useLoading(isLoading)}
      <Route
        {...rest}
        render={
      (props) => <Component {...rest} {...props} />
    }
      />
    </>
  )
}

ProtectedRoute.propTypes = {
  component: PropTypes.element.isRequired,
}

export default ProtectedRoute
