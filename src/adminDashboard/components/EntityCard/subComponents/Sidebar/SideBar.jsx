import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'assets/icons/Icon'
import { getIcon } from 'assets/icons/iconsLib'
import classNames from 'classnames'
import styles from './SideBar.module.scss'

const SideBar = ({
  isActive,
  openEdit,
  activate,
  deactivate,
  deleteRequest,
  id,
}) => {
  const activateIcon = !isActive ? getIcon('CHECKMARK') : getIcon('CLOSE')
  const activateIconTooltip = !isActive ? 'Ativar' : 'Desativar'

  const handleActivation = () => {
    if (isActive) {
      return deactivate(id)
    }
    return activate(id)
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
      {!isActive && deleteRequest && (
      <Icon
        icon={getIcon('TRASH')}
        type="default"
        size="20px"
        onClick={() => deleteRequest(id)}
      />
      )}
    </aside>
  )
}

SideBar.propTypes = {
  isActive: PropTypes.bool.isRequired,
  openEdit: PropTypes.func.isRequired,
  activate: PropTypes.func.isRequired,
  deactivate: PropTypes.func.isRequired,
  deleteRequest: PropTypes.func,
  id: PropTypes.string.isRequired,
}

SideBar.defaultProps = {
  deleteRequest: null,
}
export default SideBar
