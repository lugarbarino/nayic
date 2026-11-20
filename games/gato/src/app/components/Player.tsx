interface PlayerProps {
  y: number; // Posición en porcentaje (0-100)
  groundLevel?: number; // Ya no se usa pero lo mantenemos por compatibilidad
}

export default function Player({ y }: PlayerProps) {
  // Detectar si es mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const leftPosition = isMobile ? '40px' : '150px'; // Más atrás en mobile

  return (
    <div
      className="absolute z-30 transition-all duration-100"
      style={{
        bottom: `${y}%`,
        left: leftPosition,
        width: '50px',
        height: '50px',
      }}
    >
      {/* Cuerpo del jugador - cubo simple */}
      <div className="relative w-full h-full">
        {/* Cubo principal */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-lg border-2 border-yellow-300">
          {/* Brillo */}
          <div className="absolute top-1 left-1 right-1 h-1/3 bg-white/30 rounded-t-md" />
        </div>
        
        {/* Ojos */}
        <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-white rounded-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-black rounded-full" />
        </div>
        <div className="absolute top-[30%] right-[20%] w-2 h-2 bg-white rounded-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-black rounded-full" />
        </div>

        {/* Sonrisa */}
        <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 w-5 h-2 border-b-2 border-white rounded-b-full" />
      </div>
    </div>
  );
}