import svgPaths from "./svg-q2n76mlszx";
import clsx from "clsx";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        {children}
      </svg>
    </div>
  );
}

export default function Paletas() {
  return (
    <div className="bg-gradient-to-b from-[#0b0941] relative size-full to-[#3c5d9e]" data-name="Paletas">
      <div className="absolute contents left-[600px] top-[336px]">
        <div className="absolute bg-[#d9d9d9] left-[600px] rounded-[18px] size-[74.353px] top-[336px]" />
        <div className="absolute bg-[#d9d9d9] left-[600px] rounded-[18px] size-[74.353px] top-[419.65px]" />
        <div className="absolute bg-[#d9d9d9] left-[683.65px] rounded-[18px] size-[74.353px] top-[336px]" />
        <div className="absolute bg-[#d9d9d9] left-[683.65px] rounded-[18px] size-[74.353px] top-[419.65px]" />
        <div className="absolute bg-[#d9d9d9] left-[767.29px] rounded-[18px] size-[74.353px] top-[336px]" />
        <div className="absolute bg-[#d9d9d9] left-[767.29px] rounded-[18px] size-[74.353px] top-[419.65px]" />
        <div className="absolute bg-[#d9d9d9] left-[850.94px] rounded-[18px] size-[74.353px] top-[336px]" />
        <div className="absolute bg-[#d9d9d9] left-[850.94px] rounded-[18px] size-[74.353px] top-[419.65px]" />
      </div>
      <p className="absolute font-['Capriola:Regular',sans-serif] h-[71px] leading-[31.146px] left-[767.5px] not-italic text-[32.344px] text-center text-white top-[101px] translate-x-[-50%] w-[171px]">Paleta de color:</p>
      <div className="absolute content-stretch flex gap-[43px] items-center left-[calc(50%+5.65px)] top-[calc(50%+227px)] translate-x-[-50%] translate-y-[-50%]">
        <div className="bg-[#995da9] content-stretch flex h-[78px] items-start relative rounded-[21px] shrink-0" data-name="button">
          <div className="h-[78px] relative rounded-[10px] shrink-0 w-[75px]" data-name="System / Chips Item">
            <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] left-[38px] text-[#f3f3f4] text-[12px] text-center text-nowrap top-[37px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Cartas
            </p>
            <Wrapper additionalClassNames="left-[25px] size-[25px] top-[12px]">
              <g clipPath="url(#clip0_20_46)" id="Layer_1">
                <path d={svgPaths.p11ea9c00} fill="var(--fill-0, white)" id="Vector" />
              </g>
              <defs>
                <clipPath id="clip0_20_46">
                  <rect fill="white" height="25" width="25" />
                </clipPath>
              </defs>
            </Wrapper>
          </div>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
        </div>
        <div className="bg-[#2781d9] content-stretch flex h-[124.8px] items-start relative rounded-[33.6px] shrink-0" data-name="button">
          <div className="h-[124.8px] relative rounded-[16px] shrink-0 w-[120px]" data-name="System / Chips Item">
            <div className="absolute left-[41.6px] size-[38.4px] top-[25.6px]" data-name="Shuffle">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.4 38.4">
                <g id="Shuffle">
                  <path d={svgPaths.p29c2f680} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
                </g>
              </svg>
            </div>
            <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[35.2px] left-[59.7px] text-[#f3f3f4] text-[19.2px] text-center text-nowrap top-[59.2px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Paletas
            </p>
          </div>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-14.4px_6.4px_0px_rgba(0,0,0,0.25)]" />
        </div>
        <div className="bg-[#2b815d] content-stretch flex h-[78px] items-start relative rounded-[21px] shrink-0 w-[75px]" data-name="button">
          <div className="h-[78px] relative rounded-[10px] shrink-0 w-[75px]" data-name="System / Chips Item">
            <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] left-[38.5px] text-[#f3f3f4] text-[12px] text-center text-nowrap top-[39px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Dados
            </p>
            <Wrapper additionalClassNames="inset-[16.67%_32%_51.28%_34.67%]">
              <path d={svgPaths.p115c2d00} fill="var(--fill-0, white)" id="Vector (Stroke)" />
            </Wrapper>
          </div>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
        </div>
      </div>
    </div>
  );
}