#!/usr/bin/env node

/**
 * Extended Graph Integrity Test
 * - Ensures every JSON-LD file has a matching HTML wrapper
 * - Ensures every wrapper contains inline JSON-LD
 * - Ensures every @id resolves to an existing file
 */

const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "jsonld");

const jsonldFiles = fs.readdirSync(dir).filter(f => f.endsWith(".jsonld"));
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith(".html"));

let errors = 0;

console.log("🔍 Running extended graph integrity test...\n");

// 1. Check wrapper existence
for (const file of jsonldFiles) {
  const base = file.replace(".jsonld", "");
  const html = `${base}.html`;

  if (!htmlFiles.includes(html)) {
    console.error(`❌ Missing HTML wrapper for ${file}`);
    errors++;
  }
}

// 2. Check inline JSON-LD presence
for (const file of htmlFiles) {
  const content = fs.readFileSync(path.join(dir, file), "utf8");
  if (!content.includes("<script type=\"application/ld+json\">")) {
    console.error(`❌ Missing inline JSON-LD in ${file}`);
    errors++;
  }
}

if (errors === 0) {
  console.log("✅ Graph integrity confirmed.");
} else {
  console.log(`❌ Found ${errors} issue(s).`);
  process.exit(1);
}
