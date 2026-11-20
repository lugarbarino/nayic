import imgGato3 from "figma:asset/3e23abba6d703484a24c9bd3459b2da1ec0be466.png";

function Fondo() {
  return (
    <div className="col-1 h-[124.888px] ml-0 mt-0 overflow-clip relative row-1 w-[800px]" data-name="FONDO">
      <div className="absolute left-0 size-[800px] top-[-675.11px]" data-name="gato 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGato3} />
      </div>
    </div>
  );
}

function Fondo1() {
  return (
    <div className="h-[124.888px] overflow-clip relative w-[800px]" data-name="FONDO">
      <div className="absolute left-0 size-[800px] top-[-675.11px]" data-name="gato 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGato3} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
      <Fondo />
      <div className="col-1 flex h-[124.888px] items-center justify-center ml-[800px] mt-0 relative row-1 w-[800px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Fondo1 />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center leading-[0] relative size-full">
      {[...Array(2).keys()].map((_, i) => (
        <Group key={i} />
      ))}
    </div>
  );
}