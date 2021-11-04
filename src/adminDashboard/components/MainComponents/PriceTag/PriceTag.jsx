import React from 'react'
import Icon from 'assets/icons/Icon'
import {
  generalIcons,
} from 'assets/icons/iconsLib'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './PriceTag.module.scss'

const PriceTag = ({ value, className }) => (
  <div className={classNames(styles.priceTag, className)}>
    <Icon
      icon={generalIcons.PRICE}
      className={styles.priceIcon}
      size="15px"
      color="rgba(90, 90, 90)"
      noTooltip
    />
    <p>{value}</p>
  </div>
)

PriceTag.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default PriceTag
