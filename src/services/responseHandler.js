import { toast } from 'react-toastify'

const responseHandler = (fetcher) => async () => {
  try {
    const response = await fetcher()
    return { response: response.data.data, status: response.status }
  } catch ({ response: errorRes }) {
    console.log(errorRes)
    toast.error(errorRes.data.error)
    return errorRes
  }
}

export default responseHandler
