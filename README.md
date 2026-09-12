# HAMK Apps (hamkapps.in)

> Showcase & index landing page for HAMK Apps products — including SaaS applications, browser plugins & extensions, developer tools, and API integrations.

Designed in a modern **Light Theme** with responsive layouts, instant category filtering, live product search, and direct contact details (email & phone).

---

## 🚀 Live Preview / Local Development

Since this is a lightweight static site built with modern HTML5, Tailwind CSS, and vanilla JavaScript, no build step or node installation is required.

### Option 1: Using Python
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Option 2: Using Node / npx
```bash
npx serve .
```

### Option 3: Direct File
Simply double-click `index.html` to open it in any modern web browser.

---

## 📁 Project Structure

```
hamkapps.in/
├── index.html        # Main landing page (Hero Intro, Products Showcase, Contact Details)
├── styles.css        # Custom light-theme styling, animations, and typography
├── script.js         # Interactive filtering, search, and email copy handler
├── favicon.svg       # Brand icon / favicon
└── README.md         # Documentation
```

---

## 🛠️ How to Add / Update Your Actual Products

Inside [`index.html`](index.html), look for the clearly commented product blocks inside `#product-grid`:

### 1. Adding or Replacing a SaaS Product
Locate the block commented with `<!-- 1. DUMMY SAAS PRODUCT -->`:
```html
<article 
  class="product-card card-glow bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group"
  data-category="saas"
  data-tags="your tags here"
>
  <!-- Replace Title, Tagline, Feature list, Live link, and Docs link -->
</article>
```

### 2. Adding or Replacing a Plugin / Extension
Locate `<!-- 2. DUMMY PLUGIN PRODUCT -->`:
```html
<article 
  class="product-card card-glow bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group"
  data-category="plugin"
  data-tags="chrome extension plugin"
>
  <!-- Replace Extension name, store link, and github link -->
</article>
```

### 3. Categories Supported by the Filter:
- `data-category="saas"`
- `data-category="plugin"`
- `data-category="integration"`

---

## 📬 Contact Details

The landing page provides direct contact cards:
- **Email**: `contact@hamkapps.in` (and `honeyonsys@gmail.com`)
- **WhatsApp / Phone**: `+91 70871 96464` ([wa.me/917087196464](https://wa.me/917087196464))

To update your email or WhatsApp number, search for them in [`index.html`](index.html) and replace them with your actual details.
