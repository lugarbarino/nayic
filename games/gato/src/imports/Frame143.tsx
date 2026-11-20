import imgGato3 from "figma:asset/3e23abba6d703484a24c9bd3459b2da1ec0be466.png";

function Techo() {
  return (
    <div className="h-[86px] overflow-clip relative shrink-0 w-[800px]" data-name="TECHO">
      <div className="absolute left-[-5px] size-[557px] top-[-3px]" data-name="gato 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGato3} />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex h-[86px] items-center relative shrink-0 w-[552px]">
      <Techo />
    </div>
  );
}

function Techo1() {
  return (
    <div className="h-[86px] overflow-clip relative shrink-0 w-[800px]" data-name="TECHO">
      <div className="absolute left-[-5px] size-[557px] top-[-3px]" data-name="gato 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGato3} />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex h-[86px] items-center relative w-[552px]">
      <Techo1 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex items-center relative size-full">
      <Frame />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame1 />
        </div>
      </div>
      <Frame />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame1 />
        </div>
      </div>
      <Frame />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}