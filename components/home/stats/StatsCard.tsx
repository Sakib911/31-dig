export const StatsCard = () => (
  <div className="bg-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
    {/* Background pattern */}
    <div 
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: 'url("/bg-cards.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
    
    <div className="relative space-y-2">
      <div>
        <h2 className="text-6xl sm:text-7xl font-black text-gray-900">
          230<span className="text-[#6366F1]">+</span>
        </h2>
      </div>
      <p className="text-[#6366F1] font-medium">Satisficed Clients</p>
      <p className="text-sm text-gray-500 pb-4">
        some big companies that we work with, and trust us very much
      </p>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2">
        <div className="h-full bg-[#6366F1] w-3/4" />
      </div>
    </div>
  </div>
);