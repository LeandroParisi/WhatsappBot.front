import React from 'react'
import { EntityCard } from 'components'
import PropTypes from 'prop-types'
import styles from './EntitiesContainer.module.scss'
import { entityAdapter, entitiesTypes } from './EntitiesInterface'

const EntitiesContainer = ({
  entities, type, editRequest, activate, deactivate,
}) => (
  <section className={styles.container}>
    {entities.length
      ? (
        entities?.map((entity) => (
          <EntityCard
            entity={entityAdapter(entity, type)}
            type={type}
            originalEntity={entity}
            editRequest={editRequest}
            activate={activate}
            deactivate={deactivate}
          />
        ))
      )
      : (
        <p>
          Você não tem nenhum registro nessa categoria
          ou não foram encontrados registros com o filtro selecionado.
        </p>
      )}
  </section>
)

EntitiesContainer.propTypes = {
  entities: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  type: PropTypes.oneOf([...Object.values(entitiesTypes)]).isRequired,
}

export default EntitiesContainer
