#!/usr/bin/env node

/**
 * JSON-LD Validator Script
 * ------------------------
 * Validates:
 *  - JSON syntax
 *  - Required JSON-LD fields
 *  - @id presence
 *  - Schema.org @context
 *  - Cross-file @id references
 */

const fs = require("fs");
const path = require("path");

const JSONLD_DIR = path.join(__dirname, "jsonld");

console.log("🔍 Validating JSON-LD files...\n");

const files = fs.readdirSync(JSONLD_DIR).filter(f => f.endsWith(".jsonld"));

let errors = 0;
let ids = new Set();
let references = [];

// First pass: validate JSON + collect @id values
for (const file of files) {
  const filePath = path.join(JSONLD_DIR, file);
  const content = fs.readFileSync(filePath, "utf8");

  console.log(`📄 Checking ${file}...`);

  let data;
  try {
    data = JSON.parse(content);
  } catch (err) {
    console.error(`❌ ERROR: Invalid JSON in ${file}`);
    console.error(err.message);
    errors++;
    continue;
  }

  // Validate @context
  if (data["@context"] !== "https://schema.org") {
    console.error(`❌ ERROR: Missing or incorrect @context in ${file}`);
    errors++;
  }

  // Validate @id
  if (!data["@id"]) {
    console.error(`❌ ERROR: Missing @id in ${file}`);
    errors++;
  } else {
    ids.add(data["@id"]);
  }

  // Collect references to check later
  const collectRefs = obj => {
    if (typeof obj === "string" && obj.startsWith("https://ncc1620.github.io/jsonld/")) {
      references.push({ file, ref: obj });
    }
    if (Array.isArray(obj)) obj.forEach(collectRefs);
    if (typeof obj === "object" && obj !== null) {
      Object.values(obj).forEach(collectRefs);
    }
  };

  collectRefs(data);
}

// Second pass: validate cross-file references
console.log("\n🔗 Checking cross-file @id references...\n");

for (const { file, ref } of references) {
  if (!ids.has(ref)) {
    console.error(`❌ ERROR: ${file} references missing @id: ${ref}`);
    errors++;
  }
}

if (errors === 0) {
  console.log("✅ All JSON-LD files are valid and consistent!");
} else {
  console.log(`\n❌ Validation completed with ${errors} error(s).`);
  process.exit(1);
}
