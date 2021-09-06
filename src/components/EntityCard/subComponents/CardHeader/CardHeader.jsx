import React from 'react'
import defaultImages from 'libs/defaultImages'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './CardHeader.module.scss'

const CardHeader = ({ image, type, name }) => (
  <header className={styles.entityHeader}>
    <div className={classNames(styles.avatarContainer, styles[type])}>
      <img
        src={image || defaultImages[type]}
        alt={name}
        className={styles.avatar}
      />
    </div>
    <h2>{name}</h2>
  </header>
)

CardHeader.propTypes = {
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default CardHeader
