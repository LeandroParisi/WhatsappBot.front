import routes from 'libs/routes/routes'
import {
  menuIcons,
} from 'assets/icons/iconsLib'

const {
  STORE,
  LIST,
  PRODUCT,
  PROMOTION,
  COUPOM,
  ACCOUNT,
  CONFIGURATIONS,
} = menuIcons

const menus = [
  {
    name: 'Filiais',
    path: routes.branches,
    icon: STORE,
  },
  {
    name: 'Menus',
    path: routes.menus,
    icon: LIST,
  },
  {
    name: 'Produtos',
    path: routes.products,
    icon: PRODUCT,
  },
  {
    name: 'Promoções',
    path: routes.promotions,
    icon: PROMOTION,
  },
  {
    name: 'Cupons',
    path: routes.coupons,
    icon: COUPOM,
  },
  {
    name: 'Conta',
    path: routes.account,
    icon: ACCOUNT,
  },
  {
    name: 'Configurações',
    path: routes.settings,
    icon: CONFIGURATIONS,
  },
]

export default menus
