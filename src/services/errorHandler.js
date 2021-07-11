import { toast } from 'react-toastify'

const errorHandler = (fetcher) => async (options) => {
  try {
    const response = await fetcher(options)
    return { response: response.data.data, status: response.status }
  } catch ({ response: errorRes }) {
    toast.error(errorRes.data.error)
    return errorRes
  }
}

export default errorHandler
