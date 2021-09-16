/* eslint-disable react/button-has-type */
import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Range, getTrackBackground } from 'react-range'
import { PRIMARY3 } from 'libs/colors'
import styles from './RangeInput.module.scss'
import formatPrice from '../../../utils/formatPrice'

const PRICE_RANGES = {
  0: 'Min',
  1: 'Max',
}

const RangeInput = ({
  limit, values, onChange,
}) => {
  const THUMB_SIZE = '15'

  const STEP = 1

  const [min, max] = limit
  return (
    <div className={styles.sliderContainer}>
      <Range
        values={values}
        step={STEP}
        min={min}
        max={max}
        onChange={onChange}
        renderTrack={({ props, children }) => (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#ccc', PRIMARY3, '#ccc'],
                  min,
                  max,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: `${THUMB_SIZE}px`,
              width: `${THUMB_SIZE}px`,
              borderRadius: '4px',
              backgroundColor: '#FFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '1px 1px 2px #AAA',
            }}
          >
            <div
              style={{
                height: `${THUMB_SIZE / 2}px`,
                width: '5px',
                backgroundColor: isDragged ? PRIMARY3 : '#CCC',
              }}
            />
          </div>
        )}
      />
      <div className={styles.valuesDisplay}>
        {values.map((value, index) => (
          <div>
            <span>{PRICE_RANGES[index]}</span>
            <p>{formatPrice(value)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

RangeInput.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  styleType: PropTypes.oneOf(['main', 'white', '']),
}

RangeInput.defaultProps = {
  onClick: null,
  disabled: false,
  type: 'button',
  className: '',
  styleType: '',
}

export default RangeInput
