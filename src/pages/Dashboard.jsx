import { Link } from "react-router-dom";

import { CENTERS } from "../data/centers";

function Dashboard() {
  // const { centers, isLoading } = useCenters(jobTitle);

  // if (isLoading) return <SpinnerFullPage />;
  return (
    <div className="relative h-screen">
      <div>
        <img
          className="h-[16rem] 2xl:h-[20rem] absolute left-0 top-0"
          src="/shape 04.png"
          alt="bg"
        />
        <img
          className="h-[4rem] 2xl:h-[6rem] absolute right-[6.5rem] top-[3rem] 2xl:top-[4.3rem]"
          src="/shape 01.png"
          alt="bg"
        />
        <img
          className="h-screen absolute right-0 top-0"
          src="/Untitled-3.png"
          alt="bg"
        />
        <img
          className="h-[2rem] 2xl:h-[2.3rem] absolute right-[8rem] 2xl:right-[5.8rem] bottom-[2.5rem] 2xl:bottom-[6rem]"
          src="/shape 02.png"
          alt="bg"
        />
        <img
          className="h-[1.4rem] 2xl:h-[1.6rem] absolute left-[8rem] bottom-[4rem] 2xl:bottom-[7rem]"
          src="/shape 03.png"
          alt="bg"
        />
      </div>
      <div className="z-10 relative h-screen flex flex-col">
        <header className="flex items-center justify-center px-3 py-[3rem] 2xl:py-[3.9rem]">
          <Link to="/">
            <img
              className="h-[3.8rem] 2xl:h-[5.8rem]"
              src="/logo sohaib.png"
              alt="logo"
            />
          </Link>
        </header>
        <main className="flex-1 px-[9.5rem] 2xl:py-[2rem] flex items-center">
          {/* {Boolean(!CENTERS.length) && !isLoading && (
            <div className="m-auto text-2xl">
              There is no data to show at the moment
            </div>
          )} */}
          {Boolean(CENTERS.length) && (
            <div className="grid grid-cols-3 gap-x-20 2xl:gap-x-12 gap-y-12 2xl:gap-y-20 w-full">
              {CENTERS?.map((center) => (
                <Center key={center.id} data={center} />
              ))}
            </div>
          )}
        </main>
        <footer className="flex items-center justify-center px-3 p-[3rem]">
          <div className="border-b-8 border-colorBrand leading-[1]">
            <h1 className="uppercase font-bold 2xl:text-[4.8rem] text-[4.3rem] text-colorGreyText">
              system
            </h1>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Dashboard;

function Center({ data: { name, link } }) {
  // if (type === "link") return <CenterLink url={url} name={name} />;

  // if (type === "button") return <CenterButton id={id} url={url} name={name} />;

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={link}
      className="flex uppercase flex-col items-center gap-2 justify-center border-[1.5px] border-colorGreyText py-4 px-3 text-colorGreyText hover:bg-colorBrand transition-all hover:text-colorWhite hover:border-colorBrand hover:-translate-y-2 hover:shadow-xl active:shadow-sm active:-translate-y-1"
    >
      <span className="font-extrabold text-[1.5rem] 2xl:text-[1.6rem] leading-[1]">
        {name}
      </span>
      <span className="text-[1.4rem] 2xl:text-[1.5rem] font-light leading-[1]">
        center
      </span>
    </a>
  );
}

// function CenterLink({ url, name }) {
//   return (
//     <a
//       target="_blank"
//       rel="noreferrer"
//       href={url}
//       className="flex uppercase flex-col items-center gap-2 justify-center border-[1.5px] border-colorGreyText py-4 px-3 text-colorGreyText hover:bg-colorBrand transition-all hover:text-colorWhite hover:border-colorBrand hover:-translate-y-2 hover:shadow-xl active:shadow-sm active:-translate-y-1"
//     >
//       <span className="font-extrabold text-[1.5rem] 2xl:text-[1.6rem] leading-[1]">
//         {name}
//       </span>
//       <span className="text-[1.4rem] 2xl:text-[1.5rem] font-light leading-[1]">
//         center
//       </span>
//     </a>
//   );
// }

// function CenterButton({ url, name, id }) {
//   const { centers } = useCenters();

//   const subCenter = centers?.filter((center) => center.subTo === id) || [];

//   return (
//     <Modal>
//       <Modal.Open opens={name}>
//         <button
//           target="_blank"
//           rel="noreferrer"
//           href={url}
//           className="flex uppercase flex-col items-center gap-2 justify-center border-[1.5px] border-colorGreyText py-4 px-3 text-colorGreyText hover:bg-colorBrand transition-all hover:text-colorWhite hover:border-colorBrand hover:-translate-y-2 hover:shadow-xl active:shadow-sm active:-translate-y-1"
//         >
//           <span className="font-extrabold text-[1.5rem] 2xl:text-[1.6rem] leading-[1]">
//             {name}
//           </span>
//           <span className="text-[1.4rem] 2xl:text-[1.5rem] font-light leading-[1]">
//             center
//           </span>
//         </button>
//       </Modal.Open>
//       <Modal.Window name={name}>
//         <div className="p-11 flex flex-col gap-y-8">
//           <h1 className="font-bold text-5xl text-colorGreyText uppercase">
//             {name} center
//           </h1>
//           <div className="grid grid-cols-3 gap-10 2xl:gap-x-12 2xl:gap-y-20 w-full">
//             {subCenter.map((center) => (
//               <CenterSubLink
//                 key={center.id}
//                 url={center.url}
//                 name={center.name}
//               />
//             ))}
//           </div>
//         </div>
//       </Modal.Window>
//     </Modal>
//   );
// }

// function CenterSubLink({ url, name }) {
//   return (
//     <a
//       target="_blank"
//       rel="noreferrer"
//       href={url}
//       className="flex uppercase flex-col items-center gap-2 justify-center border-[1.5px] border-colorGreyText py-5 px-4 text-colorGreyText hover:bg-colorBrand transition-all hover:text-colorWhite hover:border-colorBrand hover:-translate-y-2 hover:shadow-xl active:shadow-sm active:-translate-y-1"
//     >
//       <span className="font-extrabold text-[1.5rem] 2xl:text-[1.6rem] leading-[1]">
//         {name}
//       </span>
//     </a>
//   );
// }
