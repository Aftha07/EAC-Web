import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Equipment } from '@/components/Equipment';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Clients } from '@/components/Clients';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ServiceDetail } from '@/components/ServiceDetail';
import { getServiceBySlug } from '@/lib/service-data';

const queryClient = new QueryClient();

function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const serviceMatch = pathname.match(/^\/services\/([^/]+)\/?$/);
  const selectedService = serviceMatch
    ? getServiceBySlug(decodeURIComponent(serviceMatch[1]))
    : undefined;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen w-full">
          <Header />
          {selectedService ? (
            <main>
              <ServiceDetail service={selectedService} />
            </main>
          ) : (
            <main>
              <Hero />
              <About />
              <Services />
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
