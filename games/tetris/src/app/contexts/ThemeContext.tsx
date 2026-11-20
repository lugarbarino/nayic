import React, { createContext, useContext, useState, ReactNode } from 'react';

// Importar componentes de bloques del tema Colores
import Color1 from '@/imports/Color1';
import Color2 from '@/imports/Color2';
import Color3 from '@/imports/Color3';
import Color4 from '@/imports/Color4';
import Color5 from '@/imports/Color5';
import Color6 from '@/imports/Color6';
import Color7 from '@/imports/Color7';
import Color8 from '@/imports/Color8';
import Color9 from '@/imports/Color9';

// Importar componentes de bloques del tema Retro
import Group2 from '@/imports/Group2';
import Group3 from '@/imports/Group3';
import Group4 from '@/imports/Group4';
import Group5 from '@/imports/Group5';
import Group6 from '@/imports/Group6';
import Group7 from '@/imports/Group7';
import Group8 from '@/imports/Group8';
import Group9 from '@/imports/Group9';
import Group10 from '@/imports/Group10';

// Importar bloques del tema Naturaleza
import naturalezaBlock1 from 'figma:asset/de25668c4493ad89aa3fd2dee4568989d012c56d.png';
import naturalezaBlock2 from 'figma:asset/35ff3c97f4bc3029eb37d87d1cbd4607f980e808.png';
import naturalezaBlock3 from 'figma:asset/23c759287d8a30337dd30942f2774bd3788eebfa.png';
import naturalezaBlock4 from 'figma:asset/dbba25b008012287483cde25429cf405932ebe58.png';
import naturalezaBlock5 from 'figma:asset/5d2a3bfe760e5919005d3e9ae57dc6889506d35f.png';
import naturalezaBlock6 from 'figma:asset/424a17a59e0ef8a9d51c46f9064446fbc358f2b0.png';
import naturalezaBlock7 from 'figma:asset/386a1eb78d1a6ca5a5579101aeeadc64b9b9bad6.png';
import naturalezaBlock8 from 'figma:asset/7ad0de6163cb83e53d86d15ac7c35b71b517ad0e.png';
import naturalezaBlock9 from 'figma:asset/15d6a1c81a1c6e26b52935a75a0c943c97cd64fe.png';
import naturalezaBlock10 from 'figma:asset/807490c3ea91146cf5d07308e163ed2d331e376a.png';
import naturalezaBlock11 from 'figma:asset/ff54fa5ead8d1c7e003186b970e754ef188761ca.png';
import naturalezaBlock12 from 'figma:asset/dc5f5f1b09b30fd02fde6dcf4dc1c5772fa48856.png';

// Importar bloques del tema Rojo
import rojoBlock1 from 'figma:asset/424a17a59e0ef8a9d51c46f9064446fbc358f2b0.png';
import rojoBlock2 from 'figma:asset/146250fdb6bb38d5a14798d35eedf56bd954f2a7.png';
import rojoBlock3 from 'figma:asset/43d0e839b88260b7402d81fb620a52065f44852f.png';
import rojoBlock4 from 'figma:asset/92e2b7fc5c6382898b74cf72e7d44d563f008562.png';
import rojoBlock5 from 'figma:asset/42649ceecb51dec45c0d761c3c86950ee0a7f6cf.png';
import rojoBlock6 from 'figma:asset/b3bb3fd871075a0b8a9ce72bffe0121afc67bf1e.png';
import rojoBlock7 from 'figma:asset/12b22b4919a42869388ab363fd1a5659c0ee54fa.png';
import rojoBlock8 from 'figma:asset/b1183fff7a2f7323a91ed88f5ae8c6df4a3ad84c.png';
import rojoBlock9 from 'figma:asset/f917bc77b18f91148a03ea377cb720459dc7fcc2.png';
import rojoBlock10 from 'figma:asset/1e0fafd3412c7e5e802fdd7067cf2c887113d762.png';
import rojoBlock11 from 'figma:asset/356ad4cca1a847edd90ed06faf19dea72f7d8cc9.png';
import rojoBlock12 from 'figma:asset/c2af7e0a951ded5b60e017457e9ec3cf14f98e31.png';

// Importar bloques del tema Rocas
import rocasBlock1 from 'figma:asset/79dd60be7a191d0af01e3bd2a2f5329c0006590c.png';
import rocasBlock2 from 'figma:asset/322a7098d9b0645af7bc51ef2fa6be52287db018.png';
import rocasBlock3 from 'figma:asset/3132a756559d14f11a6f59128a6bcde7395947fe.png';
import rocasBlock4 from 'figma:asset/1e0fafd3412c7e5e802fdd7067cf2c887113d762.png';
import rocasBlock5 from 'figma:asset/05f6b335666da0734ad622e04f55ec5f6fe10d5e.png';
import rocasBlock6 from 'figma:asset/92e2b7fc5c6382898b74cf72e7d44d563f008562.png';
import rocasBlock7 from 'figma:asset/12b22b4919a42869388ab363fd1a5659c0ee54fa.png';
import rocasBlock8 from 'figma:asset/bb42fafdb510b4d053b83c94119caf5b5f034033.png';
import rocasBlock9 from 'figma:asset/9ebeb7f6b4bff7389aba671da848d7b6c8425e33.png';
import rocasBlock10 from 'figma:asset/76ef7dadf562a823f9ccffad15e436ebbab471cc.png';
import rocasBlock11 from 'figma:asset/26a57375d07da89d424a990e5cac19930f47f1b3.png';
import rocasBlock12 from 'figma:asset/3b8f9c5570f0b2c5daa007d4fcfc42d293cac85d.png';

