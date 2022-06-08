// Four Letter Words.
console.log("--- Task 1: Four Letter Words. ---")
function isFourLetters(arr) {
    const fourLetterArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 4) {
            fourLetterArr.push(arr[i]);
        }
    }
    return fourLetterArr;
}
console.log(isFourLetters(["Deer", "Duck", "Dog", "Elephant"]));

// Months
console.log("")
console.log("--- Task 2: Months. ---")
function getMonthName(num) {
    const monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const numOfMonth = num - 1;
    if (num <= 0) {
        return `no corresponding month`;
    } else if ((num >= 1) && (num <= 12)) {
        return monthOfYear[numOfMonth];
    } else {
        return `no corresponding month`;
    }
}
console.log(getMonthName(8));

// Amplify the Multiples of 4
console.log("")
console.log("--- Task 3: Amplify the Multiples of 4. ---")
function amplifyMultiplesOfFour(num) {
    const numArr = [];
    for (let i = 1; i <= num; i++) {
        if (i % 4 === 0) {
            let ampByTen = i * 10;
            numArr.push(ampByTen);
        } else {
            numArr.push(i);
        }
    }
    return numArr;
}
console.log(amplifyMultiplesOfFour(50));

// One is not like the others...
console.log("")
console.log("--- Task 4: One is not like the others... ---")
function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        if (arr.indexOf(currentElement) === arr.lastIndexOf(currentElement)) {
            return currentElement;
        }
    }
}
console.log(unique([3, 3, 3, 7, 3, 3])) //7

// Word Ranking
console.log("")
console.log("--- Task 5: Word ranking ---")
function wordRank(sentence) {
    const words = sentence.split(" ");

    // Calculate score for each word
    const ranking = [];
    for (let i = 0; i < words.length; i++) {
        let wordScore = 0;
        const word = words[i].toLowerCase();

        for (let y = 0; y < word.length; y++) {
            const letterCharCode = word.charCodeAt(y);
            if (letterCharCode < 97 || letterCharCode > 122) {
                // console.log("> Skipping over the character " + word[y])
                continue;
            }
            // console.log(`> Score for letter ${word[y]} is ${letterCharCode}`)
            wordScore += letterCharCode;
        }

        // console.log("> The word " + word + " score: " + wordScore)
        ranking.push(wordScore);
    }

    // Determine which index position has the highest scoring word
    let winningPosition = 0;
    for (let i = 0; i < ranking.length; i++) {
        if (ranking[i] > ranking[winningPosition]) {
            winningPosition = i;
        }
    }
    return words[winningPosition]
}
console.log(wordRank("Testing, one, 2, three"));
console.log(wordRank("The quick brown fox."));
console.log(wordRank("Nancy is very pretty."));
console.log(wordRank("Check back tomorrow, man!"));
console.log(wordRank("Today is Wednesday."));

// c4n y0u r34d th15?
console.log("")
console.log("--- Task 6: c4n y0u r34d th15?  ---")
function code(str) {
    const lowerStr = str.toLowerCase();
    const letters = lowerStr.split("");
    const hackerSpeak = [];
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === "a") {
            letters[i] = "4";
            hackerSpeak.push(letters[i]);
        } else if (letters[i] === "e") {
            letters[i] = "3";
            hackerSpeak.push(letters[i]);
        } else if (letters[i] === "i") {
            letters[i] = "1";
            hackerSpeak.push(letters[i]);
        } else if (letters[i] === "o") {
            letters[i] = "0";
            hackerSpeak.push(letters[i]);
        } else if (letters[i] === "s") {
            letters[i] = "5";
            hackerSpeak.push(letters[i]);
        } else {
            hackerSpeak.push(letters[i]);
        }
    }
    const hacked = hackerSpeak.join("");
    return hacked;
}
console.log(code("do you even code, sis"));

// BONUS: Is it Symmetrical?
console.log("")
console.log("--- BONUS Task 1: Is it Symmetrical? ---")
function isSymmetrical(num) {
    const numForwards = num.toString();
    const numSplit = numForwards.split("");
    const reverse = numSplit.reverse();
    const numReverse = reverse.join("");

    if (numForwards === numReverse) {
        return true;
    } else {
        return false;
    }
}
console.log(isSymmetrical(111));

// camelCase -> snake_case
console.log("")
console.log("--- BONUS Task 2: camelCase -> snake_case ---")
function toCamelCase(snakeStr) {
    const splitStr = snakeStr.split("_");
    const camelCaseArray = [];
    for (let i = 0; i < splitStr.length; i++) {
        let firstChar, remainder;
        if (splitStr[i] === splitStr[0]) {
            camelCaseArray.push(splitStr[0]);
            continue;
        } else {
           firstChar = splitStr[i].slice(0, 1);
            remainder = splitStr[i].slice(1, splitStr[i].length);
        }
        const currentWord = firstChar.toUpperCase() + remainder;
        camelCaseArray.push(currentWord);
    }
    const camelCaseText = camelCaseArray.join("");
    return camelCaseText;
}
console.log(toCamelCase("this_is_francesca_borg"));

// Pig Latin Translation
console.log("")
console.log("--- BONUS Task 3: Pig Latin Translation ---")
function pigLatin(str) {
    const lowerCase = str.toLowerCase();
    const splitStr = lowerCase.split(" ");
    const vowels = ["a", "e", "i", "o", "u"];
    const pigTranslation = [];
    for (let i = 0; i < splitStr.length; i++){
        const firstChar = splitStr[i][0];
        let remainder = splitStr[i].slice(1, splitStr[i].length);
        if (vowels.includes(firstChar.toLowerCase())) {
            // If i is falsy (0), then it's the first
            const firstCharVowel = (i ? firstChar : firstChar.toUpperCase()) + remainder + "way";
            pigTranslation.push(firstCharVowel);
        } else {
            if (i === 0) {
               const firstCharRem = remainder[0];
               const wordRemainder = remainder.slice(1, remainder.length);
               remainder = firstCharRem.toUpperCase() + wordRemainder;
            }
            const firstCharConsonant = remainder + firstChar + "ay";
            pigTranslation.push(firstCharConsonant);
        }
    }

    const joinedString = pigTranslation.join(" ");
    return joinedString;
}
console.log(pigLatin("this pig latin"));