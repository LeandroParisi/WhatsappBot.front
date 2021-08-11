const extractInitialValues = (entity) => {
  const {
    id, isActive, header, sections,
  } = entity

  const initialValues = {
    id: {
      value: id,
      editing: false,
    },
    isActive: {
      value: isActive,
      editing: false,
    },
  }

  header.forEach(({ key, value }) => {
    initialValues[key] = {
      value,
      editing: false,
    }
  })

  sections.forEach(({ subSections }) => {
    subSections.forEach(({ key, value }) => {
      initialValues[key] = {
        value,
        editing: false,
      }
    })
  })

  return initialValues
}

export default extractInitialValues
