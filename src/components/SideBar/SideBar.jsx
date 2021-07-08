import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import styles from './SideBar.module.scss'
import menu from './menu'

const SideBar = ({ isOpened }) => {
  const nothing = 0
  return (
    <aside className={classNames(styles.sideBar, {
      [styles.opened]: isOpened,
    })}
    >
      {menu.map((option) => <Link to={option.path}>{ option.name }</Link>)}
    </aside>
  )
}

SideBar.propTypes = {
  isOpened: PropTypes.bool.isRequired,
}

export default SideBar
