export const normalizeEditPayload = (branch) => {
  const { deliveryFees: { fees, type: { id } } } = branch
  return {
    ...branch,
    deliveryFees: {
      fees,
      type: id,
    },
  }
}

export const teste = 0
