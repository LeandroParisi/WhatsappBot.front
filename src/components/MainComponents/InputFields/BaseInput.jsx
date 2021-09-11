import React from 'react'

class BaseInput extends React.Component {
  constructor(sectionName, key, type, value) {
    super()
    this.initialFilterValue = null
    this.sectionName = sectionName
    this.key = key
    this.type = type
    this.value = value
  }

  getInitialFilter() {
    return this.initialFilterValue
  }

  extractError(errors) {
    return errors[this.key]
  }

  render() {
    return (
      <div>
        Teste
      </div>
    )
  }
}

export default BaseInput
