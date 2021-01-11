// Iteration 1: Names and Input
//1.1
let hacker1 = "Frederic Muniente"
//1.2
console.log(`The driver's name is ${hacker1}.`)

//1.3
let hacker2 = "David Castejon"
//1.4
console.log(`The navigator's name is ${hacker2}.`)


// Iteration 2: Conditionals
//2.1
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  

// Iteration 3: Loops
let spacedDriver = "";

for (let i = 0; i <= hacker1.length - 1; i++) {
  spacedDriver += hacker1[i] + " "
}
console.log(spacedDriver.toUpperCase())


//3.2
let backwardsNavigator = "";

for (let j = 1; j <= hacker2.length; j++) {
  backwardsNavigator += hacker2[hacker2.length - j];
}

console.log(backwardsNavigator)

//3.3
let driverFirstLetter = hacker1[0]

let navigatorFirstLetter = hacker2[0]

if (driverFirstLetter < navigatorFirstLetter) {
  console.log("The driver's name goes first definitely.")
} else if (navigatorFirstLetter < driverFirstLetter) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}

//BONUS 1.2
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum diam eu tortor ullamcorper, at congue ligula tincidunt. Aliquam at posuere tellus, ac varius sem. Mauris tincidunt arcu sed fermentum molestie. Morbi at tortor ligula. In viverra felis id luctus vehicula. Maecenas cursus sagittis velit a laoreet. Nunc vel arcu turpis. Sed risus felis, convallis eget maximus vitae, ullamcorper in magna. Vestibulum mollis viverra augue, eget pharetra enim tempus in. Vivamus sagittis neque ut sem venenatis imperdiet. Etiam at finibus velit. Praesent ac pharetra nunc. Sed tellus libero, dictum eu vehicula quis, volutpat eget augue. Praesent eget viverra urna. Curabitur nibh orci, consectetur at metus nec, ultrices dignissim sem.

Vestibulum non eros ante. Praesent non porta ante. Aliquam ut urna neque. Proin gravida est mi, sit amet condimentum purus auctor non. Morbi fringilla lacus in sem rhoncus ornare. Vivamus enim augue, fermentum vitae odio eu, volutpat dictum enim. Aenean rhoncus purus sit amet orci elementum, quis aliquet nisi malesuada. Nunc orci augue, efficitur ut felis sed, placerat rutrum elit. Donec mattis, magna sed consequat ullamcorper, risus eros consequat magna, vel scelerisque purus nulla vel ligula. Donec diam sem, porttitor eget tempus ut, dictum ut erat. Morbi vestibulum, elit quis tincidunt pharetra, felis ipsum tempus orci, a ornare lacus massa et tellus. Ut dapibus tincidunt nulla, at placerat leo efficitur in. Integer luctus efficitur venenatis.

Sed facilisis et lectus id dignissim. Morbi malesuada ornare odio, ut pretium sem. Nulla at finibus metus, nec pretium augue. Donec rutrum quam vitae rutrum accumsan. Pellentesque at sapien rhoncus, fermentum lorem sit amet, tempus magna. Quisque ut nisl imperdiet, suscipit enim sed, pellentesque dui. Cras volutpat eros justo, eget rutrum lorem rutrum dapibus. Suspendisse iaculis ligula a efficitur porttitor. Maecenas sit amet sagittis ex. Fusce ac elementum nisi. Suspendisse potenti. Aenean id consectetur dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vestibulum ex tempus mi bibendum commodo. Curabitur eleifend mi nibh, eget convallis mauris aliquam et.`

//BONUS 1.2
let numberOfWords = 1

for (letter of loremIpsum) {
  if (letter === " ") {
    numberOfWords++
  }
}

console.log(`This lorem ipsum text has ${numberOfWords} words.`)

//BONUS 1.3
let numberOfEt = 0
let idx1 = 0
let idx2 = 2

//Check for the text 'et' using slice
for (let idx = 0; idx <= loremIpsum.length -1; idx++) {
  if (loremIpsum.slice(idx1, idx2) === "et") {
    numberOfEt++
  }
  idx1++
  idx2++
}

console.log(`This lorem ipsum has the word 'et' ${numberOfEt} times`)

//BONUS 2
let phraseToCheck = "Amor, Roma"
let phraseToCheckNoSpaces = "";

let invertedPhrase = "";
let invertedPhraseNoSpaces = "";

//Remove spaces from the sentence
for (letter of phraseToCheck) {
  if(letter != " ") {
    phraseToCheckNoSpaces += letter
  }
}

//Create an inverted sentence
for (let j = 1; j <= phraseToCheck.length; j++) {
  invertedPhrase += phraseToCheck[phraseToCheck.length - j];
}

//Remove spaces from the inverted sentence
for (letter of invertedPhrase) {
  if(letter != " ") {
    invertedPhraseNoSpaces += letter
  }
}

if (phraseToCheckNoSpaces.toLowerCase() === invertedPhraseNoSpaces.toLowerCase()) {
  console.log(`This is a Palindrome. ${phraseToCheckNoSpaces} is equal to ${invertedPhraseNoSpaces}`)
} else {
  console.log(`This is not a Palindrome. ${phraseToCheckNoSpaces.toLowerCase()} is not equal to ${invertedPhraseNoSpaces.toLowerCase()}`)
}