const TrafficCard = () => {
  const bars = [
    { value: 70, color: 'bg-[#DEF4FE]', text: 'text-[#2F8EAA]' },
    { value: 85, color: 'bg-[#2F8EAA]', text: 'text-white' },
    { value: 100, color: 'bg-[#5927E5]', text: 'text-white' }
  ];

  return (
    <div className="flex bg-black-texture bg-cover rounded-3xl  text-white overflow-hidden ">
      <div className="flex-1 p-6 pb-16">
        <p className="text-gray-400 text-sm font-medium">Drive More Traffic and Sales</p>
        <h3 className="text-xl sm:text-2xl font-bold mt-2">
          Drive more traffic<br />& product sales
        </h3>
      </div>
      <div className="flex items-end gap-2 pr-10">
        {bars.map(({ value, color, text }) => (
          <div key={value} className="text-center">
            <div 
              className={`w-8 sm:w-16 rounded-t-full transition-all duration-500 ${color} ${text} flex items-end justify-center pb-4`}
              style={{ height: `${value *1.5 }px` }}
            >
              <div className="transform -rotate-90 text-base sm:text-lg font-semibold whitespace-nowrap">
                {value}<span className="text-base">&nbsp;%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficCard;