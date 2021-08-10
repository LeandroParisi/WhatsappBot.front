import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header/Header'
import { useRoot } from 'store'
import globalStyles from 'assets/scss/globals.module.scss'
import Overlay from 'templates/Overlay/Overlay'
import useLoading from 'hooks/useLoading'
import styles from './BaseLayout.module.scss'

const BaseLayout = ({ children, mainPage }) => {
  const { getIsLoading } = useRoot()

  const [openMenu, setOpenMenu] = useState(false)
  const isLoading = getIsLoading()

  return (
    <div className={styles.baseLayoutContainer}>
      {useLoading({
        show: isLoading,
        image: 'mainLoader',
        background: 'transparent',
      })}

      <Overlay
        isOpened={openMenu || isLoading}
        close={setOpenMenu}
      />
      <Header
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />

      <div className={styles.baseLayout}>
        {mainPage
          ? <section className={globalStyles.mainPage}>{ children }</section>
          : children }
      </div>
    </div>
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
