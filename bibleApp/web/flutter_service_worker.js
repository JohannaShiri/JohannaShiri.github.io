'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9819b5d5740854312f76d96a542d24e2",
"index.html": "0f39dbc24a78df6281e3551ff403d392",
"/": "0f39dbc24a78df6281e3551ff403d392",
"main.dart.js": "1be0285e03933f99415e88ee753263d3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "eae3eb72832ea308a461e46530305e0c",
"assets/AssetManifest.json": "921502f0602acd044dfde2bd01471145",
"assets/NOTICES": "e56cb7f1dcc84228df6bf54e863639a7",
"assets/FontManifest.json": "69d63c60754a19f59a1e944c65bf5d5c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/buttons/close_white.png": "4c5785388b2055b233da70d09a4640be",
"assets/assets/buttons/book_black.png": "a7c65314b49120e78b29cd91419828dc",
"assets/assets/buttons/radio_on.png": "d048374a3e251fbeaae51f77d06b385b",
"assets/assets/buttons/burger_white.png": "f13ee22f92651c096ac68fb63e619d93",
"assets/assets/buttons/toggle_off.png": "e0b73ab9d659384d46a2e21e254346b3",
"assets/assets/buttons/option-1b.png": "238ca14a7485bc5303abc6d48688416b",
"assets/assets/buttons/notes.png": "f884724d42226a9cf9a0e505f1bbfa71",
"assets/assets/buttons/search.png": "085054b974b724693e172bb5f25a1904",
"assets/assets/buttons/radio_off.png": "b79db4e9f4fedf007699be113d8c1768",
"assets/assets/buttons/option-2.png": "9fa9587a1f96375b8edc8dcb2cb41080",
"assets/assets/buttons/book_white.png": "7b0222a89bf0402732e4b5284aaa7556",
"assets/assets/buttons/option-1.png": "beffefb25fb4f77e11eba0171e498e01",
"assets/assets/buttons/burger_black.png": "ffa993ba04140a97634387d855857b6d",
"assets/assets/buttons/two-halfs.png": "6eeddd3c39bb358f6a5bcf38a5fb5f60",
"assets/assets/buttons/toggle_on.png": "53881ac92caa2ff7bfc0a8ab25b0718c",
"assets/assets/buttons/close_dark.png": "7ceac17d7bc9343e059d1e95d5c91335",
"assets/assets/intro/8.png": "f85e9d8801d0b9bdb647a0bc9ea2f310",
"assets/assets/intro/4.png": "9ce3c060a04762ad938961929f182671",
"assets/assets/intro/5.png": "bd4e909a9b84d3c4ee5e0dc66680d904",
"assets/assets/intro/7.png": "e7f88f0c9fa603458ce26257f8250984",
"assets/assets/intro/6.png": "33d6b1d8f2046ab30a89244bdddd3f21",
"assets/assets/intro/2.png": "1c84d36ac3115d646055fd953154b2ef",
"assets/assets/intro/3.png": "e5ecbda835a8a62ef8a7295256c0439f",
"assets/assets/intro/1.png": "a0032c1655989b9afe23a6d9d873686c",
"assets/assets/images/X2transparent-is-down.png": "297bc5bfcf9afb365796d709308fbeed",
"assets/assets/images/X2NIGHTtransparent-is-both.png": "c33588e558f473bb0ee9e876b2e8ce28",
"assets/assets/images/IGOD_pink.png": "2330c73e6d0e9fd11ab598d0c80ac4b2",
"assets/assets/images/old_app_icon.png": "435950519cd48614e01d27a1661e086e",
"assets/assets/images/iGod_logo_app.jpg": "59fcefac87ffa557edc2a8250bbcf2ac",
"assets/assets/images/hagefen_updated.png": "b8698864c46b244d10023e3518adfee1",
"assets/assets/images/transparent_is_both.png": "4d30cb7fb1daf87cddd12eccae8f5478",
"assets/assets/images/screenshot.png": "518bf8681f4fbf1b05b305a2410e5d6b",
"assets/assets/images/ICB-LOGO.png": "131c32388f31b1da95a010fac5360326",
"assets/assets/images/iGod_logo_app_LOW_Q.jpg": "fe2ec76e5a2437715824df0a8dd2bf85",
"assets/assets/images/Logo-Hagefen-diana-new.png": "70d2d8a327f44b0cb7361d9f564d0b0d",
"assets/assets/images/X2NIGHTtransparent-is-down.png": "7766df0f9b711c91ce6adc79e4457a64",
"assets/assets/images/X2transparent-is-both.png": "a181eb80e079c2528bef67bc1a214403",
"assets/assets/images/transparent-is-down.png": "ea8b1e84578b2a0c65864232a7fe33f8",
"assets/assets/images/transparent-is-up.png": "bb595ec37c4995ad0a8fd085fe45f605",
"assets/assets/images/night_transparent_is_both.png": "099675fdf181d95ac11320e7c01c43c5",
"assets/assets/images/logo.jpeg": "77e71d5e86bdc45411e1f834c97440df",
"assets/assets/images/biblesocity_logo.png": "1072267934ce656ff4de9eb3e9c09fda",
"assets/assets/images/biblesocity_logo_pink.png": "94888bc2d6ffac69d51d8da724cd208f",
"assets/assets/images/simulator.png": "5059621941fec4a233ec0cb0df246930",
"assets/assets/images/IGOD_white.png": "55d772fb4fe2264624b1211799d6b06d",
"assets/assets/usfm_bible_text/modern_nt/58.SFM": "a4dfa9c4087c961ac4f8d0468df549b3",
"assets/assets/usfm_bible_text/modern_nt/64.SFM": "43eed22f9522c0b168540ea14f415703",
"assets/assets/usfm_bible_text/modern_nt/65.SFM": "52c1c42fa6a43017d1e2a3c19cf831d5",
"assets/assets/usfm_bible_text/modern_nt/59.SFM": "57cb6fc4fd188d0c5fb8dd99c4b54b59",
"assets/assets/usfm_bible_text/modern_nt/67.SFM": "967c627947c5dcdcac3b48a276c0dbde",
"assets/assets/usfm_bible_text/modern_nt/66.SFM": "2e0df9d993fb90edfbeaee054e62ae50",
"assets/assets/usfm_bible_text/modern_nt/62.SFM": "83a7c580e912f8addab082e326bfb2bd",
"assets/assets/usfm_bible_text/modern_nt/63.SFM": "4bc8dc6ecc546505a4678b912f3caf96",
"assets/assets/usfm_bible_text/modern_nt/61.SFM": "c503c6228cb5f0f5a96cf24167699947",
"assets/assets/usfm_bible_text/modern_nt/49.SFM": "623800e88924151516586d101600b724",
"assets/assets/usfm_bible_text/modern_nt/48.SFM": "ed8657679636e369b8efb5f906953a7d",
"assets/assets/usfm_bible_text/modern_nt/60.SFM": "6b1a9aa9817e491d99e46cb462ae2a44",
"assets/assets/usfm_bible_text/modern_nt/45.SFM": "979121774cfdf231e61ba18af0ec3cd4",
"assets/assets/usfm_bible_text/modern_nt/51.SFM": "9fa0e1d414d554f7e1ae5fb681e467ea",
"assets/assets/usfm_bible_text/modern_nt/50.SFM": "c96f10ea13a868c62ac390f96facd550",
"assets/assets/usfm_bible_text/modern_nt/44.SFM": "c204fb45c229c304ebf06778f8d36b3c",
"assets/assets/usfm_bible_text/modern_nt/52.SFM": "824fdbfefe629a47a670ce0128355866",
"assets/assets/usfm_bible_text/modern_nt/46.SFM": "58bbd06ff6808f7be7ce14f003c1acaa",
"assets/assets/usfm_bible_text/modern_nt/47.SFM": "c4806e27383294dcefb95c8b90900c72",
"assets/assets/usfm_bible_text/modern_nt/53.SFM": "4e6d433578413e0bb07ce4da8a8a55bf",
"assets/assets/usfm_bible_text/modern_nt/57.SFM": "d164cbca719d2b1003653287f3ad6555",
"assets/assets/usfm_bible_text/modern_nt/43.SFM": "cb8b0968673d2827457269bfcae17606",
"assets/assets/usfm_bible_text/modern_nt/42.SFM": "c8331a79e426f311b38c566893684864",
"assets/assets/usfm_bible_text/modern_nt/56.SFM": "baf9977f6059dfb7470a69ecbf30e553",
"assets/assets/usfm_bible_text/modern_nt/54.SFM": "f95e94a9050c4779e7b2d64c8b5c38c3",
"assets/assets/usfm_bible_text/modern_nt/55.SFM": "f8bb184c304a62cae9503560e1c951c7",
"assets/assets/usfm_bible_text/modern_nt/41.SFM": "95a52b4e4c0b47c3a33a37991fb92942",
"assets/assets/usfm_bible_text/the_testimony/31.usfm": "2e0008aea42c80b6a2a438ded29eb284",
"assets/assets/usfm_bible_text/the_testimony/27.usfm": "e19b25207a6fc08ec515d79f2ab132aa",
"assets/assets/usfm_bible_text/the_testimony/11.usfm": "28e2b441e684bf6860ea4974245340c4",
"assets/assets/usfm_bible_text/the_testimony/1.usfm": "b4ea527222ed8f3d702c649d36cbb648",
"assets/assets/usfm_bible_text/the_testimony/10.usfm": "d85bbfef60fea26a5d95588fb89b172d",
"assets/assets/usfm_bible_text/the_testimony/26.usfm": "24f8a87531a730ecdd1f8caed586a0bc",
"assets/assets/usfm_bible_text/the_testimony/30.usfm": "ae544503e3fea634bb33de3d740fd55a",
"assets/assets/usfm_bible_text/the_testimony/17.usfm": "ebe65d650cc52699f10302ac703a3df6",
"assets/assets/usfm_bible_text/the_testimony/7.usfm": "49aaafc6d72f02cba9892a8976bfadfc",
"assets/assets/usfm_bible_text/the_testimony/37.usfm": "fcb1ae345ea323a32a6f50b8e07ad597",
"assets/assets/usfm_bible_text/the_testimony/21.usfm": "435c66eacf0f5d1ffa83fed9a3ee174a",
"assets/assets/usfm_bible_text/the_testimony/20.usfm": "57f815d2e45543bd2b92ccd6fd7c6db9",
"assets/assets/usfm_bible_text/the_testimony/36.usfm": "84d5b7cafa17f6ace5447b05cd98788b",
"assets/assets/usfm_bible_text/the_testimony/6.usfm": "e16511e3e957bb2369d381b1961dfafc",
"assets/assets/usfm_bible_text/the_testimony/16.usfm": "222dc737576abe377f02603fbcd6efd2",
"assets/assets/usfm_bible_text/the_testimony/5.usfm": "a2326aec0935b686af265f999b15cee1",
"assets/assets/usfm_bible_text/the_testimony/39.usfm": "d672944a32101059c5365cb053e07b1b",
"assets/assets/usfm_bible_text/the_testimony/15.usfm": "9540ecfdfa5e6962364bdd11e9fd86ff",
"assets/assets/usfm_bible_text/the_testimony/23.usfm": "f4be92a1a17ef649f8780f029c0afdea",
"assets/assets/usfm_bible_text/the_testimony/9.usfm": "d728eec1ad927eeda98d5f3ae44aaee5",
"assets/assets/usfm_bible_text/the_testimony/35.usfm": "0a9bd6b68f2c3e5a05886a0b5d7b17f5",
"assets/assets/usfm_bible_text/the_testimony/19.usfm": "7ef3355a6a312dc2e501dd38ba3e266e",
"assets/assets/usfm_bible_text/the_testimony/18.usfm": "5c534af59beb3b87a938afc976c410bc",
"assets/assets/usfm_bible_text/the_testimony/34.usfm": "06791b93c4006adb3ec3d72d3384188a",
"assets/assets/usfm_bible_text/the_testimony/8.usfm": "839580004bf83e1c8dfd9826e1a7f53c",
"assets/assets/usfm_bible_text/the_testimony/22.usfm": "ca1ce5e2d2dddd51526a80b0df17d0ac",
"assets/assets/usfm_bible_text/the_testimony/14.usfm": "744726671dcccad1228d8693068d330f",
"assets/assets/usfm_bible_text/the_testimony/38.usfm": "ec72ea8425b095fe1f652ecb2bc4c9e6",
"assets/assets/usfm_bible_text/the_testimony/4.usfm": "d85b90929ba4d792e738ed5c2ac50f64",
"assets/assets/usfm_bible_text/the_testimony/25.usfm": "79ae2fae7e9af6388694a8e7ad598c07",
"assets/assets/usfm_bible_text/the_testimony/33.usfm": "aadaa645265909513426fcef57529110",
"assets/assets/usfm_bible_text/the_testimony/29.usfm": "d5aae224c99f9a8946b6bf0d1b679563",
"assets/assets/usfm_bible_text/the_testimony/3.usfm": "b8b29053b461d1cd97bd139c1274668a",
"assets/assets/usfm_bible_text/the_testimony/13.usfm": "84022c8aeffa4f5a001769d643c5a8d2",
"assets/assets/usfm_bible_text/the_testimony/12.usfm": "22a2ee599984b6212845757e2f246c84",
"assets/assets/usfm_bible_text/the_testimony/2.usfm": "1d35731a6d9857fd2fe4559ff0f14c6e",
"assets/assets/usfm_bible_text/the_testimony/28.usfm": "4f49ca7a8542f6588936a0b7f28a58ad",
"assets/assets/usfm_bible_text/the_testimony/32.usfm": "3ef98f6983031d44bf08fb8351ceab7d",
"assets/assets/usfm_bible_text/the_testimony/24.usfm": "b907e9e256eaa5b0804e7808eb485cf1",
"assets/assets/usfm_bible_text/old_testament/9.SFM": "73b463ebba6b2bc591846fc1dfbfd87a",
"assets/assets/usfm_bible_text/old_testament/8.SFM": "a27088b3aabd289e15df0b249b8bf2b5",
"assets/assets/usfm_bible_text/old_testament/13.SFM": "4eee053355e27b4c26da7b4e9537b9a3",
"assets/assets/usfm_bible_text/old_testament/12.SFM": "7abc54d83ba5085c769bc66a16be435b",
"assets/assets/usfm_bible_text/old_testament/38.SFM": "dc6c64e5c4f9deef0eba495f1624cf29",
"assets/assets/usfm_bible_text/old_testament/10.SFM": "1a157b870098690ec3332dc46c95e4ea",
"assets/assets/usfm_bible_text/old_testament/11.SFM": "0e431b7eeabd50aeb3b6bb86c649786a",
"assets/assets/usfm_bible_text/old_testament/39.SFM": "9896971a1df82a5d514ed5436b4c24ec",
"assets/assets/usfm_bible_text/old_testament/15.SFM": "ac63847eec262e693884e7c59933f21b",
"assets/assets/usfm_bible_text/old_testament/29.SFM": "4be2d5392b1b8b13b67045fe9ee9fbda",
"assets/assets/usfm_bible_text/old_testament/28.SFM": "e20824c34ea4fbed586571a8aa6c79ae",
"assets/assets/usfm_bible_text/old_testament/14.SFM": "49df209392b77be3067e401a8827755f",
"assets/assets/usfm_bible_text/old_testament/16.SFM": "77a29014bd504590e4ee03bc4855c906",
"assets/assets/usfm_bible_text/old_testament/17.SFM": "643896fbe81ba21c9f87388cf6e26730",
"assets/assets/usfm_bible_text/old_testament/26.SFM": "2ee95ba842a0e82a2582689c84dca54b",
"assets/assets/usfm_bible_text/old_testament/32.SFM": "11ddf3b4e9c04317f3c69ece7a4ec227",
"assets/assets/usfm_bible_text/old_testament/33.SFM": "4bd3a4d9a7f0c9c4295f7541f92f5e25",
"assets/assets/usfm_bible_text/old_testament/27.SFM": "d4ad0a898655ad665ecb934916caaaf1",
"assets/assets/usfm_bible_text/old_testament/19.SFM": "3bc697805cdc53648c925bf15d37a972",
"assets/assets/usfm_bible_text/old_testament/31.SFM": "55333a774ea4e11bad2c3b6daa649ffa",
"assets/assets/usfm_bible_text/old_testament/25.SFM": "57aefcdf9719f012179f34ad6c0025e7",
"assets/assets/usfm_bible_text/old_testament/24.SFM": "8cf8a9bd85076e83ea08c571a9b9a709",
"assets/assets/usfm_bible_text/old_testament/30.SFM": "53f97da07835efca269e32b3cb978861",
"assets/assets/usfm_bible_text/old_testament/18.SFM": "c20b3676fdc02407f01b9cd65f3cfcf5",
"assets/assets/usfm_bible_text/old_testament/34.SFM": "185f6f8a2695cde6a2cb4c305e1fcbc6",
"assets/assets/usfm_bible_text/old_testament/20.SFM": "e459f90b62ffb4431530fef36cdcac21",
"assets/assets/usfm_bible_text/old_testament/21.SFM": "99cc9179986996ad13a69fc343647623",
"assets/assets/usfm_bible_text/old_testament/35.SFM": "a8834f78645d9e55a8c8856ae3f5e2ec",
"assets/assets/usfm_bible_text/old_testament/23.SFM": "7410956b58ebf2af6ef9efa8c7fbb87a",
"assets/assets/usfm_bible_text/old_testament/37.SFM": "69dcb164820d9c6925b78a7b434dacb2",
"assets/assets/usfm_bible_text/old_testament/36.SFM": "25aa6894af5681678595eb3ea748dc53",
"assets/assets/usfm_bible_text/old_testament/22.SFM": "61a6fef2f5f9bd5a03692b250a641dbd",
"assets/assets/usfm_bible_text/old_testament/3.SFM": "9a2987a4a7eda61bc05d5b32329a8709",
"assets/assets/usfm_bible_text/old_testament/2.SFM": "a67993127e046fe96ba93a37a9c33f92",
"assets/assets/usfm_bible_text/old_testament/1.SFM": "68df8e08066cf34bfc6fe400548e14d7",
"assets/assets/usfm_bible_text/old_testament/036.SFM": "b1b15b3bf8253aa4ac1e6efda2449657",
"assets/assets/usfm_bible_text/old_testament/5.SFM": "944ffa4bd582d012925ff91bc702179f",
"assets/assets/usfm_bible_text/old_testament/4.SFM": "7a1e0824a32ec7b440a9eace7fd89d9b",
"assets/assets/usfm_bible_text/old_testament/35_orig.SFM": "78bab6bd4fd3251d5ff049ed5dc3a9d0",
"assets/assets/usfm_bible_text/old_testament/035.SFM": "f57e2e556f852e18d6dd376693cec78c",
"assets/assets/usfm_bible_text/old_testament/6.SFM": "ad030a1c37b60344eb463d57779eb2c5",
"assets/assets/usfm_bible_text/old_testament/7.SFM": "44d0f57dbbd5ee2fa6ae93ae0093ba7d",
"assets/assets/usfm_bible_text/delitzsch/58.SFM": "dfff9cd94b6c10b6d1d97e653f983cae",
"assets/assets/usfm_bible_text/delitzsch/64.SFM": "73643c0b19fc855c4234658a784bb5c6",
"assets/assets/usfm_bible_text/delitzsch/65.SFM": "08921ac465b5e46ffa60515700297a52",
"assets/assets/usfm_bible_text/delitzsch/59.SFM": "2a60c11ce4ea222f1fdd0d7a0482cb94",
"assets/assets/usfm_bible_text/delitzsch/67.SFM": "dbd4d5286ee4d910a1c215838472c5dd",
"assets/assets/usfm_bible_text/delitzsch/66.SFM": "4635503fbfb6eb8591309ff7642e3678",
"assets/assets/usfm_bible_text/delitzsch/62.SFM": "6eb0207e72101b695d6a804cf4c458cf",
"assets/assets/usfm_bible_text/delitzsch/63.SFM": "5b095f579614e2ea079d975ca7978ea1",
"assets/assets/usfm_bible_text/delitzsch/61.SFM": "5a6eab7848b624b1a8c5dc1c60b9a4a0",
"assets/assets/usfm_bible_text/delitzsch/49.SFM": "54e9e0bbac39e8ba8c7d579d2c8c7f91",
"assets/assets/usfm_bible_text/delitzsch/48.SFM": "af80ee2a39a3b06cfd36ffb826e04d85",
"assets/assets/usfm_bible_text/delitzsch/60.SFM": "dba0d970b8051a6694a5adf4f6869ebd",
"assets/assets/usfm_bible_text/delitzsch/45.SFM": "36a10d82ccf77250145331941435a44f",
"assets/assets/usfm_bible_text/delitzsch/51.SFM": "5ed7880e76c9998b058046aac674ee01",
"assets/assets/usfm_bible_text/delitzsch/50.SFM": "ea60f10d76d5fc7d47d2428e69e50cbb",
"assets/assets/usfm_bible_text/delitzsch/44.SFM": "01bf13aeaa3d8cc422fac009c1459b18",
"assets/assets/usfm_bible_text/delitzsch/52.SFM": "d1661c5c7530309d4dc15889db17d483",
"assets/assets/usfm_bible_text/delitzsch/46.SFM": "aa43623c03ea89d2591fcf8196612b95",
"assets/assets/usfm_bible_text/delitzsch/47.SFM": "a261989f3125f99ef411dca95b2f8fb1",
"assets/assets/usfm_bible_text/delitzsch/53.SFM": "35e1f38b77a6761d1f3574daaaf781b2",
"assets/assets/usfm_bible_text/delitzsch/57.SFM": "45986a1c36f304cac1d1f70017dbbade",
"assets/assets/usfm_bible_text/delitzsch/43.SFM": "63ee4e9b90a6af630148b45298acf9e6",
"assets/assets/usfm_bible_text/delitzsch/42.SFM": "85035e188e1c8d00b8be3999ac2691e6",
"assets/assets/usfm_bible_text/delitzsch/56.SFM": "9b8745660f1155d4a8cb90c9c97d322e",
"assets/assets/usfm_bible_text/delitzsch/54.SFM": "dc84eaf71e54a3323754f808d6464aa6",
"assets/assets/usfm_bible_text/delitzsch/55.SFM": "44885d76b88265887429c651855bf069",
"assets/assets/usfm_bible_text/delitzsch/41.SFM": "ab71dbfb6eadca28cbfeb064a801bd91",
"assets/assets/old_look_try": "6ae57c6c11031604c5afbc6a9e0e446f",
"assets/assets/some.txt": "95a52b4e4c0b47c3a33a37991fb92942",
"assets/assets/fonts/almoni/almoni-neue-medium-aaa.otf": "0f8fc1922b670b2330d5f0fdeaf61182",
"assets/assets/fonts/almoni/almoni-neue-ultraBlack-aaa.otf": "fd5e710a845d39808c1c5ab97ebe4c64",
"assets/assets/fonts/almoni/almoni-neue-regular-aaa.otf": "65e231e017cc63b67df5f8e91781c50c",
"assets/assets/fonts/almoni/almoni-neue-black-aaa.otf": "3571f76167d05f1cb9f53436fe548f2c",
"assets/assets/fonts/almoni/almoni-neue-demibold-aaa.otf": "182a0295f76b41be53cca889fb611939",
"assets/assets/fonts/Narkissim_app/Narkissim-Bold.ttf": "3bbf20a781ce92142ccd459f758f8aef",
"assets/assets/fonts/Narkissim_app/Narkissim-Regular.ttf": "d4de7e7f7410c2efc3b3176159fd7e0c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
