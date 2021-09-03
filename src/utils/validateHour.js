export const validateHour = (hour) => {
  console.log(hour)
  const [start, end] = hour.split(':')

  return +start <= 24 && end <= 59
}
