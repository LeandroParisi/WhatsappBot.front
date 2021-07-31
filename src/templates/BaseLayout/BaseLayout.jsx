import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header/Header'
import globalStyles from 'assets/scss/globals.module.scss'
import Overlay from './Overlay/Overlay'
import styles from './BaseLayout.module.scss'

const BaseLayout = ({ children, mainPage }) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <Header
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <Overlay
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <div className={styles.baseLayout}>
        {mainPage
          ? <section className={globalStyles.mainPage}>{ children }</section>
          : children }

      </div>
    </>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  mainPage: PropTypes.bool,
}

BaseLayout.defaultProps = {
  mainPage: true,
}

export default BaseLayout
