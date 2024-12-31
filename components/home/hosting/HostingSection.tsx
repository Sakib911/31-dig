import { HostingCard } from './HostingCard';
import { SectionTitle } from '../common/SectionTitle';

export const HostingSection = () => {
  const hostingPlans = [
    {
      title: 'Web Hosting',
      icon: '/hosting.png',
      description: 'Everything you need to create your website',
      price: 2.99,
      originalPrice: 11.99,
      renewPrice: 7.99,
      save: 75,
      monthsFree: 3
    },
    {
      title: 'Reseller Hosting',
      icon: '/hosting-1.png',
      description: 'Everything you need to create your website',
      price: 2.99,
      originalPrice: 11.99,
      renewPrice: 7.99,
      save: 75,
      monthsFree: 3
    },
    {
      title: 'Dedicated Hosting',
      icon: '/hosting-2.png',
      description: 'Everything you need to create your website',
      price: 2.99,
      originalPrice: 11.99,
      renewPrice: 7.99,
      save: 75,
      monthsFree: 3
    },
    {
      title: 'VPS Hosting',
      icon: '/cloud.png',
      description: 'Everything you need to create your website',
      price: 2.99,
      originalPrice: 11.99,
      renewPrice: 7.99,
      save: 75,
      monthsFree: 3
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4">
        <SectionTitle 
          category="Hosting"
          title="Hosting Packages"
          description="With our feature-packed yet affordable hosting packages, let's feel the ideal tech experience. We bring endless possibilities with phenomenal web hosting along your digital way!"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 sm:mt-12 lg:mt-16">
          {hostingPlans.map((plan) => (
            <HostingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};