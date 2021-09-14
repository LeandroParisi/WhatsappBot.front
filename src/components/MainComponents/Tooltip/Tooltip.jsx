import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Tooltip.module.scss'

const Tooltip = ({ text, inlineTooltip }) => (
  <span className={classNames(styles.tooltip, { [styles.inline]: inlineTooltip })}>
    <p>{text}</p>
  </span>
)

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  inlineTooltip: PropTypes.bool.isRequired,

}

export default Tooltip
