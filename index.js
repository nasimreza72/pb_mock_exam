// Add answers here 


function hasDoubleVowels(input) {
  const lowerCase = input.toLowerCase()
  const doubleVowels = ["aa", "ee", "ii", "oo", "uu"]
  for (const vowels of doubleVowels) {
    if (lowerCase.includes(vowels)) {
      return input
    }
  }
  return "The input has no double vowels"
}


function isMultipleOfNine(integer) {
  return !(integer % 9)
}


function polygonType(...sides) {
  const count = sides.length
  const regular = (Math.max(...sides) === Math.min(...sides))

  if (regular) {
    switch (count) {
      case 3: return "equilateral triangle"
      case 4: return "square"
      case 5: return "regular pentagon"
      case 6: return "regular hexagon"
      default: return "unexpected number of sides"
    }
  } else {
    switch (count) {
      case 3: return "triangle"
      case 4: return "quadrilateral"
      case 5: return "pentagon"
      case 6: return "hexagon"
      default: return "unexpected number of sides"
    }
  }
}


function rockAndRoll(emoji) {
  return (emoji === "🎸" ? "rock" : "roll")
}


function powerOutput() {
  let output = ""
  for ( let ii = 1; ii < 7; ii += 1 ) {
    output += " " + Math.pow(ii, ii)
  }
  
  return output.trim()
}


function secretSanta(string) {
  string = string.toLowerCase()
  
  // let hoCount = 0
  // const total = string.length - 1
  // for ( let ii = 0; ii < total; ii += 1 ) {
  //   if (string.startsWith("ho")) {
  //     hoCount += 1
  //   }

  //   string = string.substring(1)
  // }

  let hoCount = (string.split("ho")).length - 1

  return hoCount
}



// DO NOT EDIT below this line - This will result in an automatic fail
module.exports = {hasDoubleVowels, isMultipleOfNine, polygonType, rockAndRoll, powerOutput, secretSanta};
