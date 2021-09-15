import React from 'react'
import PropTypes from 'prop-types'
import { Select, TagsList } from 'components'
import Icon from 'assets/icons/Icon'
import { generalIcons } from 'assets/icons/iconsLib'
import globalStyles from 'assets/scss/globals.module.scss'

import styles from './SelectListField.module.scss'

const IconsField = ({
  formValues, subSection, updateState, errors,
}) => {
  const {
    key, sectionName, options,
  } = subSection

  const { error = false, errorMessage = '' } = errors[key] || {}

  const values = formValues[key]
  const currentProducts = new Set([...values.map(({ id }) => id)])

  const handleSelectList = (value) => {
    const newState = [...formValues[key]]
    newState.push(value)
    updateState(key, newState)
  }

  const removeSelectListItem = (id) => {
    const newState = formValues[key].filter((option) => option.id !== id)
    updateState(key, newState)
  }

  return (
    <div className={styles.container}>
      <p>{sectionName}</p>
      <div className={styles.listContainer}>
        <Select
          selected={{ id: null, value: '' }}
          isDisabled={false}
          placeholder={`Adicione ${sectionName}`}
          options={options.filter((option) => !currentProducts.has(option.id))}
          color="white"
          className={styles.selectInput}
          setOption={(value) => handleSelectList(value)}
          error={errors[key] || {}}
        />
        <TagsList
          values={values}
          onClose={removeSelectListItem}
        />
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
  }).isRequired,
}

export default IconsField
