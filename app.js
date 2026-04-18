const inputText = document.getElementById("text-input")
const wordCountEl = document.getElementById("word-count")
const charCountEl = document.getElementById("char-count")
const sentCountEl = document.getElementById("sentence-count")
const paraCountEl = document.getElementById("para-count")
const tokenGPTCountEl = document.getElementById("token-gpt")
const colors = ["bg-indigo-100", "bg-purple-100", "bg-pink-100", "bg-amber-100", "bg-teal-100"]
// const tokenClaudeCountEl = document.getElementById("token-claude")
const modelSelectorEl = document.getElementById("model-select")
const tokenDisplayEl = document.getElementById("token-display")

function countWords(text) {
    const word_arr = text.split(/\s+/);
    const res = word_arr.filter(Boolean);

    return res.length;
}

function countChars(text) {
    return text.length
}

function countSents(text) {
    if (text.trim() === "") {
        return 0
    }
    else {
        const spilted_text = text.split(/[.!?]+(?=\s|$)/)
        const filter_text = spilted_text.filter(Boolean)

        return filter_text.length
    }
}

function countParas(text) {
    if (text.trim() === "") {
        return 0
    }
    else {
        const spilted_text = text.split("\n\n")
        const filter_text = spilted_text.filter(Boolean)

        return filter_text.length
    }
}

function estimateTokens(text) {
    if (!text.trim()) {
        return 0
    }
    else {
        const tokens = GPTTokenizer_cl100k_base.encode(text)
        return tokens.length
    }

}

function updateStats(text) {
    const wordsVal = countWords(text)
    const charsVal = countChars(text)
    const sentVal = countSents(text)
    const paraVal = countParas(text)

    const tokensUpdate = estimateTokens(text)

    wordCountEl.textContent = wordsVal
    charCountEl.textContent = charsVal
    sentCountEl.textContent = sentVal
    paraCountEl.textContent = paraVal

    tokenGPTCountEl.textContent = tokensUpdate
}

function renderTokens(text) {
    const ids = GPTTokenizer_cl100k_base.encode(text)
    const chunks = ids.map(id => GPTTokenizer_cl100k_base.decode([id]))

    if (!text.trim()) {
        tokenDisplayEl.textContent = "Start typing to see token breakdown.."
    }
    else {
        tokenDisplayEl.textContent = ""
        for (let i = 0; i < chunks.length; i++) {
            const tokenClass = document.createElement('span')
            tokenClass.textContent = chunks[i]
            tokenClass.className = "inline-block px-2 py-1 m-0.5 rounded text-sm font-mono " + colors[i % colors.length]

            tokenDisplayEl.appendChild(tokenClass)
        }
    }
}

let renderTimer = null

inputText.addEventListener("input", () => {
    updateStats(inputText.value)
    clearTimeout(renderTimer)
    renderTimer = setTimeout(() => renderTokens(inputText.value), 300)
});

updateStats("")



