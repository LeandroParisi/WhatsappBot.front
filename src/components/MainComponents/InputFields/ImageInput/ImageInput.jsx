import classNames from 'classnames'
import React from 'react'
import defaultImages from 'libs/defaultImages'
import BaseInput from '../BaseInput'
import styles from './ImageInput.module.scss'

class ImageInput extends BaseInput {
  constructor(sectionName, key, type, value) {
    super(sectionName, key, type, value)

    this.initialFilterValue = 'INITIAL IMAGE FILTEr'
  }

  render(errors) {
    console.log({ errors })
    console.log(`value${this.value}`)
    return (
      <div className={classNames(styles.avatarContainer, styles[this.type])}>
        <img
          src={this.value || defaultImages[this.type]}
          alt={this.key}
          className={styles.avatar}
        />
      </div>
    )
  }
}

export default ImageInput
