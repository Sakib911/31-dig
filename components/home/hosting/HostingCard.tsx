interface HostingCardProps {
  title: string;
  icon: string;
  description: string;
  price: number;
  save: number;
  monthsFree: number;
  originalPrice: number;
  renewPrice: number;
}

export const HostingCard = ({ 
  title, 
  icon, 
  description, 
  price, 
  save, 
  monthsFree,
  originalPrice,
  renewPrice 
}: HostingCardProps) => (
  <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
    {/* Background Pattern */}
    <div 
      className="absolute inset-0 opacity-5 bg-gradient-to-br from-purple-100/50 to-blue-100/50"
      style={{
        backgroundImage: `url('/bg-cards.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
    
    {/* Content */}
    <div className="relative space-y-6">
      <img src={icon} alt={title} className="w-12 h-12" />
      
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
      </div>

      <div className="space-y-4">
        {/* Original Price */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
          <span className="inline-block bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full">
            Save {save}%
          </span>
        </div>

        {/* Current Price */}
        <div className="flex items-baseline gap-1">
          <span className="text-gray-400 text-sm">$</span>
          <span className="text-4xl font-bold text-gray-900">{price.toFixed(2)}</span>
          <span className="text-gray-500">/mo</span>
        </div>
        
        <div className="flex space-y-1">
          <div className="text-sm text-gray-600">For 48-month term</div>
          <div className="text-sm text-purple-600 font-medium ">+{monthsFree} months free</div>
        </div>

        <button className="w-full py-3 rounded-full bg-[#6366F1] text-white font-medium hover:bg-[#4F46E5] transition-colors">
          Choose plan
        </button>

        <div className="space-y-2">
          <div className="text-sm text-gray-500 text-center">
            ${renewPrice.toFixed(2)}/mo when you renew
          </div>
          <div className="text-center">
            <a href="#" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
              See all features
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);