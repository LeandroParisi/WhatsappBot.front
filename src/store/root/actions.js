import routes from 'libs/routes/routes'
import { useHistory } from 'react-router-dom'
import responseHandler from 'services/responseHandler'
import { setState } from 'store/sharedMethods/actions'
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

  const fetchUserProducts = async () => {
    const { response } = await errorHandler(sharedProviders.fetchUserProducts())

    if (response) {
      setField('userProducts', response)
    }
  }

  const fetchUserBranches = async () => {
    const { response } = await errorHandler(sharedProviders.fetchUserBranches())

    if (response) {
      setField('userBranches', response)
    }
  }

  return {
    setField,
    errorHandler,
    fetchUserProducts,
    fetchUserBranches,
  }
}
