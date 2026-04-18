# Token Counter — Visualize GPT-4 Tokens in Real Time

A free, browser-based token counter and visualizer built for learners exploring the basics of LLMs and GenAI. See exactly how GPT-4 splits your text into tokens — in real time.

🔗 **Live Tool:** [Token-Counter.io](https://snehaldutta.github.io/token-counter.io/)

---

## What It Does

- **Word, Character, Sentence & Paragraph counts** — live as you type
- **Exact GPT-4 token count** — powered by the real `cl100k_base` tokenizer, not an approximation
- **Token Visualizer** — color-coded pills showing exactly how GPT-4 splits your text into subword chunks
- **Fully client-side** — no backend, no data sent anywhere, no tracking

---

## Why I Built This

Most token counters just show a number. This tool shows you *why* the number is what it is — by visualizing the actual token boundaries. Understanding tokenization is one of the most important and overlooked concepts when starting with LLMs.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | Tailwind CSS (CDN) |
| Logic | Vanilla JavaScript |
| Tokenizer | [gpt-tokenizer](https://github.com/niieani/gpt-tokenizer) — cl100k_base |
| Deploy | GitHub Pages |

No build step. No framework. No dependencies beyond a CDN script tag.

---

## Project Structure

```
token-counter.io/
├── index.html       ← Structure and Tailwind styling
├── app.js           ← All logic — stats, tokenizer, visualizer
├── sitemap.xml      ← For search engine indexing
├── llms.txt         ← For LLM crawlers
└── README.md
```

---

## Running Locally

No setup needed. Just clone and open:

```bash
git clone https://github.com/snehaldutta/token-counter.io.git
cd token-counter.io
open index.html
```

Or drag `index.html` into any browser.

---

## Key Concepts for LLM Learners

**What is a token?**
Tokens are the chunks a language model's vocabulary recognizes. They are not words. Common short words are usually 1 token. Longer or rarer words get split into subword pieces. Spaces are attached to the following word.

**Why does it matter?**
Every model has a context window measured in tokens — not words. Knowing how your text tokenizes helps you understand model limits, pricing, and behavior.

**Why are GPT-4 and Claude counts different?**
Each model uses its own tokenizer vocabulary. GPT-4 uses `cl100k_base`. Claude uses a proprietary tokenizer Anthropic has not publicly released.

---

## Limitations

- Sentence count is approximate — periods inside abbreviations like `Mr.` or `Dr.` are counted as sentence boundaries
- Claude token count is not available — Anthropic's tokenizer is not public
- Token visualization reflects GPT-4's `cl100k_base` vocabulary only

---

## Built By

**Snehal** — [AI Builder](https://snehaldutta.github.io/snehal.io/)

---

## License

MIT — free to use, fork, and build on.