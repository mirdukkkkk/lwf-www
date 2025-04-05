const json = {
    property: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        lookbehind: true,
        greedy: true
    },
    string: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: true,
        greedy: true
    },
    comment: {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: true
    },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: {
        pattern: /\bnull\b/,
        alias: "keyword"
    }
};

const lwfp = {
    comment: {
        pattern: /#.*/,
        greedy: true
    },
    punctuation: /[\[\]]/,
    separator: {
        pattern: /\|/,
        alias: "punctuation"
    },
    keyword: /\bhb\b/,
    number: /\b0x[\da-fA-F]+\b|\b\d+\b/,
    operator: /=>/,
    string: /\b[a-zA-Z_]\w*\b/
};

const lwfb = {
    index: {
        pattern: /(?<=\u200B)[\da-fA-F]{2}/g
    },
    boolean: {
        pattern: /07\s[\da-fA-F]{2}/
    },
    number: {
        pattern: /(00|01|02|03|04|05|06)\s[\da-fA-F]{2}/
    },
    string: {
        pattern: /08\s[\da-fA-F]{2}\s*.+/
    },
    null: {
        pattern: /09/
    },
    empty: {
        pattern: /0[aA]/
    },
    emptyCount: {
        pattern: /0[bB]\s[\da-fA-F]{2}/
    }
};

export { json, lwfp, lwfb };
