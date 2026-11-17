import React from 'react';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {RouterProvider, useRouter} from './lib/router';
import {LandingPage} from './pages/LandingPage';
import {LegalPage} from './pages/LegalPage';
import {NotFoundPage} from './pages/NotFoundPage';
import {SampleReportPage} from './pages/SampleReportPage';

function AppRoutes() {
  const {pathname} = useRouter();

  let page: React.ReactNode;
  if (pathname === '/') {
    page = <LandingPage />;
  } else if (pathname === '/sample') {
    page = <SampleReportPage />;
  } else if (pathname === '/privacy') {
    page = <LegalPage type="privacy" />;
  } else if (pathname === '/terms') {
    page = <LegalPage type="terms" />;
  } else {
    page = <NotFoundPage />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF5EC] text-[#071514]">
      <Header />
      <div className="flex-1">{page}</div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppRoutes />
    </RouterProvider>
  );
}
