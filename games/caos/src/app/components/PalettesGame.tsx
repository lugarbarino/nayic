import { useState } from 'react';
import { NavigationButtons } from './NavigationButtons';

type Palette = {
  name: string;
  colors: string[];
};

type PalettesGameProps = {
  onSelectMode: (mode: 'cartas' | 'paletas' | 'dados') => void;
};

type MarkerMatch = {
  brand: string;
  code: string;
  name: string;
  hex: string;
};

const palettes: Palette[] = [
  {
    name: 'Atardecer en el Desierto',
    colors: ['#4A154B', '#791E94', '#B8255F', '#DB4035', '#FF9933', '#FFC93C', '#FDE74C', '#FFF5C2']
  },
  {
    name: 'Magma Volcánico',
    colors: ['#330000', '#5C0000', '#8A0000', '#B30000', '#FF2200', '#FF6600', '#FFAA00', '#FFDDAA']
  },
  {
    name: 'Verano Tropical',
    colors: ['#C70039', '#FF5733', '#FFC300', '#DAF7A6', '#28B463', '#186A3B', '#900C3F', '#581845']
  },
  {
    name: 'Especias de la India',
    colors: ['#6E2C00', '#A04000', '#D35400', '#E67E22', '#F39C12', '#F1C40F', '#F5B041', '#FDEBD0']
  },
  {
    name: 'Coral Viviente',
    colors: ['#641E16', '#922B21', '#C0392B', '#E74C3C', '#F1948A', '#F5B7B1', '#FADBD8', '#FDEDEC']
  },
  {
    name: 'Fondo Oceánico',
    colors: ['#0B132B', '#1C2541', '#3A506B', '#5BC0BE', '#6FFFE9', '#9BF6FF', '#CAF0F8', '#E0F7FA']
  },
  {
    name: 'Bosque Encantado',
    colors: ['#013220', '#004d38', '#00664f', '#008066', '#43AA8B', '#90BE6D', '#F9C74F', '#F94144']
  },
  {
    name: 'Aurora Boreal',
    colors: ['#10002B', '#240046', '#3C096C', '#5A189A', '#7B2CBF', '#9D4EDD', '#C77DFF', '#E0AAFF']
  },
  {
    name: 'Selva Amazónica',
    colors: ['#145A32', '#1E8449', '#27AE60', '#58D68D', '#D4AC0D', '#D35400', '#8E44AD', '#2E86C1']
  },
  {
    name: 'Glaciar',
    colors: ['#002B36', '#004D40', '#00695C', '#00897B', '#26A69A', '#4DB6AC', '#80CBC4', '#E0F2F1']
  },
  {
    name: 'Cyberpunk Neon',
    colors: ['#0B032D', '#7B1FA2', '#E91E63', '#FF00CC', '#00E5FF', '#00B8D4', '#FDD835', '#FFFF00']
  },
  {
    name: 'Pop Art Comic',
    colors: ['#000000', '#150050', '#0000FF', '#3F00FF', '#FF0000', '#FFED00', '#00FF00', '#EAEAEA']
  },
  {
    name: 'Complementarios Púrpura y Amarillo',
    colors: ['#2E003E', '#4B0082', '#6A0DAD', '#9370DB', '#F4D03F', '#F1C40F', '#D4AC0D', '#9A7D0A']
  },
  {
    name: 'Complementarios Azul y Naranja',
    colors: ['#001F3F', '#003366', '#0074D9', '#7FDBFF', '#FF851B', '#FF4136', '#85144b', '#3D9970']
  },
  {
    name: 'Juguetería Retro',
    colors: ['#E74C3C', '#8E44AD', '#3498DB', '#2ECC71', '#F1C40F', '#E67E22', '#34495E', '#BDC3C7']
  },
  {
    name: 'Sueño de Unicornio',
    colors: ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA', '#E1BBFF', '#FCDFFF']
  },
  {
    name: 'Brujería',
    colors: ['#1A1A2E', '#16213E', '#0F3460', '#E94560', '#53354A', '#903749', '#E84545', '#2B2E4A']
  },
  {
    name: 'Steampunk',
    colors: ['#2C2C2C', '#4A3b2C', '#6D4C41', '#8D6E63', '#A1887F', '#D7CCC8', '#BCAAA4', '#FFCCBC']
  },
  {
    name: 'Sirena',
    colors: ['#230C33', '#592E83', '#9984D4', '#CAA8F5', '#218380', '#73D2DE', '#8F2D56', '#D81159']
  },
  {
    name: 'Galaxia Lejana',
    colors: ['#020122', '#070747', '#151868', '#2E2884', '#503B99', '#7C52A9', '#B16CB5', '#CF8FD1']
  },
  {
    name: 'Otoño Profundo',
    colors: ['#2D1E0C', '#4A2C08', '#783F04', '#A0522D', '#CD853F', '#DEB887', '#556B2F', '#808000']
  },
  {
    name: 'Invierno Ruso',
    colors: ['#00203F', '#ADEFD1', '#6A2C70', '#B83B5E', '#F08A5D', '#F9ED69', '#346751', '#ECDB54']
  },
  {
    name: 'Primavera Japonesa',
    colors: ['#2C3E50', '#E74C3C', '#ECF0F1', '#3498DB', '#2980B9', '#8E44AD', '#27AE60', '#F39C12']
  },
  {
    name: 'Halloween',
    colors: ['#191919', '#2D2D2D', '#FF6B6B', '#FF9F43', '#5F27CD', '#9B59B6', '#10AC84', '#55E6C1']
  },
  {
    name: 'Caramelo Ácido',
    colors: ['#FF006E', '#8338EC', '#3A86FF', '#FB5607', '#FFBE0B', '#FF006E', '#3A0CA3', '#EBEBEB']
  },
  {
    name: 'Ladrillo y Cemento',
    colors: ['#7B241C', '#922B21', '#C0392B', '#D98880', '#424949', '#566573', '#808B96', '#ABB2B9']
  },
  {
    name: 'Orquídea',
    colors: ['#4A0033', '#720044', '#9D0056', '#C70066', '#F20079', '#FF4D94', '#FF80B3', '#FFB3D1']
  },
  {
    name: 'Pavo Real',
    colors: ['#002642', '#840032', '#E59500', '#02040F', '#004E64', '#00A5CF', '#9FFFCB', '#25A18E']
  },
  {
    name: 'Vino y Queso',
    colors: ['#4A0404', '#722F37', '#9E1B32', '#C49A6C', '#E6C288', '#FFDB58', '#2E2E2E', '#595959']
  },
  {
    name: 'Avispa',
    colors: ['#111111', '#333333', '#FFD700', '#FFEA00']
  },
  {
    name: 'Náutico',
    colors: ['#001144', '#E63946', '#F1FAEE', '#457B9D']
  },
  {
    name: 'Navidad Moderna',
    colors: ['#084C61', '#DB3A34', '#E76F51', '#2A9D8F']
  },
  {
    name: 'Lakers',
    colors: ['#552583', '#FDB927', '#282828', '#EBEBEB']
  },
  {
    name: 'Cian y Naranja Oscuro',
    colors: ['#003049', '#D62828', '#F77F00', '#FCBF49']
  },
  {
    name: 'Matcha Latte',
    colors: ['#2D4628', '#537A5A', '#94B49F', '#D9EAD3']
  },
  {
    name: 'Café Expreso',
    colors: ['#3E2723', '#5D4037', '#8D6E63', '#D7CCC8']
  },
  {
    name: 'Berry Mix',
    colors: ['#4A148C', '#7B1FA2', '#AB47BC', '#E1BEE7']
  },
  {
    name: 'Cielo Nocturno',
    colors: ['#0D1B2A', '#1B263B', '#415A77', '#778DA9']
  },
  {
    name: 'Cítricos',
    colors: ['#FF5722', '#FF9800', '#FFC107', '#FFEB3B']
  },
  {
    name: 'Cuadrado Primario',
    colors: ['#E63946', '#457B9D', '#A8DADC', '#1D3557']
  },
  {
    name: 'Arlequín',
    colors: ['#660066', '#006600', '#FF9900', '#0099CC']
  },
  {
    name: 'Retro Gamer',
    colors: ['#2B2D42', '#8D99AE', '#EF233C', '#D90429']
  },
  {
    name: 'Flores Silvestres',
    colors: ['#5F0F40', '#FB8B24', '#E36414', '#9A031E']
  },
  {
    name: 'Pastel Punky',
    colors: ['#FF61A6', '#7BFFA3', '#61C0FF', '#FFF561']
  },
  {
    name: 'Vaporwave',
    colors: ['#7400B8', '#6930C3', '#5E60CE', '#4EA8DE']
  },
  {
    name: 'Tierra Quemada',
    colors: ['#603808', '#A85812', '#F08C3A', '#FFCF85']
  },
  {
    name: 'Mentolado',
    colors: ['#004b23', '#008000', '#38b000', '#ccff33']
  },
  {
    name: 'Drácula',
    colors: ['#2D3436', '#D63031', '#636E72', '#B2BEC3']
  },
  {
    name: 'Oro y Carbón',
    colors: ['#1C1C1C', '#4F4F4F', '#D4AF37', '#F8F8F8']
  },
  {
    name: 'Frecuencia Synthwave',
    colors: ['#240046', '#3C096C', '#5A189A', '#7B2CBF', '#9D4EDD', '#C77DFF', '#FF006E', '#FFBE0B']
  },
  {
    name: 'Dragón de Jade',
    colors: ['#081C15', '#1B4332', '#2D6A4F', '#40916C', '#52B788', '#74C69D', '#D4AF37', '#FFD700']
  },
  {
    name: 'Circo Nocturno',
    colors: ['#121212', '#1F1F1F', '#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#D62828', '#F4A261']
  },
  {
    name: 'Tormenta Eléctrica',
    colors: ['#03071E', '#370617', '#6A040F', '#9D0208', '#D00000', '#DC2F02', '#E85D04', '#FFBA08']
  },
  {
    name: 'Tucán',
    colors: ['#161616', '#262626', '#F9C74F', '#F9844A', '#F94144', '#90BE6D', '#43AA8B', '#577590']
  },
  {
    name: 'Minerales Preciosos',
    colors: ['#2E294E', '#541388', '#F1E9DA', '#FFD400', '#D90368', '#00A896', '#02C39A', '#05668D']
  },
  {
    name: 'Desierto de Atacama',
    colors: ['#582F0E', '#7F4F24', '#936639', '#A68A64', '#B6AD90', '#335C67', '#FFF3B0', '#E09F3E']
  },
  {
    name: 'Laboratorio Químico',
    colors: ['#0D0221', '#0F084B', '#26408B', '#A6CFD5', '#C2E7D9', '#0F9D58', '#76E015', '#CCFF00']
  },
  {
    name: 'Geisha',
    colors: ['#0B0C10', '#1F2833', '#C5C6C7', '#45A29E', '#66FCF1', '#800000', '#A52A2A', '#FFCCCC']
  },
  {
    name: 'Aurora Boreal 2.0',
    colors: ['#001219', '#005F73', '#0A9396', '#94D2BD', '#E9D8A6', '#EE9B00', '#CA6702', '#BB3E03']
  },
  {
    name: 'Bazar de Estambul',
    colors: ['#231F20', '#BB4430', '#7EBDC2', '#F3DFA2', '#EFE6DD', '#233D4D', '#FE7F2D', '#FCCA46']
  },
  {
    name: 'Vampiro Real',
    colors: ['#000000', '#2B0504', '#5A0B09', '#8C1C13', '#BF4342', '#E7D7C1', '#A78A7F', '#735751']
  },
  {
    name: 'Oasis',
    colors: ['#8D5524', '#C68642', '#E0AC69', '#F1C27D', '#FFDBAC', '#0077B6', '#0096C7', '#48CAE4']
  },
  {
    name: 'Mermelada de Frutos',
    colors: ['#4A051C', '#750D37', '#A4133C', '#C9184A', '#FF4D6D', '#FF758F', '#FF8FA3', '#FFB3C1']
  },
  {
    name: 'Camuflaje Urbano',
    colors: ['#2F3E46', '#354F52', '#52796F', '#84A98C', '#CAD2C5', '#3C403D', '#5C6B73', '#9DB4C0']
  },
  {
    name: 'Festival Holi',
    colors: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3', '#FF1493']
  },
  {
    name: 'Chocolate con Menta',
    colors: ['#38220F', '#634832', '#967259', '#DBC1AC', '#006D77', '#83C5BE', '#EDF6F9', '#FFDDD2']
  },
  {
    name: 'Nebulosa Púrpura',
    colors: ['#10002B', '#240046', '#3C096C', '#5A189A', '#7B2CBF', '#9D4EDD', '#C77DFF', '#E0AAFF']
  },
  {
    name: 'Fuego Fatuo',
    colors: ['#010B13', '#02182B', '#002855', '#003E7E', '#0056A8', '#0072CE', '#0091EA', '#80D8FF']
  },
  {
    name: 'Safari',
    colors: ['#343A40', '#495057', '#6C757D', '#ADB5BD', '#D4A373', '#FAEDCD', '#CCD5AE', '#E9EDC9']
  },
  {
    name: 'Miami Vice',
    colors: ['#1C0221', '#7209B7', '#4CC9F0', '#F72585']
  },
  {
    name: 'Abeja Reina',
    colors: ['#0D0D0D', '#F2A900', '#FCE205', '#FFFACD']
  },
  {
    name: 'Sandía',
    colors: ['#0F380F', '#33691E', '#D32F2F', '#FFCDD2']
  },
  {
    name: 'Planos Arquitectónicos',
    colors: ['#002147', '#003366', '#3F729B', '#D0E4F5']
  },
  {
    name: 'Alerta de Peligro',
    colors: ['#1B1B1B', '#383838', '#FFD100', '#FFEE32']
  },
  {
    name: 'Rosa Espinoza',
    colors: ['#2E4600', '#486B00', '#A20021', '#F52F57']
  },
  {
    name: 'Jeans',
    colors: ['#0D1321', '#1D2D44', '#3E5C76', '#BFA181']
  },
  {
    name: 'Constructivismo',
    colors: ['#1A1A1A', '#8D0000', '#EAE0C8', '#6E6E6E']
  },
  {
    name: 'Pistacho',
    colors: ['#3E2723', '#795548', '#99BC85', '#E1EEDD']
  },
  {
    name: 'Cyber Hacker',
    colors: ['#000000', '#003B00', '#008F11', '#00FF41']
  }
];

