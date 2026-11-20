// LILA TOP (5 items - estalactitas)
import ceiling0 from 'figma:asset/46b8a0c41f5075d70e8e96ddb811b1307b2a1ceb.png';
import ceiling1 from 'figma:asset/f91bb69ceb327e74f1937d3082d4e9b94efa7dbc.png';
import ceiling2 from 'figma:asset/d333b72ceae820eb71865612dce2dd8848b5320c.png';
import ceiling3 from 'figma:asset/1305e929753bd1d80e0815f21332fb83601108d0.png';
import ceiling4 from 'figma:asset/424201c3d0e4e9374dfdddda6b372b2ae16147fe.png';

// ROJO TOP (5 items - estalactitas)
import ceilingRed0 from 'figma:asset/37353b1b1c73b6468e333bd192b8fe098d2e4244.png';
import ceilingRed1 from 'figma:asset/64d0331ed36612165870b3dd6bb015efffc58a3e.png';
import ceilingRed2 from 'figma:asset/7c272754ae4cf56738c3e6c562098e02ad05ffac.png';
import ceilingRed3 from 'figma:asset/5e40852b9e9e6553b513c73dc40fba93a55a4d7c.png';
import ceilingRed4 from 'figma:asset/596cae1c304f45e7a214e627e644543786df6b3a.png';

// AZUL TOP (5 items - estalactitas)
import ceilingBlue0 from 'figma:asset/bc6f7c944a1879d13e1d30a952df61ca28796a57.png';
import ceilingBlue1 from 'figma:asset/cd9c58eb62837c1d6274a8c76d5264f65117ce62.png';
import ceilingBlue2 from 'figma:asset/e734848b381d800ac7fd53b91645c4bf460a6dcd.png';
import ceilingBlue3 from 'figma:asset/46340b715140b5f8488737b3160d8b697a9f177c.png';
import ceilingBlue4 from 'figma:asset/8033ec4efd151b9c1a8bfcd27a4ca117ef8463e7.png';

import { useRef } from 'react';

interface CeilingObstacleProps {
  x: number;
  rockType: number; // 0-4 (5 tipos de estalactitas)
  colorRegion?: 'lila' | 'red' | 'blue'; // Región de color
  onLoad?: (width: number, height: number) => void;
}

const ceilingImagesLila = [ceiling0, ceiling1, ceiling2, ceiling3, ceiling4];
const ceilingImagesRed = [ceilingRed0, ceilingRed1, ceilingRed2, ceilingRed3, ceilingRed4];
const ceilingImagesBlue = [ceilingBlue0, ceilingBlue1, ceilingBlue2, ceilingBlue3, ceilingBlue4];

const ceilingImagesByRegion = {
  lila: ceilingImagesLila,
  red: ceilingImagesRed,
  blue: ceilingImagesBlue,
};

export default function CeilingObstacle({ x, rockType, colorRegion = 'lila', onLoad }: CeilingObstacleProps) {
  const ceilingImages = ceilingImagesByRegion[colorRegion];
  const ceilingImage = ceilingImages[rockType % ceilingImages.length];
  const imgRef = useRef<HTMLImageElement>(null);
  const hasCalledOnLoad = useRef(false);

  // Detectar si es mobile o desktop
  const isMobile = window.innerWidth < 768;
  const scale = isMobile ? 0.25 : 0.3; // Mobile: más grandes, Desktop: 70% reducción
  const topPosition = isMobile ? '35px' : '40px'; // Mobile: pegado al techo escalado 50%, Desktop: 40px

  const handleImageLoad = () => {
    if (imgRef.current && onLoad && !hasCalledOnLoad.current) {
      hasCalledOnLoad.current = true;
      const naturalWidth = imgRef.current.naturalWidth;
      const naturalHeight = imgRef.current.naturalHeight;
      
      // Escalar según dispositivo
      const scaledWidth = naturalWidth * scale;
      const scaledHeight = naturalHeight * scale;
      
      // Aplicar las dimensiones escaladas a la imagen
      imgRef.current.style.width = `${scaledWidth}px`;
      imgRef.current.style.height = `${scaledHeight}px`;
      
      onLoad(scaledWidth, scaledHeight);
    }
  };

  return (
    <img
      ref={imgRef}
      src={ceilingImage}
      alt="Stalactite"
      className="absolute"
      onLoad={handleImageLoad}
      style={{
        left: `${x}px`,
        top: topPosition,
        objectFit: 'contain',
      }}
    />
  );
}