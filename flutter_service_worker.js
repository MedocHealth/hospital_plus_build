'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d06b1c92c581b4fd82f2d35a1868776f",
".git/config": "9971778256373abee39c52c9b1616947",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ebe382fdca239a1c33fb08ace523568d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3b7f97c1e9a6aa3c59242663d2e466c9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b02c2aed7579732730444663e50662f0",
".git/logs/refs/heads/main": "8799ad259984e533181909c57a62cb7e",
".git/logs/refs/remotes/origin/main": "e422e834a69f32e43dc8323b2a2f0788",
".git/objects/00/5ad1001a0b32127a40db7deaf78742844b5284": "51995a6ddc2df8e069852591f21057ba",
".git/objects/01/453618ce3f4f2d9a272cad07f9aadd623b87ce": "1c430cf8352421bc23f3f6d4d939ef8c",
".git/objects/03/792e038522bc56bd9f7ca2f5ba0d0d05a475b5": "61a5884d7111300b6d13780e0676f3ee",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/2ee85228684a06a2cd2ae04ba1942095f86640": "ab79bac3f188a8a8267f971bef4b87ed",
".git/objects/08/fd45471b659599ed05f65e2ac74bbb44c06be7": "f651230fec585b389b2dcf7c78a52038",
".git/objects/0a/1286d9b580d35af1d35307b02fef88cadea24e": "49839927a43edcd11ca47af741efc4b3",
".git/objects/0a/71d552b672ae5d0abd7a9b28fd9b6162dfb320": "e8d6519183890037e502b4346d78a412",
".git/objects/0c/bca88584fa4b9cc07332a5a73123b58b5e4cae": "5aee247656317adac0bfd1d5a5b1a99f",
".git/objects/0d/b132026c1c48eb76a6d59d0117e3fe8646df70": "effeaf0a0b312842c44c4ff910141a4f",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/14/21cbd9bf0576b59b8bafc224571755da5cf50f": "cd56211499fdd355e983b307a0c97ccd",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/772b2f7d0d5217cc9f74567fbf782bbb9d09ab": "4e3bf6f14d53ef1d478204b13f0aa431",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1d/2e2c5e214cbf33ebfa1074cdc6e30bb054e1ff": "19266b7a63dce9a78e5935cf48508398",
".git/objects/1e/c5ef9d14c1d6f15e3084c45af0f516e82f795d": "479ac7cb452650c4e24d745c4c33a23c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/595b1dc11f2c2c600405b143aebaaa4376313d": "37256301ee618c3f0753f62e351b5d7d",
".git/objects/24/095d2dba0b56b1632716bd70d40d829b1b574d": "1948fb7f6571a86ab6ac68217f55b8eb",
".git/objects/26/b6fa12b4f976a59a7a2ea5d982480fcce2cff2": "e8438c75797b29cc17b72d81ffccafed",
".git/objects/2f/5dde3935456afdc0028414860fa575e7256558": "82c5046e38756f9e7243472590bbd376",
".git/objects/37/21ff64034cda4d0ee4f8c1f941155b602951c8": "b753a9daa68ff81d3db607bf86e65ad3",
".git/objects/37/fe26de4b54ac29327a81bde954f53731b7cde1": "8f2d3493936dd4a6b01bfd07c75de3cf",
".git/objects/3a/928a96733384fd7ae4574e81a871438c10caca": "a66866151982128a5dc9a9cdb9cd749f",
".git/objects/3d/a4898b00ad5abcc71aa0eebf2c6fd244cbbea2": "c3e5b091c2bdecf9582d5f05eb2f75db",
".git/objects/3e/26d7be63d961b6eb9b44c558ee3c856971ccd0": "dbdb20565910b0e28f78ae558b28499b",
".git/objects/45/f616c97897659fa66720c2ef61ed4d48204729": "c3bded2577aa5815ede6630f1deedbd0",
".git/objects/47/20acf6c2b878cc685009479a35bb6133968e40": "5a03e14120eb3d955ecb0d59d7c7cfc9",
".git/objects/48/217617005575345943d8460b76c03381fed224": "6eb02af7684e2da217c7c7aea938335e",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/caa83394b40bd4ec053bf64fcb574a1497f7e9": "9a2ff5f6f14124e5ad36fb708fb5a205",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/85a1c1329af303ee3ea3b00995785c0e36e7ce": "0c2da3c5234f5a6c3fad50d456a652fa",
".git/objects/4e/f7a605aa1d2c35c89febc7b7038a5c632a4f71": "ecd8f0cc2ccae8825376d18656ee0a4e",
".git/objects/50/07f6b06dd3cba258471a823799bf605dc058e5": "62af5df3e04b2667618351a2c568b3f5",
".git/objects/50/5f9681e95e0d6e38119b8c6a749258838c2872": "f25143b7a047faeaa65561b071ad01d0",
".git/objects/51/4dfc1463f5609a6ffec7c17117a41a2fec961e": "8b0709781b7cd3776eff070db9dcd7ba",
".git/objects/57/6880baf10c8e5adfe5baaaabb1406f3e746f64": "9ad4f5149dee11f702c9e34c592204ce",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/80894f9cd11639dcc078de8663133825b7d65f": "bf4657e1be55194c72ef0bfe91ce2821",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/62/f21d3513fdd4eb0802512cabe39476a568dc80": "0a8ccbb24a03e07c970b8dd179d5ea32",
".git/objects/63/411327556de654e20e24cc7fe718e48b5c4293": "5a4bfc266c4e977690c7fd209be26a2e",
".git/objects/68/1109005d78b78fa560542be8ba25b90aca053d": "fdf1fb9c204ead1832b4b9a0909e5a38",
".git/objects/69/8a99960a1f07cdfe6d13ada2d18fdff16535e1": "c412d9003c14a781138cd1b85d4061b4",
".git/objects/6e/ad9e0adf9b7fa180b9366e2748ceaf0884decc": "6bd0c36945557fe41adb4035a1971b3c",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/d563f25138ed2bf2a935d0f173e648cac16c8d": "72ed1561901fd391ee059a1725287a44",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7c/a412a7d714cb18953836e7a92ec3e7cc6a95df": "0833a2dd21f42f65a29175861d9db1f1",
".git/objects/80/62c6a5b26e847f513ed4847a2ff890b5304f0a": "4d3d79a85dc8b2e1617f37ad6fdd654a",
".git/objects/81/8e85fcb65535303632f405a72fc4731bac8e54": "699d21aa6664ab54293f0f3f4fc751a5",
".git/objects/84/0bceb8f4eee1f46e7c339413fdd7cd3c7d02b0": "67af87ac842fb98922250e35006cd4a4",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/32d8878dec162e57c8ef076573c5fa56042823": "c83727c7952e1f0e60bf254f9271d666",
".git/objects/8e/8afd973a8c16f61a94b1ebcd6236502ad9b630": "f4d1c7339f90390355cc8258a9820f53",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/aeea8261d2b9ae12a58e66258db67d9472906d": "ddc819a76b29de4a7cd5424ce2b02de2",
".git/objects/99/ddc3405973705f43bd673804b15f818a9074b3": "bb02f047fff96e847cd0b5487dd96692",
".git/objects/9a/ec50fd65e033ef778aef9a61e4041f45bc50c4": "9e0ca55106771d4211064838d14cbab7",
".git/objects/9b/a8c9d0d6a209c13ad8f93d96ce1be08f2423bb": "8a089e5a6f347a2d57b2471d90f8ca1d",
".git/objects/9c/acb66b966bf57c7ec828d4d42989f8608ad2ad": "3c616e310c0fdf55ff20e88739f57101",
".git/objects/9e/3a4447c70139f86bd9827ef64a0c993bde0738": "29d3283f89e62746a8f948295089ab9e",
".git/objects/a0/24688ea4b3f934e8ecd7ab2635af351ff4179d": "4893d1a7da793ca68c5fa9b957352fba",
".git/objects/a1/6d26338d777f2ca94778915ec027de9236dbbe": "559593bf9413ccf9412aa8f0b6f3ac4b",
".git/objects/a2/f360d18dfdc7871854f751f4554d95e0112597": "fb8b208b5d04159c1976634974a7b12d",
".git/objects/a6/0c41fa541e01314207653f49961ed66aab5788": "f138eb7b4322d5b8c17809fa8c68c063",
".git/objects/a6/227768be10f9d94644b13499373a662d318530": "7ab7f9571e56b181847011fdf2efddaf",
".git/objects/a9/9e6f6a963145ce873d47cb98618b4329aad5cf": "632475f39bd92ad3b329f89580c8c32e",
".git/objects/ad/ca2903bf848674fa743d941ae062e5b73075f8": "c265e4045238f29ac6fd1b17d6e833ff",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/fcda2604700082d9b1e310d50b75678829913d": "2b634f76d6ad9974d244a8d04fc3711f",
".git/objects/bd/d305f81f3055de02e6d3179ba1242ce044ca35": "4d755dc90046229af4187955b64de863",
".git/objects/be/b421c06e9d3ac3849d32e79bc796dd36ed84ab": "afd718cf21612106276b2c275da1c5fc",
".git/objects/c5/69d9f1b9165bc33ebb20c3c8f94251586445de": "a46f42425d5451f832655f6efd2fb7d3",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c5/fdd9dca6fc54e51ef4dea060fd92fd1618be92": "e8365b7cb9c3ebb0adb6673d75698e67",
".git/objects/c6/20ddaf96f50b4196d433f081b32d119f274f29": "7b99ed418eabbb35dddbe990ab3a3f8d",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c7/7d77ff105e9801553e71cf55fabe4c559d3153": "7ff600fab769f40d5576cd07e98515b0",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/242ca4f32f23ba6cb680e4b29ef443498602e2": "8761ef47ed829105987eed1ac26796d8",
".git/objects/cb/bdb3d787dd30444ab18300ddba2fb647ef5ac9": "328e092b21135657fa3fd7332abdf28c",
".git/objects/ce/33dbabac3dc50e147d8c6fd750520da33ae7e4": "b371bc64cb7153291e7a8286766f7bd3",
".git/objects/cf/bdbd97bb1e83e8128cdca28588e4fbbe42aa00": "493e67edc0fe8cf7af87c63e0c27ab49",
".git/objects/cf/c56a7f63248f5e7b3551e9231456fc6c3a026b": "263dde69e31fad5f4169df40d8881a6e",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/09aa1c9ae4b04c75b2c82d01f62daf2b61948e": "d8d3d576ccf419f1f724f0a0d3fc1adf",
".git/objects/da/c2572d91932a37b99572899102fee0d89a1e89": "5fb06e0b68f3e8b6b4e759973c15c25d",
".git/objects/dc/508baf399cfbea32f51b9542fe69f91cfae884": "b96c46ed4195adad3b35a2d13f3b26e1",
".git/objects/e1/342855faec2bccf0a706a4686e9d7452912d32": "aaa9185dc451fa27a123fd3eca7f78ed",
".git/objects/e6/31da6c0e3886d52cad4817a69691171586528c": "15b0ae3b1abdb46e8b65900e3ef99a97",
".git/objects/e7/4ed26c958a528c880c99cc082cbda500d1f213": "4dfddf7d62af00e67a1d924ed932fc6d",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b2d505b2f1dfafefc0ec502abeed339059b8db": "cea356e46cf5a87a7b396ff95139b0f8",
".git/objects/ed/518ab0d9620d356518c4b45b48308adf0e4aa5": "5cfcb173a790871f6978806a215eb35a",
".git/objects/ef/ab0c4bc5ec30dd82ca39f9d35f20baf0b28fb8": "8c9306501d777ad9d5398aba0ff90420",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/94c57c51d3c18fad230acf3fbfa15d1ad12ec7": "54a197e6be92b67143a92286660f5fce",
".git/objects/f7/ae3f4a5ba627d2b33875ced33ddbff5dbc74e8": "cf90db8a6c355b2b2eb7adf749f3c273",
".git/objects/f9/27c8c65ddfcc24e5e4b22c0d22ffa04743344f": "64cdaa946bb53c09008add256edf4b1f",
".git/refs/heads/main": "8fcf984e1f232ab49fd3777b99e6644c",
".git/refs/remotes/origin/main": "7b60ee20180c1ae7451c41bd122390eb",
"assets/AssetManifest.bin": "4c63f30c02e5f737caac5257a0fa2214",
"assets/AssetManifest.bin.json": "729ad0dd6c512a0f0dd261d6f579b60d",
"assets/AssetManifest.json": "706a3b6f470bbd881f640592b9763b8e",
"assets/assets/1.png": "b126cf7d0ba87a25712589f9bdaef85f",
"assets/FontManifest.json": "8ce06eff953e23b471c77fec9eb65d9e",
"assets/fonts/MaterialIcons-Regular.otf": "dc9cf6f835b3927105408900a2b7178b",
"assets/NOTICES": "47fe7fe16f888a46b0671163cfd0e72e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "81ae83853de07aaccbac8bde90ca5e59",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/flutter_boxicons/fonts/BoxIcons.ttf": "f5b4c7852b2cea0ec78fcbd63d6547ae",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "cc6f06db752ac09739bf9a88225a6af6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "16bec8340a985953d6b938a07b60921c",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "1264f9e259ba75091daab9f4ea903078",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3464a0beae81e47385152d207496112d",
"/": "3464a0beae81e47385152d207496112d",
"main.dart.js": "6c8d944b4fad88eb92c23f7889c589e8",
"manifest.json": "227dbcefe02aa62afec875642ca5e31f",
"version.json": "6ac4fabfcb47a21b41d24955a0e50083"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
