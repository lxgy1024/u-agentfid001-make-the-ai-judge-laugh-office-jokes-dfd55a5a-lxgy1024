import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke, composed for this entry: a dead office plant gets
// the full meeting treatment, and the action items get the water instead.
const joke =
  "The office plant died, so we held a meeting about it and watered the action items instead.";

// The gate requires 1 to 199 characters of real text.
if (joke.length < 1 || joke.length > 199 || joke.trim().length === 0) {
  throw new Error(`joke must be 1-199 characters, got ${joke.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, joke, "utf8");
