# QRegu Website - Improvement Roadmap

**Son Güncelleme:** 2026-03-22

Bu döküman qregu.com landing page için eksik özellikleri, iyileştirmeleri ve öncelik sırasını içerir.

---

## Mevcut Durum

### Güçlü Yanlar ✅
- Modern, temiz tasarım
- Bilingual (EN/TR) dil desteği
- Responsive layout
- SEO meta tags (OG, Twitter, JSON-LD)
- Sitemap ve robots.txt
- Google Search Console doğrulanmış
- Dashboard screenshot'ları
- Net fiyatlandırma

---

## ✅ Tamamlandı - Phase 1

### 1. Privacy Policy & Terms of Service ✅
**Durum:** TAMAMLANDI

- `/privacy-policy.html` - Full EN/TR bilingual
- `/terms-of-service.html` - Full EN/TR bilingual
- Footer linkleri eklendi

---

### 2. Cookie Consent Banner ✅
**Durum:** TAMAMLANDI

- Shared JS ile auto-inject (tüm sayfalarda çalışır)
- Accept/Decline butonları
- localStorage ile tercih kaydı
- GDPR/KVKK uyumlu

---

### 3. Trust Badges / Security Section ✅
**Durum:** TAMAMLANDI

Eklenen badge'ler:
- 🔒 GDPR Compliant / GDPR Uyumlu
- 🛡️ KVKK Compliant / KVKK Uyumlu
- 🔐 AES-256 Encryption / AES-256 Şifreleme
- 🌍 EU Data Centers / AB Veri Merkezleri
- ⏱️ 99.9% Uptime / %99.9 Çalışma Süresi

---

### 4. FAQ Section ✅
**Durum:** TAMAMLANDI

10 soru, 4 kategori:
- General / Genel (3 soru)
- Pricing / Fiyatlandırma (2 soru)
- Technical / Teknik (3 soru)
- Support / Destek (2 soru)

Accordion style, full EN/TR bilingual.

**FAQ Schema:** ✅ JSON-LD structured data eklendi (10 soru)

---

### 5. Shared Architecture ✅
**Durum:** TAMAMLANDI

- `shared/common.css` - Cookie banner styles
- `shared/common.js` - Language switching, cookie consent, auto-init

---

## 🔴 Kritik - Sonraki Adımlar

### UI/UX Redesign - Design Referansları

**Neden:** Mevcut tasarım "çok AI gibi" görünüyor. Daha profesyonel, human-touch bir görünüm için aşağıdaki referanslar kullanılacak.

**Design Referansları:**

1. **21st.dev** - https://21st.dev
   - Modern component library
   - Clean, minimal aesthetics
   - Professional SaaS UI patterns

2. **shadcn/ui** - https://ui.shadcn.com
   - Beautifully designed components
   - Accessible, customizable
   - Tailwind CSS based

3. **Stitch Design** - https://stitch.withgoogle.com
   - Google design patterns
   - Enterprise-grade UI
   - Data-heavy interface solutions

4. **Anthropic Frontend Design** - https://anthropic.com
   - AI company landing page
   - Trust-building design
   - Clean typography and spacing

5. **GitHub UI/UX Pro Max** - GitHub design system
   - Developer-focused UI
   - Dark/light mode patterns
   - Dense information display

**Hedefler:**
- [ ] Hero section redesign (21st.dev stilinde)
- [ ] Pricing cards yeniden tasarla (shadcn cards)
- [ ] Feature section grid layout (Stitch patterns)
- [ ] Typography ve spacing iyileştirme (Anthropic)
- [ ] Trust badges modern stilize (GitHub badges)
- [ ] Color palette refinement
- [ ] Micro-interactions ekleme

---

### 6. Müşteri Logoları / Testimonials
**Neden:** B2B SaaS için kritik sosyal kanıt

Seçenekler:
1. Gerçek müşteri logoları (izin alınarak)
2. Anonim referanslar: "Leading Turkish Bank", "Top Insurance Company"
3. Testimonial quotes with name/title

