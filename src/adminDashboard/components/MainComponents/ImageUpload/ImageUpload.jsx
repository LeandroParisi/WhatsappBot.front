import React, { useState, useEffect } from 'react'
import styles from './ImageUpload.module.scss'

const ImageUpload = ({
  imageClassName, initialFile, containerClassName, updateState,
}) => {
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    const file = e.target.files[0]
    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(file)
    updateState(file)
  }

  return (
    <div className={styles.container}>
      <input type="file" onChange={onSelectFile} />
      <div className={containerClassName}>
        <img className={imageClassName} src={preview || initialFile} />
      </div>
    </div>
  )
}

export default ImageUpload
