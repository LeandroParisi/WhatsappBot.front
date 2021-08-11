import React from 'react'
import defaultImages from 'libs/defaultImages'
import PropTypes from 'prop-types'
import styles from './CardHeader.module.scss'

const CardHeader = ({ image, type, name }) => (
  <header className={styles.entityHeader}>
    <div className={styles.avatarContainer}>
      <img
        src={image || defaultImages[type]}
        alt={name}
        className={styles.avatar}
      />
    </div>
    <h2>{name}</h2>
  </header>
)

export default CardHeader
