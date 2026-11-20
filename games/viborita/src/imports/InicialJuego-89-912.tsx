import svgPaths from "./svg-aypab1bsz2";
import img1 from "figma:asset/903f46ca7495604536b3719030a008af6acde6b0.png";
import imgNoPodesMorir from "figma:asset/40592da350e5362c6611f3363c8e99b584ebc8ac.png";
import imgTiempo from "figma:asset/fbe2954c4dc95bf9a28dc6bc786a9070c1bfe3be.png";
import imgBomba from "figma:asset/433489d86a39e3c139747f0341e375e6eebc4c7f.png";
import imgPattern6Gema from "figma:asset/3110ef76711c4f3353c17b269ebaab0d3cd82156.png";
import imgPattern3Gema from "figma:asset/e952cf6291dbcb33bd44bb9298a5f7ef88957ca3.png";
import imgPattern7Gema from "figma:asset/c06a52c71adaf43b1d587d81e19676fb40a01d7c.png";
import imgPattern5Gema from "figma:asset/e4a740c515c2e38543c5786c5a6939f3b4b0b41b.png";
import imgPattern4Gema from "figma:asset/42142bd64faa7d19b7a5bda989834df14387315a.png";
import imgVida from "figma:asset/0070a5830bf613849c15e374024ec6338a3fbc11.png";
import imgPattern1Gema from "figma:asset/ba03558a7f50f263411a46762fa5ce3f53012232.png";
import imgPattern8Gema from "figma:asset/4a32e70415de88bdf04dd1220de4ac0fca9b33ea.png";
import imgPattern9Gema from "figma:asset/dd6c691185887eeec98332f49081e4afa714d622.png";
import imgPattern2Gema from "figma:asset/cec7e3725ebfce9576ff93c43ec678a85ab08788.png";
import imgPattern0Gema from "figma:asset/89aa62f9531ac245b1770b2b29859969fb655959.png";

function Frame() {
  return (
    <div className="absolute h-[168.348px] left-[calc(50%-8px)] overflow-clip top-[calc(50%-71.33px)] translate-x-[-50%] translate-y-[-50%] w-[396px]">
      <div className="absolute h-[148.961px] left-[calc(50%-0.95px)] top-[calc(50%-0.61px)] translate-x-[-50%] translate-y-[-50%] w-[351.44px]" data-name="Vector">
        <div className="absolute inset-[-5.54%_-2.35%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 368 166">
            <path d={svgPaths.p167c3b00} fill="var(--fill-0, #225953)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="8.25082" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[182.41px] left-[calc(50%-1.65px)] top-[calc(50%-0.16px)] translate-x-[-50%] translate-y-[-50%] w-[383.031px]" data-name="1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[209.98%] left-[0.68%] max-w-none top-[-58.66%] w-full" src={img1} />
        </div>
      </div>
    </div>
  );
}

export default function InicialJuego() {
  return (
    <div className="bg-gradient-to-b from-[#094138] relative size-full to-[#18413a]" data-name="inicial juego">
      <div className="absolute left-[calc(50%+223.52px)] size-[113.031px] top-[calc(50%-118.98px)] translate-x-[-50%] translate-y-[-50%]" data-name="no podes morir">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-22.28%] max-w-none size-[142.33%] top-[-15.59%]" src={imgNoPodesMorir} />
        </div>
      </div>
      <Frame />
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-61px)] text-[20px] text-white top-[calc(50%+27.5px)] w-[121px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cargando...
      </p>
      <div className="absolute left-[calc(50%+395.5px)] size-[124.3px] top-[calc(50%+210px)] translate-x-[-50%] translate-y-[-50%]" data-name="tiempo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-2.58%] max-w-none size-[106.49%] top-[-1.22%]" src={imgTiempo} />
        </div>
      </div>
      <div className="absolute left-[calc(50%-415.48px)] size-[113.031px] top-[calc(50%+210.02px)] translate-x-[-50%] translate-y-[-50%]" data-name="bomba">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[98.68%] left-[0.51%] max-w-none top-[0.94%] w-[96.82%]" src={imgBomba} />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%-514.5px)] size-[85px] top-[calc(50%-133px)] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[85px]" data-name="Pattern 6 gema">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern6Gema} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%-379.5px)] size-[85px] top-[calc(50%-317px)] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[85px]" data-name="Pattern 3 gema">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern3Gema} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%+113.5px)] size-[85px] top-[calc(50%-205px)] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[85px]" data-name="Pattern 7 gema">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern7Gema} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%-145.5px)] size-[85px] top-[calc(50%-232px)] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[85px]" data-name="Pattern 5 gema">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern5Gema} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%+438.5px)] size-[85px] top-[calc(50%-317px)] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[85px]" data-name="Pattern 4 gema">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern4Gema} />
          </div>
        </div>
      </div>
      <div className="absolute left-[calc(50%-273.48px)] size-[113.031px] top-[calc(50%-71.98px)] translate-x-[-50%] translate-y-[-50%]" data-name="Vida">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVida} />
      </div>
      <div className="absolute left-[calc(50%-514.5px)] size-[85px] top-[calc(50%+29px)] translate-x-[-50%] translate-y-[-50%]" data-name="Pattern 1 gema">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern1Gema} />
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%+499.5px)] size-[85px] top-[calc(50%+42px)] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[85px]" data-name="Pattern 8 gema">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern8Gema} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%+209.5px)] size-[85px] top-[calc(50%+81px)] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[85px]" data-name="Pattern 9 gema">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern9Gema} />
          </div>
        </div>
      </div>
      <div className="absolute left-[calc(50%+17.5px)] size-[85px] top-[calc(50%+210px)] translate-x-[-50%] translate-y-[-50%]" data-name="Pattern 2 gema">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern2Gema} />
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%-158.5px)] size-[85px] top-[calc(50%+114px)] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[85px]" data-name="Pattern 0 gema">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern0Gema} />
          </div>
        </div>
      </div>
    </div>
  );
}