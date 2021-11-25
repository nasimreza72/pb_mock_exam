

// #Double Vowels
// Create a function called `hasDoubleVowels`. This function will be called with a string argument: a word like "Facetious", "skiing", "strengths", or "VACCUUM". If the word has a double vowel ("aa", "ee", "ii", "oo" or "uu"), the function should return the input word exactly as it was sent in (case sensitive). If the word has no double vowels, it should return the exact string: "The input has no double vowels".


let arr=["aa", "ee", "ii", "oo","uu"]
const hasDoubleVowels=(text)=>{
    for (let i=1; i < text.length-1; i++) {
        // if(text[i]==text[i+1]) return text
        if(arr.includes(text.substring(i,i+2).toLowerCase())) return text
    }

    return"The input has no double vowel"
}

console.log(hasDoubleVowels("maark"));



// #Multiples of 9
// Create a function called "isMultipleOfNine". The function will be called with an argument which represents a valid integer, such as "4", 5 or 4.5e1. It should return `true` if the number is divisible by 9 and `false` if not.

const isMultipleOfNine = (number) => {
    if(number%9===0){
        return true
    }else{
        return false
    }

    // return number%9==0;
}

console.log(isMultipleOfNine("18"));



// # Polygon

// Create a function named "polygonType". This function will be called with between 3 and 6 positive number arguments, such as `3,4,5`. These numbers represent the lengths of the sides of a polygon. The function should return one of the following values:

// 1. "triangle"
// 2. "equilateral triangle"
// 3. "quadrilateral"
// 4. "square"
// 5. "pentagon"
// 6. "regular pentagon"
// 7. "hexagon"
// 8. "regular hexagon"

// The output depends on:

// * How many lengths of sides are given
// * Whether all the lengths are identical (outputs 2, 4, 6 and 8)

function polygonType(...args) {
    const regular = Math.min(...args) === Math.max(...args);

    if(args.length===3){
        if (regular) {
        return 'equilateral triangle'
        }
        return'triangle'
    } 
    
    else if (args.length===4){
        if (regular) {

            return 'square'
        }
        return 'quadrilateral'
    }

    else if (args.length===5){
        if (regular) {

            return 'regular pentagon'
        }
        return 'pentagon'
    }

    else if (args.length===6){
        if (regular) {

            return 'regular hexagon'
        }
        return 'hexagon'
    }

    else{
        return 'unexpected number of sides'
    }

}

console.log(polygonType(5,5,5,5,5));




// RockRole
// Create a function called "rockAndRoll". This function will receive a single emoji character as its input, such as "🪨", "📰" or "✂️". If the argument is "🎸", the function should return the string "rock". If it is any other character, it should return the string 
// "roll".

function rockRole(emoji){
  return ( emoji=="🎸" ? "rock" : "role" )
}
console.log(rockRole("🎸" ));


// # Looping

// Create a function named "powerOutput" which will output the series "1 4 27 256 3125 46656" as a string. No arguments will be provided.

// Note that these numbers represent "1 to the power 1", "2 to the power 2", and so on up to "6 to the power 6". Note also that there are neither leading or trailing spaces in the string, and that the numbers are separated by a single space.

// ---

const powerOutput = () => {
    let result = "";
    for (let i = 1; i<=6; i++) {
        result += " "+(i ** i);
    }
    return result.trim();
}
console.log(powerOutput());



// # Problem solving

// Create a function named "secretSanta". This will be called with a string argument like "There's no business like show business" or "A whole holiday in Holland". The function should output the number of times the substring "ho" (or "HO" or "hO" or "Ho") appears in the input.

function secretSanta (str){
    const strCase =str.toLowerCase();
    let count =0;
    for (i=0; i<str.length; i++){
        if(strCase[i]=='h' && strCase[i+1]=='o'){
            count++
        }
    }
    return count
}

console.log(secretSanta("A whole holiday in Holland"));


// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {hasDoubleVowels, isMultipleOfNine, polygonType, rockAndRoll, powerOutput, secretSanta};
