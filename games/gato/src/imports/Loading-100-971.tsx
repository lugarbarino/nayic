import imgVida from "figma:asset/0070a5830bf613849c15e374024ec6338a3fbc11.png";
import img110 from "figma:asset/47024adfd3e85d274dc21843334e28e9dd99dc5b.png";
import img41 from "figma:asset/e54d2c41850b272e4fcad2cd9e18f29742c38ed9.png";
import imgRocaFlotaChica1 from "figma:asset/1bcbc7e6c3b5aa855e39a962ec15116d79471349.png";
import img151 from "figma:asset/c6d1319ead5189f45ea6cf756781445fddee50aa.png";
import img5718 from "figma:asset/530836fef5c094239ea333293e2c1d0e6eebd6d7.png";
import img59 from "figma:asset/7f3cd6e7bd4f74c12939d3eda695aba00f6c6517.png";

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="bg-[#261231] col-1 h-[6px] ml-0 mt-0 rounded-[30px] row-1 w-[207px]" />
      <div className="bg-[#f2abb5] col-1 h-[6px] ml-0 mt-0 rounded-[30px] row-1 w-[99px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[19px] items-center left-[calc(50%+5.5px)] top-[calc(50%+93.5px)] translate-x-[-50%] translate-y-[-50%] w-[207px]">
      <p className="css-4hzbpn font-['Capriola:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[20px] text-center text-white w-[min-content]">Cargando</p>
      <Group />
    </div>
  );
}

function Brillo() {
  return <div className="absolute left-[calc(50%+224.41px)] size-[96.818px] top-[calc(50%+106.41px)] translate-x-[-50%] translate-y-[-50%]" data-name="brillo" />;
}

