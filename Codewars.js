//Vowels Count
function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']; // list of vowels
  return [...str]                            // turn string into array of characters
    .filter(char => vowels.includes(char)).length;    // filter and count vowels
    }
//Even or Odd
function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd"; // check if number is even or odd
}
//Get the Middle Character
function getMiddle(s) {
  const len = s.length;                          // get string length
  const mid = Math.floor(len / 2);               // find middle index

  if (len % 2 === 0) {                           // if length is even
    return s[mid - 1] + s[mid];                  // return two middle characters
  } else {                                       // if length is odd
    return s[mid];                               // return the single middle character
  }
}
//Opposite number
function opposite(number) {
  return -number; // return the additive inverse
}
//Mumbling
function accum(s) {
  return [...s]                              // split string into array of characters
    .map((char, index) => 
      char.toUpperCase() + char.toLowerCase().repeat(index) // repeat char index times
    )
    .join('-');                              // join all parts with a hyphen
}
//You're a square!
var isSquare = function(n) {
  if (n < 0) return false;               // negative numbers cannot be perfect squares
  return Math.sqrt(n) === Math.floor(Math.sqrt(n)); // true if sqrt is integer
};
//Disemvowel Trolls
function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g, ''); // remove all vowels (both lowercase and uppercase)
}
//Highest and Lowest
function highAndLow(numbers) {
  const nums = numbers.split(' ').map(Number); // convert string to array of numbers
  const max = Math.max(...nums);               // find the highest number
  const min = Math.min(...nums);               // find the lowest number
  return `${max} ${min}`;                      // return as "max min"
}
//Exes and Ohs
function XO(str) {
  const lowerStr = str.toLowerCase();               // make string lowercase
  const xCount = (lowerStr.match(/x/g) || []).length; // count 'x'
  const oCount = (lowerStr.match(/o/g) || []).length; // count 'o'
  return xCount === oCount;                         // return true if counts match
}
//Square Every Digit
function squareDigits(num) {
  return Number(
    String(num)                     // convert number to string
      .split('')                     // split into digits
      .map(digit => digit ** 2)      // square each digit
      .join('')                      // join back into a string
  );
}
//Shortest Word
function findShort(s) {
  return Math.min(...s.split(' ').map(word => word.length)); // split into words, get lengths, find minimum
}
// Complementary DNA
function DNAStrand(dna) {
  const complements = { A: 'T', T: 'A', C: 'G', G: 'C' }; // mapping of complements
  return dna.split('')                                     // split into characters
            .map(nuc => complements[nuc])                  // replace each with its complement
            .join('');                                     // join back into a string
}
//Descending Order
function descendingOrder(n) {
  return Number(
    String(n)                   // convert number to string
      .split('')                 // split into digits
      .sort((a, b) => b - a)     // sort digits in descending order
      .join('')                  // join back into a string
  );
}
//Sum of positive
function positiveSum(arr) {
  return arr
    .filter(num => num > 0)  // keep only positive numbers
    .reduce((sum, num) => sum + num, 0); // sum them, default to 0
}
//Isograms
function isIsogram(str) {
  const lowerStr = str.toLowerCase();           // convert to lowercase
  const chars = new Set();                      // create a set to store letters

  for (let char of lowerStr) {
    if (chars.has(char)) return false;         // duplicate found
    chars.add(char);                            // add char to set
  }

  return true;                                  // no duplicates found
}
// List Filtering
function filter_list(l) {
  return l.filter(item => typeof item === 'number'); // keep only numbers
}
//Find the smallest integer in the array
function findSmallestInt(args) {
  return Math.min(...args); // spread array and find minimum
}
//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
  const [first, second] = numbers.sort((a, b) => a - b); // sort ascending and take first two
  return first + second;                                  // sum the two smallest numbers
}
//Growth of a Population
function nbYear(p0, percent, aug, p) {
  let years = 0;              // initialize the number of years
  let population = p0;        // start with the initial population

  while (population < p) {    // repeat until population reaches or exceeds target
    population = Math.floor(population + population * (percent / 100) + aug); // update population
    years++;                  // count this year
  }

  return years;               // return total number of years needed
}
//String repeat
function repeatStr(n, s) {
  return s.repeat(n); // use built-in repeat method to repeat string n times
}
//Is this a triangle?
function isTriangle(a, b, c) {
  // check all sides are positive and satisfy triangle inequality
  return a > 0 && b > 0 && c > 0 &&
         a + b > c &&
         a + c > b &&
         b + c > a;
}
//Find the next perfect square!
function findNextSquare(sq) {
  const root = Math.sqrt(sq);            // find the square root

  if (root % 1 !== 0) return -1;         // return -1 if not a perfect square

  const nextRoot = root + 1;             // next integer
  return nextRoot ** 2;                  // return its square
}
//Credit Card Mask
function maskify(cc) {
  const len = cc.length;                        // get string length
  if (len <= 4) return cc;                      // if 4 or fewer chars, return as is
  return '#'.repeat(len - 4) + cc.slice(-4);    // mask all but last 4 characters
}
//Sum of odd numbers
function rowSumOddNumbers(n) {
  // The sum of the nth row of consecutive odd numbers is n^3
  return n ** 3;
}
//Find the divisors!
function divisors(n) {
  const result = [];

  for (let i = 2; i < n; i++) {        // check numbers from 2 up to n-1
    if (n % i === 0) result.push(i);   // if i divides n, add to result
  }

  return result.length ? result : `${n} is prime`; // return divisors or "n is prime"
}
//Return Negative
function makeNegative(num) {
  return num > 0 ? -num : num; // if positive, make negative; otherwise return as is
}
//Remove First and Last Character
function removeChar(str) {
  return str.slice(1, -1); // remove first and last characters
}
//Remove String Spaces
function noSpace(x) {
  return x.replace(/\s+/g, ''); // replace all whitespace with empty string
}
//Convert boolean values to strings 'Yes' or 'No'.
function boolToWord(bool) {
  return bool ? 'Yes' : 'No'; // return "Yes" for true, "No" for false
}
//Convert a Number to a String!
function numberToString(num) {
  // Using String constructor
  return String(num);
  }
  //Basic Mathematical Operations
  function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2; // addition
    case '-':
      return value1 - value2; // subtraction
    case '*':
      return value1 * value2; // multiplication
    case '/':
      return value1 / value2; // division
    default:
      throw new Error('Invalid operation'); // handle invalid input
  }
}
//Sum of the first nth term of Series
function SeriesSum(n) {
  if (n === 0) return "0.00";

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + i * 3);
  }

  return sum.toFixed(2);
}
// Keep Hydrated!
function litres(time) {
  return Math.floor(time * 0.5); // multiply by 0.5 and round down
}
// Century From Year
function century(year) {
  return Math.ceil(year / 100); // divide by 100 and round up
}
//Beginner - Lost Without a Map
function maps(x) {
  return x.map(num => num * 2); // multiply each element by 2
}
//Reversed Strings
function solution(str) {
  return str.split('').reverse().join(''); // split into chars, reverse, join back
}
//String ends with?
function solution(str, ending) {
  return str.endsWith(ending); // returns true if str ends with ending
}
//Do I get a bonus?
function bonusTime(salary, bonus) {
  return `£${bonus ? salary * 10 : salary}`; // multiply by 10 if bonus is true, else use salary
}
// Abbreviate a Two Word Name
function abbrevName(name) {
  // Split the name into two parts
  let parts = name.split(" ");
  
  // Take the first character of each, capitalize, and join with a dot
  return `${parts[0][0].toUpperCase()}.${parts[1][0].toUpperCase()}`;
}
//DNA to RNA Conversion
function DNAtoRNA(dna) {
  // Replace all 'T' with 'U'
  return dna.replace(/T/g, "U");
}
//Counting sheep...
function countSheeps(sheep) {
  // Filter only true values and count them
  return sheep.filter(s => s === true).length;
}
//Ones and Zeros
function binaryArrayToNumber(arr) {
  // Join the array into a string, then parse as binary
  return parseInt(arr.join(''), 2);
}
//A Needle in the Haystack
function findNeedle(haystack) {
  // Find the index of the word "needle"
  let index = haystack.indexOf("needle");
  
  // Return the formatted string with the index
  return "found the needle at position " + index;
}
//Remove the minimum
function removeSmallest(numbers) {
  // If the array is empty, return an empty array
  if (numbers.length === 0) return [];

  // Find the smallest number in the array
  const min = Math.min(...numbers);

  // Find the index of the first occurrence of the smallest number
  const index = numbers.indexOf(min);

  // Return a new array with that element removed
  return numbers.slice(0, index).concat(numbers.slice(index + 1));
}
//Convert number to reversed array of digits
function digitize(n) {
  // Return digits of number in reverse order as array
  return n.toString().split('').reverse().map(Number);
}
//Make a function that does arithmetic!
function arithmetic(a, b, operator) {
  // Perform arithmetic based on operator without using if
  const operations = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y
  };
  return operations[operator](a, b);
}
//Regular Ball Super Ball
var Ball = function(ballType) {
  // set ball type, default is "regular"
  this.ballType = ballType || "regular";
};
//Make them bark!
function Dog(name, breed, sex, age) {
  this.name  = name;
  this.breed = breed;
  this.sex   = sex;
  this.age   = age;
}

