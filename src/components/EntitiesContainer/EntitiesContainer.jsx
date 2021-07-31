import React from 'react'
import { EntityCard } from 'components'
import PropTypes from 'prop-types'
import styles from './EntitiesContainer.module.scss'
import { entitiesAdapter, entitiesTypes } from './EntitiesInterface'

const EntitiesContainer = ({ entities, type }) => {
  const adaptedEntities = entitiesAdapter(entities, type)

  return (
    <section className={styles.container}>
      {adaptedEntities?.map((entity) => <EntityCard entity={entity} type={type} />)}
    </section>
  )
}

EntitiesContainer.propTypes = {
  entities: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  type: PropTypes.oneOf([...Object.values(entitiesTypes)]).isRequired,
}

export default EntitiesContainer
