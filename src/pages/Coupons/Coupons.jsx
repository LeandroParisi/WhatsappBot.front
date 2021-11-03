import React from 'react'
import BaseLayout from 'shared/templates/BaseLayout/BaseLayout'
import { CouponsProvider } from 'store'
import { CouponsContainer } from 'containers'

const Coupons = () => (
  <BaseLayout>
    <CouponsProvider>
      <CouponsContainer />
    </CouponsProvider>
  </BaseLayout>
)

export default Coupons
