import React from 'react'
import { EntityCard } from 'components'
import PropTypes from 'prop-types'
import styles from './EntitiesContainer.module.scss'
import { entityAdapter, entitiesTypes } from './EntitiesInterface'

const EntitiesContainer = ({ entities, type, editRequest }) => (
  <section className={styles.container}>
    {entities?.map((entity) => (
      <EntityCard
        entity={entityAdapter(entity, type)}
        type={type}
        originalEntity={entity}
        editRequest={editRequest}
      />
    ))}
  </section>
)

EntitiesContainer.propTypes = {
  entities: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  type: PropTypes.oneOf([...Object.values(entitiesTypes)]).isRequired,
}

export default EntitiesContainer
