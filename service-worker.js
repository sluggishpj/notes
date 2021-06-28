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
    "revision": "4cb9a9a98f9d74154fe8ab01b0613e67"
  },
  {
    "url": "about/index.html",
    "revision": "a62ed764c35a43fbae3773b4dc8c8693"
  },
  {
    "url": "algorithm/data-structure/01-linked-list.html",
    "revision": "7a9ba779db5de63f8143c5d1369e41b6"
  },
  {
    "url": "algorithm/data-structure/02-doubly-linked-list.html",
    "revision": "e243676ed56117e7b59de3442f174286"
  },
  {
    "url": "algorithm/data-structure/03-queue.html",
    "revision": "8d6337f318b59650c9b7bcca821204b0"
  },
  {
    "url": "algorithm/data-structure/04-stack.html",
    "revision": "50811592ea44de3b6dcdd0290b371de9"
  },
  {
    "url": "algorithm/data-structure/05-hash-table.html",
    "revision": "f6355dcc56fe1c84fbf25e3119ee8db2"
  },
  {
    "url": "algorithm/data-structure/06-head.html",
    "revision": "0962d1670892b95c89666faabb4943c2"
  },
  {
    "url": "algorithm/data-structure/07-priority-queue.html",
    "revision": "a498957a780c6aeae8984b607979d562"
  },
  {
    "url": "algorithm/data-structure/08-trie.html",
    "revision": "79f771b8cfd6cc6e55a92190563c55e4"
  },
  {
    "url": "algorithm/data-structure/09-binary-tree.html",
    "revision": "43044dc3c0aa328b2f477ea1b9e598a4"
  },
  {
    "url": "algorithm/data-structure/091-binary-search-tree.html",
    "revision": "6fb3d17de5de32aafbdf64de634578cd"
  },
  {
    "url": "algorithm/data-structure/10-avl-tree.html",
    "revision": "c3c25b1e40a83ba516cfcaa5466cb1e1"
  },
  {
    "url": "algorithm/data-structure/11-red-black-tree.html",
    "revision": "451cc7e46de3d09a78c420da5fa153b5"
  },
  {
    "url": "algorithm/data-structure/12-segment-tree.html",
    "revision": "6eddcbc03d638c8338ba8530cfd783b2"
  },
  {
    "url": "algorithm/data-structure/index.html",
    "revision": "533b94120bf1ddad0c802666312aec41"
  },
  {
    "url": "algorithm/index.html",
    "revision": "8a2b6182ed3e2c1033d95d0c1e74eace"
  },
  {
    "url": "assets/css/0.styles.281bae62.css",
    "revision": "90c5b1de1950df9fbd1f4a76a8b8848b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0cb5e539.js",
    "revision": "e6217f6de26f4b4908cb0c1858af89d7"
  },
  {
    "url": "assets/js/11.fbd4f1dc.js",
    "revision": "a1bcece729022037e90e067f6a67fad5"
  },
  {
    "url": "assets/js/12.4050456e.js",
    "revision": "f23244e3cf71a2672288162adb4e1a5b"
  },
  {
    "url": "assets/js/13.bb09b861.js",
    "revision": "6f80982d472d4cb1132b093eebd4a05c"
  },
  {
    "url": "assets/js/14.c4144d54.js",
    "revision": "f845a02ed9e7682dc9626eb1e92328f0"
  },
  {
    "url": "assets/js/15.7a06323e.js",
    "revision": "ebff405d5972057f16c21510c5e29898"
  },
  {
    "url": "assets/js/16.8fa5a11a.js",
    "revision": "94acdf2afda37d488af87f8859790474"
  },
  {
    "url": "assets/js/17.7192cc92.js",
    "revision": "6009dd1c9481bdf7432ce5dae094956f"
  },
  {
    "url": "assets/js/18.9d7119f5.js",
    "revision": "56264ba8c3cc049f35d5ee404764018c"
  },
  {
    "url": "assets/js/19.b141ed5e.js",
    "revision": "108e3cd7327bc9f78e097b34a84518f0"
  },
  {
    "url": "assets/js/2.9760422e.js",
    "revision": "9656dbf150dfdf6270e027c7cd79242d"
  },
  {
    "url": "assets/js/20.cd1223da.js",
    "revision": "fa78e092983283473d5cb270c62c1d78"
  },
  {
    "url": "assets/js/21.75fe36c4.js",
    "revision": "0256ed392b8f55f1cb32b6922cc49c08"
  },
  {
    "url": "assets/js/22.59031930.js",
    "revision": "627428fe03e974ba6089f452ee76304b"
  },
  {
    "url": "assets/js/23.e8bdce6b.js",
    "revision": "27cffbb1a0c97be28b96d7e2dbd593f3"
  },
  {
    "url": "assets/js/24.bdab5e09.js",
    "revision": "92b9a9d85c3c9227168eb66e9bbe8cfb"
  },
  {
    "url": "assets/js/25.0e55e46f.js",
    "revision": "b10117184412277baaacafb5342a55cb"
  },
  {
    "url": "assets/js/26.3fd85969.js",
    "revision": "8cf0e43af3b684790a85d69b72eec7b1"
  },
  {
    "url": "assets/js/27.ef83062d.js",
    "revision": "336f8f935264fb3d1a0947a46d074583"
  },
  {
    "url": "assets/js/28.876a80e3.js",
    "revision": "9c7a462254929c69b7ceb4c1564e0517"
  },
  {
    "url": "assets/js/29.3ad3725a.js",
    "revision": "9e71f5188a713d90f8648e6ff5838bf3"
  },
  {
    "url": "assets/js/3.f1db775c.js",
    "revision": "cf5bb67ad84fca69a0a29dacdf720a1e"
  },
  {
    "url": "assets/js/30.1515b7ae.js",
    "revision": "b471586a723dcc21b9923caa38bae640"
  },
  {
    "url": "assets/js/31.0d200e82.js",
    "revision": "b0abc976fa1b22f88d0635909b12dca2"
  },
  {
    "url": "assets/js/32.44c391bc.js",
    "revision": "c6f07a5fedbc18706ab215efe3a3d8ea"
  },
  {
    "url": "assets/js/33.ecec3292.js",
    "revision": "4e6c2f462a13f5331c0756ca4678bf68"
  },
  {
    "url": "assets/js/34.b5241832.js",
    "revision": "1a4993c02deb7138336d20ef38e21d0d"
  },
  {
    "url": "assets/js/35.987e7d57.js",
    "revision": "82cea18fa4f736dda260bdf467157dc0"
  },
  {
    "url": "assets/js/36.d0be555a.js",
    "revision": "7cd44037a0b05b3c1ac7cd8438285983"
  },
  {
    "url": "assets/js/37.a240d5bb.js",
    "revision": "4f6e7d35369d3d8294b56cd89f678a92"
  },
  {
    "url": "assets/js/38.fb4f024a.js",
    "revision": "bd9cef271e03f6103d476cc1ddf83da6"
  },
  {
    "url": "assets/js/39.f284c9f5.js",
    "revision": "27ae21b7e90087d8b0153b288d69edfb"
  },
  {
    "url": "assets/js/4.1ea173c1.js",
    "revision": "16b59f2910d6fcd26beb03f0e575538e"
  },
  {
    "url": "assets/js/40.145b4ba7.js",
    "revision": "18ead20d5f18d8631c018892d984583a"
  },
  {
    "url": "assets/js/41.fd69c55c.js",
    "revision": "d5d4ec72f502ce22cca0fabb1d054976"
  },
  {
    "url": "assets/js/42.8de54fdd.js",
    "revision": "40e741a748dadf2386c3544d8cb5871f"
  },
  {
    "url": "assets/js/43.d531e94f.js",
    "revision": "578db3dfd78073fe020e56238b227dad"
  },
  {
    "url": "assets/js/44.2cd01363.js",
    "revision": "be4c65423e5210cfff406d4499d7b365"
  },
  {
    "url": "assets/js/45.559edf09.js",
    "revision": "a90ff8e3d8e0bffc2c224c4e13384fe7"
  },
  {
    "url": "assets/js/46.b18292b1.js",
    "revision": "2b00a1a63bdf87507c5aae34b6683447"
  },
  {
    "url": "assets/js/47.c82ded8c.js",
    "revision": "286feecb6b6bb6307a500309665f284c"
  },
  {
    "url": "assets/js/48.16988b76.js",
    "revision": "adf50c38c400ab19ea5ce456a1abae07"
  },
  {
    "url": "assets/js/49.df28783c.js",
    "revision": "074f894662488961eb76cce27ac9e6e7"
  },
  {
    "url": "assets/js/5.45b16b56.js",
    "revision": "d5e91e363dea3423b96c0460922e873c"
  },
  {
    "url": "assets/js/50.66303903.js",
    "revision": "7e945e2281b41e9612bca08863702a98"
  },
  {
    "url": "assets/js/51.52101ee0.js",
    "revision": "fd493f0f0fdd0c308f72ecfd7aa97972"
  },
  {
    "url": "assets/js/52.2e3f3109.js",
    "revision": "c44e3c11cfcc274ad3b4de653e54dba4"
  },
  {
    "url": "assets/js/53.4723cd7e.js",
    "revision": "0a34dab2fb0ef05edfd9f75671e8a7a6"
  },
  {
    "url": "assets/js/54.b63b24cc.js",
    "revision": "e6e12d1bca07d321f0e58eec3f34c858"
  },
  {
    "url": "assets/js/55.79cff0d5.js",
    "revision": "5d3c1cdb5f223cba333f171388db2d65"
  },
  {
    "url": "assets/js/56.d8f459d6.js",
    "revision": "84d23f8d6dba132e2c32f0ca88e4d391"
  },
  {
    "url": "assets/js/57.3f1aeae9.js",
    "revision": "6311b2067724849854fd300f063b02e0"
  },
  {
    "url": "assets/js/6.eb86c0c6.js",
    "revision": "af5d736ae2a4b9279c9751dfe4f9c1af"
  },
  {
    "url": "assets/js/7.572f1ce2.js",
    "revision": "81bd6b2b7fe5e4dd405dc655f78ee5c3"
  },
  {
    "url": "assets/js/8.20d43d19.js",
    "revision": "8f850e59d70be0173161466d492cd05b"
  },
  {
    "url": "assets/js/9.1df5ee18.js",
    "revision": "55e12478c31c3cda45a5149c09cc7fc9"
  },
  {
    "url": "assets/js/app.2e9eb77f.js",
    "revision": "020442d1a59e46658abc93cf9b9f9ed8"
  },
  {
    "url": "backend/index.html",
    "revision": "fbe30736645d5fc481358f55eb362e21"
  },
  {
    "url": "backend/nodejs/events.html",
    "revision": "8f731088e1230ce16fe935daa2d694f6"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "9a4c547183dacaf126ab3897528ed350"
  },
  {
    "url": "frontend/browser/01-dom.html",
    "revision": "afd402d3e97de100083c688d01acf03c"
  },
  {
    "url": "frontend/browser/02-events.html",
    "revision": "65869149fdc1a2942908a77919e61eb9"
  },
  {
    "url": "frontend/browser/03-bom.html",
    "revision": "f84ff6c8cd4171c203105404bcbee6af"
  },
  {
    "url": "frontend/browser/04-cross-domain.html",
    "revision": "314339c83f8362865979df3dc0011711"
  },
  {
    "url": "frontend/browser/05-storage.html",
    "revision": "1df5f330677a1b6ee13f51588a5b0284"
  },
  {
    "url": "frontend/browser/06-render.html",
    "revision": "3ea02359674ff7b7fa0596d7a33d21f7"
  },
  {
    "url": "frontend/browser/07-pwa.html",
    "revision": "82bdd80215bde6e68a4fb1178e001d11"
  },
  {
    "url": "frontend/browser/08-memory-management.html",
    "revision": "971703fb2b70c93a582ebb2422882fb0"
  },
  {
    "url": "frontend/browser/09-web-security.html",
    "revision": "64a3b05e2405ecbe086ec335426c8fad"
  },
  {
    "url": "frontend/browser/10-web-performance.html",
    "revision": "379255a347cb38eb09fde1aab8b09a13"
  },
  {
    "url": "frontend/browser/index.html",
    "revision": "48b789a7c4e001d13337ee157c8b26e9"
  },
  {
    "url": "frontend/index.html",
    "revision": "a26d43f77b03aad2d5ae886822ec6130"
  },
  {
    "url": "frontend/js/00-js-in-html.html",
    "revision": "af1ab971d8913c704fb0e5c7cb80cd0d"
  },
  {
    "url": "frontend/js/01-js-grammar-and-types.html",
    "revision": "4e76c1af6abf4f1e9bf08cf003eb3c6a"
  },
  {
    "url": "frontend/js/02-js-control-flow-and-error-handling.html",
    "revision": "3722b41eab3c339c7e9eee0b1563c642"
  },
  {
    "url": "frontend/js/03-js-functions.html",
    "revision": "ac61adbdccee4d05f1c63275dbf6220d"
  },
  {
    "url": "frontend/js/04-js-expressions-and-operators.html",
    "revision": "9c441b5e05b80368090c2a8e7d24f60a"
  },
  {
    "url": "frontend/js/05-js-numbers-and-dates.html",
    "revision": "f61c5f6d74cab3a141734d32cf6c23c9"
  },
  {
    "url": "frontend/js/06-js-text-formatting.html",
    "revision": "05fca119a0ebf1443bfaafccd97a64ef"
  },
  {
    "url": "frontend/js/07-js-regular-expressions.html",
    "revision": "5116eeaf9afe94b7a4a0141293edf851"
  },
  {
    "url": "frontend/js/08-js-indexed-collections.html",
    "revision": "6d9ffa5adcfb7076f3c7baf3484075cf"
  },
  {
    "url": "frontend/js/09-js-keyed-collections.html",
    "revision": "ad827f624261888d32d34d2618b9cd6d"
  },
  {
    "url": "frontend/js/10-js-working-with-objects.html",
    "revision": "d03ec13662cbc5add51200715feaabb6"
  },
  {
    "url": "frontend/js/11-js-promises.html",
    "revision": "53754f248a7964dd280e08f3c3e6989b"
  },
  {
    "url": "frontend/js/12-js-meta-programming.html",
    "revision": "86bfe76a490267bb497f6fc82a574b0f"
  },
  {
    "url": "frontend/js/13-js-modules.html",
    "revision": "04f0bc3b47b376487889107f46135c86"
  },
  {
    "url": "frontend/js/14-js-strict-mode.html",
    "revision": "07d827d7f45249971a920c83c50055d4"
  },
  {
    "url": "frontend/js/15-js-es2020.html",
    "revision": "221f2a15226ed7e0a28f714503a77368"
  },
  {
    "url": "frontend/js/16-js-es2021.html",
    "revision": "0aba1046a231830db1fd03c781df1b21"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "7e7d0227a144f7011aa8ab173d16fe9a"
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
    "revision": "469e2696692c2023f219f0abd15e203d"
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
