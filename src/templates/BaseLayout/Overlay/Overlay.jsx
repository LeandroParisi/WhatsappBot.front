import React from 'react'
import PropTypes from 'prop-types'
import styles from './Overlay.module.scss'

const Overlay = ({
  openMenu,
  setOpenMenu,
}) => (
  openMenu
  && (
  <div
    className={styles.overlay}
    onClick={() => setOpenMenu(false)}
  />
  )
)

Overlay.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired,
}

export default Overlay
