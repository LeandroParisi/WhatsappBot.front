import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './Loader.module.scss'

function Loader({ src, backgroundColor, message }) {
  return (
    <div className={classNames(
      styles.loader,
      { [backgroundColor]: backgroundColor },
    )}
    >
      <img src={src} alt="Loading" />
      {message && <h1 className={styles.loaderMessage}>{ message }</h1>}
    </div>
  )
}

Loader.propTypes = {
  src: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  message: PropTypes.string,
}

Loader.defaultProps = {
  backgroundColor: '',
  message: '',
}

export default Loader
