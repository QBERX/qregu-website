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

## 🔴 Kritik - Hemen Yapılmalı

### 1. Privacy Policy & Terms of Service
**Neden:** GDPR/KVKK yasal zorunluluk

```
/privacy-policy.html
/terms-of-service.html
```

Footer'a linkler eklenmeli:
- Gizlilik Politikası / Privacy Policy
- Kullanım Koşulları / Terms of Service

---

### 2. Cookie Consent Banner
**Neden:** Analytics eklemeden önce GDPR şart

Önerilen araçlar:
- [CookieBot](https://www.cookiebot.com/)
- [Termly](https://termly.io/)
- [Cookie Consent by Osano](https://www.osano.com/)

Basit implementasyon:
```html
<div id="cookie-banner" style="position:fixed;bottom:0;left:0;right:0;background:#1a1a2e;color:white;padding:16px;z-index:9999;">
  <p>We use cookies to improve your experience. <a href="/privacy-policy.html">Learn more</a></p>
  <button onclick="acceptCookies()">Accept</button>
  <button onclick="rejectCookies()">Reject</button>
</div>
```

---

### 3. Trust Badges / Security Section
**Neden:** Enterprise müşteriler (bankalar, sigorta) güven sinyali olmadan satın almaz

Eklenecek içerik:
```
┌─────────────────────────────────────────────────────────────┐
│                    Security & Compliance                     │
├─────────────────────────────────────────────────────────────┤
│ 🔒 Data encrypted in transit (TLS 1.3) and at rest (AES-256)│
│ 🏛️ GDPR & KVKK compliant                                    │
│ ☁️ Hosted on secure EU data centers                         │
│ 🔐 SOC 2 Type II certified (if applicable)                  │
│ 📋 Regular security audits                                  │
└─────────────────────────────────────────────────────────────┘
```

---

### 4. FAQ Section
**Neden:** Sık sorulan sorulara cevap, SEO boost, destek azaltma

Önerilen sorular:

| # | Soru (EN) | Soru (TR) |
|---|-----------|-----------|
| 1 | How long does setup take? | Kurulum ne kadar sürer? |
| 2 | Which regulators do you support? | Hangi regülatörleri destekliyorsunuz? |
| 3 | Can I add a new regulator source? | Yeni regülatör kaynağı ekleyebilir miyim? |
| 4 | Is there a free trial? | Ücretsiz deneme var mı? |
| 5 | How does AI impact analysis work? | AI etki analizi nasıl çalışır? |
| 6 | What languages are supported? | Hangi diller destekleniyor? |
| 7 | Is my data secure? | Verilerim güvende mi? |
| 8 | Can I integrate with Slack/Teams? | Slack/Teams ile entegre olabilir miyim? |
| 9 | What's the difference between plans? | Planlar arasındaki fark nedir? |
| 10 | Do you offer custom enterprise plans? | Özel kurumsal planlar sunuyor musunuz? |

Schema markup eklenecek:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [...]
}
</script>
```

---

### 5. Müşteri Logoları / Testimonials
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

### Phase 1 - Legal & Trust (Week 1)
- [ ] Privacy Policy page
- [ ] Terms of Service page
- [ ] Cookie consent banner
- [ ] Trust badges section

### Phase 2 - Content (Week 2)
- [ ] FAQ section with schema
- [ ] Testimonials/logos placeholder
- [ ] hreflang tags

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