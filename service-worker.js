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
    "revision": "a18ee6029261d582301538f6f8cba5e8"
  },
  {
    "url": "about/index.html",
    "revision": "48db4a9c3e2437086cb06e26f0d06f54"
  },
  {
    "url": "algorithm/data-structure/avl-tree.html",
    "revision": "49c38a21920409099874d2c6b25a4ac2"
  },
  {
    "url": "algorithm/data-structure/binary-search-tree.html",
    "revision": "984b2d148f89114eb244564e83a70532"
  },
  {
    "url": "algorithm/data-structure/binary-tree.html",
    "revision": "ceea6ee2538b544bb90c4290947ed25f"
  },
  {
    "url": "algorithm/data-structure/doubly-linked-list.html",
    "revision": "b15116afb054768ba15a2cfa3b6b3bbd"
  },
  {
    "url": "algorithm/data-structure/hash-table.html",
    "revision": "4ab5efeb0b395541d65cbb87ecde4b57"
  },
  {
    "url": "algorithm/data-structure/heap.html",
    "revision": "7218c7a15e9bb4ef352328ebda1e201d"
  },
  {
    "url": "algorithm/data-structure/index.html",
    "revision": "39fc113dff964a51ab2e44c5a27b20e2"
  },
  {
    "url": "algorithm/data-structure/linked-list.html",
    "revision": "e5c114690750663f5462c0a364f6dcc2"
  },
  {
    "url": "algorithm/data-structure/priority-queue.html",
    "revision": "5fef0698a543aac5d30905a085387e14"
  },
  {
    "url": "algorithm/data-structure/queue.html",
    "revision": "a51d5cbb6c665821b10975dc65fac1dd"
  },
  {
    "url": "algorithm/data-structure/red-black-tree.html",
    "revision": "5cbe1a1ac5752d28e313c8e8e18d8a4d"
  },
  {
    "url": "algorithm/data-structure/segment-tree.html",
    "revision": "c0794f50a2d41a5ea86586e1d878e4c4"
  },
  {
    "url": "algorithm/data-structure/stack.html",
    "revision": "0877e71ce91660abf4bf1a42dd3d5713"
  },
  {
    "url": "algorithm/data-structure/trie.html",
    "revision": "aac3b74a9483d679b85c2e82d763d89a"
  },
  {
    "url": "algorithm/index.html",
    "revision": "09d8c5e47af81ecd78ae97029b010c29"
  },
  {
    "url": "assets/css/0.styles.43e5f3f4.css",
    "revision": "f6712044c3ad80eac0b6ab822881809b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0c68de8c.js",
    "revision": "7279ceae239fb830903161a36a886ddb"
  },
  {
    "url": "assets/js/11.a1e904a6.js",
    "revision": "9feca37b3316f02dd3556626c47c58c3"
  },
  {
    "url": "assets/js/12.9ad0289d.js",
    "revision": "e487291389e42ac0a7730db9f1282ace"
  },
  {
    "url": "assets/js/13.00174e88.js",
    "revision": "86c3fc6042bb38a36d705fb2dde67fa0"
  },
  {
    "url": "assets/js/14.b431cc8e.js",
    "revision": "161f64694542ec104b43dd8b389da9a3"
  },
  {
    "url": "assets/js/15.ddc4f63a.js",
    "revision": "d6506b69f75e1a0eae9d4e62e67c2929"
  },
  {
    "url": "assets/js/16.750d9e97.js",
    "revision": "cc711ce26b47a7f8fb19aeb7233e2da3"
  },
  {
    "url": "assets/js/17.7c1cecb3.js",
    "revision": "b664c7767ee34d98929fa017f6496cf6"
  },
  {
    "url": "assets/js/18.55069c90.js",
    "revision": "9bd8fe4668fe0199ab5a20469d19127b"
  },
  {
    "url": "assets/js/19.ecd904cb.js",
    "revision": "ff8ab967d8847f27483fee262992b42e"
  },
  {
    "url": "assets/js/20.90dca096.js",
    "revision": "b1e8a73b28fabd5d06f562324d0daa42"
  },
  {
    "url": "assets/js/21.5f35bd70.js",
    "revision": "85bc91a12f564e6fc663e9a5beeb6089"
  },
  {
    "url": "assets/js/22.0e503f91.js",
    "revision": "f0072527690cd3594fd8e3082942b5b7"
  },
  {
    "url": "assets/js/23.75972f5d.js",
    "revision": "c813f99be32f3a7f2d2264ad54742846"
  },
  {
    "url": "assets/js/24.e04f01ce.js",
    "revision": "59ecd5262e006ce85de49c357f01e5e7"
  },
  {
    "url": "assets/js/25.60df87a7.js",
    "revision": "ae6d8c99fff8db007ccffbf3d9151bfb"
  },
  {
    "url": "assets/js/26.4df1fe01.js",
    "revision": "918e091a5bb338440686485c85c8f7b2"
  },
  {
    "url": "assets/js/27.7b7cd842.js",
    "revision": "348ebc2cb3c9ca6b509799bebfcdfd32"
  },
  {
    "url": "assets/js/28.ece35dc8.js",
    "revision": "adfc30cb9a7a8b4cfeaadc6b72ea5cfe"
  },
  {
    "url": "assets/js/29.5a82c605.js",
    "revision": "3c478e0a81afdd538b2b90553604f943"
  },
  {
    "url": "assets/js/3.eedc34e1.js",
    "revision": "53053ee2187c041f4f7eb01cd2b0f3ae"
  },
  {
    "url": "assets/js/30.c77785f3.js",
    "revision": "b3643de0822d0d463104adb5b990173f"
  },
  {
    "url": "assets/js/31.06166a55.js",
    "revision": "2f73141920319a0fce035f086f8388f1"
  },
  {
    "url": "assets/js/32.fe79e054.js",
    "revision": "cc6bf81fd37ed5bfb1a589f55629b19c"
  },
  {
    "url": "assets/js/33.fae54841.js",
    "revision": "ca448aef090a70540770e9536ff68fa1"
  },
  {
    "url": "assets/js/34.bc1bf374.js",
    "revision": "72ccec847302ac5c9b97aaf70356688d"
  },
  {
    "url": "assets/js/35.1a2beefe.js",
    "revision": "922644a177328e446c10036c02ac7ba0"
  },
  {
    "url": "assets/js/36.5a8e88ee.js",
    "revision": "ef8f9032f4b21351f72387a098a94614"
  },
  {
    "url": "assets/js/37.465b868c.js",
    "revision": "07a626859b11c296a27d330cf0567454"
  },
  {
    "url": "assets/js/38.077b8408.js",
    "revision": "f9898e0c370b43e47052b00763435545"
  },
  {
    "url": "assets/js/39.6a57cdab.js",
    "revision": "8692e9325df96fb5989b9c94b0153a9f"
  },
  {
    "url": "assets/js/4.851aaad8.js",
    "revision": "911c02c9c9dbddcabb6c942319c4824a"
  },
  {
    "url": "assets/js/40.cce8c0de.js",
    "revision": "38d08cc5383935887e41990114c2d2cb"
  },
  {
    "url": "assets/js/41.790aadc2.js",
    "revision": "78251c6b743376dfad47575322be6241"
  },
  {
    "url": "assets/js/42.94c77ed5.js",
    "revision": "b8d0cec2a665dacb7efb551d7874d6dc"
  },
  {
    "url": "assets/js/43.16cc02b7.js",
    "revision": "c2426e46c2ba31f3657bb5feabcf1f1c"
  },
  {
    "url": "assets/js/44.2bd40b86.js",
    "revision": "7ebf977929c3923f3f11e7e12299748e"
  },
  {
    "url": "assets/js/45.f39ffcdf.js",
    "revision": "07a72517bfec3000953eec4064698c13"
  },
  {
    "url": "assets/js/46.b4b4f45b.js",
    "revision": "27fa449ce9f8147d4f7aa625f2e06aa7"
  },
  {
    "url": "assets/js/47.a58e0f6e.js",
    "revision": "3aed271bdb0c3e7e9f390fa17f43893f"
  },
  {
    "url": "assets/js/48.ddf518f5.js",
    "revision": "bd9040d81fd386ea2998305494abee6c"
  },
  {
    "url": "assets/js/49.e83a8715.js",
    "revision": "ed393f675224173632b8cbd93c00d616"
  },
  {
    "url": "assets/js/5.e2e4ed09.js",
    "revision": "376b1c581213faad194d0dbbc8ef5075"
  },
  {
    "url": "assets/js/50.bdc0496b.js",
    "revision": "912b0badf7755c863e87bc27de0dc799"
  },
  {
    "url": "assets/js/51.fb7d5239.js",
    "revision": "1c9da6167130e3baf0ca91977422ae8b"
  },
  {
    "url": "assets/js/52.262a7e5d.js",
    "revision": "b88c0844a9b0ee5620d96794f032274a"
  },
  {
    "url": "assets/js/53.682c4189.js",
    "revision": "eecf4eba56719996f82bf053df59fb2b"
  },
  {
    "url": "assets/js/54.c3e648b0.js",
    "revision": "dca7b9d0c5ae96a982ccd80d22e1a895"
  },
  {
    "url": "assets/js/55.99d94705.js",
    "revision": "c3f52a7e75c014babe793a84cb74ef29"
  },
  {
    "url": "assets/js/56.a7290822.js",
    "revision": "3821cecff9970661927bde4bed7125d6"
  },
  {
    "url": "assets/js/57.d3481c83.js",
    "revision": "60f31dafc75af4a5b0ea142559b6f4f9"
  },
  {
    "url": "assets/js/58.84cb57b2.js",
    "revision": "63625023fc7d9da3eeb719aceecab9b9"
  },
  {
    "url": "assets/js/59.578779f0.js",
    "revision": "638fa435498b4dcf4d7e7aa6eebf51d6"
  },
  {
    "url": "assets/js/6.31991f89.js",
    "revision": "f7ded1c1c5adf71d06a50f6e9e4d0fed"
  },
  {
    "url": "assets/js/60.2e0b07be.js",
    "revision": "0c29ea5f34347073221991dbf0d83d59"
  },
  {
    "url": "assets/js/61.410f6110.js",
    "revision": "16ad16a387b6b80bab7c098d38a18830"
  },
  {
    "url": "assets/js/62.992f16b4.js",
    "revision": "891b1f359672603f423aec27e15caefa"
  },
  {
    "url": "assets/js/63.d10bd515.js",
    "revision": "c5be3e1c6aba8738cae992485d8a7151"
  },
  {
    "url": "assets/js/64.b9869f70.js",
    "revision": "11bf20fbb580eea633e73f88595c95be"
  },
  {
    "url": "assets/js/65.0609e5fb.js",
    "revision": "70b3e7d11814d10b158a5fa47b7c9fb4"
  },
  {
    "url": "assets/js/66.2e3afa75.js",
    "revision": "2208f7369705a86c54ffdea7e5bd23b6"
  },
  {
    "url": "assets/js/67.a19e119d.js",
    "revision": "bc82bb07406ab880490def90a24b8536"
  },
  {
    "url": "assets/js/68.e2e5e183.js",
    "revision": "2b093de87918ac643f12dba15fac72f5"
  },
  {
    "url": "assets/js/69.81377358.js",
    "revision": "00494ad64046642eeede867584bf2090"
  },
  {
    "url": "assets/js/7.4ba66d62.js",
    "revision": "2d33a14646d27b38a886605b992e775a"
  },
  {
    "url": "assets/js/70.9b91a4f9.js",
    "revision": "193e402724f07007fdf785e1aade165b"
  },
  {
    "url": "assets/js/71.e0db398a.js",
    "revision": "f16f717484dacd91b969b95a87d10c0e"
  },
  {
    "url": "assets/js/72.d7710aec.js",
    "revision": "54c29d345b8f7e9556482816bf3d64c2"
  },
  {
    "url": "assets/js/73.55f7692c.js",
    "revision": "4b28bfe130283efeede1d07bbcd71271"
  },
  {
    "url": "assets/js/74.252a8a31.js",
    "revision": "31ca928d88cd44a126c8bf7f79a971b4"
  },
  {
    "url": "assets/js/75.a122363e.js",
    "revision": "2fd97c3703bc75b653382a17cc3cf646"
  },
  {
    "url": "assets/js/76.b0a48007.js",
    "revision": "29d97f38d71939e255e6c01393fbb3f9"
  },
  {
    "url": "assets/js/77.a1a01c61.js",
    "revision": "16d8a0a0cc9ed85eb35ea0d5b247bf29"
  },
  {
    "url": "assets/js/8.dbf84eb6.js",
    "revision": "c74131b0d610cf7b4c2fe7e86d9adeee"
  },
  {
    "url": "assets/js/9.b60442ad.js",
    "revision": "a05ea520b851cee33554ba363823ee69"
  },
  {
    "url": "assets/js/app.85bacd5e.js",
    "revision": "ce8c9c7f861c70bb4c82b0664e5023b3"
  },
  {
    "url": "assets/js/vendors~docsearch.883d461f.js",
    "revision": "1664a34bb6581ffdd1ff8b4f46d79968"
  },
  {
    "url": "backend/index.html",
    "revision": "6afd113ca43fb42d32cf61f472760d2e"
  },
  {
    "url": "backend/nodejs/events.html",
    "revision": "74b81ceba47a0f56c160a3c4b441a12a"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "5cb56f30e6bf09850434025c2921786f"
  },
  {
    "url": "frontend/browser/bom.html",
    "revision": "0c0c1217f23971e69543b315e671d406"
  },
  {
    "url": "frontend/browser/cross-domain.html",
    "revision": "6ea91f692f013f4876c8e2a29f6b25e4"
  },
  {
    "url": "frontend/browser/dom.html",
    "revision": "4a1977c50483d19c38d8979b1c759781"
  },
  {
    "url": "frontend/browser/events.html",
    "revision": "4c067df5f8ef7ad64a4a7302e852e57d"
  },
  {
    "url": "frontend/browser/index.html",
    "revision": "5720e166a07d26662ebd8096e1b65dc4"
  },
  {
    "url": "frontend/browser/memory-management.html",
    "revision": "62293ffa58d23a533e79e30514e71f33"
  },
  {
    "url": "frontend/browser/pwa.html",
    "revision": "69412b144c5bba87563a1b327c8e5fca"
  },
  {
    "url": "frontend/browser/render.html",
    "revision": "1a0abc73fa02bd840a8fbabb27ba6920"
  },
  {
    "url": "frontend/browser/storage.html",
    "revision": "f3fb9a3e118522927141a6b3ae0e30e6"
  },
  {
    "url": "frontend/browser/web-performance.html",
    "revision": "8b1a89f60dceaeb03534d2320e0e5292"
  },
  {
    "url": "frontend/browser/web-security.html",
    "revision": "df455cd63ed77e932a5252a4024c0547"
  },
  {
    "url": "frontend/css/css-animations.html",
    "revision": "e05489105c88a331445fd837a690af3c"
  },
  {
    "url": "frontend/css/css-border.html",
    "revision": "c5779c515729de91b0e1ec28f94fb539"
  },
  {
    "url": "frontend/css/css-box-model.html",
    "revision": "14d42ed7354f56072ed53d5dc2fc10c0"
  },
  {
    "url": "frontend/css/css-color-and-background-and-gradients.html",
    "revision": "d43f96b401b22311ee90d58f7f35369a"
  },
  {
    "url": "frontend/css/css-css-and-documents.html",
    "revision": "6b8ef30aef89c115edc8dc25529d0c01"
  },
  {
    "url": "frontend/css/css-flexbox-layout.html",
    "revision": "5f09a73661e83167a8412b441ebdce06"
  },
  {
    "url": "frontend/css/css-floating.html",
    "revision": "4a7dd312185100b6c854c92f78ece8c8"
  },
  {
    "url": "frontend/css/css-fonts.html",
    "revision": "02446dc3b8545e8b319c35e3e9c27654"
  },
  {
    "url": "frontend/css/css-grid-layout.html",
    "revision": "a8ec4efccf64bdb43e99f3a8dc7d132f"
  },
  {
    "url": "frontend/css/css-positioning.html",
    "revision": "e7e5f46a4a7d48efd1d16f83787c5c19"
  },
  {
    "url": "frontend/css/css-selectors.html",
    "revision": "4be8e22531374ff93a7bd84b6016cabd"
  },
  {
    "url": "frontend/css/css-shapes.html",
    "revision": "ba796aa340e759a92b7ad181cb1150ee"
  },
  {
    "url": "frontend/css/css-specificity-and-cascade.html",
    "revision": "4a550a9c726e8909c3f8865167428d9b"
  },
  {
    "url": "frontend/css/css-table-layout.html",
    "revision": "df23b58c357504274d5a2219144ecc63"
  },
  {
    "url": "frontend/css/css-text-properties.html",
    "revision": "b25d70d68ebad446e90aebbe045f9e1e"
  },
  {
    "url": "frontend/css/css-transforms.html",
    "revision": "43782cadb72117475df0734cdbe858a4"
  },
  {
    "url": "frontend/css/css-transitions.html",
    "revision": "ac419df7afee57b197b7436651248b2a"
  },
  {
    "url": "frontend/css/css-values-and-units.html",
    "revision": "a5bf7b652e3c1d21492f2dc1b021e36a"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "925f6f62e3e15f763fc343acfca0544b"
  },
  {
    "url": "frontend/index.html",
    "revision": "d096395f162e9d366087f458eec8cf80"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "dd53772fa7d34d6cf13025791dfd1c47"
  },
  {
    "url": "frontend/js/js-control-flow-and-error-handling.html",
    "revision": "9c52405814894cc818a432c1e91eba9d"
  },
  {
    "url": "frontend/js/js-es2020.html",
    "revision": "16af7487b718d0874007a22e607c7b54"
  },
  {
    "url": "frontend/js/js-es2021.html",
    "revision": "7045aa9e29e7849fb4fca5f27c3322e3"
  },
  {
    "url": "frontend/js/js-expressions-and-operators.html",
    "revision": "74c1ebf746080f9e467ae6d8aafd677a"
  },
  {
    "url": "frontend/js/js-functions.html",
    "revision": "55bc10ca95b248dcfc5276746d6246e8"
  },
  {
    "url": "frontend/js/js-grammar-and-types.html",
    "revision": "5a821f1e9dfb0fb73cf03b56a50e4841"
  },
  {
    "url": "frontend/js/js-in-html.html",
    "revision": "9d3c87c6b3419a2a1a7c17f9292b3f05"
  },
  {
    "url": "frontend/js/js-indexed-collections.html",
    "revision": "153592ae0eadb97c89ef4aa30beb72f1"
  },
  {
    "url": "frontend/js/js-keyed-collections.html",
    "revision": "4d4d1f6f6ddf4e31bcc1d97f110ee1af"
  },
  {
    "url": "frontend/js/js-meta-programming.html",
    "revision": "15ac8323bb877d9491f46477bde4991e"
  },
  {
    "url": "frontend/js/js-modules.html",
    "revision": "8c4bfd9249207e8b89dd813588bb8255"
  },
  {
    "url": "frontend/js/js-numbers-and-dates.html",
    "revision": "47143b1e666179fbd73a239a3ca7394f"
  },
  {
    "url": "frontend/js/js-promises.html",
    "revision": "45728236a7d914a843be0f4dd4d2497f"
  },
  {
    "url": "frontend/js/js-regular-expressions.html",
    "revision": "ccaa6ba717cd4ccd7e81b1e607d78ca3"
  },
  {
    "url": "frontend/js/js-strict-mode.html",
    "revision": "13a892cd44a34b24825992044c0e5820"
  },
  {
    "url": "frontend/js/js-text-formatting.html",
    "revision": "7158343d0d3a26b98bca2ba05e163c37"
  },
  {
    "url": "frontend/js/js-working-with-objects.html",
    "revision": "232c8bbee2b737a86fb71ff3a371df36"
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
    "revision": "f08c09953e92ccc52af12728b5ec40de"
  },
  {
    "url": "logo.png",
    "revision": "d8d70a56ece354e7f87ff3c675e28928"
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