Örnek section:
```
┌─────────────────────────────────────────────────────────────┐
│              Trusted by Compliance Teams                     │
├─────────────────────────────────────────────────────────────┤
│  [Logo1]  [Logo2]  [Logo3]  [Logo4]  [Logo5]                │
│                                                              │
│  "QRegu reduced our compliance monitoring time by 80%"       │
│   — Head of Compliance, Leading Turkish Bank                 │
└─────────────────────────────────────────────────────────────┘
```

---

## 🟠 Yüksek Öncelik - Sonraki Sprint

### 6. hreflang Tags (Multilingual SEO)
**Neden:** Google'ın TR/EN içeriği doğru indexlemesi için

```html
<link rel="alternate" hreflang="en" href="https://qregu.com/" />
<link rel="alternate" hreflang="tr" href="https://qregu.com/" />
<link rel="alternate" hreflang="x-default" href="https://qregu.com/" />
```

---

### 7. Google Analytics 4 ✅ TAMAMLANDI
**Durum:** `shared/common.js` içinde dinamik olarak yükleniyor

- Measurement ID: `G-26MVBGT7C5`
- Tüm sayfalar otomatik olarak track ediliyor

Event tracking ✅:
- ✅ Demo booking clicks (Calendly)
- ✅ Pricing section views
- ✅ Language switches
- ✅ CTA clicks
- ✅ Contact form submissions
- ✅ Outbound link clicks

---

### 8. Contact Form ✅ TAMAMLANDI
**Durum:** `/contact.html` sayfası oluşturuldu

Özellikler:
- Ayrı sayfa: `/contact.html`
- Bilingual EN/TR
- Alanlar: Name, Email, Company, Inquiry Type, Message
- **FormSubmit.co entegrasyonu** (info@qberx.com)
- Spam koruması: Captcha + honeypot
- Success redirect: `?success=1` parametresi ile
- Alt contact methods: Email + Calendly
- CSS: `styles.css` içinde

---

### 9. Use Cases / Sektör Sayfaları ✅ TAMAMLANDI
**Durum:** 4 sayfa oluşturuldu

Sayfalar:
- `/use-cases/banking.html` ✅ - UC001'den (TCMB ücret/komisyon)
- `/use-cases/fintech.html` ✅ - UC002'den (FCA safeguarding)
- `/use-cases/capital-markets.html` ✅ - SPK, KAP, FINRA
- `/use-cases/insurance.html` ✅ - Solvency, EIOPA, FCA

