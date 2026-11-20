import imgRectangle from "figma:asset/cdcf1f7625a3ee89091b79360388245355adf4ee.png";
import imgRectangle1 from "figma:asset/9b9ef54c60f358c9c10816499965123091da24c0.png";
import imgRectangle2 from "figma:asset/0b30a6272fac3edca0c6c8c118047f1efa1dd654.png";
import imgMonstruosMagic2 from "figma:asset/22c65a971d9201e6408044d03cce3296ed4c5cd3.png";
import imgAnimalesAire0 from "figma:asset/b4aed0465ca1606144088bd2bd730c0e5785c841.png";
import imgAnimalesAgua0 from "figma:asset/b183c90315c6cef4645e95b4aac831a1685ee4bc.png";
import imgAnimalesTierra2 from "figma:asset/4502c03a038b6829d6f7ad165fd7a96887f74ccb.png";
import imgRectangle3 from "figma:asset/fad67707429143b0c0e314c36366235c934fece3.png";
import imgRectangle4 from "figma:asset/ca32a8630769ee62dd225298e7e83c2a227dd7cc.png";
import imgClipPathGroup1 from "figma:asset/f6b69c40bbf37288a58166b1e5d4d50e04581f5b.png";
import imgRectangle5 from "figma:asset/d05319bff396f604cdc6ec707dfbf1d1e83bb38d.png";
import imgRectangle6 from "figma:asset/ad60d27d9b9304eec0cd48a38cfbac0a1f7f90d2.png";
import imgRectangle7 from "figma:asset/d77efce17d2a00095abd3884f70f01f2eeae7402.png";
import imgRectangle8 from "figma:asset/0c367d9cd7c510c9a703a7746b7acb892c16ec36.png";
import imgRectangle9 from "figma:asset/93f1eaa807b28d7d26255f0faffdf90383c6b788.png";

function Layer() {
  return (
    <div className="blur-[3.35px] filter h-[72px] overflow-clip relative w-[78px]" data-name="Layer_1">
      <div className="absolute inset-[9.22%_17.63%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute h-[71px] left-[calc(50%-117px)] overflow-clip top-[calc(50%-177.5px)] translate-x-[-50%] translate-y-[-50%] w-[72px]" data-name="Layer_1">
      <div className="absolute inset-[9.05%_11.05%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

function Layer2() {
  return <div className="absolute blur-[3px] filter h-[73px] left-[calc(50%-188px)] top-[calc(50%-94.5px)] translate-x-[-50%] translate-y-[-50%] w-[70px]" data-name="Layer_1" />;
}

function Layer3() {
  return (
    <div className="h-[65px] overflow-clip relative w-[62px]" data-name="Layer_1">
      <div className="absolute inset-[8.57%_6.82%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle2} />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[calc(50%+10.5px)] top-[calc(50%+103px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute bg-[#2e1830] h-[6px] left-[calc(50%+10.5px)] rounded-[30px] top-[calc(50%+103px)] translate-x-[-50%] translate-y-[-50%] w-[207px]" />
      <div className="absolute bg-[#5ba68f] h-[6px] left-[calc(50%-43.5px)] rounded-[30px] top-[calc(50%+103px)] translate-x-[-50%] translate-y-[-50%] w-[99px]" />
    </div>
  );
}

function MonstruosMagic() {
  return (
    <div className="absolute h-[121px] left-[calc(50%+255.5px)] overflow-clip top-[calc(50%-18.5px)] translate-x-[-50%] translate-y-[-50%] w-[133px]" data-name="monstruos_magic2">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMonstruosMagic2} />
    </div>
  );
}

function AnimalesAire() {
  return (
    <div className="absolute h-[223px] left-[calc(50%-201.5px)] overflow-clip top-[calc(50%-53.5px)] translate-x-[-50%] translate-y-[-50%] w-[217px]" data-name="animales_aire0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAnimalesAire0} />
    </div>
  );
}

function AnimalesAgua() {
  return (
    <div className="absolute h-[117px] left-[calc(50%-17px)] overflow-clip top-[calc(50%-140.5px)] translate-x-[-50%] translate-y-[-50%] w-[128px]" data-name="animales_agua0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAnimalesAgua0} />
    </div>
  );
}

function AnimalesTierra() {
  return (
    <div className="absolute h-[118px] left-[calc(50%+27.5px)] overflow-clip top-[calc(50%+184px)] translate-x-[-50%] translate-y-[-50%] w-[129px]" data-name="animales_tierra2">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAnimalesTierra2} />
    </div>
  );
}

