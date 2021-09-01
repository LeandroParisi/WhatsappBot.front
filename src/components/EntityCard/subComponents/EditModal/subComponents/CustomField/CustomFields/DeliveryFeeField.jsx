import React from 'react'
import PropTypes from 'prop-types'
import { Select, Input } from 'components'
import { deliveryFeeTypes } from 'interfaces/deliveryFees/deliveryFeeTypes'
import styles from '../CustomField.module.scss'

const LABELS = {
  KM: 'KM',
  PRICE: 'R$',
}

const { KM, PRICE } = LABELS

const DeliveryFeeField = ({ updateState, formValues, subSection }) => {
  const {
    key, options,
  } = subSection

  const stateField = formValues[key]
  const { fees, type } = stateField

  const setOption = (selectedOption) => {
    const updatedValues = {
      ...stateField,
      type: selectedOption,
      fees: null,
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
                  {distance !== undefined && <Input onBlur={sortFees} value={distance} className={styles.distanceFees} label={KM} type="number" onChange={(e) => setDistanceFee(e.target.value, KM, index)} />}

                  {price !== undefined && <Input onBlur={sortFees} value={price} className={styles.distanceFees} label={PRICE} type="number" onChange={(e) => setDistanceFee(e.target.value, PRICE, index)} />}
                </div>
              ))}
              <div className={styles.distanceContainer}>
                <Input onBlur={sortFees} value="distance" className={styles.distanceFees} label={KM} type="number" onChange={(e) => setDistanceFee(e.target.value, KM)} />
                <Input onBlur={sortFees} value="price" className={styles.distanceFees} label={PRICE} type="number" onChange={(e) => setDistanceFee(e.target.value, PRICE)} />
              </div>
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
