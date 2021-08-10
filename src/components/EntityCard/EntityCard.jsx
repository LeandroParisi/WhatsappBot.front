import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from 'templates/Modal/Modal'
import defaultImages from 'libs/defaultImages'
import Icon from 'assets/icons/Icon'
import { getIcon } from 'assets/icons/iconsLib'
import classNames from 'classnames'
import styles from './EntityCard.module.scss'
import { editEntityAdapter, entitiesTypes } from '../EntitiesContainer/EntitiesInterface'
import EntityCardSection from './subComponents/EntityCardSection/EntityCardSection'
import EditModal from './subComponents/EditModal/EditModal'

const EntityCard = ({ entity, type, originalEntity }) => {
  const [openModal, setOpenModal] = useState(false)
  const {
    id, name, image, sections, isActive,
  } = entity

  return (
    <>
      <Modal
        isOpened={openModal}
        close={() => setOpenModal(false)}
      >
        <EditModal
          entity={editEntityAdapter(originalEntity, type)}
        />
      </Modal>
      <article className={classNames(styles.entity, { [styles.inactive]: !isActive })} key={id}>
        <header className={styles.entityHeader}>
          <div className={styles.avatarContainer}>
            <img
              src={image || defaultImages[type]}
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
        <aside className={styles.sideOptions}>
          <Icon
            icon={getIcon('edit')}
            type="default"
            size="20px"
            onClick={() => setOpenModal(!openModal)}
          />
        </aside>
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

}
export default EntityCard
