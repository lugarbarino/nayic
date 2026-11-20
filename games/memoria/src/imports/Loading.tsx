import imgRectangle2 from "figma:asset/704e8cde9072e44031be2e4179bb98d92d9a6814.png";
import imgRectangle3 from "figma:asset/ee07da22dbb594c480d385bbab277ee5f9b3e78d.png";
import imgRectangle4 from "figma:asset/cdcf1f7625a3ee89091b79360388245355adf4ee.png";
import imgRectangle5 from "figma:asset/0c367d9cd7c510c9a703a7746b7acb892c16ec36.png";
import imgRectangle6 from "figma:asset/d77efce17d2a00095abd3884f70f01f2eeae7402.png";
import imgBlackAndWhiteAestheticMinimalistModernSimpleTypographyCoconutCosmeticsLogo1 from "figma:asset/281ca7313c153631c22d1007e39c108da65384de.png";
import imgRectangle7 from "figma:asset/93f1eaa807b28d7d26255f0faffdf90383c6b788.png";
import img6 from "figma:asset/e17513b61900d7523a1ca47f4c10e8d0bddb757d.png";
import imgRectangle8 from "figma:asset/ca32a8630769ee62dd225298e7e83c2a227dd7cc.png";
import { imgRectangle, imgRectangle1 } from "./svg-fnbok";

function Group7() {
  return (
    <div className="absolute contents left-[calc(50%-3.5px)] top-[calc(50%+139px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute bg-[#1d0f1e] h-[12px] left-[calc(50%-3.5px)] rounded-[40px] top-[calc(50%+139px)] translate-x-[-50%] translate-y-[-50%] w-[230px]">
        <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-[-4px] pointer-events-none rounded-[44px]" />
      </div>
      <div className="absolute bg-[#9952a3] h-[12px] left-[calc(50%-45px)] rounded-[40px] top-[calc(50%+139px)] translate-x-[-50%] translate-y-[-50%] w-[147px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[44.82%_19.17%_41.85%_16.88%]" data-name="Group">
      <div className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute inset-[44.82%_19.17%_41.85%_16.88%] mask-position-[-0.356px,_-0.001px_-0.462px,_0.277px] mask-size-[252px_114.545px,_251.29px_113.067px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}'), url('${imgRectangle1}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle2} />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[44.82%_19.17%_41.85%_16.88%]" data-name="Group">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[44.82%_19.17%_41.85%_16.88%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[44.82%_19.17%_41.85%_16.88%]" data-name="Group">
      <div className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute inset-[44.82%_19.17%_41.85%_16.88%] mask-position-[-0.356px,_-0.001px_-0.462px,_0.277px] mask-size-[252px_114.545px,_251.29px_113.067px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}'), url('${imgRectangle1}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle3} />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[44.82%_19.17%_41.85%_16.88%]" data-name="Group">
      <Group3 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[44.82%_19.17%_41.85%_16.88%]" data-name="Mask group">
      <Group2 />
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[44.82%_19.17%_41.85%_16.88%]" data-name="Group">
      <MaskGroup />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[44.85%_19.17%_41.88%_16.88%]" data-name="Clip path group">
      <Group5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[44.85%_19.17%_41.88%_16.88%]" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[44.76%_19.08%_41.79%_16.79%]" data-name="Clip path group">
      <Group6 />
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute h-[101px] left-[264px] overflow-clip top-[217px] w-[99px]" data-name="Layer_1">
      <div className="absolute inset-[9.22%_17.63%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle4} />
        </div>
      </div>
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute h-[83px] left-[38px] overflow-clip top-[634px] w-[81px]" data-name="Layer_1">
      <div className="absolute bottom-[8.77%] left-0 right-0 top-[8.76%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle5} />
        </div>
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="bg-gradient-to-b from-[#1b0f1c] relative size-full to-[#4d2951]" data-name="Loading">
      <Group7 />
      <ClipPathGroup1 />
      <div className="absolute flex inset-[3.87%_36.44%_73.42%_22.14%] items-center justify-center">
        <div className="flex-none h-[164.555px] rotate-[338.053deg] w-[109.217px]">
          <div className="relative size-full" data-name="Rectangle">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle6} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[146px] left-[78px] top-[57px] w-[186px]" data-name="Black And White Aesthetic Minimalist Modern Simple Typography Coconut Cosmetics Logo 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[159.62%] left-[-8.06%] max-w-none top-[-36.62%] w-[124.54%]" src={imgBlackAndWhiteAestheticMinimalistModernSimpleTypographyCoconutCosmeticsLogo1} />
        </div>
      </div>
      <div className="absolute flex inset-[78.55%_9.37%_1.88%_45.29%] items-center justify-center">
        <div className="flex-none h-[115.34px] rotate-[26.834deg] w-[141.341px]">
          <div className="relative size-full" data-name="Rectangle">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle7} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[200px] left-[194px] top-[634px] w-[199px]" data-name="6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img6} />
      </div>
      <Layer />
      <Layer1 />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.14815442264080048)+(var(--transform-inner-height)*0.9889642596244812)))] items-center justify-center left-[39px] top-[267px] w-[calc(1px*((var(--transform-inner-height)*0.14815442264080048)+(var(--transform-inner-width)*0.9889642596244812)))]" style={{ "--transform-inner-width": "71", "--transform-inner-height": "61" } as React.CSSProperties}>
        <div className="flex-none rotate-[8.52deg]">
          <div className="h-[61.272px] relative shadow-[0px_4px_114px_0px_rgba(0,0,0,0.25)] w-[71.308px]" data-name="Rectangle">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle8} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}