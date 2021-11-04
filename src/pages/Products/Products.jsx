import React from 'react'
import BaseLayout from 'shared/templates/BaseLayout/BaseLayout'
import { ProductsProvider } from 'store'
import { ProductsContainer } from 'adminDashboard/containers'

const Products = () => (
  <BaseLayout>
    <ProductsProvider>
      <ProductsContainer />
    </ProductsProvider>
  </BaseLayout>
)

export default Products
