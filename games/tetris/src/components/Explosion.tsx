import imgExplosion from "../assets/efectos/explosion.webp";

export default function Group() {
  return (
    <div className="relative size-full flex items-center justify-center">
      <img 
        src={imgExplosion} 
        alt="Tetris blocks explosion" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}
