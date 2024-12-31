import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const DomainSearch = () => (
  <div className="space-y-4">
    <p className="text-white/90 text-sm">
      Get a Domain Name (With FREE Email, DNS, Theft Protection, and lots more)
    </p>
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="flex-1 h-12 rounded-full bg-white shadow-lg py-1">
        <div className="flex items-center h-full">
          <input
            type="text"
            placeholder="www.example.io"
            className="flex-1 rounded-full px-4 sm:px-6 text-gray-900 focus:outline-none"
          />
          <Button
            className="h-full px-4 sm:px-6 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white flex items-center gap-2 mr-1 sm:mr-3"
          >
            <span className="hidden sm:inline">Explore</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);