if(!self.define){let e,s={};const i=(i,o)=>(i=new URL(i+".js",o).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const l=e=>i(e,r),d={module:{uri:r},exports:a,require:l};s[r]=Promise.all(o.map((e=>d[e]||l(e)))).then((e=>(c(...e),a)))}}define(["./workbox-873c5e43"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/active-dogs/android-chrome-192x192.png",revision:"152174daa6409bc10b6074f122118bde"},{url:"/active-dogs/android-chrome-512x512.png",revision:"138b81c0f4dec43cb5d3c8f5b332106f"},{url:"/active-dogs/apple-touch-icon.png",revision:"9139f953598da833e07a39875a22c608"},{url:"/active-dogs/assets/shapes.svg",revision:"e535ce83da20a4b7719ca3d45195ebd5"},{url:"/active-dogs/browserconfig.xml",revision:"bada5917c5450e5a2ad65a7731818943"},{url:"/active-dogs/css/403.a102a4b7.css",revision:null},{url:"/active-dogs/css/app.046b7bcf.css",revision:null},{url:"/active-dogs/favicon-16x16.png",revision:"ee589a8a33796bd44b882bb5fe4de150"},{url:"/active-dogs/favicon-32x32.png",revision:"d6a0bf7c91b3524a0e9558e580e7725c"},{url:"/active-dogs/favicon.ico",revision:"3dc2fcffd9e51d4fcdf195beac3da79c"},{url:"/active-dogs/index.html",revision:"5551ae88bf2a3be4b13624d5c5536429"},{url:"/active-dogs/js/102.01211e8c.js",revision:null},{url:"/active-dogs/js/168.0f646a5a.js",revision:null},{url:"/active-dogs/js/172.78e4a195.js",revision:null},{url:"/active-dogs/js/26.f81defeb.js",revision:null},{url:"/active-dogs/js/263.44b3dfb9.js",revision:null},{url:"/active-dogs/js/338.f7d765b7.js",revision:null},{url:"/active-dogs/js/350.3bb36f3d.js",revision:null},{url:"/active-dogs/js/403.d9ae04c6.js",revision:null},{url:"/active-dogs/js/413.3deda4bf.js",revision:null},{url:"/active-dogs/js/506.852c0747.js",revision:null},{url:"/active-dogs/js/541.102053fb.js",revision:null},{url:"/active-dogs/js/544.74c23c7a.js",revision:null},{url:"/active-dogs/js/576.0ba5a5a9.js",revision:null},{url:"/active-dogs/js/592.9842b94a.js",revision:null},{url:"/active-dogs/js/753.9759600c.js",revision:null},{url:"/active-dogs/js/775.3b8245d2.js",revision:null},{url:"/active-dogs/js/78.780c6393.js",revision:null},{url:"/active-dogs/js/831.e552bcdc.js",revision:null},{url:"/active-dogs/js/880.7fced30d.js",revision:null},{url:"/active-dogs/js/892.482ee2d1.js",revision:null},{url:"/active-dogs/js/990.6deb89cc.js",revision:null},{url:"/active-dogs/js/app.c673af21.js",revision:null},{url:"/active-dogs/manifest.json",revision:"fc7c892def735d151ee88f12319c187a"},{url:"/active-dogs/mstile-144x144.png",revision:"ccaf63761e5f9210dcaf9e7d19cd0651"},{url:"/active-dogs/mstile-150x150.png",revision:"8be388a72346ada3691f2f54be2febf7"},{url:"/active-dogs/mstile-310x150.png",revision:"4453d60a9b1e3e21badb2ae9706f10c1"},{url:"/active-dogs/mstile-310x310.png",revision:"fd6a847b476de028f85f27a5e6beefab"},{url:"/active-dogs/mstile-70x70.png",revision:"eef05913fab58b053836260195fa4945"},{url:"/active-dogs/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/active-dogs/safari-pinned-tab.svg",revision:"2871fd8d9d18a103f90dd1bd7badc938"}],{})}));
//# sourceMappingURL=service-worker.js.map
