import React from 'react'
import BaseLayout from 'templates/BaseLayout/BaseLayout'
import { ProductsProvider } from 'store'
import { ProductsContainer } from 'containers'

const Products = () => (
  <BaseLayout>
    <ProductsProvider>
      <ProductsContainer />
    </ProductsProvider>
  </BaseLayout>
)

export default Products
