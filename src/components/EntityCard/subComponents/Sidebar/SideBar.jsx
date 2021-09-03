import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'assets/icons/Icon'
import { getIcon } from 'assets/icons/iconsLib'
import classNames from 'classnames'
import styles from './SideBar.module.scss'

const SideBar = ({ isActive, actions }) => {
  const {
    openEdit,
    activate,
    deactivate,
  } = actions

  const activateIcon = !isActive ? getIcon('CHECKMARK') : getIcon('CLOSE')
  const activateIconTooltip = !isActive ? 'Ativar' : 'Desativar'

  const handleActivation = () => {
    if (isActive) {
      return deactivate()
    }
    return activate()
  }

  return (
    <aside className={styles.sideOptions}>
      <Icon
        icon={getIcon('edit')}
        type="default"
        size="20px"
        onClick={openEdit}
      />
      <Icon
        icon={activateIcon}
        tooltipText={activateIconTooltip}
        type="default"
        size="20px"
        className={classNames(
          { [styles.deactivateIcon]: isActive },
          { [styles.activateIcon]: !isActive },
        )}
        onClick={handleActivation}
      />
    </aside>
  )
}

SideBar.propTypes = {
  isActive: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    openEdit: PropTypes.func.isRequired,
  }).isRequired,
}

export default SideBar
