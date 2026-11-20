import img194 from "figma:asset/c8af05ec44eb891079ab8f6a7a8d87570e32ea93.png";
import imgVida from "figma:asset/0070a5830bf613849c15e374024ec6338a3fbc11.png";
import img110 from "figma:asset/47024adfd3e85d274dc21843334e28e9dd99dc5b.png";
import img41 from "figma:asset/e54d2c41850b272e4fcad2cd9e18f29742c38ed9.png";
import img241 from "figma:asset/7a6cf025aab7d7f857d543d9c72d079b90bcc326.png";
import imgRocaFlotaChica1 from "figma:asset/2e3d21776348bf939c13253c89c35dadeb9a5852.png";
import img59 from "figma:asset/7f3cd6e7bd4f74c12939d3eda695aba00f6c6517.png";

function Group({ progress = 48 }: { progress?: number }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="bg-[#261231] col-1 h-[6px] ml-0 mt-0 rounded-[30px] row-1 w-[207px]" />
      <div
        className="bg-[#f2abb5] col-1 h-[6px] ml-0 mt-0 rounded-[30px] row-1 transition-all duration-300 ease-out"
        style={{ width: `${(progress / 100) * 207}px` }}
      />
    </div>
  );
}

function Frame({ progress }: { progress?: number }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[19px] items-center left-[calc(50%+23.5px)] top-[434px] translate-x-[-50%] w-[207px]">
      <p className="css-4hzbpn font-['Capriola:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[20px] text-center text-white w-[min-content]">Cargando</p>
      <Group progress={progress} />
    </div>
  );
}

function Burbuja() {
  return (
    <div className="absolute left-[calc(50%-106.59px)] size-[96.818px] top-[calc(50%-133.09px)] translate-x-[-50%] translate-y-[-50%] float-anim-1" data-name="burbuja 1">
      <div className="absolute h-[99.704px] left-[14.52px] top-0 w-[74.066px]" data-name="19 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[331.19%] left-[-265.67%] max-w-none top-[-214.08%] w-[441.73%]" src={img194} />
        </div>
      </div>
    </div>
  );
}

function Burbuja2() {
  return (
    <div className="absolute left-[calc(50%-113.59px)] size-[96.818px] top-[calc(50%+93.91px)] translate-x-[-50%] translate-y-[-50%] float-anim-2" data-name="burbuja 4">
      <div className="absolute h-[38.913px] left-[38.73px] top-[29.05px] w-[28.907px]" data-name="19 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[331.19%] left-[-265.67%] max-w-none top-[-214.08%] w-[441.73%]" src={img194} />
        </div>
      </div>
    </div>
  );
}

function Burbuja3() {
  return (
    <div className="absolute left-[calc(50%-171.59px)] size-[96.818px] top-[calc(50%-48.09px)] translate-x-[-50%] translate-y-[-50%] float-anim-3" data-name="burbuja 5">
      <div className="absolute h-[38.913px] left-[38.73px] top-[29.05px] w-[28.907px]" data-name="19 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[331.19%] left-[-265.67%] max-w-none top-[-214.08%] w-[441.73%]" src={img194} />
        </div>
      </div>
    </div>
  );
}

function Burbuja1() {
  return (
    <div className="absolute left-[calc(50%+199.41px)] size-[96.818px] top-[calc(50%-121.09px)] translate-x-[-50%] translate-y-[-50%] float-anim-4" data-name="burbuja 2">
      <div className="absolute left-0 size-[96.818px] top-0" data-name="19 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-128.21%] max-w-none size-[251.47%] top-[-126.19%]" src={img194} />
        </div>
      </div>
    </div>
  );
}

function Brillo() {
  return (
    <div className="absolute left-[calc(50%+218.41px)] size-[96.818px] top-[calc(50%+12.91px)] translate-x-[-50%] translate-y-[-50%] float-anim-5" data-name="brillo">
      <div className="absolute left-[-71px] size-[130px] top-[-33px]" data-name="19 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-15.88%] max-w-none size-[445.4%] top-[-336.56%]" src={img194} />
        </div>
      </div>
    </div>
  );
}

