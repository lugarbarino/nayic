import img64 from "figma:asset/2f603bb9ef7803ead7c0c281d09326ff3957aabd.png";
import imgPattern2Vertical from "figma:asset/e13a8b632414947c0586101676f8fe934c915984.png";

export default function PatronUno() {
  return (
    <div className="bg-white relative size-full" data-name="Patron uno">
      <div className="absolute left-[303px] size-[1438px] top-[518px]" data-name="64">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img64} />
      </div>
      <div className="absolute left-[2311px] size-[1438px] top-[518px]" data-name="pattern 2 vertical">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern2Vertical} />
      </div>
    </div>
  );
}