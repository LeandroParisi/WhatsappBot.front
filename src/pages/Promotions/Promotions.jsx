import React from 'react'
import BaseLayout from 'shared/templates/BaseLayout/BaseLayout'
import { PromotionsProvider } from 'store'
import { PromotionsContainer } from 'containers'

const Promotions = () => (
  <BaseLayout>
    <PromotionsProvider>
      <PromotionsContainer />
    </PromotionsProvider>
  </BaseLayout>
)

export default Promotions
