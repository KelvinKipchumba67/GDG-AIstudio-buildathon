
import React from 'react';
import { Property } from '../types';
import { Icons } from '../constants';

interface PropertyCardProps {
  property: Property;
  onClick: (id: string) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  return (
    <div 
      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full"
      onClick={() => onClick(property.id)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {property.isVerified && (
            <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <Icons.Verified />
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Verified</span>
            </div>
          )}
          <div className="bg-emerald-600 px-3 py-1.5 rounded-full text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
            {property.type}
          </div>
        </div>
        <div className="absolute bottom-4 right-4">
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600 hover:text-red-500"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </button>
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-2">
          <span className="text-sm font-semibold text-emerald-600">KES {property.price.toLocaleString()}</span>
          <span className="text-xs text-slate-500 font-medium"> /month</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 line-clamp-1 mb-1 group-hover:text-emerald-600 transition-colors">
          {property.title}
        </h3>
        <div className="flex items-center gap-1 text-slate-500 mb-4">
          <Icons.Location />
          <span className="text-xs truncate">{property.location}</span>
        </div>
        
        <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-slate-600">
          <div className="flex items-center gap-1.5">
            <Icons.Bed />
            <span className="text-xs font-semibold">{property.bedrooms} Bed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Icons.Bath />
            <span className="text-xs font-semibold">{property.bathrooms} Bath</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Icons.Area />
            <span className="text-xs font-semibold">{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