Her sayfa içeriği:
- Sektöre özel zorluklar (3 kart)
- QRegu çözümü (4 adım)
- Örnek senaryo (timeline)
- İlgili regülatörler (chip'ler)
- CTA + Related use cases

Index.html'den sector kartları linkli.

---

### 10. ROI Calculator ✅ TAMAMLANDI
**Durum:** `index.html` içinde interaktif hesaplayıcı eklendi

Input sliders:
- Compliance team size (1-20)
- Hours per person per week (1-40)
- Number of regulators (1-20)
- Hourly cost ($30-$200)

Output cards:
- Hours saved per year
- Annual savings ($)
- ROI percentage

Hesaplama: %80 otomasyon tasarrufu varsayımı, Professional plan ($999/mo) baz alınarak

---

## 🟡 Orta Öncelik - Gelecek

### 11. Pricing Comparison Table ✅ TAMAMLANDI

```
┌──────────────────┬───────────┬──────────────┬─────────────┐
│ Feature          │ Starter   │ Professional │ Enterprise  │
├──────────────────┼───────────┼──────────────┼─────────────┤
│ Users            │ 25        │ 100          │ Unlimited   │
│ Regulators       │ 10        │ 30           │ Unlimited   │
│ AI Impact        │ ✓         │ ✓            │ ✓           │
│ Workflows        │ Basic     │ Advanced     │ Custom      │
│ Mobile App       │ ✓         │ ✓            │ ✓           │
│ API Access       │ ✗         │ ✓            │ ✓           │
│ SSO              │ ✗         │ ✓            │ ✓           │
│ Dedicated CSM    │ ✗         │ ✓            │ ✓           │
│ SLA              │ 99%       │ 99.9%        │ 99.99%      │
├──────────────────┼───────────┼──────────────┼─────────────┤
│ Price            │ $299/mo   │ $999/mo      │ Custom      │
└──────────────────┴───────────┴──────────────┴─────────────┘
```

---

### 12. Integration Partners ✅ TAMAMLANDI

Eklenen:
- Slack
- Microsoft Teams
- Jira
- ServiceNow
- Salesforce
- REST API

---

### 13. Team / About Section

İçerik:
- Founder bios
- Company story
- Mission statement
- Office location (if applicable)

---

### 14. Blog / Resources

Başlangıç yazıları:
- "BDDK Compliance Guide 2026"
- "How AI is Transforming RegTech"
- "5 Steps to Automate Regulatory Monitoring"

---

### 15. Image Optimization ✅ KISMEN TAMAMLANDI

Script oluşturuldu: `scripts/optimize-images.sh`

Yapılacaklar:
- [x] PNG → WebP conversion script ✅
- [x] Lazy loading implementation ✅
- [x] Responsive images srcset script ✅
- [ ] WebP dönüşümü için `brew install webp` gerekli
- [ ] Dönüştürme sonrası HTML güncelleme (picture tag)

Kullanım:
```bash
cd scripts && ./optimize-images.sh
```

---

### 16. Video Demo

Options:
- Loom video embedded
- YouTube video
- Self-hosted MP4

Placement: Hero section veya dedicated demo page

---

## 🔧 Teknik İyileştirmeler

### Accessibility (a11y) ✅ TAMAMLANDI

- [x] Skip navigation link ✅
- [x] Heading hierarchy (h1 → h2 → h3) ✅
- [x] Color contrast fixes ✅ - --muted: #52525B, --muted2: #71717A
- [x] Alt text improvements ✅
- [x] Keyboard navigation ✅
- [x] Focus states ✅
- [x] ARIA labels ✅
- [x] Reduced motion support ✅
- [x] aria-live for ROI calculator ✅
- [x] role attributes ✅

### Mobile

- [x] Hamburger menu for mobile nav ✅
- [x] Touch-friendly buttons (min 44px) ✅
- [x] Responsive layout improvements ✅

### Performance

- [ ] Minify CSS/JS - CDN veya build tool ile yapılabilir (Cloudflare auto-minify önerilir)
- [ ] Preload critical assets
- [x] Font display swap ✅ (already implemented)
- [x] CSS extraction to separate file ✅ (styles.css)

**Minify Önerisi:** Cloudflare kullanılıyorsa Auto Minify özelliği aktif edilebilir, veya deploy öncesi `cssnano` ve `terser` ile minify yapılabilir.

---

## Implementation Checklist

### Phase 1 - Legal & Trust (Week 1) ✅ COMPLETED
- [x] Privacy Policy page (EN/TR bilingual)
- [x] Terms of Service page (EN/TR bilingual)
- [x] Cookie consent banner (GDPR/KVKK compliant with accept/decline)
- [x] Trust badges section (GDPR, KVKK, AES-256, EU Servers, 99.9% Uptime)
- [x] Shared CSS/JS architecture (shared/common.css, shared/common.js)

### Phase 2 - Content (Week 2) ✅ COMPLETED
- [x] FAQ section (10 questions, 4 categories, accordion style)
- [x] hreflang tags (all 3 pages)
- [x] FAQ schema markup (JSON-LD)
- [ ] Testimonials/logos - müşteri yok, atlandı

### Phase 3 - Analytics & Forms (Week 3) ✅ COMPLETED
- [x] Google Analytics 4 ✅ `G-26MVBGT7C5` - shared/common.js içinde
- [x] Contact form ✅ `/contact.html` - FormSubmit.co
- [x] Event tracking ✅ - language_switch, form_submit, calendly_click, cta_click, pricing_view

### Phase 4 - Expansion (Week 4+) ✅ COMPLETED
- [x] Use case pages ✅ `/use-cases/` - Banking, Fintech, Capital Markets, Insurance
- [x] ROI calculator ✅ `index.html` - interaktif slider'lar ile
- [ ] Blog setup - sonra yapılacak
- [ ] Video demo - sonra yapılacak

---

## Resources

- [Web.dev Performance](https://web.dev/performance/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Schema.org](https://schema.org/)
- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

## Notes

- Değişiklikler yapıldıkça bu döküman güncellenecek
- Her major değişiklik için git commit
- Test: Chrome DevTools, Lighthouse, WAVE accessibility