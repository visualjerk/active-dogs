if(!self.define){let s,e={};const i=(i,c)=>(i=new URL(i+".js",c).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(c,l)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let r={};const n=s=>i(s,o),d={module:{uri:o},exports:r,require:n};e[o]=Promise.all(c.map((s=>d[s]||n(s)))).then((s=>(l(...s),r)))}}define(["./workbox-873c5e43"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/active-dogs/android-chrome-192x192.png",revision:"152174daa6409bc10b6074f122118bde"},{url:"/active-dogs/android-chrome-512x512.png",revision:"138b81c0f4dec43cb5d3c8f5b332106f"},{url:"/active-dogs/apple-touch-icon.png",revision:"9139f953598da833e07a39875a22c608"},{url:"/active-dogs/assets/shapes.svg",revision:"e535ce83da20a4b7719ca3d45195ebd5"},{url:"/active-dogs/browserconfig.xml",revision:"bada5917c5450e5a2ad65a7731818943"},{url:"/active-dogs/css/254.8d5e5794.css",revision:null},{url:"/active-dogs/css/263.8d5e5794.css",revision:null},{url:"/active-dogs/css/277.8d5e5794.css",revision:null},{url:"/active-dogs/css/536.8d5e5794.css",revision:null},{url:"/active-dogs/css/650.8d5e5794.css",revision:null},{url:"/active-dogs/css/712.8d5e5794.css",revision:null},{url:"/active-dogs/css/717.eb2138ce.css",revision:null},{url:"/active-dogs/css/831.8d5e5794.css",revision:null},{url:"/active-dogs/css/834.8d5e5794.css",revision:null},{url:"/active-dogs/css/946.8d5e5794.css",revision:null},{url:"/active-dogs/css/app.046b7bcf.css",revision:null},{url:"/active-dogs/favicon-16x16.png",revision:"ee589a8a33796bd44b882bb5fe4de150"},{url:"/active-dogs/favicon-32x32.png",revision:"d6a0bf7c91b3524a0e9558e580e7725c"},{url:"/active-dogs/favicon.ico",revision:"3dc2fcffd9e51d4fcdf195beac3da79c"},{url:"/active-dogs/index.html",revision:"14ac702ec7245b0b9f6b05b60ad6e747"},{url:"/active-dogs/js/168.9390e98d.js",revision:null},{url:"/active-dogs/js/254.6d455793.js",revision:null},{url:"/active-dogs/js/263.3393ce74.js",revision:null},{url:"/active-dogs/js/277.7175fa1b.js",revision:null},{url:"/active-dogs/js/338.780baa9c.js",revision:null},{url:"/active-dogs/js/350.55e4bc26.js",revision:null},{url:"/active-dogs/js/536.39b0b8fd.js",revision:null},{url:"/active-dogs/js/541.52e78cdd.js",revision:null},{url:"/active-dogs/js/544.c59cbf6d.js",revision:null},{url:"/active-dogs/js/576.0ba5a5a9.js",revision:null},{url:"/active-dogs/js/592.5365c6b1.js",revision:null},{url:"/active-dogs/js/650.63f97494.js",revision:null},{url:"/active-dogs/js/712.2619d839.js",revision:null},{url:"/active-dogs/js/717.06bdcde4.js",revision:null},{url:"/active-dogs/js/753.9e7f813f.js",revision:null},{url:"/active-dogs/js/775.aca82f25.js",revision:null},{url:"/active-dogs/js/78.e0ca7848.js",revision:null},{url:"/active-dogs/js/831.b1acb790.js",revision:null},{url:"/active-dogs/js/834.dccb5fcd.js",revision:null},{url:"/active-dogs/js/880.2be6c813.js",revision:null},{url:"/active-dogs/js/946.d8eb8dba.js",revision:null},{url:"/active-dogs/js/990.48f44ff6.js",revision:null},{url:"/active-dogs/js/app.99594046.js",revision:null},{url:"/active-dogs/manifest.json",revision:"8869ba227654282e574aa91b1dbea952"},{url:"/active-dogs/mstile-144x144.png",revision:"ccaf63761e5f9210dcaf9e7d19cd0651"},{url:"/active-dogs/mstile-150x150.png",revision:"8be388a72346ada3691f2f54be2febf7"},{url:"/active-dogs/mstile-310x150.png",revision:"4453d60a9b1e3e21badb2ae9706f10c1"},{url:"/active-dogs/mstile-310x310.png",revision:"fd6a847b476de028f85f27a5e6beefab"},{url:"/active-dogs/mstile-70x70.png",revision:"eef05913fab58b053836260195fa4945"},{url:"/active-dogs/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/active-dogs/safari-pinned-tab.svg",revision:"2871fd8d9d18a103f90dd1bd7badc938"}],{})}));
//# sourceMappingURL=service-worker.js.map