export default function Loading() {
  return (
    <div className="bg-gradient-to-b from-[#1a0e1b] relative size-full to-[#4d2951]" data-name="Loading">
      <div className="absolute flex h-[72px] items-center justify-center left-[calc(50%-176px)] top-[calc(50%+174px)] translate-x-[-50%] translate-y-[-50%] w-[78px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Layer />
        </div>
      </div>
      <div className="absolute h-[59.3px] left-[calc(50%+205.63px)] top-[calc(50%+137.65px)] translate-x-[-50%] translate-y-[-50%] w-[67.255px]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle3} />
        </div>
      </div>
      <div className="absolute flex h-[58.16px] items-center justify-center left-[calc(50%+163.67px)] top-[calc(50%-130.92px)] translate-x-[-50%] translate-y-[-50%] w-[65.346px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[8.52deg]">
          <div className="blur-[2px] filter h-[50.033px] relative w-[58.58px]" data-name="Rectangle">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle4} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[103.5px] left-[calc(50%-0.25px)] top-[calc(50%-6.25px)] translate-x-[-50%] translate-y-[-50%] w-[227.5px]" data-name="Clip path group 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgClipPathGroup1} />
      </div>
      <div className="absolute h-[104px] left-[calc(50%+236px)] top-[calc(50%-2px)] translate-x-[-50%] translate-y-[-50%] w-[128px]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle5} />
        </div>
      </div>
      <div className="absolute h-[92px] left-[calc(50%-215.5px)] top-[calc(50%+24px)] translate-x-[-50%] translate-y-[-50%] w-[113px]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle6} />
        </div>
      </div>
      <div className="absolute flex h-[142.266px] items-center justify-center left-[calc(50%+9.94px)] top-[calc(50%-141.87px)] translate-x-[-50%] translate-y-[-50%] w-[136.138px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[218.865deg] scale-y-[-100%]">
          <div className="h-[119.27px] relative w-[78.725px]" data-name="Rectangle">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle7} />
            </div>
          </div>
        </div>
      </div>
      <Layer1 />
      <Layer2 />
      <div className="absolute flex h-[65px] items-center justify-center left-[calc(50%-205px)] top-[calc(50%-267.5px)] translate-x-[-50%] translate-y-[-50%] w-[62px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Layer3 />
        </div>
      </div>
      <div className="absolute h-[54px] left-[calc(50%+137.5px)] top-[calc(50%-273px)] translate-x-[-50%] translate-y-[-50%] w-[69px]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle8} />
        </div>
      </div>
      <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[calc(50%-46px)] not-italic text-[20px] text-white top-[calc(50%+59px)] w-[99px]">Cargando</p>
      <Group />
      <MonstruosMagic />
      <AnimalesAire />
      <AnimalesAgua />
      <div className="absolute flex h-[143.753px] items-center justify-center left-[calc(50%+8.71px)] top-[calc(50%+201.64px)] translate-x-[-50%] translate-y-[-50%] w-[151.357px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[27.181deg] skew-x-[0.69deg]">
          <div className="h-[99.15px] relative w-[120.43px]" data-name="Rectangle">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle9} />
            </div>
          </div>
        </div>
      </div>
      <AnimalesTierra />
    </div>
  );
}