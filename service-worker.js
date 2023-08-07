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
    "revision": "98af8782d6e6fda6c6504a4695d3a01b"
  },
  {
    "url": "about/index.html",
    "revision": "487c742d01203ed954780bb45be45080"
  },
  {
    "url": "algorithm/algorithms/array-sorting-algorithms.html",
    "revision": "01ab7ffd06a67f931e3e67a1e7fc0f6a"
  },
  {
    "url": "algorithm/algorithms/index.html",
    "revision": "8c6beef0df62d130c3d370589616b869"
  },
  {
    "url": "algorithm/data-structure/avl-tree.html",
    "revision": "e26dc9478ac2b06f01431c662802a4ce"
  },
  {
    "url": "algorithm/data-structure/binary-search-tree.html",
    "revision": "73648287b04fdb43e8f8746850414216"
  },
  {
    "url": "algorithm/data-structure/binary-tree.html",
    "revision": "d95568d0d2b656e7195c3d7697a3defd"
  },
  {
    "url": "algorithm/data-structure/doubly-linked-list.html",
    "revision": "aa8cb57b5bf3b6015c9a23b9dce2e65e"
  },
  {
    "url": "algorithm/data-structure/hash-table.html",
    "revision": "ec266586967099ecfd2d41a21b36f363"
  },
  {
    "url": "algorithm/data-structure/heap.html",
    "revision": "5c0e43a59097161b6403da11ecbee93b"
  },
  {
    "url": "algorithm/data-structure/index.html",
    "revision": "a554d3e38a8772fbaf00313aa134ec7b"
  },
  {
    "url": "algorithm/data-structure/linked-list.html",
    "revision": "bf781115b6557f74ae4b2988cca91f33"
  },
  {
    "url": "algorithm/data-structure/priority-queue.html",
    "revision": "784509ecc91304e59b33fde594f43fc0"
  },
  {
    "url": "algorithm/data-structure/queue.html",
    "revision": "6a2c79d59a0c1eb852c35f8d44d3dbe3"
  },
  {
    "url": "algorithm/data-structure/red-black-tree.html",
    "revision": "4032e9dcbacf72c21043b89e809f6ceb"
  },
  {
    "url": "algorithm/data-structure/segment-tree.html",
    "revision": "3b4585898ddd26c0b03516e77652bac5"
  },
  {
    "url": "algorithm/data-structure/stack.html",
    "revision": "6f9d095f49bccf57050a0ceec2d922e2"
  },
  {
    "url": "algorithm/data-structure/trie.html",
    "revision": "f5eb0d85e2bfa424565c59d6ccee26a7"
  },
  {
    "url": "algorithm/index.html",
    "revision": "f93d0466062d518a7e1bdc28e4a6d2b8"
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
    "url": "assets/js/10.5ab43940.js",
    "revision": "5d98d39ad46618ac2c2f949b770e6aa6"
  },
  {
    "url": "assets/js/100.bc7558a4.js",
    "revision": "1948693e3e8bda99c6d0ee51c8220c6a"
  },
  {
    "url": "assets/js/101.84d01773.js",
    "revision": "aae6a43e0c3c9fd7a553d5b466d356be"
  },
  {
    "url": "assets/js/102.849aeaee.js",
    "revision": "011414c9e90804f802be67978543f586"
  },
  {
    "url": "assets/js/103.f6c76857.js",
    "revision": "f4e47283bd3279134ff4607ef1c77519"
  },
  {
    "url": "assets/js/104.0a5dc1f5.js",
    "revision": "24692ee8833e4860d92d03f17bdcc002"
  },
  {
    "url": "assets/js/105.25e06cd3.js",
    "revision": "b6df2295829d97cd6f5caa7bdb751a2d"
  },
  {
    "url": "assets/js/106.c1a1e551.js",
    "revision": "1f164640e12a2ec3e911f4af6f162f36"
  },
  {
    "url": "assets/js/107.f87c94ab.js",
    "revision": "c91aada6474d5784e93ed5d13aba1091"
  },
  {
    "url": "assets/js/108.1a8d4905.js",
    "revision": "a4e684f6532df7287e6ce8ca0f996637"
  },
  {
    "url": "assets/js/109.bdcf8402.js",
    "revision": "34d32eda7367cabb3ff2f3e02b6a7a13"
  },
  {
    "url": "assets/js/11.933e0c43.js",
    "revision": "af6951d8058353a0ec3fa8698327abf3"
  },
  {
    "url": "assets/js/110.0ef35ca0.js",
    "revision": "dd7beca8b87a8ba97eaf1332c36ce89d"
  },
  {
    "url": "assets/js/111.94d02d66.js",
    "revision": "65601d29a2a871a4e8778a53d0e97ba2"
  },
  {
    "url": "assets/js/112.032c61bf.js",
    "revision": "96328721b181178a57e9bcf24bd374f0"
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
    "url": "assets/js/18.804adae8.js",
    "revision": "307dee53996bace264a4ccb23285aef6"
  },
  {
    "url": "assets/js/19.23af8c1f.js",
    "revision": "84c5591e319db29d64cd7937d1513ffe"
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
    "url": "assets/js/23.af458b9f.js",
    "revision": "22fff677a21811998c0126117d9648c8"
  },
  {
    "url": "assets/js/24.f7501590.js",
    "revision": "d6c5831d665528552851b8c6ba339e34"
  },
  {
    "url": "assets/js/25.a76e184e.js",
    "revision": "d400b9e532bd960a37b2f31d5e6a967b"
  },
  {
    "url": "assets/js/26.2ea27b4e.js",
    "revision": "27c39b64e599781c23badc7620cd5017"
  },
  {
    "url": "assets/js/27.f7c66210.js",
    "revision": "fb3a9f8483277e3038b236ffa432f7ad"
  },
  {
    "url": "assets/js/28.8b9166a3.js",
    "revision": "2b2489d503790589a839e05a5c60b342"
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
    "url": "assets/js/32.84b2b370.js",
    "revision": "4efaefbb9e8d7c7f96a1107fa1ac826c"
  },
  {
    "url": "assets/js/33.f0a5edf6.js",
    "revision": "5bd7fc675e9af93e96f51f44ce606952"
  },
  {
    "url": "assets/js/34.ac4d6bb1.js",
    "revision": "19b46880671467effaf483f44021020e"
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
    "url": "assets/js/37.00061edb.js",
    "revision": "08b0b2b3baddbb3f1fe96d67b698d390"
  },
  {
    "url": "assets/js/38.64a8c065.js",
    "revision": "b4f229c5449769fe8c59399051ab668d"
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
    "url": "assets/js/44.853dca7a.js",
    "revision": "919515e8d5e859e440862e19b5165e73"
  },
  {
    "url": "assets/js/45.57476be9.js",
    "revision": "98bd265abc949197ac7ce13d7b89143f"
  },
  {
    "url": "assets/js/46.b2c2fcb1.js",
    "revision": "038a4c459e27d1570bcc17d5c5f02c3d"
  },
  {
    "url": "assets/js/47.9b902316.js",
    "revision": "1dd82a6daafa55f71effb7d67345ca5e"
  },
  {
    "url": "assets/js/48.06b05b61.js",
    "revision": "1e5934462d4a1e4f455773028f3b4e14"
  },
  {
    "url": "assets/js/49.297b34f6.js",
    "revision": "d7ba29e295a900dd900d00fe6f7e8968"
  },
  {
    "url": "assets/js/5.145d39de.js",
    "revision": "36d2277d8006492b20fc095891dd658a"
  },
  {
    "url": "assets/js/50.5f359063.js",
    "revision": "dd767b3a8385688a51fda79eb8b0af81"
  },
  {
    "url": "assets/js/51.e6f7d0d8.js",
    "revision": "8aa6ffe6bc314187650c7c404949541a"
  },
  {
    "url": "assets/js/52.ea5cf958.js",
    "revision": "2f1663bafa200746476d6cf14f084c65"
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
    "url": "assets/js/62.92f2b6e9.js",
    "revision": "f9c1e2b236a63e4c2fa64a2df09af174"
  },
  {
    "url": "assets/js/63.ecebe3e0.js",
    "revision": "375b771f35b5d435a21f560274069b33"
  },
  {
    "url": "assets/js/64.7c6b4d69.js",
    "revision": "c003c4e70d64a6997680c5ec2f73efe9"
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
    "url": "assets/js/70.fc3dc996.js",
    "revision": "d396e58dd5528d29ad78aa6a66bf7b3f"
  },
  {
    "url": "assets/js/71.1f7bc098.js",
    "revision": "791687401021c8340ba3150c8dd6d25e"
  },
  {
    "url": "assets/js/72.628cb9d2.js",
    "revision": "6350b020f1c1d0bc7172df259a1981b1"
  },
  {
    "url": "assets/js/73.13ac3946.js",
    "revision": "7131ca113207468ef51ee2ba4a5eac06"
  },
  {
    "url": "assets/js/74.621eae0e.js",
    "revision": "77d0819b0b4a1cb9355680f26200dfb7"
  },
  {
    "url": "assets/js/75.eeef22f5.js",
    "revision": "a1d11131ca9a3f14ece6dec933ec3b6e"
  },
  {
    "url": "assets/js/76.91b72aa8.js",
    "revision": "587426a612e8eb8fa0ae849994d9695e"
  },
  {
    "url": "assets/js/77.770ee93d.js",
    "revision": "8ff2ff880f76449530e51b6297ff3239"
  },
  {
    "url": "assets/js/78.5cdbd650.js",
    "revision": "523d456ab005ad0210417b5c6994087b"
  },
  {
    "url": "assets/js/79.38ac0683.js",
    "revision": "3b5e98dc1767854432d170cd3fc06dfc"
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
    "url": "assets/js/89.2b1f5070.js",
    "revision": "b16afa22818d897fd0a53572e5a74856"
  },
  {
    "url": "assets/js/9.384e508e.js",
    "revision": "e0bd133dcd04e9fbf1ac4bdf5389bce1"
  },
  {
    "url": "assets/js/90.e00dc064.js",
    "revision": "caf6b8e4b3dc07717a29f494cf888d59"
  },
  {
    "url": "assets/js/91.4f7e0c70.js",
    "revision": "00fce4967949d892d2773effe312cd3e"
  },
  {
    "url": "assets/js/92.eb6826a2.js",
    "revision": "fd1bc25596b97b79793e4d04cfb0d83c"
  },
  {
    "url": "assets/js/93.fc7253b8.js",
    "revision": "6303699471156849d5b7886bbaf4ac0b"
  },
  {
    "url": "assets/js/94.c3acb32a.js",
    "revision": "36dae70e65010d7c96f247c41018c1b6"
  },
  {
    "url": "assets/js/95.00c9932c.js",
    "revision": "73fec58dc8826f4d65d0ddccdb8714c5"
  },
  {
    "url": "assets/js/96.e76bc0e2.js",
    "revision": "99bd9d99d1c0607ccf8fe7071ccae2ec"
  },
  {
    "url": "assets/js/97.f7e50c51.js",
    "revision": "55d99ef24e240df5eb05bebf81d62047"
  },
  {
    "url": "assets/js/98.f2d158cf.js",
    "revision": "afad184b2fe285f6f28f79a78c21e4f9"
  },
  {
    "url": "assets/js/99.8de227e8.js",
    "revision": "ea0acdcfd119e843468d2f4651524be3"
  },
  {
    "url": "assets/js/app.befebaa4.js",
    "revision": "a5fbbf8cdbcbc80e245be4ebf622484d"
  },
  {
    "url": "assets/js/vendors~docsearch.d566a751.js",
    "revision": "f9d228d23c26dd63baa4fa53c4259840"
  },
  {
    "url": "backend/index.html",
    "revision": "8400ba7a6c5604a8ba5f9af11b3cc4e3"
  },
  {
    "url": "backend/nodejs/events.html",
    "revision": "8b428a6c1c923604a77a57194a70ce3f"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "5cb34562a113124a69dfaaac59c7bdcc"
  },
  {
    "url": "cs/index.html",
    "revision": "f681bcd7155c330aafef1fb516c67c47"
  },
  {
    "url": "cs/network/http.html",
    "revision": "e065733f7281d3d1c7db0938c639eb4e"
  },
  {
    "url": "cs/network/index.html",
    "revision": "3ed6593815ff4aabb3d995a0ea1b5504"
  },
  {
    "url": "cs/os/index.html",
    "revision": "9e42f7397154a71bdecb7cbe4c4f3766"
  },
  {
    "url": "frontend/babel/index.html",
    "revision": "12343100f2cab23a5ec621219c9edfad"
  },
  {
    "url": "frontend/browser/bom.html",
    "revision": "a2085beb1c22960e0f3de4de3fd1acdd"
  },
  {
    "url": "frontend/browser/cross-domain.html",
    "revision": "bee3c3d54da51b8f8e3672118e8e992a"
  },
  {
    "url": "frontend/browser/dom.html",
    "revision": "0525a180890cb2d94a24130f094c0ed9"
  },
  {
    "url": "frontend/browser/events.html",
    "revision": "98876e16811de8f5e5e42116c85151e1"
  },
  {
    "url": "frontend/browser/index.html",
    "revision": "107eda24968ae148a3cc700add6e77f0"
  },
  {
    "url": "frontend/browser/memory-management.html",
    "revision": "678bb35886cae8524d814295566a1495"
  },
  {
    "url": "frontend/browser/pwa.html",
    "revision": "4d59e7201d423ecda7170d0683e8a323"
  },
  {
    "url": "frontend/browser/render.html",
    "revision": "9c00b447a0f75332e1675a06141f0485"
  },
  {
    "url": "frontend/browser/storage.html",
    "revision": "c5f91f3c1b232e37828576f1e90a8103"
  },
  {
    "url": "frontend/browser/web-performance.html",
    "revision": "5c6e07da2f6392b86152dd46d5d32fb9"
  },
  {
    "url": "frontend/browser/web-security.html",
    "revision": "7c30c9deb2c21d9d555f713a8205bc05"
  },
  {
    "url": "frontend/css/css-animations.html",
    "revision": "112d069cd9c7e1c9d1b2ddfce7e5f16f"
  },
  {
    "url": "frontend/css/css-border.html",
    "revision": "3bf1166996746bd16e66936e6a1d6ab5"
  },
  {
    "url": "frontend/css/css-box-model.html",
    "revision": "9ea2d69dab3fa683ff3d3f2dfe158a28"
  },
  {
    "url": "frontend/css/css-color-and-background-and-gradients.html",
    "revision": "15ef0ba556000d672ea51bf53d23e837"
  },
  {
    "url": "frontend/css/css-css-and-documents.html",
    "revision": "d44bb036d53478f4b4d42ecd632f8cbe"
  },
  {
    "url": "frontend/css/css-filters-blending-clipping-masking.html",
    "revision": "d3cd77daf4ed2761e1d2391b8dba73a3"
  },
  {
    "url": "frontend/css/css-flexbox-layout.html",
    "revision": "f7739982adca672094f18c39d927835e"
  },
  {
    "url": "frontend/css/css-floating.html",
    "revision": "cf7b53c211dc233c1a6167245b959e67"
  },
  {
    "url": "frontend/css/css-fonts.html",
    "revision": "fc7574019585347f60408ce45262b6a8"
  },
  {
    "url": "frontend/css/css-grid-layout.html",
    "revision": "e4ba0a1a9fa9d097c4a505199498f528"
  },
  {
    "url": "frontend/css/css-positioning.html",
    "revision": "50e010e291f25a9854dece8cd74dedf7"
  },
  {
    "url": "frontend/css/css-selectors.html",
    "revision": "6dc0b81b53bb4ff15b27434f210aa06f"
  },
  {
    "url": "frontend/css/css-shapes.html",
    "revision": "32751754021c3b9a2a5c04f5fb7ddc20"
  },
  {
    "url": "frontend/css/css-specificity-and-cascade.html",
    "revision": "b94cd2ea4b0511ddc279ac65e0b4ef83"
  },
  {
    "url": "frontend/css/css-table-layout.html",
    "revision": "7927bb602f9a85909d3589274de59046"
  },
  {
    "url": "frontend/css/css-text-properties.html",
    "revision": "995b0d2e6f2ba6b09b46e040705324eb"
  },
  {
    "url": "frontend/css/css-transforms.html",
    "revision": "4a68313b087d1d84c5f47e1400ca0d51"
  },
  {
    "url": "frontend/css/css-transitions.html",
    "revision": "23ca9d393425128fe936838892310379"
  },
  {
    "url": "frontend/css/css-values-and-units.html",
    "revision": "f32c617dc7252874973552bb1ab6fa07"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "e052c133f6ea3a0e10c13a893a081bcf"
  },
  {
    "url": "frontend/index.html",
    "revision": "de39969d6d7318b4925dc17b361790c0"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "9ce1e57d4a6754dad584f329c39f93db"
  },
  {
    "url": "frontend/js/js-control-flow-and-error-handling.html",
    "revision": "8ac601664505b1eeac4f75c502712b06"
  },
  {
    "url": "frontend/js/js-es2020.html",
    "revision": "941a35d0e16a196c6904fcc37d406ec2"
  },
  {
    "url": "frontend/js/js-es2021.html",
    "revision": "aa4113dc1ca7cdf4812e91e89eac5d6d"
  },
  {
    "url": "frontend/js/js-es2022.html",
    "revision": "4711631abfbd23710024823db9ba8a54"
  },
  {
    "url": "frontend/js/js-expressions-and-operators.html",
    "revision": "e7ba9c4f447bdea7ceae162804154915"
  },
  {
    "url": "frontend/js/js-functions.html",
    "revision": "61d4bf309c25b5fc1025f6166d109412"
  },
  {
    "url": "frontend/js/js-grammar-and-types.html",
    "revision": "7513f75241f3b82875785e20c93ecb49"
  },
  {
    "url": "frontend/js/js-in-html.html",
    "revision": "46ff315930d6e2a6aa8cfd91fd639ef6"
  },
  {
    "url": "frontend/js/js-indexed-collections.html",
    "revision": "3caa00c0892a555157a0aefa686b0b0d"
  },
  {
    "url": "frontend/js/js-iterators-and-generators.html",
    "revision": "bf2215e3752e24551c1c1da37f2004f1"
  },
  {
    "url": "frontend/js/js-keyed-collections.html",
    "revision": "c1337cf7edf88fdd7b8bc861e994b3c8"
  },
  {
    "url": "frontend/js/js-meta-programming.html",
    "revision": "43735f0b4ffc74ebfbd921118b9c4a4f"
  },
  {
    "url": "frontend/js/js-modules.html",
    "revision": "fc677f9eb9e4e7fd047e45cf6011ec97"
  },
  {
    "url": "frontend/js/js-numbers-and-dates.html",
    "revision": "8044b6e7100b5578c58644b6088127d5"
  },
  {
    "url": "frontend/js/js-promises.html",
    "revision": "796b12fc5027b047594a9dcc3cf257ee"
  },
  {
    "url": "frontend/js/js-regular-expressions.html",
    "revision": "0563a0a9df301dce8f5203353af225b3"
  },
  {
    "url": "frontend/js/js-strict-mode.html",
    "revision": "35a832447f6b358d5afaf98b2280aea7"
  },
  {
    "url": "frontend/js/js-text-formatting.html",
    "revision": "ad5bf4918ab13e85bb9f16c5eff65658"
  },
  {
    "url": "frontend/js/js-working-with-objects.html",
    "revision": "ee88f7268e038cb9941475827ddfcf48"
  },
  {
    "url": "frontend/react/index.html",
    "revision": "8f079f2a8f86699895d3f76e9a905761"
  },
  {
    "url": "frontend/vue/basic.html",
    "revision": "e690805d1de403ec324087c47e99381b"
  },
  {
    "url": "frontend/vue/data-driven.html",
    "revision": "e437c9556f1bce843c7a23763e207d26"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "508e7017866315fcaece9df82bbb7893"
  },
  {
    "url": "frontend/vue/next-tick.html",
    "revision": "56e04b63e10b24f7f3a3c21312c135bc"
  },
  {
    "url": "frontend/vue/reactivity.html",
    "revision": "5d5c0b329ecd704210d11b18504486a0"
  },
  {
    "url": "frontend/vue/vue-router.html",
    "revision": "0cf6d6b0f8e61276b1659a6938e63098"
  },
  {
    "url": "frontend/vue/vuex.html",
    "revision": "4a19e29537b6f1e7beaf4864a6714c72"
  },
  {
    "url": "frontend/webpack/basic.html",
    "revision": "e17ad9e72f3cd292d30b193e2d8ddd60"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "91c06e17b0145bb0ff9db41f93548eaa"
  },
  {
    "url": "frontend/webpack/principle.html",
    "revision": "bbb07a0e13063d7f42ee3087fe21029b"
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
    "revision": "179bf1280c3a86e416b066f906fac4b5"
  },
  {
    "url": "interview/css.html",
    "revision": "55093781c9aba069b9b0d3d636cb2bb9"
  },
  {
    "url": "interview/html.html",
    "revision": "eafdbe61837686879841a5b8c639187d"
  },
  {
    "url": "interview/index.html",
    "revision": "0bcd80423e9c49f20f486641fecb00f0"
  },
  {
    "url": "interview/integrate.html",
    "revision": "36ab7dd424268e8bce6798bf83ef1f89"
  },
  {
    "url": "interview/javascript.html",
    "revision": "f189478694dc7d7ff4f217d6d251fc33"
  },
  {
    "url": "interview/mobile-web.html",
    "revision": "db9d4bc93337ece433b84235606240ea"
  },
  {
    "url": "logo.png",
    "revision": "d8d70a56ece354e7f87ff3c675e28928"
  },
  {
    "url": "thinking/design-patterns/index.html",
    "revision": "6a34b2aa6e2a160fe4a864c6864fde4b"
  },
  {
    "url": "thinking/index.html",
    "revision": "bda4b9780f8c68067cee9fe168062dff"
  },
  {
    "url": "tools/git.html",
    "revision": "46385f0b9c4e2eb918f42e81a112de04"
  },
  {
    "url": "tools/index.html",
    "revision": "22915c6fcf3e88ca2c53bdaf458448d9"
  },
  {
    "url": "tools/linux.html",
    "revision": "a42b16c57e1dee7dbdd35f4cbe2947ca"
  },
  {
    "url": "tools/nginx.html",
    "revision": "2e7cbdc92a9df4a44beb8ded25c5b20e"
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