// add bark to the prototype so every Dog can use it
Dog.prototype.bark = function() {
  return "Woof!";
};
//Add property to every object in array
// add property usersAnswer with value null to every object in questions
questions.forEach(q => q.usersAnswer = null);
//FIXME: Get Full Name
// return a person's full name from first and last
class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }
}


//Grasshopper - Summation
function summation(num) {
  // return the sum of numbers from 1 to num
  return (num * (num + 1)) / 2;
}


//Freely Chosen Examples

//Integers: Recreation One
function listSquared(m, n) {
  let res = [];

  for (let i = m; i <= n; i++) {
    let sum = 0;

    // find divisors
    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        sum += j * j;              // add divisor squared
        if (j !== i / j) {
          sum += (i / j) * (i / j); // add the paired divisor squared
        }
      }
    }

    // check if sum is a perfect square
    let root = Math.sqrt(sum);
    if (root === Math.floor(root)) {
      res.push([i, sum]);
    }
  }

  return res;
}


//Array.diff
function arrayDiff(a, b) {
  return a.filter(x => !b.includes(x));
}

//Title Case
function titleCase(title, minorWords = '') {
  if (!title) return '';

  const minorSet = new Set(minorWords.toLowerCase().split(' '));

  return title
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      if (index === 0 || !minorSet.has(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join(' ');
}

//Sum of Digits / Digital Root

function digitalRoot(n) {
  // Keep reducing until single digit
  while (n >= 10) {
    n = n.toString().split('').reduce((sum, d) => sum + Number(d), 0);
  }
  return n;
}

//Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
function sumDigPow(a, b) {
  let res = []; // Array to store numbers that satisfy the condition
  
  // Iterate through all numbers in the range [a, b]
  for (let n = a; n <= b; n++) {
    // Convert number to string, split into digits, then reduce to calculate sum
    let sum = n.toString()
               .split('') // Convert to array of digit strings
               .reduce((s, d, i) => s + Math.pow(Number(d), i + 1), 0); // Sum of digits^position
    
    // Check if sum of powered digits equals original number
    if (sum === n) res.push(n); // Add to results if condition is met
  }
  
  return res; // Return array of valid numbers
}

//Number of trailing zeros of N!
function zeros(n) {
    let count = 0; // Initialize counter for trailing zeros
    
    // Count multiples of 5, 25, 125, 625, etc.
    // Each power of 5 contributes additional factors of 5
    for (let i = 5; n / i >= 1; i *= 5) {
        count += Math.floor(n / i); // Add how many times current power divides n
    }
    
    return count; // Return total trailing zeros
}

//Pick peaks
function pickPeaks(arr) {
    let pos = [];
    let peaks = [];
    
    // Need at least 3 elements to have a potential peak
    if (arr.length < 3) {
        return { pos: pos, peaks: peaks };
    }
    
    for (let i = 1; i < arr.length - 1; i++) {
        // Check if current element is greater than previous
        if (arr[i] > arr[i - 1]) {
            // Potential peak - check if it's followed by descent or plateau end
            let j = i;
            
            // Handle plateaus - find where the plateau ends
            while (j < arr.length - 1 && arr[j] === arr[j + 1]) {
                j++;
            }
            
            // If after plateau (or current position) there's a descent, it's a peak
            if (j < arr.length - 1 && arr[j] > arr[j + 1]) {
                pos.push(i);  // Store the start position of the peak/plateau
                peaks.push(arr[i]);
            }
            
            // Skip the plateau we just processed
            if (j > i) {
                i = j;
            }
        }
    }
    
    return { pos: pos, peaks: peaks };
}

//Strip Comments
function solution(input, markers) {
    // Split input into lines
    const lines = input.split('\n');
    
    // Process each line
    const result = lines.map(line => {
        // Find the position of the earliest marker in this line
        let minIndex = line.length;
        
        for (const marker of markers) {
            const index = line.indexOf(marker);
            if (index !== -1 && index < minIndex) {
                minIndex = index;
            }
        }
        
        // If a marker was found, take substring up to that position
        let stripped = minIndex < line.length ? line.substring(0, minIndex) : line;
        
        // Trim trailing whitespace
        return stripped.trimEnd();
    });
    
    // Join lines back together
    return result.join('\n');
}

// Most frequently used words in a text

function topThreeWords(text) {
    const wordCount = new Map();
    
    // Extract words using regex - letters and apostrophes only
    const words = text.toLowerCase().match(/[a-z']+/g) || [];
    
    // Count word frequencies
    for (const word of words) {
        // Skip words that are only apostrophes
        if (!word || word.replace(/'/g, '') === '') continue;
        
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }
    
    // Convert to array and sort by frequency (descending)
    const sortedWords = Array.from(wordCount.entries())
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    
    // Return top 3 (or fewer if not enough words)
    return sortedWords.slice(0, 3).map(entry => entry[0]);
}