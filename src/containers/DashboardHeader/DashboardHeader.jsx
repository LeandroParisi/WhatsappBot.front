import React from 'react'
import { Select } from 'components'
import { useRoot, useDashboard } from 'store'
import PropTypes from 'prop-types'
import styles from './DashboardHeader.module.scss'

const DashboardHeader = () => {
  const { getSelectedBranch, setField } = useDashboard()
  const { getBranchesNames } = useRoot()

  return (
    <header className={styles.header}>
      <Select
        options={getBranchesNames()}
        selected={getSelectedBranch()}
        placeholder="Selecione uma filial"
        setOption={setField}
      />
    </header>
  )
}

export default DashboardHeader
