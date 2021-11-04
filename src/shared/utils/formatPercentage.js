const formatPercentage = (price, decimal = false) => {
  if (decimal) return `${Number(price).toFixed(2)} %`
  return `R$ ${Number(price)} %`
}

export default formatPercentage
