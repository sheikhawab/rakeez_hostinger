import { ReactNode, useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { LoadingScreen } from './LoadingScreen';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      {!isLoading && (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-2">
            {children}
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};
