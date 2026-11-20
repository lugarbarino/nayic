import imgVida from "../../assets/interfaz/corazon-vida.webp";
import img110 from "../../assets/logo-gato.webp";
import img41 from "../../assets/carga/murcielago.webp";
import imgRocaFlotaChica1 from "../../assets/flotantes/azul-4.webp";
import img151 from "../../assets/carga/cristal-chico.webp";
import img5718 from "../../assets/carga/particulas-burbujas.webp";
import img59 from "../../assets/carga/estalactitas.webp";

interface GroupProps {
  progress: number;
}

function Group({ progress }: GroupProps) {
  const barWidth = 207; // Ancho total de la barra
  const progressWidth = (barWidth * progress) / 100;
  
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="bg-[#261231] col-1 h-[6px] ml-0 mt-0 rounded-[30px] row-1 w-[207px]" />
      <div 
        className="bg-[#f2abb5] col-1 h-[6px] ml-0 mt-0 rounded-[30px] row-1" 
        style={{ width: `${progressWidth}px` }}
      />
    </div>
  );
}

function Frame({ progress }: { progress: number }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[19px] items-center left-[calc(50%-9.31px)] top-[calc(50%+140.8px)] translate-x-[-50%] translate-y-[-50%] w-[312.483px]">
      <p className="css-4hzbpn font-['Capriola:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[20px] text-center text-white w-[min-content]">Cargando</p>
      <Group progress={progress} />
    </div>
  );
}

function Brillo() {
  return <div className="absolute left-[calc(50%+321.15px)] size-[146.155px] top-[calc(50%+160.29px)] translate-x-[-50%] translate-y-[-50%]" data-name="brillo" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0s' }} />;
}

function Brillo1() {
  return (
    <div className="absolute left-[calc(50%-9.45px)] size-[131.059px] top-[calc(50%+273.51px)] translate-x-[-50%] translate-y-[-50%]" data-name="brillo" style={{ animation: 'float 3.5s ease-in-out infinite', animationDelay: '0.5s' }}>
      <div className="absolute left-[calc(50%+0.48px)] size-[78.014px] top-[calc(50%+0.48px)] translate-x-[-50%] translate-y-[-50%]" data-name="Vida">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVida} />
      </div>
    </div>
  );
}

function Group1({ progress }: { progress: number }) {
  return (
    <div className="absolute contents left-[calc(50%+13.33px)] top-[calc(50%-0.48px)] translate-x-[-50%] translate-y-[-50%] pointer-events-none">
      <Frame progress={progress} />
      <div className="absolute h-[193.239px] left-[calc(50%-9.33px)] top-[calc(50%-36.57px)] translate-x-[-50%] translate-y-[-50%] w-[457.371px]" data-name="1 10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[236.36%] left-[-0.16%] max-w-none top-[-68.99%] w-full" src={img110} />
        </div>
      </div>
      <div className="absolute flex h-[175.003px] items-center justify-center left-[calc(50%-9.35px)] top-[calc(50%-252.5px)] translate-x-[-50%] translate-y-[-50%] w-[116.31px]" style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '1s' }}>
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[175.003px] relative w-[116.31px]" data-name="4 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[149.85%] left-[-53.44%] max-w-none top-[-15.08%] w-[225.28%]" src={img41} />
            </div>
          </div>
        </div>
      </div>
      <Brillo />
      <Brillo1 />
      <div className="absolute h-[90.823px] left-[calc(50%-303.1px)] top-[calc(50%+100.92px)] translate-x-[-50%] translate-y-[-50%] w-[129.47px]" data-name="roca flota chica 1" style={{ animation: 'float 3.2s ease-in-out infinite', animationDelay: '0.3s' }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRocaFlotaChica1} />
      </div>
      <div className="absolute h-[181.149px] left-[calc(50%+304.68px)] top-[calc(50%-48.65px)] translate-x-[-50%] translate-y-[-50%] w-[179.64px]" data-name="15 1" style={{ animation: 'float 3.8s ease-in-out infinite', animationDelay: '0.7s' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[145%] left-[-22.69%] max-w-none top-[-23.33%] w-[146.22%]" src={img151} />
        </div>
      </div>
      <div className="absolute h-[34.034px] left-[calc(50%+74.84px)] top-[calc(50%-247.5px)] translate-x-[-50%] translate-y-[-50%] w-[36.975px]" data-name="57 18">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1929.63%] left-[-1129.8%] max-w-none top-[-1346.75%] w-[1776.14%]" src={img5718} />
        </div>
      </div>
    </div>
  );
}

function Group2({ progress }: { progress: number }) {
  return (
    <div className="absolute contents left-[calc(50%+13.33px)] top-[calc(50%-0.48px)] translate-x-[-50%] translate-y-[-50%]">
      <Group1 progress={progress} />
    </div>
  );
}

