# QRegu Website - Improvement Roadmap

**Son Güncelleme:** 2026-03-19

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

**TODO:** FAQ schema markup (JSON-LD) henüz eklenmedi

---

### 5. Shared Architecture ✅
**Durum:** TAMAMLANDI

- `shared/common.css` - Cookie banner styles
- `shared/common.js` - Language switching, cookie consent, auto-init

---

## 🔴 Kritik - Sonraki Adımlar

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

### 7. Google Analytics 4
**Neden:** Trafik analizi, dönüşüm takibi

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Event tracking eklenecek:
- Demo booking clicks
- Pricing tier views
- Language switches
- CTA clicks

---

### 8. Contact Form
**Neden:** Herkes Calendly ile demo istemek istemez

Alanlar:
- Name / İsim
- Email
- Company / Şirket
- Phone (optional)
- Message / Mesaj
- Inquiry Type: Demo, Pricing, Partnership, Support

Önerilen: Formspree, Netlify Forms, veya custom backend

---

### 9. Use Cases / Sektör Sayfaları
**Neden:** Hedefli mesaj, SEO

Sayfalar:
- `/use-cases/banking.html` - Bankacılık
- `/use-cases/insurance.html` - Sigorta
- `/use-cases/fintech.html` - Fintech
- `/use-cases/capital-markets.html` - Sermaye Piyasaları

Her sayfa içeriği:
- Sektöre özel sorunlar
- QRegu çözümü
- Örnek workflow
- İlgili regülatörler
- CTA

---

### 10. ROI Calculator
**Neden:** "Ne kadar tasarruf ederim?" sorusuna cevap

Input fields:
- Compliance team size
- Current tool cost (or manual hours)
- Number of regulators tracked

Output:
- Annual savings
- Time savings
- ROI percentage

---

## 🟡 Orta Öncelik - Gelecek

### 11. Pricing Comparison Table

```
┌──────────────────┬───────────┬──────────────┬─────────────┐
│ Feature          │ Starter   │ Professional │ Enterprise  │
├──────────────────┼───────────┼──────────────┼─────────────┤
│ Users            │ 5         │ 25           │ Unlimited   │
│ Regulators       │ 3         │ 10           │ Unlimited   │
│ AI Impact        │ ✓         │ ✓            │ ✓           │
│ Workflows        │ Basic     │ Advanced     │ Custom      │
│ Mobile App       │ ✓         │ ✓            │ ✓           │
│ API Access       │ ✗         │ ✓            │ ✓           │
│ SSO              │ ✗         │ ✗            │ ✓           │
│ Dedicated CSM    │ ✗         │ ✗            │ ✓           │
│ SLA              │ 99%       │ 99.5%        │ 99.9%       │
├──────────────────┼───────────┼──────────────┼─────────────┤
│ Price            │ $99/mo    │ $299/mo      │ Custom      │
└──────────────────┴───────────┴──────────────┴─────────────┘
```

---

### 12. Integration Partners

Eklenecek logolar ve linkler:
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

### 15. Image Optimization

Yapılacaklar:
- [ ] PNG → WebP conversion
- [ ] Lazy loading implementation
- [ ] Responsive images with srcset
- [ ] Image compression (TinyPNG)

---

### 16. Video Demo

Options:
- Loom video embedded
- YouTube video
- Self-hosted MP4

Placement: Hero section veya dedicated demo page

---

## 🔧 Teknik İyileştirmeler

### Accessibility (a11y)

- [ ] Skip navigation link
- [ ] Heading hierarchy (h1 → h2 → h3)
- [ ] Color contrast fixes (gray text)
- [ ] Alt text improvements
- [ ] Keyboard navigation
- [ ] Focus states
- [ ] ARIA labels

### Mobile

- [ ] Hamburger menu for mobile nav
- [ ] Touch-friendly buttons (min 44px)
- [ ] Responsive font sizes

### Performance

- [ ] Minify CSS/JS
- [ ] Preload critical assets
- [ ] Font display swap
- [ ] Critical CSS inline

---

## Implementation Checklist

### Phase 1 - Legal & Trust (Week 1) ✅ COMPLETED
- [x] Privacy Policy page (EN/TR bilingual)
- [x] Terms of Service page (EN/TR bilingual)
- [x] Cookie consent banner (GDPR/KVKK compliant with accept/decline)
- [x] Trust badges section (GDPR, KVKK, AES-256, EU Servers, 99.9% Uptime)
- [x] Shared CSS/JS architecture (shared/common.css, shared/common.js)

### Phase 2 - Content (Week 2) 🟡 IN PROGRESS
- [x] FAQ section (10 questions, 4 categories, accordion style)
- [ ] Testimonials/logos placeholder
- [ ] hreflang tags
- [ ] FAQ schema markup (JSON-LD)

### Phase 3 - Analytics & Forms (Week 3)
- [ ] Google Analytics 4
- [ ] Contact form
- [ ] Event tracking

### Phase 4 - Expansion (Week 4+)
- [ ] Use case pages
- [ ] Blog setup
- [ ] ROI calculator
- [ ] Video demo

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