// Base de datos de marcadores con sus colores
const markerDatabase: { [key: string]: MarkerMatch[] } = {
  // Rojos
  '#E63946': [
    { brand: 'Copic', code: 'R29', name: 'Lipstick Red', hex: '#E63946' },
    { brand: 'Ohuhu', code: 'R27', name: 'Cadmium Red', hex: '#E63B48' },
    { brand: 'Prismacolor', code: 'PM22', name: 'Poppy Red', hex: '#E43C40' }
  ],
  '#FF006E': [
    { brand: 'Copic', code: 'RV09', name: 'Fuchsia', hex: '#FF006E' },
    { brand: 'Ohuhu', code: 'RV17', name: 'Deep Magenta', hex: '#FF0075' },
    { brand: 'Winsor & Newton', code: 'M246', name: 'Magenta', hex: '#FF0066' }
  ],
  '#C44569': [
    { brand: 'Copic', code: 'R85', name: 'Rose Red', hex: '#C44569' },
    { brand: 'Ohuhu', code: 'R46', name: 'Strong Red', hex: '#C34667' },
    { brand: 'Prismacolor', code: 'PM23', name: 'Crimson Red', hex: '#C24569' }
  ],
  // Naranjas
  '#FF8C42': [
    { brand: 'Copic', code: 'YR07', name: 'Cadmium Orange', hex: '#FF8C42' },
    { brand: 'Ohuhu', code: 'YR09', name: 'Chinese Orange', hex: '#FF8A40' },
    { brand: 'Prismacolor', code: 'PM51', name: 'Pumpkin Orange', hex: '#FF8D44' }
  ],
  '#F7931E': [
    { brand: 'Copic', code: 'YR04', name: 'Chrome Orange', hex: '#F7931E' },
    { brand: 'Ohuhu', code: 'O6', name: 'Orange', hex: '#F79220' },
    { brand: 'Tombow', code: 'N25', name: 'Orange', hex: '#F89422' }
  ],
  '#FFA500': [
    { brand: 'Copic', code: 'YR15', name: 'Pumpkin Yellow', hex: '#FFA500' },
    { brand: 'Ohuhu', code: 'O7', name: 'Amber', hex: '#FFA600' },
    { brand: 'Prismacolor', code: 'PM52', name: 'Golden Yellow', hex: '#FFA400' }
  ],
  '#FF8500': [
    { brand: 'Copic', code: 'YR09', name: 'Chinese Orange', hex: '#FF8500' },
    { brand: 'Ohuhu', code: 'YR07', name: 'Cadmium Orange', hex: '#FF8600' },
    { brand: 'Prismacolor', code: 'PM53', name: 'Sunset Orange', hex: '#FF8400' }
  ],
  '#E06B00': [
    { brand: 'Copic', code: 'YR68', name: 'Orange', hex: '#E06B00' },
    { brand: 'Ohuhu', code: 'YR68', name: 'Orange', hex: '#DF6C00' },
    { brand: 'Tombow', code: 'N26', name: 'Dark Orange', hex: '#E16A00' }
  ],
  '#BF5E00': [
    { brand: 'Copic', code: 'E09', name: 'Burnt Sienna', hex: '#BF5E00' },
    { brand: 'Ohuhu', code: 'E18', name: 'Copper', hex: '#BE5F00' },
    { brand: 'Prismacolor', code: 'PM62', name: 'Rust', hex: '#C05D00' }
  ],
  '#FB5607': [
    { brand: 'Copic', code: 'YR07', name: 'Cadmium Orange', hex: '#FB5607' },
    { brand: 'Ohuhu', code: 'O9', name: 'Fire Red', hex: '#FA5708' },
    { brand: 'Winsor & Newton', code: 'M075', name: 'Burnt Orange', hex: '#FC5506' }
  ],
  '#FFB347': [
    { brand: 'Copic', code: 'YR61', name: 'Spring Orange', hex: '#FFB347' },
    { brand: 'Ohuhu', code: 'YR21', name: 'Cream', hex: '#FFB246' },
    { brand: 'Prismacolor', code: 'PM54', name: 'Apricot', hex: '#FFB448' }
  ],
  // Amarillos
  '#FFBE0B': [
    { brand: 'Copic', code: 'Y15', name: 'Cadmium Yellow', hex: '#FFBE0B' },
    { brand: 'Ohuhu', code: 'Y17', name: 'Golden Yellow', hex: '#FFBD0A' },
    { brand: 'Winsor & Newton', code: 'M220', name: 'Yellow', hex: '#FFBF0C' }
  ],
  '#FFD700': [
    { brand: 'Copic', code: 'Y17', name: 'Golden Yellow', hex: '#FFD700' },
    { brand: 'Ohuhu', code: 'Y19', name: 'Napoli Yellow', hex: '#FFD800' },
    { brand: 'Prismacolor', code: 'PM5', name: 'Goldenrod', hex: '#FFD600' }
  ],
  '#FFFF00': [
    { brand: 'Copic', code: 'Y00', name: 'Barium Yellow', hex: '#FFFF00' },
    { brand: 'Ohuhu', code: 'Y02', name: 'Canary Yellow', hex: '#FFFE00' },
    { brand: 'Tombow', code: 'N55', name: 'Process Yellow', hex: '#FFFF05' }
  ],
  // Verdes
  '#2D6A4F': [
    { brand: 'Copic', code: 'G28', name: 'Ocean Green', hex: '#2D6A4F' },
    { brand: 'Ohuhu', code: 'G29', name: 'Pine Tree Green', hex: '#2E6B50' },
    { brand: 'Prismacolor', code: 'PM99', name: 'Dark Green', hex: '#2C6A4E' }
  ],
  '#52B788': [
    { brand: 'Copic', code: 'G17', name: 'Forest Green', hex: '#52B788' },
    { brand: 'Ohuhu', code: 'G46', name: 'Mistletoe', hex: '#51B689' },
    { brand: 'Winsor & Newton', code: 'M163', name: 'Emerald Green', hex: '#53B887' }
  ],
  '#00FA9A': [
    { brand: 'Copic', code: 'G05', name: 'Emerald Green', hex: '#00FA9A' },
    { brand: 'Ohuhu', code: 'G07', name: 'Nile Green', hex: '#00F99B' },
    { brand: 'Prismacolor', code: 'PM77', name: 'Mint Green', hex: '#00FB99' }
  ],
  // Azules
  '#457B9D': [
    { brand: 'Copic', code: 'B24', name: 'Sky Blue', hex: '#457B9D' },
    { brand: 'Ohuhu', code: 'B26', name: 'Cobalt Blue', hex: '#467C9E' },
    { brand: 'Prismacolor', code: 'PM67', name: 'French Blue', hex: '#457A9C' }
  ],
  '#3A86FF': [
    { brand: 'Copic', code: 'B06', name: 'Peacock Blue', hex: '#3A86FF' },
    { brand: 'Ohuhu', code: 'B18', name: 'Lapis Lazuli', hex: '#3B85FE' },
    { brand: 'Tombow', code: 'N47', name: 'Process Blue', hex: '#3A87FF' }
  ],
  '#0077B6': [
    { brand: 'Copic', code: 'B28', name: 'Royal Blue', hex: '#0077B6' },
    { brand: 'Ohuhu', code: 'B39', name: 'Prussian Blue', hex: '#0076B5' },
    { brand: 'Prismacolor', code: 'PM33', name: 'Blue Slate', hex: '#0078B7' }
  ],
  '#00CED1': [
    { brand: 'Copic', code: 'BG09', name: 'Blue Green', hex: '#00CED1' },
    { brand: 'Ohuhu', code: 'BG18', name: 'Teal Blue', hex: '#00CFD2' },
    { brand: 'Winsor & Newton', code: 'M312', name: 'Cyan', hex: '#00CDD0' }
  ],
  // Violetas y Rosas
  '#8338EC': [
    { brand: 'Copic', code: 'V09', name: 'Violet', hex: '#8338EC' },
    { brand: 'Ohuhu', code: 'V17', name: 'Amethyst', hex: '#8237EB' },
    { brand: 'Prismacolor', code: 'PM45', name: 'Violet', hex: '#8339ED' }
  ],
  '#7209B7': [
    { brand: 'Copic', code: 'V17', name: 'Amethyst', hex: '#7209B7' },
    { brand: 'Ohuhu', code: 'V29', name: 'Royal Purple', hex: '#7108B6' },
    { brand: 'Winsor & Newton', code: 'M428', name: 'Purple', hex: '#7309B8' }
  ],
  '#FF6B9D': [
    { brand: 'Copic', code: 'R83', name: 'Rose Pink', hex: '#FF6B9D' },
    { brand: 'Ohuhu', code: 'R85', name: 'Rose Red', hex: '#FF6A9E' },
    { brand: 'Prismacolor', code: 'PM18', name: 'Pink', hex: '#FF6C9C' }
  ],
  '#FFB3C6': [
    { brand: 'Copic', code: 'R81', name: 'Rose Pink', hex: '#FFB3C6' },
    { brand: 'Ohuhu', code: 'R21', name: 'Sardonyx', hex: '#FFB2C5' },
    { brand: 'Tombow', code: 'N772', name: 'Blush', hex: '#FFB4C7' }
  ],
  // Marrones
  '#6C584C': [
    { brand: 'Copic', code: 'E79', name: 'Cashew', hex: '#6C584C' },
    { brand: 'Ohuhu', code: 'E59', name: 'Walnut', hex: '#6D594D' },
    { brand: 'Prismacolor', code: 'PM61', name: 'Burnt Sienna', hex: '#6C574B' }
  ],
  '#8B4513': [
    { brand: 'Copic', code: 'E29', name: 'Burnt Umber', hex: '#8B4513' },
    { brand: 'Ohuhu', code: 'E49', name: 'Dark Bark', hex: '#8A4614' },
    { brand: 'Winsor & Newton', code: 'M076', name: 'Brown', hex: '#8C4512' }
  ],
  // Grises y Negros
  '#000000': [
    { brand: 'Copic', code: '100', name: 'Black', hex: '#000000' },
    { brand: 'Ohuhu', code: '100', name: 'Black', hex: '#000000' },
    { brand: 'Prismacolor', code: 'PM1', name: 'Black', hex: '#000000' }
  ],
  '#4A4E69': [
    { brand: 'Copic', code: 'N6', name: 'Neutral Gray 6', hex: '#4A4E69' },
    { brand: 'Ohuhu', code: 'CG6', name: 'Cool Gray 6', hex: '#4B4F6A' },
    { brand: 'Prismacolor', code: 'PM89', name: 'Warm Gray 60%', hex: '#494D68' }
  ],
  '#C5C6C7': [
    { brand: 'Copic', code: 'N3', name: 'Neutral Gray 3', hex: '#C5C6C7' },
    { brand: 'Ohuhu', code: 'CG3', name: 'Cool Gray 3', hex: '#C4C5C6' },
    { brand: 'Tombow', code: 'N60', name: 'Cool Gray 3', hex: '#C6C7C8' }
  ]
};

