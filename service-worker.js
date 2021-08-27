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
    "revision": "0954bdb7a4e8a3e0f4ad8a02bd234e96"
  },
  {
    "url": "about/index.html",
    "revision": "ae20bff2f585cfc3df21d09f9c4718f0"
  },
  {
    "url": "algorithm/data-structure/avl-tree.html",
    "revision": "321870ff20e16fb23b3bc96f354ac693"
  },
  {
    "url": "algorithm/data-structure/binary-search-tree.html",
    "revision": "99058e04dd3dff9b130b00e44969b748"
  },
  {
    "url": "algorithm/data-structure/binary-tree.html",
    "revision": "cb8dfb8a89455a3b3f6d2ee3766f82fb"
  },
  {
    "url": "algorithm/data-structure/doubly-linked-list.html",
    "revision": "ea18f1ac6a6494c7266c7d31887dd9fe"
  },
  {
    "url": "algorithm/data-structure/hash-table.html",
    "revision": "d1237718ccad23d2e4543d464cd4e4b6"
  },
  {
    "url": "algorithm/data-structure/heap.html",
    "revision": "ec90da1d322e6a98fd2cb428ab589ab2"
  },
  {
    "url": "algorithm/data-structure/index.html",
    "revision": "c1a115da7079ecf07a180eaae28cc7d3"
  },
  {
    "url": "algorithm/data-structure/linked-list.html",
    "revision": "d80791712cdcd37859b06e30c44dfe84"
  },
  {
    "url": "algorithm/data-structure/priority-queue.html",
    "revision": "1430b9274df2fa93d558c6af07ad9f00"
  },
  {
    "url": "algorithm/data-structure/queue.html",
    "revision": "3cf008e01a7c4950b4e49edc49d3eba6"
  },
  {
    "url": "algorithm/data-structure/red-black-tree.html",
    "revision": "dca9be45c4677e97d526f3bf942a09bd"
  },
  {
    "url": "algorithm/data-structure/segment-tree.html",
    "revision": "72f35af46e61d8d4b07f60365907440d"
  },
  {
    "url": "algorithm/data-structure/stack.html",
    "revision": "1e183cda0e82628be6f3d7dcf3c3d687"
  },
  {
    "url": "algorithm/data-structure/trie.html",
    "revision": "091b2a69c588ffdf0fa5abe403ca1d0d"
  },
  {
    "url": "algorithm/index.html",
    "revision": "3852d3333b15187b4f115195815e3cca"
  },
  {
    "url": "assets/css/0.styles.8b2f1da5.css",
    "revision": "f6712044c3ad80eac0b6ab822881809b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.688d9625.js",
    "revision": "0a944915776da0984b244e28e94340f7"
  },
  {
    "url": "assets/js/11.583aa56a.js",
    "revision": "28d358c868032197905a116e7305fcd5"
  },
  {
    "url": "assets/js/12.10a32fff.js",
    "revision": "2e022834fbb43e9785699f490993fcad"
  },
  {
    "url": "assets/js/13.aa132f1e.js",
    "revision": "9fc74454adcbc00c06ec05497ebb41c0"
  },
  {
    "url": "assets/js/14.38f35143.js",
    "revision": "92a182ad0b73cae0f75b78ce57f00899"
  },
  {
    "url": "assets/js/15.dd03b862.js",
    "revision": "8ab7de9ad3d25674116c32974c6a129f"
  },
  {
    "url": "assets/js/16.ad1c7355.js",
    "revision": "04890269caf9c3eafe1c42a1146e53e8"
  },
  {
    "url": "assets/js/17.eb1e03e0.js",
    "revision": "46a11a22e2bb0003099a5bd15b36c551"
  },
  {
    "url": "assets/js/18.87a484f4.js",
    "revision": "d056c73a70fd6e2b2572bfeea6b0c609"
  },
  {
    "url": "assets/js/19.dc61d30b.js",
    "revision": "b53877704bd4df57d3832aa67839a55c"
  },
  {
    "url": "assets/js/20.4608c6c4.js",
    "revision": "28c083fa9cb7f27339a7ce4b996ebd02"
  },
  {
    "url": "assets/js/21.ebe0d766.js",
    "revision": "3d86be1897ae11f0c2287a1366ec3014"
  },
  {
    "url": "assets/js/22.0ea03d67.js",
    "revision": "d7872a05cb1056baf5c3cee85b6dece9"
  },
  {
    "url": "assets/js/23.9f2aa759.js",
    "revision": "66b084286331885733034104f9710f11"
  },
  {
    "url": "assets/js/24.e4d5f7d2.js",
    "revision": "530af1301f00bc5be394eb645e183064"
  },
  {
    "url": "assets/js/25.67cf8876.js",
    "revision": "1dc05188f24a47336db9cade28cc3096"
  },
  {
    "url": "assets/js/26.228cc0db.js",
    "revision": "a52632e28c6678e54d791c91a11185aa"
  },
  {
    "url": "assets/js/27.dff5601e.js",
    "revision": "c42570b3539fb9fcb5253c874e69c217"
  },
  {
    "url": "assets/js/28.a701cb25.js",
    "revision": "be4f5bde7992e798c40de9175aaaa3c0"
  },
  {
    "url": "assets/js/29.ab567c53.js",
    "revision": "f6143debd91dc506ea08e12ad0c3f172"
  },
  {
    "url": "assets/js/3.9ea24740.js",
    "revision": "53053ee2187c041f4f7eb01cd2b0f3ae"
  },
  {
    "url": "assets/js/30.156fc13e.js",
    "revision": "2c4aeb6526cbe5dbbcbf7c46e0098bec"
  },
  {
    "url": "assets/js/31.7664ef45.js",
    "revision": "cda5a14612f4ca1c7030b688585a7539"
  },
  {
    "url": "assets/js/32.c646cebf.js",
    "revision": "5396c5a354843e091beb12edf857fb79"
  },
  {
    "url": "assets/js/33.361fe092.js",
    "revision": "825aebee3d0939b4c5fc65a16d9d87e8"
  },
  {
    "url": "assets/js/34.f9c21455.js",
    "revision": "f2ab038d09cd5ecfc7c32f3dabdefab6"
  },
  {
    "url": "assets/js/35.7e0b207f.js",
    "revision": "992d99d9aa63fd8694229a0a1f34bca9"
  },
  {
    "url": "assets/js/36.bb672fee.js",
    "revision": "a2b47775011ae5e8b90319c90021462c"
  },
  {
    "url": "assets/js/37.5846c1d7.js",
    "revision": "74543baa77557faad2f5cf36c18bd329"
  },
  {
    "url": "assets/js/38.f35c357e.js",
    "revision": "f19b88045a705fd8356999dbc8b13d78"
  },
  {
    "url": "assets/js/39.b4d387d9.js",
    "revision": "4526e2733ff20639c5ad25bfda361179"
  },
  {
    "url": "assets/js/4.851aaad8.js",
    "revision": "911c02c9c9dbddcabb6c942319c4824a"
  },
  {
    "url": "assets/js/40.35be1448.js",
    "revision": "32388f37235ca68d4e92c96a38087946"
  },
  {
    "url": "assets/js/41.82506e8f.js",
    "revision": "5bd55a54f456d8cb85b061161a0fbd14"
  },
  {
    "url": "assets/js/42.041f8c83.js",
    "revision": "fa9d3a2f62bd6cf190646d1219dcdb2e"
  },
  {
    "url": "assets/js/43.d028a865.js",
    "revision": "4749023279813438eab493e8b2015b1e"
  },
  {
    "url": "assets/js/44.a8e2590e.js",
    "revision": "363db3709916eaba39b20d669b7c0ac4"
  },
  {
    "url": "assets/js/45.bf4c467b.js",
    "revision": "186731aca6300e7be60467ae5e03ac65"
  },
  {
    "url": "assets/js/46.b60b8011.js",
    "revision": "dcaa3924a3b341434a27cf5e868cdacf"
  },
  {
    "url": "assets/js/47.c2f97bfd.js",
    "revision": "dfb7b11f70426cfbaf85a4eb7c18d480"
  },
  {
    "url": "assets/js/48.6b5c4dbb.js",
    "revision": "a10ba33bdaa07d139a2fc020bdc4d956"
  },
  {
    "url": "assets/js/49.de744024.js",
    "revision": "43e834900a2084894091d629f1f4aa9f"
  },
  {
    "url": "assets/js/5.53e746a9.js",
    "revision": "ffa1dd0fb1833d88bc8bca73e96c423e"
  },
  {
    "url": "assets/js/50.d42b3adb.js",
    "revision": "0005be644954b349276adf52cefada93"
  },
  {
    "url": "assets/js/51.c9092405.js",
    "revision": "1437e84523df7affd1cb64d34cfd3838"
  },
  {
    "url": "assets/js/52.bb4626e8.js",
    "revision": "0f4ce7b1405378c5d6f412ee9aacfaad"
  },
  {
    "url": "assets/js/53.4c352da1.js",
    "revision": "0668f19ea356b5811f40ba35b1084d1b"
  },
  {
    "url": "assets/js/54.a50aff35.js",
    "revision": "b613f8331843c800481861da346b0d99"
  },
  {
    "url": "assets/js/55.b229bfb9.js",
    "revision": "8879d014a879c791c52cfd51d7b7f045"
  },
  {
    "url": "assets/js/56.ea4c2725.js",
    "revision": "e8285c0c2d45261f1de774a50e004a20"
  },
  {
    "url": "assets/js/57.c9c9ad63.js",
    "revision": "7fccd8577b58085cb74d4c6d77f66523"
  },
  {
    "url": "assets/js/58.8e1996c3.js",
    "revision": "e951baae97bb17542620a9ae3b516a67"
  },
  {
    "url": "assets/js/59.23444f7e.js",
    "revision": "71839f914816d774cf6f332f3e0cb288"
  },
  {
    "url": "assets/js/6.b3c7db3f.js",
    "revision": "3082f551f9dd8762577be5c3373bbb24"
  },
  {
    "url": "assets/js/60.81c23650.js",
    "revision": "63e94c33ea3daeff7873407d8a9a14c1"
  },
  {
    "url": "assets/js/61.545b2b35.js",
    "revision": "8fc294480fbc3fc69ba474082c0ec670"
  },
  {
    "url": "assets/js/62.4c2c2257.js",
    "revision": "6db13bd0fcd8108f7f431ccfaf7877b2"
  },
  {
    "url": "assets/js/63.0b3d4b18.js",
    "revision": "1b58856f6d23e2cd93f831a9ba007c07"
  },
  {
    "url": "assets/js/64.477ecf2d.js",
    "revision": "979abdd9341fd8c56d2df1b11620de35"
  },
  {
    "url": "assets/js/65.93664d9e.js",
    "revision": "6e2ba5576c0d01b5d28ebf3076abd2c4"
  },
  {
    "url": "assets/js/66.f8c6b7be.js",
    "revision": "fca484577d8a7a0fd1504c8e26d1ae5c"
  },
  {
    "url": "assets/js/67.1bb011b9.js",
    "revision": "07aa129ef9bcf3ad2f0a138e0d9238b3"
  },
  {
    "url": "assets/js/68.37f62882.js",
    "revision": "03d7b00643c83d049e915277ff5f3168"
  },
  {
    "url": "assets/js/69.92df6125.js",
    "revision": "3e6c6da907adec981aac5a99efcbc464"
  },
  {
    "url": "assets/js/7.622c11f9.js",
    "revision": "2be105b750bab10bf1b85c080720c738"
  },
  {
    "url": "assets/js/70.d562b60b.js",
    "revision": "37299aeb5f1254e1706ce33be82f89d8"
  },
  {
    "url": "assets/js/71.bd6c6bc0.js",
    "revision": "dc7da4fb7d37b794d75b647e27075db4"
  },
  {
    "url": "assets/js/72.1db45c52.js",
    "revision": "88ee8ce260c95144c91455faccad72ed"
  },
  {
    "url": "assets/js/73.aa0eb233.js",
    "revision": "42371f346d951d96016444485a61d575"
  },
  {
    "url": "assets/js/8.656c7a79.js",
    "revision": "dc9d3037819d795ae41b02f79422a917"
  },
  {
    "url": "assets/js/9.a68884f7.js",
    "revision": "ce39cabfa833cee73c2b0abb80996f2d"
  },
  {
    "url": "assets/js/app.095f4842.js",
    "revision": "cbbcbb9109e9989bc2a70b4c3325850d"
  },
  {
    "url": "assets/js/vendors~docsearch.883d461f.js",
    "revision": "1664a34bb6581ffdd1ff8b4f46d79968"
  },
  {
    "url": "backend/index.html",
    "revision": "dadac0a047c468ee020fa5ad8efce11a"
  },
  {
    "url": "backend/nodejs/events.html",
    "revision": "84d212ac6450e17bce3b2dec94670706"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "5709e8cc579893a681e52b5f681e01b6"
  },
  {
    "url": "frontend/browser/bom.html",
    "revision": "4c177ecf7ee3c4fd30f0626ff6fbc92b"
  },
  {
    "url": "frontend/browser/cross-domain.html",
    "revision": "5777f0ca12638c040e2a79312fb56e35"
  },
  {
    "url": "frontend/browser/dom.html",
    "revision": "d66505882fdd86f4c73fdb9acb54342b"
  },
  {
    "url": "frontend/browser/events.html",
    "revision": "8828704f402182cb943efef0d0fb8be0"
  },
  {
    "url": "frontend/browser/index.html",
    "revision": "bd82729dc640cb19518ab7c663867cd6"
  },
  {
    "url": "frontend/browser/memory-management.html",
    "revision": "8f8ca530139440de8b2ff6369fcbd037"
  },
  {
    "url": "frontend/browser/pwa.html",
    "revision": "05172b766702704200663f81d9d22984"
  },
  {
    "url": "frontend/browser/render.html",
    "revision": "b92850b2af8200fb8b819ab74bdc9b9e"
  },
  {
    "url": "frontend/browser/storage.html",
    "revision": "c65ff75fcc4b2503df6b532ed7ba0a24"
  },
  {
    "url": "frontend/browser/web-performance.html",
    "revision": "8b8a669bda5604408c7aa848eb256cb5"
  },
  {
    "url": "frontend/browser/web-security.html",
    "revision": "6cfebb8633749d5d3325a039f47054e4"
  },
  {
    "url": "frontend/css/css-border.html",
    "revision": "0a627ac61c51005935cf3c18b5ad92c3"
  },
  {
    "url": "frontend/css/css-box-model.html",
    "revision": "b6e39d0640d4c2f6335e89acb274ddc6"
  },
  {
    "url": "frontend/css/css-color-and-background-and-gradients.html",
    "revision": "7d78d588ddb94a749547f4557f66d77e"
  },
  {
    "url": "frontend/css/css-css-and-documents.html",
    "revision": "7e031c62fd240f47bc6bcedd913afe9d"
  },
  {
    "url": "frontend/css/css-flexbox-layout.html",
    "revision": "96ddf5ca8130e1ebc258cc131a45eca2"
  },
  {
    "url": "frontend/css/css-floating.html",
    "revision": "454074a164c50841e779e5aca0fa6501"
  },
  {
    "url": "frontend/css/css-fonts.html",
    "revision": "ba67adb0e9972ff8a898a75d7cf976af"
  },
  {
    "url": "frontend/css/css-grid-layout.html",
    "revision": "0250eec9d8150aace4b18b17d4875ab8"
  },
  {
    "url": "frontend/css/css-positioning.html",
    "revision": "fef3d57fd6d8de9f80aaafe25778dbb6"
  },
  {
    "url": "frontend/css/css-selectors.html",
    "revision": "11791fbfc61fe96930ae2a632511eb5d"
  },
  {
    "url": "frontend/css/css-shapes.html",
    "revision": "4352bb8a5e089f7c6f14722144e9935c"
  },
  {
    "url": "frontend/css/css-specificity-and-cascade.html",
    "revision": "118fa3ea926ba298980869ecb745733b"
  },
  {
    "url": "frontend/css/css-text-properties.html",
    "revision": "d1e0e24d8844174d55aea5ea5b54949c"
  },
  {
    "url": "frontend/css/css-values-and-units.html",
    "revision": "50ea83715bd5efb39bd2f739f02d3ce6"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "6d0009b128fbc36ab4ae7961d474e9c2"
  },
  {
    "url": "frontend/index.html",
    "revision": "8a3723855a62cc1a83e987ada24f4bc2"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "45ded184859c6b9b5f062a38cb919868"
  },
  {
    "url": "frontend/js/js-control-flow-and-error-handling.html",
    "revision": "504cb8dae181b9c7efd9d2c0f464c99e"
  },
  {
    "url": "frontend/js/js-es2020.html",
    "revision": "8704d5242216b3d7e04f56e97eadc016"
  },
  {
    "url": "frontend/js/js-es2021.html",
    "revision": "d622eca6361464739c2919ce53cd26fb"
  },
  {
    "url": "frontend/js/js-expressions-and-operators.html",
    "revision": "6ca8eaaa7d5e774304779d7b8be1961d"
  },
  {
    "url": "frontend/js/js-functions.html",
    "revision": "0bb0c6c394ad9de3ee623991c3436099"
  },
  {
    "url": "frontend/js/js-grammar-and-types.html",
    "revision": "5e803bed293c1d36d4abaa82c50dc82d"
  },
  {
    "url": "frontend/js/js-in-html.html",
    "revision": "cb15c0641ed810b8bc5a9888a69fc92e"
  },
  {
    "url": "frontend/js/js-indexed-collections.html",
    "revision": "8a8a517fbd4a33eca4111f7b92b8c9a8"
  },
  {
    "url": "frontend/js/js-keyed-collections.html",
    "revision": "b1f327e4ce7cfcb95041520d2453f621"
  },
  {
    "url": "frontend/js/js-meta-programming.html",
    "revision": "6622376d5b005a9010c71b821709b40f"
  },
  {
    "url": "frontend/js/js-modules.html",
    "revision": "c76b393be547728a763a27328a295014"
  },
  {
    "url": "frontend/js/js-numbers-and-dates.html",
    "revision": "1bf59015f1777b65d07f9bc4c5e901e2"
  },
  {
    "url": "frontend/js/js-promises.html",
    "revision": "453e24ee3f34f9a02337db598f8ece84"
  },
  {
    "url": "frontend/js/js-regular-expressions.html",
    "revision": "f4cf1a3fad4edaf192ad94d7b4754c40"
  },
  {
    "url": "frontend/js/js-strict-mode.html",
    "revision": "516dc9eef564d5b4deca90b9bb0a4c7f"
  },
  {
    "url": "frontend/js/js-text-formatting.html",
    "revision": "8f18dfaf0d054bc127505a73678b3d7f"
  },
  {
    "url": "frontend/js/js-working-with-objects.html",
    "revision": "889c5b2ff2cdc691754a4f42d981cb76"
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
    "revision": "c131cc2d296d0f7f8832b069a0d4ffd0"
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
