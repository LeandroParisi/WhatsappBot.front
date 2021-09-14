import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Icon from 'assets/icons/Icon'
import { generalIcons } from 'assets/icons/iconsLib'
import { Input, TagsList } from 'components'
import globalStyles from 'assets/scss/globals.module.scss'
import styles from './InputList.module.scss'
import { normalizeTags } from '../../../../../../MainComponents/TagsList/helper'

const InputList = ({
  formValues, subSection, updateState, errors,
}) => {
  const [newIngredient, setNewIngredient] = useState('')
  const {
    key, sectionName,
  } = subSection

  const { error = false, errorMessage = '' } = errors[key] || {}
  const values = formValues[key]

  const saveIngredient = (ingredient) => {
    const newIngredients = [...values]
    newIngredients.push(ingredient)
    updateState(key, newIngredients)
    setNewIngredient('')
  }

  const removeIngredient = (ingredient) => {
    const newIngredients = values.filter((value) => value !== ingredient)
    updateState(key, newIngredients)
  }

  return (
    <div className={styles.container}>
      <p>{sectionName}</p>
      <div className={styles.inputsContainer}>
        <div className={styles.addContainer}>
          <Input
            placeholder={`Adicione ${sectionName}`}
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
            onEnter={saveIngredient}
          />
          <Icon
            icon={generalIcons.ADD}
            className={styles.selectIcon}
            size="12px"
            tooltipText="Adicionar"
            onClick={() => saveIngredient(newIngredient)}
          />
        </div>
        <TagsList values={normalizeTags(values)} onClose={removeIngredient} />
      </div>
      { error && <p className={globalStyles.errorText}>{errorMessage}</p>}
    </div>
  )
}

InputList.propTypes = {
  formValues: PropTypes.shape({}).isRequired,
  updateState: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  subSection: PropTypes.shape({
    key: PropTypes.string.isRequired,
    sectionName: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
}

export default InputList
