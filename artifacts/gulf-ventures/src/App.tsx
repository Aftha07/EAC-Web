import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Clients } from '@/components/Clients';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ServicesPage } from '@/components/ServicesPage';
import { EquipmentRentalPage } from '@/components/EquipmentRentalPage';
import { ServiceDetail } from '@/components/ServiceDetail';
import { getServiceBySlug } from '@/lib/service-data';

const queryClient = new QueryClient();

function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    const wasReloaded = navigationEntry?.type === 'reload';

    if (wasReloaded && window.location.pathname !== '/') {
      window.history.replaceState({}, '', '/');
      setPathname('/');
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const handleLocationChange = () => {
      setPathname(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const isEquipmentRentalPage =
    pathname === '/services/equipment-rental' || pathname === '/services/heavy-equipment-rental';
  const serviceSlug = pathname.startsWith('/services/') ? pathname.slice('/services/'.length) : '';
  const selectedService = getServiceBySlug(serviceSlug);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen w-full">
          <Header />
          {isEquipmentRentalPage ? (
            <EquipmentRentalPage />
          ) : selectedService ? (
            <ServiceDetail service={selectedService} />
          ) : (
            <main>
              <Hero />
              <About />
              <ServicesPage />
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
