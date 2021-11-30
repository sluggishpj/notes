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
    "revision": "1709b72059ba2e1b1eefe179aa77f133"
  },
  {
    "url": "about/index.html",
    "revision": "5309a78232bf6863e08fbc4d3f62d6ff"
  },
  {
    "url": "algorithm/algorithms/array-sorting-algorithms.html",
    "revision": "6a289c3895663c6529e6ad1e9f4c330f"
  },
  {
    "url": "algorithm/algorithms/index.html",
    "revision": "7f50cadac27c394e6f3f8a20505d9f39"
  },
  {
    "url": "algorithm/data-structure/avl-tree.html",
    "revision": "0e66d1a10dd03d54a2341af416d459ee"
  },
  {
    "url": "algorithm/data-structure/binary-search-tree.html",
    "revision": "9948fb04fa28897813bf017be90d9dda"
  },
  {
    "url": "algorithm/data-structure/binary-tree.html",
    "revision": "3b5180ed6e92385a581125227a3b241e"
  },
  {
    "url": "algorithm/data-structure/doubly-linked-list.html",
    "revision": "eca7ce87f45c016d7c584a0dae0ec1f6"
  },
  {
    "url": "algorithm/data-structure/hash-table.html",
    "revision": "1e433664eec7736584d78d21e4ea5d8b"
  },
  {
    "url": "algorithm/data-structure/heap.html",
    "revision": "f1709cd84fbdafa177b52a1c4b7d9dd7"
  },
  {
    "url": "algorithm/data-structure/index.html",
    "revision": "38b6b3701ebfe52c3bc6c16e7829785b"
  },
  {
    "url": "algorithm/data-structure/linked-list.html",
    "revision": "4f8378912fe76161c6ade1b1b34a8ecf"
  },
  {
    "url": "algorithm/data-structure/priority-queue.html",
    "revision": "74f41bd8ad739398c7a721d3c6ffc7fb"
  },
  {
    "url": "algorithm/data-structure/queue.html",
    "revision": "c889de486431733baa52a49215324aa0"
  },
  {
    "url": "algorithm/data-structure/red-black-tree.html",
    "revision": "9b2f605816f06532a72a8d57bb78a5db"
  },
  {
    "url": "algorithm/data-structure/segment-tree.html",
    "revision": "34d107040441efb76653775a81160215"
  },
  {
    "url": "algorithm/data-structure/stack.html",
    "revision": "806d3752f4dba445e5eb867badd5c87a"
  },
  {
    "url": "algorithm/data-structure/trie.html",
    "revision": "61ce890cd0e75c2b67cacda5b3442d11"
  },
  {
    "url": "algorithm/index.html",
    "revision": "ad9548be7bee952e182ce095a60174f0"
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
    "url": "assets/js/5.5ad78f8b.js",
    "revision": "534c991bd6b755546957a0b74935437b"
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
    "url": "assets/js/56.159312fa.js",
    "revision": "dac69761839e061c00494a41559008ec"
  },
  {
    "url": "assets/js/57.fdecf7f3.js",
    "revision": "54375350a74379494c8dea1745d6c7bb"
  },
  {
    "url": "assets/js/58.9f6e6018.js",
    "revision": "fc2917976f05355747125fd44c808ea3"
  },
  {
    "url": "assets/js/59.7a6843eb.js",
    "revision": "3b17c1f9a14518a9fcb768d4dbfd3ec5"
  },
  {
    "url": "assets/js/6.1b65c77a.js",
    "revision": "619e30dae43e1c28d5eef84da2a3fb13"
  },
  {
    "url": "assets/js/60.125044a0.js",
    "revision": "0089870639314041abc01e3e8b6a6ded"
  },
  {
    "url": "assets/js/61.10318f41.js",
    "revision": "372ed9bf3876c6f4113d7247df9d1a11"
  },
  {
    "url": "assets/js/62.286fdf5a.js",
    "revision": "fd2db9b9c7072a0d8ddd4651adc09258"
  },
  {
    "url": "assets/js/63.f5759b41.js",
    "revision": "19384b3aeb71fd577a0ab5ffcbeadf57"
  },
  {
    "url": "assets/js/64.a9149b36.js",
    "revision": "0e19e322d50a59c006934f9783fc6a29"
  },
  {
    "url": "assets/js/65.eacc4401.js",
    "revision": "aa800c14afbf266a28c29218f77f6d17"
  },
  {
    "url": "assets/js/66.00637b3c.js",
    "revision": "31c207382de4c11b6601918ad8583ec4"
  },
  {
    "url": "assets/js/67.383a9c0d.js",
    "revision": "d7782d13ed94991fbc899113157995ee"
  },
  {
    "url": "assets/js/68.46f33f6b.js",
    "revision": "5e100fd5bc26711839843ac341670526"
  },
  {
    "url": "assets/js/69.a5871e32.js",
    "revision": "7abaec41221dbf63b05a48242468b8d8"
  },
  {
    "url": "assets/js/7.b9733943.js",
    "revision": "9d7477d05bad7ab285369d1918c43a82"
  },
  {
    "url": "assets/js/70.2d7dab17.js",
    "revision": "ad890478fe27b77fcfab1db4e8dc3ebc"
  },
  {
    "url": "assets/js/71.829e1bbb.js",
    "revision": "afcfdd39735849ad942b1cc58e72213d"
  },
  {
    "url": "assets/js/72.855e4bb2.js",
    "revision": "f1a70c4e6b946b5d775f605ce6c64a13"
  },
  {
    "url": "assets/js/73.62c0139d.js",
    "revision": "958f4626888aadfbff3279ab71238ea5"
  },
  {
    "url": "assets/js/74.e0dda5db.js",
    "revision": "6545b81d87198cd72c456c6dcefe54a8"
  },
  {
    "url": "assets/js/75.d8251ba4.js",
    "revision": "233a78e16cf39fc92d6c754e866e293c"
  },
  {
    "url": "assets/js/76.9f41f275.js",
    "revision": "cf604ee4bf7d6ea69941638f3b26ae89"
  },
  {
    "url": "assets/js/77.62ae2482.js",
    "revision": "10d70935dbbbc14d8f1946b8bb0e0276"
  },
  {
    "url": "assets/js/78.dfeec7ac.js",
    "revision": "f8f563abc8b032d3e8457d9b93c40d1c"
  },
  {
    "url": "assets/js/79.b92c4084.js",
    "revision": "90cd299e75d9e56c50b14894f4e61166"
  },
  {
    "url": "assets/js/8.ec9df493.js",
    "revision": "1d41d4a2e659637b375d7f71f9e233e4"
  },
  {
    "url": "assets/js/80.b6717cf9.js",
    "revision": "03214378fa06904d9ba92f008a2ef13f"
  },
  {
    "url": "assets/js/81.43379078.js",
    "revision": "9d45276a55171f564c0949da54de6eb7"
  },
  {
    "url": "assets/js/82.a9449135.js",
    "revision": "4583357186671d47eca722c80dd7abbc"
  },
  {
    "url": "assets/js/83.22bcde09.js",
    "revision": "0424a9f19045335d23f9aa8f60952b58"
  },
  {
    "url": "assets/js/84.d13cc801.js",
    "revision": "c101374308b2ef85b39e9ac977f43512"
  },
  {
    "url": "assets/js/85.410ef4eb.js",
    "revision": "c88cd9d39f808d4be4187485a7c42ddc"
  },
  {
    "url": "assets/js/86.b81ee89c.js",
    "revision": "f2b29a2a4d569e534f6cc94580287dfb"
  },
  {
    "url": "assets/js/87.20df6806.js",
    "revision": "689dc05f58d5396153a60c8317211bb0"
  },
  {
    "url": "assets/js/88.fb0b1525.js",
    "revision": "22bac87c4d030ca9952b0f9db16ee7cf"
  },
  {
    "url": "assets/js/89.0c414a1e.js",
    "revision": "d9e95e206a09d31b3a90cb0618133c61"
  },
  {
    "url": "assets/js/9.5a360f50.js",
    "revision": "e0bd133dcd04e9fbf1ac4bdf5389bce1"
  },
  {
    "url": "assets/js/90.4cbd9699.js",
    "revision": "4bbf1bb18a0982b41fa903c9d25374ff"
  },
  {
    "url": "assets/js/91.149a9bc5.js",
    "revision": "5d8bdc1e17894869ddb79a2b4930647a"
  },
  {
    "url": "assets/js/92.ade35e34.js",
    "revision": "b6dadc1313575f99d455685b5461c1c4"
  },
  {
    "url": "assets/js/93.5f0a08c3.js",
    "revision": "02d3304a9f126791b5eafb60e356f1cf"
  },
  {
    "url": "assets/js/app.69c8fe2d.js",
    "revision": "d20d948284863c922b066e2d19a42ea3"
  },
  {
    "url": "assets/js/vendors~docsearch.a920cc49.js",
    "revision": "f9d228d23c26dd63baa4fa53c4259840"
  },
  {
    "url": "backend/index.html",
    "revision": "acf385efb4d3f1379e2c25288c3a88e3"
  },
  {
    "url": "backend/nodejs/events.html",
    "revision": "5b26e6407f8bae86e2c12ce99179ab6f"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "a5ef00c87d036edf94d1e0e3ae77d251"
  },
  {
    "url": "cs/index.html",
    "revision": "aa3f39250ebeb04f422c08278e0456da"
  },
  {
    "url": "cs/network/http.html",
    "revision": "485cce5109de8119d28a931de9077723"
  },
  {
    "url": "cs/network/index.html",
    "revision": "349f6bfed1111bbd1f74a26903b66704"
  },
  {
    "url": "cs/os/index.html",
    "revision": "5e8d2e4f4e255036b2f125c39a01fe49"
  },
  {
    "url": "frontend/browser/bom.html",
    "revision": "77b9adb1ec080557ba95e46c365797fc"
  },
  {
    "url": "frontend/browser/cross-domain.html",
    "revision": "f69fe7c09aaaa76610e3497087062890"
  },
  {
    "url": "frontend/browser/dom.html",
    "revision": "972b90a1424556fd46f391f9d2995387"
  },
  {
    "url": "frontend/browser/events.html",
    "revision": "7268bb241d7ca2706e696ffd5f5913fa"
  },
  {
    "url": "frontend/browser/index.html",
    "revision": "b7e47096603464481ed3eef37acea28e"
  },
  {
    "url": "frontend/browser/memory-management.html",
    "revision": "111e6d94afc45e02b92d80b78e7dc647"
  },
  {
    "url": "frontend/browser/pwa.html",
    "revision": "71cd129da7efa5e5454b811032bf8a21"
  },
  {
    "url": "frontend/browser/render.html",
    "revision": "c95287bda950684cfe4063b26d5d59ff"
  },
  {
    "url": "frontend/browser/storage.html",
    "revision": "c621935550627ad838e5d072ebaabc83"
  },
  {
    "url": "frontend/browser/web-performance.html",
    "revision": "b7ffc53aa3cfbdf59cce6e66a63299e7"
  },
  {
    "url": "frontend/browser/web-security.html",
    "revision": "4c1f55d21df352d7eebe0198ed9b15c2"
  },
  {
    "url": "frontend/css/css-animations.html",
    "revision": "c9d28a65b7d063d03e16c6b79dec53bb"
  },
  {
    "url": "frontend/css/css-border.html",
    "revision": "15a47ff0209758e73fd0f9b81b78784e"
  },
  {
    "url": "frontend/css/css-box-model.html",
    "revision": "b9143f1c74d068b3093f27aba2fc33fc"
  },
  {
    "url": "frontend/css/css-color-and-background-and-gradients.html",
    "revision": "91c94667ba60c74c06a71971dcac13c7"
  },
  {
    "url": "frontend/css/css-css-and-documents.html",
    "revision": "3aa36337961baa63395e6060ec875181"
  },
  {
    "url": "frontend/css/css-filters-blending-clipping-masking.html",
    "revision": "4279127af899dbe8388b75bbbd994adc"
  },
  {
    "url": "frontend/css/css-flexbox-layout.html",
    "revision": "422a02e105ccca986a1e4f99e80814b5"
  },
  {
    "url": "frontend/css/css-floating.html",
    "revision": "756b3d7a2f90ecb52e26dbf87051caa6"
  },
  {
    "url": "frontend/css/css-fonts.html",
    "revision": "3bd81bba955aa0457450a3bd5de63c59"
  },
  {
    "url": "frontend/css/css-grid-layout.html",
    "revision": "148819c3afe27d1327b24cc2d6c8cf98"
  },
  {
    "url": "frontend/css/css-positioning.html",
    "revision": "389cdbfad607a2efd4f79532ab5a93d1"
  },
  {
    "url": "frontend/css/css-selectors.html",
    "revision": "bed9b1286cf2b16f5d1bbf7153f274b1"
  },
  {
    "url": "frontend/css/css-shapes.html",
    "revision": "e21a64471a84898e9f1a22612d9c7cbf"
  },
  {
    "url": "frontend/css/css-specificity-and-cascade.html",
    "revision": "a29fd71b1ca230600953295b2ac20a3e"
  },
  {
    "url": "frontend/css/css-table-layout.html",
    "revision": "f448d5bf0f896a98c69fa03c283a7b5a"
  },
  {
    "url": "frontend/css/css-text-properties.html",
    "revision": "cd90c96f2d1d94f220b89dd434ce675c"
  },
  {
    "url": "frontend/css/css-transforms.html",
    "revision": "9d00c8a22cafc6eac8f959ddf33fa77e"
  },
  {
    "url": "frontend/css/css-transitions.html",
    "revision": "11e2372d1893305df46d2632213a33e8"
  },
  {
    "url": "frontend/css/css-values-and-units.html",
    "revision": "0c7a3dac859435f84107c34d0338f76d"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "2e5b033ad6fdaede771abe43dffec666"
  },
  {
    "url": "frontend/index.html",
    "revision": "b66af4365dd547fa930d57c7051c3a3a"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "d4e5c56f3eb992cacedff54edb6904b7"
  },
  {
    "url": "frontend/js/js-control-flow-and-error-handling.html",
    "revision": "c25ea0cea81f571df30e0046bb22bdb2"
  },
  {
    "url": "frontend/js/js-es2020.html",
    "revision": "0de41244a6ca4d7b16417bb5f80ec77e"
  },
  {
    "url": "frontend/js/js-es2021.html",
    "revision": "4354b33fc68752db6f17a82dd652ff32"
  },
  {
    "url": "frontend/js/js-expressions-and-operators.html",
    "revision": "29719a763a03b35ba8a3bde4d4d3aff4"
  },
  {
    "url": "frontend/js/js-functions.html",
    "revision": "10897befaecbd8ed2b488ab0eb82e8db"
  },
  {
    "url": "frontend/js/js-grammar-and-types.html",
    "revision": "d73cdc1b00b388f2c860f8120dceb90b"
  },
  {
    "url": "frontend/js/js-in-html.html",
    "revision": "2e97a6316ec059c873d6e0c99930ca10"
  },
  {
    "url": "frontend/js/js-indexed-collections.html",
    "revision": "a8dc981c20f33cbe8bc23900a9290a37"
  },
  {
    "url": "frontend/js/js-iterators-and-generators.html",
    "revision": "2afb75cc34bab06e73075dc4d8c90e8e"
  },
  {
    "url": "frontend/js/js-keyed-collections.html",
    "revision": "e049ba8a15f29e090c30e41392753de1"
  },
  {
    "url": "frontend/js/js-meta-programming.html",
    "revision": "3f3a962790fecc7b972d00cfd0b436ce"
  },
  {
    "url": "frontend/js/js-modules.html",
    "revision": "8a860f31fa9a6a1c61c4b40d9fadfdb2"
  },
  {
    "url": "frontend/js/js-numbers-and-dates.html",
    "revision": "3f19e5aaa7fd288e9fa27c69a73dcf3f"
  },
  {
    "url": "frontend/js/js-promises.html",
    "revision": "9f5ba28065424ab5c70214863575c93f"
  },
  {
    "url": "frontend/js/js-regular-expressions.html",
    "revision": "11377b8211e48ab50c098f8c54b18f89"
  },
  {
    "url": "frontend/js/js-strict-mode.html",
    "revision": "27a2cd7c72e6c3d74d4b359de410ac1f"
  },
  {
    "url": "frontend/js/js-text-formatting.html",
    "revision": "dc92db2039ae7cbe6b800efcb57dee68"
  },
  {
    "url": "frontend/js/js-working-with-objects.html",
    "revision": "303c9c3b61d121658eaf2fc49f416dec"
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
    "revision": "7bcbabc0b5bf34d04e936b16f402a1b8"
  },
  {
    "url": "interview/css.html",
    "revision": "5f79a9de65bc9f75c04e156212640cca"
  },
  {
    "url": "interview/html.html",
    "revision": "1a9580c757fe6be6a62a5d54d88de7dd"
  },
  {
    "url": "interview/index.html",
    "revision": "e1917e3102930d551a829f24e1ff08ee"
  },
  {
    "url": "interview/mobile-web.html",
    "revision": "515413ded8de12dfd8fa6578912fe6f7"
  },
  {
    "url": "logo.png",
    "revision": "d8d70a56ece354e7f87ff3c675e28928"
  },
  {
    "url": "thinking/design-patterns/index.html",
    "revision": "3b9320c4e70a8fe4e8ddc00ff6438b42"
  },
  {
    "url": "thinking/index.html",
    "revision": "e7c57109a798e0aadce23c9f1b5fc063"
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
