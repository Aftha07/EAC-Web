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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen w-full">
          <Header />
          <main>
            <Hero />
            <About />
            <ServicesPage />
            <WhyChooseUs />
            <Clients />
            <Contact />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