function Brillo1() {
  return (
    <div className="absolute left-[calc(50%+5.41px)] size-[86.818px] top-[calc(50%+181.41px)] translate-x-[-50%] translate-y-[-50%]" data-name="brillo">
      <div className="absolute left-[calc(50%-0.4px)] size-[78.014px] top-[calc(50%-0.4px)] translate-x-[-50%] translate-y-[-50%]" data-name="Vida">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVida} />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[calc(50%+20.5px)] top-[calc(50%-0.09px)] translate-x-[-50%] translate-y-[-50%]">
      <Frame />
      <div className="absolute h-[128px] left-[calc(50%+5.5px)] top-[calc(50%-24px)] translate-x-[-50%] translate-y-[-50%] w-[303px]" data-name="1 10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[236.36%] left-[-0.16%] max-w-none top-[-68.99%] w-full" src={img110} />
        </div>
      </div>
      <div className="absolute flex h-[116px] items-center justify-center left-[calc(50%+5.5px)] top-[calc(50%-167px)] translate-x-[-50%] translate-y-[-50%] w-[77px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[116px] relative w-[77px]" data-name="4 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[149.85%] left-[-53.44%] max-w-none top-[-15.08%] w-[225.28%]" src={img41} />
            </div>
          </div>
        </div>
      </div>
      <Brillo />
      <Brillo1 />
      <div className="absolute h-[60px] left-[calc(50%-189px)] top-[calc(50%+67px)] translate-x-[-50%] translate-y-[-50%] w-[86px]" data-name="roca flota chica 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRocaFlotaChica1} />
      </div>
      <div className="absolute h-[120px] left-[calc(50%+213.5px)] top-[calc(50%-32px)] translate-x-[-50%] translate-y-[-50%] w-[119px]" data-name="15 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[145%] left-[-22.69%] max-w-none top-[-23.33%] w-[146.22%]" src={img151} />
        </div>
      </div>
      <div className="absolute h-[23px] left-[calc(50%+61px)] top-[calc(50%-163.5px)] translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="57 18">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1929.63%] left-[-1129.8%] max-w-none top-[-1346.75%] w-[1776.14%]" src={img5718} />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[calc(50%+20.5px)] top-[calc(50%-0.09px)] translate-x-[-50%] translate-y-[-50%]">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[calc(50%+20.5px)] top-[calc(50%-0.09px)] translate-x-[-50%] translate-y-[-50%]">
      <Group2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[calc(50%-1.27px)] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute left-[calc(50%-102px)] size-[10px] top-[calc(50%-109px)] translate-x-[-50%] translate-y-[-50%]" data-name="57 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[4224.32%] left-[-540%] max-w-none top-[-661%] w-[4465.71%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[22px] left-[calc(50%-96.5px)] top-[calc(50%+10px)] translate-x-[-50%] translate-y-[-50%] w-[21px]" data-name="57 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1953.75%] left-[-213.79%] max-w-none top-[-861.09%] w-[2112.16%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[15px] left-[calc(50%-164.5px)] top-[calc(50%-46.5px)] translate-x-[-50%] translate-y-[-50%] w-[13px]" data-name="57 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[2841.82%] left-[-765.18%] max-w-none top-[-449.27%] w-[3126%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[61px] left-[calc(50%-93px)] top-[calc(50%+84.5px)] translate-x-[-50%] translate-y-[-50%] w-[68px]" data-name="57 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[713.7%] left-[-53.81%] max-w-none top-[-467.07%] w-[640.57%]" src={img5718} />
        </div>
      </div>
      <div className="absolute left-[calc(50%-46.5px)] size-[25px] top-[calc(50%+11.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="57 7">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1736.67%] left-[-431.72%] max-w-none top-[-760.67%] w-[1796.55%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[22px] left-[calc(50%+132.5px)] top-[calc(50%-125px)] translate-x-[-50%] translate-y-[-50%] w-[23px]" data-name="57 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1929.63%] left-[-711.17%] max-w-none top-[-275.43%] w-[1817.44%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[55px] left-[calc(50%+165px)] top-[calc(50%-86.5px)] translate-x-[-50%] translate-y-[-50%] w-[64px]" data-name="57 13">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[789.39%] left-[-230.25%] max-w-none top-[-515.06%] w-[676.62%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[55px] left-[calc(50%-217px)] top-[calc(50%-6.5px)] translate-x-[-50%] translate-y-[-50%] w-[64px]" data-name="57 19">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[789.39%] left-[-230.25%] max-w-none top-[-515.06%] w-[676.62%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[55px] left-[calc(50%-70px)] top-[calc(50%-168.5px)] translate-x-[-50%] translate-y-[-50%] w-[64px]" data-name="57 20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[789.39%] left-[-230.25%] max-w-none top-[-515.06%] w-[676.62%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[55px] left-[calc(50%-3px)] top-[calc(50%+26.5px)] translate-x-[-50%] translate-y-[-50%] w-[50px]" data-name="57 8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[781.5%] left-[-304.81%] max-w-none top-[-314.04%] w-[873.18%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[39px] left-[calc(50%+1.5px)] top-[calc(50%-101.5px)] translate-x-[-50%] translate-y-[-50%] w-[41px]" data-name="57 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1108.51%] left-[-606.28%] max-w-none top-[-150.15%] w-[1063.27%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[22px] left-[calc(50%+234.5px)] top-[calc(50%+39px)] translate-x-[-50%] translate-y-[-50%] w-[23.901px]" data-name="57 14">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1929.63%] left-[-1129.8%] max-w-none top-[-1346.75%] w-[1776.14%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[22px] left-[calc(50%-197px)] top-[calc(50%-93px)] translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="57 17">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1929.63%] left-[-1129.8%] max-w-none top-[-1346.75%] w-[1776.14%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[23px] left-[calc(50%-145.5px)] top-[calc(50%+12.5px)] translate-x-[-50%] translate-y-[-50%] w-[25px]" data-name="57 16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1929.63%] left-[-1129.8%] max-w-none top-[-1346.75%] w-[1776.14%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[56px] left-[calc(50%+68px)] top-[calc(50%+49px)] translate-x-[-50%] translate-y-[-50%] w-[52px]" data-name="57 9">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[766.18%] left-[-451.73%] max-w-none top-[-302.34%] w-[822.63%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[76px] left-[calc(50%-117.5px)] top-[calc(50%-39px)] translate-x-[-50%] translate-y-[-50%] w-[81px]" data-name="57 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[570.44%] left-[-417.32%] max-w-none top-[-49.34%] w-[533.45%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[76px] left-[calc(50%+161.5px)] top-[calc(50%+157px)] translate-x-[-50%] translate-y-[-50%] w-[81px]" data-name="57 15">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[570.44%] left-[-404.04%] max-w-none top-[-361.76%] w-[533.45%]" src={img5718} />
        </div>
      </div>
      <div className="absolute h-[102px] left-[calc(50%+158px)] top-[calc(50%+50px)] translate-x-[-50%] translate-y-[-50%] w-[88px]" data-name="57 10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[423.58%] left-[-383.26%] max-w-none top-[-144.76%] w-[493.06%]" src={img5718} />
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[calc(50%-1.27px)] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%]">
      <Group5 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[calc(50%-1.27px)] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%]">
      <Group6 />
    </div>
  );
}

export default function Loading() {
  return (
    <div className="relative size-full" data-name="loading" style={{ backgroundImage: "linear-gradient(126.497deg, rgb(74, 42, 107) 13.637%, rgb(117, 56, 82) 52.268%, rgb(41, 64, 138) 117.51%)" }}>
      <div className="absolute flex h-[257px] items-center justify-center left-[5034px] top-[751px] w-[151px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[257px] relative w-[151px]" data-name="5 9">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[246.96%] left-[-321.7%] max-w-none top-0 w-[421.7%]" src={img59} />
            </div>
          </div>
        </div>
      </div>
      <Group3 />
      <Group4 />
    </div>
  );
}