import React, { useState } from 'react'
import PropTypes from 'prop-types'
import formatPrice from 'utils/formatPrice'
import { Input } from 'components'
import { attributes } from 'shared/interfaces/products/productsInterface'
import Icon from 'assets/icons/Icon'
import { getIcon, generalIcons } from 'assets/icons/iconsLib'
import classNames from 'classnames'
import Modal from 'templates/Modal/Modal'
import styles from './ProductAttributes.module.scss'

const {
  HORIZONTAL_DOTS,
  CHECKMARK,
  TRASH,
} = generalIcons

const AttributeCard = ({
  card: {
    max, min, description, name, price,
  },
  updateState,
  stateField,
  type,
  index,
  stateKey,
}) => {
  const [editMode, setEditMode] = useState(false)
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const updateField = (key, value) => {
    const oldState = [...stateField]
    const newState = oldState.map((state) => {
      if (state.type === type) {
        const newOptions = [...state.options]
        newOptions[index][key] = value
        return {
          ...state,
          options: newOptions,
        }
      }
      return state
    })
    updateState(stateKey, newState)
  }

  const deleteField = () => {
    const oldState = [...stateField]
    const newState = oldState.map((state) => {
      if (state.type === type) {
        const newOptions = [...state.options]
        newOptions.splice(index, 1)
        return {
          ...state,
          options: newOptions,
        }
      }
      return state
    })
    updateState(stateKey, newState)
  }

  return (
    <>
      <article className={styles.attributeCard}>
        <div className={styles.inputsContainer}>
          <span>
            <b>Nome:</b>
            <p>{name || '-'}</p>
          </span>
          <span>
            <b>Descrição:</b>
            <p>{description || '-'}</p>
          </span>
          <span>
            <b>Preço adicional:</b>
            <p>{formatPrice(price) || '-'}</p>
          </span>
          <span>
            <b>Mínimo por pedido: </b>
            <p>{min || '-'}</p>
          </span>
          <span>
            <b>Máximo por pedido: </b>
            <p>{max || '-'}</p>
          </span>
        </div>
        <aside
          className={classNames(styles.iconsContainer, { [styles.isOpened]: isMenuOpened })}
          onMouseEnter={() => setIsMenuOpened(true)}
          onMouseLeave={() => setIsMenuOpened(false)}
        >
          <Icon
            icon={HORIZONTAL_DOTS}
            size="15px"
            className={styles.icon}
          />
          {isMenuOpened && (
            <>

              <Icon
                icon={getIcon('edit')}
                size="15px"
                className={styles.icon}
                onClick={() => setEditMode(!editMode)}
              />
              <Icon
                icon={TRASH}
                size="15px"
                className={styles.icon}
                onClick={deleteField}
              />
            </>
          )}
        </aside>
      </article>
      <Modal isOpened={editMode} className={styles.editModal} close={() => setEditMode(false)}>
        <div className={styles.inputsContainer}>
          <span>
            <b>Nome:</b>
            <Input
              onChange={({ target: { value } }) => updateField('name', value)}
              value={name}
            />
          </span>
          <span>
            <b>Descrição:</b>
            <Input
              onChange={({ target: { value } }) => updateField('description', value)}
              value={description}
            />
          </span>
          <span>
            <b>Preço adicional:</b>
            <Input
              onChange={({ target: { value } }) => updateField('price', Number(value))}
              value={price}
              type="number"
            />
          </span>
          <span>
            <b>Mínimo por pedido: </b>
            <Input
              onChange={({ target: { value } }) => updateField('min', value)}
              value={min}
              type="number"
            />
          </span>
          <span>
            <b>Máximo por pedido: </b>
            <Input
              onChange={({ target: { value } }) => updateField('max', value)}
              value={max}
              type="number"
            />
          </span>
        </div>
        <Icon
          icon={CHECKMARK}
          size="25px"
          className={styles.icon}
          onClick={() => setEditMode(!editMode)}
          tooltipText="Salvar"
        />
      </Modal>
    </>
  )
}

AttributeCard.propTypes = {
  card: PropTypes.shape({
    max: PropTypes.string.isRequired,
    min: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  updateState: PropTypes.func.isRequired,
  stateField: PropTypes.shape({
    type: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
  type: PropTypes.oneOf(...Object.values(attributes)).isRequired,
  index: PropTypes.string.isRequired,
  stateKey: PropTypes.string.isRequired,
}

export default AttributeCard
