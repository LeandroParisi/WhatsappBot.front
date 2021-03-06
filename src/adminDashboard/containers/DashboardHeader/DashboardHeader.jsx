import React from 'react'
import { Select } from 'adminDashboard/components'
import { useRoot, useDashboard } from 'adminDashboard/store'
import { setOption } from 'adminDashboard/store/sharedMethods/actions'
import PropTypes from 'prop-types'
import styles from './DashboardHeader.module.scss'

const DashboardHeader = () => {
  const { getSelectedBranch, setField, getBranchesNames } = useDashboard()

  const onChange = setOption(setField, 'selectedBranch')

  return (
    <header className={styles.header}>
      <Select
        options={getBranchesNames()}
        selected={getSelectedBranch()}
        placeholder="Selecione uma filial"
        setOption={onChange}
      />
    </header>
  )
}

export default DashboardHeader
