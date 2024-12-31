import React from 'react';
import { FeaturePill } from './features/FeaturePill';
import { StatsCard } from './stats/StatsCard';
import { DomainSearch } from './search/DomainSearch';
import TrafficCard from './traffic/TrafficCard';
import { AnalyticsDashboard } from './analytics/AnalyticsDashboard';

const Hero = () => {
  const features = [
    'Free domain & site builder',
    'Email Protection',
    'Improved cPanel',
    '60-Days Money-Back',
  ];

  return (
    <div className="relative bg-hero-pattern bg-cover bg-center overflow-hidden pb-16 z-[-1]">
      <div className="max-w-screen-2xl mx-auto px-4 py-8 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-2">
              <p className="text-white/80 text-sm font-medium">Fast Secure & Powerful</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Performance Marketing<br />
                für Unternehmen &<br />
                Onlineshops
              </h1>
            </div>

            <div className="flex flex-wrap gap-3">
              {features.map((feature) => (
                <FeaturePill key={feature} text={feature} />
              ))}
            </div>

            <DomainSearch />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
              <AnalyticsDashboard />
              <StatsCard />
            </div>

            <div className="mx-0 sm:mx-10">
              <TrafficCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;