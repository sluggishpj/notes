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
    "revision": "c71a4a8d6a5308f7a8b95115eb6b6d3d"
  },
  {
    "url": "about/index.html",
    "revision": "5cf79044277f751d9ab6d629669d1885"
  },
  {
    "url": "algorithm/algorithms/array-sorting-algorithms.html",
    "revision": "a52fa866267675201ac784b5ab4549b2"
  },
  {
    "url": "algorithm/algorithms/index.html",
    "revision": "be52487a65ed3454b23de2043e802c53"
  },
  {
    "url": "algorithm/data-structure/avl-tree.html",
    "revision": "0d09a534b8c0b00648d5fe6c01084231"
  },
  {
    "url": "algorithm/data-structure/binary-search-tree.html",
    "revision": "eeb6eb28e12ed8b879291a7c42dddbf2"
  },
  {
    "url": "algorithm/data-structure/binary-tree.html",
    "revision": "804eabe8f3063bff628d153690ca3981"
  },
  {
    "url": "algorithm/data-structure/doubly-linked-list.html",
    "revision": "14590524734d1bda53288a4dfe4d2320"
  },
  {
    "url": "algorithm/data-structure/hash-table.html",
    "revision": "2c7133e3556917488e258cb8aa2213f3"
  },
  {
    "url": "algorithm/data-structure/heap.html",
    "revision": "c96e9252cb2d68558a272a1425141d30"
  },
  {
    "url": "algorithm/data-structure/index.html",
    "revision": "6467bd9c448a45a08c107196f8f457d5"
  },
  {
    "url": "algorithm/data-structure/linked-list.html",
    "revision": "983782bb4eeeaa31369e403c19a1c427"
  },
  {
    "url": "algorithm/data-structure/priority-queue.html",
    "revision": "3d4aab809c378953790596751605c6fd"
  },
  {
    "url": "algorithm/data-structure/queue.html",
    "revision": "9889ae30c7600e8926ce0f12a7d28793"
  },
  {
    "url": "algorithm/data-structure/red-black-tree.html",
    "revision": "1c01b662d422a117a1c36b31c151e7d8"
  },
  {
    "url": "algorithm/data-structure/segment-tree.html",
    "revision": "d4c7c2c5be5eb2e3ee84382d6b0dfc6a"
  },
  {
    "url": "algorithm/data-structure/stack.html",
    "revision": "8a708f4660ed62a59068f64770bf9187"
  },
  {
    "url": "algorithm/data-structure/trie.html",
    "revision": "c38dcc03087b1bc773856e3ce00fd1c1"
  },
  {
    "url": "algorithm/index.html",
    "revision": "05582b723d746bc09c956530320c2974"
  },
  {
    "url": "assets/css/0.styles.3b913088.css",
    "revision": "c18f37e04996b732352db5ea974e497d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.19230963.js",
    "revision": "93323b0493146083b394367fc3a56cc8"
  },
  {
    "url": "assets/js/100.ddad93aa.js",
    "revision": "c1da7e83a842cf562571694945a3a049"
  },
  {
    "url": "assets/js/101.25d03056.js",
    "revision": "b25b6cb693a2c861f01c81fff8e61549"
  },
  {
    "url": "assets/js/102.fc44622e.js",
    "revision": "c1ef063a6af7a4055554196260da64aa"
  },
  {
    "url": "assets/js/103.87210b6a.js",
    "revision": "783fe54fa3b286f389c2816d805bd84a"
  },
  {
    "url": "assets/js/104.576331b1.js",
    "revision": "72272ddeaebd0e001985b0fa4b4eeb55"
  },
  {
    "url": "assets/js/105.20b5e759.js",
    "revision": "55eb95b7e2e94e4a3eef45b9d1dfed58"
  },
  {
    "url": "assets/js/106.3f6c05ae.js",
    "revision": "6bcb83d0395993980a1a9f87e9aa5cd8"
  },
  {
    "url": "assets/js/107.84e19c34.js",
    "revision": "5456a7e40e14989d85e1e2cb0b05ca0e"
  },
  {
    "url": "assets/js/108.0b6bdbce.js",
    "revision": "9d00be0ddbac7804e79a24b0dc9472c7"
  },
  {
    "url": "assets/js/109.cee49ca8.js",
    "revision": "c82bbfda44234b93dbd87c326d5bd71e"
  },
  {
    "url": "assets/js/11.94b85b58.js",
    "revision": "1807d71b34a6243410f7c705ccb9a309"
  },
  {
    "url": "assets/js/110.d5300a46.js",
    "revision": "661dcdc52b1d8be40c7e06b96f919cd0"
  },
  {
    "url": "assets/js/111.71937c07.js",
    "revision": "45a8db8dda11640150fa37cb2dc5496b"
  },
  {
    "url": "assets/js/112.650f0be4.js",
    "revision": "ff1e3aca57c9fe3caae0b29a213b74e4"
  },
  {
    "url": "assets/js/113.d9eee8f3.js",
    "revision": "1e1daa4b03527093c102ec8ede4d0d9f"
  },
  {
    "url": "assets/js/114.0ba6a3ee.js",
    "revision": "f3b39566b5658c1eff3c1c35fefd63e2"
  },
  {
    "url": "assets/js/12.ade2ba2c.js",
    "revision": "82dec728f7a36d56b57a6106eccb1541"
  },
  {
    "url": "assets/js/13.9b6a3418.js",
    "revision": "f75d61a654ce2ae582a3bfc0eb8e108b"
  },
  {
    "url": "assets/js/14.f6f3390e.js",
    "revision": "be65484f6734e7b0b62919c97a29c51d"
  },
  {
    "url": "assets/js/15.6800da26.js",
    "revision": "a5877a4c4fd96f30a1cfddc4d257f393"
  },
  {
    "url": "assets/js/16.d53df872.js",
    "revision": "508665b19000e3bed899e9f2eb3d4bd6"
  },
  {
    "url": "assets/js/17.df2ae4a7.js",
    "revision": "2e0b8aaf423426d500b35a5012e22599"
  },
  {
    "url": "assets/js/18.6baba82c.js",
    "revision": "81a0fedb065d4f7def527cbad53a7f80"
  },
  {
    "url": "assets/js/19.04619ce5.js",
    "revision": "447bbee10baaf9a3bfc1105b4a6ff39b"
  },
  {
    "url": "assets/js/20.0dd3313e.js",
    "revision": "7248b06371f14fd358928432eac38190"
  },
  {
    "url": "assets/js/21.7d6ea0c8.js",
    "revision": "519d4eed52d6d70e726035eb9d261e0a"
  },
  {
    "url": "assets/js/22.6f47c21d.js",
    "revision": "3ba1154343eef38c662e8a9733f52f29"
  },
  {
    "url": "assets/js/23.cadb0c7d.js",
    "revision": "7ffbc7c6f4555f5acbedc787c60af4c9"
  },
  {
    "url": "assets/js/24.9055465a.js",
    "revision": "c900396076021dc88119a91cb944e87c"
  },
  {
    "url": "assets/js/25.a2fb1b63.js",
    "revision": "38ac330b25029efce18120c0747ff966"
  },
  {
    "url": "assets/js/26.2ea27b4e.js",
    "revision": "27c39b64e599781c23badc7620cd5017"
  },
  {
    "url": "assets/js/27.f8acb5d4.js",
    "revision": "668821900da562cde2a10f53e4c9bd84"
  },
  {
    "url": "assets/js/28.8372fba6.js",
    "revision": "2bdc5da9445ce94844d72d1352b153be"
  },
  {
    "url": "assets/js/29.b771019f.js",
    "revision": "8ee43949dd51c4deee17328258d53901"
  },
  {
    "url": "assets/js/3.7e7332ba.js",
    "revision": "b9669bcf092daa6766d0b09afb9b9f3e"
  },
  {
    "url": "assets/js/30.ea13ea9b.js",
    "revision": "803796b881170d966379b9d5b61fe80a"
  },
  {
    "url": "assets/js/31.2e39f3be.js",
    "revision": "07812cf1310bd3228026fc9e4876ab12"
  },
  {
    "url": "assets/js/32.f5fa2892.js",
    "revision": "96b119c2da3eff690c2ac56fe4af7a99"
  },
  {
    "url": "assets/js/33.d136571c.js",
    "revision": "22eb807d02381d9593de30ca877d4e14"
  },
  {
    "url": "assets/js/34.6c3634fc.js",
    "revision": "510b7e9573fc47b7fb7c271a1e230e7c"
  },
  {
    "url": "assets/js/35.0d233c68.js",
    "revision": "126f8d3be62b2180cbd44c0a1f8146d0"
  },
  {
    "url": "assets/js/36.4ef5f084.js",
    "revision": "b2e4206dbb9c3ccf341abb6d3eea7ad2"
  },
  {
    "url": "assets/js/37.7204b3f2.js",
    "revision": "aad77ea75852409bb117d2b99dab3e38"
  },
  {
    "url": "assets/js/38.5790bc1a.js",
    "revision": "618252a676437e3a641d7483c0962706"
  },
  {
    "url": "assets/js/39.1627318b.js",
    "revision": "f369989f3f39563809f910944f100d3c"
  },
  {
    "url": "assets/js/4.d3ec4824.js",
    "revision": "746c02026bee97ee444ec5a642fe063e"
  },
  {
    "url": "assets/js/40.852cabb8.js",
    "revision": "678046788eb13a973f68c2da7ebd490e"
  },
  {
    "url": "assets/js/41.c325bd4a.js",
    "revision": "aa168f182fae96d5aeb78e3e4c167289"
  },
  {
    "url": "assets/js/42.3646bb53.js",
    "revision": "6d1d62c950d31fa449df0a39c38ae7dd"
  },
  {
    "url": "assets/js/43.c08d9a06.js",
    "revision": "e3cb0c8e23f148c1726f7b118339af1f"
  },
  {
    "url": "assets/js/44.092a3bf2.js",
    "revision": "fc86c460b78aa7e2a0e52907d4c584f8"
  },
  {
    "url": "assets/js/45.c043650a.js",
    "revision": "238fe3fc380cbdfa3f0f42db410ff443"
  },
  {
    "url": "assets/js/46.e34ac7da.js",
    "revision": "3447ed3dcc8f7f969f26341d9325964d"
  },
  {
    "url": "assets/js/47.b9994a2e.js",
    "revision": "66869d7814be7e73890b5a91fe9ca1a3"
  },
  {
    "url": "assets/js/48.6a396dbb.js",
    "revision": "175a3e237d1c8e99f3b64f39f2f3fd88"
  },
  {
    "url": "assets/js/49.ce0e6ba6.js",
    "revision": "8c1062d3276799c7ef181c04240d5a68"
  },
  {
    "url": "assets/js/5.cebbe118.js",
    "revision": "12472be3272d78fb5b33aaecaa9d01db"
  },
  {
    "url": "assets/js/50.5f359063.js",
    "revision": "dd767b3a8385688a51fda79eb8b0af81"
  },
  {
    "url": "assets/js/51.dff71632.js",
    "revision": "a6320a287335d614daaa7f20a514f547"
  },
  {
    "url": "assets/js/52.bb48394d.js",
    "revision": "831649abcc70df02893919602fc83acd"
  },
  {
    "url": "assets/js/53.1fb7c0c8.js",
    "revision": "3efaeb7af9e04ff0992f61f9a332a60c"
  },
  {
    "url": "assets/js/54.9b5ec110.js",
    "revision": "4d423a64f3b26359e94a3bfe9b82f374"
  },
  {
    "url": "assets/js/55.74810dcc.js",
    "revision": "ed45ebada8aa11c3492c9843d5b03c10"
  },
  {
    "url": "assets/js/56.7e6019c8.js",
    "revision": "397442d56d14155f47689c3d41e2bd03"
  },
  {
    "url": "assets/js/57.6e95b373.js",
    "revision": "ff4b2a6d516a94e7f8f7ef996941ca0d"
  },
  {
    "url": "assets/js/58.fb52036e.js",
    "revision": "beca38c0ea348f82872ca5668bce9c8b"
  },
  {
    "url": "assets/js/59.34350948.js",
    "revision": "cbc7ced76c2189f276849bf35676065a"
  },
  {
    "url": "assets/js/6.1f7100b9.js",
    "revision": "619e30dae43e1c28d5eef84da2a3fb13"
  },
  {
    "url": "assets/js/60.d72dd07d.js",
    "revision": "2f3cbffa0158a70750b1fdc507e1a55e"
  },
  {
    "url": "assets/js/61.26c19ba8.js",
    "revision": "9421fc0fd2bac7f8982aa7fbc561d2b8"
  },
  {
    "url": "assets/js/62.59d0c7e4.js",
    "revision": "7cca3186eafca9b5193c10eacfa2eeea"
  },
  {
    "url": "assets/js/63.75ca6516.js",
    "revision": "a8a5def154809d5ddf5cff512d11b092"
  },
  {
    "url": "assets/js/64.06ad9033.js",
    "revision": "ec6f2633262b398c342b2da9efa95bd5"
  },
  {
    "url": "assets/js/65.4ec1266f.js",
    "revision": "caec886a59e49ce63c88056f1edf6c1c"
  },
  {
    "url": "assets/js/66.fc77527f.js",
    "revision": "791f4faf74774905d61c458a71afb01d"
  },
  {
    "url": "assets/js/67.8c4b484e.js",
    "revision": "6d68ccda90c65b436ae4d34363f39c37"
  },
  {
    "url": "assets/js/68.4da23b85.js",
    "revision": "07554bc42b45c9e2b1239dce7fb70eec"
  },
  {
    "url": "assets/js/69.546ba677.js",
    "revision": "6e3efc3dccb5592abefc324b16058696"
  },
  {
    "url": "assets/js/7.2f7c6323.js",
    "revision": "9d7477d05bad7ab285369d1918c43a82"
  },
  {
    "url": "assets/js/70.6a1c5fca.js",
    "revision": "8df46fd7b152ff56149b56a10016ff14"
  },
  {
    "url": "assets/js/71.854897b2.js",
    "revision": "a4fb49e8220e947702f3d7a9a4924c5d"
  },
  {
    "url": "assets/js/72.628cb9d2.js",
    "revision": "6350b020f1c1d0bc7172df259a1981b1"
  },
  {
    "url": "assets/js/73.8c9138b6.js",
    "revision": "22d851a6ad6bd69b917bb0a72e0f6564"
  },
  {
    "url": "assets/js/74.eb2f9b2d.js",
    "revision": "16f6663b048e0375d2dc7b31c07951b9"
  },
  {
    "url": "assets/js/75.eeef22f5.js",
    "revision": "a1d11131ca9a3f14ece6dec933ec3b6e"
  },
  {
    "url": "assets/js/76.7e2a836d.js",
    "revision": "4d5f0179e254f3ce7fdacf1fa1c9f7c8"
  },
  {
    "url": "assets/js/77.573e267a.js",
    "revision": "57dfc637db3c545060338f078efcfefb"
  },
  {
    "url": "assets/js/78.e3ab7e1b.js",
    "revision": "13a7ee666385db46994845d437cb117c"
  },
  {
    "url": "assets/js/79.3df2c563.js",
    "revision": "cfe11f9aa1c39a20aa82cfc16ead82b7"
  },
  {
    "url": "assets/js/8.3b666c11.js",
    "revision": "1d41d4a2e659637b375d7f71f9e233e4"
  },
  {
    "url": "assets/js/80.15ad8b07.js",
    "revision": "a1b611ef2dd31596eb9deafa0f431a86"
  },
  {
    "url": "assets/js/81.d94664b6.js",
    "revision": "44625d76351b2fac07957a6f1f51f30d"
  },
  {
    "url": "assets/js/82.94855cc1.js",
    "revision": "2958ba84f2b426e3239422a79a85ef01"
  },
  {
    "url": "assets/js/83.6b935b8b.js",
    "revision": "043fa1e19205c381df5e90b2b4c84cfe"
  },
  {
    "url": "assets/js/84.5c1d4e31.js",
    "revision": "b73d946161765b37b6afc5296ec32ca8"
  },
  {
    "url": "assets/js/85.8ae36353.js",
    "revision": "33991a8318542f382ad5d050116432a1"
  },
  {
    "url": "assets/js/86.c2b6232c.js",
    "revision": "c2d51545c55ca8dff822770597dfdb32"
  },
  {
    "url": "assets/js/87.1fba5456.js",
    "revision": "e5959ace82dbd78571398a78788408ee"
  },
  {
    "url": "assets/js/88.a793e0d0.js",
    "revision": "51fc17616a44ceda816ed8515778c851"
  },
  {
    "url": "assets/js/89.d979fc9f.js",
    "revision": "6a4af6226024e2e95e18b5d7493da791"
  },
  {
    "url": "assets/js/9.384e508e.js",
    "revision": "e0bd133dcd04e9fbf1ac4bdf5389bce1"
  },
  {
    "url": "assets/js/90.93b576b1.js",
    "revision": "352d9770e239abd94ac723bc3db81e7a"
  },
  {
    "url": "assets/js/91.789f81e2.js",
    "revision": "fb77d1ffec9b91315c7dc43eb3054455"
  },
  {
    "url": "assets/js/92.4c643f6c.js",
    "revision": "69eefe4a515cd90c23b3a4d72f70a938"
  },
  {
    "url": "assets/js/93.188a6463.js",
    "revision": "294c470fe096b130ce1d80e5dc3835fa"
  },
  {
    "url": "assets/js/94.8f3cdfbb.js",
    "revision": "a952f3e2083427f587032c6515b66a43"
  },
  {
    "url": "assets/js/95.70b05f71.js",
    "revision": "bd7246d39e8ca0daecbae387ede5924a"
  },
  {
    "url": "assets/js/96.5c40284a.js",
    "revision": "f3da967783131d3bce4cffe83635c5a5"
  },
  {
    "url": "assets/js/97.bfe6a8c7.js",
    "revision": "2db17b43e7575ba7c98538a54f0776cd"
  },
  {
    "url": "assets/js/98.aa2af54e.js",
    "revision": "b4806784faa8472082f369138fc0962b"
  },
  {
    "url": "assets/js/99.3b028dc4.js",
    "revision": "ccc67247d253e7b3daa8793b5650ab71"
  },
  {
    "url": "assets/js/app.3231adb9.js",
    "revision": "61200088309e340c4bb1522e03f63c93"
  },
  {
    "url": "assets/js/vendors~docsearch.d566a751.js",
    "revision": "f9d228d23c26dd63baa4fa53c4259840"
  },
  {
    "url": "backend/index.html",
    "revision": "07cab97877c5aa2a1fae9b93ad78ad48"
  },
  {
    "url": "backend/nodejs/events.html",
    "revision": "6426cbfe914f40cd5df68ed67fe7e858"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "397567b1dedf4c6e29b36ed6a4fc04c6"
  },
  {
    "url": "cs/index.html",
    "revision": "fb33928ca6b033e61e501bbc96409ff0"
  },
  {
    "url": "cs/network/http.html",
    "revision": "a1542bf2e8b9d9965dd96ba3ae72a8da"
  },
  {
    "url": "cs/network/index.html",
    "revision": "8d70050cac949ffac6528550f61333f2"
  },
  {
    "url": "cs/os/index.html",
    "revision": "12da12326ec9c0a36db23a2748536254"
  },
  {
    "url": "frontend/babel/index.html",
    "revision": "b47edef4ee5c3bd0c450fa38ed80e9c4"
  },
  {
    "url": "frontend/browser/bom.html",
    "revision": "6f0230e3af6eb543de5243e0b18252be"
  },
  {
    "url": "frontend/browser/cross-domain.html",
    "revision": "948fde1c911ea0bb1d01dfca8770e808"
  },
  {
    "url": "frontend/browser/dom.html",
    "revision": "654b965969b806c4ac5759b6509ae0bc"
  },
  {
    "url": "frontend/browser/events.html",
    "revision": "5da36ba3ac2d8aaf232d8fbdb054a6e2"
  },
  {
    "url": "frontend/browser/index.html",
    "revision": "78e17c7f819b0108a59073f514d7ca2b"
  },
  {
    "url": "frontend/browser/memory-management.html",
    "revision": "be0a63e9f70482f9b701d26bf9c1d105"
  },
  {
    "url": "frontend/browser/pwa.html",
    "revision": "cbc3e42e5fbdc530d3df2e40afd7ed30"
  },
  {
    "url": "frontend/browser/render.html",
    "revision": "2ffa62a53293485b19bbc30f48c9f8f0"
  },
  {
    "url": "frontend/browser/storage.html",
    "revision": "03c15c98130b22eeb3b97f538219c842"
  },
  {
    "url": "frontend/browser/web-performance.html",
    "revision": "e1276c88b89eed64e5fbbcd4ce021fdf"
  },
  {
    "url": "frontend/browser/web-security.html",
    "revision": "1ebe9bf1b8746a9164b342f8584a89c0"
  },
  {
    "url": "frontend/css/css-animations.html",
    "revision": "d444755ccb81b4dfb857ac8b089574a5"
  },
  {
    "url": "frontend/css/css-border.html",
    "revision": "51868095a19595cdf8cde78333c1896d"
  },
  {
    "url": "frontend/css/css-box-model.html",
    "revision": "1aca514b158e0a54938b54a6a6f3b752"
  },
  {
    "url": "frontend/css/css-color-and-background-and-gradients.html",
    "revision": "7f1a09a45265ddaf23dda3da4865b3c8"
  },
  {
    "url": "frontend/css/css-css-and-documents.html",
    "revision": "2ad9aa309922a5118433b9d22df7f96b"
  },
  {
    "url": "frontend/css/css-filters-blending-clipping-masking.html",
    "revision": "bdb6b4bb03834042907a0eccb5725729"
  },
  {
    "url": "frontend/css/css-flexbox-layout.html",
    "revision": "1de07aad57d6e2e92fc6b652f45c3c1a"
  },
  {
    "url": "frontend/css/css-floating.html",
    "revision": "7f639e5f147c026f9f2b74e416a3eae6"
  },
  {
    "url": "frontend/css/css-fonts.html",
    "revision": "482af6bc35e9c7dcc361a766ad4b30e4"
  },
  {
    "url": "frontend/css/css-grid-layout.html",
    "revision": "189c3b62d006e02e3938f4526db03a6c"
  },
  {
    "url": "frontend/css/css-positioning.html",
    "revision": "38af7d29aa5dc9433bed767358cb85a2"
  },
  {
    "url": "frontend/css/css-selectors.html",
    "revision": "b15eff82e8104c9949726dca7436da57"
  },
  {
    "url": "frontend/css/css-shapes.html",
    "revision": "66af77ec5515cb426b13f015b5fdd7c9"
  },
  {
    "url": "frontend/css/css-specificity-and-cascade.html",
    "revision": "8c2eebf9bf43f68a1d83b9b8926bf925"
  },
  {
    "url": "frontend/css/css-table-layout.html",
    "revision": "ce39c2a6a69a6bc0809fd3b391825f71"
  },
  {
    "url": "frontend/css/css-text-properties.html",
    "revision": "0a9a8c8510d5b89b1b4a67108248d736"
  },
  {
    "url": "frontend/css/css-transforms.html",
    "revision": "a9a56029c40b0e27875efde59bde1e43"
  },
  {
    "url": "frontend/css/css-transitions.html",
    "revision": "59714b5888b9dd411989a267a3e8ab6f"
  },
  {
    "url": "frontend/css/css-values-and-units.html",
    "revision": "ff5019051f4de8049a800a57364a7577"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "00ccc6b92db90ff614b5c74fc280b044"
  },
  {
    "url": "frontend/index.html",
    "revision": "37fa8536f13e065b21ce8d7255610b61"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "2bed546b96886ffe3762d55b8017fb8b"
  },
  {
    "url": "frontend/js/js-control-flow-and-error-handling.html",
    "revision": "30729d7985700879ff5e3fd6c96ef9d1"
  },
  {
    "url": "frontend/js/js-es2020.html",
    "revision": "f257961e0c202d2f0ef28cc8e9795023"
  },
  {
    "url": "frontend/js/js-es2021.html",
    "revision": "6b42202f4f7b50abd0cdad3b4d908c4d"
  },
  {
    "url": "frontend/js/js-es2022.html",
    "revision": "286c380d59ea6b5f590afb7b5812bcd7"
  },
  {
    "url": "frontend/js/js-expressions-and-operators.html",
    "revision": "51938310da681c0f636121992b013b6e"
  },
  {
    "url": "frontend/js/js-functions.html",
    "revision": "2db50b8ee2da91f849b7701b535e1738"
  },
  {
    "url": "frontend/js/js-grammar-and-types.html",
    "revision": "913a6680b28223a32d430aef5ba39b96"
  },
  {
    "url": "frontend/js/js-in-html.html",
    "revision": "db848ff00d3253bec13faa727e0eef5d"
  },
  {
    "url": "frontend/js/js-indexed-collections.html",
    "revision": "21a38d7132e282ba51f42a376c4280e7"
  },
  {
    "url": "frontend/js/js-iterators-and-generators.html",
    "revision": "2a151c5ff95673b0ba2679be228038b4"
  },
  {
    "url": "frontend/js/js-keyed-collections.html",
    "revision": "6c4f27d557f97f3568d74ffed9a59b19"
  },
  {
    "url": "frontend/js/js-meta-programming.html",
    "revision": "c9360f1e84e81d989b35b2f9e8ce4879"
  },
  {
    "url": "frontend/js/js-modules.html",
    "revision": "bb4bef4852b77f38e23dff78f3649932"
  },
  {
    "url": "frontend/js/js-numbers-and-dates.html",
    "revision": "78ff1f5ae19bb5cee7f187c9856720b0"
  },
  {
    "url": "frontend/js/js-promises.html",
    "revision": "710cd36e390ea910c532f211703d5a38"
  },
  {
    "url": "frontend/js/js-regular-expressions.html",
    "revision": "1102e70d6a5b5bdc82fe327960bcc9b0"
  },
  {
    "url": "frontend/js/js-strict-mode.html",
    "revision": "2e4b46f855a6c0caf56d5f22221abefb"
  },
  {
    "url": "frontend/js/js-text-formatting.html",
    "revision": "55da45ee97bc63f30e406a3957f7a98f"
  },
  {
    "url": "frontend/js/js-working-with-objects.html",
    "revision": "02fbb6d1009579e6da3a717cad0ef733"
  },
  {
    "url": "frontend/react/index.html",
    "revision": "2e7ec7ceedbaf4b8ed0dee98470ce69c"
  },
  {
    "url": "frontend/typescript/index.html",
    "revision": "670559a8170c230096cb1c299ae2a176"
  },
  {
    "url": "frontend/typescript/note.html",
    "revision": "43fb817c6ef20d69893fa4b28da0dc38"
  },
  {
    "url": "frontend/vue/basic.html",
    "revision": "1a533e8b0ecd080bed05c34a20607c1e"
  },
  {
    "url": "frontend/vue/data-driven.html",
    "revision": "fa4af2aea843a41457a192ba5bb5f751"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "377bc05bf80520030a06b314967cf12f"
  },
  {
    "url": "frontend/vue/next-tick.html",
    "revision": "033d507dd760f513c50e29d5f23aeead"
  },
  {
    "url": "frontend/vue/reactivity.html",
    "revision": "a9ae892865c0e12661cd96b2bd987bad"
  },
  {
    "url": "frontend/vue/vue-router.html",
    "revision": "c921cb468753df9851d3a89c9abf356d"
  },
  {
    "url": "frontend/vue/vuex.html",
    "revision": "92d1e46709be2284ff4ef23630dbab71"
  },
  {
    "url": "frontend/webpack/basic.html",
    "revision": "6852ef2889dac8e2cea82922c9931b98"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "57ac121e5fbd98029a0f4574961765be"
  },
  {
    "url": "frontend/webpack/principle.html",
    "revision": "457b0f5941965394d312a0c3bda64fd0"
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
    "revision": "745660af930ac8a342a93cefda91d57a"
  },
  {
    "url": "interview/css.html",
    "revision": "231b0e6b76831da10f26c7b05c3549c4"
  },
  {
    "url": "interview/html.html",
    "revision": "113b0d01b31c582d0603e16732fef151"
  },
  {
    "url": "interview/index.html",
    "revision": "0f6b25454ccc7d80fd3f2d25fc77aa75"
  },
  {
    "url": "interview/integrate.html",
    "revision": "8728a5a35b787c560e2c3c9fbd94ee42"
  },
  {
    "url": "interview/javascript.html",
    "revision": "59bd722923858bb91454876a672a8a01"
  },
  {
    "url": "interview/mobile-web.html",
    "revision": "80e7093feece4c5fced93055ec772bb5"
  },
  {
    "url": "logo.png",
    "revision": "d8d70a56ece354e7f87ff3c675e28928"
  },
  {
    "url": "thinking/design-patterns/index.html",
    "revision": "eb8f5f74bcbd4414c1e0d0605856d45e"
  },
  {
    "url": "thinking/index.html",
    "revision": "d822d0a3d054ed5c6864637c2b65efec"
  },
  {
    "url": "tools/git.html",
    "revision": "5ecd7144d564e52951573b55e6525223"
  },
  {
    "url": "tools/index.html",
    "revision": "d8a76a5dde8963859f0be97a89dcda27"
  },
  {
    "url": "tools/linux.html",
    "revision": "f52416ed2934b28e85121123ff9bf618"
  },
  {
    "url": "tools/nginx.html",
    "revision": "9b8bc9b386d1b31790d43df39a37de0f"
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
