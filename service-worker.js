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
    "revision": "9262f50a935c611f0f630b0ac8c071cb"
  },
  {
    "url": "about/index.html",
    "revision": "d15cb99b181ff9768f4b05b8693d28c7"
  },
  {
    "url": "algorithm/data-structure/avl-tree.html",
    "revision": "20193d67f35b2f60583ef2cfd1e262ff"
  },
  {
    "url": "algorithm/data-structure/binary-search-tree.html",
    "revision": "63e11ad2649e4a98044a1f884b3960e9"
  },
  {
    "url": "algorithm/data-structure/binary-tree.html",
    "revision": "a72b13d56d5d6d83ee573c885d3fd929"
  },
  {
    "url": "algorithm/data-structure/doubly-linked-list.html",
    "revision": "ac9301a17d5e219ac1c28980e2ef0d44"
  },
  {
    "url": "algorithm/data-structure/hash-table.html",
    "revision": "b2501feace8bdab8bab410c4bec0e50e"
  },
  {
    "url": "algorithm/data-structure/heap.html",
    "revision": "e926663b2ffac04af422652d190a9b79"
  },
  {
    "url": "algorithm/data-structure/index.html",
    "revision": "a4f8c304821187f0c48e9d5f3e98eaab"
  },
  {
    "url": "algorithm/data-structure/linked-list.html",
    "revision": "7825d126d8f6ea6853056f8eba7e7602"
  },
  {
    "url": "algorithm/data-structure/priority-queue.html",
    "revision": "53299451cab4eb26f51ef2bac39f170c"
  },
  {
    "url": "algorithm/data-structure/queue.html",
    "revision": "157e30b87eec3c2a42bbdcb4310158dc"
  },
  {
    "url": "algorithm/data-structure/red-black-tree.html",
    "revision": "09787021c201d6d8c2001a73faf96455"
  },
  {
    "url": "algorithm/data-structure/segment-tree.html",
    "revision": "a053d99b836dc0c3de441bdc7d75a02b"
  },
  {
    "url": "algorithm/data-structure/stack.html",
    "revision": "dcdb91f7bb557bdd5ba6321cddeb3131"
  },
  {
    "url": "algorithm/data-structure/trie.html",
    "revision": "8790d1d1df5b8a0184455fd845e4c0d1"
  },
  {
    "url": "algorithm/index.html",
    "revision": "bf7998c59f9f4f5d8b13094c52da2a83"
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
    "url": "assets/js/40.3deb9faf.js",
    "revision": "3f6580c6c6d9739e54557ae3a2b7c3b3"
  },
  {
    "url": "assets/js/41.12a2da3a.js",
    "revision": "821b16846cedd0cc95c6477592f9407d"
  },
  {
    "url": "assets/js/42.2dc2c035.js",
    "revision": "32939186648634fb04c8871785683c2f"
  },
  {
    "url": "assets/js/43.9f776f3a.js",
    "revision": "7af401ea9a4329922390ac654ed26b2d"
  },
  {
    "url": "assets/js/44.8ba4693b.js",
    "revision": "f34bb144bead11a5b4a5ff3b797c84b7"
  },
  {
    "url": "assets/js/45.dc4b2834.js",
    "revision": "433ddb49fdecf8e70680ba40c3e9da5b"
  },
  {
    "url": "assets/js/46.48f93123.js",
    "revision": "059ba4edb34c3c37e9251748fb35a097"
  },
  {
    "url": "assets/js/47.e6e72281.js",
    "revision": "f1b0891ed1e0aa8aab0280d84e38f12b"
  },
  {
    "url": "assets/js/48.a5d68c52.js",
    "revision": "306e80bb79c7a97e9b35e6b5e038b765"
  },
  {
    "url": "assets/js/49.136c1ab8.js",
    "revision": "2effb3810d8561ba77b8502bbdc0913b"
  },
  {
    "url": "assets/js/5.b5ef3cb1.js",
    "revision": "0d0d10591e77d7c8a410763d67b51e59"
  },
  {
    "url": "assets/js/50.11a0b1e7.js",
    "revision": "9e85122fade87e7154d6603bd9a07afe"
  },
  {
    "url": "assets/js/51.a75ceef8.js",
    "revision": "933b3e2aae089dc2fc2f17b8ed4b5229"
  },
  {
    "url": "assets/js/52.d6dd5753.js",
    "revision": "d35deb1770d81511206fb000eebb7c7c"
  },
  {
    "url": "assets/js/53.66d03938.js",
    "revision": "9938586283f5489359fa0e9c616542e1"
  },
  {
    "url": "assets/js/54.9cd373fd.js",
    "revision": "67b8d79bf20ec2cf2b57f8b2e4b52fb5"
  },
  {
    "url": "assets/js/55.d53ad477.js",
    "revision": "9babe904b5063594d5d825c9c8d9bd74"
  },
  {
    "url": "assets/js/56.b9384067.js",
    "revision": "ee6414148277a174919f8483d1201de9"
  },
  {
    "url": "assets/js/57.0802f1b1.js",
    "revision": "f505f3f825d59e9d349adf1d20f2cae5"
  },
  {
    "url": "assets/js/58.e844f52b.js",
    "revision": "3e5822815cc2730f3707e1645ae48485"
  },
  {
    "url": "assets/js/59.802480a7.js",
    "revision": "3fcc06c6a110004be7020d37d0e8abb5"
  },
  {
    "url": "assets/js/6.31991f89.js",
    "revision": "f7ded1c1c5adf71d06a50f6e9e4d0fed"
  },
  {
    "url": "assets/js/60.d1dcce83.js",
    "revision": "d420c7e1e07254e17ae3888c3d37f411"
  },
  {
    "url": "assets/js/61.c2bcfe1d.js",
    "revision": "287aa8407bd99fd01650ab6f06fece90"
  },
  {
    "url": "assets/js/62.1b99a72f.js",
    "revision": "80319433755ec6297f110ebcb6cf75dc"
  },
  {
    "url": "assets/js/63.04d8c154.js",
    "revision": "300992c147037601f84ac9c467540f1c"
  },
  {
    "url": "assets/js/64.63dee3b2.js",
    "revision": "3f05ad11b36ed0398fc6c61c42bbf0f7"
  },
  {
    "url": "assets/js/65.56333c6a.js",
    "revision": "6ca75eb5ad800b02071a088856323b54"
  },
  {
    "url": "assets/js/66.c6bb6b7a.js",
    "revision": "c9affa0addba3a963b152c8afda5094d"
  },
  {
    "url": "assets/js/67.0be870fc.js",
    "revision": "b8b69c0c1a0453e6ade9ae0b21b152f8"
  },
  {
    "url": "assets/js/68.67055d5f.js",
    "revision": "821ce9eade4cc57770e2e9a2be496bcd"
  },
  {
    "url": "assets/js/69.4a12610b.js",
    "revision": "1fe81c67d65b2ba390eec94fb6b6a507"
  },
  {
    "url": "assets/js/7.4d2cc2eb.js",
    "revision": "4098d68e908724bcdd6c5d34daf388d8"
  },
  {
    "url": "assets/js/70.7d17d32a.js",
    "revision": "f008040716110579195fac68ba859183"
  },
  {
    "url": "assets/js/71.98fc621a.js",
    "revision": "672967bf1493b9161a0faafc4e694203"
  },
  {
    "url": "assets/js/72.98e80016.js",
    "revision": "894a290ee718e492dcb3165d6fa71486"
  },
  {
    "url": "assets/js/73.ba217749.js",
    "revision": "62ce2ec4c63a56702527177b853bf1f7"
  },
  {
    "url": "assets/js/74.637db481.js",
    "revision": "470b4d6802067150022662d51f0012a5"
  },
  {
    "url": "assets/js/8.ace8139b.js",
    "revision": "257aa513042196f646c2c0c6444adbc2"
  },
  {
    "url": "assets/js/9.b60442ad.js",
    "revision": "a05ea520b851cee33554ba363823ee69"
  },
  {
    "url": "assets/js/app.84122de7.js",
    "revision": "33bef397037318465b2365a136bd88f6"
  },
  {
    "url": "assets/js/vendors~docsearch.883d461f.js",
    "revision": "1664a34bb6581ffdd1ff8b4f46d79968"
  },
  {
    "url": "backend/index.html",
    "revision": "ac7c52096dbfa4e94ca12861c679d841"
  },
  {
    "url": "backend/nodejs/events.html",
    "revision": "c0f7e72a375dd970aa9b4347278030cb"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "371761f9e8c4c9fb85b3f0ea794cd550"
  },
  {
    "url": "frontend/browser/bom.html",
    "revision": "cd8ddd2ba48bab5b7e6290aae293d215"
  },
  {
    "url": "frontend/browser/cross-domain.html",
    "revision": "9e6291927c4d6ac06004a8c7560e14a6"
  },
  {
    "url": "frontend/browser/dom.html",
    "revision": "7830f8ff14df8ebdd045c76c990e0518"
  },
  {
    "url": "frontend/browser/events.html",
    "revision": "f8503533bccabced74571c5399506ecc"
  },
  {
    "url": "frontend/browser/index.html",
    "revision": "63c8903fcf147d8a2982b07e3290d99d"
  },
  {
    "url": "frontend/browser/memory-management.html",
    "revision": "9a0adb0e84c16fe03c454ff24df1aa1d"
  },
  {
    "url": "frontend/browser/pwa.html",
    "revision": "df9e77f37044d891354318853ee96cd6"
  },
  {
    "url": "frontend/browser/render.html",
    "revision": "29c64e4b69836f4f3a26415244c1aaf9"
  },
  {
    "url": "frontend/browser/storage.html",
    "revision": "b9a5263e2d6251ed14f6fd7ab4600426"
  },
  {
    "url": "frontend/browser/web-performance.html",
    "revision": "66594e320f4e0360e3e90736c4fa7ff2"
  },
  {
    "url": "frontend/browser/web-security.html",
    "revision": "046b4c1b3a1be00d5477e40311176b71"
  },
  {
    "url": "frontend/css/css-border.html",
    "revision": "d413647fad9358cd536e34895a9c7143"
  },
  {
    "url": "frontend/css/css-box-model.html",
    "revision": "cec3ce1f6c5999996bc858fc12586350"
  },
  {
    "url": "frontend/css/css-color-and-background-and-gradients.html",
    "revision": "97c5777a2e72676a04cdc40afefc9a68"
  },
  {
    "url": "frontend/css/css-css-and-documents.html",
    "revision": "df3831e615349910b928ce0e671c6d10"
  },
  {
    "url": "frontend/css/css-flexbox-layout.html",
    "revision": "b5464bb73e8b6cd48ef08e5228877092"
  },
  {
    "url": "frontend/css/css-floating.html",
    "revision": "f57571419858d6a3830cac0f38ac4e35"
  },
  {
    "url": "frontend/css/css-fonts.html",
    "revision": "b8ac963413717deabace23f4c5f1113a"
  },
  {
    "url": "frontend/css/css-grid-layout.html",
    "revision": "9b8f86b82ed9bc1abcc9643fe4b2e2ca"
  },
  {
    "url": "frontend/css/css-positioning.html",
    "revision": "b1a4b479135dd42544fc613ffa857471"
  },
  {
    "url": "frontend/css/css-selectors.html",
    "revision": "c81cc642e7d8e4a2f8cab0bb38a3667f"
  },
  {
    "url": "frontend/css/css-shapes.html",
    "revision": "d0d252ff2d5310cc278962cb2c7f1c10"
  },
  {
    "url": "frontend/css/css-specificity-and-cascade.html",
    "revision": "0b73fcd7c8c3ca9953d50f7bb0206bbd"
  },
  {
    "url": "frontend/css/css-table-layout.html",
    "revision": "c634876f2f47da26e73812f730227afd"
  },
  {
    "url": "frontend/css/css-text-properties.html",
    "revision": "528f4c6a0129452df409d499ddc9c666"
  },
  {
    "url": "frontend/css/css-values-and-units.html",
    "revision": "7d0911f0a197fd5ca3458007bd56e4b2"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "154a37aea5b87446e98f68bd72aeadb0"
  },
  {
    "url": "frontend/index.html",
    "revision": "e661b015160f7eb2e151ae187f1a4a90"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "fd3c46836a16b41ef70690f161836864"
  },
  {
    "url": "frontend/js/js-control-flow-and-error-handling.html",
    "revision": "896099a3754d8521d4b0cd1b85071b7a"
  },
  {
    "url": "frontend/js/js-es2020.html",
    "revision": "436c7396da4ae695a336adb1ad09ad9a"
  },
  {
    "url": "frontend/js/js-es2021.html",
    "revision": "9a962505f6852ce6fd225d8f82cef0e3"
  },
  {
    "url": "frontend/js/js-expressions-and-operators.html",
    "revision": "2d0cbe83284497699a6d7d98d62cde3e"
  },
  {
    "url": "frontend/js/js-functions.html",
    "revision": "c1726251e3846fe30314dec54e22a8b9"
  },
  {
    "url": "frontend/js/js-grammar-and-types.html",
    "revision": "0f9790f30d140c0d4b594fc25655aa8b"
  },
  {
    "url": "frontend/js/js-in-html.html",
    "revision": "11562543b760595c9bc0658b58fc3e80"
  },
  {
    "url": "frontend/js/js-indexed-collections.html",
    "revision": "184669e55f6cc0ff1dfab90fe64c52ec"
  },
  {
    "url": "frontend/js/js-keyed-collections.html",
    "revision": "8a0a459e5177f7be3d93f90ade5822ae"
  },
  {
    "url": "frontend/js/js-meta-programming.html",
    "revision": "04484470fbdce3f87a8b63bb9cd5f1fd"
  },
  {
    "url": "frontend/js/js-modules.html",
    "revision": "91836a9399fcee1f2c1bc3332ad819de"
  },
  {
    "url": "frontend/js/js-numbers-and-dates.html",
    "revision": "ca45ec419b0d50411b5f700477ce3c18"
  },
  {
    "url": "frontend/js/js-promises.html",
    "revision": "a10bf0f09ae08e5bad5d5cfddad45caf"
  },
  {
    "url": "frontend/js/js-regular-expressions.html",
    "revision": "e038b42dd6d3760337fa79e2fe66b6a3"
  },
  {
    "url": "frontend/js/js-strict-mode.html",
    "revision": "dc0def70c6abb1d4edbf283314a95717"
  },
  {
    "url": "frontend/js/js-text-formatting.html",
    "revision": "84e7b60772532d45c502d45cc9a69fc0"
  },
  {
    "url": "frontend/js/js-working-with-objects.html",
    "revision": "af467a0673969af8c86310bef414dd3c"
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
    "revision": "1410aced2ec6ff30dc2be458b00879e9"
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
