export const convertHourToDate = (hour) => {
  if (!hour) {
    return hour
  }
  const [start, end] = hour.split(':')
  const convertedHour = new Date()
  convertedHour.setHours(+start, +end, 0)

  return convertedHour
}

export const extractHoursFromDate = (date) => {
  const hours = date.getHours().toString()
  let minutes = date.getMinutes().toString()
  minutes = minutes.length === 2 ? minutes : `0${minutes}`

  return `${hours}:${minutes}`
}
