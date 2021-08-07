import React from 'react'
import PropTypes from 'prop-types'
import Overlay from 'templates/Overlay/Overlay'
import styles from './Modal.module.scss'

const Modal = ({ children }) => (
  <div className={styles.modalContainer}>
    <Overlay isOpened />
    <div className={styles.subContainer}>
      {children}
    </div>
  </div>
)

Modal.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Modal
