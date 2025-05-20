import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Cloud, Map } from 'lucide-react';

export const Footer = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState({ temp: '28°C', condition: 'Sunny' });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative mt-auto bg-black/95 backdrop-blur-lg border-t border-[#00BFFF]/30">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About SPIT */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent">
              About SPIT
            </h3>
            <p className="text-[#F0F0F0]/80 text-sm leading-relaxed">
              Sardar Patel Institute Of Technology is one of the premier Engineering Institutes in Mumbai, 
              offering undergraduate and postgraduate programs in engineering and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['About Us', 'Academics', 'Admission', 'Research', 'Placements', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#F0F0F0]/80 hover:text-[#00BFFF] transition-colors duration-300 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Policies */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent">
              Resources & Policies
            </h3>
            <ul className="space-y-2">
              {['Mandatory Disclosure', 'IQAC', 'NIRF', 'NAAC', 'Tender', 'Anti-Ragging'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#F0F0F0]/80 hover:text-[#00BFFF] transition-colors duration-300 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[#F0F0F0]/80 group">
                <MapPin className="w-5 h-5 mt-1 text-[#00BFFF] group-hover:text-[#FFD700] transition-colors" />
                <span>Bhavan's Campus, Munshi Nagar, Andheri (West), Mumbai 400053, Maharashtra, India.</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#F0F0F0]/80 group">
                <Phone className="w-5 h-5 text-[#00BFFF] group-hover:text-[#FFD700] transition-colors" />
                <span>+91 (22) 2623 7454</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#F0F0F0]/80 group">
                <Mail className="w-5 h-5 text-[#00BFFF] group-hover:text-[#FFD700] transition-colors" />
                <span>info@spit.ac.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Interactive Bottom Panel */}
      <div className="border-t border-[#00BFFF]/30 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Digital Clock */}
            <div className="flex items-center gap-2 text-[#00BFFF]">
              <Clock className="w-5 h-5" />
              <span className="font-mono text-lg">
                {time.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' })}
              </span>
            </div>

            {/* Weather Widget */}
            <div className="flex items-center gap-2 text-[#00BFFF]">
              <Cloud className="w-5 h-5" />
              <span className="font-mono">
                Mumbai: {weather.temp} | {weather.condition}
              </span>
            </div>

            {/* Interactive Map Button */}
            <button 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00BFFF]/10 text-[#00BFFF] hover:bg-[#00BFFF]/20 transition-colors"
              onClick={() => window.open('https://maps.app.goo.gl/GYiaYR1bUh8vYNyE8', '_blank')}
            >
              <Map className="w-5 h-5" />
              <span>View Campus Map</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};