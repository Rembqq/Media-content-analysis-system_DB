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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "094e78087cbb864c200880d97cdbf693"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.bcd040ba.css",
    "revision": "d8b4ad386149975297fbe47f4d4161c6"
  },
  {
    "url": "assets/img/get-all_2.adf54c80.png",
    "revision": "adf54c80081b2aeee6fc3b4303d612e5"
  },
  {
    "url": "assets/img/get-all.c3b08fbb.png",
    "revision": "c3b08fbbf9dfdb6591cb2b420a58ef49"
  },
  {
    "url": "assets/img/get-id.3e1d8c11.png",
    "revision": "3e1d8c11a54407f4d576bc41e3b06150"
  },
  {
    "url": "assets/img/post.23aff863.png",
    "revision": "23aff8636336665e2c87c506c39fd8c0"
  },
  {
    "url": "assets/img/put.5105614d.png",
    "revision": "5105614d0b28229f24481465278b5b13"
  },
  {
    "url": "assets/img/relational_schema.06c8bb4c.jpg",
    "revision": "06c8bb4c67301f964ac3ade6cd210bf6"
  },
  {
    "url": "assets/img/remove.ebdcfe6e.png",
    "revision": "ebdcfe6e48276cd6ee7a3e17e431394c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.987eab03.js",
    "revision": "960769676b2efa8db56afbfd94c56b21"
  },
  {
    "url": "assets/js/11.f1db864a.js",
    "revision": "0ec28a0b6d066f9e4f9283bd0f053385"
  },
  {
    "url": "assets/js/12.6beda826.js",
    "revision": "17f513ff64e37b0a320add8bc8a401b3"
  },
  {
    "url": "assets/js/13.6be78fcf.js",
    "revision": "f2ab0dbe7a72064a0b4ec6d8cf106f23"
  },
  {
    "url": "assets/js/14.36796f7d.js",
    "revision": "50df2bba4e7f9272ff6d717f924b6732"
  },
  {
    "url": "assets/js/15.be5fee15.js",
    "revision": "5e0eec27f980761549d0a9d065fb6c6b"
  },
  {
    "url": "assets/js/16.845f1d0d.js",
    "revision": "6444b5aa95bef9a8af2f3762b89d7d0f"
  },
  {
    "url": "assets/js/17.be2757a5.js",
    "revision": "f7c72edcb6cb682eea9b2b0745f9dbd0"
  },
  {
    "url": "assets/js/18.1b5bd8cb.js",
    "revision": "0269fd859e0c9a585044ba2de19cc861"
  },
  {
    "url": "assets/js/19.2adfda0e.js",
    "revision": "8ac4f4ef684ac3ae5ed5d4b6d518c90e"
  },
  {
    "url": "assets/js/2.6b22115d.js",
    "revision": "4b6fe114fa1393010a29fbdaa4cb7ee9"
  },
  {
    "url": "assets/js/20.59562d31.js",
    "revision": "73aa3efbee863ee706369ca5333f6c4e"
  },
  {
    "url": "assets/js/21.346df942.js",
    "revision": "ed2ff9c5feae2e1feeb676736580a863"
  },
  {
    "url": "assets/js/22.3cfa77a9.js",
    "revision": "5ddc5c85b25f7a5889a57b002c92e541"
  },
  {
    "url": "assets/js/23.88efecf2.js",
    "revision": "97a9f218a28e1e940dcff7554e408233"
  },
  {
    "url": "assets/js/24.507c94ae.js",
    "revision": "c52d9e741fe8769d26de29235db0d877"
  },
  {
    "url": "assets/js/26.cdcf961d.js",
    "revision": "f683ac99beb1badde3e5fb377b65dcde"
  },
  {
    "url": "assets/js/3.32d4eff8.js",
    "revision": "6e33da0daae5304d8dd87b9eadb39c05"
  },
  {
    "url": "assets/js/4.f9fd1f58.js",
    "revision": "8ced4d2d54ee338423f1faa92e894e7a"
  },
  {
    "url": "assets/js/5.5884a570.js",
    "revision": "4ddb90ee53d96f9526c27c44b58f623c"
  },
  {
    "url": "assets/js/6.04503463.js",
    "revision": "9fc1e6f66a79ffd5ee26e937f91216b2"
  },
  {
    "url": "assets/js/7.17e35dd8.js",
    "revision": "0b6a3683bc0b50e2b14e27c5f63cba55"
  },
  {
    "url": "assets/js/8.7be0851e.js",
    "revision": "dd31e52a5cd3dab0e1aff0fed225c178"
  },
  {
    "url": "assets/js/9.8e47c8a5.js",
    "revision": "d2248106083086d391051d7041ba8ec3"
  },
  {
    "url": "assets/js/app.f2fb946b.js",
    "revision": "7f138d40daa977ea6e9ceabed4ea2e88"
  },
  {
    "url": "conclusion/index.html",
    "revision": "2b2e8d659729cf79a990b4ca812a0e91"
  },
  {
    "url": "design/index.html",
    "revision": "6c18e95c40f364bf98ce9e78d71d1051"
  },
  {
    "url": "index.html",
    "revision": "ec8d50a5372965b7439496b79343df60"
  },
  {
    "url": "intro/index.html",
    "revision": "f7c369050a8f12123e702d1793c36104"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "20f656b388e6491ab2441bd3459c0802"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "eef72d617ab63b8ffeec843184463dc9"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "c9ed34c3c071d074e030cc2344487ab4"
  },
  {
    "url": "software/index.html",
    "revision": "d8e9fbdd50cffbf73dab69016d0f8649"
  },
  {
    "url": "test/index.html",
    "revision": "22250b191621cd0d684ee391ae003cf0"
  },
  {
    "url": "use cases/index.html",
    "revision": "3bfbc4d11e385f201a0de23feeed172c"
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