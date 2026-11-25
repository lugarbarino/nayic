import { useState } from 'react';
import svgPaths from '../svg/logo-nayic';
import logoTateti from '../assets/logo-tateti.webp';
import corazonFirma from '../assets/corazon-firma.webp';
import { FICHAS_JUGADOR_1, FICHAS_JUGADOR_2 } from '../fichas';

interface StartMenuProps {
  onStartGame: (playerCount: 1 | 2, player1Character: number, player2Character: number) => void;
}

const PLAYER1_CHARACTERS = FICHAS_JUGADOR_1;
const PLAYER2_CHARACTERS = FICHAS_JUGADOR_2;

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
      className="relative w-full min-h-dvh flex [align-items:safe_center] justify-center p-4 md:p-4"
      style={{ 
        backgroundImage: "linear-gradient(105.242deg, rgb(12, 14, 23) 0%, rgb(65, 76, 125) 115.08%)" 
      }}
    >
      {/* Mobile Layout - Flexbox centrado */}
      <div className="md:hidden flex flex-col gap-[clamp(8px,1.8dvh,16px)] items-center w-full max-w-[420px]">
        {/* Logo */}
        <div className="h-[clamp(84px,15dvh,141px)] w-full max-w-[410px] px-2">
          <img 
            alt="Tateti Logo" 
            className="w-full h-full object-contain" 
            src={logoTateti} 
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
          className="bg-[#2c44b2] flex h-[clamp(64px,10dvh,86px)] items-center justify-center rounded-[30px] w-full max-w-[310.838px] transition-all duration-200 transform hover:scale-105 hover:bg-[#3a52c7] shadow-[inset_0px_-12px_4px_0px_rgba(0,0,0,0.25)] mt-1"
        >
          <p className="font-['SF_Pro',sans-serif] font-[510] leading-[35.557px] text-[#ededed] text-[27.528px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            Iniciar juego
          </p>
        </button>

        {/* Footer */}
        <div className="flex gap-[8.627px] items-center group mt-1 mb-2">
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
              <img alt="love" className="size-[34.51px] object-cover" src={corazonFirma} />
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
            src={logoTateti} 
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
                src={corazonFirma} 
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