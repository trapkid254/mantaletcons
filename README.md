# Mantelet Consultants — Website Project

## Professional Quantity Surveying & Project Management Website
**Version 2.0** | Cyan / Teal / Turquoise & White Design Language

---

## 📁 Project Structure

```
mantelet-consultants/
├── index.html              ← Public-facing website (homepage)
├── 404.html                ← Custom 404 error page
├── assets/
│   └── data.js             ← Shared data store (single source of truth)
└── admin/
    ├── login.html          ← Admin login page
    └── index.html          ← Admin portal (CMS dashboard)
```

---

## 🚀 Getting Started

### Option A — Open Directly (No Server)
Simply open `index.html` in any modern browser. All content is driven by `assets/data.js` and persisted via `localStorage`.

### Option B — Local Development Server (Recommended)
```bash
# Python 3
cd mantelet-consultants
python3 -m http.server 8080

# Node (npx)
npx serve .

# Then visit:
# Public site:  http://localhost:8080/
# Admin portal: http://localhost:8080/admin/login.html
```

---

## 🔐 Admin Portal Access

**URL:** `admin/login.html`

| Field    | Default Value     |
|----------|-------------------|
| Username | `mantelet`       |
| Password | `mantelet123`    |

> ⚠️ **Important:** These are default credentials for local/demo use only.  
> Before deploying to production, replace the login logic with a proper  
> server-side authentication system (JWT, OAuth, session cookies, etc.)

---

## ✏️ What the Admin Can Edit

| Section         | Editable Fields                                          |
|-----------------|----------------------------------------------------------|
| **Hero**        | Headline (4 lines), subtext, eyebrow text, BG image URL, CTA button labels |
| **About**       | Tagline, heading, 2 paragraphs, company values (list), badge text, image URL |
| **Services**    | Add / Edit / Delete — number, name, full description     |
| **Projects**    | Add / Edit / Delete — name, category, location, description, image URL, featured flag |
| **Testimonials**| Add / Edit / Delete — name, initials, role, star rating, full quote |
| **Statistics**  | Add / Edit / Delete — numeric value, suffix (+/%), label, description |
| **Contact**     | Address, phone (×2), email (×2), office hours, social links (LinkedIn/Facebook/Instagram), Google Maps embed URL |
| **Site Settings**| Company name, footer tagline, footer description, year established, rating score & count, client/partner logos list |

---

## ⌨️ Admin Keyboard Shortcuts

| Shortcut      | Action                         |
|---------------|-------------------------------|
| `Ctrl/⌘ + S`  | Save current page              |
| `Ctrl/⌘ + K`  | Quick navigation modal         |
| `Escape`       | Close modal / close sidebar    |

---

## 🎨 Design System

### Primary Colour Palette
| Name       | Hex       | Usage                          |
|------------|-----------|-------------------------------|
| Teal       | `#0d9488` | Primary brand, buttons, links  |
| Teal Dark  | `#0f766e` | Hover states, depth            |
| Teal Darkest | `#134e4a` | Dark backgrounds, footer      |
| Teal Light | `#2dd4bf` | Accents, italics, highlights   |
| Teal Pale  | `#f0fdfa` | Background tints, hover fills  |
| Cyan       | `#06b6d4` | Gradient accents               |
| Dark Navy  | `#042f2e` | Hero background, dark sections |
| White      | `#ffffff` | Surfaces, cards                |

### Typography
| Font                 | Weight      | Usage                  |
|----------------------|-------------|------------------------|
| Cormorant (Google)   | 300–500     | Display headings, hero |
| Outfit (Google)      | 300–700     | Body, UI, labels       |

### Theme Support
- Full **Light / Dark** mode with smooth CSS variable transitions
- Preference persisted in `localStorage` (`mc-theme`)
- Respects `prefers-reduced-motion` media query

---

## 🔄 How Data Flows

```
assets/data.js          ← DEFAULT_DATA (fallback values)
       ↓
getData()               ← Merges defaults with localStorage overrides
       ↓
index.html (public)     ← Renders all sections from getData()
admin/index.html        ← Reads getData(), user edits, calls saveData()
       ↓
saveData()              ← Writes to localStorage('mantelet_site_data')
       ↓
index.html (public)     ← Reads updated data on next page load
```

