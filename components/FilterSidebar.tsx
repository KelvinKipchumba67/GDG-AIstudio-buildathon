import React from "react";
import { FilterOptions } from "../types";

interface FilterSidebarProps {
  filters: FilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  setFilters,
}) => {
  const towns = ["All", "Nairobi", "Chuka", "Juja", "Mombasa", "Eldoret"];
  const types = ["All", "Apartment", "Villa", "Bungalow", "Studio"];

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8 sticky top-24">
      <div>
        <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
          Target Town
        </h3>
        <div className="flex flex-wrap gap-2">
          {towns.map((town) => (
            <button
              key={town}
              onClick={() =>
                handleFilterChange("town", town === "All" ? "" : town)
              }
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                filters.town === town || (town === "All" && filters.town === "")
                  ? "bg-violet-600 border-violet-600 text-white shadow-md"
                  : "bg-white border-slate-200 text-slate-600 hover:border-violet-300"
              }`}
            >
              {town}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
          Price Range (KES)
        </h3>
        <div className="space-y-4">
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="text-[10px] text-slate-400 font-bold block mb-1">
                MIN
              </label>
              <input
                type="number"
                value={filters.minPrice}
                onChange={(e) =>
                  handleFilterChange("minPrice", Number(e.target.value))
                }
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-violet-500 outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="text-[10px] text-slate-400 font-bold block mb-1">
                MAX
              </label>
              <input
                type="number"
                value={filters.maxPrice}
                onChange={(e) =>
                  handleFilterChange("maxPrice", Number(e.target.value))
                }
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-violet-500 outline-none"
              />
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="200000"
            step="5000"
            value={filters.maxPrice}
            onChange={(e) =>
              handleFilterChange("maxPrice", Number(e.target.value))
            }
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-violet-600"
          />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
          Bedrooms
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {["Any", "1", "2", "3+"].map((num) => (
            <button
              key={num}
              onClick={() =>
                handleFilterChange("bedrooms", num === "Any" ? "" : num)
              }
              className={`py-2 rounded-lg text-xs font-bold transition-all border ${
                filters.bedrooms === num ||
                (num === "Any" && filters.bedrooms === "")
                  ? "bg-violet-600 border-violet-600 text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:border-violet-300"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
          Property Type
        </h3>
        <div className="space-y-2">
          {types.map((type) => (
            <label
              key={type}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="propType"
                checked={filters.propertyType === (type === "All" ? "" : type)}
                onChange={() =>
                  handleFilterChange("propertyType", type === "All" ? "" : type)
                }
                className="w-4 h-4 text-violet-600 focus:ring-violet-500"
              />
              <span className="text-sm text-slate-600 group-hover:text-violet-600 transition-colors">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={() =>
          setFilters({
            town: "",
            minPrice: 0,
            maxPrice: 200000,
            bedrooms: "",
            propertyType: "",
          })
        }
        className="w-full py-3 text-slate-500 hover:text-violet-600 text-sm font-bold transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
