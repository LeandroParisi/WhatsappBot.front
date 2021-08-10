import React from 'react'
import Loader from 'react-loader-spinner'
import { DARK } from '../../../libs/colors'
import styles from './ReactLoader.module.scss'

const ReactLoader = () => (
  <div className={styles.loaderContainer}>
    <Loader
      type="Oval"
      color={DARK}
      height={75}
      width={75}
    />

  </div>
)

export default ReactLoader