// Función para calcular la distancia entre dos colores (Delta E simplificado)
function colorDistance(hex1: string, hex2: string): number {
  const r1 = parseInt(hex1.slice(1, 3), 16);
  const g1 = parseInt(hex1.slice(3, 5), 16);
  const b1 = parseInt(hex1.slice(5, 7), 16);
  
  const r2 = parseInt(hex2.slice(1, 3), 16);
  const g2 = parseInt(hex2.slice(3, 5), 16);
  const b2 = parseInt(hex2.slice(5, 7), 16);
  
  return Math.sqrt(Math.pow(r2 - r1, 2) + Math.pow(g2 - g1, 2) + Math.pow(b2 - b1, 2));
}

// Función para detectar la familia de color
function getColorFamily(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  
  // Calcular brillo y saturación
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const brightness = (max + min) / 2;
  const saturation = max === 0 ? 0 : (max - min) / max;
  
  // Si es muy oscuro, es negro/gris oscuro
  if (brightness < 30) return 'negro';
  
  // Si tiene muy poca saturación, es gris
  if (saturation < 0.15) return 'gris';
  
  // Si es muy claro y poco saturado, es blanco/gris claro
  if (brightness > 220 && saturation < 0.3) return 'gris';
  
  // Determinar el tono basado en qué componente RGB es dominante
  const dominantValue = max;
  
  // Amarillo puro (R y G altos, B bajo)
  if (r === dominantValue && g === dominantValue && b < dominantValue) {
    return 'amarillo';
  }
  
  // Magenta/Rosa (R alto, B alto, G bajo)
  if (r === dominantValue && g < dominantValue && b === dominantValue) {
    return 'rosa';
  }
  
  // Cyan/Turquesa (G alto, B alto, R bajo)
  if (g === dominantValue && r < dominantValue && b === dominantValue) {
    return 'azul';
  }
  
  // Rojo es dominante
  if (r === dominantValue) {
    // Naranja: R dominante con G significativo pero B bajo
    if (g > 100 && g > r * 0.45 && b < g * 0.7) {
      return 'naranja';
    }
    // Amarillo-naranja
    if (g > r * 0.85) {
      return 'amarillo';
    }
    // Rosa/Magenta
    if (b > r * 0.7) {
      return 'rosa';
    }
    // Rojo puro
    return 'rojo';
  }
  
  // Verde es dominante
  if (g === dominantValue) {
    // Cyan
    if (b > g * 0.7) {
      return 'azul';
    }
    return 'verde';
  }
  
  // Azul es dominante
  if (b === dominantValue) {
    // Violeta/Púrpura
    if (r > b * 0.6) {
      return 'violeta';
    }
    return 'azul';
  }
  
  // Marrón (rojo dominante con componentes medios de verde y azul)
  if (r > g && r > b && g > 80 && b > 60 && g < r * 0.8) {
    return 'marron';
  }
  
  return 'gris';
}

