import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'components'
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
        <ul className={styles.list}>
          {values?.sort((a, b) => a.id - b.id).map(({ name, id }) => (
            <li
              key={id}
              className={styles.listItem}
            >
              {name}
              <Icon
                icon={generalIcons.CLOSE}
                className={styles.selectIcon}
                size="12px"
                tooltipText="Remover"
                onClick={() => removeSelectListItem(id)}
              />
            </li>
          ))}
        </ul>
      </div>
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
