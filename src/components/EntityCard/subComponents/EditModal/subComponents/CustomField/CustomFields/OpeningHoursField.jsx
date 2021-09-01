import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  dayToNumber,
  numberToDay,
  dayTranslation,
} from 'interfaces/openingHours/openingHoursInterface'
import { Select, Input, TimePicker } from 'components'
import classNames from 'classnames'
import styles from '../CustomField.module.scss'

const labels = {
  0: 'Abertura',
  1: 'Fechamento',
}

const OpeningHoursField = ({ updateState, formValues, subSection }) => {
  const {
    key,
  } = subSection

  const stateField = formValues[key]

  const parsedValues = Object.entries(stateField)
    .map(([day, hours]) => [dayToNumber[day], hours])
    .sort(([dayA], [dayB]) => dayA - dayB)

  const changeHour = (newValue, index, day) => {
    const dayAsString = numberToDay[day]
    const newHour = stateField[dayAsString]
    newHour[index] = newValue

    updateState(key, {
      ...stateField,
      [dayAsString]: newHour,
    })
  }

  console.log({ stateField })
  return (
    <div className={styles.innerField}>
      {parsedValues.map(([day, hours]) => {
        const isDisabled = !hours[0] && !hours[1]

        return (
          <div className={classNames(styles.openingHours,
            { [styles.disabled]: isDisabled })}
          >
            <p>{dayTranslation[day]}</p>

            <div className={styles.timePickerContainer}>
              {hours.map((hour, index) => (
                <TimePicker
                  value={hour}
                  label={labels[index]}
                  containerClass={styles.timePicker}
                  onChange={(e) => changeHour(e, index, day)}
                />
              ))}
            </div>

          </div>
        )
      })}

    </div>
  )
}

OpeningHoursField.propTypes = {
  subSection: PropTypes.shape({
    key: PropTypes.string.isRequired,
    sectionName: PropTypes.string.isRequired,
    customField: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  updateState: PropTypes.func.isRequired,
  formValues: PropTypes.shape({}).isRequired,
}

OpeningHoursField.defaultProps = {
  subSection: {
    options: [],
  },
}

export default OpeningHoursField
