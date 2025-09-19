import React from "react";
import { Users, Network, CalendarCheck, Wallet } from "lucide-react"; // icons

function Helpalocal() {
  const stats = [
    { id: 1, icon: <Users className="h-6 w-6 text-green-600" />, value: "2,245,341", label: "Members" },
    { id: 2, icon: <Network className="h-6 w-6 text-green-600" />, value: "46,328", label: "Clubs" },
    { id: 3, icon: <CalendarCheck className="h-6 w-6 text-green-600" />, value: "828,867", label: "Event Bookings" },
    { id: 4, icon: <Wallet className="h-6 w-6 text-green-600" />, value: "1,926,436", label: "Payments" },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 leading-snug">
            Helping a local <br />
            <span className="text-green-600">business reinvent itself</span>
          </h2>
          <p className="text-gray-600 mt-4">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* Right stats */}
        <div className="grid grid-cols-2 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex items-center gap-3">
              <div className="flex-shrink-0">{stat.icon}</div>
              <div>
                <p className="text-xl font-semibold text-gray-800">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Helpalocal;
