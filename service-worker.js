if(!self.define){let s,e={};const a=(a,i)=>(a=new URL(a+".js",i).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(i,f)=>{const d=s||("document"in self?document.currentScript.src:"")||location.href;if(e[d])return;let c={};const r=s=>a(s,d),t={module:{uri:d},exports:c,require:r};e[d]=Promise.all(i.map((s=>t[s]||r(s)))).then((s=>(f(...s),c)))}}define(["./workbox-600ee3f1"],(function(s){"use strict";s.setCacheNameDetails({prefix:"nonebot-plugin-novelai"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.1c747248.js",revision:"c74df10ba31100d45cff65717ab5caaa"},{url:"assets/404.html.8429b514.js",revision:"021596100cfabc7e19bcd7a3dc338b7b"},{url:"assets/advance.html.8d98392e.js",revision:"344ab531702ded0ccb8422fc4e4f3f64"},{url:"assets/advance.html.9f36f261.js",revision:"29b9d8e15bd3c08a4f3badcdc1be6670"},{url:"assets/aidraw.html.4e419224.js",revision:"07e2734ec094fa6d4094379f2a21c45a"},{url:"assets/aidraw.html.f5542e1b.js",revision:"0fd8689d5d693f4b1c90493d3c00fb77"},{url:"assets/app.f9063baf.js",revision:"5c68fa13ae9eb9f122d6ba59c59645e0"},{url:"assets/backend.html.8a3f57b3.js",revision:"c47425fd6cd251cf1228a31b1e284cde"},{url:"assets/backend.html.91349f0d.js",revision:"471da32268131ff217270ad8a7d879b8"},{url:"assets/config.html.38ba08f3.js",revision:"5347b909f15dafc3b857e07c423847df"},{url:"assets/config.html.6838830f.js",revision:"2112356e115e3132b3afaf77433ebf25"},{url:"assets/extension.html.4ccf00cd.js",revision:"95c193a5fe2b3f0e96a50dc81b89780a"},{url:"assets/extension.html.7b48e446.js",revision:"8bc9408854e08729e53fbc47ae931986"},{url:"assets/flowchart.parse.8bc2fcba.js",revision:"93ee4658efd463b82af7bc1b894a96d4"},{url:"assets/index.html.0191f33f.js",revision:"30cd7a8a2ad55cb425ffcc3601f1188f"},{url:"assets/index.html.1f4a6d5e.js",revision:"7373261f1b3e3fbc4d5ff95228f4264d"},{url:"assets/index.html.29d640cd.js",revision:"4dfa27043326b1c7701471188b1f8222"},{url:"assets/index.html.37066195.js",revision:"4dfa27043326b1c7701471188b1f8222"},{url:"assets/index.html.3f96b7f7.js",revision:"226dfcabd177e20809508e9147bb1fa8"},{url:"assets/index.html.3f9c7a12.js",revision:"9c75b5c4e9051ffb81654258141c6638"},{url:"assets/index.html.51c6d7c6.js",revision:"4dfa27043326b1c7701471188b1f8222"},{url:"assets/index.html.5c4b9395.js",revision:"4dfa27043326b1c7701471188b1f8222"},{url:"assets/index.html.67ad8ef9.js",revision:"f3ae96cde1c315f67ed3fd6c6e493f79"},{url:"assets/index.html.69e54f4b.js",revision:"48aa76d5b2ed133e5ca6de3da98047b3"},{url:"assets/index.html.6ce74cba.js",revision:"4dfa27043326b1c7701471188b1f8222"},{url:"assets/index.html.7260192d.js",revision:"e0336b3d5325d70c860869c19c0a7b04"},{url:"assets/index.html.7ccc01b0.js",revision:"003476d4f764ed8b1d29cc768e403ac9"},{url:"assets/index.html.889fd820.js",revision:"4dfa27043326b1c7701471188b1f8222"},{url:"assets/index.html.8fc912dd.js",revision:"7a9cb6b47f809951aa632fcdd09d2cb6"},{url:"assets/index.html.93faf6b2.js",revision:"030da9f70bf406c979c964a142622cb1"},{url:"assets/index.html.ae7e9314.js",revision:"fe031cd4cda12e158893390e0d992594"},{url:"assets/index.html.d82612af.js",revision:"4dfa27043326b1c7701471188b1f8222"},{url:"assets/index.html.daec44ef.js",revision:"c0a5c5e4086fa6f955777db527fb52fc"},{url:"assets/index.html.e2205d57.js",revision:"893997b47592c6773490da23278af818"},{url:"assets/index.html.f1ba536c.js",revision:"4dfa27043326b1c7701471188b1f8222"},{url:"assets/index.html.feaa58b5.js",revision:"4dfa27043326b1c7701471188b1f8222"},{url:"assets/manager.html.7bb04753.js",revision:"b57e3563e4e079615deb4b450a49cd90"},{url:"assets/manager.html.dbef3cbf.js",revision:"15164b80db0f7bf5c6ba28512f65f2aa"},{url:"assets/photoswipe.esm.c6c18d70.js",revision:"58c8e5a3e1981882b36217b62f1c7bae"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/style.22b554b0.css",revision:"2a9dbf750475a3892fc6f60cf7545aa4"},{url:"index.html",revision:"d752c867f6a05ac3c15de4a3cafed867"},{url:"404.html",revision:"97ad1fe4a4cf1371679109a02c09fc70"}],{}),s.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
