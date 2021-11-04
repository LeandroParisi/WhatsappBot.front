import React from 'react'
import BaseLayout from 'shared/templates/BaseLayout/BaseLayout'
import { PromotionsProvider } from 'adminDashboard/store'
import { PromotionsContainer } from 'adminDashboard/containers'

const Promotions = () => (
  <BaseLayout>
    <PromotionsProvider>
      <PromotionsContainer />
    </PromotionsProvider>
  </BaseLayout>
)

export default Promotions
