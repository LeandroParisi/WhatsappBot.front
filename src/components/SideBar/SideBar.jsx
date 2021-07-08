import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './SideBar.module.scss'

const SideBar = ({ isOpened }) => {
  const nothing = 0
  return (
    <aside className={classNames(styles.sideBar, {
      [styles.opened]: isOpened,
    })}
    >
      SideBar
    </aside>
  )
}

SideBar.propTypes = {
  isOpened: PropTypes.bool.isRequired,
}

export default SideBar
