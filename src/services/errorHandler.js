import { toast } from 'react-toastify'

const errorHandler = (fetcher) => async (options) => {
  try {
    const response = await fetcher(options)
    return response
  } catch (error) {
    return toast.error(error.response.data.error)
  }
}

export default errorHandler
