import { useState } from 'react'
import { FlagContainer } from "/src/components/FlagContainer";

export default function App() {
  // Sample data - you can easily replace this with any content you want
  const items = [
    { id: 1, flag: "🇺🇸", name: "United States" },
    { id: 2, flag: "🇬🇧", name: "United Kingdom" },
    { id: 3, flag: "🇫🇷", name: "France" },
    { id: 4, flag: "🇩🇪", name: "Germany" },
    { id: 5, flag: "🇯🇵", name: "Japan" },
    { id: 6, flag: "🇨🇦", name: "Canada" },
    { id: 7, flag: "🇮🇹", name: "Italy" },
    { id: 8, flag: "🇪🇸", name: "Spain" },
    { id: 9, flag: "🇦🇺", name: "Australia" },
    { id: 10, flag: "🇧🇷", name: "Brazil" },
    { id: 11, flag: "🇲🇽", name: "Mexico" },
    { id: 12, flag: "🇮🇳", name: "India" },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-950 p-8">
      {/* Floating Canvas Layer */}
      <div className="max-w-7xl mx-auto bg-gray-900 rounded-2xl shadow-2xl p-8">
        {/* Flag Containers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {items.map((item) => (
            <FlagContainer 
              key={item.id}
              flag={item.flag}
              countryName={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
