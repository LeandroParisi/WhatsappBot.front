const assembleAddress = ({
  street, streetComplement, streetNumber, neighborhood, cityName, countryName,
}) => `${street}, Nº ${streetNumber}, ${streetComplement && streetComplement} - ${neighborhood}, ${cityName} - ${countryName}`

export default assembleAddress
