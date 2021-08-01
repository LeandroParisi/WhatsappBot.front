import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import filterTypes from 'libs/filterTypes'
import { Button, Checkbox, Input } from 'components'
import { setOption, setState } from 'store/sharedMethods/actions'
import Select from 'components/MainComponents/Select/Select'
import Icon from 'assets/icons/Icon'
import { deliveryTypeIcon } from 'assets/icons/iconsLib'
import {
  deliveryIcons, getIcon, groupedIcons, customPaymentIcons,
} from 'libs/icons'
import CustomIcon from 'assets/icons/CustomIcon'
import { extractInitialValues } from './utils'
import styles from './MainPageFilter.module.scss'

const {
  INPUT,
  SELECT,
  DATE,
  BOOL,
  ICONS,
} = filterTypes

const MainPageFilter = ({ filters, validationSchema }) => {
  const [filtersValue, setFiltersValue] = useState(extractInitialValues(filters))

  const updateState = setState(setFiltersValue)

  const handleChange = (field) => ({ target: { value } }) => {
    updateState(field, value)
  }

  const handleIconSelect = (id, key) => () => {
    const previousSelectedIcons = new Set([...filtersValue[key]])
    if (previousSelectedIcons.has(id)) {
      previousSelectedIcons.delete(id)
      return updateState(key, previousSelectedIcons)
    }
    return updateState(key, new Set([...previousSelectedIcons, id]))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('filtrar')
  }
  console.log(filtersValue)

  const fieldFactory = ({
    key, type, placeholder, options = {},
  }) => {
    switch (type) {
      case INPUT:
        return (
          <Input
            type={type}
            placeholder={placeholder}
            value={filtersValue[key]}
            onChange={handleChange(key)}
          />
        )
      case ICONS:
        return (
          <div className={styles.iconsFilter}>
            <h2>{placeholder}</h2>
            <div className={styles.iconsContainer}>
              {options.map(({ name, id }) => {
                const isSelected = filtersValue[key].has(id)
                return (
                  customPaymentIcons.has(name)
                    ? (
                      <CustomIcon
                        icon={getIcon(groupedIcons, name)}
                        size="22px"
                        color={isSelected ? 'white' : 'rgba(90, 90, 90)'}
                        onClick={handleIconSelect(id, key)}
                        className={styles.optionIcon}
                      />
                    )
                    : (
                      <Icon
                        icon={getIcon(groupedIcons, name)}
                        size="22px"
                        color={isSelected ? 'white' : 'rgba(90, 90, 90)'}
                        onClick={handleIconSelect(id, key)}
                        className={styles.optionIcon}
                      />
                    )
                )
              })}
            </div>
          </div>
        )
      case SELECT:
        return (
          <Select
            options={options}
            placeholder={placeholder}
            selected={filtersValue[key]}
            setOption={setOption(updateState, key)}
          />
        )
      case DATE:
        return <></>
      case BOOL:
        return (
          <Checkbox
            type={type}
            placeholder={placeholder}
            value={filtersValue[key]}
          />
        )
      default:
        throw new Error('Unknown type')
    }
  }

  return (
    <header className={styles.filterHeader}>
      <form onSubmit={onSubmit}>
        <div className={styles.fieldsSection}>
          {filters.map((filter) => (
            fieldFactory(filter)
          ))}

        </div>
        <Button type="submit">Teste</Button>
      </form>
    </header>
  )
}

export default MainPageFilter