**Key functions in `assets/data.js`:**
- `getData()` — Returns merged live data
- `saveData(data)` — Persists to localStorage
- `resetData()` — Clears localStorage, restores defaults
- `generateId(prefix)` — Creates unique IDs for new items

---

## 📦 Export & Import

From **Admin → Site Settings → Danger Zone:**

- **Export JSON** — Downloads `mantelet-site-data-YYYY-MM-DD.json`
- **Import JSON** — Restores from a previously exported file
- **Reset to Defaults** — Wipes all edits (requires confirmation)

---

## 🌐 Public Website Sections

| Section          | ID                   | Notes                                     |
|------------------|----------------------|-------------------------------------------|
| Hero             | `#home`              | Full-viewport, animated, parallax BG      |
| Accreditation    | *(auto-inserted)*    | Marquee strip — RICS, AAK, IQSK, ISO etc. |
| About            | `#about`             | Two-column, animated stat counters        |
| Services         | `#services`          | 3-col grid, hover tilt (desktop)          |
| How We Deliver   | *(process)*          | 4-step process grid                       |
| Statistics       | *(numbers)*          | Animated counter grid                     |
| Why Choose Us    | `#why-us`            | Dark teal section, 6-card grid            |
| Projects         | `#projects`          | Mosaic grid, filter by category           |
| Clients          | *(clients)*          | Logo/name strip                           |
| Testimonials     | `#testimonials`      | Side-by-side layout, mobile scroll-snap   |
| Contact          | `#contact`           | Info + form + embedded map                |
| Footer           | `<footer>`           | Newsletter, links, social, copyright      |

---

## 🔧 Customisation

### Adding a New Project Category
1. Go to **Admin → Projects → Add Project**
2. Select or type a new category key (lowercase, no spaces)
3. The public filter buttons only show the 3 pre-built categories (All / Commercial / Residential / Infrastructure) — to add more, edit the filter buttons in `index.html` around `id="projFilters"`

### Changing Default Credentials
Edit `admin/login.html`, line ~90:
```javascript
const CREDS = { username: 'mantelet', password: 'mantelet123' };
```
> In production, remove this and implement server-side auth.

### Updating Google Maps
1. Go to [maps.google.com](https://maps.google.com)
2. Search for your office location
3. Click **Share → Embed a map → Copy HTML**
4. Extract just the `src="..."` URL
5. Paste into **Admin → Contact Info → Google Maps Embed URL**

---

## 📱 Browser & Device Support

| Browser      | Support |
|--------------|---------|
| Chrome 90+   | ✅ Full  |
| Firefox 88+  | ✅ Full  |
| Safari 14+   | ✅ Full  |
| Edge 90+     | ✅ Full  |
| Mobile (iOS/Android) | ✅ Full responsive |

### Responsive Breakpoints
| Breakpoint | Layout change                              |
|------------|--------------------------------------------|
| `< 1100px` | 2-col services, 2-col numbers, 2-col footer|
| `< 900px`  | 1-col about, 2-col projects, nav collapses |
| `< 680px`  | 1-col services, 1-col projects, 1-col footer |
| `< 480px`  | Full-width buttons, smaller floating CTA   |

---

## 🚢 Deployment Notes

This is a **static website** — no backend required for the CMS (uses localStorage).

### Deploy to:
- **Netlify:** Drag-and-drop the `mantelet-consultants/` folder
- **Vercel:** `vercel --prod` from the project directory
- **GitHub Pages:** Push to a repo, enable Pages on the `main` branch
- **cPanel/Hosting:** Upload via FTP to `public_html/`

### Production Checklist
- [ ] Replace `admin/login.html` credentials with server-side auth
- [ ] Add `robots.txt` and `sitemap.xml`
- [ ] Set up SSL/HTTPS
- [ ] Replace placeholder phone numbers, emails, addresses
- [ ] Replace placeholder project images with real photography
- [ ] Update Google Maps embed with correct office location
- [ ] Set up a real contact form backend (Formspree, EmailJS, or custom API)
- [ ] Add Google Analytics or similar

---

## 📄 License

© 2026 Mantelet Consultants. All rights reserved.  
Built for internal use. Not for redistribution.

---

*Built with precision. Delivered with excellence.*
