/* Google Tag Manager GTM-5CFJ4BTF — włączany wyłącznie po zgodzie na analitykę. */
(function(){
"use strict";
var KEY="dj_analityka_zgoda_v1", loaded=false, choice=null;
try{choice=localStorage.getItem(KEY);}catch(e){}
if(choice!=="granted"&&choice!=="denied")choice=null;
window.dataLayer=window.dataLayer||[];
window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
window.gtag("consent","default",{analytics_storage:"denied",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"});
function loadGTM(){
 if(loaded)return;loaded=true;
 window.gtag("consent","update",{analytics_storage:"granted",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"});
 window.dataLayer.push({"gtm.start":new Date().getTime(),event:"gtm.js"});
 var s=document.createElement("script");
 s.async=true;s.src="https://www.googletagmanager.com/gtm.js?id=GTM-5CFJ4BTF";
 document.head.appendChild(s);
 window.gtag("js",new Date());
}
if(choice==="granted")loadGTM();
function save(value){
 var wasLoaded=loaded;choice=value;
 try{localStorage.setItem(KEY,value);}catch(e){}
 if(value==="granted")loadGTM();
 else if(wasLoaded){window.gtag("consent","update",{analytics_storage:"denied",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"});window.location.reload();return;}
 render();
}
function render(){
 var old=document.getElementById("dj-cookie-panel");if(old)old.remove();
 var btn=document.getElementById("dj-cookie-settings");if(!btn)return;
 btn.setAttribute("aria-expanded",choice===null?"true":"false");
 if(choice!==null)return;
 var p=document.createElement("section");p.id="dj-cookie-panel";p.setAttribute("role","region");p.setAttribute("aria-label","Wybór ustawień prywatności");
 p.innerHTML='<strong>Prywatność na stronie kancelarii</strong><p>Opcjonalną analitykę Google uruchamiamy wyłącznie za Twoją zgodą. Odmowa nie ogranicza korzystania ze strony. <a href="/polityka-prywatnosci/">Polityka prywatności</a>.</p><div class="dj-actions"><button type="button" data-choice="denied">Odrzuć analitykę</button><button type="button" data-choice="granted">Akceptuję analitykę</button></div>';
 p.addEventListener("click",function(e){var b=e.target.closest("button[data-choice]");if(b)save(b.getAttribute("data-choice"));});
 document.body.appendChild(p);
}
function init(){
 if(document.getElementById("dj-cookie-settings"))return;
 var style=document.createElement("style");
 style.textContent='#dj-cookie-panel,#dj-cookie-settings{font-family:system-ui,-apple-system,"Segoe UI",Arial,sans-serif;box-sizing:border-box}#dj-cookie-panel *{box-sizing:border-box}#dj-cookie-panel{position:fixed;bottom:18px;left:18px;z-index:2147483646;width:min(460px,calc(100vw - 36px));background:#fff;color:#233a32;border:1px solid #cbd7d0;border-radius:13px;box-shadow:0 12px 36px #14291e38;padding:19px 20px;font-size:14px;line-height:1.5}#dj-cookie-panel strong{display:block;font-size:17px;color:#174b3e;margin-bottom:6px}#dj-cookie-panel p{margin:0 0 13px}#dj-cookie-panel a{color:#174b3e;text-decoration:underline;text-underline-offset:3px}#dj-cookie-panel .dj-actions{display:flex;flex-wrap:wrap;gap:9px}#dj-cookie-panel button{font:inherit;font-weight:700;border-radius:7px;border:1px solid #174b3e;padding:10px 13px;cursor:pointer;background:#fff;color:#174b3e}#dj-cookie-panel button[data-choice="granted"]{background:#174b3e;color:#fff}#dj-cookie-panel button:focus-visible,#dj-cookie-settings:focus-visible{outline:3px solid #bd9065;outline-offset:3px}#dj-cookie-settings{position:fixed;bottom:12px;right:12px;z-index:2147483645;background:#174b3e;color:#fff;border:1px solid #fff;border-radius:30px;padding:7px 12px;font-size:12px;line-height:1.4;cursor:pointer;box-shadow:0 3px 12px #0002}@media(max-width:550px){#dj-cookie-panel{bottom:56px;left:12px;width:calc(100vw - 24px);padding:15px}#dj-cookie-settings{bottom:10px;right:10px}}';
 document.head.appendChild(style);
 var b=document.createElement("button");b.type="button";b.id="dj-cookie-settings";b.textContent="Ustawienia cookies";b.setAttribute("aria-controls","dj-cookie-panel");b.setAttribute("aria-expanded","false");b.addEventListener("click",function(){choice=null;render();});document.body.appendChild(b);render();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();