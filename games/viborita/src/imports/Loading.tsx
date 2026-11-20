import svgPaths from "./svg-pnlmc09n1v";
import img1 from "figma:asset/903f46ca7495604536b3719030a008af6acde6b0.png";
import imgPatron2Gema from "figma:asset/ba03558a7f50f263411a46762fa5ce3f53012232.png";
import imgNoPodesMorir from "figma:asset/40592da350e5362c6611f3363c8e99b584ebc8ac.png";
import imgVida from "figma:asset/0070a5830bf613849c15e374024ec6338a3fbc11.png";
import imgBomba from "figma:asset/433489d86a39e3c139747f0341e375e6eebc4c7f.png";
import imgTiempo from "figma:asset/fbe2954c4dc95bf9a28dc6bc786a9070c1bfe3be.png";
import imgPatron7Gema from "figma:asset/3110ef76711c4f3353c17b269ebaab0d3cd82156.png";
import imgPatron10Gema from "figma:asset/c65910ca81ffa4f45b1245bde1576d6f5b859853.png";
import imgPatron8Gema from "figma:asset/c06a52c71adaf43b1d587d81e19676fb40a01d7c.png";
import imgPatron5Gema from "figma:asset/42142bd64faa7d19b7a5bda989834df14387315a.png";
import imgPatron11Gema from "figma:asset/13681ec076c031f8ba07661652106c0617acf531.png";
import imgPatron4Gema from "figma:asset/e952cf6291dbcb33bd44bb9298a5f7ef88957ca3.png";
import imgPatron9Gema from "figma:asset/0b81b473e07a4f12e06c3083dc06985121b86781.png";
import imgPatron12Gema from "figma:asset/027dd8a3f4c10b83dd7e5bfca13cfb7e36f55091.png";
import imgPatron6Gema from "figma:asset/e4a740c515c2e38543c5786c5a6939f3b4b0b41b.png";
import imgPatron3Gema from "figma:asset/cec7e3725ebfce9576ff93c43ec678a85ab08788.png";
import imgPattern0Gema from "figma:asset/89aa62f9531ac245b1770b2b29859969fb655959.png";

