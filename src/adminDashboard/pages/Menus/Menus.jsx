import React from 'react'
import BaseLayout from 'shared/templates/BaseLayout/BaseLayout'
import { MenusProvider } from 'adminDashboard/store'
import { MenusContainer } from 'adminDashboard/containers'

const Menus = () => (
  <BaseLayout>
    <MenusProvider>
      <MenusContainer />
    </MenusProvider>
  </BaseLayout>
)

export default Menus
