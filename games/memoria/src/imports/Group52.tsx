import imgRectangle from "figma:asset/d77efce17d2a00095abd3884f70f01f2eeae7402.png";
import imgBlackAndWhiteAestheticMinimalistModernSimpleTypographyCoconutCosmeticsLogo1 from "figma:asset/281ca7313c153631c22d1007e39c108da65384de.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.3737442195415497)+(var(--transform-inner-height)*0.9275317788124084)))] items-center justify-center left-[calc(50%-2.6px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.3737442195415497)+(var(--transform-inner-width)*0.9275317788124084)))]" style={{ "--transform-inner-width": "109.203125", "--transform-inner-height": "164.546875" } as React.CSSProperties}>
        <div className="flex-none rotate-[338.053deg]">
          <div className="h-[164.555px] relative w-[109.217px]" data-name="Rectangle">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[146px] left-1/2 top-[calc(50%+0.28px)] translate-x-[-50%] translate-y-[-50%] w-[186px]" data-name="Black And White Aesthetic Minimalist Modern Simple Typography Coconut Cosmetics Logo 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[159.62%] left-[-8.06%] max-w-none top-[-36.62%] w-[124.54%]" src={imgBlackAndWhiteAestheticMinimalistModernSimpleTypographyCoconutCosmeticsLogo1} />
        </div>
      </div>
    </div>
  );
}