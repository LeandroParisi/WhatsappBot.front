import React from 'react'
import { Select } from 'components'
import { useDashboard } from 'store'
import PropTypes from 'prop-types'
import styles from './DashboardHeader.module.scss'

const DashboardHeader = () => {
  const { getBranchesNames, $dashboard: { selectedBranch }, setField } = useDashboard()

  return (
    <header className={styles.header}>
      <Select
        options={getBranchesNames()}
        selected={selectedBranch}
        placeholder="Selecione uma filial"
        setOption={setField}
      />
    </header>
  )
}

export default DashboardHeader
