import routes from 'libs/routes'
import { useHistory } from 'react-router-dom'
import * as providers from './provider'

export default (setRoot) => {
  const history = useHistory()
  const setField = (field, value) => {
    setRoot((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const errorHandler = async (fetcher) => {
    const response = await fetcher()
    if (response.status === 401) {
      setField('error', response.data)
      history.push(routes.login)
      return { response: null }
    }
    return response
  }

  return { setField, errorHandler }
}
