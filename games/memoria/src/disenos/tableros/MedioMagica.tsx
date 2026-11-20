import svgPaths from "../../svg/tablero-medio";
import imgMedioMagica from "../../assets/especiales/magica.webp";

export default function MedioMagica() {
  return (
    <div className="relative size-full" data-name="medio-magica">
      <div className="absolute inset-0 flex items-center justify-center">
        <img alt="" className="max-w-none w-full h-full object-contain" src={imgMedioMagica} />
      </div>
    </div>
  );
}