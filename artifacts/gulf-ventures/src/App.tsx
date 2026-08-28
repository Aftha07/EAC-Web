import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { GasSupply } from '@/components/GasSupply';
import { Equipment } from '@/components/Equipment';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Clients } from '@/components/Clients';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ServiceDetail } from '@/components/ServiceDetail';
import NotFound from '@/pages/not-found';
import { getServiceBySlug } from '@/lib/service-data';

const queryClient = new QueryClient();

function getCurrentPath() {
  return window.location.pathname.replace(/\/+$/, '') || '/';
}

function App() {
  const [pathname, setPathname] = useState(getCurrentPath);
  const serviceSlug = pathname.startsWith('/services/')
    ? pathname.slice('/services/'.length).split('/')[0]
    : '';
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;

  useEffect(() => {
    const handlePopState = () => setPathname(getCurrentPath());
    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.title = service
      ? `${service.label} | Eastern Alliance Company`
      : 'Eastern Alliance Company | Industrial Solutions';
  }, [service]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen w-full">
          <Header />
          {service ? (
            <ServiceDetail service={service} />
          ) : pathname.startsWith('/services/') ? (
            <NotFound />
          ) : (
            <main>
              <Hero />
              <About />
              <Services />
              <GasSupply />
              <Equipment />
              <WhyChooseUs />
              <Clients />
              <Contact />
            </main>
          )}
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
