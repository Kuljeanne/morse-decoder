const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let symbols = [];
    let result = [];
    for (let i = 0; i < expr.length; i += 10) {
        let symbol = expr.substring(i, i + 10);
        symbols.push(symbol)
    }
    for (let i = 0; i < symbols.length; i++) {
        while (symbols[i].startsWith('0')) {
            symbols[i] = symbols[i].substring(1);
        }
        while (symbols[i].includes('0')) {
            symbols[i] = symbols[i].replace('10', '.')
        }
        while (symbols[i].includes('11')) {
            symbols[i] = symbols[i].replace('11', '-')
        }

        MORSE_TABLE[symbols[i]] ? result.push(MORSE_TABLE[symbols[i]]) : result.push(' ')

    }

 return result.join('')
}

module.exports = {
    decode
}