function Group3({ progress }: { progress: number }) {
  return (
    <div className="absolute contents left-[calc(50%+13.33px)] top-[calc(50%-0.48px)] translate-x-[-50%] translate-y-[-50%]">
      <Group2 progress={progress} />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[calc(50%-19.54px)] top-[calc(50%-1.1px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute h-[15.527px] left-[calc(50%-171.8px)] top-[calc(50%-164.67px)] translate-x-[-50%] translate-y-[-50%] w-[14.688px]" data-name="57 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[4224.32%] left-[-540%] max-w-none top-[-661%] w-[4465.71%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[33.741px] left-[calc(50%-163.53px)] top-[calc(50%+15.02px)] translate-x-[-50%] translate-y-[-50%] w-[31.211px]" data-name="57 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1953.75%] left-[-213.79%] max-w-none top-[-861.09%] w-[2112.16%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[22.115px] left-[calc(50%-265.7px)] top-[calc(50%-70.8px)] translate-x-[-50%] translate-y-[-50%] w-[20.105px]" data-name="57 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[2841.82%] left-[-765.18%] max-w-none top-[-449.27%] w-[3126%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[92.109px] left-[calc(50%-158.02px)] top-[calc(50%+127.23px)] translate-x-[-50%] translate-y-[-50%] w-[102.624px]" data-name="57 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[713.7%] left-[-53.81%] max-w-none top-[-467.07%] w-[640.57%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[38.39px] left-[calc(50%-88.12px)] top-[calc(50%+17.34px)] translate-x-[-50%] translate-y-[-50%] w-[37.11px]" data-name="57 7">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1736.67%] left-[-431.72%] max-w-none top-[-760.67%] w-[1796.55%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[32.956px] left-[calc(50%+182.54px)] top-[calc(50%-189.17px)] translate-x-[-50%] translate-y-[-50%] w-[34.991px]" data-name="57 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1929.63%] left-[-711.17%] max-w-none top-[-275.43%] w-[1817.44%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[82.919px] left-[calc(50%+231.53px)] top-[calc(50%-130.98px)] translate-x-[-50%] translate-y-[-50%] w-[96.739px]" data-name="57 13">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[789.39%] left-[-230.25%] max-w-none top-[-515.06%] w-[676.62%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[82.919px] left-[calc(50%-345.13px)] top-[calc(50%-10.21px)] translate-x-[-50%] translate-y-[-50%] w-[96.739px]" data-name="57 19">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[789.39%] left-[-230.25%] max-w-none top-[-515.06%] w-[676.62%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[82.919px] left-[calc(50%-123.22px)] top-[calc(50%-254.76px)] translate-x-[-50%] translate-y-[-50%] w-[96.739px]" data-name="57 20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[789.39%] left-[-230.25%] max-w-none top-[-515.06%] w-[676.62%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[83.68px] left-[calc(50%-22.44px)] top-[calc(50%+39.99px)] translate-x-[-50%] translate-y-[-50%] w-[74.894px]" data-name="57 8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[781.5%] left-[-304.81%] max-w-none top-[-314.04%] w-[873.18%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[59.12px] left-[calc(50%-15.48px)] top-[calc(50%-153.44px)] translate-x-[-50%] translate-y-[-50%] w-[61.636px]" data-name="57 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1108.51%] left-[-606.28%] max-w-none top-[-150.15%] w-[1063.27%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[33.211px] left-[calc(50%+336.38px)] top-[calc(50%+58.53px)] translate-x-[-50%] translate-y-[-50%] w-[36.081px]" data-name="57 14">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1929.63%] left-[-1129.8%] max-w-none top-[-1346.75%] w-[1776.14%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[33.279px] left-[calc(50%-315.04px)] top-[calc(50%-140.7px)] translate-x-[-50%] translate-y-[-50%] w-[36.155px]" data-name="57 17">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1929.63%] left-[-1129.8%] max-w-none top-[-1346.75%] w-[1776.14%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[34.729px] left-[calc(50%-237.26px)] top-[calc(50%+18.53px)] translate-x-[-50%] translate-y-[-50%] w-[37.73px]" data-name="57 16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1929.63%] left-[-1129.8%] max-w-none top-[-1346.75%] w-[1776.14%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[84.409px] left-[calc(50%+85.1px)] top-[calc(50%+73.56px)] translate-x-[-50%] translate-y-[-50%] w-[78.616px]" data-name="57 9">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[766.18%] left-[-451.73%] max-w-none top-[-302.34%] w-[822.63%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[114.537px] left-[calc(50%-194.89px)] top-[calc(50%-59.31px)] translate-x-[-50%] translate-y-[-50%] w-[122.48px]" data-name="57 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[570.44%] left-[-417.32%] max-w-none top-[-49.34%] w-[533.45%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[114.537px] left-[calc(50%+226.28px)] top-[calc(50%+236.75px)] translate-x-[-50%] translate-y-[-50%] w-[122.48px]" data-name="57 15">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[570.44%] left-[-404.04%] max-w-none top-[-361.76%] w-[533.45%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[154.306px] left-[calc(50%+220.76px)] top-[calc(50%+75.3px)] translate-x-[-50%] translate-y-[-50%] w-[132.561px]" data-name="57 10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[423.58%] left-[-383.26%] max-w-none top-[-144.76%] w-[493.06%]" src={img5718} />
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[calc(50%-19.54px)] top-[calc(50%-1.1px)] translate-x-[-50%] translate-y-[-50%]">
      <Group5 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[calc(50%-19.54px)] top-[calc(50%-1.1px)] translate-x-[-50%] translate-y-[-50%]">
      <Group6 />
    </div>
  );
}

export default function Loading({ progress = 0 }: { progress?: number }) {
  return (
    <div className="relative size-full" data-name="loading" style={{ backgroundImage: "linear-gradient(131.661deg, rgb(74, 42, 107) 0.6815%, rgb(41, 64, 138) 42.887%, rgb(117, 56, 82) 99.319%)" }}>
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