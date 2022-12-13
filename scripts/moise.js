let table = {
    "а": "въ",
    "б": "хв",
    "в": "цц",
    "г": "ъв",
    "д": "ва",
    "е": "ъх",
    "ё": "ав",
    "ж": "жж",
    "з": "хъ",
    "и": "бв",
    "й": "аы",
    "к": "ам",
    "л": "йй",
    "м": "ку",
    "н": "ым",
    "о": "мм",
    "п": "щж",
    "р": "вй",
    "с": "хэ",
    "т": "рх",
    "у": "зп",
    "ф": "зх",
    "х": "аа",
    "ц": "кр",
    "ч": "бб",
    "ш": "че",
    "щ": "рт",
    "ъ": "ии",
    "ы": "ыъ",
    "ь": "ыи",
    "э": "аб",
    "ю": "об",
    "я": "аъ"
};
let revtable = {
    "въ": "а",
    "хв": "б",
    "цц": "в",
    "ъв": "г",
    "ва": "д",
    "ъх": "е",
    "ав": "ё",
    "жж": "ж",
    "хъ": "з",
    "бв": "и",
    "аы": "й",
    "ам": "к",
    "йй": "л",
    "ку": "м",
    "ым": "н",
    "мм": "о",
    "щж": "п",
    "вй": "р",
    "хэ": "с",
    "рх": "т",
    "зп": "у",
    "зх": "ф",
    "аа": "х",
    "кр": "ц",
    "бб": "ч",
    "че": "ш",
    "рт": "щ",
    "ии": "ъ",
    "ыъ": "ы",
    "ыи": "ь",
    "аб": "э",
    "об": "ю",
    "аъ": "я"
};
const isLowerCase = str => str == str.toLowerCase() && str != str.toUpperCase();
function to(string) {
    let res = '';
    for(let i = 0; i < string.length; ++i) {
        res += table[string[i]]?(isLowerCase(string[i])?table[string[i]]:table[string[i]].toUpperCase()):string[i];
    };
    return res;
};
function from(string) {
    string = string.toLowerCase();
    let res = '';
    for(let i = 0; i < string.length; ++i) {
        if(revtable[string.slice(i,i+2)]) {
            res += isLowerCase(string.slice(i,i+2))?revtable[string.slice(i,i+2)]:revtable[string.slice(i,i+2)].toUpperCase();
            ++i
        } else {
            res += string[i];
        };
    };
    return res;
};