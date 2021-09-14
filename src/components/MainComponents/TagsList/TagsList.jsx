import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'assets/icons/Icon'
import { generalIcons } from 'assets/icons/iconsLib'
import styles from './TagsList.module.scss'

const TagsList = ({ values, onClose }) => (
  <ul className={styles.list}>
    {values?.sort((a, b) => a.id - b.id).map(({ name, id }) => (
      <li
        key={id}
        className={styles.listItem}
      >
        {name}
        {onClose && (
          <Icon
            icon={generalIcons.CLOSE}
            className={styles.selectIcon}
            size="12px"
            tooltipText="Remover"
            onClick={() => onClose(id)}
          />
        )}
      </li>
    ))}
  </ul>
)

TagsList.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  onClose: PropTypes.func,
}

TagsList.defaultProps = {
  onClose: null,
}
export default TagsList
