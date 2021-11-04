import React from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import classNames from 'classnames'
import Icon from 'assets/icons/Icon'
import styles from './SideBar.module.scss'
import menus from './menu'

const SideBar = ({ isOpened }) => {
  const history = useHistory()

  return (
    <aside className={classNames(styles.sideBar, {
      [styles.opened]: isOpened,
    })}
    >
      {menus.map(({ path, name, icon }) => (
        <ul>
          <li>
            <Icon
              onClick={() => history.push(path)}
              icon={icon}
              className={styles.menuIcon}
              size="25px"
            />
            <Link to={path} key={path}>{ name }</Link>
          </li>

        </ul>
      ))}
    </aside>
  )
}

SideBar.propTypes = {
  isOpened: PropTypes.bool.isRequired,
}

export default SideBar
