import { generalIcons } from 'assets/icons/iconsLib'
import assembleAddress from 'utils/assembleAddress'
import { deliveryFeeTranslations, deliveryFeeTypes } from 'interfaces/deliveryFees/deliveryFeeTypes'
import contentTypes from 'libs/sectionTypes'

const {
  MANAGER,
  ADDRESS,
  DELIVERY_TYPE,
  DELIVERY_FEE,
  PAYMENT_TYPE,
} = generalIcons

const mapDeliveryFees = (type, fees) => {
  switch (type) {
    case deliveryFeeTypes.unique:
      return [`R$ ${fees}`]
    case deliveryFeeTypes.radius:
      return Object.entries(fees)
        .map(([range, p]) => (`${range} KM - R$ ${p}`))
    case deliveryFeeTypes.neighborhood:
      throw new Error('Not implemented yet')
    default:
      throw new Error('Unknown delivery fee type')
  }
}

const branchesAdapter = (branch) => {
  const {
    id,
    branchName,
    logo,
    isActive,
    managerName,
    deliveryTypes,
    paymentMethods,
    deliveryFees: {
      type,
      fees,
    },
  } = branch

  return {
    id,
    name: branchName,
    logo,
    isActive,
    sections: [
      {
        icon: MANAGER,
        title: 'Gerente',
        content: {
          values: [managerName],
          type: contentTypes.UNIQUE,
        },
      },
      {
        icon: ADDRESS,
        title: 'Endereço',
        content: {
          values: [assembleAddress(branch)],
          type: contentTypes.UNIQUE,

        },
      },
      {
        icon: DELIVERY_TYPE,
        title: 'Taxas de entrega',
        subTitle: deliveryFeeTranslations[type],
        content: {
          values: mapDeliveryFees(type, fees),
          type: contentTypes.LIST,
        },
      },
      {
        icon: DELIVERY_FEE,
        title: 'Tipo de entrega',
        content: {
          values: deliveryTypes.map(({ deliveryType }) => deliveryType),
          type: contentTypes.ICONS,
        },
      },
      {
        icon: PAYMENT_TYPE,
        title: 'Métodos de pagamento',
        content: {
          values: paymentMethods.map(({ paymentMethod }) => paymentMethod),
          type: contentTypes.ICONS,
        },
      },
    ],
  }
}

export default branchesAdapter
