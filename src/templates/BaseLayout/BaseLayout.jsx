import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'components'
import styles from './BaseLayout.module.scss'

const BaseLayout = ({ children }) => (
  <>
    <Header />
    <div className={styles.baseLayout}>
      { children }
    </div>
  </>
)

BaseLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default BaseLayout
