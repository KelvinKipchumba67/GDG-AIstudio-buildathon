import React, { useState } from "react";
import { Property } from "../types";

interface MapViewProps {
  properties: Property[];
  onMarkerClick: (id: string) => void;
}

const MapView: React.FC<MapViewProps> = ({ properties, onMarkerClick }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Simplified visual "map" - for a real app we'd use Google Maps SDK
  // Here we simulate pins on a stylized background
  return (
    <div className="relative w-full h-full bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-inner">
      {/* Simulation Grid for Kenya Regions */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-full p-20 flex flex-wrap content-start">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-dashed border-violet-200/50 rounded-full animate-pulse" />
        </div>
      </div>

      <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg border border-slate-200 z-10 flex items-center gap-3">
        <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">
          Active Region
        </span>
        <div className="h-4 w-px bg-slate-300" />
        <span className="text-sm font-bold text-violet-600">
          Central & Nairobi
        </span>
      </div>

      {/* Markers Simulation */}
      {properties.map((prop, idx) => {
        // Deterministic positioning based on lat/lng for simulation
        const left = `${(prop.coordinates.lng - 36) * 50 + 10}%`;
        const top = `${(prop.coordinates.lat + 1.5) * -40 + 40}%`;

        return (
          <div
            key={prop.id}
            className="absolute transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ left, top }}
          >
            <button
              onClick={() => {
                setSelectedId(prop.id);
                onMarkerClick(prop.id);
              }}
              className={`group relative flex flex-col items-center gap-1 transition-all ${selectedId === prop.id ? "z-30 scale-110" : "z-20 scale-100 hover:scale-105"}`}
            >
              <div
                className={`px-2 py-1 rounded-lg text-[10px] font-bold shadow-lg border border-white transition-colors ${selectedId === prop.id ? "bg-violet-600 text-white" : "bg-white text-slate-900 group-hover:bg-violet-50"}`}
              >
                KES {Math.round(prop.price / 1000)}k
              </div>
              <div
                className={`w-4 h-4 rounded-full border-2 border-white shadow-lg transition-colors ${selectedId === prop.id ? "bg-violet-600" : "bg-violet-400 group-hover:bg-violet-500"}`}
              />
            </button>
          </div>
        );
      })}

      <div className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 max-w-[200px] z-10">
        <h4 className="text-xs font-bold text-slate-900 mb-1">Map Key</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-violet-600" />
            <span className="text-[10px] text-slate-500">
              Available Listings
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-400" />
            <span className="text-[10px] text-slate-500">Popular Hubs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
