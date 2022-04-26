/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import defaultImages from 'shared/libs/defaultImages'
import { inputTypes } from 'shared/libs/inputTypes'
import { Input } from 'adminDashboard/components'
import ReactLoader from 'assets/Loaders/ReactLoader/ReactLoader'
import classNames from 'classnames'
import { setState } from 'adminDashboard/store/sharedMethods/actions'
import Button from 'adminDashboard/components/MainComponents/Button/Button'
import CustomField from './subComponents/CustomField/CustomField'
import styles from './EditModal.module.scss'
import extractInitialValues from './helpers'
import {
  IconsField, InputField, InputList, SelectField, SelectListField, DateField, CheckBoxField,
} from './subComponents/DefaultFields'

const EditModal = ({ entity, type, editRequest }) => {
  const [formValues, setFormValues] = useState(extractInitialValues(entity))
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { header, sections, id } = entity

  const updateState = (key, value) => {
    setErrors((prev) => ({
      ...prev,
      [key]: { error: false, errorMessage: '' },
    }))
    setState(setFormValues)(key, value)
  }

  const dispatchEdit = async () => {
    setIsLoading(true)
    const { hasErrors, errors: validationErrors } = await editRequest({ id, body: formValues })

    if (hasErrors) {
      setErrors(validationErrors)
    }
    setIsLoading(false)
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
          error={errors[key] || {}}
        />
      )
    }
    throw new Error('Invalid field type')
  }

  const subSectionFactory = (subSection) => {
    const {
      fieldType,
      customField,
      isDisabled = () => false,
    } = subSection

    const defaultFields = {
      [inputTypes.INPUT]: <InputField
        formValues={formValues}
        updateState={updateState}
        errors={errors}
        subSection={subSection}
        isDisabled={isDisabled(formValues)}
      />,
      [inputTypes.ICONS]: <IconsField
        formValues={formValues}
        subSection={subSection}
        updateState={updateState}
        errors={errors}
      />,
      [inputTypes.SELECT]: <SelectField
        formValues={formValues}
        subSection={subSection}
        updateState={updateState}
        errors={errors}
      />,
      [inputTypes.SELECT_LIST]: <SelectListField
        formValues={formValues}
        subSection={subSection}
        updateState={updateState}
        errors={errors}
      />,
      [inputTypes.INPUT_LIST]: <InputList
        formValues={formValues}
        subSection={subSection}
        updateState={updateState}
        errors={errors}
      />,
      [inputTypes.DATE]: <DateField
        formValues={formValues}
        subSection={subSection}
        updateState={updateState}
        errors={errors}
        isDisabled={isDisabled(formValues)}
      />,
      [inputTypes.NUMBER]: <InputField
        formValues={formValues}
        updateState={updateState}
        errors={errors}
        subSection={subSection}
        type="number"
        isDisabled={isDisabled(formValues)}
      />,
      [inputTypes.BOOL]: <CheckBoxField
        formValues={formValues}
        updateState={updateState}
        errors={errors}
        subSection={subSection}
        type="number"
        isDisabled={isDisabled(formValues)}
      />,

    }

    if (defaultFields[fieldType]) {
      return defaultFields[fieldType]
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

    throw new Error(`Invalid Field '${fieldType}' -> <EditModal>`)
  }

  return (
    <form className={styles.formContainer}>
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
                  subSectionFactory(subSection)
                ))}
              </div>
            </div>
          ))}
        </section>
      )}
      <Button onClick={dispatchEdit} className={styles.editButton}>
        {
          isLoading
            ? <ReactLoader size={25} />
            : <p>Salvar</p>
        }
      </Button>
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
