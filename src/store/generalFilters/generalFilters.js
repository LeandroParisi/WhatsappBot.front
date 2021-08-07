import filterTypes from 'libs/filterTypes'

export const statusOptions = [
  {
    id: null,
    name: 'Todos',
  },
  {
    id: 0,
    name: 'Inativo',
  },
  {
    id: 1,
    name: 'Ativo',
  },
]

export const statusFilter = {
  key: 'isActive',
  type: filterTypes.STATUS,
  options: statusOptions,
  placeholder: 'Status',
}
