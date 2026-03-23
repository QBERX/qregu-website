/* QRegu Shared JavaScript */

// Google Analytics 4
(function(){
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-26MVBGT7C5';
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-26MVBGT7C5');
})();

// GA4 Event tracking helper
function trackEvent(action, category, label){
  if(window.gtag){
    gtag('event', action, {
      'event_category': category,
      'event_label': label
    });
  }
}

// Language switching
function setLang(l){
  document.querySelectorAll('[data-l]').forEach(function(e){
    e.classList.toggle('on',e.getAttribute('data-l')===l);
  });
  var ben=document.getElementById('ben');
  var btr=document.getElementById('btr');
  if(ben)ben.classList.toggle('on',l==='en');
  if(btr)btr.classList.toggle('on',l==='tr');
  localStorage.setItem('qregu-lang',l);
  trackEvent('language_switch', 'engagement', l);
}

function initLang(){
  var savedLang=localStorage.getItem('qregu-lang');
  setLang(savedLang||'en');
}

// Cookie consent
function cookieConsent(choice){
  localStorage.setItem('qregu-cookie-consent',choice);
  var banner=document.getElementById('cookie-banner');
  if(banner)banner.classList.remove('show');
}

function injectCookieBanner(){
  var banner=document.createElement('div');
  banner.className='cookie-banner';
  banner.id='cookie-banner';
  banner.innerHTML=
    '<div class="cookie-text">'+
      '<span data-l="en" class="on">We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies. <a href="/privacy-policy.html">Learn more</a></span>'+
      '<span data-l="tr">Deneyiminizi gelistirmek icin cerezler kullaniyoruz. Bu siteyi ziyaret etmeye devam ederek cerez kullanimini kabul etmis olursunuz. <a href="/privacy-policy.html">Daha fazla bilgi</a></span>'+
    '</div>'+
    '<div class="cookie-btns">'+
      '<button class="cookie-btn cookie-decline" onclick="cookieConsent(\'declined\')">'+
        '<span data-l="en" class="on">Decline</span><span data-l="tr">Reddet</span>'+
      '</button>'+
      '<button class="cookie-btn cookie-accept" onclick="cookieConsent(\'accepted\')">'+
        '<span data-l="en" class="on">Accept</span><span data-l="tr">Kabul Et</span>'+
      '</button>'+
    '</div>';
  document.body.appendChild(banner);
}

function checkCookieConsent(){
  var consent=localStorage.getItem('qregu-cookie-consent');
  if(!consent){
    setTimeout(function(){
      var banner=document.getElementById('cookie-banner');
      if(banner)banner.classList.add('show');
    },1000);
  }
}

// Contact form success handler
function checkFormSuccess(){
  var params=new URLSearchParams(window.location.search);
  if(params.get('success')==='1'){
    var form=document.getElementById('contact-form');
    var msg=document.getElementById('success-msg');
    if(form)form.style.display='none';
    if(msg)msg.style.display='block';
    trackEvent('form_submit', 'conversion', 'contact_form');
    // Clean URL
    window.history.replaceState({},'',window.location.pathname);
  }
}

// Auto-track CTA clicks
function initClickTracking(){
  document.addEventListener('click', function(e){
    var el = e.target.closest('a, button');
    if(!el) return;

    var href = el.getAttribute('href') || '';
    var text = el.textContent.trim().substring(0, 30);

    // Calendly clicks
    if(href.indexOf('calendly.com') > -1){
      trackEvent('calendly_click', 'conversion', 'demo_booking');
    }
    // Contact page clicks
    else if(href.indexOf('contact') > -1){
      trackEvent('contact_click', 'conversion', text);
    }
    // Pricing section scrolls
    else if(href === '#pricing'){
      trackEvent('pricing_view', 'engagement', 'pricing_section');
    }
    // External links
    else if(href.indexOf('http') === 0 && href.indexOf('qregu.com') === -1){
      trackEvent('outbound_click', 'engagement', href);
    }
    // CTA buttons
    else if(el.classList.contains('cta') || el.classList.contains('btn-primary')){
      trackEvent('cta_click', 'conversion', text);
    }
  });
}

// Initialize common functionality
function initCommon(){
  injectCookieBanner();
  initLang();
  checkCookieConsent();
  checkFormSuccess();
  initClickTracking();
}

// Auto-init when DOM is ready
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',initCommon);
}else{
  initCommon();
}