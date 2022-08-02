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
    "revision": "e40edd603397a43e1d24c3c3fd738ae1"
  },
  {
    "url": "about/index.html",
    "revision": "d68bea93a21a2225b80ec283195ecbed"
  },
  {
    "url": "algorithm/algorithms/array-sorting-algorithms.html",
    "revision": "18543edc7c5443b8156eb868c01c9e4b"
  },
  {
    "url": "algorithm/algorithms/index.html",
    "revision": "5291816697775a373b9bff9a038c86d7"
  },
  {
    "url": "algorithm/data-structure/avl-tree.html",
    "revision": "61ff5f3b90f972666b915cb30db5e5fe"
  },
  {
    "url": "algorithm/data-structure/binary-search-tree.html",
    "revision": "006be5b7c09b601c5c40d6037b7200bd"
  },
  {
    "url": "algorithm/data-structure/binary-tree.html",
    "revision": "3c05e87649eb75abcb98f30d3360995b"
  },
  {
    "url": "algorithm/data-structure/doubly-linked-list.html",
    "revision": "822d374b3de7f98260cf3a83ab5780f2"
  },
  {
    "url": "algorithm/data-structure/hash-table.html",
    "revision": "d7a68c086a64d26a4b206732cf7b660e"
  },
  {
    "url": "algorithm/data-structure/heap.html",
    "revision": "16b9c167b65b2acec0ed0ebdb935610e"
  },
  {
    "url": "algorithm/data-structure/index.html",
    "revision": "6b194e610237c81e638d07d4196d73c6"
  },
  {
    "url": "algorithm/data-structure/linked-list.html",
    "revision": "58583c540ada6aa7f6cc428529b786de"
  },
  {
    "url": "algorithm/data-structure/priority-queue.html",
    "revision": "3a028c09e148cde1c760ac1c77fb16a0"
  },
  {
    "url": "algorithm/data-structure/queue.html",
    "revision": "3d87400d72cf2c0339d5597dde8c9814"
  },
  {
    "url": "algorithm/data-structure/red-black-tree.html",
    "revision": "0f3e04fe328588fcbab2241a83050f33"
  },
  {
    "url": "algorithm/data-structure/segment-tree.html",
    "revision": "fb1dff8353d0502f5921a3dd467605d9"
  },
  {
    "url": "algorithm/data-structure/stack.html",
    "revision": "3212c1419d0f7281dc06e20f2e170f36"
  },
  {
    "url": "algorithm/data-structure/trie.html",
    "revision": "8531d2d70bb9c08085b059999887c5f3"
  },
  {
    "url": "algorithm/index.html",
    "revision": "cdacc12a73f76abc45771b05a1a0c8ea"
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
    "url": "assets/js/100.36d56565.js",
    "revision": "55e14ad5abd0ad8143020c69a6dfea16"
  },
  {
    "url": "assets/js/101.df66c37d.js",
    "revision": "39d5905b5e12ebbdf2c837f38abe18ae"
  },
  {
    "url": "assets/js/102.6b015c13.js",
    "revision": "a62025f7bfaa31063fdc25e9ff0eb9ab"
  },
  {
    "url": "assets/js/103.f1b84dcb.js",
    "revision": "5c379be5e0a89f822a296305ee7c4d3f"
  },
  {
    "url": "assets/js/104.5b1a2e5f.js",
    "revision": "d96e208d7d507f59d91d411b075da7fb"
  },
  {
    "url": "assets/js/105.d63e27b1.js",
    "revision": "a24862c9972296a1ade311dd38ca7372"
  },
  {
    "url": "assets/js/106.65804e04.js",
    "revision": "9074fa5aba698b84c3f2e4afc756c184"
  },
  {
    "url": "assets/js/107.02e1256a.js",
    "revision": "c1c7f00713b2ba6a46e6823e6da98e1b"
  },
  {
    "url": "assets/js/108.7be8a22d.js",
    "revision": "bddf184410025fa2f413a6031d1455e3"
  },
  {
    "url": "assets/js/109.72a96da2.js",
    "revision": "1b006b99e483aa0a6f2b059b58d8e99c"
  },
  {
    "url": "assets/js/11.933e0c43.js",
    "revision": "af6951d8058353a0ec3fa8698327abf3"
  },
  {
    "url": "assets/js/110.ee0a67af.js",
    "revision": "33f9930d9d182ad7e98c0b1103f34640"
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
    "url": "assets/js/3.579e423d.js",
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
    "url": "assets/js/56.00b309c1.js",
    "revision": "9a880a758e4a797d67295950a21b83fe"
  },
  {
    "url": "assets/js/57.77bc542e.js",
    "revision": "35641408befbfca96bcb443fca548390"
  },
  {
    "url": "assets/js/58.f8532cf4.js",
    "revision": "979cb2272853f7cc195a5986ec26bcfe"
  },
  {
    "url": "assets/js/59.994b5127.js",
    "revision": "d0560409dbec8bc91825f9ff06927473"
  },
  {
    "url": "assets/js/6.1f7100b9.js",
    "revision": "619e30dae43e1c28d5eef84da2a3fb13"
  },
  {
    "url": "assets/js/60.6b286820.js",
    "revision": "6269fa01984bda133e6658bfb28262b7"
  },
  {
    "url": "assets/js/61.5e12cba3.js",
    "revision": "1a116e5110292b894b3ef9a489bd99c6"
  },
  {
    "url": "assets/js/62.c1fa6754.js",
    "revision": "358b55c69d2a1ca8612b2ee0ec96fe15"
  },
  {
    "url": "assets/js/63.ce55ea9b.js",
    "revision": "18f50062ac6388699c7514881ac3757b"
  },
  {
    "url": "assets/js/64.8241b1a6.js",
    "revision": "4eecb213d1c0708a8703162cf38219dc"
  },
  {
    "url": "assets/js/65.39c8b20a.js",
    "revision": "1582ff74660eab8ea5ac9b8d678bae79"
  },
  {
    "url": "assets/js/66.0e61bc58.js",
    "revision": "0176868ccf337a8056117cc3f19655f6"
  },
  {
    "url": "assets/js/67.979960f8.js",
    "revision": "240a1baf4e454dfcbd5204b7dabfb9c2"
  },
  {
    "url": "assets/js/68.118dfa68.js",
    "revision": "69d02303f02313cfd37e2112ab3fbef0"
  },
  {
    "url": "assets/js/69.dece1872.js",
    "revision": "88beb646bdfd956e2c3960927214c214"
  },
  {
    "url": "assets/js/7.2f7c6323.js",
    "revision": "9d7477d05bad7ab285369d1918c43a82"
  },
  {
    "url": "assets/js/70.7ef57200.js",
    "revision": "3b8bc2f88665b288ee4655a9b3858f4f"
  },
  {
    "url": "assets/js/71.c5af9526.js",
    "revision": "39b637f82607c4986cd8104ef3df405b"
  },
  {
    "url": "assets/js/72.cc4404e7.js",
    "revision": "f870a851afb71e3a362f62087725c9fb"
  },
  {
    "url": "assets/js/73.51edf9f7.js",
    "revision": "9883f540d7b962f688dd04e60e37b4a2"
  },
  {
    "url": "assets/js/74.e5d5c81a.js",
    "revision": "2400dc542c9b848ef4cd728197f763c6"
  },
  {
    "url": "assets/js/75.479d010f.js",
    "revision": "887f719456b661c9a2e9b9b9f82df9ea"
  },
  {
    "url": "assets/js/76.6145baa2.js",
    "revision": "93dd1b49853197644ec40cab6fc6b978"
  },
  {
    "url": "assets/js/77.4e27970d.js",
    "revision": "6484d57a7c50a8d771316692a39af63b"
  },
  {
    "url": "assets/js/78.5719da7f.js",
    "revision": "e989777035bef2338b8ab69c68ee93a2"
  },
  {
    "url": "assets/js/79.ae360f0b.js",
    "revision": "8d0d681db20d7618d22628a0abdbe1fe"
  },
  {
    "url": "assets/js/8.3b666c11.js",
    "revision": "1d41d4a2e659637b375d7f71f9e233e4"
  },
  {
    "url": "assets/js/80.098c98bc.js",
    "revision": "50b44329db5ada35888e13ba1bcf8661"
  },
  {
    "url": "assets/js/81.b23f5f8a.js",
    "revision": "d5763e39838f800f53ebcc6a72a2db2a"
  },
  {
    "url": "assets/js/82.a403bb63.js",
    "revision": "e1ca314871b13de9854b15c425d09230"
  },
  {
    "url": "assets/js/83.024cc977.js",
    "revision": "462d894774eef2b2a402fa39a15fe4a4"
  },
  {
    "url": "assets/js/84.87cf8a92.js",
    "revision": "6cd3052742e40f5cc478678d4b1e0157"
  },
  {
    "url": "assets/js/85.d906cd7c.js",
    "revision": "c1fda0d7ba2a1969b5b9333d31254436"
  },
  {
    "url": "assets/js/86.39c26b96.js",
    "revision": "ff0ea3e4a0c080446721e2b1f10e35bc"
  },
  {
    "url": "assets/js/87.6528f823.js",
    "revision": "4c095e5dee23b82376b875121b48fe59"
  },
  {
    "url": "assets/js/88.6bd3ed51.js",
    "revision": "d317809a57f8246730a200d2fad3a931"
  },
  {
    "url": "assets/js/89.df04bed8.js",
    "revision": "22f078826e010ec8b0087dcb6270e847"
  },
  {
    "url": "assets/js/9.384e508e.js",
    "revision": "e0bd133dcd04e9fbf1ac4bdf5389bce1"
  },
  {
    "url": "assets/js/90.707f18c1.js",
    "revision": "81f2efc0e7f5eee9fcf07ef0d44aaa23"
  },
  {
    "url": "assets/js/91.8906600f.js",
    "revision": "aec505939e40c5aedce09320c6e8394c"
  },
  {
    "url": "assets/js/92.f05d298b.js",
    "revision": "380b988208407aa21ce2ab8f8810fa05"
  },
  {
    "url": "assets/js/93.e8d762ff.js",
    "revision": "f89bc7d76b302af68413b4162cf7f844"
  },
  {
    "url": "assets/js/94.300243ba.js",
    "revision": "192d97052d23b4bb46718fb4b1cffe42"
  },
  {
    "url": "assets/js/95.5c72f9b3.js",
    "revision": "4e7f7cee15709d5b117fac08eae5ca5a"
  },
  {
    "url": "assets/js/96.dbada701.js",
    "revision": "a77260039a9cc110501738e27d6c8b14"
  },
  {
    "url": "assets/js/97.c4675dcf.js",
    "revision": "e21ea3d8f54e4ea00ed845988b8b83eb"
  },
  {
    "url": "assets/js/98.7e3bab12.js",
    "revision": "86d5beb8ca3ae690c45c3e0b4b500273"
  },
  {
    "url": "assets/js/99.a1596a36.js",
    "revision": "fa09084777e2de18906aa945b167e876"
  },
  {
    "url": "assets/js/app.7c7a138f.js",
    "revision": "b6a6b49907d7f2c1f9c2beeff481ee95"
  },
  {
    "url": "assets/js/vendors~docsearch.d566a751.js",
    "revision": "f9d228d23c26dd63baa4fa53c4259840"
  },
  {
    "url": "backend/index.html",
    "revision": "23dc53e9de01d1fc052e55e7fdefd155"
  },
  {
    "url": "backend/nodejs/events.html",
    "revision": "c08315458e4a0270f05028fe2d755890"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "db49d358b5aedae31f339d0a648e7991"
  },
  {
    "url": "cs/index.html",
    "revision": "cb9b9ad2483868c45bed44eeff3edd70"
  },
  {
    "url": "cs/network/http.html",
    "revision": "cf608a15d3762e512a5cefd1e2366b89"
  },
  {
    "url": "cs/network/index.html",
    "revision": "7e6b718c7ea5129b643e2d5d5daf1d5e"
  },
  {
    "url": "cs/os/index.html",
    "revision": "99583c9b5362182147b684e5fd1681a2"
  },
  {
    "url": "frontend/babel/index.html",
    "revision": "da428a10651ffc1b2bee22a3bcf0b632"
  },
  {
    "url": "frontend/browser/bom.html",
    "revision": "4a7f6d02e8fe5870232e73930983a595"
  },
  {
    "url": "frontend/browser/cross-domain.html",
    "revision": "14f745f5ba6edeee8c19c8cd80669bf0"
  },
  {
    "url": "frontend/browser/dom.html",
    "revision": "a88cb83381290406c862059c7da8fe27"
  },
  {
    "url": "frontend/browser/events.html",
    "revision": "8bfbf1a9059b7a2da44c21ed41a5f2e7"
  },
  {
    "url": "frontend/browser/index.html",
    "revision": "bc4cd911a1b113942ea7cb1a323a214f"
  },
  {
    "url": "frontend/browser/memory-management.html",
    "revision": "27d6ee818386b12a550dde0a9cca5262"
  },
  {
    "url": "frontend/browser/pwa.html",
    "revision": "a7524095623170df4503795fc502568b"
  },
  {
    "url": "frontend/browser/render.html",
    "revision": "074a1a2fc92cbc9f1dc874538cab029c"
  },
  {
    "url": "frontend/browser/storage.html",
    "revision": "3e7cf81608c63971962daae0e20baf3b"
  },
  {
    "url": "frontend/browser/web-performance.html",
    "revision": "5ef86fd4e71cb1d405e845b513249683"
  },
  {
    "url": "frontend/browser/web-security.html",
    "revision": "359fbb0d642010df2db4f6464208b994"
  },
  {
    "url": "frontend/css/css-animations.html",
    "revision": "1f415d73b3dc60dc94383ddebb08258f"
  },
  {
    "url": "frontend/css/css-border.html",
    "revision": "ef8715dc13a1a24acf1bf0b2226da06d"
  },
  {
    "url": "frontend/css/css-box-model.html",
    "revision": "f2cfa202c0be619eba828d928ea38b53"
  },
  {
    "url": "frontend/css/css-color-and-background-and-gradients.html",
    "revision": "bc744f64d1f3271cf1c7efbcd801e2a7"
  },
  {
    "url": "frontend/css/css-css-and-documents.html",
    "revision": "c92c6b8ee9546cf6eae15246c31479cb"
  },
  {
    "url": "frontend/css/css-filters-blending-clipping-masking.html",
    "revision": "ea0e0df6a00e47d08cbc20eeb0ccfc4f"
  },
  {
    "url": "frontend/css/css-flexbox-layout.html",
    "revision": "2cf8a2c31e60924050c2bb869d75b97a"
  },
  {
    "url": "frontend/css/css-floating.html",
    "revision": "8faa9d00cdf6a69dc4cd024b68f89f75"
  },
  {
    "url": "frontend/css/css-fonts.html",
    "revision": "b6e76a9d5e040f0f1485b33dfdee19dc"
  },
  {
    "url": "frontend/css/css-grid-layout.html",
    "revision": "19c648179fde551adba1ec9470fa33e6"
  },
  {
    "url": "frontend/css/css-positioning.html",
    "revision": "1ca0ac597eeceda04efe3004b6b1fc32"
  },
  {
    "url": "frontend/css/css-selectors.html",
    "revision": "e8ca222aa4505ba2728b1bff2373e822"
  },
  {
    "url": "frontend/css/css-shapes.html",
    "revision": "81e14e5ff334fd0e72ca40769ec2f8fd"
  },
  {
    "url": "frontend/css/css-specificity-and-cascade.html",
    "revision": "cb4ab55f3698224ac41b3ac149bba9fa"
  },
  {
    "url": "frontend/css/css-table-layout.html",
    "revision": "a8db6aba263d58e00a89c6a37942af72"
  },
  {
    "url": "frontend/css/css-text-properties.html",
    "revision": "0d70a2be5fbc4adc58ab3fa54814d646"
  },
  {
    "url": "frontend/css/css-transforms.html",
    "revision": "13a5d3570402826f1dc96ee83308df51"
  },
  {
    "url": "frontend/css/css-transitions.html",
    "revision": "b5fe2494a3156ef88f3ef9c32c924722"
  },
  {
    "url": "frontend/css/css-values-and-units.html",
    "revision": "67099d5606e84092af36b52a8917fea1"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "a4fc06be68b1ce143c7793e99b1d7754"
  },
  {
    "url": "frontend/index.html",
    "revision": "04a8cfcc5962a3320bf04fc631aac079"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "85a04d88a11e753972ba4e6682ddb8ea"
  },
  {
    "url": "frontend/js/js-control-flow-and-error-handling.html",
    "revision": "8ede0ce65703dc371fa93faef7cf4c25"
  },
  {
    "url": "frontend/js/js-es2020.html",
    "revision": "340dd9b2b5216bdc8a7726f1b4c140d6"
  },
  {
    "url": "frontend/js/js-es2021.html",
    "revision": "e41814835ba2373db837992d6ab2d95e"
  },
  {
    "url": "frontend/js/js-es2022.html",
    "revision": "6a982ca4f01e90674fcd7cbc5159bba3"
  },
  {
    "url": "frontend/js/js-expressions-and-operators.html",
    "revision": "44a39f19f1007edd143edc39244e8d00"
  },
  {
    "url": "frontend/js/js-functions.html",
    "revision": "b745cd70e1fba2c2b57c13c83ea03b38"
  },
  {
    "url": "frontend/js/js-grammar-and-types.html",
    "revision": "70208f0a835502a3fdeb06424547c961"
  },
  {
    "url": "frontend/js/js-in-html.html",
    "revision": "2a02c901f01ddae7f9fea179aa7c82bc"
  },
  {
    "url": "frontend/js/js-indexed-collections.html",
    "revision": "d9cd4e978a7299d0bcf93860d9d4cc56"
  },
  {
    "url": "frontend/js/js-iterators-and-generators.html",
    "revision": "1d1f3a671f2cc1c7d97f8b7975074942"
  },
  {
    "url": "frontend/js/js-keyed-collections.html",
    "revision": "750902c0a895881e8c88056a3eff5e43"
  },
  {
    "url": "frontend/js/js-meta-programming.html",
    "revision": "7fe7ccf867cd114d6d1d0fbf0beac66f"
  },
  {
    "url": "frontend/js/js-modules.html",
    "revision": "d5575043ac61326e9780bf03f4bba1df"
  },
  {
    "url": "frontend/js/js-numbers-and-dates.html",
    "revision": "4f779e191174f220579c512ead0a785d"
  },
  {
    "url": "frontend/js/js-promises.html",
    "revision": "3db398cdeaf4e428bf5d8c47bece358c"
  },
  {
    "url": "frontend/js/js-regular-expressions.html",
    "revision": "b350792efca99f0468282910cefbbb97"
  },
  {
    "url": "frontend/js/js-strict-mode.html",
    "revision": "e17065f3e539f85558f022de4cdf6208"
  },
  {
    "url": "frontend/js/js-text-formatting.html",
    "revision": "f5c4245d7408500c4f16a8ae1ec3250f"
  },
  {
    "url": "frontend/js/js-working-with-objects.html",
    "revision": "67a6fe9b09ac0a7a06cc2066377a8899"
  },
  {
    "url": "frontend/react/index.html",
    "revision": "70317396aa8f880d7c77476568d2653c"
  },
  {
    "url": "frontend/vue/basic.html",
    "revision": "a02d1a77a930e46f85b34fb5681d181c"
  },
  {
    "url": "frontend/vue/data-driven.html",
    "revision": "3bb3a847f64374786d3208e8954238ee"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "3fad727a62e885fbf51c444ad76b6511"
  },
  {
    "url": "frontend/vue/next-tick.html",
    "revision": "7679454267fcf6a000ee4471a917dade"
  },
  {
    "url": "frontend/vue/reactivity.html",
    "revision": "0a0bb0aa9415b8f21e89c1978f142c0d"
  },
  {
    "url": "frontend/vue/vue-router.html",
    "revision": "2b864019e0573678671398534b00f153"
  },
  {
    "url": "frontend/vue/vuex.html",
    "revision": "839d5456542e27c1719a03f1ef9e97fd"
  },
  {
    "url": "frontend/webpack/basic.html",
    "revision": "80beff14dab2c30de1624611cb65eb89"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "c3a6cbd03807cc98ddf83072e496ea27"
  },
  {
    "url": "frontend/webpack/principle.html",
    "revision": "36050e0d8e8a248fb9564eca1dc893c1"
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
    "revision": "16832773f09e397484de6794eb70158b"
  },
  {
    "url": "interview/css.html",
    "revision": "385f8bf9303169a0f18705d51bc734ee"
  },
  {
    "url": "interview/html.html",
    "revision": "b94ca109913ae1d727d35e1ae4b907c1"
  },
  {
    "url": "interview/index.html",
    "revision": "6e04570e2e763999885fe2105c0b9303"
  },
  {
    "url": "interview/integrate.html",
    "revision": "936ec1bffe2ca8673126d36fd1446e7c"
  },
  {
    "url": "interview/javascript.html",
    "revision": "c4a302cd9cd3974a98532747bd012093"
  },
  {
    "url": "interview/mobile-web.html",
    "revision": "4fb22fb8038294add80edbd0f7a21c4b"
  },
  {
    "url": "logo.png",
    "revision": "d8d70a56ece354e7f87ff3c675e28928"
  },
  {
    "url": "thinking/design-patterns/index.html",
    "revision": "d69b3819fe452953a89516f57709286e"
  },
  {
    "url": "thinking/index.html",
    "revision": "a6f693f6f6c4d7c6264f92f4b234c79c"
  },
  {
    "url": "tools/git.html",
    "revision": "f633dc6f3ffb201a223a429914d48b8b"
  },
  {
    "url": "tools/index.html",
    "revision": "b7ce05a3e8228af58fd3f0cd118a5c5d"
  },
  {
    "url": "tools/linux.html",
    "revision": "902cde23890ef6aaf82b0d9e91b72a88"
  },
  {
    "url": "tools/nginx.html",
    "revision": "a4e0c078cd3603501b5826bbe1e257ca"
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
