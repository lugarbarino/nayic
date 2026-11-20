import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Toaster } from 'sonner@2.0.3';
import svgPathsGameOver from "./imports/svg-o31d2i9gxf";
import svgPathsMenu from "./imports/svg-texovtyeyu";
import svgPathsSettings from "./imports/svg-1vwcwo84if";
import Group59 from "./imports/Group59";
import Group54 from "./imports/Group54";
import CircularTimer from "./components/CircularTimer";
import CircularTimerSlow from "./components/CircularTimerSlow";
import Loading from "./imports/Loading";
import MobileControls from "./components/MobileControls";
import MobileGameUI from "./components/MobileGameUI";
import FastForward from "./imports/FastForward";
import AjustesScreen from "./components/AjustesScreen";
import ModoScreen from "./components/ModoScreen";
import ComidaScreen from "./components/ComidaScreen";

// Snake parts - Heads (4 directions)
import imgCabezaIzquierda from "figma:asset/03dd6564ea92a4a760826a8adddae5f2cdfd9ea3.png";
import imgCabezaDerecha from "figma:asset/56480549b559fd8898506729b77be40dcaf76fb6.png";
import imgCabezaArriba from "figma:asset/0e7ec9fd14cb98cae976a6844d62313e8d7ba8bf.png";
import imgCabezaAbajo from "figma:asset/b17bd7f3b74f7911997bcc8f2a367189630c9d2d.png";

// Snake parts - Heads NEUTRAL (4 directions)
import imgCabezaArribaNeutral from "figma:asset/5a871ddf0318295824a9d8e7dfc643ff8c771041.png";
import imgCabezaAbajoNeutral from "figma:asset/a864707acba1f750759ddce31b3513376e7d0406.png";
import imgCabezaIzquierdaNeutral from "figma:asset/4e50ead5ed307603b78298e31653922abf09ff4b.png";
import imgCabezaDerechaNeutral from "figma:asset/be6560c21506473f79c4cc1c7109e17fb52e1fa6.png";

// Snake parts - Heads POR COMER (4 directions)
import imgCabezaArribaPorComer from "figma:asset/81bc347be00cd721b3a96b0eb7cb021c90a4ddba.png";
import imgCabezaAbajoPorComer from "figma:asset/2d17c83a1ea11678b048ac4ecc53d4e45074cd79.png";
import imgCabezaIzquierdaPorComer from "figma:asset/c64c0342af231fe92e602d48398629698345f5cb.png";
import imgCabezaDerechaPorComer from "figma:asset/e63f460e1e091d5ba9fa10d68af2dfe1ecffbf2d.png";

// Snake parts - Heads ACHICADAS (4 directions) - para bonus de botella
import imgCabezaArribaSmall from "figma:asset/5c2f109b17b2b640a27eb44a64b369437faf626f.png";
import imgCabezaAbajoSmall from "figma:asset/28022797fd9856a6d33005b42b40d5cdfed4f89b.png";
import imgCabezaIzquierdaSmall from "figma:asset/a46250067822347c11e31c97c58be7ad550c48cf.png";
import imgCabezaDerechaSmall from "figma:asset/ee1a1180a437d03557bbf8c18b9f11318084bbf1.png";

// Snake parts - Heads POR COMER ACHICADAS (4 directions) - para bonus de botella
import imgCabezaArribaPorComerSmall from "figma:asset/bf4de533e5336add34d644fcbc78ede1d234b357.png";
import imgCabezaAbajoPorComerSmall from "figma:asset/ee95b22166072b6353d6b4723e9878d37f592f76.png";
import imgCabezaIzquierdaPorComerSmall from "figma:asset/cf640fe3c74a3257187467690c76c31bad7b544d.png";
import imgCabezaDerechaPorComerSmall from "figma:asset/41f8a47f6adebbf96c2fa2c5341d3879b6e0758e.png";

// Snake parts - Heads ABURRIDO (4 directions)
import imgCabezaArribaAburrido from "figma:asset/cf1573a6156e77e0b242f6fb68f47a68dd89ac07.png";
import imgCabezaAbajoAburrido from "figma:asset/e55a183e9e495224171c8e3356eb6dbe2054d391.png";
import imgCabezaIzquierdaAburrido from "figma:asset/4d7c858e1ae38a4de4add23cff23b374d1b4cea4.png";
import imgCabezaDerechaAburrido from "figma:asset/46cfbda31ecd44088b95e7c3501b239ad3eec99b.png";

// Snake parts - Heads CONTENTA (4 directions)
import imgCabezaArribaContenta from "figma:asset/7b3979bd7ae52d36b49e6b419de2f6a2624be5fc.png";
import imgCabezaAbajoContenta from "figma:asset/53961da038393e8e9706356b0524ffd9d967532b.png";
import imgCabezaIzquierdaContenta from "figma:asset/64031880df3016c0e9df06a1eabc279756dabcd9.png";
import imgCabezaDerechaContenta from "figma:asset/14d591964e10515111db4c423ebbb988dda7aa2d.png";

// Snake parts - Heads PESTAÑEANDO (4 directions)
import imgCabezaArribaPestaneando from "figma:asset/59cce188ebc32ea8a63edd53ccc49dd00d923576.png";
import imgCabezaAbajoPestaneando from "figma:asset/8dfde3308b5bcd763ff5b0a18d0b32fb42930ff2.png";
import imgCabezaIzquierdaPestaneando from "figma:asset/04e1ca574f6f8a686be211a59f1a05b2c81d6286.png";
import imgCabezaDerechaPestaneando from "figma:asset/7bc525f2745332c28ff94a0ef22b81dfa2d1c224.png";

// Snake parts - Heads DAÑADO (hurt/damaged) - 4 directions
import imgCabezaArribaDanado from "figma:asset/e6bf4c59e7117ea323084cd449f634f162d6c895.png";
import imgCabezaAbajoDanado from "figma:asset/5410101c82a47c1dfa5355068f5d1da365c08f26.png";
import imgCabezaIzquierdaDanado from "figma:asset/74e4be4eb69f74fef6ad80792e6a0b35afef9395.png";
import imgCabezaDerechaDanado from "figma:asset/5dcc4450ac6377d970323984a704b6f312c96699.png";

// Snake parts - Heads NEUTRAL AGRANDADAS (para bonus de galleta)
import imgCabezaNeutralArribaLarge from "figma:asset/cf54a3bfd6f3dabfdafd8550482ad008f3b7299b.png";
import imgCabezaNeutralAbajoLarge from "figma:asset/81a3c170f0723a8b6341eeb9a9ff0d97c243bd62.png";
import imgCabezaNeutralIzquierdaLarge from "figma:asset/f24ce4ca8fae935dffad2afa11647a98c2751495.png";
import imgCabezaNeutralDerechaLarge from "figma:asset/b6524fd6ff595e331f55ada7223269b8f49a3621.png";

// Snake parts - Heads POR COMER AGRANDADAS (para bonus de galleta)
import imgCabezaPorComerArribaLarge from "figma:asset/46f46095d84c35a432f692c7cbf171a1bd254568.png";
import imgCabezaPorComerAbajoLarge from "figma:asset/1798d0c19751fb4459a7dc70e94b52c39927dcee.png";
import imgCabezaPorComerIzquierdaLarge from "figma:asset/d993b7fdd3b6bdc5e0e76aa3c0c4d40698271946.png";
import imgCabezaPorComerDerechaLarge from "figma:asset/ef5597d88ee99c4974e368e68b4799a0af2cd186.png";

// Snake parts - Segments AGRANDADOS (pattern 1 large) - para bonus de galleta
import imgPattern1VerticalLarge from "figma:asset/40c9a19a671a7bd22016669310e48a32a0dde433.png";
import imgPattern1HorizontalLarge from "figma:asset/b21e474a7e6e503824f6210fbec121de7e00b7e9.png";

// Snake parts - Corners AGRANDADOS (para bonus de galleta)
import imgCodoSuperiorIzqLarge from "figma:asset/c70cf14d8557147b8eb3caeafa0a025189cb20f7.png";
import imgCodoSuperiorDerLarge from "figma:asset/814356bc9163d2a97cc722fa5b93d56861c7f0ae.png";
import imgCodoInferiorIzqLarge from "figma:asset/8957c95cb06f4c750f7e220a86209796aeec840d.png";
import imgCodoInferiorDerLarge from "figma:asset/4334043353361dd737e838d2eec506793fb91431.png";

// Snake parts - Segments AGRANDADOS (pattern 2 large) - para bonus de galleta
import imgPattern2VerticalLarge from "figma:asset/3f7e6ce1496b9aabd387f20f70a84048f87efc12.png";
import imgPattern2HorizontalLarge from "figma:asset/0709c8d7fa941267d5fabe6e40f4f87420388d48.png";

// Snake parts - Corners AGRANDADOS (pattern 2 large) - para bonus de galleta
import imgPattern2CodoInferiorIzqLarge from "figma:asset/5c44ad043e9ae4f9672be48fc59df1a8aad7ab15.png";
import imgPattern2CodoInferiorDerLarge from "figma:asset/e117617ff6503e24da8bfc19353325669d50473e.png";
import imgPattern2CodoSuperiorIzqLarge from "figma:asset/03f1f72017788cb0d6f57038c19b920cbcf48fca.png";
import imgPattern2CodoSuperiorDerLarge from "figma:asset/0288091b1ffe079bafc9c65029f2040cf4ad3961.png";

// Snake parts - Tails AGRANDADAS (para bonus de galleta)
import imgColaArribaLarge from "figma:asset/5c593865f418647ffe2aa894f0ac5c616cf1dc1a.png";
import imgColaAbajoLarge from "figma:asset/a4c2f8d884fac471b19cf2f32d4273830b2c55ca.png";
import imgColaIzqLarge from "figma:asset/367d05f3023bf5d000bd60d3d0b41d28db1b73c1.png";
import imgColaDerLarge from "figma:asset/b6aabd159dfe4e46d1b1463ecb548a7e23dc5355.png";

// Aliases for large heads to match function naming convention
const imgCabezaArribaLarge = imgCabezaNeutralArribaLarge;
const imgCabezaAbajoLarge = imgCabezaNeutralAbajoLarge;
const imgCabezaIzquierdaLarge = imgCabezaNeutralDerechaLarge; // Swapped
const imgCabezaDerechaLarge = imgCabezaNeutralIzquierdaLarge; // Swapped
const imgCabezaArribaPorComerLarge = imgCabezaPorComerArribaLarge;
const imgCabezaAbajoPorComerLarge = imgCabezaPorComerAbajoLarge;
const imgCabezaIzquierdaPorComerLarge = imgCabezaPorComerDerechaLarge; // Swapped
const imgCabezaDerechaPorComerLarge = imgCabezaPorComerIzquierdaLarge; // Swapped

// Snake parts - Heads LENGUA (3 frames x 4 directions)
// ARRIBA
import imgCabezaArribaLengua1 from "figma:asset/e5ac54f6d40d467f46d3afab58e145a0a1be50d8.png";
import imgCabezaArribaLengua2 from "figma:asset/e4ce399d96a2e4f06b47f8de06416f4ad9660340.png";
import imgCabezaArribaLengua3 from "figma:asset/9ee4ea0cbb152732465718d2a5b8cdd00357824e.png";
// ABAJO
import imgCabezaAbajoLengua1 from "figma:asset/6d104492601b2fac619d8609f7b61aa6adc80b34.png";
import imgCabezaAbajoLengua2 from "figma:asset/b38d778d79f3ffec2f138e55f455ce411f307178.png";
import imgCabezaAbajoLengua3 from "figma:asset/6231aa1c6c8918e0146816a7acf7bc3624845cf6.png";
// IZQUIERDA
import imgCabezaIzquierdaLengua1 from "figma:asset/ebbc966eb38a09e448314efd3c53433144f52876.png";
import imgCabezaIzquierdaLengua2 from "figma:asset/bca74dce7ab8f7b4e8c472f50cca5fa85e85b2dd.png";
import imgCabezaIzquierdaLengua3 from "figma:asset/946882db295c28686f8ab73dde8a7f723f6abef3.png";
// DERECHA
import imgCabezaDerechaLengua1 from "figma:asset/4e32a4a3f8ce2d32a17a3cc32294473b15ed683d.png";
import imgCabezaDerechaLengua2 from "figma:asset/302c723a501f51993f08e35e24a9e547ff24ed92.png";
import imgCabezaDerechaLengua3 from "figma:asset/7763de1c285b130747e2ea32dd6178879113be01.png";

// Snake parts - Tails (4 directions)
import imgColaIzquierda from "figma:asset/0d909b17fc6b83e427b4e9a453e2ce8875bbb9a3.png";
import imgColaDerecha from "figma:asset/2cd1193bf888e2ad7823612effdf9287378df13a.png";
import imgColaArriba from "figma:asset/8b026faf1f81924e8fa5bf3ea3eec2982adb6054.png";
import imgColaAbajo from "figma:asset/9c8379bd9649494d86f630d00c1ca0af3cb3ea77.png";

// Snake parts - Tails ACHICADAS - para bonus de botella
import imgColaArribaSmall from "figma:asset/81f6c3e8311645a11ecd2aaa232d946e10443b7b.png";
import imgColaAbajoSmall from "figma:asset/f2297b8d5e6aa4682b1db821fa23652ee892246e.png";
import imgColaDerechaSmall from "figma:asset/da5e2d812196250fe1b3a0c7653d2c592c0031c9.png";
import imgColaIzquierdaSmall from "figma:asset/657aae2687fbc3b4852232000f1b264d81458739.png";

// Snake parts - Segments ACHICADOS (pattern 1 small) - para bonus de botella
import imgPattern1HorizontalSmall from "figma:asset/a56a0c54787d3f5a44a09ed1bb5a2319eb302f95.png";
import imgPattern1VerticalSmall from "figma:asset/1054d13001bc67c1befc027a77d34f6e3345f9bd.png";

// Snake parts - Segments ACHICADOS (pattern 2 small) - para bonus de botella
import imgPattern2HorizontalSmall from "figma:asset/68ec29eb260cf07b4d9a73c4cddb30fc41d72bab.png";
import imgPattern2VerticalSmall from "figma:asset/823bfedd85b6dc755d04093013d3b613d3e66672.png";

// Snake parts - Corners (4 types)
import imgCodoInferiorIzq from "figma:asset/27288ec07f04ab830d774922354988316c91ddd3.png";
import imgCodoInferiorDer from "figma:asset/8b1b8a6fd233be24de23b4c278cd09363da94e4c.png";
import imgCodoSuperiorDer from "figma:asset/20772407a23d8cc6526d70f0082fd53822e6f51f.png";
import imgCodoSuperiorIzq from "figma:asset/cd1850d6b46576bd2e3c3f06d3c500cf76066cbc.png";

// Snake parts - Corners ACHICADOS (pattern 1 small) - para bonus de botella
import imgCodoSuperiorDerSmall from "figma:asset/9144ce55b03e63d2037acb49dd78f8956e2446a1.png";
import imgCodoSuperiorIzqSmall from "figma:asset/5c749a4e2c6a7b83a712658fea3ed28ff34fd1da.png";
import imgCodoInferiorDerSmall from "figma:asset/18a9b61b94a7fb419a90b8537b27b7229d838229.png";
import imgCodoInferiorIzqSmall from "figma:asset/b1aef41c0e5d023031dcdf39f99c5abcc72587ec.png";

// Snake parts - Corners ACHICADOS (pattern 2 small) - para bonus de botella
import imgPattern2CodoInferiorIzqSmall from "figma:asset/9dd0f46e034da99953acba44d218805ce37e527f.png";
import imgPattern2CodoInferiorDerSmall from "figma:asset/3f4a3e2d5059b787045149d29f0bd403d81587ac.png";
import imgPattern2CodoSuperiorIzqSmall from "figma:asset/532cb65a67b042b6428a569e25e3e3a573ea7115.png";
import imgPattern2CodoSuperiorDerSmall from "figma:asset/49ed5ae4219948a5a4b78d2b1c220c0e259c0290.png";

// Body patterns - Pattern 1
import imgPattern1Gema from "figma:asset/9e87a5bf90ebc0e921a5619c6a8b62d1bd51afc4.png";
import imgPattern1Horizontal from "figma:asset/c980c997fb45098816d7b975e6c5ee008b3c63ef.png";
import imgPattern1Vertical from "figma:asset/85a2a7811f8ef42f769a3d06e2f55f0f60872c2f.png";

// Body patterns - Pattern 2
import imgPattern2Gema from "figma:asset/b1d7f16723670940432e26716a2eaef5d38e5e77.png";
import imgPattern2Horizontal from "figma:asset/fdcfa01a7d071425529531120931fcc8f53010a8.png";
import imgPattern2Vertical from "figma:asset/a0adf5d835502aace490677a3eebd8e885d7dc8a.png";
import imgPattern2CodoSuperiorDer from "figma:asset/47ec823d7c244405cbd543f63ee5e41f29c533a5.png";
import imgPattern2CodoSuperiorIzq from "figma:asset/0937f129b573c94f9b10290d656d7957c1105698.png";
import imgPattern2CodoInferiorIzq from "figma:asset/4c7a20a8f0b3d6e77ad3554f5b64140a4376a267.png";
import imgPattern2CodoInferiorDer from "figma:asset/d7fc128700598410e8c395943999d00efcba12b7.png";

// Body patterns - Pattern 3
import imgPattern3Gema from "figma:asset/03da8c1ff48ea98110168be625467c65b7667767.png";
import imgPattern3Horizontal from "figma:asset/392c2c96adfe34dd6872f277016ff52b3e2dfee9.png";
import imgPattern3Vertical from "figma:asset/ac862f4b49a611dee2710f4b11194d6605a41334.png";
import imgPattern3CodoSuperiorDer from "figma:asset/15eae88157a9223c3092e7a082f932ace92f948c.png";
import imgPattern3CodoSuperiorIzq from "figma:asset/31a68fe6b23b43f1c7223729556475149ecb72a1.png";
import imgPattern3CodoInferiorIzq from "figma:asset/92668fde80e67dce1a6c6950cf7ad8862a11c697.png";
import imgPattern3CodoInferiorDer from "figma:asset/ae25120010d1d39dfb4a2e166b5d01147e0b4a6c.png";

// Body patterns - Pattern 3 ACHICADO (bottle effect)
import imgPattern3VerticalSmall from "figma:asset/f4459c9ee768281c9f961a63cf7ed7a03e451136.png";
import imgPattern3HorizontalSmall from "figma:asset/d51667dfcf09d2edca92b22b46852ede00c1c7e2.png";
import imgPattern3CodoSuperiorIzqSmall from "figma:asset/8785438ca2cd6c1ce5733dfecc9ef7c8d4b3248d.png";
import imgPattern3CodoSuperiorDerSmall from "figma:asset/cca05bbbdb9fb038bb7af9b6c272fb21df6c7cce.png";
import imgPattern3CodoInferiorIzqSmall from "figma:asset/0de5d8a2139528bbb823ee99ba595c451aa4c1cd.png";
import imgPattern3CodoInferiorDerSmall from "figma:asset/a823b69bf7e43e4adc1620f73df5f32a4ba67397.png";

// Body patterns - Pattern 3 AGRANDADO (cookie effect)
import imgPattern3VerticalLarge from "figma:asset/f17258a2baa394892c1a4d4bdc53d864b39dd56c.png";
import imgPattern3HorizontalLarge from "figma:asset/3a1c3af405b9718020c5afab4b43870661461fc2.png";
import imgPattern3CodoSuperiorIzqLarge from "figma:asset/5e67e59b780995bc1dd5f1d0f7eebf3c7c760f67.png";
import imgPattern3CodoSuperiorDerLarge from "figma:asset/cdd098a355023145725f7205019c8e835af17be0.png";
import imgPattern3CodoInferiorIzqLarge from "figma:asset/3f66fabab3a1260c3641c8e572b4be79c888a311.png";
import imgPattern3CodoInferiorDerLarge from "figma:asset/2eb79286944582a61fde2092543f1b18987ed0af.png";

// Body patterns - Pattern 4
import imgPattern4Gema from "figma:asset/f4603a8296b29b12b721384168b75d0f1df47bdb.png";
import imgPattern4Horizontal from "figma:asset/28b84623abd4f98dcd9165a52e2bf53367429056.png";
import imgPattern4Vertical from "figma:asset/a1602d80d0b798ce64417d96592968aa3b0ee3c4.png";
import imgPattern4CodoSuperiorIzq from "figma:asset/09ae06bac5a0be269479a1ac1e0c50e1dc4b09f2.png";
import imgPattern4CodoSuperiorDer from "figma:asset/da7f603a32d3aca35dec0cd2d2807feacc55f133.png";
import imgPattern4CodoInferiorIzq from "figma:asset/8b1c5a6cd049b4eee459faf6b27a2bb62f986245.png";
import imgPattern4CodoInferiorDer from "figma:asset/9bd664ac5a2d92e9f48c3e23c4ad6edd9f9084f8.png";

// Body patterns - Pattern 4 ACHICADO (bottle effect)
import imgPattern4VerticalSmall from "figma:asset/c578e89a6d3dd9e14cc5a51ef48bdb1ee5e37960.png";
import imgPattern4HorizontalSmall from "figma:asset/bb1712ae4fb13985368f50cc69be508ebca9e178.png";
import imgPattern4CodoSuperiorIzqSmall from "figma:asset/3bcbdaa2e118ee8a757839b05194e527d0f1b06a.png";
import imgPattern4CodoSuperiorDerSmall from "figma:asset/6fdc36ca6151d0a1c775d3816d38236f59d96332.png";
import imgPattern4CodoInferiorIzqSmall from "figma:asset/4039e7c6bcdd283ddda52e406694522cda592b4c.png";
import imgPattern4CodoInferiorDerSmall from "figma:asset/28647d19c1f4c3e413710a2bda9a401cab794579.png";

// Body patterns - Pattern 4 AGRANDADO (cookie effect)
import imgPattern4VerticalLarge from "figma:asset/ce837c48fa3be3c620e196919675f92384e1b49d.png";
import imgPattern4HorizontalLarge from "figma:asset/a83a44104bce76f2cec7ab237035dc8022c29062.png";
import imgPattern4CodoSuperiorIzqLarge from "figma:asset/1824661e402f0fd4a413be17ff5e78669e0f45d1.png";
import imgPattern4CodoSuperiorDerLarge from "figma:asset/5ff7c952d45ecd67d55755e8b1aec007b1e44c8f.png";
import imgPattern4CodoInferiorIzqLarge from "figma:asset/13912172798f386e42a9c837607145edcb943457.png";
import imgPattern4CodoInferiorDerLarge from "figma:asset/56339f2fbf23ea2e540d45e6532e48eb046a5831.png";

