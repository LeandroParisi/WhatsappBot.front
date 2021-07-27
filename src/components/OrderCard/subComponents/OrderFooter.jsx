import React from 'react'
import classNames from 'classnames'
import {
  price, arrowRight, arrowLeft,
} from 'assets/icons/iconsLib'
import Icon from 'assets/icons/Icon'
import PropTypes from 'prop-types'
import styles from '../OrderCard.module.scss'

const OrderFooter = ({
  column,
  totalPrice,
  changeOrderStatus,
}) => {
  const isMiddleColumn = column !== 0

  return (
    <footer classNames={styles.cardFooter}>
      <Icon icon={price} className={styles.mainIcon} size="20px" />
      <span>{totalPrice}</span>
      <div className={styles.iconContainer}>
        {isMiddleColumn && (
        <Icon
          icon={arrowLeft}
          className={classNames(styles.arrowIcon, styles.firstIcon)}
          size="15px"
          onClick={() => changeOrderStatus('back')}
        />
        )}
        <Icon
          icon={arrowRight}
          className={styles.arrowIcon}
          size="15px"
          onClick={() => changeOrderStatus('forth')}
        />
      </div>
    </footer>
  )
}

OrderFooter.propTypes = {
  column: PropTypes.number.isRequired,
  totalPrice: PropTypes.string.isRequired,
  changeOrderStatus: PropTypes.func.isRequired,
}

export default OrderFooter
