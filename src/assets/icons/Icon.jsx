/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { Tooltip } from 'components'
import styles from './Icon.module.scss'
import { tooltips } from './iconsLib'

const Icon = ({
  icon, color, className, size, onClick, noTooltip,
}) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const { iconName } = icon

  const tooltip = tooltips[iconName]

  const hasTooltip = !noTooltip && !!tooltip
  console.log(iconName)
  return (
    <div
      onClick={onClick}
      className={classNames(styles.iconContainer, className)}
      style={{ fontSize: size }}
      role="button"
      tabIndex={0}
      onFocus={() => hasTooltip && setShowTooltip(true)}
      onMouseOver={() => hasTooltip && setShowTooltip(true)}
      onMouseOut={() => hasTooltip && setShowTooltip(false)}
      onBlur={() => hasTooltip && setShowTooltip(false)}
    >
      <FontAwesomeIcon icon={icon} color={color} size={size} />
      {hasTooltip && showTooltip && <Tooltip text={tooltip} />}
    </div>
  )
}

Icon.propTypes = {
  icon: PropTypes.shape({
    iconName: PropTypes.string,
  }).isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  noTooltip: PropTypes.bool,
}

Icon.defaultProps = {
  color: 'white',
  className: '',
  size: '25px',
  onClick: null,
  noTooltip: false,
}

export default Icon
