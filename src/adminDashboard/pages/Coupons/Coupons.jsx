import React from 'react'
import BaseLayout from 'shared/templates/BaseLayout/BaseLayout'
import { CouponsProvider } from 'adminDashboard/store'
import { CouponsContainer } from 'adminDashboard/containers'

const Coupons = () => (
  <BaseLayout>
    <CouponsProvider>
      <CouponsContainer />
    </CouponsProvider>
  </BaseLayout>
)

export default Coupons
