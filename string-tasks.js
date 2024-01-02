const { concatenateStrings, 
    getStringLength,
    getStringFromTemplate,
    extractNameFromTemplate,
    getFirstChar,
    removeLeadingAndTrailingWhitespaces,
    repeatString,
    unbracketTag,
    convertToUpperCase,
    removeFirstOccurrences,
    encodeToRot13,
    extractEmails} = require("./src/01-strings-tasks");

    const {getAverage,getAngleBetweenVectors} = require('./src/02-numbers-tasks')

console.log(concatenateStrings("","bb"))
console.log(getStringLength("aaaaa"))
console.log(getStringFromTemplate('John','Doe'))
console.log(extractNameFromTemplate('Hello, John Doe!'))
console.log(getFirstChar('John Doe'))
console.log(removeLeadingAndTrailingWhitespaces('\tHello, World! '))
console.log(repeatString('cat',3))
console.log(unbracketTag('<a>'))
console.log(convertToUpperCase('Thunderstruck'))
console.log(removeFirstOccurrences('To be or not to be','not'))
console.log(encodeToRot13('hello'))
console.log(extractEmails('angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'))
/*console.log(getCardId(['A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠']))*/
console.log(getAverage(-3,3))
console.log(getAngleBetweenVectors(1,0,0,1))