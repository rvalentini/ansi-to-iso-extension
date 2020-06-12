const header = document.querySelector("div.page-header h1")
header.textContent = header.textContent + " (for ISO keyboards)"

const ansiToIso = {
    ';' : 'ö',
    ':' : 'Ö',
    '\'': 'ä',
    '"' : 'Ä',
    'y' : 'z',
    'Y' : 'Z',
    'z' : 'y',
    'Z' : 'Y',
    '<' : ';',
    '>' : ':',
    '/' : '-',
    '?' : '_',
    '[' : 'ü',
    ']' : '+',
    '{' : 'Ü',
    '}' : '*',
    '`' : '^', //TODO trouble here with deadkey '^'
    '~' : '°',
    '\\': '#',
    '|' : '\'',
    '@' : '"',
    '#' : '§',
    '^' : '&',
    '*' : '(',
    '(' : ')',
    ')' : '=',
    '-' : 'ß',
    '_' : '?',
    '=' : "´", //TODO trouble here with deadkey '´'
    '+' : '`', //TODO trouble here with deadkey '`'
    "&amp;": '/',
}

const lessonChars = document.querySelectorAll('[id^="cc"]')

Array.from(lessonChars).forEach(span => {
    const char = span.innerHTML
    if(char in ansiToIso) span.innerHTML = ansiToIso[span.innerHTML]
})