// Body patterns - Pattern 5
import imgPattern5Gema from "figma:asset/6914bccf04c265b3ebfe98cd91ef7ecc724568ed.png";
import imgPattern5Horizontal from "figma:asset/05a7fa473d04e75203445c8e4982047c24562ad6.png";
import imgPattern5Vertical from "figma:asset/acc56ea2f6a6d71fef3850ef111b443c41d4bf78.png";
import imgPattern5CodoSuperiorDer from "figma:asset/357bf5b0d0384cfa2a991df9391edba5ad5cb6a8.png";
import imgPattern5CodoSuperiorIzq from "figma:asset/3ed27ccbbc4d2165a885120a39d492f7debdf6d3.png";
import imgPattern5CodoInferiorIzq from "figma:asset/50450b5d6a13fe00f2ad691ac4ed7468af210be9.png";
import imgPattern5CodoInferiorDer from "figma:asset/164634bb28fdf59610e6b5f1131ddc2c3a9109e5.png";

// Body patterns - Pattern 5 ACHICADO (bottle effect)
import imgPattern5VerticalSmall from "figma:asset/f90146e745c0e4d951fc5a20f9e19c83be897ac3.png";
import imgPattern5HorizontalSmall from "figma:asset/08b3484cc165c1aa00289ee1a0f56b6758568de2.png";
import imgPattern5CodoSuperiorIzqSmall from "figma:asset/2b950286f31f3ad7007ad949a221b8d2c6866624.png";
import imgPattern5CodoSuperiorDerSmall from "figma:asset/bc1319df8a52032daa6207e369c0add3917438ac.png";
import imgPattern5CodoInferiorIzqSmall from "figma:asset/83eba66a4e78c1328b186cdc232354812128fdd7.png";
import imgPattern5CodoInferiorDerSmall from "figma:asset/2be3c32bfaf1d4770c6179e2529e57d8a615d1f3.png";

// Body patterns - Pattern 5 AGRANDADO (cookie effect)
import imgPattern5VerticalLarge from "figma:asset/e86b5a18ef45df1ecb4e5b20551f5260a29bd0b9.png";
import imgPattern5HorizontalLarge from "figma:asset/81d69c6e575d9df0e2570daf7f326843c3f34066.png";
import imgPattern5CodoSuperiorIzqLarge from "figma:asset/df10f896acf0b51b483a12b4a5e591fe49b65066.png";
import imgPattern5CodoSuperiorDerLarge from "figma:asset/a1df1f775c53022ac20c6ed81674505290e257c3.png";
import imgPattern5CodoInferiorIzqLarge from "figma:asset/b64609e0522b45430feed68473744bdda0615aa7.png";
import imgPattern5CodoInferiorDerLarge from "figma:asset/ffefee866a17fd364e3b70b2c377ff44b7689d71.png";

// Body patterns - Pattern 6
import imgPattern6Gema from "figma:asset/429ee6d13507f6a3138f7444a71e14a1ac6324e7.png";
import imgPattern6Horizontal from "figma:asset/7f55448415cb3fcf9ebf5cfaf486a210268bd387.png";
import imgPattern6Vertical from "figma:asset/d1191f7f4bcc8638253e8fc408a354a480eb2f92.png";
import imgPattern6CodoSuperiorIzq from "figma:asset/a7faf661b6794b3ad6bb14715a15628c2f078d4d.png";
import imgPattern6CodoSuperiorDer from "figma:asset/325de1125bcef1744600d9fa635f27a13d6ea474.png";
import imgPattern6CodoInferiorIzq from "figma:asset/b39003a7a5bbea9a0ef92963fddc5ad38eefbd81.png";
import imgPattern6CodoInferiorDer from "figma:asset/f67d0785f68cd7493b41de91a269c6987544f42b.png";

// Body patterns - Pattern 6 ACHICADO (bottle effect)
import imgPattern6VerticalSmall from "figma:asset/216b9cc2abb1d43650e8af03042fbcbce1393fba.png";
import imgPattern6HorizontalSmall from "figma:asset/ce071c7707fec6d497e22071d0383ce1e3cf5efc.png";
import imgPattern6CodoSuperiorIzqSmall from "figma:asset/fb6c27d9d47bd58a8183e310bdb691dd305f02a7.png";
import imgPattern6CodoSuperiorDerSmall from "figma:asset/83c3029bbfc969b77f225e0ae54bc645d2c02de5.png";
import imgPattern6CodoInferiorIzqSmall from "figma:asset/d380c0933f208e356ed54a3093f325664a76e7ff.png";
import imgPattern6CodoInferiorDerSmall from "figma:asset/bf331db07f281423b131502f9c3b7cc1b0189028.png";

// Body patterns - Pattern 6 AGRANDADO (cookie effect)
import imgPattern6VerticalLarge from "figma:asset/50a5ef51e86d86d710fdb2d4c1081f96d2cee77f.png";
import imgPattern6HorizontalLarge from "figma:asset/a96902888d0385fd6c166f3e656984765ff4bd43.png";
import imgPattern6CodoSuperiorIzqLarge from "figma:asset/bc67184eb16e55bc94d79232208dbeb54de1d13e.png";
import imgPattern6CodoSuperiorDerLarge from "figma:asset/a89af8878ee28fc69383a2ce6754f260361485e1.png";
import imgPattern6CodoInferiorIzqLarge from "figma:asset/053992891f66ab4c841837baf45eb199bfe4cdf5.png";
import imgPattern6CodoInferiorDerLarge from "figma:asset/614d16fdb5d5f660a2b67ac8b531fcacf78d9f8b.png";

// Body patterns - Pattern 7
import imgPattern7Gema from "figma:asset/4b872ad673836604177340da77baa150c631fbcc.png";
import imgPattern7Horizontal from "figma:asset/863778db8ffe0fefc6ca7f34502c5e34f54aa5ad.png";
import imgPattern7Vertical from "figma:asset/ad265a3ac436080c0df8bcc0b12e99f0c7428d4c.png";
import imgPattern7CodoSuperiorIzq from "figma:asset/a2df48539aa6caf32b3c65c9f0fc5cb15c23bca3.png";
import imgPattern7CodoSuperiorDer from "figma:asset/28c5d1656c4356e4fad12a814d42e71e4acd73ee.png";
import imgPattern7CodoInferiorIzq from "figma:asset/4fbb13de7e1468cc370622ee1193a341b4a038c9.png";
import imgPattern7CodoInferiorDer from "figma:asset/c067b177c8c5897ef102384d8e97a8ffcff85675.png";
import imgPattern7VerticalSmall from "figma:asset/42507bdfd6905a9a16631dc3ff96a76b473e4761.png";
import imgPattern7HorizontalSmall from "figma:asset/1523564c640d65abfbbce3eea36d823ffb6ef489.png";
import imgPattern7CodoSuperiorIzqSmall from "figma:asset/1d002f4c0ed14e972ac2a83736427aff20357820.png";
import imgPattern7CodoSuperiorDerSmall from "figma:asset/28a42c199e50bb0ef64793bc788dd190461b62d4.png";
import imgPattern7CodoInferiorIzqSmall from "figma:asset/c05e62b205c7b51bf5f13b0beae95d6d0e4129eb.png";
import imgPattern7CodoInferiorDerSmall from "figma:asset/f04e8d7160fe1b73712d82faa49355dbeabbe8c2.png";

// Body patterns - Pattern 7 AGRANDADO (cookie effect)
import imgPattern7VerticalLarge from "figma:asset/d5dc4c662de5f4dfa9e553b9032319d1f0a77d77.png";
import imgPattern7HorizontalLarge from "figma:asset/ddfb896f663a717c19e314625fbe54071c685bf4.png";
import imgPattern7CodoSuperiorIzqLarge from "figma:asset/4991c07f9577495fddce554c8fe79720dedfb2cd.png";
import imgPattern7CodoSuperiorDerLarge from "figma:asset/910645fe5a0187c4c524cf079a284ebb73587217.png";
import imgPattern7CodoInferiorIzqLarge from "figma:asset/9e00364d557e12c69067d70d941d6de9076e2d30.png";
import imgPattern7CodoInferiorDerLarge from "figma:asset/ef34ba3296cb7726deb3f14100a0c9345a9ee57c.png";

// Body patterns - Pattern 8
import imgPattern8Gema from "figma:asset/2c34e9ab4dc9e80b02bfcf5f3bcd985b40141a29.png";
import imgPattern8Horizontal from "figma:asset/b4e6073676466d4e215c803dfd6e27440cd0b14c.png";
import imgPattern8Vertical from "figma:asset/b17673bcf951e4939649f76a2f995c5e3dcb4205.png";
import imgPattern8CodoSuperiorIzq from "figma:asset/fe429dc4ff009a7625da37e056610a9e5fb6b9ff.png";
import imgPattern8CodoSuperiorDer from "figma:asset/6c39451962dc5bca9882ab904109e3b8e69a46a6.png";
import imgPattern8CodoInferiorIzq from "figma:asset/06371f022b8ae1c07f9894cff4dece7e6d1412fa.png";
import imgPattern8CodoInferiorDer from "figma:asset/69a4e101c017d0f5034ccc1462914c28432e8ba1.png";
import imgPattern8VerticalSmall from "figma:asset/4274b1a4d0e6d9ac5595323cb906f10a77bfd044.png";
import imgPattern8HorizontalSmall from "figma:asset/6d5d68c327f84213871e48b74d23fa635e52a763.png";
import imgPattern8CodoSuperiorIzqSmall from "figma:asset/584c3b9bf2908344e5685a935753756f7f5ae9b2.png";
import imgPattern8CodoSuperiorDerSmall from "figma:asset/dee8f92427745876586938bc77602ac5143db3ae.png";
import imgPattern8CodoInferiorIzqSmall from "figma:asset/070bf381da490cea8d3b4294b260e05a66ed5f22.png";
import imgPattern8CodoInferiorDerSmall from "figma:asset/28b88252028a1f9095e8cf12a40ebdfc9a985c07.png";

// Body patterns - Pattern 8 AGRANDADO (cookie effect)
import imgPattern8VerticalLarge from "figma:asset/a06915baf69115836bc59f3a46ce2d3a688512d2.png";
import imgPattern8HorizontalLarge from "figma:asset/feff702561f00759ce2687a21501817e88810041.png";
import imgPattern8CodoSuperiorIzqLarge from "figma:asset/45ff13ed086eeb6d0f443fe3ffa96352caa7884f.png";
import imgPattern8CodoSuperiorDerLarge from "figma:asset/8a5ad7398a5c983613f54ad7e9ca5f14f19606e0.png";
import imgPattern8CodoInferiorIzqLarge from "figma:asset/0590e6c5029eb41bb3044bcd76a9abb7d3259bdf.png";
import imgPattern8CodoInferiorDerLarge from "figma:asset/fdab7f535f9d56b5af35777c00db148cbb8e72a0.png";

// Body patterns - Pattern 9
import imgPattern9Gema from "figma:asset/52fd77866b58aaca49b4e29d52e87cb5ad9a4990.png";
import imgPattern9Horizontal from "figma:asset/2152ce401e32869dc133b9f9e91288d2907b6737.png";
import imgPattern9Vertical from "figma:asset/38e725cc606109f427727a50b93b6add75307a07.png";
import imgPattern9CodoSuperiorIzq from "figma:asset/b9f66e760fa823680248488df1db147114748ffa.png";
import imgPattern9CodoSuperiorDer from "figma:asset/7d4a0b02ee35a54bd2de1f3572503f250d1e98e8.png";
import imgPattern9VerticalSmall from "figma:asset/8c54b10a95f653b4eccd63869f5be95a5da97051.png";
import imgPattern9HorizontalSmall from "figma:asset/1178d31842fad79f4bca0b2e1e7f4667dc97486f.png";
import imgPattern9CodoSuperiorIzqSmall from "figma:asset/ebe0ef54dadb0720a1adf587c4d1668a9e1637de.png";
import imgPattern9CodoSuperiorDerSmall from "figma:asset/0e93d25cf95225746fa6436ac42f5dc4c211c71a.png";
import imgPattern9CodoInferiorIzqSmall from "figma:asset/dc27dba977fd140ce0de2a84b8827158996541e2.png";
import imgPattern9CodoInferiorDerSmall from "figma:asset/142e7c4ce6ab9129ad6edd3302b811ef6245c86d.png";
import imgPattern9CodoInferiorIzq from "figma:asset/03232b145cf78429f02e1b31290208facec7e6b5.png";
import imgPattern9CodoInferiorDer from "figma:asset/fa3c8206a04082ae39dec6f190503285b317e31e.png";

// Body patterns - Pattern 9 AGRANDADO (cookie effect)
import imgPattern9VerticalLarge from "figma:asset/8cad2da0218a440f3aaa3da87e4605c4ca37adc1.png";
import imgPattern9HorizontalLarge from "figma:asset/ea3bd73dd8074e41d7316c7107e191c5b45c9739.png";
import imgPattern9CodoSuperiorIzqLarge from "figma:asset/63a3d6abe12767d741ecc64c8f99ee79c68251c9.png";
import imgPattern9CodoSuperiorDerLarge from "figma:asset/aa0ab1c1f89712fc06b518e951eb621ed730d898.png";
import imgPattern9CodoInferiorIzqLarge from "figma:asset/49fae1c858e7f4dca5a19b51928b9906105aae5a.png";
import imgPattern9CodoInferiorDerLarge from "figma:asset/d7bd2322540c55f3661d6dfa714a90d32d501581.png";

// Body patterns - Pattern 10
import imgPattern10Gema from "figma:asset/8381b8ed749b7e7980d316315e47097af0b58e69.png";
import imgPattern10Horizontal from "figma:asset/6099c9da517667d03851acb164572f3827f0105b.png";
import imgPattern10Vertical from "figma:asset/f1b1c902bfac452e7b65e2da414c55dfa706d289.png";
import imgPattern10CodoSuperiorIzq from "figma:asset/98668808f86894c9a77c8aab23a5af19abbf5d59.png";
import imgPattern10CodoSuperiorDer from "figma:asset/c7b3f55feed3713dbfe92c1c7a602ec7bf2a606e.png";
import imgPattern10CodoInferiorIzq from "figma:asset/5913c9b1068ebe9c120f8bebd3e8b31b25ae230b.png";
import imgPattern10CodoInferiorDer from "figma:asset/3f82e0844867453501047006d044d99915f0c172.png";
import imgPattern10VerticalSmall from "figma:asset/6706358dcf66ce0b65627480f3ce6b7acb77068d.png";
import imgPattern10HorizontalSmall from "figma:asset/b7807b280fee1da6661d249831571c161b18d2f8.png";
import imgPattern10CodoSuperiorIzqSmall from "figma:asset/21332b6f42a41a96984921925a02691967a545c9.png";
import imgPattern10CodoSuperiorDerSmall from "figma:asset/3d59dae8b8a7432cd1fa572d8a29071cb35230e6.png";
import imgPattern10CodoInferiorIzqSmall from "figma:asset/c8b2a1c01ee685e80062eac835eb6334714a7ec7.png";
import imgPattern10CodoInferiorDerSmall from "figma:asset/e71f7d81dd9b143e3d3e0f5bb77a1f3732c9912e.png";

// Body patterns - Pattern 10 AGRANDADO (cookie effect)
import imgPattern10VerticalLarge from "figma:asset/211436c8c1d5c3f5ff2e42512b7178efcd13ca78.png";
import imgPattern10HorizontalLarge from "figma:asset/c448b03bdcdea524d86af129ff0ac6c8d68ff7a6.png";
import imgPattern10CodoSuperiorIzqLarge from "figma:asset/ab65f8abb1c18869c15ff0f69671f581063f8db3.png";
import imgPattern10CodoSuperiorDerLarge from "figma:asset/f76c0492adbce844873b6decf047268ff49e55ab.png";
import imgPattern10CodoInferiorIzqLarge from "figma:asset/56e7b25c175ef5fb11e788b07f5961813f6571ad.png";
import imgPattern10CodoInferiorDerLarge from "figma:asset/cfdc7251fa15e496add6118f704dee669a0ac7c7.png";

// Body patterns - Pattern 11
import imgPattern11Gema from "figma:asset/cb81bea39db51eeefd5ed621b0978f928f2420e6.png";
import imgPattern11Horizontal from "figma:asset/56bfdee8d5b31776b5ac18ecd6915c5b23154c5b.png";
import imgPattern11Vertical from "figma:asset/d50468391af0426b15bb71e793814b80eefebcdc.png";
import imgPattern11CodoSuperiorIzq from "figma:asset/9c6f3b61001d7e2bf06c83fcdd112e409d0591a8.png";
import imgPattern11CodoSuperiorDer from "figma:asset/f997405d0a5b688437f0e1fb0ae9577917a6a6b8.png";
import imgPattern11CodoInferiorIzq from "figma:asset/69b463f9c0bcac101eb7d128ae21031d3c32a8e6.png";
import imgPattern11CodoInferiorDer from "figma:asset/76f9124d98246e50e80c304b62a54a9b5f040953.png";
import imgPattern11VerticalSmall from "figma:asset/0c276cd9d7c580f5d09e1cb519ca1c0ad8729e63.png";
import imgPattern11HorizontalSmall from "figma:asset/5f79594508bf675a8d03689084de73679f454106.png";
import imgPattern11CodoSuperiorIzqSmall from "figma:asset/3f8501ed81f3bf43695628886dfa1cb6349b575b.png";
import imgPattern11CodoSuperiorDerSmall from "figma:asset/d3d21b7699bb51eede347f1e75e0a1bdfd085c28.png";
import imgPattern11CodoInferiorIzqSmall from "figma:asset/e38e34576d8a907a3a885dae40a4d5e30559d5bb.png";
import imgPattern11CodoInferiorDerSmall from "figma:asset/899a8237ba48fb534975a0297e62ee10c0b5d52d.png";

// Body patterns - Pattern 11 AGRANDADO (cookie effect)
import imgPattern11VerticalLarge from "figma:asset/36f9e05bb6df341ab9fc5ffa2ed0e623a0804eb0.png";
import imgPattern11HorizontalLarge from "figma:asset/fc0da95dc9e6b8c4d615190481337aae60731bf6.png";
import imgPattern11CodoSuperiorIzqLarge from "figma:asset/21ac69a828e4e4d132026e1df8f1cf303ac15ce8.png";
import imgPattern11CodoSuperiorDerLarge from "figma:asset/a4144e93ea84ac0bcd67ae4462acd72a15c53ee8.png";

// Body patterns - Pattern 11 AGRANDADO (cookie effect)
import imgPattern11VerticalLarge from "figma:asset/36f9e05bb6df341ab9fc5ffa2ed0e623a0804eb0.png";
import imgPattern11HorizontalLarge from "figma:asset/fc0da95dc9e6b8c4d615190481337aae60731bf6.png";
import imgPattern11CodoSuperiorIzqLarge from "figma:asset/21ac69a828e4e4d132026e1df8f1cf303ac15ce8.png";
import imgPattern11CodoSuperiorDerLarge from "figma:asset/a4144e93ea84ac0bcd67ae4462acd72a15c53ee8.png";
import imgPattern11CodoInferiorIzqLarge from "figma:asset/9054735cb4808caf01994679251aa0a57f96aa76.png";
import imgPattern11CodoInferiorDerLarge from "figma:asset/13a9c9a96f480cb24c126ebfb423103880b2fb29.png";

// Body patterns - Pattern 12
import imgPattern12Gema from "figma:asset/60d34d01324935f84f455d4bf8f7c7bedc94c69f.png";
import imgPattern12Horizontal from "figma:asset/bd60640cb0873fc519d31342bda6a1913a5729bc.png";
import imgPattern12Vertical from "figma:asset/cba733a1cd954fdc2c8194d85e43a55a2eaab79d.png";
import imgPattern12CodoSuperiorIzq from "figma:asset/f22829f4a3b442511ea193bd8a75f675107d5af7.png";
import imgPattern12CodoSuperiorDer from "figma:asset/a617cccc73381d17e97d42bcc130b063905c62f4.png";
import imgPattern12CodoInferiorIzq from "figma:asset/cb3d60c553d42508e2e4e336c13ff903a4310e7c.png";
import imgPattern12CodoInferiorDer from "figma:asset/f2a08d27943a0cf116422a2af2c6ee895dfea5af.png";
import imgPattern12VerticalSmall from "figma:asset/632c6f36c65e81bda5b90e8b5952c37ac94249b3.png";
import imgPattern12HorizontalSmall from "figma:asset/4510442656a65c6ce4c935eadd56406d7de1e541.png";
import imgPattern12CodoSuperiorIzqSmall from "figma:asset/d7c7be3f489b2ee0746cb3f81aebbc1680c2bd7e.png";
import imgPattern12CodoSuperiorDerSmall from "figma:asset/b36fd2f469f52a6571324633525fa526679020f6.png";
import imgPattern12CodoInferiorIzqSmall from "figma:asset/6d78b42daf236196a76b5e5c3b8cc212cb7db443.png";
import imgPattern12CodoInferiorDerSmall from "figma:asset/d0b79634485957facffa798a20dac2300911727e.png";

// Body patterns - Pattern 12 AGRANDADO (cookie effect)
import imgPattern12VerticalLarge from "figma:asset/9145584ff38f417e35e9fdd5f09e41682e703868.png";
import imgPattern12HorizontalLarge from "figma:asset/c0a24c785cd1d3ed911e9955cf692b86500c0dea.png";
import imgPattern12CodoSuperiorIzqLarge from "figma:asset/458600e8e8af82b9460a2dbde4c6b64277926545.png";
import imgPattern12CodoSuperiorDerLarge from "figma:asset/413816aa156a849f0ca7355c4f09d5e364090922.png";
import imgPattern12CodoInferiorIzqLarge from "figma:asset/7e45ab696b6265bf7b879838c57b6c781b87ba93.png";
import imgPattern12CodoInferiorDerLarge from "figma:asset/98af9794e908c8ae835921d88bfb0c36b59450a3.png";

