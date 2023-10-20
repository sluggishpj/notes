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
    "revision": "921ba32b3d1c19e4bdcbbaf4a6d65987"
  },
  {
    "url": "about/index.html",
    "revision": "10859635ddcf8b959b1ee63e30b12b3d"
  },
  {
    "url": "algorithm/algorithms/array-sorting-algorithms.html",
    "revision": "a9a781fc7d6d86a45ada17a2a919ce07"
  },
  {
    "url": "algorithm/algorithms/index.html",
    "revision": "52bbddb896361cb46068ac2d087333ea"
  },
  {
    "url": "algorithm/data-structure/avl-tree.html",
    "revision": "da248180ba6d3c78b8bcaa96a8193d22"
  },
  {
    "url": "algorithm/data-structure/binary-search-tree.html",
    "revision": "8a2625762372bad0f0d281e6a36486a5"
  },
  {
    "url": "algorithm/data-structure/binary-tree.html",
    "revision": "76f670eb80d0d71998ce586566cf6b02"
  },
  {
    "url": "algorithm/data-structure/doubly-linked-list.html",
    "revision": "c63ed7a9ff7bfc28af19cd13fac92b57"
  },
  {
    "url": "algorithm/data-structure/hash-table.html",
    "revision": "9da500e49c0d8b30ad6f690ef3839b7e"
  },
  {
    "url": "algorithm/data-structure/heap.html",
    "revision": "20b96bcbfe774e6f877e549c0c737906"
  },
  {
    "url": "algorithm/data-structure/index.html",
    "revision": "f40e6656955fa9688a70635d9f45eef8"
  },
  {
    "url": "algorithm/data-structure/linked-list.html",
    "revision": "002d3978a3e67ec84c380cd7f3b3aa97"
  },
  {
    "url": "algorithm/data-structure/priority-queue.html",
    "revision": "e364ff5c5cc55d2220194de9dc601fea"
  },
  {
    "url": "algorithm/data-structure/queue.html",
    "revision": "f788a12544be8ffc164128cd7fdefa3f"
  },
  {
    "url": "algorithm/data-structure/red-black-tree.html",
    "revision": "626be77bce52d2c18acb6a7926456fa3"
  },
  {
    "url": "algorithm/data-structure/segment-tree.html",
    "revision": "a343f8654ca7cf0cee3ece94a409a517"
  },
  {
    "url": "algorithm/data-structure/stack.html",
    "revision": "5d9920a6fed6d175b67a66bc685695c6"
  },
  {
    "url": "algorithm/data-structure/trie.html",
    "revision": "24712eaea072947fe7b8969fb894f3a4"
  },
  {
    "url": "algorithm/index.html",
    "revision": "f6922f86bdf657deef71dd4ec0266fb4"
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
    "url": "assets/js/109.b21a3bbd.js",
    "revision": "a604b8a490c0ef2ec52b64236af5ee68"
  },
  {
    "url": "assets/js/11.933e0c43.js",
    "revision": "af6951d8058353a0ec3fa8698327abf3"
  },
  {
    "url": "assets/js/110.366cbf8b.js",
    "revision": "1a43669d87c47d3dab5f776bad410b99"
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
    "url": "assets/js/app.5587db1d.js",
    "revision": "9844162790cad2221dd09053134a0efa"
  },
  {
    "url": "assets/js/vendors~docsearch.d566a751.js",
    "revision": "f9d228d23c26dd63baa4fa53c4259840"
  },
  {
    "url": "backend/index.html",
    "revision": "90042ca15ef6209466bd1dab2b818d47"
  },
  {
    "url": "backend/nodejs/events.html",
    "revision": "14704a0ae71f6c7c1c56e9a0c8eea49a"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "2cb8970076ed2763d2f5754f2ed760da"
  },
  {
    "url": "cs/index.html",
    "revision": "653d37e995bcb36889f775f792ba2908"
  },
  {
    "url": "cs/network/http.html",
    "revision": "81e9e23d2ca2a8b7dc8c71aa1d105775"
  },
  {
    "url": "cs/network/index.html",
    "revision": "a071e073b7f81ac1f9ed3ee0322931ef"
  },
  {
    "url": "cs/os/index.html",
    "revision": "0a93330ccced5f821b8f8c3a12d41ee6"
  },
  {
    "url": "frontend/babel/index.html",
    "revision": "bc73adea140ff2e39e43b920a0439981"
  },
  {
    "url": "frontend/browser/bom.html",
    "revision": "dfc840b6bb680d5256641ddaf5c5be43"
  },
  {
    "url": "frontend/browser/cross-domain.html",
    "revision": "9af5bc5d52046d3695a88429ce983125"
  },
  {
    "url": "frontend/browser/dom.html",
    "revision": "521d4dcc58d27cfe5c6e31eb29792828"
  },
  {
    "url": "frontend/browser/events.html",
    "revision": "07aee5a71bdf5a0017c17295d65f8ea6"
  },
  {
    "url": "frontend/browser/index.html",
    "revision": "b056807aafb3436a7f88b6922434a419"
  },
  {
    "url": "frontend/browser/memory-management.html",
    "revision": "13f7aac738c9099d9bede272020b8457"
  },
  {
    "url": "frontend/browser/pwa.html",
    "revision": "e3c59c33460e5f5016f9dd98898d21b6"
  },
  {
    "url": "frontend/browser/render.html",
    "revision": "05b62200424850add7ed67f7d2a88607"
  },
  {
    "url": "frontend/browser/storage.html",
    "revision": "c797def60956ab693a5f66d9a1d72428"
  },
  {
    "url": "frontend/browser/web-performance.html",
    "revision": "9530d749fc732a9f620111f643c6c69e"
  },
  {
    "url": "frontend/browser/web-security.html",
    "revision": "7cceb5c87ad1a0589782ffbcdc6317c2"
  },
  {
    "url": "frontend/css/css-animations.html",
    "revision": "a1c01a097b9508dc4261174a98ba39e4"
  },
  {
    "url": "frontend/css/css-border.html",
    "revision": "4a32e44dda0bead469070752e2772152"
  },
  {
    "url": "frontend/css/css-box-model.html",
    "revision": "da8a7041d33d526ed347582a1d580b47"
  },
  {
    "url": "frontend/css/css-color-and-background-and-gradients.html",
    "revision": "2bfa3dedc907f9503b39d6b0007e6b5f"
  },
  {
    "url": "frontend/css/css-css-and-documents.html",
    "revision": "f27d509fdf8a93396f775183bff1b0b0"
  },
  {
    "url": "frontend/css/css-filters-blending-clipping-masking.html",
    "revision": "cbc009162eb33377ab627bab56ac2dd2"
  },
  {
    "url": "frontend/css/css-flexbox-layout.html",
    "revision": "1a8f4a076748370f2f3783bdc8ba17c3"
  },
  {
    "url": "frontend/css/css-floating.html",
    "revision": "e9a26546b36746984d555765263654ea"
  },
  {
    "url": "frontend/css/css-fonts.html",
    "revision": "ddc7a990d9f8dfa25335f7894d42ff3d"
  },
  {
    "url": "frontend/css/css-grid-layout.html",
    "revision": "a356850ed63041f41bea9ab61cf58772"
  },
  {
    "url": "frontend/css/css-positioning.html",
    "revision": "3bb86acf8eb9b6767eb04645063d797c"
  },
  {
    "url": "frontend/css/css-selectors.html",
    "revision": "b31ebb9f96ba88f7a93bda3eb5bc3fcc"
  },
  {
    "url": "frontend/css/css-shapes.html",
    "revision": "a086d796cc90dc4f8f7d371ee7992918"
  },
  {
    "url": "frontend/css/css-specificity-and-cascade.html",
    "revision": "854f57be14b560524269370856fe1f3c"
  },
  {
    "url": "frontend/css/css-table-layout.html",
    "revision": "5753a5e8973d16dc7ff2f64e6b3001c3"
  },
  {
    "url": "frontend/css/css-text-properties.html",
    "revision": "b70472c18ec96f33b56250b37522fc79"
  },
  {
    "url": "frontend/css/css-transforms.html",
    "revision": "0d79e526a85738906f01b483586a3e56"
  },
  {
    "url": "frontend/css/css-transitions.html",
    "revision": "70a173ea1e726b1881ab1c6ef1b0f7e4"
  },
  {
    "url": "frontend/css/css-values-and-units.html",
    "revision": "1588437c2cec00bb9fef022753276cfd"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "3cd6846824e10baf033626acab44534f"
  },
  {
    "url": "frontend/index.html",
    "revision": "3efc1b6e9009d9d841e895fe5fe3043e"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "89a223cb729bd822d27ff5dd4eb50f75"
  },
  {
    "url": "frontend/js/js-control-flow-and-error-handling.html",
    "revision": "23d589fb8d3dd5fec8b040c6adb9e8af"
  },
  {
    "url": "frontend/js/js-es2020.html",
    "revision": "784480d554187fff81c62707a65b61ac"
  },
  {
    "url": "frontend/js/js-es2021.html",
    "revision": "5f13848095fdfd04496916ca95f699cb"
  },
  {
    "url": "frontend/js/js-es2022.html",
    "revision": "1a77b2ca075419ca49efce1ba55d29f5"
  },
  {
    "url": "frontend/js/js-expressions-and-operators.html",
    "revision": "4e1e26d4157bac68d524256e251533af"
  },
  {
    "url": "frontend/js/js-functions.html",
    "revision": "097d53925e5175e6a7750433a270435e"
  },
  {
    "url": "frontend/js/js-grammar-and-types.html",
    "revision": "e395af7ffc20377db83b14c3d52c5724"
  },
  {
    "url": "frontend/js/js-in-html.html",
    "revision": "000e38e61272b39f249d87e96670826f"
  },
  {
    "url": "frontend/js/js-indexed-collections.html",
    "revision": "6ce646aad07d77873b632fc6e689e321"
  },
  {
    "url": "frontend/js/js-iterators-and-generators.html",
    "revision": "5b73056bb52d1986ec6fba8db15c83e5"
  },
  {
    "url": "frontend/js/js-keyed-collections.html",
    "revision": "edba29025625d3ebcd9c6bee8eb62696"
  },
  {
    "url": "frontend/js/js-meta-programming.html",
    "revision": "55e9da567d2dcf0e1e859b421498e42e"
  },
  {
    "url": "frontend/js/js-modules.html",
    "revision": "01e57c5f4bc0b278594b976d16056843"
  },
  {
    "url": "frontend/js/js-numbers-and-dates.html",
    "revision": "d949724eac0e629a418748003ac423e1"
  },
  {
    "url": "frontend/js/js-promises.html",
    "revision": "7172fc0e15e9e4b363b284aeaecd0d1e"
  },
  {
    "url": "frontend/js/js-regular-expressions.html",
    "revision": "2a607cdab1b9ff1d6c427baa574c0d06"
  },
  {
    "url": "frontend/js/js-strict-mode.html",
    "revision": "527f0facd76af6be44abc5955c4146b0"
  },
  {
    "url": "frontend/js/js-text-formatting.html",
    "revision": "965527736c6a3d4b5fd6861ad2fa9827"
  },
  {
    "url": "frontend/js/js-working-with-objects.html",
    "revision": "16f91ecb23c48e7671614aa474305c7d"
  },
  {
    "url": "frontend/react/index.html",
    "revision": "a2b267cd28edfe56547817b8791a74e4"
  },
  {
    "url": "frontend/vue/basic.html",
    "revision": "e511214255029fcb6176ae44660cc2ff"
  },
  {
    "url": "frontend/vue/data-driven.html",
    "revision": "8883b644418a6a9833b40a60638c9955"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "4e24ff6307f36c9002c63b41fa20773f"
  },
  {
    "url": "frontend/vue/next-tick.html",
    "revision": "0bd54ded6159f4356ef6aec6b7cd1518"
  },
  {
    "url": "frontend/vue/reactivity.html",
    "revision": "d740349610d7f7478f5bf6d496bd8f52"
  },
  {
    "url": "frontend/vue/vue-router.html",
    "revision": "ea7928cd2372f7d309d73fbc8c9de749"
  },
  {
    "url": "frontend/vue/vuex.html",
    "revision": "fb936c4c081a26929447c82a574ab9de"
  },
  {
    "url": "frontend/webpack/basic.html",
    "revision": "ad828b29ef09bcf1fd62acad6684d4bd"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "dda87cce4f223b680708646b010e617f"
  },
  {
    "url": "frontend/webpack/principle.html",
    "revision": "373900d33ae77015dad740aaf6f1d887"
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
    "revision": "8c210eae5e1c157a7a8201fb240e0d14"
  },
  {
    "url": "interview/css.html",
    "revision": "cb3e51e6c123492e842c978de3c97d83"
  },
  {
    "url": "interview/html.html",
    "revision": "df6e65216f2922b0cdc41fb1dfb67ece"
  },
  {
    "url": "interview/index.html",
    "revision": "c076e219e4651aa255e051400cdab8e2"
  },
  {
    "url": "interview/integrate.html",
    "revision": "0bd7b8443e205f6f8c27b16be740bedc"
  },
  {
    "url": "interview/javascript.html",
    "revision": "db0617413d5fa0cefa2160fa4b8e95a2"
  },
  {
    "url": "interview/mobile-web.html",
    "revision": "5a9f299770ba030e0cb66250bee8ea7c"
  },
  {
    "url": "logo.png",
    "revision": "d8d70a56ece354e7f87ff3c675e28928"
  },
  {
    "url": "thinking/design-patterns/index.html",
    "revision": "983fe416b0c45d4be7e711af1c8f7dc3"
  },
  {
    "url": "thinking/index.html",
    "revision": "df2fb77db75a5fb928f15a4e92891890"
  },
  {
    "url": "tools/git.html",
    "revision": "8f1f0f9fdbd5a5595048ba64e9e73d2b"
  },
  {
    "url": "tools/index.html",
    "revision": "3658fb8c1aab3d04d05f52b890a6a7fd"
  },
  {
    "url": "tools/linux.html",
    "revision": "b0453ec1f2d89552a52d54fa2e2c55bf"
  },
  {
    "url": "tools/nginx.html",
    "revision": "cadf9126c89dacd924e3f4f3dc61dda3"
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
