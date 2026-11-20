import imgLogo from "../assets/logo.webp";

export default function Logo() {
  return (
    <div>
      <img src={imgLogo} alt="Juego de Memoria" className="h-[75px] min-[907px]:h-[100px] w-auto" />
    </div>
  );
}