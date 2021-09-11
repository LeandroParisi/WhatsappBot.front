/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import defaultImages from 'libs/defaultImages'
import { inputTypes } from 'libs/inputTypes'
import { Input, BaseInput, ImageInput } from 'components'
import ReactLoader from 'assets/Loaders/ReactLoader/ReactLoader'
import Icon from 'assets/icons/Icon'
import classNames from 'classnames'
import { generalIcons, getIcon } from 'assets/icons/iconsLib'
import { DARK_GRAY } from 'libs/colors'
import { handleIconSelectFactory, setState } from 'store/sharedMethods/actions'
import Button from 'components/MainComponents/Button/Button'
import Select from 'components/MainComponents/Select/Select'
import globalStyles from 'assets/scss/globals.module.scss'
import { entitiesTypes } from 'interfaces/entities'
import CustomField from './subComponents/CustomField/CustomField'
import styles from './EditModal.module.scss'
import extractInitialValues from './helpers'

const EditModal = ({ entity, type, editRequest }) => {
  const [formValues, setFormValues] = useState(extractInitialValues(entity))
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { header, sections, id } = entity

  const inputTest = new BaseInput('Base')
  const imageTest = new ImageInput('Image', 'teste', entitiesTypes.menus)

  const updateState = (key, value) => {
    setErrors((prev) => ({
      ...prev,
      [key]: { error: false, errorMessage: '' },
    }))
    setState(setFormValues)(key, value)
  }

  const handleSelectList = (key, value) => {
    const newState = [...formValues[key]]
    newState.push(value)
    updateState(key, newState)
  }

  const removeSelectListItem = (id, key) => {
    const newState = formValues[key].filter((option) => option.id !== id)
    updateState(key, newState)
  }

  const handleIconSelect = handleIconSelectFactory(formValues, updateState)

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
      const { error = false, errorMessage = '' } = errors[key] || {}
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
          { error && <p className={globalStyles.errorText}>{errorMessage}</p>}
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
    if (fieldType === inputTypes.SELECT_LIST) {
      const { options } = subSection

      const values = formValues[key]
      const currentProducts = new Set([...values.map(({ id }) => id)])
      return (
        <>
          <p>{sectionName}</p>
          <div className={styles.listContainer}>
            <Select
              selected={{ id: null, value: '' }}
              isDisabled={false}
              placeholder={`Adicione ${sectionName}`}
              options={options.filter((option) => !currentProducts.has(option.id))}
              color="white"
              className={styles.selectInput}
              setOption={(value) => handleSelectList(key, value)}
              error={errors[key] || {}}
            />
            <ul className={styles.list}>
              {values?.map(({ name, id }) => (
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
                    onClick={() => removeSelectListItem(id, key)}
                  />
                </li>
              ))}
            </ul>
          </div>
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
                  <div className={classNames(styles.subSection, styles[subSection.fieldType])}>
                    {subSectionFactory(subSection)}
                  </div>
                ))}
              </div>
            </div>
          ))}
          {console.log(inputTest.getInitialFilter())}
          {console.log(imageTest.sectionName)}
          {console.log(imageTest.initialFilterValue)}
          {imageTest.render(errors)}

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
