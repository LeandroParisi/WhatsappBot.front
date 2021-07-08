import React from 'react'
import PropTypes from 'prop-types'
import { Squash as Hamburger } from 'hamburger-react'
import { SideBar } from 'components'
import styles from './Header.module.scss'

const Header = ({
  openMenu,
  setOpenMenu,
}) => (
  <header className={styles.header}>
    <Hamburger
      toggled={openMenu}
      toggle={() => setOpenMenu(!openMenu)}
    />
    <SideBar isOpened={openMenu} />
  </header>
)

Header.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired,
}

export default Header