// Body patterns - Pattern 13 (gema única de 1000 puntos)
import imgPattern13Gema from "figma:asset/8272cfff58dbdd2216e7c0e73f312f801a062fdc.png";
import imgPattern13Horizontal from "figma:asset/77d398c037b249b8cfb26972fa21bd49250042da.png";
import imgPattern13Vertical from "figma:asset/03e466114e68af2da0f7a414221922dd6b70f776.png";
import imgPattern13CodoSuperiorIzq from "figma:asset/2b830ecded3fdc41cba3aa3beb8bf04ec9d890c2.png";
import imgPattern13CodoSuperiorDer from "figma:asset/ba93efd6d20aad5e8bdf9bdfbb6abba30d74c0db.png";
import imgPattern13CodoInferiorIzq from "figma:asset/cfae7031f5c84268778e774a8f39f899009203ad.png";
import imgPattern13CodoInferiorDer from "figma:asset/bd67ec35547e8cf1fbee206e15df96a8bcf1a42c.png";
import imgPattern13VerticalSmall from "figma:asset/936da9935921161969e4722479f404186b5c8513.png";
import imgPattern13HorizontalSmall from "figma:asset/5c592ac89288ed92587c82a0f3e23db01f6d4d45.png";
import imgPattern13CodoSuperiorIzqSmall from "figma:asset/9cca28e3c617bf232d39ae62d348531f7b37c130.png";
import imgPattern13CodoSuperiorDerSmall from "figma:asset/3da8050ae9ada5c2aa7f2b722a2b8d67d2a9c0f5.png";
import imgPattern13CodoInferiorIzqSmall from "figma:asset/dbc0cfa4ebb5d43eee9531f6184275034a32abb9.png";
import imgPattern13CodoInferiorDerSmall from "figma:asset/e4d8c40a632b67fc08fee466e02e6c167dcaeabe.png";

// Body patterns - Pattern 13 AGRANDADO (cookie effect)
import imgPattern13VerticalLarge from "figma:asset/b442153beaf73a00e3e681604bc46e30503f1745.png";
import imgPattern13HorizontalLarge from "figma:asset/ab70bb2ed75980b13585dcc4378846448f9887d9.png";
import imgPattern13CodoSuperiorIzqLarge from "figma:asset/ab87c48f1089d99ff19bb4860662793fd96fe234.png";
import imgPattern13CodoSuperiorDerLarge from "figma:asset/357d81774b086ff011241d36c715708b2c92b2b8.png";
import imgPattern13CodoInferiorIzqLarge from "figma:asset/c633c6245d392f5b7519a3a5e1fc016829519f06.png";
import imgPattern13CodoInferiorDerLarge from "figma:asset/a9e8ac5a7a2518cb9f7327bb29a0fc0085602c2f.png";

// Modal imports
import imgVida from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";
import imgEstrella from "figma:asset/ae1be33e0a50de08d261571ccc6089c61fecb800.png";
import imgLogoVibora from "figma:asset/97a0d6f3d3836e0146eb5c78ea93c62980267449.png";
import imgExplosivo from "figma:asset/e517bcc721bebcf17a0cf246ae7e16760231af9d.png";
import imgBrillos from "figma:asset/14255001134d2258fe60fd054c0841ac4bda8edc.png";
import imgReloj from "figma:asset/dffbdab3531d239ea02e1d2a651fa61484f0cfde.png";
import imgBotella from "figma:asset/73a4514b8698fbcfda336cfcef7d087af1f452d0.png";
import imgGalleta from "figma:asset/bb9e302d7e1871d9a11c6d80688aabc4a9966410.png";
import imgSerpienteGameOver from "figma:asset/bbbc3f023a3575a7513d42af028de10cae05fa05.png";
import imgCactus from "figma:asset/fe38f3b1b0fc196aacc2870cda3359b693751ecb.png";
import imgHole from "figma:asset/0dfcfc3e93b6d38fd8503fb89c8c0c8cfb34333b.png";

// Array of all images to preload
const ALL_IMAGES_TO_PRELOAD = [
  // Heads
  imgCabezaIzquierda, imgCabezaDerecha, imgCabezaArriba, imgCabezaAbajo,
  imgCabezaArribaNeutral, imgCabezaAbajoNeutral, imgCabezaIzquierdaNeutral, imgCabezaDerechaNeutral,
  imgCabezaArribaPorComer, imgCabezaAbajoPorComer, imgCabezaIzquierdaPorComer, imgCabezaDerechaPorComer,
  imgCabezaArribaAburrido, imgCabezaAbajoAburrido, imgCabezaIzquierdaAburrido, imgCabezaDerechaAburrido,
  imgCabezaArribaContenta, imgCabezaAbajoContenta, imgCabezaIzquierdaContenta, imgCabezaDerechaContenta,
  imgCabezaArribaPestaneando, imgCabezaAbajoPestaneando, imgCabezaIzquierdaPestaneando, imgCabezaDerechaPestaneando,
  imgCabezaArribaLengua1, imgCabezaArribaLengua2, imgCabezaArribaLengua3,
  imgCabezaAbajoLengua1, imgCabezaAbajoLengua2, imgCabezaAbajoLengua3,
  imgCabezaIzquierdaLengua1, imgCabezaIzquierdaLengua2, imgCabezaIzquierdaLengua3,
  imgCabezaDerechaLengua1, imgCabezaDerechaLengua2, imgCabezaDerechaLengua3,
  // Heads Small (bottle effect)
  imgCabezaArribaSmall, imgCabezaAbajoSmall, imgCabezaIzquierdaSmall, imgCabezaDerechaSmall,
  imgCabezaArribaPorComerSmall, imgCabezaAbajoPorComerSmall, imgCabezaIzquierdaPorComerSmall, imgCabezaDerechaPorComerSmall,
  // Heads Large (cookie effect)
  imgCabezaNeutralArribaLarge, imgCabezaNeutralAbajoLarge, imgCabezaNeutralIzquierdaLarge, imgCabezaNeutralDerechaLarge,
  imgCabezaPorComerArribaLarge, imgCabezaPorComerAbajoLarge, imgCabezaPorComerIzquierdaLarge, imgCabezaPorComerDerechaLarge,
  // Tails
  imgColaIzquierda, imgColaDerecha, imgColaArriba, imgColaAbajo,
  // Tails Small (bottle effect)
  imgColaArribaSmall, imgColaAbajoSmall, imgColaDerechaSmall, imgColaIzquierdaSmall,
  // Tails Large (cookie effect)
  imgColaArribaLarge, imgColaAbajoLarge, imgColaDerLarge, imgColaIzqLarge,
  // Corners
  imgCodoInferiorIzq, imgCodoInferiorDer, imgCodoSuperiorDer, imgCodoSuperiorIzq,
  // Corners Small (bottle effect - pattern 1)
  imgCodoSuperiorDerSmall, imgCodoSuperiorIzqSmall, imgCodoInferiorDerSmall, imgCodoInferiorIzqSmall,
  // Corners Large (cookie effect - pattern 1)
  imgCodoSuperiorDerLarge, imgCodoSuperiorIzqLarge, imgCodoInferiorDerLarge, imgCodoInferiorIzqLarge,
  // Pattern 1
  imgPattern1Gema, imgPattern1Horizontal, imgPattern1Vertical,
  // Pattern 1 Small (bottle effect)
  imgPattern1HorizontalSmall, imgPattern1VerticalSmall,
  // Pattern 2 Small (bottle effect)
  imgPattern2HorizontalSmall, imgPattern2VerticalSmall,
  imgPattern2CodoInferiorIzqSmall, imgPattern2CodoInferiorDerSmall,
  imgPattern2CodoSuperiorIzqSmall, imgPattern2CodoSuperiorDerSmall,
  // Pattern 3 Small (bottle effect)
  imgPattern3HorizontalSmall, imgPattern3VerticalSmall,
  imgPattern3CodoSuperiorIzqSmall, imgPattern3CodoSuperiorDerSmall,
  imgPattern3CodoInferiorIzqSmall, imgPattern3CodoInferiorDerSmall,
  // Pattern 4 Small (bottle effect)
  imgPattern4HorizontalSmall, imgPattern4VerticalSmall,
  imgPattern4CodoSuperiorIzqSmall, imgPattern4CodoSuperiorDerSmall,
  imgPattern4CodoInferiorIzqSmall, imgPattern4CodoInferiorDerSmall,
  // Pattern 1 Large (cookie effect)
  imgPattern1HorizontalLarge, imgPattern1VerticalLarge,
  // Pattern 2 Large (cookie effect)
  imgPattern2HorizontalLarge, imgPattern2VerticalLarge,
  imgPattern2CodoInferiorIzqLarge, imgPattern2CodoInferiorDerLarge,
  imgPattern2CodoSuperiorIzqLarge, imgPattern2CodoSuperiorDerLarge,
  // Pattern 3 Large (cookie effect)
  imgPattern3HorizontalLarge, imgPattern3VerticalLarge,
  imgPattern3CodoSuperiorIzqLarge, imgPattern3CodoSuperiorDerLarge,
  imgPattern3CodoInferiorIzqLarge, imgPattern3CodoInferiorDerLarge,
  // Pattern 4 Large (cookie effect)
  imgPattern4HorizontalLarge, imgPattern4VerticalLarge,
  imgPattern4CodoSuperiorIzqLarge, imgPattern4CodoSuperiorDerLarge,
  imgPattern4CodoInferiorIzqLarge, imgPattern4CodoInferiorDerLarge,
  // Pattern 5 Large (cookie effect)
  imgPattern5HorizontalLarge, imgPattern5VerticalLarge,
  imgPattern5CodoSuperiorIzqLarge, imgPattern5CodoSuperiorDerLarge,
  imgPattern5CodoInferiorIzqLarge, imgPattern5CodoInferiorDerLarge,
  // Pattern 6 Large (cookie effect)
  imgPattern6HorizontalLarge, imgPattern6VerticalLarge,
  imgPattern6CodoSuperiorIzqLarge, imgPattern6CodoSuperiorDerLarge,
  imgPattern6CodoInferiorIzqLarge, imgPattern6CodoInferiorDerLarge,
  // Pattern 7 Large (cookie effect)
  imgPattern7HorizontalLarge, imgPattern7VerticalLarge,
  imgPattern7CodoSuperiorIzqLarge, imgPattern7CodoSuperiorDerLarge,
  imgPattern7CodoInferiorIzqLarge, imgPattern7CodoInferiorDerLarge,
  // Pattern 8 Large (cookie effect)
  imgPattern8HorizontalLarge, imgPattern8VerticalLarge,
  imgPattern8CodoSuperiorIzqLarge, imgPattern8CodoSuperiorDerLarge,
  imgPattern8CodoInferiorIzqLarge, imgPattern8CodoInferiorDerLarge,
  // Pattern 9 Large (cookie effect)
  imgPattern9HorizontalLarge, imgPattern9VerticalLarge,
  imgPattern9CodoSuperiorIzqLarge, imgPattern9CodoSuperiorDerLarge,
  imgPattern9CodoInferiorIzqLarge, imgPattern9CodoInferiorDerLarge,
  // Pattern 10 Large (cookie effect)
  imgPattern10HorizontalLarge, imgPattern10VerticalLarge,
  imgPattern10CodoSuperiorIzqLarge, imgPattern10CodoSuperiorDerLarge,
  imgPattern10CodoInferiorIzqLarge, imgPattern10CodoInferiorDerLarge,
  // Pattern 11 Large (cookie effect)
  imgPattern11HorizontalLarge, imgPattern11VerticalLarge,
  imgPattern11CodoSuperiorIzqLarge, imgPattern11CodoSuperiorDerLarge,
  imgPattern11CodoInferiorIzqLarge, imgPattern11CodoInferiorDerLarge,
  // Pattern 12 Large (cookie effect)
  imgPattern12HorizontalLarge, imgPattern12VerticalLarge,
  imgPattern12CodoSuperiorIzqLarge, imgPattern12CodoSuperiorDerLarge,
  imgPattern12CodoInferiorIzqLarge, imgPattern12CodoInferiorDerLarge,
  // Pattern 2
  imgPattern2Gema, imgPattern2Horizontal, imgPattern2Vertical,
  imgPattern2CodoSuperiorDer, imgPattern2CodoSuperiorIzq, imgPattern2CodoInferiorIzq, imgPattern2CodoInferiorDer,
  // Pattern 3
  imgPattern3Gema, imgPattern3Horizontal, imgPattern3Vertical,
  imgPattern3CodoSuperiorDer, imgPattern3CodoSuperiorIzq, imgPattern3CodoInferiorIzq, imgPattern3CodoInferiorDer,
  // Pattern 4
  imgPattern4Gema, imgPattern4Horizontal, imgPattern4Vertical,
  imgPattern4CodoSuperiorIzq, imgPattern4CodoSuperiorDer, imgPattern4CodoInferiorIzq, imgPattern4CodoInferiorDer,
  // Pattern 5
  imgPattern5Gema, imgPattern5Horizontal, imgPattern5Vertical,
  imgPattern5CodoSuperiorDer, imgPattern5CodoSuperiorIzq, imgPattern5CodoInferiorIzq, imgPattern5CodoInferiorDer,
  // Pattern 5 Small (bottle effect)
  imgPattern5HorizontalSmall, imgPattern5VerticalSmall,
  imgPattern5CodoSuperiorIzqSmall, imgPattern5CodoSuperiorDerSmall,
  imgPattern5CodoInferiorIzqSmall, imgPattern5CodoInferiorDerSmall,
  // Pattern 6
  imgPattern6Gema, imgPattern6Horizontal, imgPattern6Vertical,
  imgPattern6CodoSuperiorIzq, imgPattern6CodoSuperiorDer, imgPattern6CodoInferiorIzq, imgPattern6CodoInferiorDer,
  // Pattern 6 Small (bottle effect)
  imgPattern6HorizontalSmall, imgPattern6VerticalSmall,
  imgPattern6CodoSuperiorIzqSmall, imgPattern6CodoSuperiorDerSmall,
  imgPattern6CodoInferiorIzqSmall, imgPattern6CodoInferiorDerSmall,
  // Pattern 7
  imgPattern7Gema, imgPattern7Horizontal, imgPattern7Vertical,
  imgPattern7CodoSuperiorIzq, imgPattern7CodoSuperiorDer, imgPattern7CodoInferiorIzq, imgPattern7CodoInferiorDer,
  // Pattern 7 Small (bottle effect)
  imgPattern7HorizontalSmall, imgPattern7VerticalSmall,
  imgPattern7CodoSuperiorIzqSmall, imgPattern7CodoSuperiorDerSmall,
  imgPattern7CodoInferiorIzqSmall, imgPattern7CodoInferiorDerSmall,
  // Pattern 8
  imgPattern8Gema, imgPattern8Horizontal, imgPattern8Vertical,
  imgPattern8CodoSuperiorIzq, imgPattern8CodoSuperiorDer, imgPattern8CodoInferiorIzq, imgPattern8CodoInferiorDer,
  // Pattern 8 Small (bottle effect)
  imgPattern8HorizontalSmall, imgPattern8VerticalSmall,
  imgPattern8CodoSuperiorIzqSmall, imgPattern8CodoSuperiorDerSmall,
  imgPattern8CodoInferiorIzqSmall, imgPattern8CodoInferiorDerSmall,
  // Pattern 9
  imgPattern9Gema, imgPattern9Horizontal, imgPattern9Vertical,
  imgPattern9CodoSuperiorIzq, imgPattern9CodoSuperiorDer, imgPattern9CodoInferiorIzq, imgPattern9CodoInferiorDer,
  // Pattern 9 Small (bottle effect)
  imgPattern9HorizontalSmall, imgPattern9VerticalSmall,
  imgPattern9CodoSuperiorIzqSmall, imgPattern9CodoSuperiorDerSmall,
  imgPattern9CodoInferiorIzqSmall, imgPattern9CodoInferiorDerSmall,
  // Pattern 10
  imgPattern10Gema, imgPattern10Horizontal, imgPattern10Vertical,
  imgPattern10CodoSuperiorIzq, imgPattern10CodoSuperiorDer, imgPattern10CodoInferiorIzq, imgPattern10CodoInferiorDer,
  // Pattern 10 Small (bottle effect)
  imgPattern10HorizontalSmall, imgPattern10VerticalSmall,
  imgPattern10CodoSuperiorIzqSmall, imgPattern10CodoSuperiorDerSmall,
  imgPattern10CodoInferiorIzqSmall, imgPattern10CodoInferiorDerSmall,
  // Pattern 11
  imgPattern11Gema, imgPattern11Horizontal, imgPattern11Vertical,
  imgPattern11CodoSuperiorIzq, imgPattern11CodoSuperiorDer, imgPattern11CodoInferiorIzq, imgPattern11CodoInferiorDer,
  // Pattern 11 Small (bottle effect)
  imgPattern11HorizontalSmall, imgPattern11VerticalSmall,
  imgPattern11CodoSuperiorIzqSmall, imgPattern11CodoSuperiorDerSmall,
  imgPattern11CodoInferiorIzqSmall, imgPattern11CodoInferiorDerSmall,
  // Pattern 12
  imgPattern12Gema, imgPattern12Horizontal, imgPattern12Vertical,
  imgPattern12CodoSuperiorIzq, imgPattern12CodoSuperiorDer, imgPattern12CodoInferiorIzq, imgPattern12CodoInferiorDer,
  // Pattern 12 Small (bottle effect)
  imgPattern12HorizontalSmall, imgPattern12VerticalSmall,
  imgPattern12CodoSuperiorIzqSmall, imgPattern12CodoSuperiorDerSmall,
  imgPattern12CodoInferiorIzqSmall, imgPattern12CodoInferiorDerSmall,
  // Pattern 13 (gema única de 1000 puntos)
  imgPattern13Gema, imgPattern13Horizontal, imgPattern13Vertical,
  imgPattern13CodoSuperiorIzq, imgPattern13CodoSuperiorDer, imgPattern13CodoInferiorIzq, imgPattern13CodoInferiorDer,
  // Pattern 13 Small (bottle effect)
  imgPattern13HorizontalSmall, imgPattern13VerticalSmall,
  imgPattern13CodoSuperiorIzqSmall, imgPattern13CodoSuperiorDerSmall,
  imgPattern13CodoInferiorIzqSmall, imgPattern13CodoInferiorDerSmall,
  // Pattern 13 Large (cookie effect)
  imgPattern13HorizontalLarge, imgPattern13VerticalLarge,
  imgPattern13CodoSuperiorIzqLarge, imgPattern13CodoSuperiorDerLarge,
  imgPattern13CodoInferiorIzqLarge, imgPattern13CodoInferiorDerLarge,
  // Bonuses
  imgVida, imgEstrella, imgLogoVibora, imgExplosivo, imgBrillos, imgReloj, imgBotella, imgGalleta,
  // Game Over Modal
  imgSerpienteGameOver,
  // Obstacles
  imgCactus,
  imgHole
];

interface Position {
  x: number;
  y: number;
}

// Helper function to check if two positions are close enough (for decimal positions)
function positionsMatch(pos1: Position, pos2: Position, tolerance: number = 0.3): boolean {
  return Math.abs(pos1.x - pos2.x) < tolerance && Math.abs(pos1.y - pos2.y) < tolerance;
}

interface SnakeSegment {
  position: Position;
  pattern: string; // Pattern image for this segment
}

interface Food {
  position: Position;
  type: string;
  points: number;
  pattern: string; // Pattern serves as both gem image and body segment pattern
}

interface LifeBonus {
  position: Position;
}

interface StarBonus {
  position: Position;
}

interface BombBonus {
  position: Position;
}

interface ClockBonus {
  position: Position;
}

interface BottleBonus {
  position: Position;
}

interface CookieBonus {
  position: Position;
}

interface Cactus {
  position: Position;
}

interface Hole {
  position: Position;
}

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Expression = 'neutral' | 'porComer' | 'aburrido' | 'contenta' | 'pestaneando' | 'danado';
type GameMode = 'normal' | 'rapido' | 'timer';

const INITIAL_SPEED = 400; // ms between moves - Velocidad inicial moderada
const FAST_SPEED = 200; // ms between moves - Velocidad rápida para modo rápido
const MIN_SPEED = 100; // Velocidad máxima (más rápido)
const TOP_OFFSET = 0; // Sin offset - la serpiente usa todo el viewport
const MOBILE_TOP_OFFSET = 0; // Sin offset en mobile - usa todo el viewport

