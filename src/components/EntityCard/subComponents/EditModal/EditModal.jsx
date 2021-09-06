import React, { useState } from 'react'
import PropTypes from 'prop-types'
import defaultImages from 'libs/defaultImages'
import { inputTypes } from 'libs/inputTypes'
import { Input } from 'components'
import Icon from 'assets/icons/Icon'
import classNames from 'classnames'
import { getIcon } from 'assets/icons/iconsLib'
import { DARK_GRAY } from 'libs/colors'
import { handleIconSelectFactory, setState } from 'store/sharedMethods/actions'
import Button from 'components/MainComponents/Button/Button'
import Select from 'components/MainComponents/Select/Select'
import CustomField from './subComponents/CustomField/CustomField'
import styles from './EditModal.module.scss'
import extractInitialValues from './helpers'

const EditModal = ({ entity, type, editRequest }) => {
  console.log({ entity })
  const [formValues, setFormValues] = useState(extractInitialValues(entity))
  const [errors, setErrors] = useState({})
  const { header, sections, id } = entity

  console.log({ formValues })
  const updateState = setState(setFormValues)

  const handleIconSelect = handleIconSelectFactory(formValues, updateState)

  const editEntity = async () => {
    const { hasErrors, errors: validationErrors } = await editRequest({ id, body: formValues })

    if (hasErrors) {
      setErrors(validationErrors)
    }
  }

  const headerFactory = ({ value, key, fieldType }) => {
    if (fieldType === inputTypes.IMAGE) {
      return (
        <div className={classNames(styles.avatarContainer, styles[type])}>
          <img
            src={value || defaultImages[type]}
            alt={key}
            className={styles.avatar}
          />
        </div>
      )
    }
    if (fieldType === inputTypes.INPUT) {
      return (
        <Input
          value={formValues[key]}
          onChange={(e) => updateState(key, e.target.value)}
        />
      )
    }
    throw new Error('Invalid field type')
  }

  const subSectionFactory = (subSection) => {
    const {
      key, sectionName, fieldType, customField,
    } = subSection

    if (fieldType === inputTypes.INPUT) {
      return (
        <>
          <p>{sectionName}</p>
          <Input
            value={formValues[key]}
            onChange={(e) => updateState(key, e.target.value)}
            error={errors[key] || {}}
          />
        </>
      )
    }
    if (fieldType === inputTypes.ICONS) {
      const { options } = subSection
      return (
        <>
          <p>{sectionName}</p>
          <div className={styles.optionsContainer}>
            {options.map(({ name, id }) => {
              const isSelected = formValues[key].has(id)
              return (
                <Icon
                  icon={getIcon(name)}
                  className={styles.optionIcon}
                  size="20px"
                  onClick={handleIconSelect(id, key)}
                  color={isSelected ? 'white' : DARK_GRAY}
                />
              )
            })}
          </div>
        </>
      )
    }
    if (fieldType === inputTypes.SELECT) {
      const { options } = subSection

      return (
        <>
          <p>{sectionName}</p>
          <Select
            selected={formValues[key]}
            placeholder={`Selecione um ${sectionName}`}
            options={options}
            color="white"
            className={styles.selectInput}
            setOption={(value) => updateState(key, value)}
            error={errors[key] || {}}

          />
        </>

      )
    }

    if (customField) {
      return (
        <CustomField
          subSection={subSection}
          updateState={updateState}
          formValues={formValues}
          errors={errors}
        />
      )
    }

    throw new Error('Invalid Field Types: <EditModal>: 96')
  }

  return (
    <form className={styles.container}>
      {header && (
      <header className={styles.entityHeader}>
        {header.map((field) => (
          headerFactory(field)
        ))}
      </header>
      )}
      {sections && (
        <section className={styles.sectionsContainer}>
          {sections.map(({ title, subSections }) => (
            <div className={styles.section}>
              <h2>{title}</h2>

              <div className={styles.subSectionContainer}>
                {subSections.map((subSection) => (
                  <div className={styles.subSection}>
                    {subSectionFactory(subSection)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}
      <Button onClick={editEntity} className={styles.editButton}>Salvar</Button>
    </form>
  )
}

EditModal.propTypes = {
  entity: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    header: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
}

export default EditModal
