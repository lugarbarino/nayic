import { useState } from 'react';
import svgPaths from "@/imports/svg-gvcvva861r";
import imgGato21 from "figma:asset/43ed8e526af030d6be6bb5981f4ffd72755f09d6.png";
import imgSnake1 from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";

// Par 1 - Personajes reales
import imgPlayer1Par1 from "figma:asset/1a905b452b8616d4913a87b83d43e3481c6a3fe4.png";
import imgPlayer2Par1 from "figma:asset/1a8f87ec1a50fa8149e7194149401f3455beb687.png";

// Par 2 - Personajes reales
import imgPlayer1Par2 from "figma:asset/3a6ace823d327db09dcd656f77c09193b5ef61b9.png";
import imgPlayer2Par2 from "figma:asset/a3c754e3e4eed6cd5561053444a996381b35df85.png";

// Par 3 - Personajes reales
import imgPlayer1Par3 from "figma:asset/8b179d68c37a2298029b53ee038f299cd8efb1c0.png";
import imgPlayer2Par3 from "figma:asset/b75a433932d3c96609007e61fadff773aa749af7.png";

// Par 4 - Personajes reales
import imgPlayer1Par4 from "figma:asset/34321f44fed05a3d3e6a4756621cef64c98de28b.png";
import imgPlayer2Par4 from "figma:asset/e67dd1106bb9f0b667c83599a6c2609388803467.png";

// Par 5 - Personajes reales
import imgPlayer1Par5 from "figma:asset/d1a529283553aff2c263e6ee185d1ee9c74c552a.png";
import imgPlayer2Par5 from "figma:asset/96a8aa59fb14ee6592e44c3ec55060cc774e3e57.png";

// Par 6 - Personajes reales
import imgPlayer1Par6 from "figma:asset/9de0a1200a24069421bb85979c9b4c6087439a3d.png";
import imgPlayer2Par6 from "figma:asset/bd2e6f8c83f6c11819140282890f56be385d3872.png";

// Par 7 - Personajes reales
import imgPlayer1Par7 from "figma:asset/a04fa8cbd2c0fc35ac30f315f7611fb4b2ede340.png";
import imgPlayer2Par7 from "figma:asset/4327c21be0afe978f9b5fc7971b8461c2645a608.png";

interface StartMenuProps {
  onStartGame: (playerCount: 1 | 2, player1Character: number, player2Character: number) => void;
}

// 7 personajes para el Jugador 1
const PLAYER1_CHARACTERS = [
  imgPlayer1Par1,
  imgPlayer1Par2,
  imgPlayer1Par3,
  imgPlayer1Par4,
  imgPlayer1Par5,
  imgPlayer1Par6,
  imgPlayer1Par7,
];

// 7 personajes para el Jugador 2
const PLAYER2_CHARACTERS = [
  imgPlayer2Par1,
  imgPlayer2Par2,
  imgPlayer2Par3,
  imgPlayer2Par4,
  imgPlayer2Par5,
  imgPlayer2Par6,
  imgPlayer2Par7,
];

