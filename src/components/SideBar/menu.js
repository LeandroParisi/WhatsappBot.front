import routes from 'libs/routes'
import {
  store,
  list,
  product,
  promotion,
  coupom,
  account,
  configurations,
} from 'assets/icons/iconsLib'

const menus = [
  {
    name: 'Filiais',
    path: routes.branches,
    icon: store,
  },
  {
    name: 'Menus',
    path: routes.menus,
    icon: list,
  },
  {
    name: 'Produtos',
    path: routes.products,
    icon: product,
  },
  {
    name: 'Promoções',
    path: routes.promotions,
    icon: promotion,
  },
  {
    name: 'Cupons',
    path: routes.coupons,
    icon: coupom,
  },
  {
    name: 'Conta',
    path: routes.account,
    icon: account,
  },
  {
    name: 'Configurações',
    path: routes.settings,
    icon: configurations,
  },
]

export default menus
