/* QRegu Shared JavaScript */

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

// Initialize common functionality
function initCommon(){
  injectCookieBanner();
  initLang();
  checkCookieConsent();
}

// Auto-init when DOM is ready
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',initCommon);
}else{
  initCommon();
}