import imgVida from "figma:asset/0070a5830bf613849c15e374024ec6338a3fbc11.png";
import img110 from "figma:asset/47024adfd3e85d274dc21843334e28e9dd99dc5b.png";
import img41 from "figma:asset/e54d2c41850b272e4fcad2cd9e18f29742c38ed9.png";
import imgRocaFlotaChica1 from "figma:asset/1bcbc7e6c3b5aa855e39a962ec15116d79471349.png";
import img5718 from "figma:asset/530836fef5c094239ea333293e2c1d0e6eebd6d7.png";
import img59 from "figma:asset/7f3cd6e7bd4f74c12939d3eda695aba00f6c6517.png";
import img151 from "figma:asset/c6d1319ead5189f45ea6cf756781445fddee50aa.png";

interface GroupProps {
  progress: number;
}

function Group({ progress }: GroupProps) {
  const barWidth = 139.009; // Ancho total de la barra
  const progressWidth = (barWidth * progress) / 100;
  
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="bg-[#261231] col-1 h-[4.029px] ml-0 mt-0 rounded-[20.146px] row-1 w-[139.009px]" />
      <div 
        className="bg-[#f2abb5] col-1 h-[4.029px] ml-0 mt-0 rounded-[20.146px] row-1" 
        style={{ width: `${progressWidth}px` }}
      />
    </div>
  );
}

function Frame({ progress }: { progress: number }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12.759px] items-center left-[calc(50%-7px)] top-[calc(50%+95.38px)] translate-x-[-50%] translate-y-[-50%] w-[209.845px]">
      <p className="css-4hzbpn font-['Capriola:Regular',sans-serif] leading-[14.774px] min-w-full not-italic relative shrink-0 text-[13.431px] text-center text-white w-[min-content]">Cargando</p>
      <Group progress={progress} />
    </div>
  );
}

function Brillo() {
  return <div className="absolute left-[calc(50%+214.92px)] size-[98.149px] top-[calc(50%+108.46px)] translate-x-[-50%] translate-y-[-50%]" data-name="brillo" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0s' }} />;
}

function Brillo1() {
  return (
    <div className="absolute left-[calc(50%-7.09px)] size-[88.011px] top-[calc(50%+184.49px)] translate-x-[-50%] translate-y-[-50%]" data-name="brillo" style={{ animation: 'float 3.5s ease-in-out infinite', animationDelay: '0.5s' }}>
      <div className="absolute left-[calc(50%+0.32px)] size-[52.39px] top-[calc(50%+0.32px)] translate-x-[-50%] translate-y-[-50%]" data-name="Vida">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVida} />
      </div>
    </div>
  );
}

function Group1({ progress }: { progress: number }) {
  return (
    <div className="absolute contents left-[calc(50%+49.99px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] pointer-events-none">
      <Frame progress={progress} />
      <div className="absolute h-[129.768px] left-[calc(50%-7.01px)] top-[calc(50%-23.73px)] translate-x-[-50%] translate-y-[-50%] w-[307.143px]" data-name="1 10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[236.36%] left-[-0.16%] max-w-none top-[-68.99%] w-full" src={img110} />
        </div>
      </div>
      <div className="absolute flex h-[117.521px] items-center justify-center left-[calc(50%-7.03px)] top-[calc(50%-168.74px)] translate-x-[-50%] translate-y-[-50%] w-[78.107px]" style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '1s' }}>
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[117.521px] relative w-[78.107px]" data-name="4 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[149.85%] left-[-53.44%] max-w-none top-[-15.08%] w-[225.28%]" src={img41} />
            </div>
          </div>
        </div>
      </div>
      <Brillo />
      <Brillo1 />
      <div className="absolute h-[60.991px] left-[calc(50%-120.53px)] top-[calc(50%+185px)] translate-x-[-50%] translate-y-[-50%] w-[86.945px]" data-name="roca flota chica 1" style={{ animation: 'float 3.2s ease-in-out infinite', animationDelay: '0.3s' }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRocaFlotaChica1} />
      </div>
      <div className="absolute h-[22.855px] left-[calc(50%+49.51px)] top-[calc(50%-165.39px)] translate-x-[-50%] translate-y-[-50%] w-[24.83px]" data-name="57 18">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1929.63%] left-[-1129.8%] max-w-none top-[-1346.75%] w-[1776.14%]" src={img5718} />
        </div>
      </div>
    </div>
  );
}

function Group2({ progress }: { progress: number }) {
  return (
    <div className="absolute contents left-[calc(50%+49.99px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]">
      <Group1 progress={progress} />
    </div>
  );
}

