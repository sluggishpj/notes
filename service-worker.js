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
    "revision": "5ceea535a84bbf976bd2b3be91c6c748"
  },
  {
    "url": "about/index.html",
    "revision": "e20e1082480180c562657d1fb89b695e"
  },
  {
    "url": "algorithm/data-structure/avl-tree.html",
    "revision": "131fb808dcf7b26772d2ec0f54cf885b"
  },
  {
    "url": "algorithm/data-structure/binary-search-tree.html",
    "revision": "2a6b5ff1e269bf1d0470bde77bc6339a"
  },
  {
    "url": "algorithm/data-structure/binary-tree.html",
    "revision": "062b436f24b6d2224be307a66f265118"
  },
  {
    "url": "algorithm/data-structure/doubly-linked-list.html",
    "revision": "238e4c1283d5d431a18721e9a5e02007"
  },
  {
    "url": "algorithm/data-structure/hash-table.html",
    "revision": "a51e0bf6fe0114fdfe4c1006a7b9e24e"
  },
  {
    "url": "algorithm/data-structure/heap.html",
    "revision": "b28de77d4698916f0304eeae9522b277"
  },
  {
    "url": "algorithm/data-structure/index.html",
    "revision": "473fa56c30da3f2247154f0ca5fa0126"
  },
  {
    "url": "algorithm/data-structure/linked-list.html",
    "revision": "de5047d284952ec2b0cd831f0f26e671"
  },
  {
    "url": "algorithm/data-structure/priority-queue.html",
    "revision": "6f5ce3ef294f8ab7fe4a43a3fa95e879"
  },
  {
    "url": "algorithm/data-structure/queue.html",
    "revision": "47227945e74cc7af088d6ebc4b04745c"
  },
  {
    "url": "algorithm/data-structure/red-black-tree.html",
    "revision": "63c48d70f93e3256605f8d9c513149ed"
  },
  {
    "url": "algorithm/data-structure/segment-tree.html",
    "revision": "e3875978bf63df1dbf40d95bc6da6a17"
  },
  {
    "url": "algorithm/data-structure/stack.html",
    "revision": "cfbf4a90b8f9e4467f88b921f41f93c1"
  },
  {
    "url": "algorithm/data-structure/trie.html",
    "revision": "640452654106933ca23ee263346ba8cb"
  },
  {
    "url": "algorithm/index.html",
    "revision": "bc141e0460750b28620102f3473ce229"
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
    "url": "assets/js/20.a6f445d4.js",
    "revision": "54e753fe525f90bd04a8795394236b75"
  },
  {
    "url": "assets/js/21.211a1d70.js",
    "revision": "f9bf903991086b2ff4fc134ebef5b503"
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
    "url": "assets/js/27.cc106dc4.js",
    "revision": "e1c91f6f5547e973e6a0d058fbd31be8"
  },
  {
    "url": "assets/js/28.7c93a108.js",
    "revision": "fa42b7c279b07b82bf12486b9720d98e"
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
    "url": "assets/js/49.d4d36668.js",
    "revision": "5408f0ad5f1efa25fcebb66898a2772c"
  },
  {
    "url": "assets/js/5.30c8cc60.js",
    "revision": "f1207cf1bb49d29595d097d5b14d98ee"
  },
  {
    "url": "assets/js/50.5c2f1974.js",
    "revision": "d023a8acb780db525d96831a4c50a8e2"
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
    "url": "assets/js/53.0b457f44.js",
    "revision": "83629851b932d53193b82f2604db0103"
  },
  {
    "url": "assets/js/54.3444d8c3.js",
    "revision": "da653820fafb648f8be5c9103ec0ce37"
  },
  {
    "url": "assets/js/55.53c8531f.js",
    "revision": "3fc6ceedc4bf029a90deced4c3f8641e"
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
    "url": "assets/js/7.4d2cc2eb.js",
    "revision": "4098d68e908724bcdd6c5d34daf388d8"
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
    "url": "assets/js/72.7727bfa1.js",
    "revision": "3522718adafb007b84b890463fd12e81"
  },
  {
    "url": "assets/js/73.2a25407d.js",
    "revision": "1bd8b43a04a0074c53eae9241d782dd0"
  },
  {
    "url": "assets/js/74.013aaa13.js",
    "revision": "4104cea40b81e98fc6e533c0136e5eac"
  },
  {
    "url": "assets/js/75.fb37916f.js",
    "revision": "f234274fbc185d45909f6e4fe667df95"
  },
  {
    "url": "assets/js/76.df897516.js",
    "revision": "e99b961e5f28a49947ddcb031dce6fea"
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
    "url": "assets/js/8.ace8139b.js",
    "revision": "257aa513042196f646c2c0c6444adbc2"
  },
  {
    "url": "assets/js/9.b60442ad.js",
    "revision": "a05ea520b851cee33554ba363823ee69"
  },
  {
    "url": "assets/js/app.107cfe44.js",
    "revision": "ca2371f4d5ce11f6ae4110a06d66edbc"
  },
  {
    "url": "assets/js/vendors~docsearch.883d461f.js",
    "revision": "1664a34bb6581ffdd1ff8b4f46d79968"
  },
  {
    "url": "backend/index.html",
    "revision": "5883d2c090bc7c292d29ce6a8cd6d74b"
  },
  {
    "url": "backend/nodejs/events.html",
    "revision": "77dad1ffe3770944e012ae9934a5882c"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "c29774631c61c0dd252c4d7148257e9b"
  },
  {
    "url": "frontend/browser/bom.html",
    "revision": "76b8ff51b30c6c01f4396fe60f333217"
  },
  {
    "url": "frontend/browser/cross-domain.html",
    "revision": "6cc6ba13a87185030af9f5fa632c2c6b"
  },
  {
    "url": "frontend/browser/dom.html",
    "revision": "5da4cfc1bbe04c46a19349603917e57d"
  },
  {
    "url": "frontend/browser/events.html",
    "revision": "7d4d2a9f85c33bc1f55cdbeb813e7ea7"
  },
  {
    "url": "frontend/browser/index.html",
    "revision": "ce3362b2a6a37d7d89889aee67d4d51f"
  },
  {
    "url": "frontend/browser/memory-management.html",
    "revision": "9918c4f9806662159972866012401a9f"
  },
  {
    "url": "frontend/browser/pwa.html",
    "revision": "b4b4242b6fc3d5db0ee158ee741ac339"
  },
  {
    "url": "frontend/browser/render.html",
    "revision": "3613007aa28e95a52f386aca135a0d03"
  },
  {
    "url": "frontend/browser/storage.html",
    "revision": "4bc551557c858184f4f6202170f0bd78"
  },
  {
    "url": "frontend/browser/web-performance.html",
    "revision": "daf5e21bb36f6d8f3ea0c570ebdd76c0"
  },
  {
    "url": "frontend/browser/web-security.html",
    "revision": "5fe62baf11747332d51d13d7e6afbdca"
  },
  {
    "url": "frontend/css/css-animations.html",
    "revision": "89c6275c573935acb2dcf0a5726d30ac"
  },
  {
    "url": "frontend/css/css-border.html",
    "revision": "ffd8e07447969be78323698ab88a75a6"
  },
  {
    "url": "frontend/css/css-box-model.html",
    "revision": "b2b1b7efbf446d852c921375b382df94"
  },
  {
    "url": "frontend/css/css-color-and-background-and-gradients.html",
    "revision": "e5c444464e48c2108ffa771cb7625f6b"
  },
  {
    "url": "frontend/css/css-css-and-documents.html",
    "revision": "3af60082b2d38925cc2e5930e79cd81a"
  },
  {
    "url": "frontend/css/css-filters-blending-clipping-masking.html",
    "revision": "780aab46358cac185eb90c29737f2639"
  },
  {
    "url": "frontend/css/css-flexbox-layout.html",
    "revision": "2c19043c47366f73af5bec3b889037c5"
  },
  {
    "url": "frontend/css/css-floating.html",
    "revision": "8e6d75021eb4f2bf8b3c6990b234be50"
  },
  {
    "url": "frontend/css/css-fonts.html",
    "revision": "d3ad8621b2128ed244b72faaa2491a7a"
  },
  {
    "url": "frontend/css/css-grid-layout.html",
    "revision": "dbe30acdf56c43e923c32a20eec499b8"
  },
  {
    "url": "frontend/css/css-positioning.html",
    "revision": "a257e30aee9458492c4c8612e407bcb7"
  },
  {
    "url": "frontend/css/css-selectors.html",
    "revision": "44b701a2268a571452835fa5a2c20344"
  },
  {
    "url": "frontend/css/css-shapes.html",
    "revision": "03f29801f6229d5d65bcddbfc078cc87"
  },
  {
    "url": "frontend/css/css-specificity-and-cascade.html",
    "revision": "264fbbd7aecef04c4ed98773c77a4016"
  },
  {
    "url": "frontend/css/css-table-layout.html",
    "revision": "874f93e5d2ac567e270d35001ba38424"
  },
  {
    "url": "frontend/css/css-text-properties.html",
    "revision": "051ea0ddec3cb8c3a56255e8886d0f6a"
  },
  {
    "url": "frontend/css/css-transforms.html",
    "revision": "1f349dbe0bca8e43e83f4994a369cf30"
  },
  {
    "url": "frontend/css/css-transitions.html",
    "revision": "c60f9d0382916d3b3bc212c46cf3a401"
  },
  {
    "url": "frontend/css/css-values-and-units.html",
    "revision": "a681499fdeb1d8985edd81b057b8d732"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "e063d4f1b986dbe5a3414a1392b6ec78"
  },
  {
    "url": "frontend/index.html",
    "revision": "af4f65733302c5db5df7339d1104db0a"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "2067f9c396e7b251e8ddf0b33c79329b"
  },
  {
    "url": "frontend/js/js-control-flow-and-error-handling.html",
    "revision": "bab96f972658a39b9d063d08d44ee1ea"
  },
  {
    "url": "frontend/js/js-es2020.html",
    "revision": "f457202a5ca99114bab5cd42ca7861e2"
  },
  {
    "url": "frontend/js/js-es2021.html",
    "revision": "95569388bdce7da44013ebbd851ab94b"
  },
  {
    "url": "frontend/js/js-expressions-and-operators.html",
    "revision": "0eb9a8e7c8858a1d3b79847fa0c01422"
  },
  {
    "url": "frontend/js/js-functions.html",
    "revision": "00e7d7c792f712408ffc202d53c2f04b"
  },
  {
    "url": "frontend/js/js-grammar-and-types.html",
    "revision": "403f4f62b35a2d2033f4711578e5b787"
  },
  {
    "url": "frontend/js/js-in-html.html",
    "revision": "fdd90aa5d88b1f2ec11cb7b149c44f4c"
  },
  {
    "url": "frontend/js/js-indexed-collections.html",
    "revision": "0d7eb3edeef134a6f2826b4aab35b463"
  },
  {
    "url": "frontend/js/js-keyed-collections.html",
    "revision": "89dc4dc5d49173983ab1f7b0f7747fc2"
  },
  {
    "url": "frontend/js/js-meta-programming.html",
    "revision": "ceb672c9ab0cd57fb3835175573d2304"
  },
  {
    "url": "frontend/js/js-modules.html",
    "revision": "0e7f53014881800bd598a2a5d602ad7d"
  },
  {
    "url": "frontend/js/js-numbers-and-dates.html",
    "revision": "01d02af427d6f992bac325d9d4d21fb1"
  },
  {
    "url": "frontend/js/js-promises.html",
    "revision": "8db9c65211e399854fc59288f7ca5a96"
  },
  {
    "url": "frontend/js/js-regular-expressions.html",
    "revision": "0ac3db56fdcf82cedcf283c3f43b30d2"
  },
  {
    "url": "frontend/js/js-strict-mode.html",
    "revision": "485d70784f70a0ab3cc62f219e7c201b"
  },
  {
    "url": "frontend/js/js-text-formatting.html",
    "revision": "c5eeaf5dcbcf59f0a8a6d05287f70ce2"
  },
  {
    "url": "frontend/js/js-working-with-objects.html",
    "revision": "f4a7483d4567c9ee08bd0beb280e11a4"
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
    "revision": "7c1507444e78535418481c761d0e3207"
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
