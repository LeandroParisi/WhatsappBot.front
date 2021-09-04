import React, { useState } from 'react'
import { EntityCard } from 'components'
import PropTypes from 'prop-types'
import Icon from 'assets/icons/Icon'
import { generalIcons } from 'assets/icons/iconsLib'
import Modal from 'templates/Modal/Modal'
import styles from './EntitiesContainer.module.scss'
import EditModal from '../EntityCard/subComponents/EditModal/EditModal'
import { entityAdapter, entitiesTypes, editEntityAdapter } from './EntitiesInterface'

const EntitiesContainer = ({
  entities, type, editRequest, activate, deactivate,
}) => {
  const [openModal, setOpenModal] = useState(false)

  return (
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
      <Icon
        icon={generalIcons.ADD}
        className={styles.addIcon}
        size="20px"
        type="default"
        tooltipText="Novo"
        onClick={() => setOpenModal(true)}
      />

      <Modal
        isOpened={openModal}
        close={() => setOpenModal(false)}
        className={styles.editModal}
      >
        <EditModal
          entity={editEntityAdapter({}, type)}
          type={type}
          // editRequest={editRequest}
        />
      </Modal>
    </section>
  )
}

EntitiesContainer.propTypes = {
  entities: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  type: PropTypes.oneOf([...Object.values(entitiesTypes)]).isRequired,
}

export default EntitiesContainer
