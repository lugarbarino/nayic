import imgGato3 from "figma:asset/3e23abba6d703484a24c9bd3459b2da1ec0be466.png";

function Techo() {
  return (
    <div className="h-[124.888px] overflow-clip relative shrink-0 w-[800px]" data-name="TECHO">
      <div className="absolute left-0 size-[800px] top-0" data-name="gato 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGato3} />
      </div>
    </div>
  );
}

function Techo1() {
  return (
    <div className="h-[124.888px] overflow-clip relative w-[800px]" data-name="TECHO">
      <div className="absolute left-0 size-[800px] top-0" data-name="gato 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGato3} />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center relative size-full">
      <Techo />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Techo1 />
        </div>
      </div>
      <Techo />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Techo1 />
        </div>
      </div>
    </div>
  );
}