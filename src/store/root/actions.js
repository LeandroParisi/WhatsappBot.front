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
    const treatedResponse = responseHandler(fetcher)
    const response = await treatedResponse()

    if (response.status === 401) {
      setField('error', response.data)
      history.push(routes.login)
      return { response: null }
    }

    return response
  }

  return { setField, errorHandler }
}
