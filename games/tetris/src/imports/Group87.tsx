import imgExplosion from "figma:asset/08aaaca97409735be4c8688a713fcfa0927c92cd.png";

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
