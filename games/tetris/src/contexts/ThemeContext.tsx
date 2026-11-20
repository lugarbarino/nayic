import React, { createContext, useContext, useState, ReactNode } from 'react';

// Importar componentes de bloques del tema Colores
import Color1 from '../bloques/colores/Color1';
import Color2 from '../bloques/colores/Color2';
import Color3 from '../bloques/colores/Color3';
import Color4 from '../bloques/colores/Color4';
import Color5 from '../bloques/colores/Color5';
import Color6 from '../bloques/colores/Color6';
import Color7 from '../bloques/colores/Color7';
import Color8 from '../bloques/colores/Color8';
import Color9 from '../bloques/colores/Color9';

// Importar componentes de bloques del tema Retro
import Group2 from '../bloques/retro/Retro1';
import Group3 from '../bloques/retro/Retro2';
import Group4 from '../bloques/retro/Retro3';
import Group5 from '../bloques/retro/Retro4';
import Group6 from '../bloques/retro/Retro5';
import Group7 from '../bloques/retro/Retro6';
import Group8 from '../bloques/retro/Retro7';
import Group9 from '../bloques/retro/Retro8';
import Group10 from '../bloques/retro/Retro9';

// Importar bloques del tema Naturaleza
import naturalezaBlock1 from '../assets/texturas/panal.webp';
import naturalezaBlock2 from '../assets/texturas/coral.webp';
import naturalezaBlock3 from '../assets/texturas/piedra-arrugada.webp';
import naturalezaBlock4 from '../assets/texturas/madera.webp';
import naturalezaBlock5 from '../assets/texturas/hielo.webp';
import naturalezaBlock6 from '../assets/texturas/rosas.webp';
import naturalezaBlock7 from '../assets/texturas/ceramica-amarilla.webp';
import naturalezaBlock8 from '../assets/texturas/leopardo.webp';
import naturalezaBlock9 from '../assets/texturas/ceramica-azul.webp';
import naturalezaBlock10 from '../assets/texturas/ceramica-verde.webp';
import naturalezaBlock11 from '../assets/texturas/escamas-azules.webp';
import naturalezaBlock12 from '../assets/texturas/piel-serpiente.webp';

// Importar bloques del tema Rojo
import rojoBlock1 from '../assets/texturas/rosas.webp';
import rojoBlock2 from '../assets/texturas/peluche-rojo.webp';
import rojoBlock3 from '../assets/texturas/gomita-roja.webp';
import rojoBlock4 from '../assets/texturas/agata-rosa.webp';
import rojoBlock5 from '../assets/texturas/osito-gomita.webp';
import rojoBlock6 from '../assets/texturas/rubi.webp';
import rojoBlock7 from '../assets/texturas/ceramica-rosa.webp';
import rojoBlock8 from '../assets/texturas/caramelo-rayado-b.webp';
import rojoBlock9 from '../assets/texturas/ceramica-roja.webp';
import rojoBlock10 from '../assets/texturas/terracota.webp';
import rojoBlock11 from '../assets/texturas/brillo-rojo.webp';
import rojoBlock12 from '../assets/texturas/ceramica-blanca.webp';

// Importar bloques del tema Rocas
import rocasBlock1 from '../assets/texturas/amatista.webp';
import rocasBlock2 from '../assets/texturas/cristales-turquesa.webp';
import rocasBlock3 from '../assets/texturas/musgo.webp';
import rocasBlock4 from '../assets/texturas/terracota.webp';
import rocasBlock5 from '../assets/texturas/diamante.webp';
import rocasBlock6 from '../assets/texturas/agata-rosa.webp';
import rocasBlock7 from '../assets/texturas/ceramica-rosa.webp';
import rocasBlock8 from '../assets/texturas/ceramica-violeta.webp';
import rocasBlock9 from '../assets/texturas/ceramica-celeste.webp';
import rocasBlock10 from '../assets/texturas/lava.webp';
import rocasBlock11 from '../assets/texturas/malaquita.webp';
import rocasBlock12 from '../assets/texturas/piedra-volcanica.webp';

// Importar bloques del tema Dulces
import dulcesBlock1 from '../assets/texturas/osito-gomita.webp';
import dulcesBlock2 from '../assets/texturas/turron.webp';
import dulcesBlock3 from '../assets/texturas/chocolate.webp';
import dulcesBlock4 from '../assets/texturas/vidrio-verde.webp';
import dulcesBlock5 from '../assets/texturas/galletita.webp';
import dulcesBlock6 from '../assets/texturas/malvavisco.webp';
import dulcesBlock7 from '../assets/texturas/caramelo-rayado.webp';
import dulcesBlock8 from '../assets/texturas/ceramica-crema.webp';
import dulcesBlock9 from '../assets/texturas/ceramica-naranja.webp';
import dulcesBlock10 from '../assets/texturas/ceramica-roja.webp';
import dulcesBlock11 from '../assets/texturas/gomita-amarilla.webp';
import dulcesBlock12 from '../assets/texturas/brownie.webp';

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