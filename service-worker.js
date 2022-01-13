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
    "revision": "bed1c15193ae27b58295ff9ca5b0c6dd"
  },
  {
    "url": "about/index.html",
    "revision": "858b21067eeb9f549b842207665310fe"
  },
  {
    "url": "algorithm/algorithms/array-sorting-algorithms.html",
    "revision": "bca0ebb5005c068ee277df8d9a641016"
  },
  {
    "url": "algorithm/algorithms/index.html",
    "revision": "7a342c656b58cdfada08624da2e5d091"
  },
  {
    "url": "algorithm/data-structure/avl-tree.html",
    "revision": "971ed857e5d0c20441f84732bddb42c6"
  },
  {
    "url": "algorithm/data-structure/binary-search-tree.html",
    "revision": "bb32110761903f4484e35b6c7abac16c"
  },
  {
    "url": "algorithm/data-structure/binary-tree.html",
    "revision": "37f5a91598a20a8ef9bb6a799aa2e77d"
  },
  {
    "url": "algorithm/data-structure/doubly-linked-list.html",
    "revision": "4c3380b2923020e9f55c2c177a9677d9"
  },
  {
    "url": "algorithm/data-structure/hash-table.html",
    "revision": "5ddb235809b58aedb479339c97d37de6"
  },
  {
    "url": "algorithm/data-structure/heap.html",
    "revision": "11a110bf65c2df9f0e41bcf9dfc5a58a"
  },
  {
    "url": "algorithm/data-structure/index.html",
    "revision": "3af8d04dde9a472a500bf18f88fc8f3b"
  },
  {
    "url": "algorithm/data-structure/linked-list.html",
    "revision": "3714e3fbf1551ad5ae3d641c6caac6c5"
  },
  {
    "url": "algorithm/data-structure/priority-queue.html",
    "revision": "a52e2b0d88e1f35df7d43d0428fc9816"
  },
  {
    "url": "algorithm/data-structure/queue.html",
    "revision": "e3319a9592dd99eeed685026c6b0636e"
  },
  {
    "url": "algorithm/data-structure/red-black-tree.html",
    "revision": "c82013284cb7d9f99f0d703c0bec940c"
  },
  {
    "url": "algorithm/data-structure/segment-tree.html",
    "revision": "91771ba70b71680620d7e572cee59414"
  },
  {
    "url": "algorithm/data-structure/stack.html",
    "revision": "6af4e31fe480acb8c1787fe56e6c463b"
  },
  {
    "url": "algorithm/data-structure/trie.html",
    "revision": "fb5a259ad655857e6a68825c0efdc28c"
  },
  {
    "url": "algorithm/index.html",
    "revision": "8677e8102594732520fe1a762161ddcb"
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
    "url": "assets/js/17.0f525b89.js",
    "revision": "c5643c6682ab5c3179055c22f8eb913a"
  },
  {
    "url": "assets/js/18.75f00258.js",
    "revision": "482b9dc436d7981e40757dcd41421e40"
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
    "url": "assets/js/48.87b09260.js",
    "revision": "c5e9a604294deb8301b35e3dc1d6b53f"
  },
  {
    "url": "assets/js/49.b2d016cf.js",
    "revision": "9cec08eb253ad1251ef7641ddb1ee8c7"
  },
  {
    "url": "assets/js/5.adaf2a64.js",
    "revision": "98ccb3604048cf3f8b06db69d3c6ad96"
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
    "url": "assets/js/55.ddf387b4.js",
    "revision": "3839df166ca8d7cf39deb8cb469afd14"
  },
  {
    "url": "assets/js/56.6c819533.js",
    "revision": "31cb8398782861c8998662bb75fe2b32"
  },
  {
    "url": "assets/js/57.6f312928.js",
    "revision": "4bd7dbf381c6896d378d0a87b4dcd9ea"
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
    "url": "assets/js/78.75010d91.js",
    "revision": "1ad69ed31d1b257b23bae3690d7912ad"
  },
  {
    "url": "assets/js/79.43b0237f.js",
    "revision": "a9e97fdec49faf67ec81a8d1761ed00c"
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
    "url": "assets/js/82.0b24c629.js",
    "revision": "e32f36660310ed42ec1880f33d0405ab"
  },
  {
    "url": "assets/js/83.22bcde09.js",
    "revision": "0424a9f19045335d23f9aa8f60952b58"
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
    "url": "assets/js/93.794eee6c.js",
    "revision": "caa529c27aae2eb1cb622d1e1c6891cd"
  },
  {
    "url": "assets/js/94.ab86d78d.js",
    "revision": "a3ea98f6c86deb75027e34e8ae346df7"
  },
  {
    "url": "assets/js/app.7fa09bf5.js",
    "revision": "47499ed4775ef98eedd7d214eaed61ba"
  },
  {
    "url": "assets/js/vendors~docsearch.a920cc49.js",
    "revision": "f9d228d23c26dd63baa4fa53c4259840"
  },
  {
    "url": "backend/index.html",
    "revision": "3e5afc52546c3589b1cc678ce1f0f37b"
  },
  {
    "url": "backend/nodejs/events.html",
    "revision": "276bdd7037c09c933987f0fc8c3ede99"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "f72476a5eccb5dd7db8da898f152a2bc"
  },
  {
    "url": "cs/index.html",
    "revision": "b028578c339ebc71976f8b92cadddd3f"
  },
  {
    "url": "cs/network/http.html",
    "revision": "a0dbdb4567e26e8d5bb1bf48f4148950"
  },
  {
    "url": "cs/network/index.html",
    "revision": "b795432f8802d4cd536867e98852a15e"
  },
  {
    "url": "cs/os/index.html",
    "revision": "d10621c80f54e1722b88ad1bb8c5a6a6"
  },
  {
    "url": "frontend/browser/bom.html",
    "revision": "4d181512cd351267f809f233dd75f20a"
  },
  {
    "url": "frontend/browser/cross-domain.html",
    "revision": "c6d4f54ecf9b713550553315dee291a4"
  },
  {
    "url": "frontend/browser/dom.html",
    "revision": "087234a90fa1c84d6d917a90fc3bca63"
  },
  {
    "url": "frontend/browser/events.html",
    "revision": "29d2679906ca0a32a65c48c5cce4540a"
  },
  {
    "url": "frontend/browser/index.html",
    "revision": "30809e1b5c36b8ff39b66d7d1fd8b4ea"
  },
  {
    "url": "frontend/browser/memory-management.html",
    "revision": "53381bd8840fcce36dd89dd717c34535"
  },
  {
    "url": "frontend/browser/pwa.html",
    "revision": "4154887616f8141c32d6ed24b2cbac2c"
  },
  {
    "url": "frontend/browser/render.html",
    "revision": "00c92cd5ec89f7e7dcf1ed80cb08ccff"
  },
  {
    "url": "frontend/browser/storage.html",
    "revision": "07038c793ef1b7cc0e00a1ae4abe3a2e"
  },
  {
    "url": "frontend/browser/web-performance.html",
    "revision": "425054fa2b07a2c472d7acfe26da7e26"
  },
  {
    "url": "frontend/browser/web-security.html",
    "revision": "eaae96cbd23de17d33decb18852bc263"
  },
  {
    "url": "frontend/css/css-animations.html",
    "revision": "5ef83f44c14149a026738e3e5dad50cd"
  },
  {
    "url": "frontend/css/css-border.html",
    "revision": "7025f458e018a196d4807dad7c296b4a"
  },
  {
    "url": "frontend/css/css-box-model.html",
    "revision": "9eca0ac00b1efc2603ce14468b3816d1"
  },
  {
    "url": "frontend/css/css-color-and-background-and-gradients.html",
    "revision": "01e9e0ada2f10b85838e3b3a134e41e1"
  },
  {
    "url": "frontend/css/css-css-and-documents.html",
    "revision": "c85dd72d6cb3be03e0a7cb1dc20d8fd7"
  },
  {
    "url": "frontend/css/css-filters-blending-clipping-masking.html",
    "revision": "66db3ceec1b77f3c81dc7bcf8e08d641"
  },
  {
    "url": "frontend/css/css-flexbox-layout.html",
    "revision": "c7b42e15c44a82644de3731fc8a5af42"
  },
  {
    "url": "frontend/css/css-floating.html",
    "revision": "4c79ba2f0fa1c39788fb290bb13142ba"
  },
  {
    "url": "frontend/css/css-fonts.html",
    "revision": "f4bf007c7a4a27dcbaa399ce13b14314"
  },
  {
    "url": "frontend/css/css-grid-layout.html",
    "revision": "d037298be1b7140721fc549e5b4d29a3"
  },
  {
    "url": "frontend/css/css-positioning.html",
    "revision": "2850e589eb773397b7d125a365cb6745"
  },
  {
    "url": "frontend/css/css-selectors.html",
    "revision": "c970aaed30b92bd3ce4a7520af12dfb6"
  },
  {
    "url": "frontend/css/css-shapes.html",
    "revision": "7fc63c5bc24f8a16b98e008db90795d2"
  },
  {
    "url": "frontend/css/css-specificity-and-cascade.html",
    "revision": "4dde3a3f8545495341277566513e31b4"
  },
  {
    "url": "frontend/css/css-table-layout.html",
    "revision": "df44d7aa972cca27a33956ebbbcc0b05"
  },
  {
    "url": "frontend/css/css-text-properties.html",
    "revision": "680b21ae2faa8551dd03fb6e96d43431"
  },
  {
    "url": "frontend/css/css-transforms.html",
    "revision": "1de477eb2e0baac7097c4ed4a7f230a2"
  },
  {
    "url": "frontend/css/css-transitions.html",
    "revision": "426c3ddee937a9d72d3b7dd960285ed9"
  },
  {
    "url": "frontend/css/css-values-and-units.html",
    "revision": "023123752a992c725c991769771f1be9"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "04ce05ea85407faddef03fd775cd8bb9"
  },
  {
    "url": "frontend/index.html",
    "revision": "7aa15cc80d8611963914cdd024100b75"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "107b5028671480db966a1d465da68c1b"
  },
  {
    "url": "frontend/js/js-control-flow-and-error-handling.html",
    "revision": "aa187f021995f4b1c3346c50356ba5d0"
  },
  {
    "url": "frontend/js/js-es2020.html",
    "revision": "8ba93de3c060ce28304b1e3ac530a8d0"
  },
  {
    "url": "frontend/js/js-es2021.html",
    "revision": "6af5b7c7a8be13cb47b85ce33ec8516d"
  },
  {
    "url": "frontend/js/js-expressions-and-operators.html",
    "revision": "22032974db0d931ca52e36b281993f93"
  },
  {
    "url": "frontend/js/js-functions.html",
    "revision": "a91255f407a4be0cf2e2629e4236770f"
  },
  {
    "url": "frontend/js/js-grammar-and-types.html",
    "revision": "cc95295d0d7b703a08de7b5e7ff642ba"
  },
  {
    "url": "frontend/js/js-in-html.html",
    "revision": "8e0129807e6ef84812b907144ff64195"
  },
  {
    "url": "frontend/js/js-indexed-collections.html",
    "revision": "f687a540ddbd65fd6a1b9e0970004b19"
  },
  {
    "url": "frontend/js/js-iterators-and-generators.html",
    "revision": "8a62cbbf2b3adf067d5f2ed90df037e5"
  },
  {
    "url": "frontend/js/js-keyed-collections.html",
    "revision": "569b5e2be46e84d60efe9d4e14939f5e"
  },
  {
    "url": "frontend/js/js-meta-programming.html",
    "revision": "2f4d933316ca38427acd766397139f87"
  },
  {
    "url": "frontend/js/js-modules.html",
    "revision": "7b370b8e15a6accd5fe929c1799534b4"
  },
  {
    "url": "frontend/js/js-numbers-and-dates.html",
    "revision": "fb4d45cbe2dfb76e71383a9526008072"
  },
  {
    "url": "frontend/js/js-promises.html",
    "revision": "5eebc55e8b971f1f1e21d78e98790780"
  },
  {
    "url": "frontend/js/js-regular-expressions.html",
    "revision": "8f92de3bb29ab0344d71139c3d84b325"
  },
  {
    "url": "frontend/js/js-strict-mode.html",
    "revision": "a1f00a0202cf3d088528416ba8d419df"
  },
  {
    "url": "frontend/js/js-text-formatting.html",
    "revision": "c025708f7ba884fe214944515b50f0ac"
  },
  {
    "url": "frontend/js/js-working-with-objects.html",
    "revision": "e60cee4faa473824707d314a5222631f"
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
    "revision": "846a0657d00cac7456dad0dbb9dafe1d"
  },
  {
    "url": "interview/css.html",
    "revision": "e155aef78f650cf15fc3c1393fc49329"
  },
  {
    "url": "interview/html.html",
    "revision": "4d74c304f76f3b1cef5aad52ddbb9a6a"
  },
  {
    "url": "interview/index.html",
    "revision": "5d1732a316f0794f65023a79ac3efa61"
  },
  {
    "url": "interview/javascript.html",
    "revision": "2a0268dbd2c3e3f613599522cc338458"
  },
  {
    "url": "interview/mobile-web.html",
    "revision": "5bf49a5ca6246152096b5f06248c2527"
  },
  {
    "url": "logo.png",
    "revision": "d8d70a56ece354e7f87ff3c675e28928"
  },
  {
    "url": "thinking/design-patterns/index.html",
    "revision": "3d7090f12706640898ffdfa1af41bbcd"
  },
  {
    "url": "thinking/index.html",
    "revision": "a4be99c6fa5b27fd1a714a0072f08d07"
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
