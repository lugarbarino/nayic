// Componente para precargar todos los assets del juego
// Importa y renderiza todas las imágenes de forma invisible

// OBSTÁCULOS DE SUELO (LILA) - 7 items
import rock0 from 'figma:asset/c9b246681a424b1b6ad8a2ec844ce4cedafa3481.png';
import rock1 from 'figma:asset/20a2462bcccac36bd0a85f2d18d1be55d6b9d1f3.png';
import rock2 from 'figma:asset/5d33d2d37adec7c2c1dbf4f781c2bdba90319643.png';
import rock3 from 'figma:asset/2ebbe8cd1c23c480f3b8b668e587c6a9aa055866.png';
import rock4 from 'figma:asset/473d2b76c980fee206607b085136c2a40b665cf4.png';
import rock5 from 'figma:asset/543ae687dc43201f8c39278d8cf7f9e56e5986e6.png';
import rock6 from 'figma:asset/b2fcbcc9bda499e7b38adb7454bacd11608206ec.png';

// OBSTÁCULOS DE SUELO (ROJO) - 7 items
import rockRed0 from 'figma:asset/c1b8bcf34b08599cc37e3fa1426b6163576489ae.png';
import rockRed1 from 'figma:asset/97cbcdf5162e4c58a9b039fdbdcd25f5eb918253.png';
import rockRed2 from 'figma:asset/7143072ea3e4d504ba08732c6a86f0a39fccca47.png';
import rockRed3 from 'figma:asset/d4dde6fba3af6e5b7648e25560bc2b5feeecef69.png';
import rockRed4 from 'figma:asset/8f43d9809d732b781ebeb35b2e5b86c5097cdb73.png';
import rockRed5 from 'figma:asset/15d18032e3fd8d0cf91c2f611037e4b6d2a20398.png';
import rockRed6 from 'figma:asset/5cffd6a3f493e981fb1756bc23e1b1cc6100d770.png';

// OBSTÁCULOS DE SUELO (AZUL) - 7 items
import rockBlue0 from 'figma:asset/fe047a2c72452536305e365fe6898cdae72ac2d6.png';
import rockBlue1 from 'figma:asset/159978abb84eaba016bd9d7d986062bef5cee332.png';
import rockBlue2 from 'figma:asset/5c3e41ca45a142c3d87e397d9160b9de76890915.png';
import rockBlue3 from 'figma:asset/c9c41c50b7f0f856b1ded36d52d89a1775ed2e77.png';
import rockBlue4 from 'figma:asset/f58c8b6fc8db6f5f4de4dbb07a31a88ba3dcfb84.png';
import rockBlue5 from 'figma:asset/01ec7ca07869a33ba033e6fa2dde0bae4c81e16d.png';
import rockBlue6 from 'figma:asset/43e90bb3e84e4e5ce49f05a0f2e3bcb066f81ce1.png';

// OBSTÁCULOS DE TECHO (LILA) - 5 items
import ceiling0 from 'figma:asset/46b8a0c41f5075d70e8e96ddb811b1307b2a1ceb.png';
import ceiling1 from 'figma:asset/f91bb69ceb327e74f1937d3082d4e9b94efa7dbc.png';
import ceiling2 from 'figma:asset/d333b72ceae820eb71865612dce2dd8848b5320c.png';
import ceiling3 from 'figma:asset/1305e929753bd1d80e0815f21332fb83601108d0.png';
import ceiling4 from 'figma:asset/424201c3d0e4e9374dfdddda6b372b2ae16147fe.png';

// OBSTÁCULOS DE TECHO (ROJO) - 5 items
import ceilingRed0 from 'figma:asset/37353b1b1c73b6468e333bd192b8fe098d2e4244.png';
import ceilingRed1 from 'figma:asset/64d0331ed36612165870b3dd6bb015efffc58a3e.png';
import ceilingRed2 from 'figma:asset/7c272754ae4cf56738c3e6c562098e02ad05ffac.png';
import ceilingRed3 from 'figma:asset/5e40852b9e9e6553b513c73dc40fba93a55a4d7c.png';
import ceilingRed4 from 'figma:asset/596cae1c304f45e7a214e627e644543786df6b3a.png';

// OBSTÁCULOS DE TECHO (AZUL) - 5 items
import ceilingBlue0 from 'figma:asset/bc6f7c944a1879d13e1d30a952df61ca28796a57.png';
import ceilingBlue1 from 'figma:asset/cd9c58eb62837c1d6274a8c76d5264f65117ce62.png';
import ceilingBlue2 from 'figma:asset/e734848b381d800ac7fd53b91645c4bf460a6dcd.png';
import ceilingBlue3 from 'figma:asset/46340b715140b5f8488737b3160d8b697a9f177c.png';
import ceilingBlue4 from 'figma:asset/8033ec4efd151b9c1a8bfcd27a4ca117ef8463e7.png';

// ROCAS FLOTANTES (LILA) - 6 items
import floating0 from 'figma:asset/5d867a3a86309ef4d40f5c6d5d4a1a0bea0c9944.png';
import floating1 from 'figma:asset/224ce23df3f9a7aebda018afcef0a3875f15c391.png';
import floating2 from 'figma:asset/a3ec01593787c6099fec5738ca368caa7fbeb3b0.png';
import floating3 from 'figma:asset/7056ce1bfc9eaa4bb99b837b77dac72cff491f3d.png';
import floating4 from 'figma:asset/532edc467cd5ac3d2f3aee5aa0bc8d3691cf6c29.png';
import floating5 from 'figma:asset/b49d0e88d33da2385dbc575a0242f0bd6c474268.png';

