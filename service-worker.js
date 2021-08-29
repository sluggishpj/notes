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
    "revision": "f1934d9072fd0ad44a38b718bea933b5"
  },
  {
    "url": "about/index.html",
    "revision": "4e60a01dad161f15b1601c49325bea5c"
  },
  {
    "url": "algorithm/data-structure/avl-tree.html",
    "revision": "a8bc1819d4e6685d81e2a1549c7e5c89"
  },
  {
    "url": "algorithm/data-structure/binary-search-tree.html",
    "revision": "b4c62f4dd66f49efbac16a8b3d512b86"
  },
  {
    "url": "algorithm/data-structure/binary-tree.html",
    "revision": "d27a13e08c28fab074db8d108eee15d3"
  },
  {
    "url": "algorithm/data-structure/doubly-linked-list.html",
    "revision": "f44560daba9001906f2efc1cad92bf9d"
  },
  {
    "url": "algorithm/data-structure/hash-table.html",
    "revision": "1d724ffc2d49a6b4aa3147cee79297ff"
  },
  {
    "url": "algorithm/data-structure/heap.html",
    "revision": "b6efc478a81832515b6132c3d570f9cc"
  },
  {
    "url": "algorithm/data-structure/index.html",
    "revision": "1399c7411e32312343935f1a0a7eca47"
  },
  {
    "url": "algorithm/data-structure/linked-list.html",
    "revision": "2d7dc7a29d920e478403da12387f3b2f"
  },
  {
    "url": "algorithm/data-structure/priority-queue.html",
    "revision": "117de6203f3b9f345277e475bb133eed"
  },
  {
    "url": "algorithm/data-structure/queue.html",
    "revision": "aebd41317c44c6fd7b462129cce92b73"
  },
  {
    "url": "algorithm/data-structure/red-black-tree.html",
    "revision": "d2e9ab49e44e5c91e481a50cbd01c2fa"
  },
  {
    "url": "algorithm/data-structure/segment-tree.html",
    "revision": "10dc510d092c076ec8ff36719d66d45d"
  },
  {
    "url": "algorithm/data-structure/stack.html",
    "revision": "271b68b10845703c4e0cfd7c1554b087"
  },
  {
    "url": "algorithm/data-structure/trie.html",
    "revision": "3414991382b380729c0b026d041a6a20"
  },
  {
    "url": "algorithm/index.html",
    "revision": "d4f16e95c1d9b9bcb29b8b72727d61bf"
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
    "url": "assets/js/35.fba64404.js",
    "revision": "48ecfb91d264068ecf68e3ddafda5ec4"
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
    "url": "assets/js/56.60a69932.js",
    "revision": "fb8aefa47f3537c6e23d24daa6c60921"
  },
  {
    "url": "assets/js/57.e8b7a50e.js",
    "revision": "5f59cc1303384a545acda9c9de32887b"
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
    "url": "assets/js/7.4ba66d62.js",
    "revision": "2d33a14646d27b38a886605b992e775a"
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
    "url": "assets/js/8.dbf84eb6.js",
    "revision": "c74131b0d610cf7b4c2fe7e86d9adeee"
  },
  {
    "url": "assets/js/9.b60442ad.js",
    "revision": "a05ea520b851cee33554ba363823ee69"
  },
  {
    "url": "assets/js/app.be4af3d6.js",
    "revision": "15ccbed85f3df8ec3dba439f2d6dc2a3"
  },
  {
    "url": "assets/js/vendors~docsearch.883d461f.js",
    "revision": "1664a34bb6581ffdd1ff8b4f46d79968"
  },
  {
    "url": "backend/index.html",
    "revision": "4506e944b2dcb541adcc26c57dd687ff"
  },
  {
    "url": "backend/nodejs/events.html",
    "revision": "d64b1dacb21b2fdc504f6ba6883ed3c6"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "377d8302ae6f550f72f7bee146da12df"
  },
  {
    "url": "frontend/browser/bom.html",
    "revision": "86390d9b31e3e87af5adec72188ed6f5"
  },
  {
    "url": "frontend/browser/cross-domain.html",
    "revision": "01977d379fd5616d568ad253fed113fd"
  },
  {
    "url": "frontend/browser/dom.html",
    "revision": "886a4efe293593dc24165ee6f9cec89d"
  },
  {
    "url": "frontend/browser/events.html",
    "revision": "1b805da8e2ff1f9fa547d76f661f147e"
  },
  {
    "url": "frontend/browser/index.html",
    "revision": "f74f1317df3dd5a67434c770e9195891"
  },
  {
    "url": "frontend/browser/memory-management.html",
    "revision": "5be06d4d0cda880460bfc8feb510a2b5"
  },
  {
    "url": "frontend/browser/pwa.html",
    "revision": "a5c54ec4486500158de271462525bf52"
  },
  {
    "url": "frontend/browser/render.html",
    "revision": "28c9c74d2feb88fa0390aae1df35fd86"
  },
  {
    "url": "frontend/browser/storage.html",
    "revision": "a7e883519e72635edc445fccef467bc2"
  },
  {
    "url": "frontend/browser/web-performance.html",
    "revision": "6528be2449f7722706a4f2dce8900856"
  },
  {
    "url": "frontend/browser/web-security.html",
    "revision": "9915bfb395ba3bf1f72e78354cd738d6"
  },
  {
    "url": "frontend/css/css-border.html",
    "revision": "4adb7df78964b4cf701db339e098cbd9"
  },
  {
    "url": "frontend/css/css-box-model.html",
    "revision": "bff15e141a1bc14313da3f504840c4cf"
  },
  {
    "url": "frontend/css/css-color-and-background-and-gradients.html",
    "revision": "d1b205abf3fe31b913784364ced6fb72"
  },
  {
    "url": "frontend/css/css-css-and-documents.html",
    "revision": "47bc083bf410439a1b7639d45c4a0da0"
  },
  {
    "url": "frontend/css/css-flexbox-layout.html",
    "revision": "4a3ee3d6259d9349a60fc849961ea2a3"
  },
  {
    "url": "frontend/css/css-floating.html",
    "revision": "2d5ed8e31e00c84bba97ac8b221224d3"
  },
  {
    "url": "frontend/css/css-fonts.html",
    "revision": "e7855ef5bdfe0abadd4285b6248ca525"
  },
  {
    "url": "frontend/css/css-grid-layout.html",
    "revision": "cdb9d029755b2c2b25d0896fa29e8388"
  },
  {
    "url": "frontend/css/css-positioning.html",
    "revision": "68ecfe1e9d7b6f04bc7ababb669b6c5d"
  },
  {
    "url": "frontend/css/css-selectors.html",
    "revision": "346dec3e1d51e8e1bd382a50e124a194"
  },
  {
    "url": "frontend/css/css-shapes.html",
    "revision": "fb8050d8096c023a1d85f5ad956ebb03"
  },
  {
    "url": "frontend/css/css-specificity-and-cascade.html",
    "revision": "27a850370d93e7d23dab07778eca4a84"
  },
  {
    "url": "frontend/css/css-table-layout.html",
    "revision": "e1ed884f877dda55a51cf4cad88cb5c1"
  },
  {
    "url": "frontend/css/css-text-properties.html",
    "revision": "986cd554597e96a221e0f096c176090e"
  },
  {
    "url": "frontend/css/css-values-and-units.html",
    "revision": "682c9490f7b39aa1f116e0292be5c9a4"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "b3f0b8bb9f7c93c0e404d48e6cdcae7d"
  },
  {
    "url": "frontend/index.html",
    "revision": "09a634fa0371ea59281f22e39a3c872f"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "c24f0169a38d4339a2a1148a59129751"
  },
  {
    "url": "frontend/js/js-control-flow-and-error-handling.html",
    "revision": "18212e8f9ab571d8cfd2af48108d336a"
  },
  {
    "url": "frontend/js/js-es2020.html",
    "revision": "14df63e773a7fde0427acf31ca009139"
  },
  {
    "url": "frontend/js/js-es2021.html",
    "revision": "a3c8eb93bb6729db7e55d304d4136170"
  },
  {
    "url": "frontend/js/js-expressions-and-operators.html",
    "revision": "a2f1188366fc24435c8298d202bac665"
  },
  {
    "url": "frontend/js/js-functions.html",
    "revision": "01a2645c4f49541966a79a9b1ac02f17"
  },
  {
    "url": "frontend/js/js-grammar-and-types.html",
    "revision": "bcab81eb01a659eaec5ec64dd4e5b23b"
  },
  {
    "url": "frontend/js/js-in-html.html",
    "revision": "128d578bdc3ccd28d180f909500713d6"
  },
  {
    "url": "frontend/js/js-indexed-collections.html",
    "revision": "55fe853890c46345b361fede1fcc92ac"
  },
  {
    "url": "frontend/js/js-keyed-collections.html",
    "revision": "67c9c336f026f29995e20757ebf56a02"
  },
  {
    "url": "frontend/js/js-meta-programming.html",
    "revision": "2a7fc7468cd0bd25bb66c2aa7f2f8fb8"
  },
  {
    "url": "frontend/js/js-modules.html",
    "revision": "4034cdc7880fcc3b3c8f01b991dba666"
  },
  {
    "url": "frontend/js/js-numbers-and-dates.html",
    "revision": "ba849465e2f66a552cfe747b575c05b8"
  },
  {
    "url": "frontend/js/js-promises.html",
    "revision": "0f038dfe5a264d7919a5f71260b0e3dd"
  },
  {
    "url": "frontend/js/js-regular-expressions.html",
    "revision": "c6cf53acba49cee95e63d6c6c57551f0"
  },
  {
    "url": "frontend/js/js-strict-mode.html",
    "revision": "2d4ffaf470c962a73e398bee7653f54d"
  },
  {
    "url": "frontend/js/js-text-formatting.html",
    "revision": "139f7608ef33e6f29a6c2c6cc1d478be"
  },
  {
    "url": "frontend/js/js-working-with-objects.html",
    "revision": "6cfc2e2076ac0ccb3421a8e0732586a5"
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
    "revision": "aa0affc11f5127f8326fa2c5ddd870f9"
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
