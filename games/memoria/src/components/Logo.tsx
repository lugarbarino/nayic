import imgLogo from "figma:asset/0b547d5b3d5dcbb8817314a3b598f0c240e1709b.png";

export default function Logo() {
  return (
    <div>
      <img src={imgLogo} alt="Juego de Memoria" className="h-[75px] min-[907px]:h-[100px] w-auto" />
    </div>
  );
}