// ROCAS FLOTANTES (ROJO) - 6 items
import floatingRed0 from 'figma:asset/98708f836fe07d4c9426879dcce156c174cbb85e.png';
import floatingRed1 from 'figma:asset/e421e27a7468596895d74d0e330506fbf9b659df.png';
import floatingRed2 from 'figma:asset/a2c35b0a622565b40c45fedb3695043ab9f11a37.png';
import floatingRed3 from 'figma:asset/8d9f8508c4542ec9d5913d37fd46ead1cd340007.png';
import floatingRed4 from 'figma:asset/c5ce90ac055113477baacbb724ad46b3529cf122.png';
import floatingRed5 from 'figma:asset/80b7c0b076bd14590c54ef561254c253a9318632.png';

// ROCAS FLOTANTES (AZUL) - 6 items
import floatingBlue0 from 'figma:asset/5cb91bc098334af68a697f5712043c95787cb17d.png';
import floatingBlue1 from 'figma:asset/ef7b123fdcd0d258af5006dc9caee8e2afc9ef05.png';
import floatingBlue2 from 'figma:asset/af0f13c717f89f86e1cd35d95b2d51a07458febc.png';
import floatingBlue3 from 'figma:asset/af4a84e0ffe93b111679e5d6c55db194b993a396.png';
import floatingBlue4 from 'figma:asset/1bcbc7e6c3b5aa855e39a962ec15116d79471349.png';
import floatingBlue5 from 'figma:asset/20c82096764a37aff5d7fdfd382aa3456c7973fe.png';

// POWER-UPS Y ENEMIGOS
import heartImage from 'figma:asset/00f936498c771fab0c5cfe6ab4ed0f01bd42a3d6.png';
import crystal1 from 'figma:asset/3ef15fa5e6622e57f164d473de6bb386f80720bd.png';
import crystal2 from 'figma:asset/dd93047c8bca8ee5cb50f61d3fee10f6f96a25e7.png';
import starImage from 'figma:asset/1aa3e30802877b4e82d103f2b13de0fe711faa07.png';
import batFrame1 from 'figma:asset/853f62850fa8d8225c4888467e70fb11aceed0c1.png';
import batFrame2 from 'figma:asset/c637fc0c766c868dbe53a8741228226018514746.png';

import { useEffect, useState, useRef } from 'react';

const ALL_ASSETS = [
  rock0, rock1, rock2, rock3, rock4, rock5, rock6,
  rockRed0, rockRed1, rockRed2, rockRed3, rockRed4, rockRed5, rockRed6,
  rockBlue0, rockBlue1, rockBlue2, rockBlue3, rockBlue4, rockBlue5, rockBlue6,
  ceiling0, ceiling1, ceiling2, ceiling3, ceiling4,
  ceilingRed0, ceilingRed1, ceilingRed2, ceilingRed3, ceilingRed4,
  ceilingBlue0, ceilingBlue1, ceilingBlue2, ceilingBlue3, ceilingBlue4,
  floating0, floating1, floating2, floating3, floating4, floating5,
  floatingRed0, floatingRed1, floatingRed2, floatingRed3, floatingRed4, floatingRed5,
  floatingBlue0, floatingBlue1, floatingBlue2, floatingBlue3, floatingBlue4, floatingBlue5,
  heartImage, crystal1, crystal2, starImage, batFrame1, batFrame2
];

interface AssetPreloaderProps {
  onProgress?: (loaded: number, total: number) => void;
  onComplete?: () => void;
}

export default function AssetPreloader({ onProgress, onComplete }: AssetPreloaderProps) {
  const [loadedCount, setLoadedCount] = useState(0);
  const totalAssets = ALL_ASSETS.length;
  const loadedRef = useRef(0);
  const completedRef = useRef(false);
  
  useEffect(() => {
    // Timeout de seguridad: si no carga en 5 segundos, continuar de todas formas
    const timeout = setTimeout(() => {
      if (!completedRef.current) {
        console.log('Loading timeout - proceeding anyway');
        completedRef.current = true;
        if (onComplete) {
          onComplete();
        }
      }
    }, 5000);
    
    return () => clearTimeout(timeout);
  }, [onComplete]);
  
  useEffect(() => {
    // Actualizar progreso cuando cambia loadedCount
    if (onProgress) {
      onProgress(loadedCount, totalAssets);
    }
    
    // Completar cuando todos se hayan cargado
    if (loadedCount >= totalAssets && !completedRef.current && onComplete) {
      completedRef.current = true;
      setTimeout(() => onComplete(), 200);
    }
  }, [loadedCount, totalAssets, onProgress, onComplete]);
  
  const handleImageLoad = () => {
    // Usar setTimeout para evitar actualizar estado durante render
    setTimeout(() => {
      loadedRef.current++;
      setLoadedCount(loadedRef.current);
    }, 0);
  };
  
  const handleImageError = () => {
    // Incluso si falla, contar como cargado para no bloquear
    handleImageLoad();
  };

  // Renderizar todas las imágenes de forma invisible para forzar la carga
  return (
    <div className="fixed -left-[9999px] -top-[9999px] pointer-events-none opacity-0">
      {ALL_ASSETS.map((asset, index) => (
        <img 
          key={index} 
          src={asset} 
          alt="" 
          loading="eager"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      ))}
    </div>
  );
}