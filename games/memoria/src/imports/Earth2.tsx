import imgEarth1 from "figma:asset/284d172e1baa6de6b5d19aa8db50f0d57e91f1ac.png";
import imgRectangle22 from "figma:asset/cb7c002f4cdc37e25735bf24c6e05ac2a86d1da5.png";

export default function Earth() {
  return (
    <div className="relative size-full" data-name="earth_1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[53px] py-[67px] relative size-full">
          <div className="absolute inset-[2.76%_7.74%]">
            <img alt="" className="block max-w-none size-full" height="341.065" src={imgEarth1} width="332.126" />
          </div>
          <div className="h-[379.4px] relative shrink-0 w-[382.828px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle22} />
          </div>
        </div>
      </div>
    </div>
  );
}
