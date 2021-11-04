import React from 'react'
import globalStyles from 'assets/scss/globals.module.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Select.module.scss'

const Select = ({
  options,
  selected,
  setOption,
  placeholder,
  color,
  className,
  disabled,
  error: { error, errorMessage },
  isDisabled,
}) => {
  const onChange = ({ target }) => {
    const { options: inputOptions, options: { selectedIndex } } = target
    const { value, id } = inputOptions[selectedIndex]
    setOption({ name: value, id })
  }
  return (
    <select
      isDisabled={disabled}
      onChange={onChange}
      className={classNames(styles[color], className, { [globalStyles.errorInput]: error })}
      value={selected.name}
    >
      <option
        value=""
        selected={!selected.name}
        disabled={isDisabled}
        className={styles.placeholder}
      >
        {placeholder}
      </option>
      {options && options.map(({ name, id }) => (
        <option value={name} id={id} key={id} selected={name === selected}>{name}</option>
      ))}
      {error && <p className={globalStyles.errorText}>{errorMessage}</p>}
    </select>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  setOption: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['black', 'white']),
  placeholder: PropTypes.string,
  selected: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.shape({
    error: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
  }),
  isDisabled: PropTypes.bool,
}

Select.defaultProps = {
  placeholder: '',
  color: 'black',
  className: '',
  disabled: false,
  error: {},
  isDisabled: true,
}

export default Select
