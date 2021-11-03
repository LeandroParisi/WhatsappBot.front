import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Select, Input } from 'components'
import { deliveryFeeTypes } from 'shared/interfaces/deliveryFees/deliveryFeeTypes'
import Icon from 'assets/icons/Icon'
import { getIcon } from 'assets/icons/iconsLib'
import styles from '../CustomField.module.scss'

const LABELS = {
  KM: 'KM',
  PRICE: 'R$',
}

const { KM, PRICE } = LABELS

const DeliveryFeeField = ({ updateState, formValues, subSection }) => {
  const [newFee, setNewFee] = useState(false)
  const {
    key, options,
  } = subSection

  const stateField = formValues[key]
  const { fees, type } = stateField

  const setOption = (selectedOption) => {
    const updatedValues = {
      ...stateField,
      type: selectedOption,
      fees: [],
    }
    updateState(key, updatedValues)
  }

  const setUniqueFee = (value) => {
    const updatedValues = {
      ...stateField,
      fees: value,
    }
    updateState(key, updatedValues)
  }

  const setDistanceFee = (value, label, index) => {
    setNewFee(false)
    const newState = [...fees]
    const newValue = index >= 0 ? [...fees[index]] : [0, 0]

    if (label === KM) {
      newValue[0] = Number(value)
    } else if (label === PRICE) {
      newValue[1] = Number(value)
    }

    if (index >= 0) {
      newState[index] = newValue
    } else {
      newState.push(newValue)
    }

    const updatedValues = {
      ...stateField,
      fees: newState,
    }

    updateState(key, updatedValues)
  }

  const sortFees = () => {
    updateState(key, {
      ...stateField,
      fees: fees.sort(([a], [b]) => a - b),
    })
  }

  const removeFee = (index) => {
    const newFees = [...fees]

    newFees.splice(index, 1)

    const updatedValues = {
      ...stateField,
      fees: newFees,
    }
    updateState(key, updatedValues)
  }

  const distanceInput = (distance, index) => (
    <Input
      onBlur={sortFees}
      value={distance}
      className={styles.distanceFees}
      label={KM}
      type="number"
      onChange={(e) => setDistanceFee(e.target.value, KM, index)}
    />
  )

  const priceInput = (price, index) => (
    <Input
      onBlur={sortFees}
      value={price}
      className={styles.distanceFees}
      label={PRICE}
      type="number"
      onChange={(e) => setDistanceFee(e.target.value, PRICE, index)}
    />
  )

  return (
    <div className={styles.subContainer}>
      <div className={styles.innerField}>
        <p>Tipo</p>
        <Select
          options={options}
          selected={type.name}
          placeholder="Tipo de entrega"
          setOption={setOption}
          color="white"
        />
      </div>
      <div className={styles.innerField}>
        <p>Preço (R$)</p>

        {type.id === deliveryFeeTypes.unique
          ? (
            <Input value={fees} type="number" onChange={(e) => setUniqueFee(e.target.value)} />
          )
          : (
            <>
              {fees?.map(([distance, price], index) => (
                <div className={styles.distanceContainer}>
                  {distance !== undefined
                  && (
                    distanceInput(distance, index)
                  )}

                  {price !== undefined
                  && (
                    priceInput(price, index)
                  )}
                  <Icon
                    icon={getIcon('CLOSE')}
                    className={styles.deleteFee}
                    size="10px"
                    tooltipText="Remover"
                    onClick={() => removeFee(index)}
                  />
                </div>
              ))}
              {newFee ? (
                <div className={styles.distanceContainer}>
                  {distanceInput('distance', -1)}
                  {priceInput('price', -1)}
                </div>
              ) : (
                <Icon
                  icon={getIcon('additionals')}
                  size="15px"
                  onClick={() => setNewFee(!newFee)}
                  className={styles.addFee}
                />
              )}

            </>
          )}
      </div>
    </div>
  )
}

DeliveryFeeField.propTypes = {
  subSection: PropTypes.shape({
    key: PropTypes.string.isRequired,
    sectionName: PropTypes.string.isRequired,
    customField: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  updateState: PropTypes.func.isRequired,
  formValues: PropTypes.shape({}).isRequired,
}

DeliveryFeeField.defaultProps = {
  subSection: {
    options: [],
  },
}

export default DeliveryFeeField
