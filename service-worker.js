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
    "revision": "41ffe63e3d7c2f7414c8452ed8ac5335"
  },
  {
    "url": "about/index.html",
    "revision": "190abd3ee8eab09464532e55fd8a65fa"
  },
  {
    "url": "algorithm/algorithms/array-sorting-algorithms.html",
    "revision": "ef6281a4cee2cc1d972f9e056227088c"
  },
  {
    "url": "algorithm/algorithms/index.html",
    "revision": "ff9da6a1383277fe800288b7a0a4e267"
  },
  {
    "url": "algorithm/data-structure/avl-tree.html",
    "revision": "3e1aca364e94b0738cb76b809ea7b9e5"
  },
  {
    "url": "algorithm/data-structure/binary-search-tree.html",
    "revision": "e4eb2a10c1eabfc818cebce253abd756"
  },
  {
    "url": "algorithm/data-structure/binary-tree.html",
    "revision": "ce4845e49cd475ac6ca0ad9a5178cbc4"
  },
  {
    "url": "algorithm/data-structure/doubly-linked-list.html",
    "revision": "2839cbd11cda7388e175315ccb10a0e9"
  },
  {
    "url": "algorithm/data-structure/hash-table.html",
    "revision": "71d3b25d1629eeef74e740808c89789b"
  },
  {
    "url": "algorithm/data-structure/heap.html",
    "revision": "294cb49298aeed32b43c1f878abe4cda"
  },
  {
    "url": "algorithm/data-structure/index.html",
    "revision": "dd8a6dc38d0929c7824184a45c0d8923"
  },
  {
    "url": "algorithm/data-structure/linked-list.html",
    "revision": "b8e1adcde2d3fa83fe1d9e20bae2e376"
  },
  {
    "url": "algorithm/data-structure/priority-queue.html",
    "revision": "56cce7d7350e349c56f3aa348a3cd3a1"
  },
  {
    "url": "algorithm/data-structure/queue.html",
    "revision": "492388704d9db9e4d16a2611656c5a4e"
  },
  {
    "url": "algorithm/data-structure/red-black-tree.html",
    "revision": "d274c452bc17d59cb4c35b46aaec5ae2"
  },
  {
    "url": "algorithm/data-structure/segment-tree.html",
    "revision": "85664c20a71a802f182be1c4e3d9c827"
  },
  {
    "url": "algorithm/data-structure/stack.html",
    "revision": "346dde5430745c602fd982b5e9e94603"
  },
  {
    "url": "algorithm/data-structure/trie.html",
    "revision": "7c15ee5e7dc73b0cc29a376242a9c478"
  },
  {
    "url": "algorithm/index.html",
    "revision": "77d69fd322e39a2bf5c0e366189fec6f"
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
    "url": "assets/js/10.017d059f.js",
    "revision": "b3c55474cf6939029f3f1f9925873eac"
  },
  {
    "url": "assets/js/100.4401ffac.js",
    "revision": "81f09e697b5b04bfa5380f2c5b5930f5"
  },
  {
    "url": "assets/js/101.48986d04.js",
    "revision": "f3bffe12165d865ca8e17d9993a654c7"
  },
  {
    "url": "assets/js/102.d00e7e86.js",
    "revision": "84a96e2372808603d35cabce79bb029b"
  },
  {
    "url": "assets/js/103.077bab1e.js",
    "revision": "ed1b6aa653f6914b84f96d8c3d033c61"
  },
  {
    "url": "assets/js/104.72ad1dff.js",
    "revision": "67b149fc3772d7500193178c705fc279"
  },
  {
    "url": "assets/js/105.84663f38.js",
    "revision": "0eb5c9a2bba478680be16c0ccd88f434"
  },
  {
    "url": "assets/js/106.8abb54e7.js",
    "revision": "3f7b966fe1859e63b13a1b2fad6ec2de"
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
    "url": "assets/js/36.8dbc1624.js",
    "revision": "9aeaf0f9caf10f75eddd24d2bd8514ac"
  },
  {
    "url": "assets/js/37.8fafed28.js",
    "revision": "31eb0b428769b2acbfd5bbdc9ec00048"
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
    "url": "assets/js/41.80800c37.js",
    "revision": "8e752c031715f247fdf8671e96eb1d5a"
  },
  {
    "url": "assets/js/42.cf2cedd9.js",
    "revision": "ce7d609e6cc823358ec4952d6db9340a"
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
    "url": "assets/js/5.6f8d6659.js",
    "revision": "2580f84e8ec52e67ff848cb78e780b68"
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
    "url": "assets/js/56.b04c2511.js",
    "revision": "28e054682c50bfec1e266e16bf15c02e"
  },
  {
    "url": "assets/js/57.6b480a2d.js",
    "revision": "a9d172136e557ba873e84e7e31345f3e"
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
    "url": "assets/js/60.2a53217d.js",
    "revision": "ebe3c3a121b4d1329fc967e9849a142c"
  },
  {
    "url": "assets/js/61.10318f41.js",
    "revision": "372ed9bf3876c6f4113d7247df9d1a11"
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
    "url": "assets/js/71.717cd19c.js",
    "revision": "f6d83eb6ecebaaa2b717ad708daa317f"
  },
  {
    "url": "assets/js/72.a3fb15cb.js",
    "revision": "3e3d302bd0987cf2ca0fddc210567c5a"
  },
  {
    "url": "assets/js/73.3d27fbca.js",
    "revision": "6d5720415ae658ea443fd28b84e21ba2"
  },
  {
    "url": "assets/js/74.fc3b47c2.js",
    "revision": "f55852938a0d4407eb5503b95a9d1a04"
  },
  {
    "url": "assets/js/75.fd7b5553.js",
    "revision": "f1bff83c85ec287c4fa498c21a6161e8"
  },
  {
    "url": "assets/js/76.a06b3dd3.js",
    "revision": "b721b151d94e9e1d1f9b5f5d36ec0e29"
  },
  {
    "url": "assets/js/77.670e83dd.js",
    "revision": "b8ec6b4b46e5f348d73aab368eda29ec"
  },
  {
    "url": "assets/js/78.42885d0a.js",
    "revision": "8dcfb161529383e49b66b3e019934b5e"
  },
  {
    "url": "assets/js/79.7b8ceeff.js",
    "revision": "7bf1a8a1b1659b40c6d2fd02d773df54"
  },
  {
    "url": "assets/js/8.ec9df493.js",
    "revision": "1d41d4a2e659637b375d7f71f9e233e4"
  },
  {
    "url": "assets/js/80.d2edcadc.js",
    "revision": "d13e398759869fc3523391623b6bcdaf"
  },
  {
    "url": "assets/js/81.64d50539.js",
    "revision": "236e998fbd78e5faaec83593486ef1e5"
  },
  {
    "url": "assets/js/82.fdae11b8.js",
    "revision": "9a38e097df41227f037b7d5ac5dfe0a3"
  },
  {
    "url": "assets/js/83.c14cec5e.js",
    "revision": "dc332372b54e6c1ea0a7ef3801928464"
  },
  {
    "url": "assets/js/84.a5f0161d.js",
    "revision": "946a338024748f02369f8f17cef46a1e"
  },
  {
    "url": "assets/js/85.30866fef.js",
    "revision": "7d3569999d9d84665f6bb0eb4ac6cadf"
  },
  {
    "url": "assets/js/86.026b5890.js",
    "revision": "26bed093844551ce3d03ffc0bc39cc95"
  },
  {
    "url": "assets/js/87.8116012f.js",
    "revision": "92d6727e8a26bc6fa5adbd936174457d"
  },
  {
    "url": "assets/js/88.32fcd960.js",
    "revision": "c5c00d75daed1d0ce803c836aac2140b"
  },
  {
    "url": "assets/js/89.1f503a18.js",
    "revision": "ea6951a74be885b4dd98a787aa68e6ce"
  },
  {
    "url": "assets/js/9.5bf45744.js",
    "revision": "77d7543a8a0111a245b2b3c3624255c9"
  },
  {
    "url": "assets/js/90.19e6102e.js",
    "revision": "a7c245318a9e646721c4ce255757801b"
  },
  {
    "url": "assets/js/91.456a587c.js",
    "revision": "ae5003ac5c62496232975c9740ee76c8"
  },
  {
    "url": "assets/js/92.9e482bc4.js",
    "revision": "3f67a1512d55e52619526e17d561cb44"
  },
  {
    "url": "assets/js/93.000e573c.js",
    "revision": "b829522658b04193b54b29fb8f80e6f2"
  },
  {
    "url": "assets/js/94.9bc77bb7.js",
    "revision": "bf439f6048777660f3e7f7d682f802de"
  },
  {
    "url": "assets/js/95.4647bbf5.js",
    "revision": "140f2fe2128d2b702ec25e897584927c"
  },
  {
    "url": "assets/js/96.0e61c784.js",
    "revision": "822d2a2eb5899b1b8c51951558c83039"
  },
  {
    "url": "assets/js/97.96cadf3d.js",
    "revision": "1719b796ac1c3852df556973a0faf543"
  },
  {
    "url": "assets/js/98.8d906f3b.js",
    "revision": "7bb953aabf8035b81f3483b48ead2c18"
  },
  {
    "url": "assets/js/99.53401bb8.js",
    "revision": "dc096d01b39e358c37d6c3c800a5afbd"
  },
  {
    "url": "assets/js/app.22f3f739.js",
    "revision": "154e49d009a53858d4aedcad6a58632c"
  },
  {
    "url": "assets/js/vendors~docsearch.a920cc49.js",
    "revision": "f9d228d23c26dd63baa4fa53c4259840"
  },
  {
    "url": "backend/index.html",
    "revision": "693a6a038852c4759fb79f2aca78d9aa"
  },
  {
    "url": "backend/nodejs/events.html",
    "revision": "96f7c002e915ce2d0ebea52434f0e82e"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "161ac30547e5f4fd632ee0cde9e4ecb6"
  },
  {
    "url": "cs/index.html",
    "revision": "e7e7e7dd8c938971dd64a105e3fb1412"
  },
  {
    "url": "cs/network/http.html",
    "revision": "547aedf5429c188f47e324388e78efb9"
  },
  {
    "url": "cs/network/index.html",
    "revision": "582bc16ffc1439957318eebde7be83a2"
  },
  {
    "url": "cs/os/index.html",
    "revision": "f742a17ca3821c2f6511d9fc0b50e4b2"
  },
  {
    "url": "frontend/browser/bom.html",
    "revision": "88155bbec72d74eac044ed3266dd485c"
  },
  {
    "url": "frontend/browser/cross-domain.html",
    "revision": "4ffc8580d92ac1e34820fedbd2c57f60"
  },
  {
    "url": "frontend/browser/dom.html",
    "revision": "7226fe70651b8b501a77b81416a7ce8f"
  },
  {
    "url": "frontend/browser/events.html",
    "revision": "4f15798c7beef409c122c5b4811e3270"
  },
  {
    "url": "frontend/browser/index.html",
    "revision": "00c210d16abbe4edbe75e4a2b8048be3"
  },
  {
    "url": "frontend/browser/memory-management.html",
    "revision": "148554aa15f6d0fa23cf987814672b3e"
  },
  {
    "url": "frontend/browser/pwa.html",
    "revision": "fcc10ad7b7496d2657c78c223355de76"
  },
  {
    "url": "frontend/browser/render.html",
    "revision": "5eabc565b52d348103ae3f8752fa6281"
  },
  {
    "url": "frontend/browser/storage.html",
    "revision": "9dd3fd46af2998ffeb986b0fb99d8443"
  },
  {
    "url": "frontend/browser/web-performance.html",
    "revision": "e041131456703ecf66e4331fd3f19a86"
  },
  {
    "url": "frontend/browser/web-security.html",
    "revision": "bf2614f039c9dc2bed5cba36bb23a96c"
  },
  {
    "url": "frontend/css/css-animations.html",
    "revision": "815ba1eb0bf056324eb8e025528f3048"
  },
  {
    "url": "frontend/css/css-border.html",
    "revision": "7f5003f5454106cbbd856c174587db09"
  },
  {
    "url": "frontend/css/css-box-model.html",
    "revision": "4b5b5b30c24ad8167db20e7344c0380b"
  },
  {
    "url": "frontend/css/css-color-and-background-and-gradients.html",
    "revision": "930faba10cadac8a61b375c3d46ef959"
  },
  {
    "url": "frontend/css/css-css-and-documents.html",
    "revision": "7f9256b3d53ad4004c8eaf6174fe8e51"
  },
  {
    "url": "frontend/css/css-filters-blending-clipping-masking.html",
    "revision": "1255e419d52fa1e53e5f56fc7325e998"
  },
  {
    "url": "frontend/css/css-flexbox-layout.html",
    "revision": "464b4a2565223952aceb4d696d7ce5e7"
  },
  {
    "url": "frontend/css/css-floating.html",
    "revision": "e7327a212ed56c157a08be410a59fd19"
  },
  {
    "url": "frontend/css/css-fonts.html",
    "revision": "8e8b788176166a55fc47bacda521631e"
  },
  {
    "url": "frontend/css/css-grid-layout.html",
    "revision": "998edbdfcb243628de8be765c2555bc7"
  },
  {
    "url": "frontend/css/css-positioning.html",
    "revision": "3af918a8e65c6fb2a874c182609a550a"
  },
  {
    "url": "frontend/css/css-selectors.html",
    "revision": "6787b8333cccc761ba70c6e22263b84a"
  },
  {
    "url": "frontend/css/css-shapes.html",
    "revision": "6221b2978f6f095ea95756085f3acce5"
  },
  {
    "url": "frontend/css/css-specificity-and-cascade.html",
    "revision": "987ac4d41e353e97585b3fc19966f822"
  },
  {
    "url": "frontend/css/css-table-layout.html",
    "revision": "48bdd8743559c48e0fc4404660f47309"
  },
  {
    "url": "frontend/css/css-text-properties.html",
    "revision": "a175d78e840ccf0349cbb42806c8bca4"
  },
  {
    "url": "frontend/css/css-transforms.html",
    "revision": "a170e61f60f2bc5af6ead1df49abd6e6"
  },
  {
    "url": "frontend/css/css-transitions.html",
    "revision": "fdadebb514141738cf5c50b161086751"
  },
  {
    "url": "frontend/css/css-values-and-units.html",
    "revision": "dd5966cf595415fa1d0ec94ebeffb03a"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "4e6b9811b458a1d2635a96ddb852ed0d"
  },
  {
    "url": "frontend/index.html",
    "revision": "1a753ffa58486173c117b4837440e941"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "1991c92e5de50a8aed0cfeb4c6c25d7a"
  },
  {
    "url": "frontend/js/js-control-flow-and-error-handling.html",
    "revision": "8bbcc0bfcf2733f113d0708692ffaba5"
  },
  {
    "url": "frontend/js/js-es2020.html",
    "revision": "df8cd9d1843898696a237d6f047b0d7a"
  },
  {
    "url": "frontend/js/js-es2021.html",
    "revision": "4f30d3bc00b11292a86341482404fb5f"
  },
  {
    "url": "frontend/js/js-es2022.html",
    "revision": "23ce64168c247624ed915a87ec72256b"
  },
  {
    "url": "frontend/js/js-expressions-and-operators.html",
    "revision": "af4318bf5afcb8e7534e1ca212366f11"
  },
  {
    "url": "frontend/js/js-functions.html",
    "revision": "5e8da3a2493dd4527386d49fb8e68433"
  },
  {
    "url": "frontend/js/js-grammar-and-types.html",
    "revision": "3a7ead69bbf2d2dab57a84ef48d62396"
  },
  {
    "url": "frontend/js/js-in-html.html",
    "revision": "7018e5d23eda5c98e0e1714f021e3fb2"
  },
  {
    "url": "frontend/js/js-indexed-collections.html",
    "revision": "d3ee57f6c22b6830364b28132e732675"
  },
  {
    "url": "frontend/js/js-iterators-and-generators.html",
    "revision": "f2fb3424d6bd98f8ef93e78d7f1b079e"
  },
  {
    "url": "frontend/js/js-keyed-collections.html",
    "revision": "e0de3b8e387aedea47df7c87d6256c07"
  },
  {
    "url": "frontend/js/js-meta-programming.html",
    "revision": "fea9e3d281f4ff10422591af08247dc4"
  },
  {
    "url": "frontend/js/js-modules.html",
    "revision": "761438d06e7c63fa4ef9403e062d78ac"
  },
  {
    "url": "frontend/js/js-numbers-and-dates.html",
    "revision": "394709903d57bf173af654d68e7f5024"
  },
  {
    "url": "frontend/js/js-promises.html",
    "revision": "6e58070bf70adc500ac01552d8504888"
  },
  {
    "url": "frontend/js/js-regular-expressions.html",
    "revision": "0a3e02f364ed9bfa536ff1e0b1d4fc42"
  },
  {
    "url": "frontend/js/js-strict-mode.html",
    "revision": "bd87f7a18d5f64ed1435e07d29004956"
  },
  {
    "url": "frontend/js/js-text-formatting.html",
    "revision": "23e36539c8e79d5d3e25507e8f3722a3"
  },
  {
    "url": "frontend/js/js-working-with-objects.html",
    "revision": "1fb320580c257359f3114987b7f40fec"
  },
  {
    "url": "frontend/vue/basic.html",
    "revision": "42854eae8cc5288bab42528a2e26cdae"
  },
  {
    "url": "frontend/vue/data-driven.html",
    "revision": "1dba80a5bc5d1b10a9445a2313b46cdd"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "e11d2436f0d2c0ed5a8a601ac7aab97f"
  },
  {
    "url": "frontend/vue/next-tick.html",
    "revision": "e40e807e5ff4c5e05f8747aa8db665c3"
  },
  {
    "url": "frontend/vue/reactivity.html",
    "revision": "f95b4dc301ae310f49c79319656852f1"
  },
  {
    "url": "frontend/vue/vue-router.html",
    "revision": "c2b54cc7fab9d263306cd0b8de79e5d8"
  },
  {
    "url": "frontend/vue/vuex.html",
    "revision": "98dd001df11b4cee8d8c86807a2972e6"
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
    "revision": "9534f22130a710e59625267f8eb3ff41"
  },
  {
    "url": "interview/css.html",
    "revision": "81f5d06223abcf529cd4fa1704a908eb"
  },
  {
    "url": "interview/html.html",
    "revision": "7b616ff961cb16003d02392d5a247660"
  },
  {
    "url": "interview/index.html",
    "revision": "9e55b0e60d2ec598788f79a473407f4e"
  },
  {
    "url": "interview/javascript.html",
    "revision": "b5624ef59ffdb1e0174b4c92c14ecfbb"
  },
  {
    "url": "interview/mobile-web.html",
    "revision": "2bbcc5ab05150eb09d3ac794e5a4a8c1"
  },
  {
    "url": "logo.png",
    "revision": "d8d70a56ece354e7f87ff3c675e28928"
  },
  {
    "url": "thinking/design-patterns/index.html",
    "revision": "7d2dffa1ee893a375defaaa9c00b5e07"
  },
  {
    "url": "thinking/index.html",
    "revision": "608a5a5e03868f059d4a07ddbde03605"
  },
  {
    "url": "tools/git.html",
    "revision": "69f9db93d1cf17e60af0267b5af68c1e"
  },
  {
    "url": "tools/index.html",
    "revision": "970743197d3a4c692362b3dfeb7ffd33"
  },
  {
    "url": "tools/linux.html",
    "revision": "c57b45e25ee64c68a413c181089144e4"
  },
  {
    "url": "tools/nginx.html",
    "revision": "ba5e69f9df88d3e2de5b24e92a186288"
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
