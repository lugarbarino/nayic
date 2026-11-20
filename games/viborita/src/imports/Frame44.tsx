import imgCola from "figma:asset/079855f9289ee8ba99d8d2e4cff2e80298832038.png";
import imgPat1 from "figma:asset/b9c3b761d67af0839fb7cf694ba501fe24026c9e.png";
import imgPat2 from "figma:asset/edc905694e19d2cced03a8af6f9ab4cd5f5dc33f.png";
import imgCodo from "figma:asset/bca8413878eb2df133017c3dab94ea193ba0b1ac.png";
import imgPat6 from "figma:asset/65c4a4579de94d432ca4283a47cde2ebdb4b82da.png";
import imgPat7 from "figma:asset/2357372e1220e042bb5c7a570e723853e1406650.png";
import imgCabeza from "figma:asset/3d5b3ce59a40adeeacf8900b80dc42c754908b15.png";

function Cola() {
  return (
    <div className="relative shrink-0 size-[185px]" data-name="cola">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgCola} />
    </div>
  );
}

function Pat() {
  return (
    <div className="relative shrink-0 size-[185px]" data-name="pat 1">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgPat1} />
    </div>
  );
}

function Pat1() {
  return (
    <div className="relative shrink-0 size-[185px]" data-name="pat 2">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgPat2} />
    </div>
  );
}

function Codo() {
  return (
    <div className="relative shrink-0 size-[185px]" data-name="codo">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgCodo} />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Cola />
      <Pat />
      <Pat1 />
      <Codo />
    </div>
  );
}

function Pat2() {
  return (
    <div className="relative size-[185px]" data-name="pat 6">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgPat6} />
    </div>
  );
}

function Pat3() {
  return (
    <div className="relative size-[185px]" data-name="pat 7">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgPat7} />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Pat2 />
        </div>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "185", "--transform-inner-height": "185" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <Pat3 />
        </div>
      </div>
    </div>
  );
}

function Cabeza() {
  return (
    <div className="relative size-[185px]" data-name="Cabeza">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgCabeza} />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[82px] top-[158px] w-[740px]">
      <Frame1 />
      <Frame2 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "185", "--transform-inner-height": "185" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Cabeza />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <Frame3 />
    </div>
  );
}