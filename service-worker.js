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
    "revision": "e9d8ba3d843576f50c3e3a2d9914c419"
  },
  {
    "url": "about/index.html",
    "revision": "ead560735e3905d1b76ff8344a8f59d7"
  },
  {
    "url": "algorithm/algorithms/array-sorting-algorithms.html",
    "revision": "9be48c1809669bf410bcf3e14bdcd3cb"
  },
  {
    "url": "algorithm/algorithms/index.html",
    "revision": "669a5fd127069ae87b10fa5afa957af4"
  },
  {
    "url": "algorithm/data-structure/avl-tree.html",
    "revision": "ebccbb255b787e5de127ee2a11bc7557"
  },
  {
    "url": "algorithm/data-structure/binary-search-tree.html",
    "revision": "b0de5f0e19d6179128554b6f6d91cade"
  },
  {
    "url": "algorithm/data-structure/binary-tree.html",
    "revision": "00cb30f022e99a0fd4cfbbfa66d15547"
  },
  {
    "url": "algorithm/data-structure/doubly-linked-list.html",
    "revision": "8a7a46e56f6e76a0550bcb1f2f272a22"
  },
  {
    "url": "algorithm/data-structure/hash-table.html",
    "revision": "e626c2bc22f419fa94cad2253e3ee726"
  },
  {
    "url": "algorithm/data-structure/heap.html",
    "revision": "65320cd7cc3436ecc9f0dcb8d9520aa1"
  },
  {
    "url": "algorithm/data-structure/index.html",
    "revision": "0d90c2026c01aa05abd6bfe316e1efbf"
  },
  {
    "url": "algorithm/data-structure/linked-list.html",
    "revision": "4f73d394f68d5d2cf8eaba84fa80403d"
  },
  {
    "url": "algorithm/data-structure/priority-queue.html",
    "revision": "9eeb2205a624d6afb6e56c44121f83c4"
  },
  {
    "url": "algorithm/data-structure/queue.html",
    "revision": "71586cdf910a00a8f794ee9a9d243454"
  },
  {
    "url": "algorithm/data-structure/red-black-tree.html",
    "revision": "bef0a43a4cc3e20722baa827e5fd5912"
  },
  {
    "url": "algorithm/data-structure/segment-tree.html",
    "revision": "b54fb9d0be713b4468ebdd13548a3729"
  },
  {
    "url": "algorithm/data-structure/stack.html",
    "revision": "26e2ba01cac42edd014ca424ae8f9ef6"
  },
  {
    "url": "algorithm/data-structure/trie.html",
    "revision": "0161038b96d017d1f7878b1a990efd37"
  },
  {
    "url": "algorithm/index.html",
    "revision": "70f0f65f4b7276d8902f1121e3af6c7a"
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
    "url": "assets/js/10.f2a5834c.js",
    "revision": "5d98d39ad46618ac2c2f949b770e6aa6"
  },
  {
    "url": "assets/js/100.eaa016ab.js",
    "revision": "325d207d38ba989a4f02269649e87e12"
  },
  {
    "url": "assets/js/101.b3f50b6a.js",
    "revision": "3a650c134e8a5b6199c9635e078659ec"
  },
  {
    "url": "assets/js/102.410f8098.js",
    "revision": "22836bfb42404a7374091f52987982a6"
  },
  {
    "url": "assets/js/103.80615407.js",
    "revision": "9a0abea8a975f6d10cea1e8dd98cdd8a"
  },
  {
    "url": "assets/js/104.dff5d488.js",
    "revision": "a85bb98a37a86d20889eaac6b6b1ca62"
  },
  {
    "url": "assets/js/105.012f446b.js",
    "revision": "4647404d8d6e7d9b734f3354f71599a7"
  },
  {
    "url": "assets/js/11.62fc8b8c.js",
    "revision": "af6951d8058353a0ec3fa8698327abf3"
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
    "url": "assets/js/5.33516a4e.js",
    "revision": "27114a20a4fb34257f2ca673c449a578"
  },
  {
    "url": "assets/js/50.97f26ad1.js",
    "revision": "76f37cd70c37399342bc348d2d5fdded"
  },
  {
    "url": "assets/js/51.138002ec.js",
    "revision": "a96064bfbe3e87ae5dfab5789821dec6"
  },
  {
    "url": "assets/js/52.c442d2eb.js",
    "revision": "35a856927516ad5f845b4b6d824f5ced"
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
    "url": "assets/js/55.5ed74c63.js",
    "revision": "7e96b01a6ce20b8eb9b59a980c22fbbb"
  },
  {
    "url": "assets/js/56.792d1f54.js",
    "revision": "4ae93ad58a798c440d62ce74da65b9d7"
  },
  {
    "url": "assets/js/57.6b480a2d.js",
    "revision": "a9d172136e557ba873e84e7e31345f3e"
  },
  {
    "url": "assets/js/58.52483336.js",
    "revision": "80f15b3982b325e40522ecf9916e156a"
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
    "url": "assets/js/75.91b9c6b2.js",
    "revision": "7f771de7e55670cf77f070091b652730"
  },
  {
    "url": "assets/js/76.9f41f275.js",
    "revision": "cf604ee4bf7d6ea69941638f3b26ae89"
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
    "url": "assets/js/86.636b3f9f.js",
    "revision": "79c786da8f5fc63b9375679ad0a43fe3"
  },
  {
    "url": "assets/js/87.4c210092.js",
    "revision": "16d280b414ba1d1edf2c212b0142ed4d"
  },
  {
    "url": "assets/js/88.53e21a47.js",
    "revision": "fbbb9f969a578e17b4dab06bf2080802"
  },
  {
    "url": "assets/js/89.2e8a6bda.js",
    "revision": "bec3a09ded4182688f8fe4c3a9d78922"
  },
  {
    "url": "assets/js/9.5a360f50.js",
    "revision": "e0bd133dcd04e9fbf1ac4bdf5389bce1"
  },
  {
    "url": "assets/js/90.5060d66a.js",
    "revision": "90259aac9461d180de3c549b61dac74a"
  },
  {
    "url": "assets/js/91.18397765.js",
    "revision": "0c739134665de5515eab3bb0c1bc441b"
  },
  {
    "url": "assets/js/92.1465b8e5.js",
    "revision": "510829505178fbc492de7fcb730e8e83"
  },
  {
    "url": "assets/js/93.f3362f92.js",
    "revision": "268ac0bb7080f6fda675d5e44cd95da9"
  },
  {
    "url": "assets/js/94.eb2b8153.js",
    "revision": "de10b519eba74d4886a73dc3ae011381"
  },
  {
    "url": "assets/js/95.bfb0e4a4.js",
    "revision": "4fa7280bbb0ef89e16bf1f4696732988"
  },
  {
    "url": "assets/js/96.effad01b.js",
    "revision": "fec177ca002be402080e15bec3de0992"
  },
  {
    "url": "assets/js/97.5e013e76.js",
    "revision": "ec0b86ec2e44f8ddefda9af168db43c7"
  },
  {
    "url": "assets/js/98.b49a061b.js",
    "revision": "d92b978d3b93a7f2317cc7d374384a72"
  },
  {
    "url": "assets/js/99.6d03215d.js",
    "revision": "b256f52633d3f0458a1b56a074df0e65"
  },
  {
    "url": "assets/js/app.ebe3840d.js",
    "revision": "ac0a7dea3ccd85af373b0bdd15db8b10"
  },
  {
    "url": "assets/js/vendors~docsearch.a920cc49.js",
    "revision": "f9d228d23c26dd63baa4fa53c4259840"
  },
  {
    "url": "backend/index.html",
    "revision": "b72b910b51c7b850f5318e96b557fc78"
  },
  {
    "url": "backend/nodejs/events.html",
    "revision": "8f2f984795cd31e14ddf16ba1260e7cf"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "ea3f110f6f6f01dc13b094f74478762b"
  },
  {
    "url": "cs/index.html",
    "revision": "8c1bae61491d91ac4823b7bda0f9445c"
  },
  {
    "url": "cs/network/http.html",
    "revision": "ace1a024875837ecbdde83a80e6d7079"
  },
  {
    "url": "cs/network/index.html",
    "revision": "227a93780545b328ee65e8b3d57f6dbb"
  },
  {
    "url": "cs/os/index.html",
    "revision": "c3c18d6b83b6e9867bf54607b802f28b"
  },
  {
    "url": "frontend/browser/bom.html",
    "revision": "ff90275cf5cd51624c945ef2c59d0f9e"
  },
  {
    "url": "frontend/browser/cross-domain.html",
    "revision": "579624d8a6e6fe57e2bc04dfa59f7f90"
  },
  {
    "url": "frontend/browser/dom.html",
    "revision": "e682bdad5fe14b1f9c733a30c3a48079"
  },
  {
    "url": "frontend/browser/events.html",
    "revision": "e1b68b713be0796690ac53dd80da6ac5"
  },
  {
    "url": "frontend/browser/index.html",
    "revision": "e73bb0f7fb9052190e9cf22208507845"
  },
  {
    "url": "frontend/browser/memory-management.html",
    "revision": "e5570b61900408ca1c9a345d1acd6d87"
  },
  {
    "url": "frontend/browser/pwa.html",
    "revision": "4d0e8e8a5aa522bc04bec210ee597769"
  },
  {
    "url": "frontend/browser/render.html",
    "revision": "b4303f03bf4caceeb201206ecfa991e1"
  },
  {
    "url": "frontend/browser/storage.html",
    "revision": "336aeb809e329f01f583e82b2d3c6cbe"
  },
  {
    "url": "frontend/browser/web-performance.html",
    "revision": "8ee9c056c493e7aa6bb339ad7c93597b"
  },
  {
    "url": "frontend/browser/web-security.html",
    "revision": "8adf90fd974b020085bf9638f31baf5b"
  },
  {
    "url": "frontend/css/css-animations.html",
    "revision": "75319954aa3be9fa13e077bd2d419a49"
  },
  {
    "url": "frontend/css/css-border.html",
    "revision": "9394a9bbca1a1f42d79b07dd21c5d01d"
  },
  {
    "url": "frontend/css/css-box-model.html",
    "revision": "19466b39b024caffc1283925b5a25791"
  },
  {
    "url": "frontend/css/css-color-and-background-and-gradients.html",
    "revision": "375e5aa0649ddc4a8dea9893e81d9caf"
  },
  {
    "url": "frontend/css/css-css-and-documents.html",
    "revision": "36f05d9f136e7e8ecbe261ce3ecdae7b"
  },
  {
    "url": "frontend/css/css-filters-blending-clipping-masking.html",
    "revision": "dfe15c4eba81974fd0b16a6f5d241729"
  },
  {
    "url": "frontend/css/css-flexbox-layout.html",
    "revision": "a0618ddb421f52f83ff80f2968347b8c"
  },
  {
    "url": "frontend/css/css-floating.html",
    "revision": "8adc33bf043bdc0f0b1b0aaf2ab20fbc"
  },
  {
    "url": "frontend/css/css-fonts.html",
    "revision": "9e41185d5700114c27924603f26bd9d1"
  },
  {
    "url": "frontend/css/css-grid-layout.html",
    "revision": "dd8ee1ac97817c8d411572ce5f721c3a"
  },
  {
    "url": "frontend/css/css-positioning.html",
    "revision": "3381f128bb3b2d8c45fb8f16a33ff722"
  },
  {
    "url": "frontend/css/css-selectors.html",
    "revision": "49bd74198b2b736f09180722ef27ec82"
  },
  {
    "url": "frontend/css/css-shapes.html",
    "revision": "43b681cf75615c7478b7579479654c37"
  },
  {
    "url": "frontend/css/css-specificity-and-cascade.html",
    "revision": "2fc8d71c806b4a7134bb77c3ff734865"
  },
  {
    "url": "frontend/css/css-table-layout.html",
    "revision": "d5edf14f1471658925b55a43db56a851"
  },
  {
    "url": "frontend/css/css-text-properties.html",
    "revision": "7f64af71f5682e2b569a67e66fc0c79b"
  },
  {
    "url": "frontend/css/css-transforms.html",
    "revision": "f0ec9c4a1f02b7881e8f27c16953699a"
  },
  {
    "url": "frontend/css/css-transitions.html",
    "revision": "955ff2dfa113272c9d689907de4f0ecd"
  },
  {
    "url": "frontend/css/css-values-and-units.html",
    "revision": "089204c1d2e6c8f6d0603c03cc90da27"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "04cbb1f590b12b13786b391d9d72f7f4"
  },
  {
    "url": "frontend/index.html",
    "revision": "43f2cc869989919d84cf9bbb83adf26f"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "56742bb5d317ae5f9fb09505e6ed98a1"
  },
  {
    "url": "frontend/js/js-control-flow-and-error-handling.html",
    "revision": "2384a1b9b0991c10551795522e568b7c"
  },
  {
    "url": "frontend/js/js-es2020.html",
    "revision": "3e736c9347cbf9d908bdce05257162bc"
  },
  {
    "url": "frontend/js/js-es2021.html",
    "revision": "d91b666cc2ef6aaf95816473ecc4866f"
  },
  {
    "url": "frontend/js/js-expressions-and-operators.html",
    "revision": "e1b7194ecaaccc6175619cabdbea053b"
  },
  {
    "url": "frontend/js/js-functions.html",
    "revision": "8f47d1a1962c36a8f972ec69db8a90bf"
  },
  {
    "url": "frontend/js/js-grammar-and-types.html",
    "revision": "8f20d97f87a4c930e6531181aaa461af"
  },
  {
    "url": "frontend/js/js-in-html.html",
    "revision": "cd26c9394907295dbd2d2d25b239144d"
  },
  {
    "url": "frontend/js/js-indexed-collections.html",
    "revision": "711fc541ba0a6f5dd343c51b60e07c86"
  },
  {
    "url": "frontend/js/js-iterators-and-generators.html",
    "revision": "9d277bd3bbc025dabdca6a35bc20672b"
  },
  {
    "url": "frontend/js/js-keyed-collections.html",
    "revision": "bbe942b97452844adb11e26a6049bfc8"
  },
  {
    "url": "frontend/js/js-meta-programming.html",
    "revision": "c668e7703cdcfeb094508e9166bfa76d"
  },
  {
    "url": "frontend/js/js-modules.html",
    "revision": "66fbc6d8272916dc8bc9399787790cc3"
  },
  {
    "url": "frontend/js/js-numbers-and-dates.html",
    "revision": "025623539d33d436f775122aa394105b"
  },
  {
    "url": "frontend/js/js-promises.html",
    "revision": "9c20c0ffce21f95a78437ed9cf5c4732"
  },
  {
    "url": "frontend/js/js-regular-expressions.html",
    "revision": "2389aa24c51cbe202c2bdf2112f4e3ea"
  },
  {
    "url": "frontend/js/js-strict-mode.html",
    "revision": "0ab8f1b052f9f9bf0f8e8d072bfd9cbe"
  },
  {
    "url": "frontend/js/js-text-formatting.html",
    "revision": "e95c8cd5c44169e4289838e6ceecaa4e"
  },
  {
    "url": "frontend/js/js-working-with-objects.html",
    "revision": "fc0d714938e912115a6cec82768af57c"
  },
  {
    "url": "frontend/vue/basic.html",
    "revision": "a68e97704f21bc08d715a069c7041896"
  },
  {
    "url": "frontend/vue/data-driven.html",
    "revision": "a67b14849d8bbde15906095e620f06ce"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "3b0708345a76b25f289a98fba97a9ee3"
  },
  {
    "url": "frontend/vue/next-tick.html",
    "revision": "0692c779d4fc1a07f1f3612ae8461e7f"
  },
  {
    "url": "frontend/vue/reactivity.html",
    "revision": "6c2958bd980544c1e2ddd3d081cec531"
  },
  {
    "url": "frontend/vue/vue-router.html",
    "revision": "873f8181a8bc068f22c4c15bc34be875"
  },
  {
    "url": "frontend/vue/vuex.html",
    "revision": "3e26f48bd25ddaec0d442d35e6850125"
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
    "revision": "96f8a41466e52e71f39111e8f8c97cb2"
  },
  {
    "url": "interview/css.html",
    "revision": "355eac28bf852039682d4da9117a9f63"
  },
  {
    "url": "interview/html.html",
    "revision": "9afcc7a32bbe80c854159bb3d7530905"
  },
  {
    "url": "interview/index.html",
    "revision": "19175f85a9602669e3ef4da21406bec2"
  },
  {
    "url": "interview/javascript.html",
    "revision": "93d587cc246744028222cc917e3db0d0"
  },
  {
    "url": "interview/mobile-web.html",
    "revision": "970655fa728df943783d800de504e747"
  },
  {
    "url": "logo.png",
    "revision": "d8d70a56ece354e7f87ff3c675e28928"
  },
  {
    "url": "thinking/design-patterns/index.html",
    "revision": "be041268d3ff1eab971773c76be27eb0"
  },
  {
    "url": "thinking/index.html",
    "revision": "0611b798d6dd1576420d9d3a927bd2a4"
  },
  {
    "url": "tools/git.html",
    "revision": "8677541dceb2d802158f743e19efa0c8"
  },
  {
    "url": "tools/index.html",
    "revision": "7031b0ed9adf0951957e50a1f3afd10f"
  },
  {
    "url": "tools/linux.html",
    "revision": "e2a9129835444391503c2d8b7fb49eb4"
  },
  {
    "url": "tools/nginx.html",
    "revision": "8df364a6fb3047a1c3291bb2927fc01c"
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
