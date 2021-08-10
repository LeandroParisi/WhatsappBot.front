import React from 'react'
import PropTypes from 'prop-types'

const EditModal = ({ entity }) => {
  console.log(entity)
  const nothing = 0
  return (
    <div>
      EditModal
    </div>
  )
}

EditModal.propTypes = {
  entity: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    header: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
}

export default EditModal
