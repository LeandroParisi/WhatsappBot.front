import routes from 'libs/routes'
import { useHistory } from 'react-router-dom'
import responseHandler from 'services/responseHandler'
import { setState } from 'store/sharedMethods/actions'
import * as providers from './provider'
import * as sharedProviders from '../sharedMethods/providers'

export default (setRoot) => {
  const history = useHistory()

  const setField = setState(setRoot)

  const errorHandler = async (fetcher) => {
    setField('isLoading', true)
    const treatedResponse = responseHandler(fetcher)
    const response = await treatedResponse()
    setField('isLoading', false)

    if (response.status >= 200 && response.status <= 299) {
      return response
    }

    if (response.status === 401) {
      setField('error', response.data)
      history.push(routes.login)
    }

    return { response: null }
  }

  return { setField, errorHandler }
}
