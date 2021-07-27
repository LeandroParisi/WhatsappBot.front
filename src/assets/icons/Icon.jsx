import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import styles from './Icon.module.scss'

const Icon = ({
  icon, color, className, size, onClick,
}) => (
  <div
    onClick={onClick}
    className={classNames(styles.iconContainer, className)}
    style={{ fontSize: size }}
    role="button"
    tabIndex={0}
    onKeyDown={onClick}
  >
    <FontAwesomeIcon icon={icon} color={color} size={size} />
  </div>
)

Icon.propTypes = {
  icon: PropTypes.shape({}).isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
}

Icon.defaultProps = {
  color: 'white',
  className: '',
  size: '25px',
  onClick: null,
}

export default Icon
