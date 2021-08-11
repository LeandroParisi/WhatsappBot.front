import React, { useState } from 'react'
import PropTypes from 'prop-types'
import defaultImages from 'libs/defaultImages'
import inputTypes from 'libs/inputTypes'
import { Input } from 'components'
import styles from './EditModal.module.scss'
import extractInitialValues from './helpers'

const EditModal = ({ entity, type }) => {
  const [formValues, setFormValues] = useState(extractInitialValues(entity))
  const { header, sections } = entity

  const editField = (field, value) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        value,
      },
    }))
  }
  console.log(entity)
  console.log({ formValues })

  const headerFactory = ({ value, key, fieldType }) => {
    if (fieldType === inputTypes.IMAGE) {
      return (
        <div className={styles.avatarContainer}>
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
        <Input value={formValues[key].value} onChange={(e) => editField(key, e.target.value)} />
      )
    }
  }

  const subSectionFactory = ({
    key, value, sectionName, fieldType,
  }) => {
    if (fieldType === inputTypes.INPUT) {
      return (
        <>
          <p>{sectionName}</p>
          <Input value={formValues[key].value} onChange={(e) => editField(key, e.target.value)} />
        </>
      )
    }
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
