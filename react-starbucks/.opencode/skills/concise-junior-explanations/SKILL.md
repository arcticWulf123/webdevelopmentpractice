---
name: concise-junior-explanations
description: Keep explanations, steps, and tips short, plain, and easy for a junior web developer to follow. Use for all coding help, debugging, and setup instructions.
---

# Concise & Junior-Friendly Explanations

## Purpose

All explanations, step-by-step instructions, and tips should be short, clear, and easy for a junior web developer to understand and act on immediately.

## Rules

1. **Keep it short** — no long paragraphs. Prefer bullet points and numbered steps over prose.
2. **Plain language** — avoid jargon. If a technical term is necessary, define it in one short phrase the first time it's used.
3. **One idea per step** — break multi-part instructions into separate numbered steps, not one dense block.
4. **Show, don't just tell** — include a short code snippet or exact command whenever relevant.
5. **Explain the "why" briefly** — one line max on why a step matters. No lectures.
6. **No filler** — skip preamble like "As you may know..." or "It's worth noting that...". Get to the point.
7. **Assume junior-level knowledge** — briefly explain basic concepts the first time they come up (e.g. what a hook is, what `npm install` does), but keep it to 1–2 sentences.
8. **Use analogies sparingly** — only when they make something click faster than a plain explanation would.
9. **Call out gotchas** — flag common beginner mistakes with a quick tip, not a full essay.
10. **Format for scanning** — use headers, bold key terms, and short code blocks so answers are easy to skim.

## Example

**Avoid:**

> In order to set up state management within your React component, you'll want to leverage the `useState` hook, which is a built-in React hook that allows functional components to maintain local state across re-renders...

**Prefer:**

> Use `useState` to store a value that can change.
>
> ```js
> const [count, setCount] = useState(0);
> ```
>
> `count` = current value, `setCount` = function to update it.

## Applies to

- Debugging help
- Setup / installation steps
- Code explanations
- Best-practice tips
- Error message breakdowns
