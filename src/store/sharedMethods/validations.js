/* eslint-disable no-useless-escape */
export const isNotEmpty = (fieldValue) => !!fieldValue.length

export const setNotEmpty = (set) => !!set.size

export const isNumber = (value) => /[\d\.]+/.test(value)
