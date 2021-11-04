/* eslint-disable no-case-declarations */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { inputTypes } from 'libs/inputTypes'
import {
  Button, Checkbox, Input, RangeInput,
} from 'adminDashboard/components'
import { handleIconSelectFactory, setOption, setState } from 'adminDashboard/store/sharedMethods/actions'
import Select from 'adminDashboard/components/MainComponents/Select/Select'
import Icon from 'assets/icons/Icon'
import { getIcon } from 'assets/icons/iconsLib'
import { DARK_GRAY } from 'libs/colors'
import { setFilters } from './setFilters'
import { extractInitialValues, MAX_RANGE_VALUE, MIN_RANGE_VALUE } from './utils'
import styles from './MainPageFilter.module.scss'

const {
  INPUT,
  SELECT,
  DATE,
  BOOL,
  ICONS,
  STATUS,
  RANGE,
} = inputTypes

const MainPageFilter = ({ filters, saveFilters }) => {
  const initialValues = extractInitialValues(filters)

  const [temporaryFilters, setTemporaryFilters] = useState(initialValues)

  useEffect(() => {
    const isFilterEmpty = Object.keys(temporaryFilters).length
    if (!isFilterEmpty && filters.length) {
      setTemporaryFilters(initialValues)
    }
  }, [temporaryFilters, filters])

  const updateState = setState(setTemporaryFilters)

  const handleIconSelect = handleIconSelectFactory(temporaryFilters, updateState)

  const handleChange = (field) => ({ target: { value } }) => {
    updateState(field, value)
  }

  const handleRangeChange = (key) => (values) => {
    const newState = temporaryFilters[key]
    updateState(key, {
      ...newState,
      currentLimit: values,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setFilters(temporaryFilters, filters, saveFilters)
  }

  const fieldFactory = ({
    key, type, placeholder, options = {},
  }) => {
    switch (type) {
      case INPUT:
        return (
          <Input
            type={type}
            placeholder={placeholder}
            value={temporaryFilters[key]}
            onChange={handleChange(key)}
          />
        )
      case ICONS:
        return (
          <div className={styles.iconsContainer}>
            {options.map(({ name, id }) => {
              const isSelected = temporaryFilters[key].has(id)
              return (
                <Icon
                  icon={getIcon(name)}
                  size="22px"
                  color={isSelected ? 'white' : DARK_GRAY}
                  onClick={handleIconSelect(id, key)}
                  className={styles.optionIcon}
                />
              )
            })}
          </div>
        )
      case SELECT:
        return (
          <Select
            options={options}
            placeholder={placeholder}
            selected={temporaryFilters[key]}
            setOption={setOption(updateState, key)}
          />
        )
      case STATUS:
        return (
          <Select
            options={options}
            placeholder={placeholder}
            selected={temporaryFilters[key]}
            setOption={setOption(updateState, key)}
          />
        )
      case DATE:
        return <></>
      case BOOL:
        return (
          <Checkbox
            type={type}
            value={temporaryFilters[key]}
          />
        )
      case RANGE:
        const { currentLimit, limit } = temporaryFilters[key]
        const { unmasked = false } = filters.find((filter) => filter.key === key)
        return (
          <RangeInput
            values={currentLimit}
            currentLimit={currentLimit}
            limit={limit}
            onChange={handleRangeChange(key)}
            unmasked={unmasked}
          />
        )
      default:
        throw new Error('Unknown type')
    }
  }

  return (
    !!Object.keys(temporaryFilters).length
    && (
    <header className={styles.filterHeader}>
      <form onSubmit={onSubmit}>
        <div className={styles.fieldsSection}>
          {filters.map((filter) => (
            <div className={styles.fieldSection}>
              <h2>{filter.placeholder}</h2>
              {fieldFactory(filter)}
            </div>
          ))}

        </div>
        <Button className={styles.filterButton} type="submit">Filtrar</Button>
      </form>
    </header>
    )
  )
}

MainPageFilter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default MainPageFilter
