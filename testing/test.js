
const { hasDoubleVowels, isMultipleOfNine, polygonType, rockAndRoll, powerOutput, secretSanta } = require("../index");


describe('hasDoubleVowels', () => {
    test.each`
    input| expected 
    ${"aardvark"} | ${"aardvark"}
    ${"BEE"} | ${"BEE"}
    ${"SKIing"} | ${"SKIing"}
    ${"good"} | ${"good"}
    ${"Continuum"} | ${"Continuum"}
    ${"INN"} | ${"The input has no double vowels"}
    ${"edge"} | ${"The input has no double vowels"}
    `('check if $input contains double vowel: $expected', ({input, expected}) => {
        expect(hasDoubleVowels(input)).toBe(expected);
    });
});

describe('isMultipleOfNine', () => {
    test.each`
    input| expected 
    ${9} | ${true}
    ${"117"} | ${true}
    ${9e9} | ${true}
    ${0b1001} | ${true}
    ${0x12} | ${true}
    ${6} | ${false}
    ${"66"} | ${false}
    `('check if $input is a multiple of 9: $expected', ({input, expected}) => {
        expect(isMultipleOfNine(input)).toBe(expected);
    });
});

describe('missingAngle', () => {
    test.each`
    input | expected 
    ${[3,4,5]} | ${"triangle"}
    ${[4, 4, 4]} | ${"equilateral triangle"}
    ${[3,4,5,6,7]} | ${"pentagon"}
    ${[1,1,1,1,1,1,1]} | ${"unexpected number of sides"}
    `('$input describes the shape: $expected', ({input, expected}) => {
        expect(polygonType(...input)).toBe(expected);
    });
});

describe('rockAndRoll', () => {
    test.each`
    input| expected 
    ${"🥁"} | ${"roll"}
    ${"🧻"} | ${"roll"}
    ${"🙄"} | ${"roll"}
    ${"🎸"} | ${"rock"}
    `('Rock or roll?: if $input then $expected', ({input, expected}) => {
        expect(rockAndRoll(input)).toBe(expected);
    });
});

// //loops

test('powerOutput', () => {
    expect(powerOutput()).toBe("1 4 27 256 3125 46656");
})

describe('secretSanta', () => {
    test.each`
    input| expected 
    ${"There's no business like show business"} | ${1}
    ${"A whole holiday in Holland"} | ${3}
    ${"E.T. phone home"} | ${2}
    ${"Toledo, Ohio"} | ${0}
    `('$input contains $expected occurrences of "ho"', ({input, expected}) => {
        expect(secretSanta(input)).toBe(expected);
    });
});