// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
// const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]
const batch = [mystery1, mystery2, mystery3]

// Add your functions below:
/*
// validate card number
const validateCred = cardNbr => {
// We can't hoist an arrow function - see '// Helper Functions' below
  if (lhunTest(cardNbr)) { // Lhun algorithm function - returns true if card is good
    return true;
  } else {
    return false;
  }
};

// Identify all invalid cards
let invalidCards = [];
const findInvalidCards = cardArray => {
  console.log('In findInvalidCards');
  for (const [card] of [cardArray]) {
    console.log(`Number of current card is: ${card}`);
    console.log(`Type of current card is an array: ${Array.isArray(card)}`);
    // Curiouser and curiouser
    // typeof on an array returns 'object'
    // see here
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
      // use Array.isArray or Object.prototype.toString.call
      // to differentiate regular objects from arrays
    const validNotValid = validateCred(card);
    console.log(`Type of current card is an array: ${Array.isArray(card)}`); // typeof = object - wtf?
    if (!validNotValid) {
      invalidCards.push([card]);
      console.log(`Card number ${card} fails the Lhun Test`);
      // Identify dodgy card companies
      // Is card issuer already on the naughty list?
    }
    console.log(`Failing cards found so far:`);
     console.table(invalidCards);
    for (const [cardValue ]of [invalidCards]) {
      console.log(`This card value is: ${cardValue}`);
    }
  };
};


// That's All, Folks!

// Helper functions

// Handle the Lhun Test algorithm

const lhunTest = cardNbr => {
  // Save the test digit for check after iterating through array
  const checkDigit = cardNbr[cardNbr.length - 1];
  let accumulator = 0;
  let nbrToAdd = 0;
//  console.log(`Card Number: ${cardNbr}`);
//  console.log(`Card number length ${cardNbr.length}`);
//  console.log(`Check digit: ${cardNbr[cardNbr.length - 1]}`)
// Iterate
  for (let cardNbrIndex = cardNbr.length - 2; cardNbrIndex >= 0; cardNbrIndex--) {
//    console.log(`Card number position ${cardNbrIndex + 1}`)
    if (cardNbrIndex % 2 === 0) { // Index modulo 2 = 0 (ie it's at an even index position)?
//      console.log(`Number at this position: ${cardNbr[cardNbrIndex]}`)
      nbrToAdd = cardNbr[cardNbrIndex] * 2;   // Then double it
      // Originally I had '*=' not '*' which mutated the original digit
//      console.log(`Accumulator: ${accumulator}`);
//      console.log(`Number to add (may be %9'ed 1st): ${nbrToAdd}`);
      nbrToAdd < 9 ? accumulator += nbrToAdd : accumulator += (nbrToAdd % 9); // %9 if > 9
//      console.log(`Accumulator: ${accumulator}`);
    } else { // Odd index position so add as is to accumulator
//      console.log(`Accumulator: ${accumulator}`);
//      console.log(`Number at this position: ${cardNbr[cardNbrIndex]}`)
      accumulator += cardNbr[cardNbrIndex];
//      console.log(`Accumulator: ${accumulator}`);
    }
  };
  console.log(`Accumulator: ${accumulator}`);  
  console.log(`Check digit: ${checkDigit}`);
  // We have the 'Lhun value'
// Now we test for corruption of the card number

// Accumulator % 10 = 0?
  // Card good
// else
  // reject card
  accumulator += checkDigit;
  // console.log(`Accumulator: ${accumulator}`);
  const cardNbrCheck = accumulator % 10;
  // console.log(`Card number check: ${cardNbrCheck}`);
  return cardNbrCheck === 0;
}

findInvalidCards(batch);
*/

/* Test code
let cardNbr = valid1;
    console.log(validateCred(cardNbr));
*/

// Note: the value of named functions is they can be hoisted
// A hoisted function can be called before it is defined in the script (sic)
// Aha!moment JS is interpreted (or JIT compiled which comes to the same thing)

