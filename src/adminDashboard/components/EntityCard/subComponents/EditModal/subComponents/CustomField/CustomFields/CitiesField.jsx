import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Select } from 'adminDashboard/components'
import classNames from 'classnames'
import { brazilianCities } from 'shared/libs/brazilianCities'
import styles from '../CustomField.module.scss'
import editModalStyles from '../../../EditModal.module.scss'

const CitiesField = ({ updateState, formValues, subSection }) => {
  const {
    key,
    statesKey,
  } = subSection

  const selectedState = formValues[statesKey].name
  const previousState = useRef(selectedState)

  const cities = brazilianCities[selectedState]

  const stateField = formValues[key]

  useEffect(() => {
    if (selectedState !== previousState.current) {
      updateState(key, { id: 0, value: '' })
      previousState.current = selectedState
    }
  }, [selectedState])

  return (
    <Select
      className={editModalStyles.selectInput}
      placeholder="Selecione uma cidade"
      selected={stateField}
      options={Object.entries(cities).map(([id, name]) => ({ id, name }))}
      color="white"
      disabled={!cities}
      setOption={(value) => updateState(key, value)}
    />
  )
}

CitiesField.propTypes = {
  subSection: PropTypes.shape({
    key: PropTypes.string.isRequired,
    sectionName: PropTypes.string.isRequired,
    customField: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({})),
    statesKey: PropTypes.string.isRequired,
  }),
  updateState: PropTypes.func.isRequired,
  formValues: PropTypes.shape({}).isRequired,
}

CitiesField.defaultProps = {
  subSection: {
    options: [],
  },
}

export default CitiesField
