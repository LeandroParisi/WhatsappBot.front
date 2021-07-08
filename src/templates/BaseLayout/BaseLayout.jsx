import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Header } from 'components'
import Overlay from './Overlay/Overlay'
import styles from './BaseLayout.module.scss'

const BaseLayout = ({ children }) => {
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
        { children }
      </div>
    </>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default BaseLayout
