import React from 'react'
import PropTypes from 'prop-types'
import { DARK_GRAY } from 'libs/colors'
import { handleIconSelectFactory } from 'store/sharedMethods/actions'
import Icon from 'assets/icons/Icon'
import { getIcon } from 'assets/icons/iconsLib'
import globalStyles from 'assets/scss/globals.module.scss'

import styles from './IconsField.module.scss'

const IconsField = ({
  formValues, subSection, updateState, errors,
}) => {
  const handleIconSelect = handleIconSelectFactory(formValues, updateState)

  const handleUniqueIconSelect = (id, key) => () => {
    updateState(key, new Set([id]))
  }
  const {
    key, sectionName, options, unique,
  } = subSection

  const { error = false, errorMessage = '' } = errors[key] || {}

  return (
    <div className={styles.container}>
      <p>{sectionName}</p>
      <div className={styles.optionsContainer}>
        {options.map(({ name, id }) => {
          const isSelected = formValues[key].has(id)
          return (
            <Icon
              icon={getIcon(name)}
              className={styles.optionIcon}
              size="20px"
              onClick={unique ? handleUniqueIconSelect(id, key) : handleIconSelect(id, key)}
              color={isSelected ? 'white' : DARK_GRAY}
            />
          )
        })}
      </div>
      { error && <p className={globalStyles.errorText}>{errorMessage}</p>}
    </div>
  )
}

IconsField.propTypes = {
  formValues: PropTypes.shape({}).isRequired,
  updateState: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  subSection: PropTypes.shape({
    key: PropTypes.string.isRequired,
    sectionName: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    unique: PropTypes.bool,
  }),
}
IconsField.defaultProps = {
  subSection: {
    unique: false,
  },
}

export default IconsField
