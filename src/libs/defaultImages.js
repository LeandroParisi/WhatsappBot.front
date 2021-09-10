import { entitiesTypes } from 'interfaces/entities'
import branch from 'assets/images/defaultImages/branch.png'
import menu from 'assets/images/defaultImages/menu.png'
import product from 'assets/images/defaultImages/product.png'

const defaultImages = {
  [entitiesTypes.branches]: branch,
  [entitiesTypes.menus]: menu,
  [entitiesTypes.products]: product,
}

export default defaultImages
