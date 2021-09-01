import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from 'templates/Modal/Modal'
import defaultImages from 'libs/defaultImages'
import Icon from 'assets/icons/Icon'
import { getIcon } from 'assets/icons/iconsLib'
import classNames from 'classnames'
import CardHeader from './subComponents/CardHeader/CardHeader'
import styles from './EntityCard.module.scss'
import { editEntityAdapter, entitiesTypes } from '../EntitiesContainer/EntitiesInterface'
import EntityCardSection from './subComponents/EntityCardSection/EntityCardSection'
import EditModal from './subComponents/EditModal/EditModal'
import SideBar from './subComponents/Sidebar/SideBar'

const EntityCard = ({
  entity, type, originalEntity, editRequest, activate, deactivate,
}) => {
  const [openModal, setOpenModal] = useState(false)
  const {
    id, name, image, sections, isActive,
  } = entity

  return (
    <>
      <Modal
        isOpened={openModal}
        close={() => setOpenModal(false)}
        className={styles.editModal}
      >
        <EditModal
          entity={editEntityAdapter(originalEntity, type)}
          type={type}
          editRequest={editRequest}
        />
      </Modal>

      <article className={classNames(styles.entity, { [styles.inactive]: !isActive })} key={id}>
        <CardHeader
          image={image}
          type={type}
          name={name}
        />
        <hr />
        <div className={styles.sectionsContainer}>
          {sections.map((section, index) => (
            <>
              <EntityCardSection section={section} />
              {index !== sections.length - 1 && <hr />}
            </>
          ))}
        </div>

        <SideBar
          isActive={isActive}
          actions={{
            openEdit: () => setOpenModal(!openModal),
            activate: () => activate(id),
            deactivate: () => deactivate(id),
          }}
        />

      </article>
    </>

  )
}

EntityCard.propTypes = {
  entity: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
  type: PropTypes.oneOf([...Object.values(entitiesTypes)]).isRequired,
  originalEntity: PropTypes.shape({}).isRequired,
  editRequest: PropTypes.func.isRequired,
  activate: PropTypes.func.isRequired,
  deactivate: PropTypes.func.isRequired,
}
export default EntityCard
