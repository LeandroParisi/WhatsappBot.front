import { toast } from 'react-toastify'

const errorHandler = (fetcher) => async (options) => {
  try {
    const response = await fetcher(options)
    return response
  } catch ({ response: errorRes }) {
    toast.error(errorRes.data.error)
    return errorRes
  }
}

export default errorHandler