function Frame() {
  return (
    <div className="absolute h-[146.242px] left-[calc(50%-3.5px)] overflow-clip top-[calc(50%-82.38px)] translate-x-[-50%] translate-y-[-50%] w-[344px]">
      <div className="absolute h-[129.4px] left-[calc(50%-0.82px)] top-[calc(50%-0.53px)] translate-x-[-50%] translate-y-[-50%] w-[305.292px]" data-name="Vector">
        <div className="absolute inset-[-5.54%_-2.35%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 144">
            <path d={svgPaths.p3fee790} fill="var(--fill-0, #225953)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="7.16738" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[158.457px] left-[calc(50%-1.43px)] top-[calc(50%-0.14px)] translate-x-[-50%] translate-y-[-50%] w-[332.734px]" data-name="1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[209.98%] left-[0.68%] max-w-none top-[-58.66%] w-full" src={img1} />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-1/2 top-[calc(50%+64.5px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute bg-[#0d2e28] h-[6px] left-1/2 rounded-[30px] top-[calc(50%+64.5px)] translate-x-[-50%] translate-y-[-50%] w-[207px]" />
      <div className="absolute bg-[#a3994f] h-[6px] left-[calc(50%-54px)] rounded-[30px] top-[calc(50%+64.5px)] translate-x-[-50%] translate-y-[-50%] w-[99px]" />
    </div>
  );
}

export default function Loading() {
  return (
    <div className="bg-gradient-to-b from-[#094138] relative size-full to-[#18413a]" data-name="loading">
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes floatRotate {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }
        
        .float-1 { animation: float 3s ease-in-out infinite; animation-delay: 0s; }
        .float-2 { animation: float 3.5s ease-in-out infinite; animation-delay: 0.3s; }
        .float-3 { animation: float 2.8s ease-in-out infinite; animation-delay: 0.6s; }
        .float-4 { animation: float 3.2s ease-in-out infinite; animation-delay: 0.9s; }
        .float-5 { animation: float 2.5s ease-in-out infinite; animation-delay: 1.2s; }
        .float-6 { animation: float 3.3s ease-in-out infinite; animation-delay: 1.5s; }
        .float-7 { animation: float 2.9s ease-in-out infinite; animation-delay: 1.8s; }
        .float-8 { animation: float 3.1s ease-in-out infinite; animation-delay: 2.1s; }
        .float-9 { animation: floatRotate 3.4s ease-in-out infinite; animation-delay: 0.2s; }
        .float-10 { animation: floatRotate 2.7s ease-in-out infinite; animation-delay: 0.5s; }
        .float-11 { animation: floatRotate 3.6s ease-in-out infinite; animation-delay: 0.8s; }
        .float-12 { animation: floatRotate 2.6s ease-in-out infinite; animation-delay: 1.1s; }
        .float-13 { animation: floatRotate 3.8s ease-in-out infinite; animation-delay: 1.4s; }
        .float-14 { animation: floatRotate 3.0s ease-in-out infinite; animation-delay: 1.7s; }
        .float-15 { animation: floatRotate 2.4s ease-in-out infinite; animation-delay: 2.0s; }
        .float-16 { animation: floatRotate 3.7s ease-in-out infinite; animation-delay: 2.3s; }
      `}</style>
      
      <div className="absolute left-[calc(50%+354px)] size-[85px] top-[calc(50%-268px)] translate-x-[-50%] translate-y-[-50%] float-1" data-name="patron 2 -  gema">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron2Gema} />
      </div>
      <div className="absolute left-[calc(50%+224.02px)] size-[113.031px] top-[calc(50%-118.98px)] translate-x-[-50%] translate-y-[-50%] float-2" data-name="no podes morir">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-22.28%] max-w-none size-[142.33%] top-[-15.59%]" src={imgNoPodesMorir} />
        </div>
      </div>
      <Frame />
      <div className="absolute left-[calc(50%-272.98px)] size-[113.031px] top-[calc(50%-71.98px)] translate-x-[-50%] translate-y-[-50%] float-3" data-name="Vida">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVida} />
      </div>
      <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[calc(50%-56.5px)] not-italic text-[20px] text-white top-[calc(50%+20.5px)] w-[99px]">Cargando</p>
      <Group />
      <div className="absolute left-[calc(50%-414.98px)] size-[113.031px] top-[calc(50%+210.02px)] translate-x-[-50%] translate-y-[-50%] float-4" data-name="bomba">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[98.68%] left-[0.51%] max-w-none top-[0.94%] w-[96.82%]" src={imgBomba} />
        </div>
      </div>
      <div className="absolute left-[calc(50%+396px)] size-[113px] top-[calc(50%+210px)] translate-x-[-50%] translate-y-[-50%] float-5" data-name="tiempo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-2.58%] max-w-none size-[106.49%] top-[-1.22%]" src={imgTiempo} />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%+253px)] size-[85px] top-[calc(50%+326px)] translate-x-[-50%] translate-y-[-50%] float-6">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[85px]" data-name="patron 7 -  gema">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron7Gema} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%-28px)] size-[85px] top-[calc(50%-317px)] translate-x-[-50%] translate-y-[-50%] float-7">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[85px]" data-name="patron 10 -  gema">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron10Gema} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%+200px)] size-[85px] top-[calc(50%-317px)] translate-x-[-50%] translate-y-[-50%] float-8">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[85px]" data-name="patron 8 -  gema">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron8Gema} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%-445px)] size-[85px] top-[calc(50%-220px)] translate-x-[-50%] translate-y-[-50%] float-9">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[85px]" data-name="patron 5-  gema">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron5Gema} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%-186px)] size-[85px] top-[calc(50%-205px)] translate-x-[-50%] translate-y-[-50%] float-10">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[85px]" data-name="patron 11 -  gema">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron11Gema} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%+359px)] size-[85px] top-[calc(50%-1px)] translate-x-[-50%] translate-y-[-50%] float-11">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[85px]" data-name="patron 4 - gema">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron4Gema} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%+200px)] size-[85px] top-[calc(50%+42px)] translate-x-[-50%] translate-y-[-50%] float-12">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[85px]" data-name="patron 9 -  gema">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron9Gema} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%-403px)] size-[85px] top-[calc(50%+68px)] translate-x-[-50%] translate-y-[-50%] float-13">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[85px]" data-name="patron 12 -  gema">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron12Gema} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%-144px)] size-[85px] top-[calc(50%+138px)] translate-x-[-50%] translate-y-[-50%] float-14">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[85px]" data-name="patron 6 -  gema">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron6Gema} />
          </div>
        </div>
      </div>
      <div className="absolute left-[calc(50%+57px)] size-[85px] top-[calc(50%+257px)] translate-x-[-50%] translate-y-[-50%] float-15" data-name="patron 3 -  gema">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron3Gema} />
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%-229px)] size-[85px] top-[calc(50%+355px)] translate-x-[-50%] translate-y-[-50%] float-16">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[85px]" data-name="Pattern 0 gema">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern0Gema} />
          </div>
        </div>
      </div>
    </div>
  );
}