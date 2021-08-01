import React from 'react'
import classNames from 'classnames'
import {
  generalIcons,
  paymentIcons,
} from 'assets/icons/iconsLib'
import Icon from 'assets/icons/Icon'
import PropTypes from 'prop-types'
import orderStatus from 'interfaces/orders/orderStatus'
import styles from './OrderFooter.module.scss'

const {
  ARROW_RIGHT,
  ARROW_LEFT,
  CHECKMARK,
} = generalIcons

const OrderFooter = ({
  column,
  order,
  changeOrderStatus,
}) => {
  const { totalPrice, paymentMethod } = order
  const isMiddleColumn = column !== 0
  const isLastColumn = column === orderStatus.length - 1

  return (
    <footer className={styles.cardFooter}>
      <Icon
        icon={paymentIcons[paymentMethod]}
        className={styles.mainIcon}
        size="20px"
        color="#E5CA00"
      />

      <span>{totalPrice}</span>
      <div className={styles.iconContainer}>
        {isMiddleColumn && (
        <Icon
          icon={ARROW_LEFT}
          className={classNames(styles.arrowIcon, styles.firstIcon)}
          size="15px"
          onClick={() => changeOrderStatus('back')}
        />
        )}
        <Icon
          icon={isLastColumn ? CHECKMARK : ARROW_RIGHT}
          className={styles.arrowIcon}
          size="15px"
          onClick={() => changeOrderStatus('forth')}
        />
      </div>
    </footer>
  )
}

OrderFooter.propTypes = {
  order: PropTypes.shape({
    totalPrice: PropTypes.string.isRequired,
    paymentMethod: PropTypes.string.isRequired,
  }).isRequired,
  column: PropTypes.number.isRequired,
  changeOrderStatus: PropTypes.func.isRequired,
}

export default OrderFooter
