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
    "revision": "5123e9a457b0163977ae6c9e7687ad03"
  },
  {
    "url": "about/index.html",
    "revision": "a0b7b673d4e908900cc91a49a90d3d9e"
  },
  {
    "url": "algorithm/algorithms/array-sorting-algorithms.html",
    "revision": "aec5a022021ad150562ad197e78f7415"
  },
  {
    "url": "algorithm/algorithms/index.html",
    "revision": "a3e51eb19ef0531c0f025a567024b26c"
  },
  {
    "url": "algorithm/data-structure/avl-tree.html",
    "revision": "89f43331f4a6e0af9e69f6fd74a161f5"
  },
  {
    "url": "algorithm/data-structure/binary-search-tree.html",
    "revision": "a812ce807599f84ddfb93bb4c1a4f052"
  },
  {
    "url": "algorithm/data-structure/binary-tree.html",
    "revision": "f6d4a86e5dd3a035dfcde5b141ca6499"
  },
  {
    "url": "algorithm/data-structure/doubly-linked-list.html",
    "revision": "63675aa0750456f3fc5f0da268ac5ade"
  },
  {
    "url": "algorithm/data-structure/hash-table.html",
    "revision": "e34908ec702b73e2ce178815bb8dec46"
  },
  {
    "url": "algorithm/data-structure/heap.html",
    "revision": "3adc4b0967fc0af0659d396db48148c9"
  },
  {
    "url": "algorithm/data-structure/index.html",
    "revision": "90a40df4fa7e323fa10d673e33c75b70"
  },
  {
    "url": "algorithm/data-structure/linked-list.html",
    "revision": "e7e2553260faf522db6a96d5d0744861"
  },
  {
    "url": "algorithm/data-structure/priority-queue.html",
    "revision": "957ecdafe3e145732534858dbc236f2d"
  },
  {
    "url": "algorithm/data-structure/queue.html",
    "revision": "ccd3852c0937b860fe1c6b8291c59599"
  },
  {
    "url": "algorithm/data-structure/red-black-tree.html",
    "revision": "1d49de5168237bfe16ed47dc22fcd203"
  },
  {
    "url": "algorithm/data-structure/segment-tree.html",
    "revision": "783cb0e0cfb0aaa9adf766c6b39c8c5a"
  },
  {
    "url": "algorithm/data-structure/stack.html",
    "revision": "83a9a122808f4297956e11b9c854b703"
  },
  {
    "url": "algorithm/data-structure/trie.html",
    "revision": "09aa02ccee2b2bf2ea4ca0916fe4ce74"
  },
  {
    "url": "algorithm/index.html",
    "revision": "f92fa7dfc821081b055cf52de17e7b4f"
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
    "url": "assets/js/11.76c8bd84.js",
    "revision": "a0c932c59586f8af6568bcc99d681650"
  },
  {
    "url": "assets/js/12.9c4142af.js",
    "revision": "e5598e0f34fb99ef8ee23f2ca386cc21"
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
    "url": "assets/js/16.9ce188a1.js",
    "revision": "b502e05cd138371585c5b2dcca1d03b8"
  },
  {
    "url": "assets/js/17.b37d438a.js",
    "revision": "5cfb893f424d2831fb3c3d6e3a27d33c"
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
    "url": "assets/js/31.05ef2e98.js",
    "revision": "543dc3732cac83bdd69fe9aa4d8dc990"
  },
  {
    "url": "assets/js/32.a6bd12e3.js",
    "revision": "846c500a371d5a534120ddb06ee86860"
  },
  {
    "url": "assets/js/33.e0c9821c.js",
    "revision": "731742c199becf92231b01150cf4404c"
  },
  {
    "url": "assets/js/34.622ca4f8.js",
    "revision": "cde501e7bfd259935f6e01466cf77d20"
  },
  {
    "url": "assets/js/35.17e8167d.js",
    "revision": "9fc7d3d302b22f36eb34b350d2b02f83"
  },
  {
    "url": "assets/js/36.54f1f596.js",
    "revision": "3f1fe00ed67b601ac8732944d32afbb3"
  },
  {
    "url": "assets/js/37.f5442713.js",
    "revision": "5262f2885317b275a0ab45387db9f133"
  },
  {
    "url": "assets/js/38.f19a25c0.js",
    "revision": "966d57f001ad64c45ec241cc290b3f3b"
  },
  {
    "url": "assets/js/39.525d045c.js",
    "revision": "163b7a5c278bc0279bb33162946bf732"
  },
  {
    "url": "assets/js/4.effe20ae.js",
    "revision": "746c02026bee97ee444ec5a642fe063e"
  },
  {
    "url": "assets/js/40.79a350aa.js",
    "revision": "c03caaa525ceed40e4283688c5c6525a"
  },
  {
    "url": "assets/js/41.2f19ab6f.js",
    "revision": "3444ed362816dd65fe76581322d5a999"
  },
  {
    "url": "assets/js/42.3ebfcf73.js",
    "revision": "177da7d51fb5b4485a2283a1f7dbcb91"
  },
  {
    "url": "assets/js/43.58814ad8.js",
    "revision": "603f25959184b80563688b9e7afd450e"
  },
  {
    "url": "assets/js/44.4d6a34cf.js",
    "revision": "9cd6afd86d2625a8ca7fa07386c07e11"
  },
  {
    "url": "assets/js/45.7b9060b7.js",
    "revision": "2f6ea7b22603d7bc3aaf216254082c97"
  },
  {
    "url": "assets/js/46.120acc43.js",
    "revision": "0cde342be3a2e861d081267278688768"
  },
  {
    "url": "assets/js/47.588200c2.js",
    "revision": "ef260b5e9f2ccd207666246c46635af0"
  },
  {
    "url": "assets/js/48.bfa9ba75.js",
    "revision": "119e756dad7152b06091e69304ff8ca9"
  },
  {
    "url": "assets/js/49.1a0cdaf8.js",
    "revision": "d6bdbda10b7c81348f1e0020706235c4"
  },
  {
    "url": "assets/js/5.2a78c3b9.js",
    "revision": "e390b3679cdeaf659664001cb5721288"
  },
  {
    "url": "assets/js/50.57608915.js",
    "revision": "f63f9094f29709fb5123fb6552a24e8a"
  },
  {
    "url": "assets/js/51.4c8c2e6c.js",
    "revision": "0525ffc8adb3cd6d7a234d3876f2911b"
  },
  {
    "url": "assets/js/52.b622f16f.js",
    "revision": "fd464d4ab423b4529526cd2987173ae6"
  },
  {
    "url": "assets/js/53.cae70fb4.js",
    "revision": "96b6344031c26d4194543ee7fac00a6e"
  },
  {
    "url": "assets/js/54.aa17aab8.js",
    "revision": "63ae8b09e158f0b114668e6794e710f0"
  },
  {
    "url": "assets/js/55.54c9851d.js",
    "revision": "c58a167eadef5194a035b5f28c6e27eb"
  },
  {
    "url": "assets/js/56.c67fe920.js",
    "revision": "fdcbcbaebc62c6c400a30965ab643d76"
  },
  {
    "url": "assets/js/57.7e2f1ec3.js",
    "revision": "0aaed5588d01e84da71ed937df3f57c8"
  },
  {
    "url": "assets/js/58.ed2e4405.js",
    "revision": "d713351c82510490fc19164f969a8c55"
  },
  {
    "url": "assets/js/59.f4831e77.js",
    "revision": "77f9e52fdf00f5f01931b161678e9e64"
  },
  {
    "url": "assets/js/6.1b65c77a.js",
    "revision": "619e30dae43e1c28d5eef84da2a3fb13"
  },
  {
    "url": "assets/js/60.e7395f5b.js",
    "revision": "84db285ee90605df7ff3ecc954809313"
  },
  {
    "url": "assets/js/61.89164d53.js",
    "revision": "f6485461f55af0f3076bc234d0e03880"
  },
  {
    "url": "assets/js/62.7bd3b736.js",
    "revision": "cbde99cf5966008ebe663cad9bde32bc"
  },
  {
    "url": "assets/js/63.4dd403dd.js",
    "revision": "d20e0ba7b47603938e72381f7314be31"
  },
  {
    "url": "assets/js/64.096943d7.js",
    "revision": "128063efa90806c1a713b931e9e402a3"
  },
  {
    "url": "assets/js/65.c9410bc5.js",
    "revision": "9f6169a8a9c837d57ea633131c70e0aa"
  },
  {
    "url": "assets/js/66.661c094e.js",
    "revision": "2c799a8651329d040d460ad676f19706"
  },
  {
    "url": "assets/js/67.0f504fa3.js",
    "revision": "f724b9001335730a1bbefeadfaf76f9f"
  },
  {
    "url": "assets/js/68.0a017d21.js",
    "revision": "e04960db7dbc476b4a8f005e89969fa0"
  },
  {
    "url": "assets/js/69.66365094.js",
    "revision": "95e693afbad9f38620d7a0a64fbcd92f"
  },
  {
    "url": "assets/js/7.b9733943.js",
    "revision": "9d7477d05bad7ab285369d1918c43a82"
  },
  {
    "url": "assets/js/70.c0bf56c1.js",
    "revision": "8c8341ae8d255877a55d294ad2a54462"
  },
  {
    "url": "assets/js/71.a4f8bbe6.js",
    "revision": "7f84fe413c0489ec1b22de5838a55047"
  },
  {
    "url": "assets/js/72.21abfa82.js",
    "revision": "84c50690fcfcb4f1a550e09f9bac00ff"
  },
  {
    "url": "assets/js/73.d911c3fd.js",
    "revision": "286311e6e60e10478e39c8c086e3fee9"
  },
  {
    "url": "assets/js/74.79fdb744.js",
    "revision": "5de21dba2427cd789bdb35fa730c432e"
  },
  {
    "url": "assets/js/75.de41958b.js",
    "revision": "bc6cdd274fcc44124b23f2cf2109c1ec"
  },
  {
    "url": "assets/js/76.c3f65d54.js",
    "revision": "30385d1a706b9a8e71e825017e934e1a"
  },
  {
    "url": "assets/js/77.f67ba0bf.js",
    "revision": "a4ce4301d9815d4f367516222e8e900c"
  },
  {
    "url": "assets/js/78.757e0066.js",
    "revision": "5bd86102fd85254deb1217a7dd3e5493"
  },
  {
    "url": "assets/js/79.8765ba8e.js",
    "revision": "890ced8637514e73b327a6938b17b1a6"
  },
  {
    "url": "assets/js/8.ec9df493.js",
    "revision": "1d41d4a2e659637b375d7f71f9e233e4"
  },
  {
    "url": "assets/js/80.baadb818.js",
    "revision": "ed5daeafe2a98c016f5ac2fcc02d5651"
  },
  {
    "url": "assets/js/81.e9f095c9.js",
    "revision": "aa5f122fd643aa3f20a8016ce464df00"
  },
  {
    "url": "assets/js/82.bebb0618.js",
    "revision": "0da67abb6d6c35bd153ad7fc81c4bcf9"
  },
  {
    "url": "assets/js/83.fbd739d7.js",
    "revision": "a5289906ea65cddff65265c9fa3f1e01"
  },
  {
    "url": "assets/js/9.5a360f50.js",
    "revision": "e0bd133dcd04e9fbf1ac4bdf5389bce1"
  },
  {
    "url": "assets/js/app.c8212756.js",
    "revision": "9124ea081bf5841a6b333eb734035ed8"
  },
  {
    "url": "assets/js/vendors~docsearch.a920cc49.js",
    "revision": "f9d228d23c26dd63baa4fa53c4259840"
  },
  {
    "url": "backend/index.html",
    "revision": "5a16b5c66a25524797fff7d50a1f897b"
  },
  {
    "url": "backend/nodejs/events.html",
    "revision": "0243ae9a1d8a8745ed845e1b9d67e5e8"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "1bc40ba840694c7effbb66880bd5328f"
  },
  {
    "url": "frontend/browser/bom.html",
    "revision": "11c50047051bb70ff2ad7583a2567038"
  },
  {
    "url": "frontend/browser/cross-domain.html",
    "revision": "da13811bec1263174383ce2328c0e7d6"
  },
  {
    "url": "frontend/browser/dom.html",
    "revision": "4d8851fc0045dd85fbe92a8ccca4989c"
  },
  {
    "url": "frontend/browser/events.html",
    "revision": "08cbf366f6d50a3b02e54ed3bad7e51d"
  },
  {
    "url": "frontend/browser/index.html",
    "revision": "e0d01781179b5f0cc6bf3f7167f4b6ff"
  },
  {
    "url": "frontend/browser/memory-management.html",
    "revision": "49a5339d8ffeff4db0a477d534dbf82e"
  },
  {
    "url": "frontend/browser/pwa.html",
    "revision": "417cade03b16f6a072ba25e6639cf835"
  },
  {
    "url": "frontend/browser/render.html",
    "revision": "ed014e12be6f7aa5d83e1f681beec00d"
  },
  {
    "url": "frontend/browser/storage.html",
    "revision": "f9780714b98eafe114fc2e624f78e484"
  },
  {
    "url": "frontend/browser/web-performance.html",
    "revision": "e68f4c4dea3692d15020673ad109c385"
  },
  {
    "url": "frontend/browser/web-security.html",
    "revision": "a0fd6dd90bcf26085cd68cf89a228603"
  },
  {
    "url": "frontend/css/css-animations.html",
    "revision": "8a0ffa55888c74be8b23f957fbc03b20"
  },
  {
    "url": "frontend/css/css-border.html",
    "revision": "ad376e0c07bdfd96936ddc6664b7ff45"
  },
  {
    "url": "frontend/css/css-box-model.html",
    "revision": "ea07e45b6ac408e3fe1440dca81cf7d4"
  },
  {
    "url": "frontend/css/css-color-and-background-and-gradients.html",
    "revision": "40b393cf18211fd787c582cb09c1b9f7"
  },
  {
    "url": "frontend/css/css-css-and-documents.html",
    "revision": "ab9b422d7b243e84c4ae51d249598f91"
  },
  {
    "url": "frontend/css/css-filters-blending-clipping-masking.html",
    "revision": "0b43f1777917965280cfb0ff120a67ac"
  },
  {
    "url": "frontend/css/css-flexbox-layout.html",
    "revision": "33bca274ffdcd9d716c915b7e46eb6b4"
  },
  {
    "url": "frontend/css/css-floating.html",
    "revision": "583beecdb4afc82a93f1e8b1227b8d25"
  },
  {
    "url": "frontend/css/css-fonts.html",
    "revision": "02d7322d5393311e141754ede6fac27d"
  },
  {
    "url": "frontend/css/css-grid-layout.html",
    "revision": "afe1ec83f8dba794dd673ccebc8c28a0"
  },
  {
    "url": "frontend/css/css-positioning.html",
    "revision": "562f410fd8b0565da836a490b1ebd66a"
  },
  {
    "url": "frontend/css/css-selectors.html",
    "revision": "0ae3741ddafafd4a2364d86176ea25fa"
  },
  {
    "url": "frontend/css/css-shapes.html",
    "revision": "57d3083ee1bb925f9c5b839a4d75c79e"
  },
  {
    "url": "frontend/css/css-specificity-and-cascade.html",
    "revision": "6364e3fde04e18d37b50a8bf55ec6446"
  },
  {
    "url": "frontend/css/css-table-layout.html",
    "revision": "913f487caa9624f7ea0e01766001e5f4"
  },
  {
    "url": "frontend/css/css-text-properties.html",
    "revision": "90ebab4756efff8595195fa5633630c0"
  },
  {
    "url": "frontend/css/css-transforms.html",
    "revision": "0d155730dc1644ac4761f3bdf8399512"
  },
  {
    "url": "frontend/css/css-transitions.html",
    "revision": "8b524da09592de15fdd599b47b92cc7b"
  },
  {
    "url": "frontend/css/css-values-and-units.html",
    "revision": "3fa5216498ee66f1bddcbab5e9305cc2"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "09b248f5c414c9edcc374c34a7d41f24"
  },
  {
    "url": "frontend/index.html",
    "revision": "fbb0e1f12dc60e0ae0762ad338365932"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "aee055da81191007d580ad4e4601a444"
  },
  {
    "url": "frontend/js/js-control-flow-and-error-handling.html",
    "revision": "94feee0b12feec93b0c3ed64a8a9172d"
  },
  {
    "url": "frontend/js/js-es2020.html",
    "revision": "1538a8e06f6c4c95095184ee2e9ac7d8"
  },
  {
    "url": "frontend/js/js-es2021.html",
    "revision": "74500b9a2eb960a3e3db957f13fa0d3c"
  },
  {
    "url": "frontend/js/js-expressions-and-operators.html",
    "revision": "54f2874a5052176e7a3fc00166333786"
  },
  {
    "url": "frontend/js/js-functions.html",
    "revision": "ae83dd6b5c2cad46f700d158946de145"
  },
  {
    "url": "frontend/js/js-grammar-and-types.html",
    "revision": "008420cb8c6a82a968c52c0abfa8bca2"
  },
  {
    "url": "frontend/js/js-in-html.html",
    "revision": "12c781d1cc261abae967cd7697e570c8"
  },
  {
    "url": "frontend/js/js-indexed-collections.html",
    "revision": "826a7524bd52a9761f33e2f49ca96796"
  },
  {
    "url": "frontend/js/js-iterators-and-generators.html",
    "revision": "fcde3c3c2c0efcfcb02dd8688dab3f8e"
  },
  {
    "url": "frontend/js/js-keyed-collections.html",
    "revision": "00832d679f497c8065b737cdf1cdf31a"
  },
  {
    "url": "frontend/js/js-meta-programming.html",
    "revision": "415c16b057a45b932ca970948e5ec2a0"
  },
  {
    "url": "frontend/js/js-modules.html",
    "revision": "4fe4d0a32bdb5fee19a71d5413cd4053"
  },
  {
    "url": "frontend/js/js-numbers-and-dates.html",
    "revision": "16eef9ee7816e36fad85339d0a316fe7"
  },
  {
    "url": "frontend/js/js-promises.html",
    "revision": "fa0eacede55f7ff404715ad5f2f921e7"
  },
  {
    "url": "frontend/js/js-regular-expressions.html",
    "revision": "b7468dff6f206a005badef88c5e39f87"
  },
  {
    "url": "frontend/js/js-strict-mode.html",
    "revision": "3e2cc00a2c275eca2fe98f54bf2b2d07"
  },
  {
    "url": "frontend/js/js-text-formatting.html",
    "revision": "69c128838607f4c8207b9761cf13fcce"
  },
  {
    "url": "frontend/js/js-working-with-objects.html",
    "revision": "d7bfe21a9c89520dfd4e29552e3eab95"
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
    "revision": "9f4e7e5546e9220c0397db3c700a86f1"
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
