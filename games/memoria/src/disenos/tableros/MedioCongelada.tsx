import svgPaths from "../../svg/tablero-medio";
import imgCongelada from "../../assets/especiales/congelada.webp";

export default function MedioCongelada() {
  return (
    <div className="relative size-full" data-name="medio-congelada">
      <div className="absolute inset-0 flex items-center justify-center">
        <img alt="" className="max-w-none w-full h-full object-contain" src={imgCongelada} />
      </div>
    </div>
  );
}