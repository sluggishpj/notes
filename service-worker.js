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
    "revision": "2ce59c064fe0ca4081fb1705987db41b"
  },
  {
    "url": "about/index.html",
    "revision": "5a0957bea4dae5db2b499ac94c3b5034"
  },
  {
    "url": "algorithm/data-structure/avl-tree.html",
    "revision": "544dff8956dfd8000fee7f178716f505"
  },
  {
    "url": "algorithm/data-structure/binary-search-tree.html",
    "revision": "219ea9aea8c790ff77157b2568c37ca5"
  },
  {
    "url": "algorithm/data-structure/binary-tree.html",
    "revision": "031608bb38ceccf7259c6de8421de3a9"
  },
  {
    "url": "algorithm/data-structure/doubly-linked-list.html",
    "revision": "b0a4987621664f762e4d0a370a8e05de"
  },
  {
    "url": "algorithm/data-structure/hash-table.html",
    "revision": "3162135e062d17549e6f5b97082f4e69"
  },
  {
    "url": "algorithm/data-structure/heap.html",
    "revision": "8ea75e297c852c8af9bd2e5314d29556"
  },
  {
    "url": "algorithm/data-structure/index.html",
    "revision": "cf207b4c462a33d865fc9bceefa9d30c"
  },
  {
    "url": "algorithm/data-structure/linked-list.html",
    "revision": "ad4445f000792d5e11d0cbc8be55d64a"
  },
  {
    "url": "algorithm/data-structure/priority-queue.html",
    "revision": "ed766501f1683bcc9b9e40f185046377"
  },
  {
    "url": "algorithm/data-structure/queue.html",
    "revision": "3730e3d84db26713dcc9d56edc4693eb"
  },
  {
    "url": "algorithm/data-structure/red-black-tree.html",
    "revision": "dc8ba027edc6b09e68f57b96b81cbc22"
  },
  {
    "url": "algorithm/data-structure/segment-tree.html",
    "revision": "a6388cbad01aec6c6cc76138ff0b0a3a"
  },
  {
    "url": "algorithm/data-structure/stack.html",
    "revision": "0ed79083c009e22e64fce3f377bf1833"
  },
  {
    "url": "algorithm/data-structure/trie.html",
    "revision": "ce9993b7426511f9d29d2fe89ef4b16a"
  },
  {
    "url": "algorithm/index.html",
    "revision": "2180218248666f797995000d8fd59201"
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
    "url": "assets/js/39.448d2b32.js",
    "revision": "aceb8ed9a84762109b563e9f56858d0d"
  },
  {
    "url": "assets/js/4.851aaad8.js",
    "revision": "911c02c9c9dbddcabb6c942319c4824a"
  },
  {
    "url": "assets/js/40.6c84a1c5.js",
    "revision": "dc6965161fc853566b2f041dc7286b19"
  },
  {
    "url": "assets/js/41.2ea06996.js",
    "revision": "9e4cd822160a4f5ec84f40bd52bec910"
  },
  {
    "url": "assets/js/42.94c77ed5.js",
    "revision": "b8d0cec2a665dacb7efb551d7874d6dc"
  },
  {
    "url": "assets/js/43.de9547ec.js",
    "revision": "27d06249563bc1c0e0b904ab9887cd3e"
  },
  {
    "url": "assets/js/44.2bd40b86.js",
    "revision": "7ebf977929c3923f3f11e7e12299748e"
  },
  {
    "url": "assets/js/45.5d66cd54.js",
    "revision": "7a98a4184ba508c55139f4e7e005ab1d"
  },
  {
    "url": "assets/js/46.4d1c9722.js",
    "revision": "c729a2924a11244cda16c41d8f1bf76a"
  },
  {
    "url": "assets/js/47.9f200e4d.js",
    "revision": "e391c9929b916fc85d45d2f8ff499fb0"
  },
  {
    "url": "assets/js/48.b22a6f98.js",
    "revision": "f6141ad1fbe545f1c8ed60a377953ab1"
  },
  {
    "url": "assets/js/49.7dff87c7.js",
    "revision": "3121a1e6fe337b99920344fb7b00154c"
  },
  {
    "url": "assets/js/5.30c8cc60.js",
    "revision": "f1207cf1bb49d29595d097d5b14d98ee"
  },
  {
    "url": "assets/js/50.a1ed16d4.js",
    "revision": "1c774ef39f672a1ff3ff01eb6d4ee8ea"
  },
  {
    "url": "assets/js/51.b8506ae2.js",
    "revision": "994cf76bf85551d4902992f339834b05"
  },
  {
    "url": "assets/js/52.359a994e.js",
    "revision": "dcc1b135876a8131391691b2190a3558"
  },
  {
    "url": "assets/js/53.07796b6c.js",
    "revision": "929fa54e005c1e41c6e004b7c85c0bab"
  },
  {
    "url": "assets/js/54.3444d8c3.js",
    "revision": "da653820fafb648f8be5c9103ec0ce37"
  },
  {
    "url": "assets/js/55.0284dbf7.js",
    "revision": "e6ac7e074ffa9617f933c832db968cd6"
  },
  {
    "url": "assets/js/56.0e20837a.js",
    "revision": "2b95da59f530548e7900a1689b584c5c"
  },
  {
    "url": "assets/js/57.b520f419.js",
    "revision": "f27d8abf6b21a97424b78628959d2c9e"
  },
  {
    "url": "assets/js/58.a8c4ebbb.js",
    "revision": "11ae0fdd61a1124d48d9661feecfb43f"
  },
  {
    "url": "assets/js/59.d98083c6.js",
    "revision": "19429601a658b66056c868ea8ff1cfcc"
  },
  {
    "url": "assets/js/6.31991f89.js",
    "revision": "f7ded1c1c5adf71d06a50f6e9e4d0fed"
  },
  {
    "url": "assets/js/60.b5de2c8d.js",
    "revision": "b1d6de3c279c3cf6c66b35bfec9b56b5"
  },
  {
    "url": "assets/js/61.3dd8ecc8.js",
    "revision": "57e8d2da9774bfa9f5659bb8a67b1bf1"
  },
  {
    "url": "assets/js/62.7a4e1fdd.js",
    "revision": "dd6055607bacaf4a50cd5bb51be45ff4"
  },
  {
    "url": "assets/js/63.00699f40.js",
    "revision": "0fc31ed87ca98fcf301c7016801a88b4"
  },
  {
    "url": "assets/js/64.138a922b.js",
    "revision": "dbdce9f93e9893374c1cbb198f3ef489"
  },
  {
    "url": "assets/js/65.e1459a41.js",
    "revision": "6c22b3aa46399d9fe60d6c760bd2ff6f"
  },
  {
    "url": "assets/js/66.5fe15316.js",
    "revision": "2a4fe1ed35b8f6107f0a24e4da7274f9"
  },
  {
    "url": "assets/js/67.4bbf6c33.js",
    "revision": "619d36e01a771092b2b1567cfbb57fcf"
  },
  {
    "url": "assets/js/68.572975f6.js",
    "revision": "737931d4a84907723224c42f347c175d"
  },
  {
    "url": "assets/js/69.5319f929.js",
    "revision": "a4849f0eda3f173499f7f24ce39acb89"
  },
  {
    "url": "assets/js/7.4ba66d62.js",
    "revision": "2d33a14646d27b38a886605b992e775a"
  },
  {
    "url": "assets/js/70.07ba3a01.js",
    "revision": "06ee2a3e3fece6c5094f492cffb89e4c"
  },
  {
    "url": "assets/js/71.3bdea942.js",
    "revision": "c10d63ec7924d2c7a8f008185649a8b8"
  },
  {
    "url": "assets/js/72.427bec74.js",
    "revision": "ea4e981ae8997874ac52c415d666247c"
  },
  {
    "url": "assets/js/73.748bd7b0.js",
    "revision": "d2d9fed3d452975a0cb6ee3746bda6f8"
  },
  {
    "url": "assets/js/74.013aaa13.js",
    "revision": "4104cea40b81e98fc6e533c0136e5eac"
  },
  {
    "url": "assets/js/75.ada39242.js",
    "revision": "843236dd35b1e5738badaa1dbd492854"
  },
  {
    "url": "assets/js/76.4b19ee0b.js",
    "revision": "cf808b84b97c659a33c7a77974c96011"
  },
  {
    "url": "assets/js/77.308b97d6.js",
    "revision": "da45e19fa46f3d8cd0971a32bddf75f3"
  },
  {
    "url": "assets/js/78.cac3b807.js",
    "revision": "7be08d90f5ade2bca5570fc1f019dabc"
  },
  {
    "url": "assets/js/8.136a887f.js",
    "revision": "8f76f5c37d42f2e3fcaa32c36a3a093b"
  },
  {
    "url": "assets/js/9.7ce5a3a1.js",
    "revision": "a626a547c7b43e7c834619bfb1d76d92"
  },
  {
    "url": "assets/js/app.a8879ba9.js",
    "revision": "a91f9e31f0616b0751c3d7b15794a5d1"
  },
  {
    "url": "assets/js/vendors~docsearch.883d461f.js",
    "revision": "1664a34bb6581ffdd1ff8b4f46d79968"
  },
  {
    "url": "backend/index.html",
    "revision": "3f549eb01866db36bc5573dfe9e77d87"
  },
  {
    "url": "backend/nodejs/events.html",
    "revision": "aa42d879591d5ff90d6cd21093f1c651"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "859b8f9d787fd9eae45e1e3c796fc3ba"
  },
  {
    "url": "frontend/browser/bom.html",
    "revision": "fa3ce5a10f8c6d89312f255a67bc21cd"
  },
  {
    "url": "frontend/browser/cross-domain.html",
    "revision": "cbbb70fb8e9ec47952801e4f72be0e33"
  },
  {
    "url": "frontend/browser/dom.html",
    "revision": "285d4716bf285c4620758f51f964f1b5"
  },
  {
    "url": "frontend/browser/events.html",
    "revision": "d76dfeed0676d4f3cc72517fbc5a04d0"
  },
  {
    "url": "frontend/browser/index.html",
    "revision": "077b77065d189372677293a2781ff267"
  },
  {
    "url": "frontend/browser/memory-management.html",
    "revision": "8d22807344e25571a5cee9bc95689db3"
  },
  {
    "url": "frontend/browser/pwa.html",
    "revision": "8d187f8cc1776f5cf0c89430dd80a9e3"
  },
  {
    "url": "frontend/browser/render.html",
    "revision": "d1580c9bde879cef6328161f30cf0931"
  },
  {
    "url": "frontend/browser/storage.html",
    "revision": "edb1e0776e1c0233d95eeae3a1cd98eb"
  },
  {
    "url": "frontend/browser/web-performance.html",
    "revision": "2e318f6ddafbdfb68eca7918eee3b936"
  },
  {
    "url": "frontend/browser/web-security.html",
    "revision": "35866ed9c712ac3e0c0e1518db557a87"
  },
  {
    "url": "frontend/css/css-animations.html",
    "revision": "02093103d9282484fb184cb2d2a44fbb"
  },
  {
    "url": "frontend/css/css-border.html",
    "revision": "10129bb3e092cbf1f32645a956de10aa"
  },
  {
    "url": "frontend/css/css-box-model.html",
    "revision": "73b98d8f8fc5c44bc1b55b93fcd1fb95"
  },
  {
    "url": "frontend/css/css-color-and-background-and-gradients.html",
    "revision": "341159d1d08403b0af6c9076535a0541"
  },
  {
    "url": "frontend/css/css-css-and-documents.html",
    "revision": "2c08424d1b462c498613bdbf6fefd867"
  },
  {
    "url": "frontend/css/css-filters-blending-clipping-masking.html",
    "revision": "8382daa38da04d381a7e1d3f61eead26"
  },
  {
    "url": "frontend/css/css-flexbox-layout.html",
    "revision": "aaa0f341d39780c264bcae31439e58dc"
  },
  {
    "url": "frontend/css/css-floating.html",
    "revision": "7cba09912ef99e8856dff6e4ff1264f5"
  },
  {
    "url": "frontend/css/css-fonts.html",
    "revision": "02a967d1c3842bac90ca52519aa77cc8"
  },
  {
    "url": "frontend/css/css-grid-layout.html",
    "revision": "5b2df1a97de95d9474eaf21f67b553ad"
  },
  {
    "url": "frontend/css/css-positioning.html",
    "revision": "3420db75ba500133914a88a0c236e145"
  },
  {
    "url": "frontend/css/css-selectors.html",
    "revision": "d074d45bfca19c824ba0fd2eb1ebab6a"
  },
  {
    "url": "frontend/css/css-shapes.html",
    "revision": "6a72b063d12e6296d674ffad11032816"
  },
  {
    "url": "frontend/css/css-specificity-and-cascade.html",
    "revision": "008677a8a1796289ebc0f4df0fd4db65"
  },
  {
    "url": "frontend/css/css-table-layout.html",
    "revision": "d69d831ed1377db3fd50593828d04193"
  },
  {
    "url": "frontend/css/css-text-properties.html",
    "revision": "16d32e752ae3203dde56b24e39d3b6ab"
  },
  {
    "url": "frontend/css/css-transforms.html",
    "revision": "424b1aabf0e162d29dd2ed531597e08b"
  },
  {
    "url": "frontend/css/css-transitions.html",
    "revision": "34d315bc8895fbb7317584c30b21169a"
  },
  {
    "url": "frontend/css/css-values-and-units.html",
    "revision": "52181374b7310781eda4b13241048348"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "10cc4a68d3bb3780c0eb033b812f9a9d"
  },
  {
    "url": "frontend/index.html",
    "revision": "381b873c06e58421f89d2c675284ad8a"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "744d540e779ba035e99f2c59ca640642"
  },
  {
    "url": "frontend/js/js-control-flow-and-error-handling.html",
    "revision": "62788154ada6f5f894d1e8408699d39e"
  },
  {
    "url": "frontend/js/js-es2020.html",
    "revision": "472d43b1195c81b86fde27b1adf0e523"
  },
  {
    "url": "frontend/js/js-es2021.html",
    "revision": "84f092fe8ea8913d6da9038a35d5b757"
  },
  {
    "url": "frontend/js/js-expressions-and-operators.html",
    "revision": "36425b6582654521d5d0406997836a06"
  },
  {
    "url": "frontend/js/js-functions.html",
    "revision": "12d0d3fe382e1308d0a03976e4684f86"
  },
  {
    "url": "frontend/js/js-grammar-and-types.html",
    "revision": "30878f4a63b114adbbccb05c823dfa1a"
  },
  {
    "url": "frontend/js/js-in-html.html",
    "revision": "20a4be5b2d4b028cddd225b2c5e3b4cb"
  },
  {
    "url": "frontend/js/js-indexed-collections.html",
    "revision": "fbf5d1440d3043f0d6e1d44c96186b5d"
  },
  {
    "url": "frontend/js/js-keyed-collections.html",
    "revision": "6b31b96930e651449211c3aa439f3d2d"
  },
  {
    "url": "frontend/js/js-meta-programming.html",
    "revision": "7442bea95324f02dcca2062ac2a29287"
  },
  {
    "url": "frontend/js/js-modules.html",
    "revision": "6badcc4f7238bdba39815fc2e2cc33ef"
  },
  {
    "url": "frontend/js/js-numbers-and-dates.html",
    "revision": "580097d3c1babcd719c17707cc62b342"
  },
  {
    "url": "frontend/js/js-promises.html",
    "revision": "0a50ff60f256fb9d2a76bc2bebe48159"
  },
  {
    "url": "frontend/js/js-regular-expressions.html",
    "revision": "811a930b2122ff645015f04fed7360e3"
  },
  {
    "url": "frontend/js/js-strict-mode.html",
    "revision": "f01e638a696f14c8a47121bdc7601347"
  },
  {
    "url": "frontend/js/js-text-formatting.html",
    "revision": "15b2b23e57e7b3e3a11e7d773846cc0d"
  },
  {
    "url": "frontend/js/js-working-with-objects.html",
    "revision": "9a640da8638876602cb1da1995eb9a7a"
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
    "revision": "4913372a2c468d3f63c51fd63c0bdc51"
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
