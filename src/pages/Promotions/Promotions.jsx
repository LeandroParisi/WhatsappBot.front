import React from 'react'
import BaseLayout from 'templates/BaseLayout/BaseLayout'
import { PromotionsProvider } from 'store'

const Promotions = () => (
  <BaseLayout>
    <PromotionsProvider>
      Promotions
    </PromotionsProvider>

  </BaseLayout>
)

export default Promotions
