import { FC } from "react";
import { Link } from "react-router-dom";

type LayoutProps = {
   children: React.ReactNode;
};

const LayoutWrapper: FC<LayoutProps> = ({ children }) => {
   const getCurrentYear = new Date().getFullYear();

   return (
      <>
         <header className="absolute top-0 flex w-full select-none bg-primary shadow-[0_0_14px_-2px] shadow-lightgray">
            <nav className="flex h-14 w-full items-center justify-between gap-4 px-10 text-primary">
               <div className="flex items-center">
                  <p className="mb-1 text-xl font-medium">Randomizer</p>
               </div>
               <div className="flex items-end gap-6">
                  <Link to="/randomizer/group-generator">Group Generator</Link>
               </div>
            </nav>
         </header>
         <main className="h-screen w-screen select-none overflow-y-auto bg-primary pt-14">
            <div className="mx-auto flex h-[calc(100%-80px)] max-w-6xl p-5">{children}</div>
            <footer className="mx-auto mt-4 h-16 max-w-6xl bg-primary px-6 py-4">
               <div className="flex h-full items-center justify-between text-xs tracking-[2px] text-primary">
                  <div className="flex h-full items-center">
                     <p>© {getCurrentYear} HIMENOWORKS, All Rights Reserved</p>
                  </div>
                  <div className="flex h-full items-center gap-4">
                     <Link
                        className="flex items-center gap-1.5"
                        to="https://github.com/HIMENOWORKS/randomizer"
                        target="_blank"
                     >
                        <i className="fa-brands fa-github text-base"></i>
                        Github
                     </Link>
                     <div className="flex items-center gap-1.5 text-sm">
                        <i className="fa-solid fa-code-branch text-xs"></i>
                        v1.0.0
                     </div>
                  </div>
               </div>
            </footer>
         </main>
      </>
   );
};

export default LayoutWrapper;