// This means we can work top-down we can define the major loops and structures
// in our programs first
// Giving descriptive names to functions means that when we call them our code
// is easy to understand.
// The functions become intuitive as if they were part of the language
// like 'print' or (slightly less intuitive) console.log().


// Test copy array to array of arrays
testArrayCopy(batch);
function testArrayCopy (inputArray){
  console.log('You are Here!');
  // iterate through the array of cards
  for (let i = 0; i <= inputArray.length - 1; i++) {          // index i
    const cardNbr = inputArray[i];
    console.log(cardNbr);
    let accumulator = cardNbr[cardNbr.length - 1];
    console.log(`accumulator: ${accumulator}`);
   // iterate through the remaining numbers in current card
    for (let j = cardNbr.length - 1; j >= 0; j--) {        // index j
      // OK so if cardNbr.length is even then the 1st to *2 will be odd [2%=1]
      // but if carNbr.length is odd then the 1st to *2 will be even [2%=0]
      // That means we have to test cardNbr.length *first* 
      // if it's odd then we do the odd ones, if it's even then we do the even ones right?
      // OR, we take ...length as our starting point and 
      
      if (cardNbr.length % 2 === 0){  // even-length card number
        if (j % 2 === 0) {
          // almost! we need to take modulo 9 of the *2 ffs this is hard work
          // or is it just me making it so?
        accumulator += cardNbr[j] * 2
        } else {
          accumulator += cardNbr[j];
        };
      } else {
        if (j % 2 !== 0) {
          accumulator += ((cardNbr[j] * 2) % 9);
          } else {
            accumulator += cardNbr[j];
          };
      };
      console.log(`accumulator: ${accumulator}`);
      console.log(`j: ${j}`);
      console.log(`cardNbr[j]: ${cardNbr[j]}`);
    };
  };
};


/// [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
///  6  0  1  2  3  5  7  0  2  0  9  3  2  3  5  3  2  0  3


// Code from Cc environment

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

// validate card number

const validateCred = cardNbr => {
// We can't hoist an arrow function - see '// Helper Functions' below
  if (lhunTest(cardNbr)) { // Lhun algorithm function - returns true if card is good
    return true;
  } else 
  return false;
};

// Identify all invalid cards

// Identify dodgy card companies

// That's All, Folks!

// Helper functions

// Handle the Lhun Test algorithm

const lhunTest = cardNbr => {
  // Save the test digit for check after iterating through array
  const checkDigit = cardNbr[cardNbr.length - 1];
  let accumulator = 0;
  let nbrToAdd = 0;
  console.log(`Card Number: ${cardNbr}`);
  console.log(`Card number length ${cardNbr.length}`);
  console.log(`Check digit: ${cardNbr[cardNbr.length - 1]}`)
// Iterate
  for (let cardNbrIndex = cardNbr.length - 2; cardNbrIndex > 1; cardNbrIndex--) {
    console.log(`Card number position ${cardNbrIndex + 1}`)
    if (cardNbrIndex % 2 === 0) { // Index modulo 2 = 0 (ie it's at an even index position)?
      console.log(`Number at this position: ${cardNbr[cardNbrIndex]}`)
      nbrToAdd = cardNbr[cardNbrIndex] *= 2;   // Then double it
      console.log(`Accumulator: ${accumulator}`);
      console.log(`Number to add (may be %9'ed 1st): ${nbrToAdd}`);
      nbrToAdd < 9 ? accumulator += nbrToAdd : accumulator += (nbrToAdd % 9); // %9 if > 9
      console.log(`Accumulator: ${accumulator}`);
    } else { // Odd index position so add as is to accumulator
      console.log(`Accumulator: ${accumulator}`);
      console.log(`Number at this position: ${cardNbr[cardNbrIndex]}`);
      accumulator += cardNbr[cardNbrIndex];
      console.log(`Accumulator: ${accumulator}`);
    }
  };

}
// Accumulator % 10 = 0?
  // Card good
// else
  // reject card
  // Is card issuer on the naughty list?
    // add
  // else
    // ignore

    let cardNbr = valid1;
    validateCred(cardNbr);