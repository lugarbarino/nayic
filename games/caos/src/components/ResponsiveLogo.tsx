import img1 from "../assets/logo-caos.webp";

export function ResponsiveLogo() {
  return (
    <div className="flex justify-center flex-shrink-0 mt-2 sm:mt-4 md:mt-8 lg:mt-4">
      <div className="relative logo-container">
        <img alt="CAOS Logo" className="w-full h-full object-contain pointer-events-none" src={img1} />
      </div>
      <style>{`
        .logo-container {
          width: 380px;
          height: 380px;
        }

        @media (min-width: 375px) {
          .logo-container {
            width: 420px;
            height: 420px;
          }
        }

        @media (min-width: 390px) {
          .logo-container {
            width: 464px;
            height: 464px;
          }
        }

        @media (min-width: 414px) {
          .logo-container {
            width: 600px;
            height: 600px;
          }
        }

        @media (min-width: 430px) {
          .logo-container {
            width: 620px;
            height: 620px;
          }
        }

        @media (min-width: 640px) {
          .logo-container {
            width: 650px;
            height: 650px;
          }
        }

        @media (min-width: 768px) {
          .logo-container {
            width: 680px;
            height: 680px;
          }
        }

        @media (min-width: 1024px) {
          .logo-container {
            width: 600px;
            height: 600px;
          }
        }
      `}</style>
    </div>
  );
}