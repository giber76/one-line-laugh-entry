import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny line for The One-Line Laugh (max 200 chars, single sentence).
// Everyday truth (to-do list culture) + surprise twist at the end:
// the list doesn't just schedule the breakdown, it completes it first.
const LINE =
  "My to-do list just added 'have a breakdown' and checked it off before I even started.";

// Guard the gate: entry.txt must be 1-200 chars of UTF-8 text, single line.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`LINE must be 1-200 chars, single line (got ${LINE.length})`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
