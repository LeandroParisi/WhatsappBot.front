import { entitiesTypes } from 'interfaces/entities'
import branch from 'assets/images/defaultImages/branch.png'
import menu from 'assets/images/defaultImages/menu.png'
import product from 'assets/images/defaultImages/product.png'
import promotion from 'assets/images/defaultImages/promotion.png'
import coupom from 'assets/images/defaultImages/coupom.png'

const defaultImages = {
  [entitiesTypes.branches]: branch,
  [entitiesTypes.menus]: menu,
  [entitiesTypes.products]: product,
  [entitiesTypes.promotions]: promotion,
  [entitiesTypes.coupons]: coupom,
}

export default defaultImages
