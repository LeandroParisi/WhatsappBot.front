import React from 'react'
import BaseLayout from 'shared/templates/BaseLayout/BaseLayout'
import { MenusProvider } from 'store'
import { MenusContainer } from 'containers'

const Menus = () => (
  <BaseLayout>
    <MenusProvider>
      <MenusContainer />
    </MenusProvider>
  </BaseLayout>
)

export default Menus
