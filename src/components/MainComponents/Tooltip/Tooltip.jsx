import React from 'react'
import PropTypes from 'prop-types'
import styles from './Tooltip.module.scss'

const Tooltip = ({ text }) => (
  <span className={styles.tooltip}>
    <p>{text}</p>
  </span>
)

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Tooltip
