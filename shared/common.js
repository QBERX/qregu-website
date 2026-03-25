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

// Demo Popup
function injectDemoPopup(){
  var popup=document.createElement('div');
  popup.className='demo-overlay';
  popup.id='demo-overlay';
  popup.onclick=function(e){if(e.target===popup)closeDemoPopup();};
  popup.innerHTML=
    '<div class="demo-popup">'+
    '<button class="demo-close" onclick="closeDemoPopup()">&times;</button>'+
    '<h3><span data-l="en" class="on">Book a Demo</span><span data-l="tr">Demo Talep Et</span></h3>'+
    '<p class="demo-sub"><span data-l="en" class="on">Tell us about yourself and we\'ll schedule a personalized demo.</span><span data-l="tr">Kendinizden bahsedin, size özel bir demo ayarlayalım.</span></p>'+
    '<form class="demo-form" id="demo-form" action="https://formspree.io/f/mbdprbnp" method="POST">'+
      '<div class="demo-field"><label><span data-l="en" class="on">Full Name</span><span data-l="tr">Ad Soyad</span></label><input type="text" name="name" required placeholder="John Smith"></div>'+
      '<div class="demo-field"><label><span data-l="en" class="on">Work Email</span><span data-l="tr">İş E-postası</span></label><input type="email" name="email" required placeholder="john@company.com"></div>'+
      '<div class="demo-field"><label><span data-l="en" class="on">Company</span><span data-l="tr">Şirket</span></label><input type="text" name="company" required placeholder="Acme Bank"></div>'+
      '<div class="demo-field"><label><span data-l="en" class="on">Sector</span><span data-l="tr">Sektör</span></label>'+
        '<select name="sector" id="demo-sector" required></select>'+
      '</div>'+
      '<input type="hidden" name="_subject" value="QRegu Demo Request">'+
      '<button type="submit" class="demo-submit" id="demo-submit">'+
        '<span data-l="en" class="on">Continue to Schedule</span><span data-l="tr">Randevu Seçimine Devam Et</span>'+
        '<div class="spinner"></div>'+
      '</button>'+
    '</form>'+
  '</div>';
  document.body.appendChild(popup);

  // Form submit handler
  document.getElementById('demo-form').addEventListener('submit',function(e){
    e.preventDefault();
    var btn=document.getElementById('demo-submit');
    btn.classList.add('loading');
    btn.disabled=true;
    var formData=new FormData(this);
    fetch(this.action,{
      method:'POST',
      body:formData,
      headers:{'Accept':'application/json'}
    }).then(function(response){
      btn.classList.remove('loading');
      btn.disabled=false;
      if(response.ok){
        closeDemoPopup();
        document.getElementById('demo-form').reset();
        window.open('https://calendly.com/berker-yenal-qberx/30min','_blank');
        trackEvent('demo_form_submit','conversion','demo_request');
      }else{
        alert('Something went wrong. Please try again.');
      }
    }).catch(function(){
      btn.classList.remove('loading');
      btn.disabled=false;
      alert('Something went wrong. Please try again.');
    });
  });
}

var sectorOptions={
  en:[
    {value:'',text:'Select sector',disabled:true},
    {value:'Banking',text:'Banking'},
    {value:'Insurance',text:'Insurance'},
    {value:'Fintech',text:'Fintech'},
    {value:'Capital Markets',text:'Capital Markets'},
    {value:'Other',text:'Other'}
  ],
  tr:[
    {value:'',text:'Sektör seçin',disabled:true},
    {value:'Banking',text:'Bankacılık'},
    {value:'Insurance',text:'Sigorta'},
    {value:'Fintech',text:'Fintech / Ödeme'},
    {value:'Capital Markets',text:'Sermaye Piyasaları'},
    {value:'Other',text:'Diğer'}
  ]
};

function updateSectorOptions(lang){
  var select=document.getElementById('demo-sector');
  if(!select)return;
  var opts=sectorOptions[lang]||sectorOptions.en;
  select.innerHTML='';
  opts.forEach(function(opt){
    var o=document.createElement('option');
    o.value=opt.value;
    o.textContent=opt.text;
    if(opt.disabled){o.disabled=true;o.selected=true;}
    select.appendChild(o);
  });
}

function openDemoPopup(){
  var overlay=document.getElementById('demo-overlay');
  if(!overlay){
    injectDemoPopup();
    overlay=document.getElementById('demo-overlay');
  }
  overlay.classList.add('open');
  document.body.style.overflow='hidden';
  // Update lang for popup
  var lang=localStorage.getItem('qregu-lang')||'en';
  overlay.querySelectorAll('[data-l]').forEach(function(el){
    el.classList.toggle('on',el.dataset.l===lang);
  });
  updateSectorOptions(lang);
  trackEvent('demo_popup_open','conversion','popup_opened');
}

function closeDemoPopup(){
  var overlay=document.getElementById('demo-overlay');
  if(overlay){
    overlay.classList.remove('open');
    document.body.style.overflow='';
  }
}

// Close popup on Escape key
document.addEventListener('keydown',function(e){
  if(e.key==='Escape')closeDemoPopup();
});

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