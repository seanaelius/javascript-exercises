const convertToCelsius = function(temp) {
  convertedTemp = (temp-32)*(5/9)
  if (convertedTemp % 1 === 0) {
    return convertedTemp
  } else {
    return Number(convertedTemp.toFixed(1))
  }
  
};

const convertToFahrenheit = function(temp) {
  convertedTemp = (temp*(9/5)) + 32
  if (convertedTemp % 1 === 0) {
    return convertedTemp
  } else {
    return Number(convertedTemp.toFixed(1))
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
