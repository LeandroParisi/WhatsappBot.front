import React from 'react'
import { Select } from 'components'
import { useRoot, useDashboard } from 'store'
import { setOption } from 'store/sharedMethods/actions'
import PropTypes from 'prop-types'
import styles from './DashboardHeader.module.scss'

const DashboardHeader = () => {
  const { getSelectedBranch, setField } = useDashboard()
  const { getBranchesNames } = useRoot()

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