// Función para encontrar los marcadores más cercanos a un color
function findClosestMarkers(hexColor: string): MarkerMatch[] {
  const upperHex = hexColor.toUpperCase();
  
  // Si el color existe exactamente en la base de datos, devolverlo
  if (markerDatabase[upperHex]) {
    return markerDatabase[upperHex];
  }
  
  // Obtener todos los marcadores de la base de datos en un solo array
  const allMarkers: (MarkerMatch & { dbColor: string })[] = [];
  for (const dbColor in markerDatabase) {
    markerDatabase[dbColor].forEach(marker => {
      allMarkers.push({ ...marker, dbColor });
    });
  }
  
  // Buscar el color más cercano primero (threshold de 50)
  const exactDistances: { marker: MarkerMatch; distance: number }[] = [];
  allMarkers.forEach(marker => {
    const distance = colorDistance(upperHex, marker.dbColor);
    if (distance < 50) {
      exactDistances.push({ marker, distance });
    }
  });
  
  if (exactDistances.length > 0) {
    exactDistances.sort((a, b) => a.distance - b.distance);
    return exactDistances.slice(0, 3).map(item => item.marker);
  }
  
  // Si no hay coincidencias exactas, buscar por familia de color
  const colorFamily = getColorFamily(upperHex);
  const sameFamily: { marker: MarkerMatch; distance: number }[] = [];
  
  allMarkers.forEach(marker => {
    const markerFamily = getColorFamily(marker.dbColor);
    if (markerFamily === colorFamily) {
      const distance = colorDistance(upperHex, marker.dbColor);
      sameFamily.push({ marker, distance });
    }
  });
  
  if (sameFamily.length > 0) {
    sameFamily.sort((a, b) => a.distance - b.distance);
    return sameFamily.slice(0, 3).map(item => item.marker);
  }
  
  // Si no hay coincidencias en la misma familia, buscar los 3 más cercanos en general
  const allDistances: { marker: MarkerMatch; distance: number }[] = [];
  allMarkers.forEach(marker => {
    const distance = colorDistance(upperHex, marker.dbColor);
    allDistances.push({ marker, distance });
  });
  
  allDistances.sort((a, b) => a.distance - b.distance);
  return allDistances.slice(0, 3).map(item => item.marker);
}

