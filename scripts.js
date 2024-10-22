/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
/**Yo, gleymdir þ og ð, my man, bætti við.**/
const CONSONANTS = "bcdfghjklmnpqrstvwxzþðBCDFGHJKLMNPQRSTVWXZÞÐ".split("");

/** Íslenskir samhljóðar */
const VOWELS = "aeiouyáéýúíóöæAEIOUYÁÉÝÚÍÓÖÆ".split("");

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === "string";

// Prófum fallið
console.assert(isString("hi") === true, "isString: skilar `true` fyrir streng");
console.assert(isString(42) === false, "isString: skilar `false` fyrir tölu");
console.assert(isString(null) === false, "isString: skilar `false` fyrir null");

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = " ") {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if(isString(str)) {
  const split =str.split(' ')
  var long = split[0];
  for(const word of split) {
    if (long.length < word.length) {
      long = word
    }
  }
  return long;
}
  else { return null;}
}
console.assert(longest('Ég er ekki hérna! Farðu!')==='hérna!', 'longest: velur lengsta orðið.'
);
console.assert(longest('Ég er ekki hérna! Farðu!')==='hérna!', 'Longest: ef mörg orð eru jafn löng velur það fyrsta orðið'
);
console.assert(longest(true)===null, 'Longest: skilar null ef ekki strengur'
);

function shortest(str) {
  if(isString(str)) {
  const split =str.split(' ')
  var short = split[0];
  for(const word of split) {
    if (short.length > word.length) {
      short = word
    }
  }
  return short;
}
  else { return null; }
}

console.assert(shortest('Ég er ekki hérna! Farðu!')==='Ég', 'shortest: velur styðsta orðið.'
);
console.assert(shortest('Ég er ekki hérna! Farðu!')==='Ég', 'shortest: ef mörg orð eru jafn löng velur það fyrsta orðið'
);
console.assert(shortest(true)===null, 'shortest: skilar null ef ekki strengur'
);

function reverse(str) {
  if (isString(str)) {
    const split = str.split("");
    const reversed = split.reverse();
    return reversed.join("");
  }
  else { return null; }
}

console.assert(
  reverse("hæ") === "æh", 
  "reverse: snýr við einföldum streng"
);
console.assert(
  reverse(false) === null,
  "reverse: ef ekki strengur, skila null"
);

function palindrome(str) {
  if (isString(str)) {
    if (str==='') {return false;}
      else {
      const split = str.split("");
      const reversed = split.reverse();
      if (reversed.join("") == str) {
        return true;
      }
      else {
        return false;
      }
    }
  }
  else {return false;}
}

console.assert(palindrome('raksápupáskar') === true, 'palindrome: skilar true ef strengur er eins afturábak og áfram'
);
console.assert(palindrome('Draugar drekka ekki dósagos') === false, 'palindrome: skilar false ef strengur er ekki eins afturábak og áfram'
);
console.assert(palindrome('') === false, 'palindrome: skilar false ef núllstrengur notaður'
);
console.assert(palindrome(true) === false, 'palindrome: skilar false ef ekki strengur'
);

function vowels(str) {
  var counter = 0
  if (isString(str)) {
    var letters = str.split('')    
    for(const word of letters)
      if(VOWELS.includes(word)) {
        counter = counter + 1;
      }      
    }  
    return counter  
}

console.assert(vowels(true)=== 0, 'vowels: ef ekki strengur, skal skila 0'
);
console.assert(vowels('Hérna er lyngmói')===6, 'vowels: skilar fjöld sérhljóða í streng'
);
console.assert(vowels('þlstrpv')===0, 'vowels: Ef engin sérshljóði skal skila 0'
);

function consonants(str) {
  var counter = 0
  if (isString(str)) {
    var letters = str.split('')    
    for(const word of letters)
      if(CONSONANTS.includes(word)) {
        counter = counter + 1;
      }      
    }  
    return counter  
}

console.assert(consonants(true)=== 0, 'consonants: ef ekki strengur, skal skila 0'
);
console.assert(consonants('Hérna er lyngmói')===8, 'consonants: skilar fjöld samhljóða í streng'
);
console.assert(consonants('AYEIEE')===0, 'consonants: Ef engin samshljóði skal skila 0'
);

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert('Nú verður þú beðinn um að slá inn streng, forritið mun greina ýsma hluti um hann, hvað er lengsta og styðsta orðið í honum, hvort hann er samhverfa og hversu margir sér- og samhlóðar eru í honum.');
  do {
  const input = prompt('Sláðu inn streng');
  if(input === null || input === '') {
    continue;
  }

    const long = longest(input)
    const short = shortest(input)
    const reversed = reverse(input)
    const samhverfa = palindrome(input)
    const vowel = vowels(input)
    const consonant = consonants(input)
    let palindromus = 'er'
    if(samhverfa === false) {palindromus = palindromus + ' ekki'}
    const output = (`-Lengsta orðið: ${long} \n -Styðsta orðið er: ${short} \n -Snúið við er það: ${reversed} \n -Fjöldi sérhljóða er: ${vowel} \n -Fjöldi samhljóða er: ${consonant} \n - Strengurinn ${palindromus} samhverfa`);
    alert(output);  
    
  
  }
  while(confirm('Prófa annan streng?'));
}

