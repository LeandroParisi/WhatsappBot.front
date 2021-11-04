import React from 'react'
import PropTypes from 'prop-types'
import {
  dayToNumber,
  numberToDay,
  dayTranslation,
} from 'shared/interfaces/openingHours/openingHoursInterface'
import { Checkbox, TimePicker } from 'adminDashboard/components'
import classNames from 'classnames'
import { getIcon } from 'assets/icons/iconsLib'
import Icon from 'assets/icons/Icon'
import { DARK_GRAY } from 'libs/colors'
import styles from '../../CustomField.module.scss'

const labels = {
  0: 'Abertura',
  1: 'Fechamento',
}

const openedIcon = getIcon('OPENED')
const closedIcon = getIcon('CLOSED')

const OpeningHoursField = ({ updateState, formValues, subSection }) => {
  const {
    key,
  } = subSection

  const stateField = formValues[key]

  const parsedValues = Object.entries(stateField)
    .map(([day, hours]) => [dayToNumber[day], hours])
    .sort(([dayA], [dayB]) => dayA - dayB)

  const changeHour = (index, day) => (newValue) => {
    const dayAsString = numberToDay[day]
    const newHour = stateField[dayAsString].hours
    newHour[index] = newValue

    updateState(key, {
      ...stateField,
      [dayAsString]: {
        ...stateField[dayAsString],
        hours: newHour,
      },
    })
  }

  const checkOvernight = (day) => {
    const dayAsString = numberToDay[day]
    const overnight = !stateField[dayAsString].overnight

    return updateState(key, {
      ...stateField,
      [dayAsString]: {
        ...stateField[dayAsString],
        overnight,
      },
    })
  }

  const openCloseDay = (day) => {
    const dayAsString = numberToDay[day]
    updateState(key, {
      ...stateField,
      [dayAsString]: {
        ...stateField[dayAsString],
        isOpened: !stateField[dayAsString].isOpened,
      },
    })
  }

  return (
    <div className={styles.innerField}>
      {parsedValues.map(([day, data]) => {
        const { hours, overnight, isOpened } = data

        return (
          <div className={classNames(styles.openingHours,
            { [styles.disabled]: !isOpened })}
          >
            <div className={styles.header}>
              <Icon
                icon={isOpened ? openedIcon : closedIcon}
                className={styles.lockIcon}
                size="15px"
                onClick={() => openCloseDay(day)}
                color={isOpened ? 'white' : DARK_GRAY}
              />
              <p>{dayTranslation[day]}</p>
            </div>

            <div className={styles.timePickerContainer}>
              <div className={styles.inputsContainer}>
                {hours.map((hour, index) => (
                  <TimePicker
                    value={hour}
                    label={labels[index]}
                    containerClass={styles.timePicker}
                    onChange={changeHour(index, day)}
                  />
                ))}
              </div>

              <Checkbox
                checked={overnight}
                placeholder="Fecha no dia seguinte?"
                className={styles.overnightCheck}
                id={`${numberToDay[day]}`}
                onClick={() => checkOvernight(day)}
                disabled={!isOpened}
              />
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