// Helper function to detect touch-capable devices
function isTouchDevice(): boolean {
  return (
    ('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    // @ts-ignore - For older browsers
    (navigator.msMaxTouchPoints > 0)
  );
}

// Responsive breakpoints
function getGameWidth(): number {
  return window.innerWidth; // Usa todo el ancho del viewport (punta a punta)
}

function getCellSize(gameWidth: number): number {
  // Si es un dispositivo táctil, usar tamaño fijo de 45px
  if (isTouchDevice()) {
    return 45;
  }
  
  // Desktop/laptop (sin touch)
  if (gameWidth >= 1600) {
    return 75; // Desktop - reducido 25% (de 100 a 75)
  } else if (gameWidth >= 1200) {
    return 68; // Tablet horizontal - reducido 24% (de 90 a 68)
  } else if (gameWidth >= 900) {
    return 60; // Tablet vertical - reducido 25% (de 80 a 60)
  } else {
    return 60; // Mobile - aumentado a 60px
  }
}

function getPlayableHeight(): number {
  // Usar toda la altura del viewport en todos los dispositivos
  return window.innerHeight;
}

function getGemSize(gameWidth: number): number {
  let size: number;
  
  if (gameWidth >= 1600) {
    size = 72; // Desktop: 72px (reducido 28% del original)
  } else if (gameWidth >= 1200) {
    size = 65; // Tablet horizontal: 65px (reducido 28% del original)
  } else if (gameWidth >= 900) {
    size = 62; // Tablet vertical: 62px (reducido 28% del original)
  } else {
    size = 61; // Mobile: 61px - ajustado para coincidir con cellSize de 60px
  }
  
  // Si es un dispositivo táctil, reducir 10% adicional
  if (isTouchDevice()) {
    size = size * 0.9;
  }
  
  return size;
}

// Food type definitions with 13 patterns
const FOOD_TYPES = [
  { type: 'pattern1', points: 100, pattern: imgPattern1Gema },
  { type: 'pattern2', points: 150, pattern: imgPattern2Gema },
  { type: 'pattern3', points: 200, pattern: imgPattern3Gema },
  { type: 'pattern4', points: 250, pattern: imgPattern4Gema },
  { type: 'pattern5', points: 100, pattern: imgPattern5Gema },
  { type: 'pattern6', points: 150, pattern: imgPattern6Gema },
  { type: 'pattern7', points: 200, pattern: imgPattern7Gema },
  { type: 'pattern8', points: 250, pattern: imgPattern8Gema },
  { type: 'pattern9', points: 300, pattern: imgPattern9Gema },
  { type: 'pattern10', points: 100, pattern: imgPattern10Gema },
  { type: 'pattern11', points: 150, pattern: imgPattern11Gema },
  { type: 'pattern12', points: 200, pattern: imgPattern12Gema },
  { type: 'pattern13', points: 1000, pattern: imgPattern13Gema }
];

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Pattern mappings for horizontal orientation (from gem pattern to horizontal)
const patternImagesHorizontal: { [key: string]: string } = {
  [imgPattern1Gema]: imgPattern1Horizontal,
  [imgPattern2Gema]: imgPattern2Horizontal,
  [imgPattern3Gema]: imgPattern3Horizontal,
  [imgPattern4Gema]: imgPattern4Horizontal,
  [imgPattern5Gema]: imgPattern5Horizontal,
  [imgPattern6Gema]: imgPattern6Horizontal,
  [imgPattern7Gema]: imgPattern7Horizontal,
  [imgPattern8Gema]: imgPattern8Horizontal,
  [imgPattern9Gema]: imgPattern9Horizontal,
  [imgPattern10Gema]: imgPattern10Horizontal,
  [imgPattern11Gema]: imgPattern11Horizontal,
  [imgPattern12Gema]: imgPattern12Horizontal,
  [imgPattern13Gema]: imgPattern13Horizontal
};

// Pattern mappings for vertical orientation (from gem pattern to vertical)
const patternImagesVertical: { [key: string]: string } = {
  [imgPattern1Gema]: imgPattern1Vertical,
  [imgPattern2Gema]: imgPattern2Vertical,
  [imgPattern3Gema]: imgPattern3Vertical,
  [imgPattern4Gema]: imgPattern4Vertical,
  [imgPattern5Gema]: imgPattern5Vertical,
  [imgPattern6Gema]: imgPattern6Vertical,
  [imgPattern7Gema]: imgPattern7Vertical,
  [imgPattern8Gema]: imgPattern8Vertical,
  [imgPattern9Gema]: imgPattern9Vertical,
  [imgPattern10Gema]: imgPattern10Vertical,
  [imgPattern11Gema]: imgPattern11Vertical,
  [imgPattern12Gema]: imgPattern12Vertical,
  [imgPattern13Gema]: imgPattern13Vertical
};

// Pattern mappings for corners (from gem pattern to corner images)
const patternCorners: { [key: string]: { topLeft: string, topRight: string, bottomLeft: string, bottomRight: string } } = {
  [imgPattern1Gema]: {
    topLeft: imgCodoSuperiorIzq,
    topRight: imgCodoSuperiorDer,
    bottomLeft: imgCodoInferiorIzq,
    bottomRight: imgCodoInferiorDer
  },
  [imgPattern2Gema]: {
    topLeft: imgPattern2CodoSuperiorDer,
    topRight: imgPattern2CodoSuperiorIzq,
    bottomLeft: imgPattern2CodoInferiorIzq,
    bottomRight: imgPattern2CodoInferiorDer
  },
  [imgPattern3Gema]: {
    topLeft: imgPattern3CodoSuperiorDer,
    topRight: imgPattern3CodoSuperiorIzq,
    bottomLeft: imgPattern3CodoInferiorIzq,
    bottomRight: imgPattern3CodoInferiorDer
  },
  [imgPattern4Gema]: {
    topLeft: imgPattern4CodoSuperiorIzq,
    topRight: imgPattern4CodoSuperiorDer,
    bottomLeft: imgPattern4CodoInferiorDer,
    bottomRight: imgPattern4CodoInferiorIzq
  },
  [imgPattern5Gema]: {
    topLeft: imgPattern5CodoSuperiorDer,
    topRight: imgPattern5CodoSuperiorIzq,
    bottomLeft: imgPattern5CodoInferiorDer,
    bottomRight: imgPattern5CodoInferiorIzq
  },
  [imgPattern6Gema]: {
    topLeft: imgPattern6CodoSuperiorIzq,
    topRight: imgPattern6CodoSuperiorDer,
    bottomLeft: imgPattern6CodoInferiorIzq,
    bottomRight: imgPattern6CodoInferiorDer
  },
  [imgPattern7Gema]: {
    topLeft: imgPattern7CodoSuperiorIzq,
    topRight: imgPattern7CodoSuperiorDer,
    bottomLeft: imgPattern7CodoInferiorIzq,
    bottomRight: imgPattern7CodoInferiorDer
  },
  [imgPattern8Gema]: {
    topLeft: imgPattern8CodoSuperiorIzq,
    topRight: imgPattern8CodoSuperiorDer,
    bottomLeft: imgPattern8CodoInferiorIzq,
    bottomRight: imgPattern8CodoInferiorDer
  },
  [imgPattern9Gema]: {
    topLeft: imgPattern9CodoSuperiorIzq,
    topRight: imgPattern9CodoSuperiorDer,
    bottomLeft: imgPattern9CodoInferiorIzq,
    bottomRight: imgPattern9CodoInferiorDer
  },
  [imgPattern10Gema]: {
    topLeft: imgPattern10CodoSuperiorIzq,
    topRight: imgPattern10CodoSuperiorDer,
    bottomLeft: imgPattern10CodoInferiorIzq,
    bottomRight: imgPattern10CodoInferiorDer
  },
  [imgPattern11Gema]: {
    topLeft: imgPattern11CodoSuperiorIzq,
    topRight: imgPattern11CodoSuperiorDer,
    bottomLeft: imgPattern11CodoInferiorIzq,
    bottomRight: imgPattern11CodoInferiorDer
  },
  [imgPattern12Gema]: {
    topLeft: imgPattern12CodoSuperiorIzq,
    topRight: imgPattern12CodoSuperiorDer,
    bottomLeft: imgPattern12CodoInferiorIzq,
    bottomRight: imgPattern12CodoInferiorDer
  },
  [imgPattern13Gema]: {
    topLeft: imgPattern13CodoSuperiorIzq,
    topRight: imgPattern13CodoSuperiorDer,
    bottomLeft: imgPattern13CodoInferiorIzq,
    bottomRight: imgPattern13CodoInferiorDer
  }
};

// Unified pattern configuration with all sizes (mini, normal, large)
type PatternSize = 'mini' | 'normal' | 'large';

interface PatternImages {
  horizontal?: { mini?: string; normal?: string; large?: string };
  vertical?: { mini?: string; normal?: string; large?: string };
  corners?: {
    mini?: { topLeft: string; topRight: string; bottomLeft: string; bottomRight: string };
    normal?: { topLeft: string; topRight: string; bottomLeft: string; bottomRight: string };
    large?: { topLeft: string; topRight: string; bottomLeft: string; bottomRight: string };
  };
}

const unifiedPatternConfigs: { [pattern: string]: PatternImages } = {
  'pattern1': {
    horizontal: {
      mini: imgPattern1HorizontalSmall,
      normal: imgPattern1Horizontal,
      large: imgPattern1HorizontalLarge
    },
    vertical: {
      mini: imgPattern1VerticalSmall,
      normal: imgPattern1Vertical,
      large: imgPattern1VerticalLarge
    },
    corners: {
      mini: {
        topLeft: imgCodoSuperiorIzqSmall,
        topRight: imgCodoSuperiorDerSmall,
        bottomLeft: imgCodoInferiorDerSmall,
        bottomRight: imgCodoInferiorIzqSmall
      },
      normal: {
        topLeft: imgCodoSuperiorIzq,
        topRight: imgCodoSuperiorDer,
        bottomLeft: imgCodoInferiorIzq,
        bottomRight: imgCodoInferiorDer
      },
      large: {
        topLeft: imgCodoSuperiorIzqLarge,
        topRight: imgCodoSuperiorDerLarge,
        bottomLeft: imgCodoInferiorIzqLarge,
        bottomRight: imgCodoInferiorDerLarge
      }
    }
  },
  'pattern2': {
    horizontal: { mini: imgPattern2HorizontalSmall, normal: imgPattern2Horizontal, large: imgPattern2HorizontalLarge },
    vertical: { mini: imgPattern2VerticalSmall, normal: imgPattern2Vertical, large: imgPattern2VerticalLarge },
    corners: {
      mini: {
        topLeft: imgPattern2CodoSuperiorIzqSmall,
        topRight: imgPattern2CodoSuperiorDerSmall,
        bottomLeft: imgPattern2CodoInferiorIzqSmall,
        bottomRight: imgPattern2CodoInferiorDerSmall
      },
      normal: {
        topLeft: imgPattern2CodoSuperiorDer,
        topRight: imgPattern2CodoSuperiorIzq,
        bottomLeft: imgPattern2CodoInferiorIzq,
        bottomRight: imgPattern2CodoInferiorDer
      },
      large: {
        topLeft: imgPattern2CodoSuperiorIzqLarge,
        topRight: imgPattern2CodoSuperiorDerLarge,
        bottomLeft: imgPattern2CodoInferiorIzqLarge,
        bottomRight: imgPattern2CodoInferiorDerLarge
      }
    }
  },
  'pattern3': {
    horizontal: { mini: imgPattern3HorizontalSmall, normal: imgPattern3Horizontal, large: imgPattern3HorizontalLarge },
    vertical: { mini: imgPattern3VerticalSmall, normal: imgPattern3Vertical, large: imgPattern3VerticalLarge },
    corners: {
      mini: {
        topLeft: imgPattern3CodoSuperiorIzqSmall,
        topRight: imgPattern3CodoSuperiorDerSmall,
        bottomLeft: imgPattern3CodoInferiorIzqSmall,
        bottomRight: imgPattern3CodoInferiorDerSmall
      },
      normal: {
        topLeft: imgPattern3CodoSuperiorDer,
        topRight: imgPattern3CodoSuperiorIzq,
        bottomLeft: imgPattern3CodoInferiorIzq,
        bottomRight: imgPattern3CodoInferiorDer
      },
      large: {
        topLeft: imgPattern3CodoSuperiorIzqLarge,
        topRight: imgPattern3CodoSuperiorDerLarge,
        bottomLeft: imgPattern3CodoInferiorIzqLarge,
        bottomRight: imgPattern3CodoInferiorDerLarge
      }
    }
  },
  'pattern4': {
    horizontal: { mini: imgPattern4HorizontalSmall, normal: imgPattern4Horizontal, large: imgPattern4HorizontalLarge },
    vertical: { mini: imgPattern4VerticalSmall, normal: imgPattern4Vertical, large: imgPattern4VerticalLarge },
    corners: {
      mini: {
        topLeft: imgPattern4CodoSuperiorIzqSmall,
        topRight: imgPattern4CodoSuperiorDerSmall,
        bottomLeft: imgPattern4CodoInferiorIzqSmall,
        bottomRight: imgPattern4CodoInferiorDerSmall
      },
      normal: {
        topLeft: imgPattern4CodoSuperiorIzq,
        topRight: imgPattern4CodoSuperiorDer,
        bottomLeft: imgPattern4CodoInferiorDer,
        bottomRight: imgPattern4CodoInferiorIzq
      },
      large: {
        topLeft: imgPattern4CodoSuperiorIzqLarge,
        topRight: imgPattern4CodoSuperiorDerLarge,
        bottomLeft: imgPattern4CodoInferiorIzqLarge,
        bottomRight: imgPattern4CodoInferiorDerLarge
      }
    }
  },
  'pattern5': {
    horizontal: { mini: imgPattern5HorizontalSmall, normal: imgPattern5Horizontal, large: imgPattern5HorizontalLarge },
    vertical: { mini: imgPattern5VerticalSmall, normal: imgPattern5Vertical, large: imgPattern5VerticalLarge },
    corners: {
      mini: {
        topLeft: imgPattern5CodoSuperiorIzqSmall,
        topRight: imgPattern5CodoSuperiorDerSmall,
        bottomLeft: imgPattern5CodoInferiorIzqSmall,
        bottomRight: imgPattern5CodoInferiorDerSmall
      },
      normal: {
        topLeft: imgPattern5CodoSuperiorDer,
        topRight: imgPattern5CodoSuperiorIzq,
        bottomLeft: imgPattern5CodoInferiorDer,
        bottomRight: imgPattern5CodoInferiorIzq
      },
      large: {
        topLeft: imgPattern5CodoSuperiorDerLarge,
        topRight: imgPattern5CodoSuperiorIzqLarge,
        bottomLeft: imgPattern5CodoInferiorIzqLarge,
        bottomRight: imgPattern5CodoInferiorDerLarge
      }
    }
  },
  'pattern6': {
    horizontal: { mini: imgPattern6HorizontalSmall, normal: imgPattern6Horizontal, large: imgPattern6HorizontalLarge },
    vertical: { mini: imgPattern6VerticalSmall, normal: imgPattern6Vertical, large: imgPattern6VerticalLarge },
    corners: {
      mini: {
        topLeft: imgPattern6CodoSuperiorIzqSmall,
        topRight: imgPattern6CodoSuperiorDerSmall,
        bottomLeft: imgPattern6CodoInferiorIzqSmall,
        bottomRight: imgPattern6CodoInferiorDerSmall
      },
      normal: {
        topLeft: imgPattern6CodoSuperiorIzq,
        topRight: imgPattern6CodoSuperiorDer,
        bottomLeft: imgPattern6CodoInferiorIzq,
        bottomRight: imgPattern6CodoInferiorDer
      },
      large: {
        topLeft: imgPattern6CodoSuperiorIzqLarge,
        topRight: imgPattern6CodoSuperiorDerLarge,
        bottomLeft: imgPattern6CodoInferiorIzqLarge,
        bottomRight: imgPattern6CodoInferiorDerLarge
      }
    }
  },
  'pattern7': {
    horizontal: { mini: imgPattern7HorizontalSmall, normal: imgPattern7Horizontal, large: imgPattern7HorizontalLarge },
    vertical: { mini: imgPattern7VerticalSmall, normal: imgPattern7Vertical, large: imgPattern7VerticalLarge },
    corners: {
      mini: {
        topLeft: imgPattern7CodoSuperiorIzqSmall,
        topRight: imgPattern7CodoSuperiorDerSmall,
        bottomLeft: imgPattern7CodoInferiorIzqSmall,
        bottomRight: imgPattern7CodoInferiorDerSmall
      },
      normal: {
        topLeft: imgPattern7CodoSuperiorIzq,
        topRight: imgPattern7CodoSuperiorDer,
        bottomLeft: imgPattern7CodoInferiorIzq,
        bottomRight: imgPattern7CodoInferiorDer
      },
      large: {
        topLeft: imgPattern7CodoSuperiorIzqLarge,
        topRight: imgPattern7CodoSuperiorDerLarge,
        bottomLeft: imgPattern7CodoInferiorIzqLarge,
        bottomRight: imgPattern7CodoInferiorDerLarge
      }
    }
  },
  'pattern8': {
    horizontal: { mini: imgPattern8HorizontalSmall, normal: imgPattern8Horizontal, large: imgPattern8HorizontalLarge },
    vertical: { mini: imgPattern8VerticalSmall, normal: imgPattern8Vertical, large: imgPattern8VerticalLarge },
    corners: {
      mini: {
        topLeft: imgPattern8CodoSuperiorIzqSmall,
        topRight: imgPattern8CodoSuperiorDerSmall,
        bottomLeft: imgPattern8CodoInferiorIzqSmall,
        bottomRight: imgPattern8CodoInferiorDerSmall
      },
      normal: {
        topLeft: imgPattern8CodoSuperiorIzq,
        topRight: imgPattern8CodoSuperiorDer,
        bottomLeft: imgPattern8CodoInferiorIzq,
        bottomRight: imgPattern8CodoInferiorDer
      },
      large: {
        topLeft: imgPattern8CodoSuperiorIzqLarge,
        topRight: imgPattern8CodoSuperiorDerLarge,
        bottomLeft: imgPattern8CodoInferiorIzqLarge,
        bottomRight: imgPattern8CodoInferiorDerLarge
      }
    }
  },
  'pattern9': {
    horizontal: { mini: imgPattern9HorizontalSmall, normal: imgPattern9Horizontal, large: imgPattern9HorizontalLarge },
    vertical: { mini: imgPattern9VerticalSmall, normal: imgPattern9Vertical, large: imgPattern9VerticalLarge },
    corners: {
      mini: {
        topLeft: imgPattern9CodoSuperiorIzqSmall,
        topRight: imgPattern9CodoSuperiorDerSmall,
        bottomLeft: imgPattern9CodoInferiorIzqSmall,
        bottomRight: imgPattern9CodoInferiorDerSmall
      },
      normal: {
        topLeft: imgPattern9CodoSuperiorIzq,
        topRight: imgPattern9CodoSuperiorDer,
        bottomLeft: imgPattern9CodoInferiorIzq,
        bottomRight: imgPattern9CodoInferiorDer
      },
      large: {
        topLeft: imgPattern9CodoSuperiorIzqLarge,
        topRight: imgPattern9CodoSuperiorDerLarge,
        bottomLeft: imgPattern9CodoInferiorIzqLarge,
        bottomRight: imgPattern9CodoInferiorDerLarge
      }
    }
  },
  'pattern10': {
    horizontal: { mini: imgPattern10HorizontalSmall, normal: imgPattern10Horizontal, large: imgPattern10HorizontalLarge },
    vertical: { mini: imgPattern10VerticalSmall, normal: imgPattern10Vertical, large: imgPattern10VerticalLarge },
    corners: {
      mini: {
        topLeft: imgPattern10CodoSuperiorIzqSmall,
        topRight: imgPattern10CodoSuperiorDerSmall,
        bottomLeft: imgPattern10CodoInferiorIzqSmall,
        bottomRight: imgPattern10CodoInferiorDerSmall
      },
      normal: {
        topLeft: imgPattern10CodoSuperiorIzq,
        topRight: imgPattern10CodoSuperiorDer,
        bottomLeft: imgPattern10CodoInferiorIzq,
        bottomRight: imgPattern10CodoInferiorDer
      },
      large: {
        topLeft: imgPattern10CodoSuperiorIzqLarge,
        topRight: imgPattern10CodoSuperiorDerLarge,
        bottomLeft: imgPattern10CodoInferiorIzqLarge,
        bottomRight: imgPattern10CodoInferiorDerLarge
      }
    }
  },
  'pattern11': {
    horizontal: { mini: imgPattern11HorizontalSmall, normal: imgPattern11Horizontal, large: imgPattern11HorizontalLarge },
    vertical: { mini: imgPattern11VerticalSmall, normal: imgPattern11Vertical, large: imgPattern11VerticalLarge },
    corners: {
      mini: {
        topLeft: imgPattern11CodoSuperiorIzqSmall,
        topRight: imgPattern11CodoSuperiorDerSmall,
        bottomLeft: imgPattern11CodoInferiorIzqSmall,
        bottomRight: imgPattern11CodoInferiorDerSmall
      },
      normal: {
        topLeft: imgPattern11CodoSuperiorIzq,
        topRight: imgPattern11CodoSuperiorDer,
        bottomLeft: imgPattern11CodoInferiorIzq,
        bottomRight: imgPattern11CodoInferiorDer
      },
      large: {
        topLeft: imgPattern11CodoSuperiorIzqLarge,
        topRight: imgPattern11CodoSuperiorDerLarge,
        bottomLeft: imgPattern11CodoInferiorIzqLarge,
        bottomRight: imgPattern11CodoInferiorDerLarge
      }
    }
  },
  'pattern12': {
    horizontal: { mini: imgPattern12HorizontalSmall, normal: imgPattern12Horizontal, large: imgPattern12HorizontalLarge },
    vertical: { mini: imgPattern12VerticalSmall, normal: imgPattern12Vertical, large: imgPattern12VerticalLarge },
    corners: {
      mini: {
        topLeft: imgPattern12CodoSuperiorIzqSmall,
        topRight: imgPattern12CodoSuperiorDerSmall,
        bottomLeft: imgPattern12CodoInferiorIzqSmall,
        bottomRight: imgPattern12CodoInferiorDerSmall
      },
      normal: {
        topLeft: imgPattern12CodoSuperiorIzq,
        topRight: imgPattern12CodoSuperiorDer,
        bottomLeft: imgPattern12CodoInferiorIzq,
        bottomRight: imgPattern12CodoInferiorDer
      },
      large: {
        topLeft: imgPattern12CodoSuperiorIzqLarge,
        topRight: imgPattern12CodoSuperiorDerLarge,
        bottomLeft: imgPattern12CodoInferiorIzqLarge,
        bottomRight: imgPattern12CodoInferiorDerLarge
      }
    }
  },
  'pattern13': {
    horizontal: { mini: imgPattern13HorizontalSmall, normal: imgPattern13Horizontal, large: imgPattern13HorizontalLarge },
    vertical: { mini: imgPattern13VerticalSmall, normal: imgPattern13Vertical, large: imgPattern13VerticalLarge },
    corners: {
      mini: {
        topLeft: imgPattern13CodoSuperiorIzqSmall,
        topRight: imgPattern13CodoSuperiorDerSmall,
        bottomLeft: imgPattern13CodoInferiorIzqSmall,
        bottomRight: imgPattern13CodoInferiorDerSmall
      },
      normal: {
        topLeft: imgPattern13CodoSuperiorIzq,
        topRight: imgPattern13CodoSuperiorDer,
        bottomLeft: imgPattern13CodoInferiorIzq,
        bottomRight: imgPattern13CodoInferiorDer
      },
      large: {
        topLeft: imgPattern13CodoSuperiorIzqLarge,
        topRight: imgPattern13CodoSuperiorDerLarge,
        bottomLeft: imgPattern13CodoInferiorIzqLarge,
        bottomRight: imgPattern13CodoInferiorDerLarge
      }
    }
  }
};

// Unified helper to get pattern/corner by size
function getPatternImageBySize(pattern: string, size: PatternSize, isHorizontal: boolean): string {
  const config = unifiedPatternConfigs[pattern] || unifiedPatternConfigs['pattern1'];
  const fallback = unifiedPatternConfigs['pattern1'];
  const orientation = isHorizontal ? 'horizontal' : 'vertical';
  
  // Try to get the pattern for the requested size
  const patternImage = config?.[orientation]?.[size];
  if (patternImage) return patternImage;
  
  // Fallback to pattern1 for the same size, then normal
  return fallback[orientation]?.[size] || fallback[orientation]?.normal || imgPattern1Horizontal;
}

function getCornerImageBySize(
  prev: Position,
  current: Position,
  next: Position,
  gridCols: number,
  gridRows: number,
  pattern: string,
  size: PatternSize
): string {
  const fromDir = getDirectionBetween(prev, current, gridCols, gridRows);
  const toDir = getDirectionBetween(current, next, gridCols, gridRows);
  
  // Get corners for the requested size
  const config = unifiedPatternConfigs[pattern] || unifiedPatternConfigs['pattern1'];
  const fallback = unifiedPatternConfigs['pattern1'];
  
  const corners = config?.corners?.[size] || fallback.corners?.[size] || fallback.corners?.normal!;
  
  // Mapeo de direcciones
  if (fromDir === 'DOWN' && toDir === 'LEFT') return corners.bottomRight;
  if (fromDir === 'UP' && toDir === 'LEFT') return corners.topRight;
  if (fromDir === 'DOWN' && toDir === 'RIGHT') return corners.bottomLeft;
  if (fromDir === 'UP' && toDir === 'RIGHT') return corners.topLeft;
  if (fromDir === 'RIGHT' && toDir === 'DOWN') return corners.topRight;
  if (fromDir === 'LEFT' && toDir === 'DOWN') return corners.topLeft;
  if (fromDir === 'RIGHT' && toDir === 'UP') return corners.bottomRight;
  if (fromDir === 'LEFT' && toDir === 'UP') return corners.bottomLeft;
  
  return corners.topRight; // Default
}

function ArrowLeft() {
  return (
    <div className="mb-[-2px] relative shrink-0 size-[24px]" data-name="Arrow left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow left">
          <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Play() {
  return (
    <div className="mb-[-2px] relative shrink-0 size-[24px]" data-name="Play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Play">
          <path d="M5 3L19 12L5 21V3Z" id="Icon" stroke="var(--stroke-0, #23252D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

// Helper function to get the correct pattern image based on orientation
function getPatternImage(pattern: string, prev: Position, current: Position, next: Position): string {
  if (pattern === 'head') {
    // Head pattern should not be rendered as body segment
    return imgPattern1Horizontal; // Fallback
  }
  
  const isHorizontal = prev.y === current.y;
  return getPatternImageBySize(pattern, 'normal', isHorizontal);
}

// Helper function to get the correct corner image based on turn direction and pattern
function getCornerImage(prev: Position, current: Position, next: Position, gridCols: number, gridRows: number, pattern: string): string {
  return getCornerImageBySize(prev, current, next, gridCols, gridRows, pattern, 'normal');
}

// Helper function to get SMALL pattern image for bottle effect
function getPatternImageSmall(pattern: string, prev: Position, current: Position, next: Position): string {
  const isHorizontal = prev.y === current.y;
  return getPatternImageBySize(pattern, 'mini', isHorizontal);
}

// Helper function to get LARGE pattern image for cookie effect
function getPatternImageLarge(pattern: string, prev: Position, current: Position, next: Position): string {
  const isHorizontal = prev.y === current.y;
  return getPatternImageBySize(pattern, 'large', isHorizontal);
}

// Helper function to get SMALL corner image for bottle effect
function getCornerImageSmall(prev: Position, current: Position, next: Position, gridCols: number, gridRows: number, pattern: string): string {
  return getCornerImageBySize(prev, current, next, gridCols, gridRows, pattern, 'mini');
}

// Helper function to get LARGE corner image for cookie effect
function getCornerImageLarge(prev: Position, current: Position, next: Position, gridCols: number, gridRows: number, pattern: string): string {
  return getCornerImageBySize(prev, current, next, gridCols, gridRows, pattern, 'large');
}

// Helper function to get head image based on direction and expression
function getHeadImage(dir: Direction, expression: Expression, tongueFrame: number = 0): string {
  // Priority: Show tongue animation if active (only when neutral)
  if (tongueFrame > 0 && expression === 'neutral') {
    switch (dir) {
      case 'UP':
        if (tongueFrame === 1) return imgCabezaArribaLengua1;
        if (tongueFrame === 2) return imgCabezaArribaLengua2;
        if (tongueFrame === 3) return imgCabezaArribaLengua3;
        break;
      case 'DOWN':
        if (tongueFrame === 1) return imgCabezaAbajoLengua1;
        if (tongueFrame === 2) return imgCabezaAbajoLengua2;
        if (tongueFrame === 3) return imgCabezaAbajoLengua3;
        break;
      case 'LEFT':
        if (tongueFrame === 1) return imgCabezaIzquierdaLengua1;
        if (tongueFrame === 2) return imgCabezaIzquierdaLengua2;
        if (tongueFrame === 3) return imgCabezaIzquierdaLengua3;
        break;
      case 'RIGHT':
        if (tongueFrame === 1) return imgCabezaDerechaLengua1;
        if (tongueFrame === 2) return imgCabezaDerechaLengua2;
        if (tongueFrame === 3) return imgCabezaDerechaLengua3;
        break;
    }
  }
  
  // Normal expression logic
  switch (dir) {
    case 'UP': 
      switch (expression) {
        case 'neutral': return imgCabezaArribaNeutral;
        case 'porComer': return imgCabezaArribaPorComer;
        case 'aburrido': return imgCabezaArribaAburrido;
        case 'contenta': return imgCabezaArribaContenta;
        case 'pestaneando': return imgCabezaArribaPestaneando;
        case 'danado': return imgCabezaArribaDanado;
        default: return imgCabezaArribaNeutral;
      }
    case 'DOWN': 
      switch (expression) {
        case 'neutral': return imgCabezaAbajoNeutral;
        case 'porComer': return imgCabezaAbajoPorComer;
        case 'aburrido': return imgCabezaAbajoAburrido;
        case 'contenta': return imgCabezaAbajoContenta;
        case 'pestaneando': return imgCabezaAbajoPestaneando;
        case 'danado': return imgCabezaAbajoDanado;
        default: return imgCabezaAbajoNeutral;
      }
    case 'LEFT': 
      switch (expression) {
        case 'neutral': return imgCabezaIzquierdaNeutral;
        case 'porComer': return imgCabezaIzquierdaPorComer;
        case 'aburrido': return imgCabezaIzquierdaAburrido;
        case 'contenta': return imgCabezaIzquierdaContenta;
        case 'pestaneando': return imgCabezaIzquierdaPestaneando;
        case 'danado': return imgCabezaIzquierdaDanado;
        default: return imgCabezaIzquierdaNeutral;
      }
    case 'RIGHT': 
      switch (expression) {
        case 'neutral': return imgCabezaDerechaNeutral;
        case 'porComer': return imgCabezaDerechaPorComer;
        case 'aburrido': return imgCabezaDerechaAburrido;
        case 'contenta': return imgCabezaDerechaContenta;
        case 'pestaneando': return imgCabezaDerechaPestaneando;
        case 'danado': return imgCabezaDerechaDanado;
        default: return imgCabezaDerechaNeutral;
      }
    default: 
      return imgCabezaArribaNeutral;
  }
}

// Helper function to get SMALL head image for bottle effect
function getHeadImageSmall(dir: Direction, expression: Expression): string {
  // Small heads only support neutral and porComer states (no tongue, aburrido, contenta, pestañeando, danado)
  // For damaged expression, use regular damaged heads (no small version exists)
  if (expression === 'danado') {
    return getHeadImage(dir, expression, 0);
  }
  
  const isEatingExpression = expression === 'porComer';
  
  switch (dir) {
    case 'UP': 
      return isEatingExpression ? imgCabezaArribaPorComerSmall : imgCabezaArribaSmall;
    case 'DOWN': 
      return isEatingExpression ? imgCabezaAbajoPorComerSmall : imgCabezaAbajoSmall;
    case 'LEFT': 
      return isEatingExpression ? imgCabezaIzquierdaPorComerSmall : imgCabezaIzquierdaSmall;
    case 'RIGHT': 
      return isEatingExpression ? imgCabezaDerechaPorComerSmall : imgCabezaDerechaSmall;
    default: 
      return imgCabezaArribaSmall;
  }
}

// Helper function to get LARGE head image for cookie effect
function getHeadImageLarge(dir: Direction, expression: Expression): string {
  // Large heads only support neutral and porComer states (no tongue, aburrido, contenta, pestañeando, danado)
  // For damaged expression, use regular damaged heads (no large version exists)
  if (expression === 'danado') {
    return getHeadImage(dir, expression, 0);
  }
  
  const isEatingExpression = expression === 'porComer';
  
  switch (dir) {
    case 'UP': 
      return isEatingExpression ? imgCabezaArribaPorComerLarge : imgCabezaArribaLarge;
    case 'DOWN': 
      return isEatingExpression ? imgCabezaAbajoPorComerLarge : imgCabezaAbajoLarge;
    case 'LEFT': 
      return isEatingExpression ? imgCabezaIzquierdaPorComerLarge : imgCabezaIzquierdaLarge;
    case 'RIGHT': 
      return isEatingExpression ? imgCabezaDerechaPorComerLarge : imgCabezaDerechaLarge;
    default: 
      return imgCabezaArribaLarge;
  }
}

// Helper function to get tail image based on direction from previous segment
function getTailImage(tailPos: Position, prevPos: Position, gridCols: number, gridRows: number, isBottleActive: boolean, isCookieActive: boolean): string {
  // The tail should point in the direction it's going (away from previous segment)
  const dir = getDirectionBetween(tailPos, prevPos, gridCols, gridRows);
  // Invert the direction because tail points away from body
  
  if (isCookieActive) {
    // Use large tail images when cookie is active
    switch (dir) {
      case 'UP': return imgColaArribaLarge;
      case 'DOWN': return imgColaAbajoLarge;
      case 'LEFT': return imgColaDerLarge; // Tail points right (away from left)
      case 'RIGHT': return imgColaIzqLarge; // Tail points left (away from right)
    }
  }
  
  if (isBottleActive) {
    // Use small tail images when bottle is active
    switch (dir) {
      case 'UP': return imgColaArribaSmall;
      case 'DOWN': return imgColaAbajoSmall;
      case 'LEFT': return imgColaDerechaSmall;
      case 'RIGHT': return imgColaIzquierdaSmall;
    }
  }
  
  // Normal tail images
  switch (dir) {
    case 'UP': return imgColaArriba;
    case 'DOWN': return imgColaAbajo;
    case 'LEFT': return imgColaDerecha;
    case 'RIGHT': return imgColaIzquierda;
  }
}

// Helper function to detect if segment is a corner
function isCorner(prev: Position | undefined, current: Position, next: Position | undefined, gridCols: number, gridRows: number): boolean {
  if (!prev || !next) return false;
  
  // Use getDirectionBetween to properly handle wrapping
  const fromDir = getDirectionBetween(prev, current, gridCols, gridRows);
  const toDir = getDirectionBetween(current, next, gridCols, gridRows);
  
  // If direction changes, it's a corner
  return fromDir !== toDir;
}

// Get corner rotation based on adjacent segments
function getCornerRotation(prev: Position, current: Position, next: Position, gridCols: number, gridRows: number): number {
  const fromDir = getDirectionBetween(prev, current, gridCols, gridRows);
  const toDir = getDirectionBetween(current, next, gridCols, gridRows);
  
  // Map direction pairs to rotations (based on Figma design)
  // The corner piece needs specific rotation for each turn combination
  
  // Coming from LEFT, going UP (turn right)
  if (fromDir === 'LEFT' && toDir === 'UP') return 90;
  // Coming from UP, going LEFT (turn left)
  if (fromDir === 'UP' && toDir === 'LEFT') return 90;
  
  // Coming from RIGHT, going UP (turn left)
  if (fromDir === 'RIGHT' && toDir === 'UP') return 0;
  // Coming from UP, going RIGHT (turn right)
  if (fromDir === 'UP' && toDir === 'RIGHT') return 0;
  
  // Coming from RIGHT, going DOWN (turn right)
  if (fromDir === 'RIGHT' && toDir === 'DOWN') return 270;
  // Coming from DOWN, going RIGHT (turn left)
  if (fromDir === 'DOWN' && toDir === 'RIGHT') return 270;
  
  // Coming from LEFT, going DOWN (turn left)
  if (fromDir === 'LEFT' && toDir === 'DOWN') return 180;
  // Coming from DOWN, going LEFT (turn right)
  if (fromDir === 'DOWN' && toDir === 'LEFT') return 180;
  
  return 0;
}

function getDirectionBetween(from: Position, to: Position, gridCols: number, gridRows: number): Direction {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  
  // Handle wrap-around by checking if the distance is too large
  // If the horizontal distance is more than half the grid, it wrapped
  if (Math.abs(dx) > gridCols / 2) {
    // Wrapped horizontally
    return dx > 0 ? 'LEFT' : 'RIGHT';
  }
  
  // If the vertical distance is more than half the grid, it wrapped
  if (Math.abs(dy) > gridRows / 2) {
    // Wrapped vertically
    return dy > 0 ? 'UP' : 'DOWN';
  }
  
  // Normal movement (no wrapping)
  if (Math.abs(dx) > Math.abs(dy)) {
    return dx > 0 ? 'RIGHT' : 'LEFT';
  } else {
    return dy > 0 ? 'DOWN' : 'UP';
  }
}

const SnakeBodySegment = React.memo(function SnakeBodySegment({ 
  pattern,
  prev,
  current,
  next,
  cornerImage,
  isBottleActive,
  isCookieActive
}: { 
  pattern: string;
  prev: Position;
  current: Position;
  next: Position;
  cornerImage: string | null;
  cellSize: number;
  isBottleActive?: boolean;
  isCookieActive?: boolean;
}) {
  if (cornerImage) {
    return (
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={cornerImage} />
    );
  }
  
  // Get the correct pattern orientation based on size bonus
  let orientedPattern: string;
  if (isCookieActive) {
    orientedPattern = getPatternImageLarge(pattern, prev, current, next);
  } else if (isBottleActive) {
    orientedPattern = getPatternImageSmall(pattern, prev, current, next);
  } else {
    orientedPattern = getPatternImage(pattern, prev, current, next);
  }
  
  return (
    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={orientedPattern} />
  );
});

export default function App() {
  // Estado de carga
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  // Estado para detectar mobile y tablet usando capacidades táctiles
  const [isMobile, setIsMobile] = useState(() => isTouchDevice());
  
  // Estados para dimensiones responsive
  const [gameWidth, setGameWidth] = useState(() => getGameWidth());
  const [cellSize, setCellSize] = useState(() => getCellSize(getGameWidth()));
  const [gridCols, setGridCols] = useState(() => Math.floor(getGameWidth() / getCellSize(getGameWidth())));
  const [gridRows, setGridRows] = useState(() => Math.floor(getPlayableHeight() / getCellSize(getGameWidth())));

  const [snake, setSnake] = useState<SnakeSegment[]>([
    { position: { x: 4, y: 4 }, pattern: 'head' }, // Head doesn't use pattern for rendering
    { position: { x: 3, y: 4 }, pattern: 'pattern1' },
    { position: { x: 2, y: 4 }, pattern: 'pattern1' }
  ]);
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [expression, setExpression] = useState<Expression>('neutral');
  const [foods, setFoods] = useState<Food[]>([]);
  const [lifeBonus, setLifeBonus] = useState<LifeBonus | null>(null);
  const [starBonus, setStarBonus] = useState<StarBonus | null>(null);
  const [bombBonus, setBombBonus] = useState<BombBonus | null>(null);
  const [clockBonus, setClockBonus] = useState<ClockBonus | null>(null);
  const [bottleBonus, setBottleBonus] = useState<BottleBonus | null>(null);
  const [cookieBonus, setCookieBonus] = useState<CookieBonus | null>(null);
  const [cactuses, setCactuses] = useState<Cactus[]>([]);
  const [hole, setHole] = useState<Hole | null>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameStatus, setGameStatus] = useState<'menu' | 'playing' | 'paused' | 'gameover'>('menu');
  const [showSettings, setShowSettings] = useState(false);
  const [showModoScreen, setShowModoScreen] = useState(false);
  const [showComidaScreen, setShowComidaScreen] = useState(false);
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const [gameMode, setGameMode] = useState<GameMode>('normal');
  const [timerSeconds, setTimerSeconds] = useState(90); // 1:30 = 90 segundos
  const [isImmune, setIsImmune] = useState(false);
  const [isSlowMotion, setIsSlowMotion] = useState(false);
  const [isBottleActive, setIsBottleActive] = useState(false); // Bottle effect: shrinks snake for 15 seconds
  const [isCookieActive, setIsCookieActive] = useState(false); // Cookie effect: enlarges snake for 15 seconds
  const [isPausedForSizeChange, setIsPausedForSizeChange] = useState(false); // Pause game briefly for size change
  const [damageFlash, setDamageFlash] = useState(false); // Damage effect when losing lives
  const [screenShake, setScreenShake] = useState(false); // Screen shake effect
  
  // Animation system for progressive size change (wave effect)
  const [segmentScales, setSegmentScales] = useState<{ [key: number]: number }>({}); // Track scale of each segment
  const [animationType, setAnimationType] = useState<'shrink' | 'grow' | null>(null); // Current animation type
  const [animationColorTheme, setAnimationColorTheme] = useState<'golden' | 'blue'>('golden'); // Color theme for current animation
  const animationTimeoutsRef = useRef<NodeJS.Timeout[]>([]); // Track animation timeouts to clear them
  
  // Magical particles for size change effect
  const [magicParticles, setMagicParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; color: string; randomX: number; randomY: number }>>([]);
  const particleIdRef = useRef(0);
  
  const [lifeBonusesSpawned, setLifeBonusesSpawned] = useState(0); // Track how many life bonuses have appeared
  const [starBonusesSpawned, setStarBonusesSpawned] = useState(0); // Track how many star bonuses have appeared
  const [highScore, setHighScore] = useState(() => {
    // Inicializar el highScore desde localStorage
    const savedHighScore = localStorage.getItem('laViborita_highScore');
    return savedHighScore ? parseInt(savedHighScore, 10) : 0;
  });
  const snakeRef = useRef<SnakeSegment[]>(snake); // Reference to current snake for async operations
  const directionRef = useRef<Direction>('RIGHT');
  const nextDirectionRef = useRef<Direction>('RIGHT');
  const lastMoveTimeRef = useRef<number>(Date.now());
  const lastDirectionChangeRef = useRef<number>(Date.now());
  
  // Estado para la animación de lengua
  const [tongueFrame, setTongueFrame] = useState(0); // 0 = sin lengua, 1, 2, 3 = frames de animación
  
  // Estado para rastrear el último patr��n generado (evitar repeticiones consecutivas)
  const lastPatternRef = useRef<string | null>(null);

  // Sistema de "mazo" para patrones 2-9: se barajan y se usan sin repetir hasta completar todos
  const patternDeckRef = useRef<typeof FOOD_TYPES>([]);
  const patternDeckIndexRef = useRef<number>(0);

  // Función para obtener el siguiente patrón del mazo (patrones 2-9)
  const getNextPattern = useCallback(() => {
    // Si el mazo está vacío o se terminó, barajarlo de nuevo
    if (patternDeckRef.current.length === 0 || patternDeckIndexRef.current >= patternDeckRef.current.length) {
      // Obtener patrones 2-9 y barajarlos
      const patterns2to9 = FOOD_TYPES.slice(1); // Excluye pattern1
      let shuffledDeck = shuffleArray(patterns2to9);
      
      // Si hay un último patrón usado, asegurarse de que el nuevo mazo no empiece con el mismo
      if (lastPatternRef.current !== null && shuffledDeck[0].pattern === lastPatternRef.current) {
        // Si el primer elemento es el mismo que el último usado, intercambiarlo con otro
        if (shuffledDeck.length > 1) {
          [shuffledDeck[0], shuffledDeck[1]] = [shuffledDeck[1], shuffledDeck[0]];
        }
      }
      
      patternDeckRef.current = shuffledDeck;
      patternDeckIndexRef.current = 0;
    }
    
    // Obtener el siguiente patrón del mazo
    const nextPattern = patternDeckRef.current[patternDeckIndexRef.current];
    patternDeckIndexRef.current++;
    
    // Actualizar el último patrón usado
    lastPatternRef.current = nextPattern.pattern;
    
    return nextPattern;
  }, []);

  // Helper function to trigger damage effect (flash + shake)
  const triggerDamageEffect = useCallback(() => {
    // Activate damage flash
    setDamageFlash(true);
    setScreenShake(true);
    
    // Change expression to damaged (but use neutral if enlarged/shrunk)
    if (isCookieActive || isBottleActive) {
      setExpression('neutral');
    } else {
      setExpression('danado');
    }
    
    // Remove effects after animation
    setTimeout(() => {
      setDamageFlash(false);
      setScreenShake(false);
      setExpression('neutral');
    }, 500);
  }, [isCookieActive, isBottleActive]);

  // Helper function to trigger progressive size change animation (wave effect)
  const triggerProgressiveSizeChange = useCallback((type: 'shrink' | 'grow', snakeLength: number, customTargetScale?: number, colorTheme?: 'golden' | 'blue', showParticles: boolean = true) => {
    // Clear any existing animation timeouts
    animationTimeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    animationTimeoutsRef.current = [];
    
    setAnimationType(type);
    
    // Set color theme for this animation
    const theme = colorTheme ?? (type === 'grow' ? 'golden' : 'blue');
    setAnimationColorTheme(theme);
    
    // Clear existing particles
    setMagicParticles([]);
    
    // Animation parameters
    const delayBetweenSegments = 30; // ms delay between each segment (wave speed)
    const totalDuration = 600; // Total animation duration (longer for more magic)
    const targetScale = customTargetScale ?? (type === 'shrink' ? 0.7 : 1.45);
    
    // Colors for particles based on theme (not type!)
    // Golden = cookie/large state, Blue = bottle/small state
    const particleColors = theme === 'blue'
      ? ['#00FFFF', '#4169E1', '#87CEEB', '#1E90FF'] // Blue/cyan for bottle
      : ['#FFD700', '#FFA500', '#FFFF00', '#FF8C00']; // Golden/yellow for cookie
    
    // Generate magical particles for each segment
    const newParticles: Array<{ id: number; x: number; y: number; delay: number; color: string }> = [];
    
    // Phase 1: Subtle anticipation (squash/stretch) - starts from head
    for (let i = 0; i < snakeLength; i++) {
      const anticipationTimeout = setTimeout(() => {
        setSegmentScales(prev => ({
          ...prev,
          [i]: type === 'shrink' ? 1.12 : 0.92 // More pronounced anticipation
        }));
      }, i * delayBetweenSegments);
      
      animationTimeoutsRef.current.push(anticipationTimeout);
    }
    
    // Phase 2: Main animation with particles
    for (let i = 0; i < snakeLength; i++) {
      const segmentDelay = (i * delayBetweenSegments) + 100;
      
      // Create particles for this segment (only if showParticles is true)
      if (showParticles) {
        const segment = snakeRef.current[i];
        if (segment) {
          const segmentX = segment.position.x * cellSize + cellSize / 2;
          const segmentY = segment.position.y * cellSize + cellSize / 2 + TOP_OFFSET;
          
          // Create 10-15 particles per segment (more particles since they're smaller)
          const numParticles = 10 + Math.floor(Math.random() * 6);
          for (let p = 0; p < numParticles; p++) {
            newParticles.push({
              id: particleIdRef.current++,
              x: segmentX + (Math.random() - 0.5) * cellSize,
              y: segmentY + (Math.random() - 0.5) * cellSize,
              delay: segmentDelay + Math.random() * 50,
              color: particleColors[Math.floor(Math.random() * particleColors.length)],
              randomX: (Math.random() - 0.5) * 100,
              randomY: -70 + (Math.random() - 0.5) * 50
            });
          }
        }
      }
      
      const mainTimeout = setTimeout(() => {
        setSegmentScales(prev => ({
          ...prev,
          [i]: targetScale
        }));
      }, segmentDelay);
      
      animationTimeoutsRef.current.push(mainTimeout);
    }
    
    // Add particles (only if showParticles is true)
    if (showParticles) {
      setMagicParticles(newParticles);
    }
    
    // Remove particles after animation
    const particleTimeout = setTimeout(() => {
      setMagicParticles([]);
    }, totalDuration + 500);
    
    animationTimeoutsRef.current.push(particleTimeout);
    
    // After animation completes, reset scales and update global state
    const finalTimeout = setTimeout(() => {
      setSegmentScales({});
      setAnimationType(null);
    }, totalDuration);
    
    animationTimeoutsRef.current.push(finalTimeout);
  }, [cellSize]);
  
  // Keep snakeRef updated
  useEffect(() => {
    snakeRef.current = snake;
  }, [snake]);
  
  // Efecto para precargar todas las imágenes
  useEffect(() => {
    let isMounted = true;
    let progressInterval: NodeJS.Timeout | null = null;
    
    const preloadImages = async () => {
      const startTime = Date.now();
      const minLoadingDuration = 2000; // 2 segundos mínimo
      const totalImages = ALL_IMAGES_TO_PRELOAD.length;
      let loadedCount = 0;
      let imagesComplete = false;
      
      // Animación suave del progreso
      const updateProgress = () => {
        const elapsed = Date.now() - startTime;
        const timeProgress = Math.min((elapsed / minLoadingDuration) * 100, 100);
        const imageProgress = (loadedCount / totalImages) * 100;
        
        // Usar el mayor entre el progreso de tiempo y el de imágenes
        // Si las imágenes se cargan rápido, seguir avanzando con el tiempo
        let finalProgress;
        if (imagesComplete) {
          finalProgress = timeProgress;
        } else {
          finalProgress = Math.max(timeProgress, imageProgress);
        }
        
        if (isMounted) {
          setLoadingProgress(Math.min(Math.round(finalProgress), 100));
        }
      };
      
      // Actualizar progreso cada 50ms para animación suave
      progressInterval = setInterval(updateProgress, 50);
      
      // Función para cargar una imagen
      const loadImage = (src: string): Promise<void> => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            loadedCount++;
            resolve();
          };
          img.onerror = () => {
            loadedCount++;
            resolve(); // Resolvemos incluso en error para continuar
          };
          img.src = src;
        });
      };
      
      // Cargar todas las imágenes en paralelo
      try {
        await Promise.all(ALL_IMAGES_TO_PRELOAD.map(src => loadImage(src)));
        imagesComplete = true;
        
        // Calcular cuánto tiempo ha pasado
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingDuration - elapsedTime);
        
        // Esperar el tiempo restante para llegar a 2 segundos mínimo
        if (remainingTime > 0) {
          await new Promise(resolve => setTimeout(resolve, remainingTime));
        }
        
        if (isMounted) {
          setLoadingProgress(100);
          if (progressInterval) clearInterval(progressInterval);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error al precargar imágenes:', error);
        if (isMounted) {
          if (progressInterval) clearInterval(progressInterval);
          setIsLoading(false);
        }
      }
    };
    
    preloadImages();
    
    return () => {
      isMounted = false;
      if (progressInterval) clearInterval(progressInterval);
    };
  }, []);

  // Cleanup animation timeouts on unmount
  useEffect(() => {
    return () => {
      animationTimeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  // Efecto para recalcular dimensiones cuando cambia el viewport
  useEffect(() => {
    const handleResize = () => {
      const newGameWidth = getGameWidth();
      const newCellSize = getCellSize(newGameWidth);
      const newGridCols = Math.floor(newGameWidth / newCellSize);
      const newGridRows = Math.floor(getPlayableHeight() / newCellSize);
      
      setGameWidth(newGameWidth);
      setCellSize(newCellSize);
      setGridCols(newGridCols);
      setGridRows(newGridRows);
      setIsMobile(isTouchDevice()); // Detectar por capacidades táctiles
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getRandomGridPosition = useCallback((): Position => {
    const x = Math.floor(Math.random() * gridCols);
    
    // En mobile y tablet, limitar el área donde aparecen gemas para evitar que aparezcan sobre los controles
    const isMobileView = isTouchDevice(); // Detectar por capacidades táctiles
    let maxY = gridRows;
    
    if (isMobileView) {
      // Restar espacio equivalente a los controles (130px ≈ 3-4 celdas dependiendo del cellSize)
      const controlsHeight = 130;
      const cellsToSubtract = Math.ceil(controlsHeight / cellSize);
      maxY = Math.max(1, gridRows - cellsToSubtract);
    }
    
    const y = Math.floor(Math.random() * maxY);
    return { x, y };
  }, [gridCols, gridRows, cellSize]);

  const isPositionOccupied = useCallback((pos: Position, snakeBody: SnakeSegment[]): boolean => {
    return snakeBody.some(segment => positionsMatch(segment.position, pos));
  }, []);

  const getRandomFoodPosition = useCallback((snakeBody: SnakeSegment[]): Position => {
    let newPos: Position;
    let attempts = 0;
    do {
      newPos = getRandomGridPosition();
      attempts++;
    } while (isPositionOccupied(newPos, snakeBody) && attempts < 100);
    return newPos;
  }, [getRandomGridPosition, isPositionOccupied]);

  const initializeFoods = useCallback((snakeBody: SnakeSegment[]) => {
    // Always spawn 3 gems: 2 pattern1 and 1 from shuffled deck (patterns 2-9, no repeats until all are used)
    const newFoods: Food[] = [];
    
    // Reset pattern system
    lastPatternRef.current = null;
    patternDeckRef.current = [];
    patternDeckIndexRef.current = 0;
    
    // Add 2 gems with pattern 1
    for (let i = 0; i < 2; i++) {
      const foodType = FOOD_TYPES[0]; // pattern1
      newFoods.push({
        position: getRandomFoodPosition(snakeBody),
        type: foodType.type,
        points: foodType.points,
        pattern: foodType.pattern
      });
    }
    
    // Add 1 gem from shuffled deck (patterns 2-9)
    const foodType = getNextPattern();
    newFoods.push({
      position: getRandomFoodPosition(snakeBody),
      type: foodType.type,
      points: foodType.points,
      pattern: foodType.pattern
    });
    
    setFoods(newFoods);
  }, [getRandomFoodPosition, getNextPattern]);

  const spawnLifeBonus = useCallback((snakeBody: SnakeSegment[]) => {
    // Only spawn if we haven't reached the limit of 5 life bonuses
    if (lifeBonusesSpawned >= 5) return;
    
    setLifeBonus({ position: getRandomFoodPosition(snakeBody) });
    setLifeBonusesSpawned(prev => prev + 1);
  }, [getRandomFoodPosition, lifeBonusesSpawned]);

  const spawnStarBonus = useCallback((snakeBody: SnakeSegment[]) => {
    // Only spawn if we haven't reached the limit of 2 star bonuses
    if (starBonusesSpawned >= 2) return;
    
    setStarBonus({ position: getRandomFoodPosition(snakeBody) });
    setStarBonusesSpawned(prev => prev + 1);
  }, [getRandomFoodPosition, starBonusesSpawned]);

  const spawnBombBonus = useCallback((snakeBody: SnakeSegment[]) => {
    if (Math.random() < 0.5) { // 50% de probabilidad
      setBombBonus({ position: getRandomFoodPosition(snakeBody) });
    }
  }, [getRandomFoodPosition]);

  const spawnClockBonus = useCallback((snakeBody: SnakeSegment[]) => {
    setClockBonus({ position: getRandomFoodPosition(snakeBody) });
  }, [getRandomFoodPosition]);

  const spawnBottleBonus = useCallback((snakeBody: SnakeSegment[]) => {
    setBottleBonus({ position: getRandomFoodPosition(snakeBody) });
  }, [getRandomFoodPosition]);

  const spawnCookieBonus = useCallback((snakeBody: SnakeSegment[]) => {
    setCookieBonus({ position: getRandomFoodPosition(snakeBody) });
  }, [getRandomFoodPosition]);

  const getRotation = useCallback((dir: Direction): number => {
    switch (dir) {
      case 'RIGHT': return 0;
      case 'LEFT': return 180;
      case 'DOWN': return 90;
      case 'UP': return 270;
      default: return 0;
    }
  }, []);

  const moveSnake = useCallback(() => {
    // Update last move time
    lastMoveTimeRef.current = Date.now();
    
    setSnake(prevSnake => {
      const head = prevSnake[0];
      const currentDir = nextDirectionRef.current;
      let newHeadPos: Position;

      // Always move 1 cell at a time to keep grid positions consistent
      const stepSize = 1;
      
      switch (currentDir) {
        case 'UP':
          newHeadPos = { x: head.position.x, y: head.position.y - stepSize };
          break;
        case 'DOWN':
          newHeadPos = { x: head.position.x, y: head.position.y + stepSize };
          break;
        case 'LEFT':
          newHeadPos = { x: head.position.x - stepSize, y: head.position.y };
          break;
        case 'RIGHT':
          newHeadPos = { x: head.position.x + stepSize, y: head.position.y };
          break;
      }

      // Wrap around edges
      if (newHeadPos.x < 0) newHeadPos.x = gridCols - 1;
      if (newHeadPos.x >= gridCols) newHeadPos.x = 0;
      if (newHeadPos.y < 0) newHeadPos.y = gridRows - 1;
      if (newHeadPos.y >= gridRows) newHeadPos.y = 0;

      // Check self collision (excluding the tail since it will move away)
      const hitSelf = prevSnake.slice(0, -1).some(segment => 
        positionsMatch(segment.position, newHeadPos)
      );

      if (hitSelf && !isImmune) {
        // Lose one life when hitting self
        const newLives = lives - 1;
        setLives(newLives);
        
        // Trigger damage effect
        triggerDamageEffect();
        
        // Check if game over (no lives left)
        if (newLives <= 0) {
          // Update high score if current score is higher
          if (score > highScore) {
            setHighScore(score);
            localStorage.setItem('laViborita_highScore', score.toString());
          }
          setGameStatus('gameover');
          return prevSnake;
        }
        
        // Continue playing with one less life
        // Don't remove segments - just lose the life (removing segments makes it easier)
        // Move: head takes new position, each segment takes position from ahead, keeps own pattern
        return [
          { position: newHeadPos, pattern: 'head' },
          ...prevSnake.slice(0, -1).map((seg, i) => ({
            position: prevSnake[i].position, // Take position from segment ahead
            pattern: prevSnake[i + 1].pattern // Keep own pattern
          }))
        ];
      } else if (hitSelf && isImmune) {
        // If immune, just pass through without damage - keep patterns
        return [
          { position: newHeadPos, pattern: 'head' },
          ...prevSnake.slice(0, -1).map((seg, i) => ({
            position: prevSnake[i].position, // Take position from segment ahead
            pattern: prevSnake[i + 1].pattern // Keep own pattern
          }))
        ];
      }

      // Check food collision
      const eatenFoodIndex = foods.findIndex(food => 
        positionsMatch(food.position, newHeadPos)
      );

      if (eatenFoodIndex !== -1) {
        const eatenFood = foods[eatenFoodIndex];
        setScore(prev => prev + eatenFood.points);
        
        // Remove eaten food and spawn new one maintaining the balance: 2 pattern1 + 1 from shuffled deck
        setFoods(prevFoods => {
          const newFoods = [...prevFoods];
          
          // Determine what type of gem to spawn based on what was eaten
          let newFoodType;
          if (eatenFood.type === 'pattern1') {
            // If pattern1 was eaten, replace with pattern1 to maintain 2 pattern1 gems
            newFoodType = FOOD_TYPES[0];
          } else {
            // If other pattern was eaten, get next from shuffled deck (patterns 2-9, no repeats until all used)
            newFoodType = getNextPattern();
          }
          
          newFoods[eatenFoodIndex] = {
            position: getRandomFoodPosition([{ position: newHeadPos, pattern: head.pattern }, ...prevSnake]),
            type: newFoodType.type,
            points: newFoodType.points,
            pattern: newFoodType.pattern
          };
          
          return newFoods;
        });

        // IMPORTANT: Each gem adds a new segment with its SPECIFIC pattern
        // This pattern stays PERMANENTLY on that segment
        // Example sequence:
        //   Eats pattern1 gem → segment with pattern1
        //   Eats pattern2 gem → segment with pattern2
        //   Eats pattern3 gem → segment with pattern3
        //   Body will have: [head, pattern3, pattern2, pattern1, tail]
        // 
        // The new segment is inserted right after the head with the eaten gem's pattern
        return [
          { position: newHeadPos, pattern: 'head' }, // Head always has 'head' pattern (not rendered)
          { position: head.position, pattern: eatenFood.type }, // NEW SEGMENT with eaten gem's TYPE (pattern name like 'pattern1', 'pattern2', etc.)
          ...prevSnake.slice(1) // Rest of body KEEPS their original patterns
        ];
      }

      // Check life bonus collision
      if (lifeBonus && positionsMatch(lifeBonus.position, newHeadPos)) {
        setLives(prev => prev + 1);
        setScore(prev => prev + 500);
        setLifeBonus(null);
        // Move normally without growing - keep patterns intact
        const newSnake = [
          { position: newHeadPos, pattern: 'head' },
          ...prevSnake.slice(0, -1).map((seg, i) => ({
            position: prevSnake[i].position, // Take position from segment ahead
            pattern: prevSnake[i + 1].pattern // Keep own pattern
          }))
        ];
        setTimeout(() => spawnLifeBonus(newSnake), 8000);
        return newSnake;
      }

      // Check star bonus collision
      if (starBonus && positionsMatch(starBonus.position, newHeadPos)) {
        setScore(prev => prev + 1000);
        setStarBonus(null);
        // Activate immunity for 15 seconds
        setIsImmune(true);
        setExpression('contenta');
        setTimeout(() => {
          setIsImmune(false);
          setExpression('neutral');
        }, 15000); // 15 seconds of immunity
        // Move normally without growing - keep patterns intact
        const newSnake = [
          { position: newHeadPos, pattern: 'head' },
          ...prevSnake.slice(0, -1).map((seg, i) => ({
            position: prevSnake[i].position, // Take position from segment ahead
            pattern: prevSnake[i + 1].pattern // Keep own pattern
          }))
        ];
        setTimeout(() => spawnStarBonus(newSnake), 8000);
        return newSnake;
      }

      // Check bomb bonus collision
      if (bombBonus && positionsMatch(bombBonus.position, newHeadPos)) {
        setBombBonus(null);
        
        // If immune, ignore the bomb completely
        if (isImmune) {
          // Just remove the bomb, no damage - keep patterns intact
          return [
            { position: newHeadPos, pattern: 'head' },
            ...prevSnake.slice(0, -1).map((seg, i) => ({
              position: prevSnake[i].position, // Take position from segment ahead
              pattern: prevSnake[i + 1].pattern // Keep own pattern
            }))
          ];
        }
        
        // Lose 2 lives when hitting a bomb (only if not immune)
        if (lives > 2) {
          setLives(prev => prev - 2);
          triggerDamageEffect();
          // Don't remove segments - just lose the lives
          return [
            { position: newHeadPos, pattern: 'head' },
            ...prevSnake.slice(0, -1).map((seg, i) => ({
              position: prevSnake[i].position, // Take position from segment ahead
              pattern: prevSnake[i + 1].pattern // Keep own pattern
            }))
          ];
        } else if (lives === 2) {
          setLives(0);
          triggerDamageEffect();
          // Update high score if current score is higher
          if (score > highScore) {
            setHighScore(score);
            localStorage.setItem('laViborita_highScore', score.toString());
          }
          setGameStatus('gameover');
          return prevSnake;
        } else {
          // 1 vida restante, pierde la partida
          setLives(0);
          triggerDamageEffect();
          if (score > highScore) {
            setHighScore(score);
            localStorage.setItem('laViborita_highScore', score.toString());
          }
          setGameStatus('gameover');
          return prevSnake;
        }
      }

      // Check cactus obstacle collision - never disappears, always costs 1 life
      const hitCactus = cactuses.find(cactus => positionsMatch(cactus.position, newHeadPos));
      if (hitCactus) {
        // If immune, ignore the cactus completely
        if (isImmune) {
          // Just pass through, no damage - keep patterns intact
          return [
            { position: newHeadPos, pattern: 'head' },
            ...prevSnake.slice(0, -1).map((seg, i) => ({
              position: prevSnake[i].position, // Take position from segment ahead
              pattern: prevSnake[i + 1].pattern // Keep own pattern
            }))
          ];
        }
        
        // Cactus never disappears - it stays on the board
        // Lose 1 life when hitting a cactus (only if not immune)
        if (lives > 1) {
          setLives(prev => prev - 1);
          triggerDamageEffect();
          // Don't remove segments - just lose the life
          return [
            { position: newHeadPos, pattern: 'head' },
            ...prevSnake.slice(0, -1).map((seg, i) => ({
              position: prevSnake[i].position, // Take position from segment ahead
              pattern: prevSnake[i + 1].pattern // Keep own pattern
            }))
          ];
        } else {
          // Last life, game over
          setLives(0);
          triggerDamageEffect();
          if (score > highScore) {
            setHighScore(score);
            localStorage.setItem('laViborita_highScore', score.toString());
          }
          setGameStatus('gameover');
          return prevSnake;
        }
      }

      // Check hole collision - DEADLY! Instant game over (only star immunity saves you)
      if (hole && positionsMatch(hole.position, newHeadPos)) {
        // If immune, you can pass through the hole safely
        if (isImmune) {
          // Star saves you! Pass through safely
          return [
            { position: newHeadPos, pattern: 'head' },
            ...prevSnake.slice(0, -1).map((seg, i) => ({
              position: prevSnake[i].position, // Take position from segment ahead
              pattern: prevSnake[i + 1].pattern // Keep own pattern
            }))
          ];
        }
        
        // Hole is deadly - instant game over no matter how many lives
        setLives(0);
        triggerDamageEffect();
        if (score > highScore) {
          setHighScore(score);
          localStorage.setItem('laViborita_highScore', score.toString());
        }
        setGameStatus('gameover');
        return prevSnake;
      }

      // Check clock bonus collision
      if (clockBonus && positionsMatch(clockBonus.position, newHeadPos)) {
        setScore(prev => prev + 300);
        setClockBonus(null);
        // Activate slow motion for 20 seconds
        setIsSlowMotion(true);
        setTimeout(() => {
          setIsSlowMotion(false);
        }, 20000); // 20 seconds of slow motion
        // Move normally without growing - keep patterns intact
        return [
          { position: newHeadPos, pattern: 'head' },
          ...prevSnake.slice(0, -1).map((seg, i) => ({
            position: prevSnake[i].position, // Take position from segment ahead
            pattern: prevSnake[i + 1].pattern // Keep own pattern
          }))
        ];
      }

      // Check bottle bonus collision
      if (bottleBonus && positionsMatch(bottleBonus.position, newHeadPos)) {
        setScore(prev => prev + 500);
        setBottleBonus(null);
        
        // Logic based on current size:
        // If LARGE (cookie active) and eats BOTTLE -> becomes NORMAL
        // If NORMAL and eats BOTTLE -> becomes SMALL
        if (isCookieActive) {
          // Currently LARGE, eating bottle makes it NORMAL
          setIsCookieActive(false);
          triggerProgressiveSizeChange('shrink', prevSnake.length, 1.0, 'golden'); // Still golden because coming from cookie
          // Don't activate bottle effect, just cancel cookie
        } else if (!isBottleActive) {
          // Currently NORMAL, eating bottle makes it SMALL
          setIsBottleActive(true);
          triggerProgressiveSizeChange('shrink', prevSnake.length, 0.7, 'blue'); // Blue for bottle shrink
          const bottleLength = prevSnake.length; // Capture length
          setTimeout(() => {
            // Animate back to normal size (from 0.7 to 1.0) - still blue because from bottle
            // NO particles on revert (false = no particles)
            triggerProgressiveSizeChange('grow', bottleLength, 1.0, 'blue', false);
            setTimeout(() => {
              setIsBottleActive(false);
            }, 700); // Wait for animation to complete before changing state
          }, 15000); // 15 seconds of bottle effect
        }
        // If already SMALL (bottle active), eating another bottle does nothing special
        
        // Move normally without growing
        return [
          { position: newHeadPos, pattern: 'head' },
          ...prevSnake.slice(0, -1).map((seg, i) => ({
            position: prevSnake[i].position, // Take position from segment ahead
            pattern: prevSnake[i + 1].pattern // Keep own pattern
          }))
        ];
      }

      // Check cookie bonus collision
      if (cookieBonus && positionsMatch(cookieBonus.position, newHeadPos)) {
        setScore(prev => prev + 500);
        setCookieBonus(null);
        
        // Logic based on current size:
        // If SMALL (bottle active) and eats COOKIE -> becomes NORMAL
        // If NORMAL and eats COOKIE -> becomes LARGE
        if (isBottleActive) {
          // Currently SMALL, eating cookie makes it NORMAL
          setIsBottleActive(false);
          triggerProgressiveSizeChange('grow', prevSnake.length, 1.0, 'blue'); // Still blue because coming from bottle
          // Don't activate cookie effect, just cancel bottle
        } else if (!isCookieActive) {
          // Currently NORMAL, eating cookie makes it LARGE
          setIsCookieActive(true);
          triggerProgressiveSizeChange('grow', prevSnake.length, 1.45, 'golden'); // Golden for cookie growth
          const cookieLength = prevSnake.length; // Capture length
          setTimeout(() => {
            // Animate back to normal size (from 1.45 to 1.0) - still golden because from cookie
            // NO particles on revert (false = no particles)
            triggerProgressiveSizeChange('shrink', cookieLength, 1.0, 'golden', false);
            setTimeout(() => {
              setIsCookieActive(false);
            }, 700); // Wait for animation to complete before changing state
          }, 15000); // 15 seconds of cookie effect
        }
        // If already LARGE (cookie active), eating another cookie does nothing special
        
        // Move normally without growing
        return [
          { position: newHeadPos, pattern: 'head' },
          ...prevSnake.slice(0, -1).map((seg, i) => ({
            position: prevSnake[i].position, // Take position from segment ahead
            pattern: prevSnake[i + 1].pattern // Keep own pattern
          }))
        ];
      }

      // Normal move - each segment takes position from the one ahead, keeps its own pattern
      return [
        { position: newHeadPos, pattern: 'head' },
        ...prevSnake.slice(0, -1).map((seg, i) => ({
          position: prevSnake[i].position, // Take position from segment ahead (i in original array)
          pattern: prevSnake[i + 1].pattern // Keep pattern from current segment (i+1 in original array)
        }))
      ];
    });

    directionRef.current = nextDirectionRef.current;
  }, [foods, lives, lifeBonus, starBonus, bombBonus, clockBonus, bottleBonus, cookieBonus, getRandomFoodPosition, spawnLifeBonus, spawnStarBonus, spawnBombBonus, score, highScore, gridCols, gridRows, isImmune, isCookieActive, isBottleActive, triggerProgressiveSizeChange, triggerDamageEffect]);

  useEffect(() => {
    let gameLoop: NodeJS.Timeout;
    
    if (gameStatus === 'playing' && !isPausedForSizeChange) {
      // Apply slow motion effect: double the speed (slower gameplay)
      const effectiveSpeed = isSlowMotion ? speed * 2 : speed;
      gameLoop = setInterval(moveSnake, effectiveSpeed);
    }

    return () => {
      if (gameLoop) clearInterval(gameLoop);
    };
  }, [gameStatus, moveSnake, speed, isSlowMotion, isPausedForSizeChange]);



  // Effect to spawn life bonuses at specific times during gameplay
  // Times: 30s, 2m, 3m
  useEffect(() => {
    if (gameStatus !== 'playing') return;

    const spawnTimes = [
      30000,   // 30 seconds
      120000,  // 2 minutes
      180000   // 3 minutes
    ];

    const timeouts: NodeJS.Timeout[] = [];

    spawnTimes.forEach((time) => {
      const timeout = setTimeout(() => {
        setSnake(currentSnake => {
          setLifeBonus(prevBonus => {
            if (!prevBonus) {
              const newPosition = getRandomFoodPosition(currentSnake);
              
              // Set a timeout to remove the life bonus after 10 seconds if not collected
              setTimeout(() => {
                setLifeBonus(currentBonus => {
                  // Only remove if it's still the same bonus (not collected)
                  if (currentBonus && currentBonus.position.x === newPosition.x && currentBonus.position.y === newPosition.y) {
                    return null;
                  }
                  return currentBonus;
                });
              }, 10000); // 10 seconds duration
              
              return { position: newPosition };
            }
            return prevBonus;
          });
          return currentSnake;
        });
      }, time);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [gameStatus, getRandomFoodPosition]);

  // Effect to spawn star bonuses at specific times during gameplay
  // Times: 15s, 1m, 2m, 3m
  useEffect(() => {
    if (gameStatus !== 'playing') return;

    const spawnTimes = [
      15000,   // 15 seconds
      60000,   // 1 minute
      120000,  // 2 minutes
      180000   // 3 minutes
    ];

    const timeouts: NodeJS.Timeout[] = [];

    spawnTimes.forEach((time) => {
      const timeout = setTimeout(() => {
        setSnake(currentSnake => {
          setStarBonus(prevBonus => {
            if (!prevBonus) {
              const newPosition = getRandomFoodPosition(currentSnake);
              return { position: newPosition };
            }
            return prevBonus;
          });
          return currentSnake;
        });
      }, time);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [gameStatus, getRandomFoodPosition]);

  // Effect to spawn bomb bonuses at specific times during gameplay
  // Times: 1:30min, 2:30min, 3min
  useEffect(() => {
    if (gameStatus !== 'playing') return;

    const spawnTimes = [
      90000,   // 1:30 minutes (90 seconds)
      150000,  // 2:30 minutes (150 seconds)
      180000   // 3 minutes
    ];

    const timeouts: NodeJS.Timeout[] = [];

    spawnTimes.forEach((time) => {
      const timeout = setTimeout(() => {
        setSnake(currentSnake => {
          setBombBonus(prevBonus => {
            if (!prevBonus) {
              const newPosition = getRandomFoodPosition(currentSnake);
              return { position: newPosition };
            }
            return prevBonus;
          });
          return currentSnake;
        });
      }, time);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [gameStatus, getRandomFoodPosition]);

  // Effect to spawn clock bonuses at specific times during gameplay
  // Times: 3m, 4m, 5m, 6m, etc. (every minute starting at 3 minutes)
  useEffect(() => {
    if (gameStatus !== 'playing') return;

    const spawnTimes = [];
    // Generate spawn times: 180s (3m), 240s (4m), 300s (5m), etc.
    for (let i = 3; i <= 10; i++) {
      spawnTimes.push(i * 60000); // i minutes in milliseconds
    }

    const timeouts: NodeJS.Timeout[] = [];

    spawnTimes.forEach((time) => {
      const timeout = setTimeout(() => {
        setSnake(currentSnake => {
          setClockBonus(prevBonus => {
            if (!prevBonus) {
              const newPosition = getRandomFoodPosition(currentSnake);
              return { position: newPosition };
            }
            return prevBonus;
          });
          return currentSnake;
        });
      }, time);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [gameStatus, getRandomFoodPosition]);

  // Effect to spawn bottle bonuses at specific times during gameplay
  // Times: 45s, 1:30, 2:15, 3:00, etc. (every 45 seconds)
  useEffect(() => {
    if (gameStatus !== 'playing') return;

    const spawnTimes = [];
    // Generate spawn times: 45s first, then every 45s
    spawnTimes.push(45000); // First at 45 seconds
    for (let i = 2; i <= 15; i++) {
      spawnTimes.push(i * 45000); // Every 45 seconds after
    }

    const timeouts: NodeJS.Timeout[] = [];

    spawnTimes.forEach((time) => {
      const timeout = setTimeout(() => {
        setSnake(currentSnake => {
          setBottleBonus(prevBonus => {
            if (!prevBonus) {
              const newPosition = getRandomFoodPosition(currentSnake);
              return { position: newPosition };
            }
            return prevBonus;
          });
          return currentSnake;
        });
      }, time);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [gameStatus, getRandomFoodPosition]);

  // Effect to auto-remove bottle bonus after 20 seconds if not collected
  useEffect(() => {
    if (!bottleBonus || gameStatus !== 'playing') return;

    const removeTimeout = setTimeout(() => {
      setBottleBonus(null);
    }, 20000); // 20 seconds duration

    return () => clearTimeout(removeTimeout);
  }, [bottleBonus, gameStatus]);

  // Effect to auto-remove cookie bonus after 20 seconds if not collected
  useEffect(() => {
    if (!cookieBonus || gameStatus !== 'playing') return;

    const removeTimeout = setTimeout(() => {
      setCookieBonus(null);
    }, 20000); // 20 seconds duration

    return () => clearTimeout(removeTimeout);
  }, [cookieBonus, gameStatus]);

  // Effect to auto-remove life bonus after 20 seconds if not collected
  useEffect(() => {
    if (!lifeBonus || gameStatus !== 'playing') return;

    const removeTimeout = setTimeout(() => {
      setLifeBonus(null);
    }, 20000); // 20 seconds duration

    return () => clearTimeout(removeTimeout);
  }, [lifeBonus, gameStatus]);

  // Effect to auto-remove star bonus after 20 seconds if not collected
  useEffect(() => {
    if (!starBonus || gameStatus !== 'playing') return;

    const removeTimeout = setTimeout(() => {
      setStarBonus(null);
    }, 20000); // 20 seconds duration

    return () => clearTimeout(removeTimeout);
  }, [starBonus, gameStatus]);

  // Effect to auto-remove clock bonus after 20 seconds if not collected
  useEffect(() => {
    if (!clockBonus || gameStatus !== 'playing') return;

    const removeTimeout = setTimeout(() => {
      setClockBonus(null);
    }, 20000); // 20 seconds duration

    return () => clearTimeout(removeTimeout);
  }, [clockBonus, gameStatus]);

  // Effect to spawn cookie bonuses at specific times during gameplay
  // Times: 1:15, 2:30, 3:45, 5:00, etc. (every 1 minute 15 seconds)
  useEffect(() => {
    if (gameStatus !== 'playing') return;

    const spawnTimes = [];
    // Generate spawn times: 1 minute first, then every 75s
    spawnTimes.push(60000); // First at 1 minute (60 seconds)
    for (let i = 2; i <= 10; i++) {
      spawnTimes.push(i * 75000); // Every 75 seconds (1:15) after
    }

    const timeouts: NodeJS.Timeout[] = [];

    spawnTimes.forEach((time) => {
      const timeout = setTimeout(() => {
        setSnake(currentSnake => {
          setCookieBonus(prevBonus => {
            if (!prevBonus) {
              const newPosition = getRandomFoodPosition(currentSnake);
              return { position: newPosition };
            }
            return prevBonus;
          });
          return currentSnake;
        });
      }, time);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [gameStatus, getRandomFoodPosition]);

  // Effect to spawn cactus obstacles - first at 120s, then every 60s after that
  useEffect(() => {
    if (gameStatus !== 'playing') return;

    const cactusTimings = [120000, 180000, 240000, 300000, 360000, 420000, 480000, 540000, 600000]; // 2min, 3min, 4min, 5min, etc.

    const timeouts = cactusTimings.map((timing) => {
      return setTimeout(() => {
        setSnake(currentSnake => {
          setCactuses(prevCactuses => {
            const newPosition = getRandomFoodPosition(currentSnake);
            return [...prevCactuses, { position: newPosition }];
          });
          return currentSnake;
        });
      }, timing);
    });

    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, [gameStatus, getRandomFoodPosition]);

  // Effect to spawn deadly hole after 4 minutes (240s) - instant death if touched (only star saves you)
  useEffect(() => {
    if (gameStatus !== 'playing') return;

    const spawnTime = 240000; // 4 minutes (240 seconds)

    const timeout = setTimeout(() => {
      setSnake(currentSnake => {
        setHole(prevHole => {
          if (!prevHole) {
            const newPosition = getRandomFoodPosition(currentSnake);
            return { position: newPosition };
          }
          return prevHole;
        });
        return currentSnake;
      });
    }, spawnTime);

    return () => clearTimeout(timeout);
  }, [gameStatus, getRandomFoodPosition]);

  // Effect to adjust speed based on game mode and score
  useEffect(() => {
    if (gameStatus !== 'playing') return;

    if (gameMode === 'rapido') {
      // Modo rápido: velocidad fija rápida
      setSpeed(MIN_SPEED);
    } else if (gameMode === 'normal' || gameMode === 'timer') {
      // Modo normal y timer: velocidad gradual basada en score
      // Speed increases faster - reduces 8ms every 800 points
      // Formula: starts at 450ms, reaches minimum 100ms at ~35,000 points
      const speedReduction = Math.floor(score / 800) * 8; // Reduces 8ms every 800 points (más rápido)
      const newSpeed = Math.max(MIN_SPEED, INITIAL_SPEED - speedReduction);
      setSpeed(newSpeed);
    }
  }, [score, gameStatus, gameMode]);

  // Effect to update expression based on proximity to food and inactivity
  useEffect(() => {
    if (gameStatus !== 'playing') {
      setExpression('neutral');
      return;
    }

    const checkExpression = () => {
      const currentTime = Date.now();
      const timeSinceDirectionChange = currentTime - lastDirectionChangeRef.current;

      // PRIORITY 0: Don't change expression if currently damaged (it will be reset by triggerDamageEffect timeout)
      if (expression === 'danado') {
        return;
      }

      // PRIORITY 1: Always check for "porComer" expression first (mouth opening near any collectible)
      // This should work regardless of immunity or other states
      // Only check if speed is not too fast (> 120ms = slower)
      if (speed > 120) {
        const head = snake[0].position;
        const currentDirection = directionRef.current;
        let shouldOpenMouth = false;

        // Helper function to check proximity to any position
        const checkProximity = (targetPosition: Position) => {
          // Check horizontal alignment (same row)
          if (targetPosition.y === head.y) {
            const distanceRight = (targetPosition.x - head.x + gridCols) % gridCols;
            const distanceLeft = (head.x - targetPosition.x + gridCols) % gridCols;
            
            // Opens mouth at 2 cells away and keeps it open until reaching the item (1 cell away)
            if (currentDirection === 'RIGHT' && distanceRight <= 2 && distanceRight > 0) {
              return true;
            }
            
            if (currentDirection === 'LEFT' && distanceLeft <= 2 && distanceLeft > 0) {
              return true;
            }
          }
          
          // Check vertical alignment (same column)
          if (targetPosition.x === head.x) {
            const distanceDown = (targetPosition.y - head.y + gridRows) % gridRows;
            const distanceUp = (head.y - targetPosition.y + gridRows) % gridRows;
            
            // Opens mouth at 2 cells away and keeps it open until reaching the item (1 cell away)
            if (currentDirection === 'DOWN' && distanceDown <= 2 && distanceDown > 0) {
              return true;
            }
            
            if (currentDirection === 'UP' && distanceUp <= 2 && distanceUp > 0) {
              return true;
            }
          }
          
          return false;
        };

        // Check proximity to foods (gemas)
        foods.forEach(food => {
          if (checkProximity(food.position)) {
            shouldOpenMouth = true;
          }
        });

        // Check proximity to life bonus (corazón)
        if (lifeBonus && checkProximity(lifeBonus.position)) {
          shouldOpenMouth = true;
        }

        // Check proximity to star bonus (estrella)
        if (starBonus && checkProximity(starBonus.position)) {
          shouldOpenMouth = true;
        }

        // Check proximity to bomb bonus (bomba)
        if (bombBonus && checkProximity(bombBonus.position)) {
          shouldOpenMouth = true;
        }

        // Check proximity to clock bonus (reloj)
        if (clockBonus && checkProximity(clockBonus.position)) {
          shouldOpenMouth = true;
        }

        if (shouldOpenMouth) {
          setExpression('porComer');
          return;
        }
      }

      // PRIORITY 2: If immune, stay 'contenta' (but porComer has priority above)
      if (isImmune) {
        setExpression('contenta');
        return;
      }

      // PRIORITY 3: Check if maintaining same direction for more than 5 seconds
      if (timeSinceDirectionChange > 5000) {
        setExpression('aburrido');
        return;
      }

      // PRIORITY 4: Default to neutral if no other conditions met
      setExpression('neutral');
    };

    // Check expression every 100ms
    const expressionInterval = setInterval(checkExpression, 100);

    return () => {
      clearInterval(expressionInterval);
    };
  }, [gameStatus, snake, foods, lifeBonus, starBonus, bombBonus, gridCols, gridRows, isImmune, speed, expression]);

  // Effect to handle timer countdown in timer mode
  useEffect(() => {
    if (gameStatus !== 'playing' || gameMode !== 'timer') return;

    const timerInterval = setInterval(() => {
      setTimerSeconds(prev => {
        if (prev <= 1) {
          // Time's up! Game over
          setGameStatus('gameover');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [gameStatus, gameMode]);

  // Effect to handle blinking animation when neutral
  useEffect(() => {
    if (gameStatus !== 'playing') return;
    
    const scheduleNextBlink = () => {
      // Random interval between 3 and 6 seconds
      const nextBlinkDelay = 3000 + Math.random() * 3000;
      
      return setTimeout(() => {
        // Only blink if currently in neutral expression
        setExpression(currentExpression => {
          if (currentExpression === 'neutral') {
            // Blink for 150ms
            setTimeout(() => {
              setExpression(prevExpression => {
                // Return to neutral only if still blinking
                if (prevExpression === 'pestaneando') {
                  return 'neutral';
                }
                return prevExpression;
              });
            }, 150);
            
            return 'pestaneando';
          }
          return currentExpression;
        });
        
        // Schedule next blink
        const nextTimeout = scheduleNextBlink();
        return nextTimeout;
      }, nextBlinkDelay);
    };
    
    const blinkTimeout = scheduleNextBlink();
    
    return () => {
      clearTimeout(blinkTimeout);
    };
  }, [gameStatus]);

  // Effect to handle tongue animation when neutral
  useEffect(() => {
    if (gameStatus !== 'playing') return;
    
    // Check every 2 seconds with 60% probability
    const checkInterval = setInterval(() => {
      // Only show tongue if in neutral expression and not currently animating
      if (expression === 'neutral' && tongueFrame === 0 && Math.random() < 0.60) {
        // Animate tongue: 1 -> 2 -> 3 -> 2 -> 1 -> 0
        const sequence = [1, 2, 3, 2, 1, 0];
        let currentStep = 0;
        
        const frameInterval = setInterval(() => {
          if (currentStep < sequence.length) {
            setTongueFrame(sequence[currentStep]);
            currentStep++;
          } else {
            clearInterval(frameInterval);
          }
        }, 120); // 120ms per frame = ~720ms total animation
      }
    }, 2000);
    
    return () => {
      clearInterval(checkInterval);
    };
  }, [gameStatus, expression, tongueFrame]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameStatus !== 'playing') return;

      const currentDir = directionRef.current;
      let newDir: Direction | null = null;

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          if (currentDir !== 'DOWN') newDir = 'UP';
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          if (currentDir !== 'UP') newDir = 'DOWN';
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          if (currentDir !== 'RIGHT') newDir = 'LEFT';
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          if (currentDir !== 'LEFT') newDir = 'RIGHT';
          break;
        case ' ':
          e.preventDefault();
          setGameStatus('paused');
          break;
      }

      if (newDir) {
        nextDirectionRef.current = newDir;
        lastDirectionChangeRef.current = Date.now();
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStatus]);

  // Handle touch/click controls for mobile
  const handleScreenClick = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    // REMOVED: Screen click functionality disabled
    // Users should only use keyboard arrows (desktop) or D-pad controls (mobile/tablet)
  }, []);

  const startGame = useCallback(() => {
    const initialSnake: SnakeSegment[] = [
      { position: { x: 4, y: 4 }, pattern: 'head' }, // Head doesn't use pattern for rendering
      { position: { x: 3, y: 4 }, pattern: 'pattern1' },
      { position: { x: 2, y: 4 }, pattern: 'pattern1' }
    ];
    setSnake(initialSnake);
    directionRef.current = 'RIGHT';
    nextDirectionRef.current = 'RIGHT';
    setDirection('RIGHT');
    setScore(0);
    setLives(3);
    setSpeed(INITIAL_SPEED);
    setGameMode('normal'); // Reset to normal mode
    setTimerSeconds(90); // Reset timer to 1:30
    setLifeBonusesSpawned(0); // Reset life bonus counter
    setStarBonusesSpawned(0); // Reset star bonus counter
    setLifeBonus(null); // Clear any existing life bonus
    setStarBonus(null); // Clear any existing star bonus
    setBombBonus(null); // Clear any existing bomb bonus
    setClockBonus(null); // Clear any existing clock bonus
    setBottleBonus(null); // Clear any existing bottle bonus
    setCookieBonus(null); // Clear any existing cookie bonus
    setCactuses([]); // Clear cactus obstacles
    setHole(null); // Clear deadly hole
    setIsSlowMotion(false); // Reset slow motion effect
    setIsBottleActive(false); // Reset bottle effect
    setIsCookieActive(false); // Reset cookie effect
    initializeFoods(initialSnake);
    // Don't spawn bonuses at start - they will appear according to their timers
    setGameStatus('playing');
  }, [initializeFoods]);

  const toggleSpeed = useCallback(() => {
    setGameMode(prev => {
      if (prev === 'normal') {
        return 'rapido';
      } else if (prev === 'rapido') {
        setTimerSeconds(90); // Reset timer when entering timer mode
        return 'timer';
      } else {
        return 'normal';
      }
    });
  }, []);

  const exitGame = useCallback(() => {
    setGameStatus('menu');
  }, []);

  const openSettings = useCallback(() => {
    setShowSettings(true);
  }, []);

  const closeSettings = useCallback(() => {
    setShowSettings(false);
  }, []);

  const openModoScreen = useCallback(() => {
    setShowModoScreen(true);
  }, []);

  const closeModoScreen = useCallback(() => {
    setShowModoScreen(false);
  }, []);

  const openComidaScreen = useCallback(() => {
    setShowComidaScreen(true);
  }, []);

  const closeComidaScreen = useCallback(() => {
    setShowComidaScreen(false);
  }, []);

  const handleGameModeSelect = useCallback((mode: GameMode) => {
    setGameMode(mode);
    if (mode === 'rapido') {
      setSpeed(FAST_SPEED);
    } else {
      setSpeed(INITIAL_SPEED);
    }
    if (mode === 'timer') {
      setTimerSeconds(90);
    }
  }, []);

  const handleMobileDirectionChange = useCallback((newDirection: Direction) => {
    if (gameStatus !== 'playing') return;
    
    const opposites: { [key in Direction]: Direction } = {
      UP: 'DOWN',
      DOWN: 'UP',
      LEFT: 'RIGHT',
      RIGHT: 'LEFT'
    };

    if (newDirection !== opposites[directionRef.current]) {
      nextDirectionRef.current = newDirection;
      lastDirectionChangeRef.current = Date.now();
    }
  }, [gameStatus]);

  // Mostrar pantalla de carga con progreso
  if (isLoading) {
    return (
      <div className="w-full h-screen relative">
        <Loading />
        {/* Barra de progreso dinámica */}
        <div className="absolute left-1/2 top-[calc(50%+64.5px)] translate-x-[-50%] translate-y-[-50%]">
          <div className="bg-[#0d2e28] h-[6px] rounded-[30px] w-[207px]" />
          <div 
            className="absolute top-0 left-0 bg-[#a3994f] h-[6px] rounded-[30px] transition-all duration-300 ease-out"
            style={{ width: `${(loadingProgress / 100) * 207}px` }}
          />
        </div>
      </div>
    );
  }

  // Mostrar pantalla de selección de modo
  if (showModoScreen) {
    return (
      <div className="w-full h-screen relative">
        <ModoScreen 
          onClose={closeModoScreen} 
          gameMode={gameMode}
          onGameModeSelect={handleGameModeSelect}
        />
        <Toaster 
          position="bottom-center" 
          toastOptions={{
            className: 'fixed bottom-[40px] left-1/2 -translate-x-1/2 text-center',
            style: {
              background: '#19564D',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              fontSize: '18px',
              padding: '16px 32px',
              textAlign: 'center',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              zIndex: 60,
              animation: 'slideUp 0.3s ease-out',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '230px',
            },
          }}
        />
      </div>
    );
  }

  // Mostrar pantalla de comida
  if (showComidaScreen) {
    return (
      <div className="w-full h-screen relative">
        <ComidaScreen onClose={closeComidaScreen} />
        <Toaster 
          position="bottom-center" 
          toastOptions={{
            className: 'fixed bottom-[40px] left-1/2 -translate-x-1/2 text-center',
            style: {
              background: '#19564D',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              fontSize: '18px',
              padding: '16px 32px',
              textAlign: 'center',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              zIndex: 60,
              animation: 'slideUp 0.3s ease-out',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '230px',
            },
          }}
        />
      </div>
    );
  }

  // Mostrar pantalla de ajustes
  if (showSettings) {
    return (
      <div className="w-full h-screen relative">
        <AjustesScreen 
          onClose={closeSettings} 
          gameMode={gameMode}
          onGameModeChange={toggleSpeed}
          onOpenModoScreen={openModoScreen}
          onOpenComidaScreen={openComidaScreen}
        />
        <Toaster 
          position="bottom-center" 
          toastOptions={{
            className: 'fixed bottom-[40px] left-1/2 -translate-x-1/2 text-center',
            style: {
              background: '#19564D',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              fontSize: '18px',
              padding: '16px 32px',
              textAlign: 'center',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              zIndex: 60,
              animation: 'slideUp 0.3s ease-out',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '230px',
            },
          }}
        />
      </div>
    );
  }

  return (
    <div 
      className={`bg-gradient-to-b from-[#094138] to-[#66918e] overflow-hidden ${screenShake ? 'animate-[screenShake_0.5s_ease-in-out]' : ''}`}
      style={{ 
        width: '100vw',
        height: '100svh',
        minHeight: '-webkit-fill-available',
        position: 'fixed',
        left: 0,
        top: 0,
        margin: 0,
        padding: 0,
        touchAction: 'none'
      }}
      data-name="Juego"
      onClick={handleScreenClick}
      onTouchStart={handleScreenClick}
    >
      {/* Damage Flash Overlay */}
      {damageFlash && (
        <div 
          className="fixed inset-0 pointer-events-none z-[200]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.7) 0%, rgba(185, 28, 28, 0.5) 30%, rgba(153, 27, 27, 0.3) 50%, rgba(127, 29, 29, 0.15) 70%, transparent 90%)',
            animation: 'damageFlash 0.5s ease-out'
          }}
        />
      )}
      
      {/* Magic glow overlay during transformation */}
      {animationType && (
        <div 
          className="fixed inset-0 pointer-events-none z-[150]"
          style={{
            background: animationColorTheme === 'golden'
              ? 'radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.15) 0%, transparent 60%)'
              : 'radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.12) 0%, transparent 60%)',
            animation: 'pulse 0.6s ease-in-out'
          }}
        />
      )}
      
      <div className="relative h-full w-full">
      {/* Desktop HUD - Solo visible en desktop */}
      {!isMobile && (
        <>
          {/* Exit Button */}
          <button
            onClick={exitGame}
            className="absolute bg-[#11312c] box-border content-stretch flex flex-col items-center justify-center left-[calc(50%-132px)] pb-[14px] pt-[16px] px-[25px] rounded-[21px] size-[78px] top-[32px] translate-x-[-50%] cursor-pointer hover:bg-[#1a3f39] transition-colors z-50"
          >
            <div className="size-[24px] mb-[1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPathsMenu.pbf7d180} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <p className="font-['SF_Pro',sans-serif] font-semibold leading-[22px] text-[#f3f3f4] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
              Salir
            </p>
            <div className="absolute inset-0 pointer-events-none shadow-[0px_-9px_4px_0px_inset_rgba(0,0,0,0.25)] rounded-[21px]" />
          </button>

          {/* Circular Timer (between Exit and Mode buttons) */}
          <div className="absolute left-1/2 top-[32px] translate-x-[-50%] z-50">
            <CircularTimer isActive={isImmune} />
            <CircularTimerSlow isActive={isSlowMotion} />
          </div>

          {/* Settings Button */}
          <button
            onClick={openSettings}
            disabled={gameStatus === 'menu'}
            className="absolute bg-white box-border content-stretch flex flex-col items-center justify-center left-[calc(50%+132px)] pb-[15px] pt-[15px] px-[25px] rounded-[21px] h-[78px] w-[75px] top-[32px] translate-x-[-50%] cursor-pointer hover:bg-[#e0e0e0] transition-colors z-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="size-[24px] mb-[0px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g>
                  <path d={svgPathsSettings.p3cccb600} stroke="#23252D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPathsSettings.p3737f500} stroke="#23252D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
            <p className="font-['SF_Pro',sans-serif] font-semibold leading-[22px] text-[#23252d] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
              Ajustes
            </p>
            <div className="absolute inset-0 pointer-events-none shadow-[0px_-9px_4px_0px_inset_rgba(0,0,0,0.25)] rounded-[21px]" />
          </button>

          {/* Lives or Timer Display */}
          {gameMode !== 'timer' ? (
            <div className={`absolute left-[calc(50%-166.5px)] top-[152px] z-50 ${isMobile ? 'flex flex-row flex-wrap w-[105px] gap-[0px]' : 'flex flex-row gap-[0px]'}`}>
              {[...Array(lives)].map((_, i) => (
                <div key={i} className="relative size-[35px] flex-shrink-0">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVida} />
                </div>
              ))}
            </div>
          ) : (
            <p className="absolute font-['SF_Pro',sans-serif] leading-[22px] left-[calc(50%-166.5px)] text-[#f3f3f4] text-[32px] text-nowrap top-[158px] whitespace-pre z-50" style={{ fontVariationSettings: "'wdth' 100" }}>
              {Math.floor(timerSeconds / 60)}:{String(timerSeconds % 60).padStart(2, '0')}
            </p>
          )}
          
          {/* Score */}
          <p className="absolute font-['SF_Pro',sans-serif] font-bold leading-[22px] left-[calc(50%+167.5px)] text-[#f3f3f4] text-[32px] text-nowrap text-right top-[158px] translate-x-[-100%] whitespace-pre z-50" style={{ fontVariationSettings: "'wdth' 100" }}>
            {score}
          </p>

          {/* Labels */}
          <p className="absolute font-['SF_Pro',sans-serif] font-bold leading-[22px] left-[calc(50%-166.5px)] text-[#aaae68] text-[14px] text-nowrap top-[130px] whitespace-pre z-50" style={{ fontVariationSettings: "'wdth' 100" }}>
            {gameMode === 'timer' ? 'TIEMPO' : 'VIDAS'}
          </p>
          <p className="absolute font-['SF_Pro',sans-serif] font-bold leading-[22px] left-[calc(50%+167.5px)] text-[#aaae68] text-[14px] text-nowrap text-right top-[130px] translate-x-[-100%] whitespace-pre z-50" style={{ fontVariationSettings: "'wdth' 100" }}>
            PUNTOS
          </p>
        </>
      )}

      {/* Menu Screen */}
      {gameStatus === 'menu' && (
        <div className="absolute inset-0 z-[100]">
          <Group59 onStartGame={startGame} />
        </div>
      )}

      {/* Paused Screen */}
      {gameStatus === 'paused' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-[100]">
          <div className="bg-[#1f3031] rounded-[30px] p-12 text-center shadow-2xl">
            <p className="font-['SF_Pro',sans-serif] text-[#f3f3f4] text-[48px] mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
              ⏸️ Pausa
            </p>
            <button
              onClick={() => setGameStatus('playing')}
              className="bg-[#f3f3f4] rounded-[20px] px-12 py-4 font-['SF_Pro',sans-serif] text-[#23252d] text-[24px] hover:bg-[#e0e0e0] transition-colors cursor-pointer"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Continuar
            </button>
          </div>
        </div>
      )}

      {/* Game Over Screen */}
      {gameStatus === 'gameover' && (
        <div className="absolute inset-0 z-[100]">
          <Group54 score={score} highScore={highScore} onRestart={startGame} />
        </div>
      )}

      {/* Game Elements */}
      {(gameStatus === 'playing' || gameStatus === 'paused' || gameStatus === 'gameover') && (
        <>
          {/* Foods */}
          {foods.map((food, index) => {
            const foodSize = getGemSize(gameWidth);
            const offset = (cellSize - foodSize) / 2; // Centrar en la celda
            const topOffset = isMobile ? MOBILE_TOP_OFFSET : TOP_OFFSET;
            return (
              <div
                key={`food-${index}`}
                className="absolute"
                style={{
                  width: `${foodSize}px`,
                  height: `${foodSize}px`,
                  left: `${food.position.x * cellSize + offset}px`,
                  top: `${food.position.y * cellSize + topOffset + offset}px`,
                  zIndex: 1
                }}
              >
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={food.pattern} />
              </div>
            );
          })}

          {/* Life Bonus */}
          {lifeBonus && (
            <div
              className="absolute"
              style={{
                width: `${cellSize * 0.899}px`, // Reducido 10% adicional: 0.99875 * 0.9 = 0.899
                height: `${cellSize * 0.908}px`, // Reducido 10% adicional: 1.009375 * 0.9 = 0.908
                left: `${lifeBonus.position.x * cellSize}px`,
                top: `${lifeBonus.position.y * cellSize + (isMobile ? MOBILE_TOP_OFFSET : TOP_OFFSET)}px`,
                zIndex: 1,
                animation: 'float-subtle 2.5s ease-in-out infinite'
              }}
            >
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVida} />
            </div>
          )}

          {/* Star Bonus */}
          {starBonus && (
            <div
              className="absolute"
              style={{
                width: `${cellSize * 1.216125}px`, // Aumentado 15%: 1.0575 * 1.15 = 1.216125
                height: `${cellSize * 1.2290625}px`, // Aumentado 15%: 1.06875 * 1.15 = 1.2290625
                left: `${starBonus.position.x * cellSize}px`,
                top: `${starBonus.position.y * cellSize + (isMobile ? MOBILE_TOP_OFFSET : TOP_OFFSET)}px`,
                zIndex: 1,
                animation: 'float-subtle 2.5s ease-in-out infinite'
              }}
            >
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgEstrella} />
            </div>
          )}

          {/* Bomb Bonus */}
          {bombBonus && (
            <div
              className="absolute"
              style={{
                width: `${cellSize * 1.216125}px`, // Aumentado 15%: 1.0575 * 1.15 = 1.216125
                height: `${cellSize * 1.2290625}px`, // Aumentado 15%: 1.06875 * 1.15 = 1.2290625
                left: `${bombBonus.position.x * cellSize}px`,
                top: `${bombBonus.position.y * cellSize + (isMobile ? MOBILE_TOP_OFFSET : TOP_OFFSET)}px`,
                zIndex: 1,
                animation: 'float-subtle 2.5s ease-in-out infinite'
              }}
            >
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgExplosivo} />
            </div>
          )}

          {/* Cactus Obstacles - first appears at 120s, then every 60s after that */}
          {cactuses.map((cactus, index) => (
            <div
              key={`cactus-${index}`}
              className="absolute"
              style={{
                width: `${cellSize * 1.8}px`,
                height: `${cellSize * 1.8}px`,
                left: `${cactus.position.x * cellSize - cellSize * (1.8 - 1) / 2}px`,
                top: `${cactus.position.y * cellSize - cellSize * (1.8 - 1) / 2 + (isMobile ? MOBILE_TOP_OFFSET : TOP_OFFSET)}px`,
                zIndex: 1
              }}
            >
              <img alt="Cactus obstacle" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCactus} />
            </div>
          ))}

          {/* Hole - DEADLY obstacle that appears at 240s */}
          {hole && (
            <div
              className="absolute"
              style={{
                width: `${cellSize * 1.8}px`,
                height: `${cellSize * 1.8}px`,
                left: `${hole.position.x * cellSize - cellSize * (1.8 - 1) / 2}px`,
                top: `${hole.position.y * cellSize - cellSize * (1.8 - 1) / 2 + (isMobile ? MOBILE_TOP_OFFSET : TOP_OFFSET)}px`,
                zIndex: 1
              }}
            >
              <img alt="Deadly hole" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHole} />
            </div>
          )}

          {/* Clock Bonus */}
          {clockBonus && (
            <div
              className="absolute"
              style={{
                width: `${cellSize * 1.3455}px`, // Aumentado 30%: 1.035 * 1.30 = 1.3455
                height: `${cellSize * 1.3455}px`, // Aumentado 30%: 1.035 * 1.30 = 1.3455
                left: `${clockBonus.position.x * cellSize}px`,
                top: `${clockBonus.position.y * cellSize + (isMobile ? MOBILE_TOP_OFFSET : TOP_OFFSET)}px`,
                zIndex: 1,
                animation: 'float-subtle 2.5s ease-in-out infinite'
              }}
            >
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgReloj} />
            </div>
          )}

          {/* Bottle Bonus */}
          {bottleBonus && (
            <div
              className="absolute"
              style={{
                width: `${cellSize * 1.035}px`,
                height: `${cellSize * 1.035}px`,
                left: `${bottleBonus.position.x * cellSize}px`,
                top: `${bottleBonus.position.y * cellSize + (isMobile ? MOBILE_TOP_OFFSET : TOP_OFFSET)}px`,
                zIndex: 1,
                animation: 'float-subtle 2.5s ease-in-out infinite'
              }}
            >
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBotella} />
            </div>
          )}

          {/* Cookie Bonus */}
          {cookieBonus && (
            <div
              className="absolute"
              style={{
                width: `${cellSize * 2.07}px`,
                height: `${cellSize * 2.07}px`,
                left: `${cookieBonus.position.x * cellSize - cellSize * (2.07 - 1) / 2}px`,
                top: `${cookieBonus.position.y * cellSize - cellSize * (2.07 - 1) / 2 + (isMobile ? MOBILE_TOP_OFFSET : TOP_OFFSET)}px`,
                zIndex: 1,
                animation: 'float-subtle 2.5s ease-in-out infinite'
              }}
            >
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGalleta} />
            </div>
          )}

          {/* Snake */}
          {snake.map((segment, index) => {
            const pos = segment.position;
            
            if (index === 0) {
              // Head - use correct direction image with current expression and tongue frame
              // Use small head if bottle is active, large if cookie is active
              const headImage = isCookieActive
                ? getHeadImageLarge(directionRef.current, expression)
                : isBottleActive 
                  ? getHeadImageSmall(directionRef.current, expression)
                  : getHeadImage(directionRef.current, expression, tongueFrame);
              
              // Wave animation per-segment
              const hasWaveAnimation = segmentScales[index] !== undefined && animationType !== null;
              const waveDelay = index * 40; // 40ms delay per segment for wave effect
              
              return (
                <div
                  key={`snake-head`}
                  className="absolute"
                  style={{
                    left: `${pos.x * cellSize}px`,
                    top: `${pos.y * cellSize + (isMobile ? MOBILE_TOP_OFFSET : TOP_OFFSET)}px`,
                    width: `${cellSize}px`,
                    height: `${cellSize}px`,
                    zIndex: 10 + snake.length - index,
                    filter: hasWaveAnimation 
                      ? (animationColorTheme === 'golden'
                          ? `drop-shadow(0 0 12px rgba(255, 215, 0, 0.9)) brightness(1.4)` 
                          : `drop-shadow(0 0 10px rgba(0, 255, 255, 0.8)) brightness(1.3)`)
                      : undefined,
                    animation: hasWaveAnimation 
                      ? (animationType === 'shrink'
                          ? `pulseWave 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${waveDelay}ms forwards`
                          : `pulseWave 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${waveDelay}ms forwards`)
                      : undefined
                  }}
                >
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={headImage} />
                  {/* Sparkles overlay when immune (contenta or porComer states) */}
                  {isImmune && (
                    <img 
                      alt="" 
                      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                      src={imgBrillos}
                      style={{
                        animation: 'float-subtle 2.5s ease-in-out infinite',
                        mixBlendMode: 'normal'
                      }}
                    />
                  )}
                </div>
              );
            } else if (index === snake.length - 1) {
              // Tail - use correct direction image based on previous segment
              const prevSegment = snake[index - 1].position;
              const tailImage = getTailImage(pos, prevSegment, gridCols, gridRows, isBottleActive, isCookieActive);
              
              // Wave animation per-segment
              const hasWaveAnimation = segmentScales[index] !== undefined && animationType !== null;
              const waveDelay = index * 40; // 40ms delay per segment for wave effect
              
              return (
                <div
                  key={`snake-tail`}
                  className="absolute"
                  style={{
                    left: `${pos.x * cellSize}px`,
                    top: `${pos.y * cellSize + (isMobile ? MOBILE_TOP_OFFSET : TOP_OFFSET)}px`,
                    width: `${cellSize}px`,
                    height: `${cellSize}px`,
                    zIndex: 10 + snake.length - index,
                    filter: hasWaveAnimation 
                      ? (animationColorTheme === 'golden'
                          ? `drop-shadow(0 0 12px rgba(255, 215, 0, 0.9)) brightness(1.4)` 
                          : `drop-shadow(0 0 10px rgba(0, 255, 255, 0.8)) brightness(1.3)`)
                      : undefined,
                    animation: hasWaveAnimation 
                      ? (animationType === 'shrink'
                          ? `pulseWave 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${waveDelay}ms forwards`
                          : `pulseWave 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${waveDelay}ms forwards`)
                      : undefined
                  }}
                >
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={tailImage} />
                </div>
              );
            } else {
              // Body
              const prev = snake[index - 1].position;
              const next = snake[index + 1].position;
              const cornerCheck = isCorner(prev, pos, next, gridCols, gridRows);
              
              // Use small corner if bottle is active, large if cookie is active
              const cornerImage = cornerCheck 
                ? (isCookieActive 
                    ? getCornerImageLarge(prev, pos, next, gridCols, gridRows, segment.pattern)
                    : isBottleActive 
                      ? getCornerImageSmall(prev, pos, next, gridCols, gridRows, segment.pattern) 
                      : getCornerImage(prev, pos, next, gridCols, gridRows, segment.pattern)) || null
                : null;
              
              // Wave animation per-segment
              const hasWaveAnimation = segmentScales[index] !== undefined && animationType !== null;
              const waveDelay = index * 40; // 40ms delay per segment for wave effect
              
              return (
                <div
                  key={`snake-${index}`}
                  className="absolute"
                  style={{
                    left: `${pos.x * cellSize}px`,
                    top: `${pos.y * cellSize + (isMobile ? MOBILE_TOP_OFFSET : TOP_OFFSET)}px`,
                    width: `${cellSize}px`,
                    height: `${cellSize}px`,
                    zIndex: 10 + snake.length - index,
                    filter: hasWaveAnimation 
                      ? (animationColorTheme === 'golden'
                          ? `drop-shadow(0 0 12px rgba(255, 215, 0, 0.9)) brightness(1.4)` 
                          : `drop-shadow(0 0 10px rgba(0, 255, 255, 0.8)) brightness(1.3)`)
                      : undefined,
                    animation: hasWaveAnimation 
                      ? (animationType === 'shrink'
                          ? `pulseWave 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${waveDelay}ms forwards`
                          : `pulseWave 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${waveDelay}ms forwards`)
                      : undefined
                  }}
                >
                  <SnakeBodySegment 
                    pattern={segment.pattern} 
                    prev={prev}
                    current={pos}
                    next={next}
                    cornerImage={cornerImage}
                    cellSize={cellSize}
                    isBottleActive={isBottleActive}
                    isCookieActive={isCookieActive}
                  />
                </div>
              );
            }
          })}
          
          {/* Magical particles for size change effect */}
          {magicParticles.map(particle => {
            return (
              <div
                key={particle.id}
                className="absolute pointer-events-none"
                style={{
                  left: `${particle.x}px`,
                  top: `${particle.y}px`,
                  width: '3px', // Smaller particles for dust effect
                  height: '3px',
                  borderRadius: '50%',
                  backgroundColor: particle.color,
                  boxShadow: `0 0 4px ${particle.color}, 0 0 8px ${particle.color}`, // Softer glow
                  zIndex: 1000,
                  animation: `magicParticle 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
                  animationDelay: `${particle.delay}ms`,
                  opacity: 0,
                  '--particle-x': `${particle.randomX}px`,
                  '--particle-y': `${particle.randomY}px`
                } as React.CSSProperties}
              />
            );
          })}
        </>
      )}

      {isMobile && gameStatus === 'playing' && (
        <MobileGameUI 
          lives={lives}
          score={score}
          gameMode={gameMode}
          timerSeconds={timerSeconds}
          isImmune={isImmune}
          isSlowMotion={isSlowMotion}
          onDirectionChange={handleMobileDirectionChange}
          onExit={exitGame}
          onToggleMode={toggleSpeed}
          disabled={gameStatus === 'menu'}
        />
      )}
      
      {/* Toast notifications */}
      <Toaster 
        position="bottom-center" 
        toastOptions={{
          className: 'fixed bottom-[40px] left-1/2 -translate-x-1/2 text-center',
          style: {
            background: '#19564D',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            fontSize: '18px',
            padding: '16px 32px',
            textAlign: 'center',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            zIndex: 60,
            animation: 'slideUp 0.3s ease-out',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '230px',
          },
        }}
      />
      </div>
    </div>
  );
}