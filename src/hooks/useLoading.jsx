import React from 'react'
import Loader from 'assets/Loaders/Loader'
import { getImage } from '../assets/Loaders/loaderDictionary'

const useLoading = (show, image = 'loading') => {
  const { src, bgColor = '' } = getImage(image)

  return (
    show && (
      <Loader src={src} backgroundColor={bgColor} centered />
    )
  )
}

export default useLoading