export function StartMenu({ onStartGame }: StartMenuProps) {
  const [playerCount, setPlayerCount] = useState<1 | 2>(1);
  const [player1Character, setPlayer1Character] = useState(0);
  const [player2Character, setPlayer2Character] = useState(0);

  const handleStartGame = () => {
    onStartGame(playerCount, player1Character, player2Character);
  };

  const handlePlayer1Click = () => {
    setPlayer1Character((prev) => (prev + 1) % PLAYER1_CHARACTERS.length);
    setPlayer2Character((prev) => (prev + 1) % PLAYER2_CHARACTERS.length);
  };

  const handlePlayer2Click = () => {
    setPlayer1Character((prev) => (prev + 1) % PLAYER1_CHARACTERS.length);
    setPlayer2Character((prev) => (prev + 1) % PLAYER2_CHARACTERS.length);
  };

  return (
    <div 
      className="relative size-full min-h-screen flex items-center justify-center p-4 md:p-4"
      style={{ 
        backgroundImage: "linear-gradient(105.242deg, rgb(12, 14, 23) 0%, rgb(65, 76, 125) 115.08%)" 
      }}
    >
      {/* Mobile Layout - Flexbox centrado */}
      <div className="md:hidden flex flex-col gap-4 items-center w-full max-w-[420px]">
        {/* Logo */}
        <div className="h-[141px] w-full max-w-[410px] px-2">
          <img 
            alt="Tateti Logo" 
            className="w-full h-full object-contain" 
            src={imgGato21} 
          />
        </div>

        {/* Reglas */}
        <div className="flex flex-col gap-[8.472px] items-center text-center w-full px-4">
          <p className="font-['Capriola',sans-serif] text-white text-[28.874px] leading-[20.333px] tracking-[-0.2648px]">
            3 fichas por jugador
          </p>
          <p className="font-['SF_Pro_Display',sans-serif] italic text-[#cdcfd3] text-[20px] leading-[28.805px] tracking-[1.6944px]">
            Muévelas para ganar
          </p>
        </div>

        {/* Selección de cantidad de jugadores */}
        <div className="flex flex-col gap-3 items-center w-full px-4">
          <div className="flex gap-[40px] items-center justify-center">
            {/* Botón 1 Jugador */}
            <button
              onClick={() => setPlayerCount(1)}
              className="bg-[#1a1e31] relative h-[108.395px] w-[104.226px] rounded-[29.183px] transition-all duration-200 transform hover:scale-105"
            >
              {playerCount === 1 && (
                <div aria-hidden="true" className="absolute border-3 border-[#4264ff] border-solid inset-0 pointer-events-none rounded-[29.183px]" />
              )}
              <div className="flex flex-col items-center justify-center h-full text-[#ececec]">
                <p className="text-[44.47px] font-[1000] leading-[30.573px]" style={{ fontVariationSettings: "'wdth' 100" }}>1</p>
                <p className="text-[11.192px] font-bold mt-2 tracking-wide" style={{ fontVariationSettings: "'wdth' 100" }}>JUGADOR</p>
              </div>
            </button>

            {/* Botón 2 Jugadores */}
            <button
              onClick={() => setPlayerCount(2)}
              className="bg-[#1a1e31] relative h-[108.395px] w-[104.226px] rounded-[29.183px] transition-all duration-200 transform hover:scale-105"
            >
              {playerCount === 2 && (
                <div aria-hidden="true" className="absolute border-3 border-[#4264ff] border-solid inset-0 pointer-events-none rounded-[29.183px]" />
              )}
              <div className="flex flex-col items-center justify-center h-full text-[#ececec]">
                <p className="text-[44.47px] font-[1000] leading-[30.573px]" style={{ fontVariationSettings: "'wdth' 100" }}>2</p>
                <p className="text-[11.192px] font-bold mt-2 tracking-wide" style={{ fontVariationSettings: "'wdth' 100" }}>JUGADORES</p>
              </div>
            </button>
          </div>

          {/* Texto instrucción */}
          <div className="font-['SF_Pro_Display',sans-serif] italic text-[#f6f6f6] text-[20px] text-center leading-[1.2] mt-2">
            <p>Clickeá para cambiar</p>
            <p>de personaje:</p>
          </div>
        </div>

        {/* Selección de Personajes */}
        <div className="flex flex-col gap-3 items-center w-full px-4">
          {/* Jugadores - versión mobile */}
          <div className="flex gap-[40px] items-center justify-center w-full">
            {/* Jugador 1 */}
            <div className="flex flex-col items-center w-[104.226px]">
              <button
                onClick={handlePlayer1Click}
                className="relative w-full h-[108.395px] transition-all duration-200 transform hover:scale-105 cursor-pointer"
              >
                <div className="bg-[#1a1e31] rounded-[29.183px] absolute inset-0" />
                <div className="absolute inset-0">
                  <img 
                    src={PLAYER1_CHARACTERS[player1Character]}
                    alt="Jugador 1"
                    className="w-full h-full object-contain scale-[1.2]"
                  />
                </div>
              </button>
              <p className="font-['SF_Pro_Display',sans-serif] italic text-[#c9d0f0] text-[18px] text-center leading-[1.2] mt-2">
                Jugador 1
              </p>
            </div>

            {/* Jugador 2 */}
            <div className="flex flex-col items-center w-[104.226px]">
              <button
                onClick={handlePlayer2Click}
                className="relative w-full h-[108.395px] transition-all duration-200 transform hover:scale-105 cursor-pointer"
              >
                <div className="bg-[#1a1e31] rounded-[29.183px] absolute inset-0" />
                <div className="absolute inset-0">
                  <img 
                    src={PLAYER2_CHARACTERS[player2Character]}
                    alt="Jugador 2"
                    className="w-full h-full object-contain scale-[1.2]"
                  />
                </div>
              </button>
              <p className="font-['SF_Pro_Display',sans-serif] italic text-[#c9d0f0] text-[18px] text-center leading-[1.2] mt-2">
                {playerCount === 1 ? 'Computadora' : 'Jugador 2'}
              </p>
            </div>
          </div>
        </div>

        {/* Botón iniciar juego */}
        <button
          onClick={handleStartGame}
          className="bg-[#2c44b2] flex h-[86.025px] items-center justify-center rounded-[34.41px] w-full max-w-[310.838px] transition-all duration-200 transform hover:scale-105 hover:bg-[#3a52c7] shadow-[inset_0px_-15.098px_4.314px_0px_rgba(0,0,0,0.25)] mt-2"
        >
          <p className="font-['SF_Pro',sans-serif] font-[510] leading-[35.557px] text-[#ededed] text-[27.528px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            Iniciar juego
          </p>
        </button>

        {/* Footer */}
        <div className="flex gap-[8.627px] items-center group mt-2 mb-4">
          <a 
            href="https://nayic.com.ar/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex gap-[8.627px] items-center cursor-pointer transition-transform duration-200 hover:scale-105 relative z-10"
          >
            <div className="flex gap-[2.157px] items-center">
              <p className="font-['SF_Pro_Display',sans-serif] text-[#c9d0f0] text-[17.255px] text-center tracking-[-0.3451px] leading-[1.2] group-hover:text-white transition-colors">
                Hecho con
              </p>
              <img alt="love" className="size-[34.51px] object-cover" src={imgSnake1} />
              <p className="font-['SF_Pro_Display',sans-serif] text-[#c9d0f0] text-[17.255px] text-center tracking-[-0.3451px] leading-[1.2] group-hover:text-white transition-colors">
                por
              </p>
            </div>
            <div className="h-[24.924px] w-[93.824px] group-hover:opacity-80 transition-opacity">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93.8237 24.9243">
                <g>
                  <path d={svgPaths.p242d3f00} fill="#FEFEFE" />
                  <path d={svgPaths.p1dff3b80} fill="#30385C" />
                  <path d={svgPaths.p3d575f00} fill="#30385C" />
                  <path d={svgPaths.pf97da00} fill="#30385C" />
                  <path d={svgPaths.p36dc7480} fill="#30385C" />
                  <path d={svgPaths.p699e00} fill="#30385C" />
                </g>
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* Desktop Layout - Flexbox */}
      <div className="hidden md:flex flex-col gap-[32px] items-center w-full max-w-[660px]">
        {/* Logo */}
        <div className="h-[162px] w-full max-w-[512px] relative">
          <img 
            alt="Tateti Logo" 
            className="w-full h-full object-contain" 
            src={imgGato21} 
          />
        </div>

        {/* Reglas y Selección */}
        <div className="flex flex-col gap-[26px] items-center w-full">
          {/* Reglas y Botones de jugadores */}
          <div className="flex flex-col gap-[34.51px] items-center w-full">
            {/* Reglas */}
            <div className="flex flex-col gap-[9.389px] items-center text-center w-full">
              <p className="font-['Capriola',sans-serif] text-white text-[30.046px] leading-[22.535px] tracking-[-0.29px]">
                3 fichas por jugador
              </p>
              <p className="font-['SF_Pro_Display',sans-serif] italic text-[#f6f6f6] text-[20px] tracking-[1.8779px] leading-[31.924px]">
                Muévelas para ganar
              </p>
            </div>

            {/* Selección de cantidad de jugadores */}
            <div className="flex flex-col gap-[16px] items-center w-full">
              <div className="flex gap-[40px] items-center justify-center">
                {/* Botón 1 Jugador */}
                <button
                  onClick={() => setPlayerCount(1)}
                  className="bg-[#1a1e31] relative h-[108.395px] w-[104.226px] rounded-[29.183px] transition-all duration-200 transform hover:scale-105"
                >
                  {playerCount === 1 && (
                    <div aria-hidden="true" className="absolute border-3 border-[#4264ff] border-solid inset-0 pointer-events-none rounded-[29.183px]" />
                  )}
                  <div className="flex flex-col items-center justify-center h-full text-[#ececec]">
                    <p className="text-[44.47px] font-[1000] leading-[30.573px]" style={{ fontVariationSettings: "'wdth' 100" }}>1</p>
                    <p className="text-[11.192px] font-bold mt-2 tracking-wide" style={{ fontVariationSettings: "'wdth' 100" }}>JUGADOR</p>
                  </div>
                </button>

                {/* Botón 2 Jugadores */}
                <button
                  onClick={() => setPlayerCount(2)}
                  className="bg-[#1a1e31] relative h-[108.395px] w-[104.226px] rounded-[29.183px] transition-all duration-200 transform hover:scale-105"
                >
                  {playerCount === 2 && (
                    <div aria-hidden="true" className="absolute border-3 border-[#4264ff] border-solid inset-0 pointer-events-none rounded-[29.183px]" />
                  )}
                  <div className="flex flex-col items-center justify-center h-full text-[#ececec]">
                    <p className="text-[44.47px] font-[1000] leading-[30.573px]" style={{ fontVariationSettings: "'wdth' 100" }}>2</p>
                    <p className="text-[11.192px] font-bold mt-2 tracking-wide" style={{ fontVariationSettings: "'wdth' 100" }}>JUGADORES</p>
                  </div>
                </button>
              </div>

              {/* Texto instrucción */}
              <div className="font-['SF_Pro_Display',sans-serif] italic text-[#f6f6f6] text-[20px] text-center leading-[1.2] mt-2">
                <p>Clickeá para cambiar</p>
                <p>de personaje:</p>
              </div>
            </div>
          </div>

          {/* Selección de personajes */}
          <div className="flex flex-col gap-[16px] items-center w-full">
            <div className="flex gap-[40px] items-start justify-center">
              {/* Jugador 1 */}
              <div className="flex flex-col items-center w-[104.226px]">
                {/* Personaje clickeable Jugador 1 */}
                <button
                  onClick={handlePlayer1Click}
                  className="relative w-full h-[108.395px] transition-all duration-200 transform hover:scale-105 cursor-pointer"
                >
                  <div className="bg-[#1a1e31] rounded-[29.183px] absolute inset-0" />
                  <div className="absolute inset-0">
                    <img 
                      src={PLAYER1_CHARACTERS[player1Character]}
                      alt="Jugador 1"
                      className="w-full h-full object-contain scale-[1.2]"
                    />
                  </div>
                </button>
                <p className="font-['SF_Pro_Display',sans-serif] italic text-[#c9d0f0] text-[18px] leading-[1.2] mt-2">
                  Jugador 1
                </p>
              </div>

              {/* Jugador 2 */}
              <div className="flex flex-col items-center w-[104.226px]">
                {/* Personaje clickeable Jugador 2 */}
                <button
                  onClick={handlePlayer2Click}
                  className="relative w-full h-[108.395px] transition-all duration-200 transform hover:scale-105 cursor-pointer"
                >
                  <div className="bg-[#1a1e31] rounded-[29.183px] absolute inset-0" />
                  <div className="absolute inset-0">
                    <img 
                      src={PLAYER2_CHARACTERS[player2Character]}
                      alt="Jugador 2"
                      className="w-full h-full object-contain scale-[1.2]"
                    />
                  </div>
                </button>
                <p className="font-['SF_Pro_Display',sans-serif] italic text-[#c9d0f0] text-[18px] leading-[1.2] mt-2">
                  {playerCount === 1 ? 'Computadora' : 'Jugador 2'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Botón iniciar juego */}
        <button
          onClick={handleStartGame}
          className="
            relative bg-[#2c44b2] text-[#ededed] 
            h-[86.025px] w-full max-w-[310.838px]
            rounded-[34.41px] 
            font-['SF_Pro',sans-serif] font-[510]
            text-[27.528px]
            transition-all duration-200 transform hover:scale-105 hover:bg-[#3a52c7]
            shadow-[inset_0px_-15.098px_4.314px_0px_rgba(0,0,0,0.25)]
            leading-[35.557px]
          "
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Iniciar juego
        </button>

        {/* Footer */}
        <div className="flex gap-[8.627px] items-center text-[#c9d0f0] text-[17.255px] group">
          <a 
            href="https://nayic.com.ar/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex gap-[8.627px] items-center cursor-pointer transition-transform duration-200 hover:scale-105"
          >
            <div className="flex gap-[2.157px] items-center">
              <p className="font-['SF_Pro_Display',sans-serif] group-hover:text-white transition-colors tracking-[-0.3451px] leading-[1.2]">Hecho con</p>
              <img 
                src={imgSnake1} 
                alt="love" 
                className="w-[34.51px] h-[34.51px]"
              />
              <p className="font-['SF_Pro_Display',sans-serif] group-hover:text-white transition-colors tracking-[-0.3451px] leading-[1.2]">por</p>
            </div>
            <div className="relative w-[93.824px] h-[24.924px] group-hover:opacity-80 transition-opacity">
              <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 93.8237 24.9243">
                <g>
                  <path d={svgPaths.p242d3f00} fill="#FEFEFE" />
                  <path d={svgPaths.p1dff3b80} fill="#30385C" />
                  <path d={svgPaths.p3d575f00} fill="#30385C" />
                  <path d={svgPaths.pf97da00} fill="#30385C" />
                  <path d={svgPaths.p36dc7480} fill="#30385C" />
                  <path d={svgPaths.p699e00} fill="#30385C" />
                </g>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}