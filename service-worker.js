/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0d992dbf231f5f143a92da0a1783d9d2"
  },
  {
    "url": "about/index.html",
    "revision": "f7835f113abaf374e5bd8360b1b8487d"
  },
  {
    "url": "algorithm/algorithms/array-sorting-algorithms.html",
    "revision": "bf995a3b5a0c2d195fe5683ecfc880b7"
  },
  {
    "url": "algorithm/algorithms/index.html",
    "revision": "5e3f6ce86474e590fe0122cd0a6b8b06"
  },
  {
    "url": "algorithm/data-structure/avl-tree.html",
    "revision": "03ea2e2d250d63268042ad189032f3e5"
  },
  {
    "url": "algorithm/data-structure/binary-search-tree.html",
    "revision": "aee74a2683be3bfa31d9a6e1f3c2b8c2"
  },
  {
    "url": "algorithm/data-structure/binary-tree.html",
    "revision": "6c8e98806e3296b96521b9ed13e7c9b9"
  },
  {
    "url": "algorithm/data-structure/doubly-linked-list.html",
    "revision": "f3537e88e84da697e30f2f842b6d6bec"
  },
  {
    "url": "algorithm/data-structure/hash-table.html",
    "revision": "cf3a63b14d94938e08aaa8266719d843"
  },
  {
    "url": "algorithm/data-structure/heap.html",
    "revision": "f3c6767ad9d1b8b1c57438b6a0aed6c6"
  },
  {
    "url": "algorithm/data-structure/index.html",
    "revision": "a6efbe45fc840099be2f3b6f77f95463"
  },
  {
    "url": "algorithm/data-structure/linked-list.html",
    "revision": "e056b6998de5d875e75f48ee6526f773"
  },
  {
    "url": "algorithm/data-structure/priority-queue.html",
    "revision": "915efae139a57e69beddb7e9ac63b927"
  },
  {
    "url": "algorithm/data-structure/queue.html",
    "revision": "ecfff8d23be85196492735ce6c94a6cd"
  },
  {
    "url": "algorithm/data-structure/red-black-tree.html",
    "revision": "32c3e0c295088783f212520e90d9e834"
  },
  {
    "url": "algorithm/data-structure/segment-tree.html",
    "revision": "908913e3c662eb85c729d3d4dd78d28e"
  },
  {
    "url": "algorithm/data-structure/stack.html",
    "revision": "a9c64d4ec5315d8db55e2c6c1ee2f740"
  },
  {
    "url": "algorithm/data-structure/trie.html",
    "revision": "2587554b1d712166e1a38133f51943e3"
  },
  {
    "url": "algorithm/index.html",
    "revision": "af23a4a2f2b90d4a1b452bed3ab097f9"
  },
  {
    "url": "assets/css/0.styles.8fce5f84.css",
    "revision": "c18f37e04996b732352db5ea974e497d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e89e7704.js",
    "revision": "93323b0493146083b394367fc3a56cc8"
  },
  {
    "url": "assets/js/11.dbd8bbe9.js",
    "revision": "1807d71b34a6243410f7c705ccb9a309"
  },
  {
    "url": "assets/js/12.bbb58716.js",
    "revision": "82dec728f7a36d56b57a6106eccb1541"
  },
  {
    "url": "assets/js/13.899ef175.js",
    "revision": "f75d61a654ce2ae582a3bfc0eb8e108b"
  },
  {
    "url": "assets/js/14.f0722728.js",
    "revision": "be65484f6734e7b0b62919c97a29c51d"
  },
  {
    "url": "assets/js/15.309e33e1.js",
    "revision": "a5877a4c4fd96f30a1cfddc4d257f393"
  },
  {
    "url": "assets/js/16.00fe9d5e.js",
    "revision": "508665b19000e3bed899e9f2eb3d4bd6"
  },
  {
    "url": "assets/js/17.54e25300.js",
    "revision": "2e0b8aaf423426d500b35a5012e22599"
  },
  {
    "url": "assets/js/18.704a5c60.js",
    "revision": "307dee53996bace264a4ccb23285aef6"
  },
  {
    "url": "assets/js/19.0d8c98ca.js",
    "revision": "84c5591e319db29d64cd7937d1513ffe"
  },
  {
    "url": "assets/js/20.19a3610c.js",
    "revision": "7248b06371f14fd358928432eac38190"
  },
  {
    "url": "assets/js/21.5e5d0ae6.js",
    "revision": "519d4eed52d6d70e726035eb9d261e0a"
  },
  {
    "url": "assets/js/22.e1e55c6d.js",
    "revision": "3ba1154343eef38c662e8a9733f52f29"
  },
  {
    "url": "assets/js/23.0dc4d617.js",
    "revision": "22fff677a21811998c0126117d9648c8"
  },
  {
    "url": "assets/js/24.c6a74495.js",
    "revision": "ba713a2b5cfeb0414f52d6c135ce9edf"
  },
  {
    "url": "assets/js/25.07f8593e.js",
    "revision": "d400b9e532bd960a37b2f31d5e6a967b"
  },
  {
    "url": "assets/js/26.b4469666.js",
    "revision": "27c39b64e599781c23badc7620cd5017"
  },
  {
    "url": "assets/js/27.e46b0039.js",
    "revision": "fb3a9f8483277e3038b236ffa432f7ad"
  },
  {
    "url": "assets/js/28.6113c6d1.js",
    "revision": "2b2489d503790589a839e05a5c60b342"
  },
  {
    "url": "assets/js/29.a81ad46c.js",
    "revision": "8ee43949dd51c4deee17328258d53901"
  },
  {
    "url": "assets/js/3.fbca6c51.js",
    "revision": "b9669bcf092daa6766d0b09afb9b9f3e"
  },
  {
    "url": "assets/js/30.5cb682af.js",
    "revision": "803796b881170d966379b9d5b61fe80a"
  },
  {
    "url": "assets/js/31.431154f9.js",
    "revision": "07812cf1310bd3228026fc9e4876ab12"
  },
  {
    "url": "assets/js/32.dbf1cdf0.js",
    "revision": "4efaefbb9e8d7c7f96a1107fa1ac826c"
  },
  {
    "url": "assets/js/33.113209e8.js",
    "revision": "879814a56a95960baa65c2eaef1e650f"
  },
  {
    "url": "assets/js/34.d5af16be.js",
    "revision": "19b46880671467effaf483f44021020e"
  },
  {
    "url": "assets/js/35.51169fac.js",
    "revision": "126f8d3be62b2180cbd44c0a1f8146d0"
  },
  {
    "url": "assets/js/36.eb16a1d3.js",
    "revision": "bb32ddcd855f27459f1b1be93eb6757a"
  },
  {
    "url": "assets/js/37.48d3f9d7.js",
    "revision": "32dcc33067a3fce5eb8ce83bce1f34c2"
  },
  {
    "url": "assets/js/38.350fca25.js",
    "revision": "048ff2f693c39cc25fcd946c94bdbaf3"
  },
  {
    "url": "assets/js/39.67d26d38.js",
    "revision": "8a3e8aca4854fea7034894f5cb9d798d"
  },
  {
    "url": "assets/js/4.effe20ae.js",
    "revision": "746c02026bee97ee444ec5a642fe063e"
  },
  {
    "url": "assets/js/40.4f3e356f.js",
    "revision": "c4fb78d1a75b8e45ef790be2f5cab7b1"
  },
  {
    "url": "assets/js/41.b4c4b9ef.js",
    "revision": "777e9671fac488f69195a9c68724bf9e"
  },
  {
    "url": "assets/js/42.e093bc95.js",
    "revision": "f1fb1aa12db745bf040ff4edb00f5385"
  },
  {
    "url": "assets/js/43.08591591.js",
    "revision": "28a4fcbbb90ec1690fa5f527a28b99b4"
  },
  {
    "url": "assets/js/44.fb5e9884.js",
    "revision": "6b3f40d665704ee72774a43d968b907d"
  },
  {
    "url": "assets/js/45.10e1ba3a.js",
    "revision": "cde54c711d2f92abb808296845c0bf21"
  },
  {
    "url": "assets/js/46.38862501.js",
    "revision": "4c57a2745179bbf95f65325811f55a28"
  },
  {
    "url": "assets/js/47.70784e54.js",
    "revision": "31d20580d7e20b30f8830703d1d0cd5e"
  },
  {
    "url": "assets/js/48.5b8fdc5d.js",
    "revision": "58502bcb7a5891539d042a23fb1bf4af"
  },
  {
    "url": "assets/js/49.174f5fb9.js",
    "revision": "3b5207bf269ddfac5fa68c79d16ac840"
  },
  {
    "url": "assets/js/5.bf92cf49.js",
    "revision": "817de7608651129ff7513b6716ccfb8f"
  },
  {
    "url": "assets/js/50.97f26ad1.js",
    "revision": "76f37cd70c37399342bc348d2d5fdded"
  },
  {
    "url": "assets/js/51.aea56653.js",
    "revision": "45907d7da7cf887f0cd77e2a21141727"
  },
  {
    "url": "assets/js/52.6e01905a.js",
    "revision": "70695e70d58815a7c2a9f788bf29e2bf"
  },
  {
    "url": "assets/js/53.c182e945.js",
    "revision": "0541779507367965da3d9879777e1627"
  },
  {
    "url": "assets/js/54.7859b3fe.js",
    "revision": "c56e768ea1ea1dbc1c20ab48904d94fd"
  },
  {
    "url": "assets/js/55.0b36b9d8.js",
    "revision": "45759bdcee91bc3068ae81c7397259f8"
  },
  {
    "url": "assets/js/56.040f4107.js",
    "revision": "13f5fcc01d7b3c543dac7c1c15ee425b"
  },
  {
    "url": "assets/js/57.7f91a090.js",
    "revision": "527e553317784fb8063ff54c249e5722"
  },
  {
    "url": "assets/js/58.8dfd7edb.js",
    "revision": "845683eac21b96fe377e7560cc6af0e8"
  },
  {
    "url": "assets/js/59.f7160fc3.js",
    "revision": "00ab4f0394b6d44d3d462f2cecc4b48e"
  },
  {
    "url": "assets/js/6.1b65c77a.js",
    "revision": "619e30dae43e1c28d5eef84da2a3fb13"
  },
  {
    "url": "assets/js/60.086fcea1.js",
    "revision": "9e05fff7f9177786ced849ff6ea09e1b"
  },
  {
    "url": "assets/js/61.d469912f.js",
    "revision": "70c9fed07ea7b22b308d318cdad6f065"
  },
  {
    "url": "assets/js/62.647d3e22.js",
    "revision": "ffda8a4ed40e067be981daab6d9d98ad"
  },
  {
    "url": "assets/js/63.761734fa.js",
    "revision": "8832c02a5c3813427899b18777305246"
  },
  {
    "url": "assets/js/64.1cf558df.js",
    "revision": "00134f8bc991af7395c668e1a31af198"
  },
  {
    "url": "assets/js/65.ee7f335a.js",
    "revision": "ee13739dbb946b07fb4139deb5812ce4"
  },
  {
    "url": "assets/js/66.46f50e4b.js",
    "revision": "e302e04da5575b5999498dcb6c231e13"
  },
  {
    "url": "assets/js/67.85c98d9b.js",
    "revision": "76b1d1d03b5b951e7591c2337684094e"
  },
  {
    "url": "assets/js/68.d0f3c7cd.js",
    "revision": "8424e8dfa3cb6916b5dd6dd3d12d92a9"
  },
  {
    "url": "assets/js/69.89ec8c7c.js",
    "revision": "ffd124379565147829db8df4e10a9044"
  },
  {
    "url": "assets/js/7.b9733943.js",
    "revision": "9d7477d05bad7ab285369d1918c43a82"
  },
  {
    "url": "assets/js/70.bc2e5ada.js",
    "revision": "8d99010be83481693e11843df7c6c7f0"
  },
  {
    "url": "assets/js/71.853dcbc3.js",
    "revision": "0088299dc62e12c0392dd2a2ac80b77e"
  },
  {
    "url": "assets/js/72.0996783f.js",
    "revision": "12a03df7fbfc92c56eed314a3731174e"
  },
  {
    "url": "assets/js/73.ab4cc3cf.js",
    "revision": "ac29cd1ebdf8d8575cf5c385b9bb6858"
  },
  {
    "url": "assets/js/74.2116d4d1.js",
    "revision": "e77aa0961e9f57e9798ce4797bfe58f3"
  },
  {
    "url": "assets/js/75.bca50e29.js",
    "revision": "90f09eead0f2d1e111752ee0adc799ae"
  },
  {
    "url": "assets/js/76.c28a9d7d.js",
    "revision": "bba7d84c26839a08acedf2df6b8a8c81"
  },
  {
    "url": "assets/js/77.5642026a.js",
    "revision": "426629a1b59f50969b66b63cc6b2ed7b"
  },
  {
    "url": "assets/js/78.89dad47f.js",
    "revision": "1a5b1faab302259944ce436d51980ab6"
  },
  {
    "url": "assets/js/79.6304534b.js",
    "revision": "eccf40c0618c6ce6a831bc98a856402c"
  },
  {
    "url": "assets/js/8.ec9df493.js",
    "revision": "1d41d4a2e659637b375d7f71f9e233e4"
  },
  {
    "url": "assets/js/80.1045dafb.js",
    "revision": "bab250d37f4b4c43a9ae3765f34d6c98"
  },
  {
    "url": "assets/js/81.0e4d86ee.js",
    "revision": "a82918418253d30851ea368a126945a7"
  },
  {
    "url": "assets/js/82.aa94c687.js",
    "revision": "809abe1a784436616fefa03b4d68d64d"
  },
  {
    "url": "assets/js/83.edc22fa1.js",
    "revision": "ab70316c0696cdb86da3d175bd45e4ca"
  },
  {
    "url": "assets/js/84.026b27a6.js",
    "revision": "8996a74bd72497f1a14d06e83d437a9c"
  },
  {
    "url": "assets/js/85.b2cb00a9.js",
    "revision": "1552bc68e83c362c1a57410cbcb950ed"
  },
  {
    "url": "assets/js/86.bc31b894.js",
    "revision": "fb681c824785d51e91ecf21260775e20"
  },
  {
    "url": "assets/js/87.1befb8e6.js",
    "revision": "d47b0303e93a0134c6b9967f64fc705f"
  },
  {
    "url": "assets/js/88.e730576b.js",
    "revision": "355d98a6c2165338c67ec4e4fef1ddd7"
  },
  {
    "url": "assets/js/89.ca36df0d.js",
    "revision": "da3a2768f49c71d1fc56ecc8a4e4a53c"
  },
  {
    "url": "assets/js/9.5a360f50.js",
    "revision": "e0bd133dcd04e9fbf1ac4bdf5389bce1"
  },
  {
    "url": "assets/js/90.d16ddc3f.js",
    "revision": "4ea5e4ee1926b4d1e34cbb0369d821cf"
  },
  {
    "url": "assets/js/91.cbd5f450.js",
    "revision": "005783261849126f78d5c0cac7dd5e7e"
  },
  {
    "url": "assets/js/92.415523e7.js",
    "revision": "cb0c285d8d4c1f19b9798c3fada81140"
  },
  {
    "url": "assets/js/93.3c011263.js",
    "revision": "32d3ffa73c65d0303e241d0805d286b5"
  },
  {
    "url": "assets/js/94.b8b55dc2.js",
    "revision": "cf3da992b190f3d7cb5caa43bb110bdd"
  },
  {
    "url": "assets/js/95.1f440777.js",
    "revision": "7bd9bb4f8fa885e2fc7b2b21d50a1fa9"
  },
  {
    "url": "assets/js/96.1137f367.js",
    "revision": "0635094a6f02b97c7dd36f8eaa25a05b"
  },
  {
    "url": "assets/js/97.78d31b79.js",
    "revision": "c92f6037c90ddebd9237a47e54cbae42"
  },
  {
    "url": "assets/js/98.6e0d4367.js",
    "revision": "04ea969b0f6425353608c69daf4575fe"
  },
  {
    "url": "assets/js/app.f2a3c75e.js",
    "revision": "2b06eb257cacf718cd9bde72c261a4a9"
  },
  {
    "url": "assets/js/vendors~docsearch.a920cc49.js",
    "revision": "f9d228d23c26dd63baa4fa53c4259840"
  },
  {
    "url": "backend/index.html",
    "revision": "66db08a202c4453c230c67470cc84594"
  },
  {
    "url": "backend/nodejs/events.html",
    "revision": "eb37561ab9896ff25b8442e274157e99"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "b23eba422486502237e10e7f99e0e840"
  },
  {
    "url": "cs/index.html",
    "revision": "c8ffc8fcd934eb4f6d0f9fee9af22db0"
  },
  {
    "url": "cs/network/http.html",
    "revision": "1de1682be36c8d11177a6da6db91d2c4"
  },
  {
    "url": "cs/network/index.html",
    "revision": "93a3158d5a635c37bfd658986f2c167f"
  },
  {
    "url": "cs/os/index.html",
    "revision": "875b56eca367b696ccfc5dff0c30a972"
  },
  {
    "url": "frontend/browser/bom.html",
    "revision": "49685c58163bfd6b997e56fe9a848bed"
  },
  {
    "url": "frontend/browser/cross-domain.html",
    "revision": "d1cec59fce91e1b4d2d4cb8a27d50232"
  },
  {
    "url": "frontend/browser/dom.html",
    "revision": "8dccd7d2da4a1f4c55765d7300cba25e"
  },
  {
    "url": "frontend/browser/events.html",
    "revision": "bb7b1bd8febe3a1388d05445e15cb72a"
  },
  {
    "url": "frontend/browser/index.html",
    "revision": "c1d9d334e446093e51534ed49d85b09e"
  },
  {
    "url": "frontend/browser/memory-management.html",
    "revision": "93210d7d2177c23d48f25cdcbfbd0596"
  },
  {
    "url": "frontend/browser/pwa.html",
    "revision": "0f8e5fdc59343304ba336da18c6d2d7d"
  },
  {
    "url": "frontend/browser/render.html",
    "revision": "ac3b065a7dc3db03ebc8b995f84c44f0"
  },
  {
    "url": "frontend/browser/storage.html",
    "revision": "5458e1546484ba0711136c1d127d7dab"
  },
  {
    "url": "frontend/browser/web-performance.html",
    "revision": "d4d84aac6b30a2261bbf22c82e2ad104"
  },
  {
    "url": "frontend/browser/web-security.html",
    "revision": "61d8a489312cb0f3470541080ca7ef67"
  },
  {
    "url": "frontend/css/css-animations.html",
    "revision": "febca203f6b1002d5384a52fe69d7c82"
  },
  {
    "url": "frontend/css/css-border.html",
    "revision": "0ceafb4aacb97349fc0c857635abbb1a"
  },
  {
    "url": "frontend/css/css-box-model.html",
    "revision": "7d1113f47bbeaec470e51301aa936492"
  },
  {
    "url": "frontend/css/css-color-and-background-and-gradients.html",
    "revision": "e7e6df8e0ac9d7345ec8948c7d7b82b0"
  },
  {
    "url": "frontend/css/css-css-and-documents.html",
    "revision": "167792a9753081e7509b64e2e6757280"
  },
  {
    "url": "frontend/css/css-filters-blending-clipping-masking.html",
    "revision": "22bbaac3a6a17d395d1a553017357f5d"
  },
  {
    "url": "frontend/css/css-flexbox-layout.html",
    "revision": "431b1d18c937b99ebc9bc592a1bffed9"
  },
  {
    "url": "frontend/css/css-floating.html",
    "revision": "ae12358b1f977f2138f871b20743848d"
  },
  {
    "url": "frontend/css/css-fonts.html",
    "revision": "58f7a6a48748d58fe0f43a79acd18e03"
  },
  {
    "url": "frontend/css/css-grid-layout.html",
    "revision": "d41def444e466c012386c1375e4200e5"
  },
  {
    "url": "frontend/css/css-positioning.html",
    "revision": "380f0815018df7453435ea697b725258"
  },
  {
    "url": "frontend/css/css-selectors.html",
    "revision": "49361ee14f50d147ff287993782aef89"
  },
  {
    "url": "frontend/css/css-shapes.html",
    "revision": "86960828810a05b13f31cd322daa6f50"
  },
  {
    "url": "frontend/css/css-specificity-and-cascade.html",
    "revision": "7cd292fc7eefe13fc6954c62a3aa510f"
  },
  {
    "url": "frontend/css/css-table-layout.html",
    "revision": "6c406bdde293fe6ab0f915e1c8cf7bde"
  },
  {
    "url": "frontend/css/css-text-properties.html",
    "revision": "a0c297284c772a2f1858653a9ad03e5e"
  },
  {
    "url": "frontend/css/css-transforms.html",
    "revision": "f6a726d1f47c660fc1d4cec66e8d1c0a"
  },
  {
    "url": "frontend/css/css-transitions.html",
    "revision": "5aafe6ad1131e5efce7a3505e18daf38"
  },
  {
    "url": "frontend/css/css-values-and-units.html",
    "revision": "bddfcb35eed6ec768bc699af2b01bf77"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "6dacd1dc9e8432518d9d707a29e75e6d"
  },
  {
    "url": "frontend/index.html",
    "revision": "663789ecbfe991eef74b9e83d8503683"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "0c3d11bd77901e08febe0874464ea89f"
  },
  {
    "url": "frontend/js/js-control-flow-and-error-handling.html",
    "revision": "a8a06f6f31ed6e9be5371e6739910ccf"
  },
  {
    "url": "frontend/js/js-es2020.html",
    "revision": "6891b676ac0ae1ded2d4b6c84840872a"
  },
  {
    "url": "frontend/js/js-es2021.html",
    "revision": "6f4c8990fa14fb1c19a616d143fad8ca"
  },
  {
    "url": "frontend/js/js-expressions-and-operators.html",
    "revision": "9bdf1dfdc4ea3995e7e299f4258c9eb0"
  },
  {
    "url": "frontend/js/js-functions.html",
    "revision": "507ccaec249557dd6aaebb5acddaad5b"
  },
  {
    "url": "frontend/js/js-grammar-and-types.html",
    "revision": "2524c79e18fce9c2a8e9f793f5659b81"
  },
  {
    "url": "frontend/js/js-in-html.html",
    "revision": "3b77e91f2d2bfbda82c6835285a61fc0"
  },
  {
    "url": "frontend/js/js-indexed-collections.html",
    "revision": "f720db3896d2312bbcc51b098268e0c8"
  },
  {
    "url": "frontend/js/js-iterators-and-generators.html",
    "revision": "168b7975e431595db596bab829b2f316"
  },
  {
    "url": "frontend/js/js-keyed-collections.html",
    "revision": "6d2c23eaeea67cad8ad54938f775a043"
  },
  {
    "url": "frontend/js/js-meta-programming.html",
    "revision": "da27285c5f74d17cf7c4b3f76c60bd2a"
  },
  {
    "url": "frontend/js/js-modules.html",
    "revision": "41929765a9c6d8240772167134713329"
  },
  {
    "url": "frontend/js/js-numbers-and-dates.html",
    "revision": "96e076fc8d62d2f7ed3516382f70dc58"
  },
  {
    "url": "frontend/js/js-promises.html",
    "revision": "3516b18bb9c36688321d17e748d72fff"
  },
  {
    "url": "frontend/js/js-regular-expressions.html",
    "revision": "ce1da6fb54a776f56908c946e08acd23"
  },
  {
    "url": "frontend/js/js-strict-mode.html",
    "revision": "e9562c7ed16d3e4342405d38191a6183"
  },
  {
    "url": "frontend/js/js-text-formatting.html",
    "revision": "be21778c424088530a5be87c646d4fff"
  },
  {
    "url": "frontend/js/js-working-with-objects.html",
    "revision": "39b6eba26e604fa64dd39c972d27b87b"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "e39b134bd3031b4008964477fc7c53c7"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "a4cd3bd08a389d780055d149171c1876"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "eece63b6f7d6a5de31f814840d1ad3d0"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "9a16bec4cc79ed547161d43bb494b605"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "2741d6fc86e4edd2642f078551b33fc3"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "ca7920242669366a7351f0d5e9f72476"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "85bb01789c9c635caf8c124bfdf7dd77"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "2741d6fc86e4edd2642f078551b33fc3"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "c00067396a43fa7f3a9ef5cc0e6aa6ae"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "b125b3453bc9e1c32b6afccfc9b5822d"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "153c928f2b67857f36f09c7b2ab17941"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "b22960aa71b25e41c3880c23c63a4767"
  },
  {
    "url": "index.html",
    "revision": "06e1bc5454e4267b5a20e630eb79bb14"
  },
  {
    "url": "interview/css.html",
    "revision": "1dda689f5754f88cadadb05b3f746ff3"
  },
  {
    "url": "interview/html.html",
    "revision": "ceb420ffabc3cccc3c97cbac12827f7d"
  },
  {
    "url": "interview/index.html",
    "revision": "972375e76c77714b89e72c9044b3cfd3"
  },
  {
    "url": "interview/javascript.html",
    "revision": "7a4bf5c53cb99286b29469041a8b1aff"
  },
  {
    "url": "interview/mobile-web.html",
    "revision": "03f4b6af7400c07a963f380b46b36814"
  },
  {
    "url": "logo.png",
    "revision": "d8d70a56ece354e7f87ff3c675e28928"
  },
  {
    "url": "thinking/design-patterns/index.html",
    "revision": "25c28fa8319b04569182ec2d48cf18ba"
  },
  {
    "url": "thinking/index.html",
    "revision": "94a4c0d239c1865474cc1cb015c6c5e9"
  },
  {
    "url": "tools/git.html",
    "revision": "40dcf45c245dc77174d0b9c1dd599165"
  },
  {
    "url": "tools/index.html",
    "revision": "a897bbef788f7de6f6b3f579e972eb35"
  },
  {
    "url": "tools/linux.html",
    "revision": "807a302ee191e5a67d0b1b1e6f2fd005"
  },
  {
    "url": "tools/nginx.html",
    "revision": "fa8a6b9e7ab8621b66664eda18dcf5c7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