// Importar bloques del tema Dulces
import dulcesBlock1 from 'figma:asset/42649ceecb51dec45c0d761c3c86950ee0a7f6cf.png';
import dulcesBlock2 from 'figma:asset/7a8dcb50205710af8946ecbaac775fbccea880a1.png';
import dulcesBlock3 from 'figma:asset/73e096f9e0c30a1fbd62b81c6632f1b4f6bf7b10.png';
import dulcesBlock4 from 'figma:asset/c3d26f4e9eb4636a29efb69b227ac670b4b15340.png';
import dulcesBlock5 from 'figma:asset/9e939f009dc34934df2efa6c45c69fc4dd927e4d.png';
import dulcesBlock6 from 'figma:asset/3cc1b2de022c5ec861bbaef20978c401d18fef1f.png';
import dulcesBlock7 from 'figma:asset/6d2bd7050a8a22694c69c05323d05fa9a4e84252.png';
import dulcesBlock8 from 'figma:asset/ff8847819de3906a625907cad4433c888ed8165f.png';
import dulcesBlock9 from 'figma:asset/a08d3d44656337631a8cca2c8c8b956859844872.png';
import dulcesBlock10 from 'figma:asset/f917bc77b18f91148a03ea377cb720459dc7fcc2.png';
import dulcesBlock11 from 'figma:asset/08cfd0571f709502365b3c232b021ed09dc9d9a3.png';
import dulcesBlock12 from 'figma:asset/be8bf24a18cff8f08afcac5d5ab179ebe2c6763c.png';

export type ThemeType = 'colores' | 'retro' | 'naturaleza' | 'rojo' | 'rocas' | 'dulces';

export interface Theme {
  id: ThemeType;
  name: string;
  blocks: (string | React.ComponentType)[];
}

export const themes: Record<ThemeType, Theme> = {
  colores: {
    id: 'colores',
    name: 'Colores',
    blocks: [
      Color1,
      Color2,
      Color3,
      Color4,
      Color5,
      Color6,
      Color7,
      Color8,
      Color9,
    ],
  },
  retro: {
    id: 'retro',
    name: 'Retro',
    blocks: [
      Group2,
      Group3,
      Group4,
      Group5,
      Group6,
      Group7,
      Group8,
      Group9,
      Group10,
    ],
  },
  naturaleza: {
    id: 'naturaleza',
    name: 'Naturaleza',
    blocks: [
      naturalezaBlock1,
      naturalezaBlock2,
      naturalezaBlock3,
      naturalezaBlock4,
      naturalezaBlock5,
      naturalezaBlock6,
      naturalezaBlock7,
      naturalezaBlock8,
      naturalezaBlock9,
      naturalezaBlock10,
      naturalezaBlock11,
      naturalezaBlock12,
    ],
  },
  rojo: {
    id: 'rojo',
    name: 'Rojo',
    blocks: [
      rojoBlock1,
      rojoBlock2,
      rojoBlock3,
      rojoBlock4,
      rojoBlock5,
      rojoBlock6,
      rojoBlock7,
      rojoBlock8,
      rojoBlock9,
      rojoBlock10,
      rojoBlock11,
      rojoBlock12,
    ],
  },
  rocas: {
    id: 'rocas',
    name: 'Rocas',
    blocks: [
      rocasBlock1,
      rocasBlock2,
      rocasBlock3,
      rocasBlock4,
      rocasBlock5,
      rocasBlock6,
      rocasBlock7,
      rocasBlock8,
      rocasBlock9,
      rocasBlock10,
      rocasBlock11,
      rocasBlock12,
    ],
  },
  dulces: {
    id: 'dulces',
    name: 'Dulces',
    blocks: [
      dulcesBlock1,
      dulcesBlock2,
      dulcesBlock3,
      dulcesBlock4,
      dulcesBlock5,
      dulcesBlock6,
      dulcesBlock7,
      dulcesBlock8,
      dulcesBlock9,
      dulcesBlock10,
      dulcesBlock11,
      dulcesBlock12,
    ],
  },
};

interface ThemeContextType {
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  getThemeBlocks: () => (string | React.ComponentType)[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(() => {
    const saved = localStorage.getItem('tetris-theme');
    // Validar que el tema guardado sea válido
    const validThemes: ThemeType[] = ['colores', 'retro', 'naturaleza', 'rojo', 'rocas', 'dulces'];
    if (saved && validThemes.includes(saved as ThemeType)) {
      return saved as ThemeType;
    }
    return 'colores';
  });

  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
    localStorage.setItem('tetris-theme', theme);
  };

  const getThemeBlocks = () => {
    // Validación adicional por seguridad
    if (!themes[currentTheme]) {
      console.error(`Theme "${currentTheme}" not found, using default "colores"`);
      return themes.colores.blocks;
    }
    return themes[currentTheme].blocks;
  };

  return (
    <ThemeContext.Provider
      value={{ currentTheme, setTheme, getThemeBlocks }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}