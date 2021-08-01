import React from 'react'
import PropTypes from 'prop-types'
import defaultImages from 'libs/defaultImages'
import styles from './EntityCard.module.scss'
import { entitiesTypes } from '../EntitiesContainer/EntitiesInterface'
import EntityCardSection from './subComponents/EntityCardSection/EntityCardSection'

const EntityCard = ({ entity, type }) => {
  const {
    id, name, logo, sections,
  } = entity

  return (
    <article className={styles.entity} key={id}>
      <header className={styles.entityHeader}>
        <div className={styles.avatarContainer}>
          <img
            src={logo || defaultImages[type]}
            alt={name}
            className={styles.avatar}
          />
        </div>
        <h2>{name}</h2>
      </header>
      <hr />
      <div className={styles.sectionsContainer}>
        {sections.map((section, index) => (
          <>
            <EntityCardSection section={section} />
            {index !== sections.length - 1 && <hr />}
          </>
        ))}
      </div>
    </article>
  )
}

EntityCard.propTypes = {
  entity: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
  type: PropTypes.oneOf([...Object.values(entitiesTypes)]).isRequired,

}
export default EntityCard