function Group3({ progress }: { progress: number }) {
  return (
    <div className="absolute contents left-[calc(50%+49.99px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]">
      <Group2 progress={progress} />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[calc(50%+3.2px)] top-[calc(50%+0.09px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute h-[10.427px] left-[calc(50%-116.12px)] top-[calc(50%-109.76px)] translate-x-[-50%] translate-y-[-50%] w-[9.863px]" data-name="57 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[4224.32%] left-[-540%] max-w-none top-[-661%] w-[4465.71%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[22.659px] left-[calc(50%-110.57px)] top-[calc(50%+10.91px)] translate-x-[-50%] translate-y-[-50%] w-[20.959px]" data-name="57 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1953.75%] left-[-213.79%] max-w-none top-[-861.09%] w-[2112.16%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[14.851px] left-[calc(50%-179.18px)] top-[calc(50%-46.72px)] translate-x-[-50%] translate-y-[-50%] w-[13.501px]" data-name="57 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[2841.82%] left-[-765.18%] max-w-none top-[-449.27%] w-[3126%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[61.855px] left-[calc(50%-106.87px)] top-[calc(50%+86.26px)] translate-x-[-50%] translate-y-[-50%] w-[68.916px]" data-name="57 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[713.7%] left-[-53.81%] max-w-none top-[-467.07%] w-[640.57%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[25.781px] left-[calc(50%-59.93px)] top-[calc(50%+12.47px)] translate-x-[-50%] translate-y-[-50%] w-[24.921px]" data-name="57 7">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1736.67%] left-[-431.72%] max-w-none top-[-760.67%] w-[1796.55%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[22.131px] left-[calc(50%+121.83px)] top-[calc(50%-126.21px)] translate-x-[-50%] translate-y-[-50%] w-[23.498px]" data-name="57 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1929.63%] left-[-711.17%] max-w-none top-[-275.43%] w-[1817.44%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[55.683px] left-[calc(50%+154.73px)] top-[calc(50%-87.13px)] translate-x-[-50%] translate-y-[-50%] w-[64.964px]" data-name="57 13">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[789.39%] left-[-230.25%] max-w-none top-[-515.06%] w-[676.62%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[55.683px] left-[calc(50%-83.5px)] top-[calc(50%-170.26px)] translate-x-[-50%] translate-y-[-50%] w-[64.964px]" data-name="57 20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[789.39%] left-[-230.25%] max-w-none top-[-515.06%] w-[676.62%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[56.195px] left-[calc(50%-15.82px)] top-[calc(50%+27.68px)] translate-x-[-50%] translate-y-[-50%] w-[50.294px]" data-name="57 8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[781.5%] left-[-304.81%] max-w-none top-[-314.04%] w-[873.18%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[39.701px] left-[calc(50%-11.14px)] top-[calc(50%-102.22px)] translate-x-[-50%] translate-y-[-50%] w-[41.391px]" data-name="57 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1108.51%] left-[-606.28%] max-w-none top-[-150.15%] w-[1063.27%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[23.322px] left-[calc(50%-160.08px)] top-[calc(50%+13.27px)] translate-x-[-50%] translate-y-[-50%] w-[25.337px]" data-name="57 16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1929.63%] left-[-1129.8%] max-w-none top-[-1346.75%] w-[1776.14%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[56.684px] left-[calc(50%+56.4px)] top-[calc(50%+50.22px)] translate-x-[-50%] translate-y-[-50%] w-[52.794px]" data-name="57 9">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[766.18%] left-[-451.73%] max-w-none top-[-302.34%] w-[822.63%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[76.916px] left-[calc(50%-131.62px)] top-[calc(50%-39.01px)] translate-x-[-50%] translate-y-[-50%] w-[82.25px]" data-name="57 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[570.44%] left-[-417.32%] max-w-none top-[-49.34%] w-[533.45%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[76.916px] left-[calc(50%+151.21px)] top-[calc(50%+159.81px)] translate-x-[-50%] translate-y-[-50%] w-[82.25px]" data-name="57 15">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[570.44%] left-[-404.04%] max-w-none top-[-361.76%] w-[533.45%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[103.622px] left-[calc(50%+147.5px)] top-[calc(50%+51.39px)] translate-x-[-50%] translate-y-[-50%] w-[89.02px]" data-name="57 10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[423.58%] left-[-383.26%] max-w-none top-[-144.76%] w-[493.06%]" src={img5718} />
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[calc(50%+3.2px)] top-[calc(50%+0.09px)] translate-x-[-50%] translate-y-[-50%]">
      <Group5 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[calc(50%+3.2px)] top-[calc(50%+0.09px)] translate-x-[-50%] translate-y-[-50%]">
      <Group6 />
    </div>
  );
}

export default function Loading({ progress = 0 }: { progress?: number }) {
  return (
    <div className="relative size-full" data-name="loading" style={{ backgroundImage: "linear-gradient(103.134deg, rgb(74, 42, 107) 0.6815%, rgb(41, 64, 138) 42.887%, rgb(117, 56, 82) 99.319%)" }}>
      <style>{`
        @keyframes float {
          0%, 100% {
            margin-top: 0px;
          }
          50% {
            margin-top: -10px;
          }
        }
      `}</style>
      <div className="absolute flex h-[257px] items-center justify-center left-[5034px] top-[751px] w-[151px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[257px] relative w-[151px]" data-name="5 9">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[246.96%] left-[-321.7%] max-w-none top-0 w-[421.7%]" src={img59} />
            </div>
          </div>
        </div>
      </div>
      <Group3 progress={progress} />
      <Group4 />
    </div>
  );
}