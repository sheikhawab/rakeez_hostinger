// import {  useState } from 'react';
import type { ReactNode } from "react";
import { Header } from './Header';
import { Footer } from './Footer';


interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* <LoadingScreen onLoadingComplete={() => setIsLoading(false)} /> */}
      {/* {!isLoading && ( */}
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-2">
            {children}
          </main>
          <Footer />
        </div>
      {/* )} */}
    </>
  );
};
