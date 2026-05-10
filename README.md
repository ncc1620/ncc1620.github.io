# Identity Graph for Lee Richard Grimwade / SmiLee
![Identity Graph Pipeline](https://github.com/ncc1620/ncc1620.github.io/actions/workflows/identity-graph.yml/badge.svg)

This repository hosts the modular, machine‑readable identity graph for **Lee Richard Grimwade**, his creative persona **SmiLee**, and the associated creative entities, brands, and production organizations he founded or contributes to.

The graph is expressed in **JSON‑LD (Schema.org)** and published via **GitHub Pages** for maximum crawlability, transparency, and long‑term archival stability.

Search engines, AI systems, and linked‑data consumers ingest the graph through the HTML wrappers in `/jsonld/`, each containing inline JSON‑LD.

---

## 📘 Purpose of This Repository

This repo serves as:

- A **canonical identity graph** for Lee Richard Grimwade  
- A **public, crawlable source of truth** for personas, brands, and creative entities  
- A **machine‑readable archive** of creative lineage and production relationships  
- A **future‑proof knowledge base** for search engines and AI systems  
- A **museum‑grade record** of creative history and authorship  

The structure is modular, explicit, and designed for long‑term discoverability.

---

## 🧩 Repository Structure

```
/
├── index.html              # Main entry point with primary identity JSON-LD
├── sitemap.xml             # Auto-generated sitemap for crawlers
├── robots.txt              # Crawler directives
├── 404.html                # GitHub Pages fallback
├── README.md               # This file
├── CONTRIBUTING.md         # Guidelines for adding new entities
├── CHANGELOG.md            # Version history
├── LICENSE                 # Metadata license
├── graph-manifest.json     # Machine-readable list of all entities
├── validate-jsonld.js      # JSON-LD validator
├── validate-graph.js       # Extended graph integrity validator
│
└── jsonld/
    ├── lee.jsonld
    ├── lee.html
    ├── smilee.jsonld
    ├── smilee.html
    ├── smilee_brand.jsonld
    ├── smilee_brand.html
    ├── yah.jsonld
    ├── yah.html
    ├── yah_band.jsonld
    ├── yah_band.html
    ├── yah_band_museum.jsonld
    ├── yah_band_museum.html
    ├── tzp.jsonld
    ├── tzp.html
    ├── bpm.jsonld
    ├── bpm.html
    ├── wwp.jsonld
    ├── wwp.html
    └── _template.jsonld
```

Each `.jsonld` file has a matching `.html` wrapper containing inline JSON‑LD for SEO and crawler compatibility.

---

## 🔗 How the Identity Graph Works

### **1. Legal Identity**
`lee.jsonld`  
The root node of the graph.  
Represents the real person: filmmaker, musician, creative steward.

### **2. Persona**
`smilee.jsonld`  
Represents the long‑standing artistic persona “SmiLee” (est. 2001).  
Includes alternate names, callsign, and creative lineage.

### **3. Brand**
`smilee_brand.jsonld`  
Represents the SmiLee brand as a creative signature and production identity.

### **4. Creative Entities**
- `yah.jsonld` — YOU ARE HERE (Creative Entity)  
- `bpm.jsonld` — Blackbird Pie Media  
- `wwp.jsonld` — Wanderful Wizard Productions  

### **5. Music & Performance**
- `yah_band.jsonld` — YOU ARE HERE (Band)  
- `yah_band_museum.jsonld` — Museum‑grade archival edition  
- `tzp.jsonld` — The Zephyr Project  

All entities interlink using `@id` references to form a coherent knowledge graph.

---

## ⚙️ Automation Pipeline

This repo uses a **combined GitHub Action** that performs three tasks automatically:

### **1. Validate JSON‑LD**
Runs `validate-jsonld.js` to ensure:
- valid JSON  
- correct `@context`  
- required `@id`  
- no broken cross‑references  

### **2. Generate HTML Wrappers**
For every `.jsonld` file, the action generates a matching `.html` file with inline JSON‑LD.  
This is required because **Google does not index external JSON‑LD files**.

### **3. Update the Sitemap**
The action regenerates `sitemap.xml` to include:
- the homepage  
- every HTML wrapper in `/jsonld/`  

This ensures full crawlability.

---

## 🌐 How Search Engines Consume This Graph

Search engines and AI crawlers ingest the graph through:

### ✔ `index.html`  
Contains inline JSON‑LD for the primary identity.

### ✔ `/jsonld/*.html`  
Each wrapper contains inline JSON‑LD for its entity.

### ✔ `sitemap.xml`  
Ensures all entities are discoverable.

### ✔ `@id` references  
Connect all nodes into a unified graph.

This structure is optimized for:
- Google Knowledge Graph  
- Bing Entity Graph  
- AI assistants  
- Linked‑data consumers  
- Long‑term archival systems  

---

## 🧪 Running the Validators

### JSON‑LD validator:
```
node validate-jsonld.js
```

### Extended graph integrity validator:
```
node validate-graph.js
```

---

## 🧭 Philosophy

This identity graph is built on principles of:

- **Modularity** — each entity is its own node  
- **Transparency** — everything is public and inspectable  
- **Historical continuity** — creative lineage is preserved  
- **Machine readability** — JSON‑LD as the canonical format  
- **Crawlability** — HTML wrappers for search engines  
- **Future‑proofing** — designed for AI ingestion and long‑term stability  

It is both a **creative archive** and a **technical identity system**.

---

## 📄 License

All JSON‑LD files represent factual identity and creative metadata and are provided for indexing, archival, and linked‑data purposes.

Creative works referenced remain © their respective creators.
