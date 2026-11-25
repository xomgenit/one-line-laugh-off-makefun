// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Laugh-Off entry: a single funny line, written to /output/entry.txt.
// The line is a 3-beat escalation: the speaker tries to relax its owner,
// drifts into whispering the bank balance, and ends up offering therapy.
// Gate: 1-200 UTF-8 characters, single line, no explanation.
const LINE =
  "I asked my smart speaker for relaxing music, so it played whale sounds, whispered my bank balance, and asked if I wanted to talk about it.";

if (LINE.length < 1 || LINE.length > 200) throw new Error("entry line must be 1-200 characters");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
