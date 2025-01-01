"use client"
import React, { useState } from 'react';

const DomainSearch = () => {
  const [domain, setDomain] = useState('');
  
  const domainExtensions = [
    { extension: '.com', price: '199/Mo' },
    { extension: '.org', price: '179/Mo' },
    { extension: '.info', price: '189/Mo' },
    { extension: '.store', price: '198/Mo' },
    { extension: '.net', price: '159/Mo' },
    { extension: '.co.uk', price: '259/Mo' },
  ];

  const handleSearch = (e:any) => {
    e.preventDefault();
    // Add search logic here
  };

  return (
   <div className='bg-black'>
     <div className="bg-black text-white p-5 font-sans flex flex-row items-center max-w-screen-2xl mx-auto px-4 ">
      <div className="mb-6 basis-6/12 ">
        <h2 className="text-[35px] font-bold mb-2">Get 10% Off Today</h2>
        <p className="text-gray-300 text-[18px] font-normal">
          Grab the holiday offer! This offer will end in 3 days. Hurry Up! Get your perfect domain starting from 149/Mo.
        </p>
      </div>
      
      <div className="my-8 basis-6/12">
        <form onSubmit={handleSearch}>
          <div className="flex gap-2 max-w-2xl bg-white rounded-full p-2">
            <input
              type="text"
              placeholder="Type Your Domain Name"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="flex-1 p-3 rounded-full text-black"
            />
            <select className="p-3 rounded-md text-black ">
              {
                 domainExtensions.map((item, index) => (
                  <option value={item.extension}>{item.extension}</option>
                )
              )
              }
            </select>
            <button 
              type="submit"
              className="bg-[#2C88A3] text-white px-[44px] py-[15px] pr-[47px] transition-colors rounded-full"
            >
              Search
            </button>
          </div>
        </form>
        <div className="grid grid-cols-6 gap-16 max-w-fit ml-[20px] mt-6">
        {domainExtensions.map((item, index) => (
          <div key={index} className="max-w-fit">
            <span className="font-bold">{item.extension}</span>
            <span className="block text-gray-400 text-sm">{item.price}</span>
          </div>
        ))}
      </div>
      </div>

      
    </div>
   </div>
  );
};

export default DomainSearch;
