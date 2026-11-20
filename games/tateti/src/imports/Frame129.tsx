function SystemChipsItem() {
  return (
    <div className="h-[107.62px] relative rounded-[13.797px] shrink-0 text-[#ececec] text-center w-[103.48px]" data-name="System / Chips Item">
      <p className="absolute css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[30.354px] left-[52.57px] text-[11.112px] top-[55.89px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        JUGADOR
      </p>
      <div className="absolute flex flex-col font-['SF_Pro:Black',sans-serif] font-[1000] h-[36.808px] justify-center leading-[0] left-[calc(50%+0.35px)] text-[44.152px] top-[37.85px] translate-x-[-50%] translate-y-[-50%] w-[70.839px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[30.354px]">1</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0f111a] content-stretch flex h-[107.62px] items-start relative rounded-[28.975px] shrink-0 w-[103.48px]" data-name="button">
      <SystemChipsItem />
    </div>
  );
}

function SystemChipsItem1() {
  return (
    <div className="h-[106.809px] relative rounded-[13.693px] shrink-0 text-[#ececec] text-center w-[102.701px]" data-name="System / Chips Item">
      <p className="absolute css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[30.125px] left-[51.48px] text-[11.028px] top-[63.05px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        JUGADORES
      </p>
      <div className="absolute flex flex-col font-['SF_Pro:Black',sans-serif] font-[1000] h-[36.531px] justify-center leading-[0] left-[calc(50%+0.34px)] text-[43.819px] top-[45.15px] translate-x-[-50%] translate-y-[-50%] w-[70.305px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[30.125px]">2</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0f111a] content-stretch flex h-[106.809px] items-start relative rounded-[28.756px] shrink-0 w-[102.701px]" data-name="button">
      <div aria-hidden="true" className="absolute border-3 border-[#4264ff] border-solid inset-0 pointer-events-none rounded-[28.756px]" />
      <SystemChipsItem1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[63.61px] items-center relative size-full">
      <Button />
      <Button1 />
    </div>
  );
}