import { inputTypes } from 'libs/inputTypes'

const extractInitialValues = (entity) => {
  const {
    id, isActive, header, sections,
  } = entity

  const initialValues = {
    id,
    isActive,
  }

  header?.forEach(({ key, value }) => {
    initialValues[key] = value
  })

  sections?.forEach(({ subSections }) => {
    subSections.forEach(({ key, value, fieldType }) => {
      if (fieldType === inputTypes.ICONS) {
        initialValues[key] = new Set(value.map(({ id: valueId }) => valueId))
        return
      }
      initialValues[key] = value
    })
  })

  return initialValues
}

export default extractInitialValues