function Brillo1() {
  return (
    <div className="absolute left-[calc(50%-87.59px)] size-[96.818px] top-[calc(50%-218.09px)] translate-x-[-50%] translate-y-[-50%] float-anim-6" data-name="brillo">
      <div className="absolute left-0 size-[96.818px] top-0" data-name="19 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-93.72%] max-w-none size-[604.52%] top-[-486.33%]" src={img194} />
        </div>
      </div>
    </div>
  );
}

function Brillo2() {
  return (
    <div className="absolute h-[39px] left-[calc(50%-19px)] top-[calc(50%+85px)] translate-x-[-50%] translate-y-[-50%] w-[34px] float-anim-7" data-name="brillo">
      <div className="absolute h-[32px] left-0 top-0 w-[34px]" data-name="19 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1829.02%] left-[-266.89%] max-w-none top-[-1471.42%] w-[1721.43%]" src={img194} />
        </div>
      </div>
    </div>
  );
}

function Brillo3() {
  return (
    <div className="absolute left-[calc(50%+223.41px)] size-[86.818px] top-[calc(50%+108.91px)] translate-x-[-50%] translate-y-[-50%] float-anim-8" data-name="brillo">
      <div className="absolute left-[calc(50%+16.44px)] size-[78.014px] top-[calc(50%-15.33px)] translate-x-[-50%] translate-y-[-50%]" data-name="Vida">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVida} />
      </div>
    </div>
  );
}

function Group1({ progress }: { progress?: number }) {
  return (
    <div className="absolute contents left-[calc(50%-0.09px)] top-[139px] translate-x-[-50%]">
      <Frame progress={progress} />
      <div className="absolute h-[128px] left-[calc(50%+23.5px)] top-[calc(50%-117.5px)] translate-x-[-50%] translate-y-[-50%] w-[303px]" data-name="1 10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[236.36%] left-[-0.16%] max-w-none top-[-68.99%] w-full" src={img110} />
        </div>
      </div>
      <div className="absolute flex h-[116px] items-center justify-center left-[calc(50%+33.5px)] top-[calc(50%-260.5px)] translate-x-[-50%] translate-y-[-50%] w-[77px] float-anim-bat">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[116px] relative w-[77px]" data-name="4 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[149.85%] left-[-53.44%] max-w-none top-[-15.08%] w-[225.28%]" src={img41} />
            </div>
          </div>
        </div>
      </div>
      <Burbuja />
      <Burbuja2 />
      <Burbuja3 />
      <Burbuja1 />
      <Brillo />
      <Brillo1 />
      <Brillo2 />
      <Brillo3 />
      <div className="absolute left-[calc(50%+213.5px)] size-[29px] top-[calc(50%-261px)] translate-x-[-50%] translate-y-[-50%] float-anim-1" data-name="19 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-494.01%] max-w-none size-[1487%] top-[-985.89%]" src={img194} />
        </div>
      </div>
      <div className="absolute h-[71px] left-[calc(50%+90.5px)] top-[calc(50%+97px)] translate-x-[-50%] translate-y-[-50%] w-[87px] float-anim-4" data-name="24 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[392.96%] left-[-167.82%] max-w-none top-[-260.56%] w-[320.69%]" src={img241} />
        </div>
      </div>
      <div className="absolute h-[44px] left-[calc(50%+59.5px)] top-[calc(50%-205.5px)] translate-x-[-50%] translate-y-[-50%] w-[51px] float-anim-2" data-name="24 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[634.09%] left-[-412.34%] max-w-none top-[-298.07%] w-[547.06%]" src={img241} />
        </div>
      </div>
      <div className="absolute h-[89px] left-[357px] top-[458px] w-[127px] float-anim-rock" data-name="roca flota chica 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[450.17%] left-[-24.88%] max-w-none top-[-31.91%] w-[315.24%]" src={imgRocaFlotaChica1} />
        </div>
      </div>
    </div>
  );
}

export default function Loading({ progress }: { progress?: number }) {
  return (
    <div className="bg-gradient-to-b from-[#5c2a60] relative size-full to-[#1e1e1e]" data-name="loading">
      <div className="absolute flex h-[257px] items-center justify-center left-[5034px] top-[751px] w-[151px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[257px] relative w-[151px]" data-name="5 9">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[246.96%] left-[-321.7%] max-w-none top-0 w-[421.7%]" src={img59} />
            </div>
          </div>
        </div>
      </div>
      <Group1 progress={progress} />
    </div>
  );
}