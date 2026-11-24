import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny line for The One-Line Laugh (max 200 chars, single sentence).
// Everyday truth (calendar culture) + surprise twist at the end.
const LINE =
  "My calendar just blocked off 'crying in the car' and marked it as a recurring event.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
