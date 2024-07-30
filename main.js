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

// Is card issuer already on the naughty list?

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
//  console.log(`Card Number: ${cardNbr}`);
//  console.log(`Card number length ${cardNbr.length}`);
//  console.log(`Check digit: ${cardNbr[cardNbr.length - 1]}`)
// Iterate
  for (let cardNbrIndex = cardNbr.length - 2; cardNbrIndex >= 0; cardNbrIndex--) {
//    console.log(`Card number position ${cardNbrIndex + 1}`)
    if (cardNbrIndex % 2 === 0) { // Index modulo 2 = 0 (ie it's at an even index position)?
//      console.log(`Number at this position: ${cardNbr[cardNbrIndex]}`)
      nbrToAdd = cardNbr[cardNbrIndex] *= 2;   // Then double it
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

    let cardNbr = valid1;
    console.log(validateCred(cardNbr));