export function PalettesGame({ onSelectMode }: PalettesGameProps) {
  const [currentPalette, setCurrentPalette] = useState<Palette>(() => {
    const randomIndex = Math.floor(Math.random() * palettes.length);
    return palettes[randomIndex];
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [markerMatches, setMarkerMatches] = useState<MarkerMatch[]>([]);

  const getNewPalette = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * palettes.length);
      setCurrentPalette(palettes[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    setMarkerMatches(findClosestMarkers(color));
  };

  return (
    <div className="bg-gradient-to-b from-[#093641] relative size-full to-[#41a59f] overflow-y-auto flex flex-col" data-name="Paletas">
      {/* Title */}
      <p className="font-['Capriola:Regular',sans-serif] leading-[32px] sm:leading-[32px] md:leading-[31.146px] lg:leading-[36px] not-italic text-[24px] sm:text-[28px] md:text-[28px] lg:text-[32.344px] xl:text-[36px] text-center text-white pt-6 sm:pt-8 md:pt-12 lg:pt-16 px-4 flex-shrink-0">
        Paleta de color:
      </p>

      {/* Palette Name */}
      <p 
        className={`font-['SF_Pro:Italic',sans-serif] italic leading-[24px] text-[20px] text-center text-[#dedede] pt-4 sm:pt-5 md:pt-6 px-4 transition-all duration-300 flex-shrink-0 ${
          isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
        }`}
      >
        {currentPalette.name}
      </p>

      {/* Color Grid */}
      <div className="flex-1 flex items-start justify-center px-4 pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-[120px] sm:pb-[130px] md:pb-[150px] lg:pb-[180px]">
        <div className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px]">
          <div 
            className={`grid gap-[9.65px] sm:gap-[10px] md:gap-[12px] lg:gap-[14px] transition-all duration-300 ${
              currentPalette.colors.length === 8 ? 'grid-cols-4 grid-rows-2' : 'grid-cols-2 sm:grid-cols-4'
            } ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
          >
            {currentPalette.colors.map((color, index) => (
              <div
                key={index}
                className={`rounded-[18px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-[20px] shadow-lg hover:scale-110 transition-transform cursor-pointer ${
                  currentPalette.colors.length === 8 ? 'h-[112px]' : 'aspect-square'
                }`}
                style={{ backgroundColor: color }}
                title={color}
                onClick={() => handleColorClick(color)}
              />
            ))}
          </div>
          
          {/* Change Palette Button */}
          <button
            onClick={getNewPalette}
            className={`mt-6 sm:mt-8 md:mt-10 w-full rounded-[16px] py-3 sm:py-4 px-6 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95 ${
              isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="font-['SF_Pro:Bold',sans-serif] font-bold text-white text-[16px] sm:text-[18px]">
              Cambiar paleta
            </span>
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="fixed left-1/2 bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 xl:bottom-16 translate-x-[-50%] z-10">
        <NavigationButtons 
          currentMode="paletas"
          onSelectMode={onSelectMode}
          onActiveAction={getNewPalette}
        />
      </div>

      {/* Marker Matches Modal */}
      {selectedColor && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20"
            onClick={() => setSelectedColor(null)}
          />
          
          {/* Modal */}
          <div className="fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] bg-[#1a1a2e] rounded-[20px] p-[20px] sm:p-[25px] md:p-[30px] max-w-[350px] sm:max-w-[400px] md:max-w-[450px] w-[90%] shadow-2xl z-30 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-[12px] sm:mb-[15px] md:mb-[18px]">
              <p className="font-['SF_Pro_Display:Regular',sans-serif] text-[16px] sm:text-[18px] md:text-[20px] text-white font-semibold">
                Marcadores similares
              </p>
              <button
                onClick={() => setSelectedColor(null)}
                className="text-white text-[24px] sm:text-[28px] md:text-[32px] leading-none hover:scale-110 transition-transform"
              >
                ×
              </button>
            </div>
            
            <div className="flex items-center gap-[10px] sm:gap-[12px] md:gap-[14px] mb-[16px] sm:mb-[20px] md:mb-[24px]">
              <div 
                className="size-[35px] sm:size-[40px] md:size-[45px] rounded-[10px] shadow-md flex-shrink-0" 
                style={{ backgroundColor: selectedColor }}
              />
              <p className="font-['SF_Pro:Regular',sans-serif] text-[13px] sm:text-[14px] md:text-[15px] text-white/80">
                {selectedColor}
              </p>
            </div>
            
            <div className="space-y-[10px] sm:space-y-[12px] md:space-y-[14px]">
              {markerMatches.map((marker, index) => (
                <div 
                  key={index} 
                  className="bg-[#252543] rounded-[12px] p-[10px] sm:p-[12px] md:p-[14px] flex items-center gap-[10px] sm:gap-[12px] md:gap-[14px] hover:bg-[#2d2d54] transition-colors"
                >
                  <div 
                    className="size-[30px] sm:size-[35px] md:size-[40px] rounded-[8px] shadow-sm shrink-0" 
                    style={{ backgroundColor: marker.hex }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-['SF_Pro:Bold',sans-serif] text-[13px] sm:text-[14px] md:text-[15px] text-white font-bold">
                      {marker.brand} {marker.code}
                    </p>
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[11px] sm:text-[12px] md:text-[13px] text-white/70 truncate">
                      {marker.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {markerMatches.length === 0 && (
              <p className="font-['SF_Pro:Italic',sans-serif] italic text-[13px] sm:text-[14px] md:text-[15px] text-white/60 text-center py-[16px] sm:py-[20px] md:py-[24px]">
                No se encontraron marcadores similares
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}