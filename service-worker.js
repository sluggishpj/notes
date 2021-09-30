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
    "revision": "5521d792784df8995b9c896c7c4c34f3"
  },
  {
    "url": "about/index.html",
    "revision": "996b0a5a5e67852b38f276a8fdf13027"
  },
  {
    "url": "algorithm/algorithms/array-sorting-algorithms.html",
    "revision": "470e834b6e8dbd4ecf11e138a17b3278"
  },
  {
    "url": "algorithm/algorithms/index.html",
    "revision": "6bdc060f36f572095531abd29c8ab100"
  },
  {
    "url": "algorithm/data-structure/avl-tree.html",
    "revision": "67c9c47f87c54aec4195bb5e8c51bbda"
  },
  {
    "url": "algorithm/data-structure/binary-search-tree.html",
    "revision": "efa2ca642d7bee48f5c3fa2d3e506cb0"
  },
  {
    "url": "algorithm/data-structure/binary-tree.html",
    "revision": "a9b1d489cea707c94ec02fb944fa6908"
  },
  {
    "url": "algorithm/data-structure/doubly-linked-list.html",
    "revision": "6185473ed8c5e527999ae5c09278f5f8"
  },
  {
    "url": "algorithm/data-structure/hash-table.html",
    "revision": "908c64b5ef0948094b387131c2cd013a"
  },
  {
    "url": "algorithm/data-structure/heap.html",
    "revision": "83947936e28d07449c668d8845111b8b"
  },
  {
    "url": "algorithm/data-structure/index.html",
    "revision": "97ba1f69cc9c6472647cbf7f1d835832"
  },
  {
    "url": "algorithm/data-structure/linked-list.html",
    "revision": "7899d6b16d65a5366b8c090521e023c6"
  },
  {
    "url": "algorithm/data-structure/priority-queue.html",
    "revision": "820075354474454ecd5ba413230bbac8"
  },
  {
    "url": "algorithm/data-structure/queue.html",
    "revision": "8b1b9ed3403c8fed8163f5d7f1e42618"
  },
  {
    "url": "algorithm/data-structure/red-black-tree.html",
    "revision": "9e65672b0ae2c98d3d0eff6886d53799"
  },
  {
    "url": "algorithm/data-structure/segment-tree.html",
    "revision": "a154b937eaa7060daf6867527cd2ac8f"
  },
  {
    "url": "algorithm/data-structure/stack.html",
    "revision": "76f00ca693a6bad3753de9ea2b5ef88a"
  },
  {
    "url": "algorithm/data-structure/trie.html",
    "revision": "86710d4cce8b5c0e9c135816600e972f"
  },
  {
    "url": "algorithm/index.html",
    "revision": "1c7bd6db6eae8e41cb2f77298eff1daf"
  },
  {
    "url": "assets/css/0.styles.79b97732.css",
    "revision": "073634410badb5cda98933e594e73a4c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c3e7a846.js",
    "revision": "269a97e5e1b06d3a64738f79d0219d75"
  },
  {
    "url": "assets/js/11.adf5d2e3.js",
    "revision": "af6951d8058353a0ec3fa8698327abf3"
  },
  {
    "url": "assets/js/12.7adcd172.js",
    "revision": "e9bd721e399edd3db8c6b5e9ba8a93d7"
  },
  {
    "url": "assets/js/13.a2590bc4.js",
    "revision": "1c54ab46c328d69e6e7571aedc56c623"
  },
  {
    "url": "assets/js/14.ffe01c58.js",
    "revision": "461b84ecf02e4c39f9b6b087e0b1a04f"
  },
  {
    "url": "assets/js/15.4239fdf6.js",
    "revision": "788628d204e685ebd4a6713683219e6c"
  },
  {
    "url": "assets/js/16.c2ae9c0e.js",
    "revision": "b502e05cd138371585c5b2dcca1d03b8"
  },
  {
    "url": "assets/js/17.455cd117.js",
    "revision": "c5643c6682ab5c3179055c22f8eb913a"
  },
  {
    "url": "assets/js/18.c348f713.js",
    "revision": "81a0fedb065d4f7def527cbad53a7f80"
  },
  {
    "url": "assets/js/19.0f494225.js",
    "revision": "5e1385d570ccd4f1c5fe86b56dfaa0a2"
  },
  {
    "url": "assets/js/20.251d448a.js",
    "revision": "3c3565519704634947624593867553b5"
  },
  {
    "url": "assets/js/21.0ed722d5.js",
    "revision": "5a94e909758e7a794d3f188573d020a9"
  },
  {
    "url": "assets/js/22.e98fd9ae.js",
    "revision": "ded7dcdfdc5d29f35758459007bfefc4"
  },
  {
    "url": "assets/js/23.ff32bec9.js",
    "revision": "f14a28bf2ebbd28addec6664db4d7b26"
  },
  {
    "url": "assets/js/24.a2a6ff80.js",
    "revision": "2561b940edf4fa138f0b63458a1edf62"
  },
  {
    "url": "assets/js/25.d4bee658.js",
    "revision": "2ffdaa5090eddf96b0448e904f2f7eac"
  },
  {
    "url": "assets/js/26.e645dedd.js",
    "revision": "925158d66e7dd3c09e5488f38b8e8907"
  },
  {
    "url": "assets/js/27.e379d73b.js",
    "revision": "668821900da562cde2a10f53e4c9bd84"
  },
  {
    "url": "assets/js/28.e3fb81c5.js",
    "revision": "bba6e691d73958fe77a29d6b68009f7c"
  },
  {
    "url": "assets/js/29.c9902fd7.js",
    "revision": "2047751acb8f53b8c2f3d848df4aa266"
  },
  {
    "url": "assets/js/3.18a7015a.js",
    "revision": "4245cabc1068e14c310e9a3093bcb416"
  },
  {
    "url": "assets/js/30.6a10d115.js",
    "revision": "0df70956f4163f8f1233fd7247eab73f"
  },
  {
    "url": "assets/js/31.68339246.js",
    "revision": "1b4a8ee6e34b9cee180de241f149138f"
  },
  {
    "url": "assets/js/32.69d1145d.js",
    "revision": "d795f50393aad39f9b00f0338a41e617"
  },
  {
    "url": "assets/js/33.68246cdf.js",
    "revision": "cb9f985f20713678b9fa12c25bcf68cc"
  },
  {
    "url": "assets/js/34.9aaa3c8a.js",
    "revision": "1d7da6d692739a4c5d0d72f0a9e49f0d"
  },
  {
    "url": "assets/js/35.e5ea7ed6.js",
    "revision": "0530036512c9cb1ecb847bf38d37330a"
  },
  {
    "url": "assets/js/36.d9922ae6.js",
    "revision": "7e418734687f0617f2f859dad6e874c3"
  },
  {
    "url": "assets/js/37.95b3bf4d.js",
    "revision": "9f4e3265e0e90418c95f2aba126b784e"
  },
  {
    "url": "assets/js/38.b88ce891.js",
    "revision": "ae2e26cbfb99ce9ce1d46e3a19e58a4e"
  },
  {
    "url": "assets/js/39.527e64da.js",
    "revision": "314b257d536781325705977092a4319a"
  },
  {
    "url": "assets/js/4.ecab69bb.js",
    "revision": "dd58833aac53e12187b68944b23f9160"
  },
  {
    "url": "assets/js/40.03377d86.js",
    "revision": "e4e272a5c424c8f0f97dc60b1f35c3e7"
  },
  {
    "url": "assets/js/41.f5ab3359.js",
    "revision": "e5c70f4115b2d118879bb46b1a62fb48"
  },
  {
    "url": "assets/js/42.cdb4d550.js",
    "revision": "a0aec9a3110ff6e0869b3cd8d6080f84"
  },
  {
    "url": "assets/js/43.da39663d.js",
    "revision": "396d118d23d7ab2e28c6d63d8c6df3b5"
  },
  {
    "url": "assets/js/44.569058a4.js",
    "revision": "f3ee181b27a3d3afcbe22361b0615060"
  },
  {
    "url": "assets/js/45.21280587.js",
    "revision": "c3f2c0bbf38307c8867b2a95bbe72e10"
  },
  {
    "url": "assets/js/46.769fac8b.js",
    "revision": "89616255c07606b0fe49b791b282a8c1"
  },
  {
    "url": "assets/js/47.51f18daf.js",
    "revision": "ef260b5e9f2ccd207666246c46635af0"
  },
  {
    "url": "assets/js/48.c5a3fb7f.js",
    "revision": "45358bd97aa3c2b70aba14d5afd410f0"
  },
  {
    "url": "assets/js/49.66f38ca3.js",
    "revision": "2a17b300ca3d522155653e5188fde917"
  },
  {
    "url": "assets/js/5.8da26d2d.js",
    "revision": "888ed13b2413bef84a62f5482a061997"
  },
  {
    "url": "assets/js/50.b0ece3bf.js",
    "revision": "be2cbafa6140148e27f352c761d47314"
  },
  {
    "url": "assets/js/51.a3b3828c.js",
    "revision": "2c95a563f7d3a063ba9fd6ee44416b9f"
  },
  {
    "url": "assets/js/52.dfa2a579.js",
    "revision": "b3f01c8131badfd128c43ff479ede843"
  },
  {
    "url": "assets/js/53.1b38c14d.js",
    "revision": "bfb0342cdc5c3ebfa0a243b701d151fe"
  },
  {
    "url": "assets/js/54.6b4ff059.js",
    "revision": "c8e2acd417e2b2081703cb64ac12e56b"
  },
  {
    "url": "assets/js/55.0142b029.js",
    "revision": "8c7ecdadb483dc3b78bb46a49737e836"
  },
  {
    "url": "assets/js/56.d7555e0e.js",
    "revision": "80ca8e3cdbb588045fbac34b6b323145"
  },
  {
    "url": "assets/js/57.429c8978.js",
    "revision": "0aaed5588d01e84da71ed937df3f57c8"
  },
  {
    "url": "assets/js/58.ef1f0864.js",
    "revision": "42c46f0dc8c30f34a875da73a14c79a7"
  },
  {
    "url": "assets/js/59.d8d2dafd.js",
    "revision": "30a0bd45838503b99e3fbeddf91a5cbd"
  },
  {
    "url": "assets/js/6.fdfb4184.js",
    "revision": "20d00855bdc7f93a44681effe2a813b4"
  },
  {
    "url": "assets/js/60.fd28b785.js",
    "revision": "0d2060663f3dbaeadb590dbfcdc7dc5d"
  },
  {
    "url": "assets/js/61.300ab07a.js",
    "revision": "0c20ff33c2e1b41c67eb006071e5da98"
  },
  {
    "url": "assets/js/62.92ef2842.js",
    "revision": "509ff5a8476baa1095fe7841373556a5"
  },
  {
    "url": "assets/js/63.74c06117.js",
    "revision": "eec67d153d2994f43f210468d19feccf"
  },
  {
    "url": "assets/js/64.5156a55d.js",
    "revision": "2b03145378db11a3242a197603e1d5b8"
  },
  {
    "url": "assets/js/65.03323324.js",
    "revision": "b3d4574ada25abd7dc263410856bde5c"
  },
  {
    "url": "assets/js/66.06ac3c35.js",
    "revision": "806b55dbf3617862a4373c987345ea36"
  },
  {
    "url": "assets/js/67.f082225f.js",
    "revision": "50b97c4541974ec0859aa7d61c8b1e45"
  },
  {
    "url": "assets/js/68.55939e4b.js",
    "revision": "1c4d0e03755edfc03f1eb4e2bbfdf4ec"
  },
  {
    "url": "assets/js/69.a0d56b65.js",
    "revision": "0c2a94bcf3a385bf00fecfa352fb9569"
  },
  {
    "url": "assets/js/7.6a1c00b9.js",
    "revision": "424a14b1801bfe4d790a2cc68a062827"
  },
  {
    "url": "assets/js/70.02cd4cfb.js",
    "revision": "b772715818c007dd05480af377c3b714"
  },
  {
    "url": "assets/js/71.74619b08.js",
    "revision": "9f88ad7c5720037035bb9273bb3c4d79"
  },
  {
    "url": "assets/js/72.f4802c09.js",
    "revision": "c5d37213e2c1c2ce4dd7fe1e5b465b75"
  },
  {
    "url": "assets/js/73.2b04e626.js",
    "revision": "da51a300e05b4d8e629a353bbc6d72bd"
  },
  {
    "url": "assets/js/74.40142e84.js",
    "revision": "bc636b5ecfc5bca45f80432d6023390b"
  },
  {
    "url": "assets/js/75.5e9628c7.js",
    "revision": "ee09d4a13050189fd6ba961e596b38e1"
  },
  {
    "url": "assets/js/76.9a2964ea.js",
    "revision": "04717d8f50cd54937314354314c34023"
  },
  {
    "url": "assets/js/77.921aef64.js",
    "revision": "f5e74ba29bd7a04478696bf6e1bd5d98"
  },
  {
    "url": "assets/js/78.3adbe1bd.js",
    "revision": "8645a981fb01ee79265df84f4bcc6125"
  },
  {
    "url": "assets/js/79.c9f9da27.js",
    "revision": "713f0f11c92023ee444ba4ff07a1c064"
  },
  {
    "url": "assets/js/8.cf8c0b78.js",
    "revision": "e6b4f731d26f76ebd9e008d65e76937c"
  },
  {
    "url": "assets/js/80.d49ba7ee.js",
    "revision": "2c3f9a6d61e6be73b24ea817df6944fb"
  },
  {
    "url": "assets/js/81.531f1170.js",
    "revision": "e977f32e00f4f0058937997e7ec894be"
  },
  {
    "url": "assets/js/82.3702d661.js",
    "revision": "415cf377524b8ccd5def436e90edc1aa"
  },
  {
    "url": "assets/js/9.c74cbb70.js",
    "revision": "77d7543a8a0111a245b2b3c3624255c9"
  },
  {
    "url": "assets/js/app.9f7fbb2a.js",
    "revision": "ba81255054762b4bbf68bb92d6d4c513"
  },
  {
    "url": "assets/js/vendors~docsearch.69945e09.js",
    "revision": "624528d03700af4ba16077268fc141cc"
  },
  {
    "url": "backend/index.html",
    "revision": "44eddf94df5dc50bbc52b388cd20f727"
  },
  {
    "url": "backend/nodejs/events.html",
    "revision": "410386ff17f88b6a0ddd5e79b7fdfc66"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "d76eb6eb96830685ab368d289c01af6d"
  },
  {
    "url": "frontend/browser/bom.html",
    "revision": "0696320bfa6a626ab1ce05395e7a86d0"
  },
  {
    "url": "frontend/browser/cross-domain.html",
    "revision": "841d96fa0a4d20f124083823f319e97f"
  },
  {
    "url": "frontend/browser/dom.html",
    "revision": "c71df107f392de74bc94ff364e58d214"
  },
  {
    "url": "frontend/browser/events.html",
    "revision": "5a46c099cfe3809714911b48ec98c88f"
  },
  {
    "url": "frontend/browser/index.html",
    "revision": "670c0846751f393cea808140995583d8"
  },
  {
    "url": "frontend/browser/memory-management.html",
    "revision": "f85f6bb16741b471c709408f1f7e7bfc"
  },
  {
    "url": "frontend/browser/pwa.html",
    "revision": "2eba0c65a31b5cddb4aaa926bc97cb58"
  },
  {
    "url": "frontend/browser/render.html",
    "revision": "0555854b566c993ee08bd4bd42c43f51"
  },
  {
    "url": "frontend/browser/storage.html",
    "revision": "45042a26d871884ef9a3955a331fa7cc"
  },
  {
    "url": "frontend/browser/web-performance.html",
    "revision": "e0dae9be4bbbd13d5d7d6bab0a3ec4e1"
  },
  {
    "url": "frontend/browser/web-security.html",
    "revision": "c40ef47afcd05a5173b02d562fffbc38"
  },
  {
    "url": "frontend/css/css-animations.html",
    "revision": "a529e8ea8c78b85acac98c06e93d1da2"
  },
  {
    "url": "frontend/css/css-border.html",
    "revision": "c50fe349705cd846f6e2ec03674dcb61"
  },
  {
    "url": "frontend/css/css-box-model.html",
    "revision": "fd5e36428190deb5e2b0f3a5a7468bae"
  },
  {
    "url": "frontend/css/css-color-and-background-and-gradients.html",
    "revision": "fa2725d9cd69b0d60fa8a42f1b36d0b6"
  },
  {
    "url": "frontend/css/css-css-and-documents.html",
    "revision": "ce00092d95fa41b2d3fead0104064933"
  },
  {
    "url": "frontend/css/css-filters-blending-clipping-masking.html",
    "revision": "d9275ca90f63b1c19be3ac7bcf2e3936"
  },
  {
    "url": "frontend/css/css-flexbox-layout.html",
    "revision": "55d20f77cd79847d584540b93ddd17c0"
  },
  {
    "url": "frontend/css/css-floating.html",
    "revision": "d3be71e9e1b874e2dbdd2733fc824eb5"
  },
  {
    "url": "frontend/css/css-fonts.html",
    "revision": "9668c85c583fbadf55ae0be4e14b6e7d"
  },
  {
    "url": "frontend/css/css-grid-layout.html",
    "revision": "d1f27fe4b7ebf35665351ee118b080d7"
  },
  {
    "url": "frontend/css/css-positioning.html",
    "revision": "a0f2ae92c9091c3757fcd542f232df2e"
  },
  {
    "url": "frontend/css/css-selectors.html",
    "revision": "f407578d45253d53cb904a947d952d3f"
  },
  {
    "url": "frontend/css/css-shapes.html",
    "revision": "bfb37fd99ea5c05a969290bc179a87e6"
  },
  {
    "url": "frontend/css/css-specificity-and-cascade.html",
    "revision": "74ee7acb69a65783cc48a60c41bcba96"
  },
  {
    "url": "frontend/css/css-table-layout.html",
    "revision": "323b29ba5fce41a557618a55026f2280"
  },
  {
    "url": "frontend/css/css-text-properties.html",
    "revision": "79c0f3f8a00d75a8bfcfbb4df41cc55d"
  },
  {
    "url": "frontend/css/css-transforms.html",
    "revision": "16710e5ef77aadfb637086ed35e69cb7"
  },
  {
    "url": "frontend/css/css-transitions.html",
    "revision": "aec62b80562fb04db7c34171ad62c494"
  },
  {
    "url": "frontend/css/css-values-and-units.html",
    "revision": "ae16850f48ede5b8d6c993ebbdb05f24"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "cf3c651aa0bda009f453ac83713d7b44"
  },
  {
    "url": "frontend/index.html",
    "revision": "7f408912061f0e94a86e5caa6a2e8a23"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "49f72d0093706412d9f6da72e8f1a405"
  },
  {
    "url": "frontend/js/js-control-flow-and-error-handling.html",
    "revision": "c7c41b1dc2faf601412161437d1a1fac"
  },
  {
    "url": "frontend/js/js-es2020.html",
    "revision": "466d8355cb19adc70049659d6f8b2131"
  },
  {
    "url": "frontend/js/js-es2021.html",
    "revision": "48abaab2f4fae65af58751ec4faf944a"
  },
  {
    "url": "frontend/js/js-expressions-and-operators.html",
    "revision": "33b1ec3486e4f621a229d223567c6f5c"
  },
  {
    "url": "frontend/js/js-functions.html",
    "revision": "2bb3adb8607325d6a7b5c426c87b126d"
  },
  {
    "url": "frontend/js/js-grammar-and-types.html",
    "revision": "fc1814014b6db2398d1b7faf12a4371b"
  },
  {
    "url": "frontend/js/js-in-html.html",
    "revision": "3535da7e0dffbd80c6b5c2f0aed9e078"
  },
  {
    "url": "frontend/js/js-indexed-collections.html",
    "revision": "58d3389496d194beab23100e6466b56f"
  },
  {
    "url": "frontend/js/js-keyed-collections.html",
    "revision": "9f34bf26d8458f233465a40cb0c6c823"
  },
  {
    "url": "frontend/js/js-meta-programming.html",
    "revision": "a0369f5815490203a73ec79b9bed9c9b"
  },
  {
    "url": "frontend/js/js-modules.html",
    "revision": "f2d885e5d99f3cf8eee9c7c3d09bb387"
  },
  {
    "url": "frontend/js/js-numbers-and-dates.html",
    "revision": "97a514aebb7f02a3fca20ec167e3271b"
  },
  {
    "url": "frontend/js/js-promises.html",
    "revision": "a103951de0a860ac707cadd4771dc0b2"
  },
  {
    "url": "frontend/js/js-regular-expressions.html",
    "revision": "84faaeedf35ecda16548e1a1d399e96e"
  },
  {
    "url": "frontend/js/js-strict-mode.html",
    "revision": "504396dccbee59725a44d42429310011"
  },
  {
    "url": "frontend/js/js-text-formatting.html",
    "revision": "5df7edc9124a932b6c386a1bd2c6ea79"
  },
  {
    "url": "frontend/js/js-working-with-objects.html",
    "revision": "125ab3aa83ec1cb7cce718a770a86a4f"
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
    "revision": "c096e85f2de228d7c5d5cfc7679cb3e6"
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
