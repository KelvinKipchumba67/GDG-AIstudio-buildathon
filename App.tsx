
import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import PropertyCard from './components/PropertyCard';
import FilterSidebar from './components/FilterSidebar';
import MapView from './components/MapView';
import SmartAssistant from './components/SmartAssistant';
import { MOCK_PROPERTIES, Icons } from './constants';
import { Property, FilterOptions, ViewMode } from './types';
import { getNeighborhoodInsights } from './services/geminiService';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [insight, setInsight] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [filters, setFilters] = useState<FilterOptions>({
    town: '',
    minPrice: 0,
    maxPrice: 200000,
    bedrooms: '',
    propertyType: ''
  });

  const filteredProperties = useMemo(() => {
    return MOCK_PROPERTIES.filter(prop => {
      const matchesSearch = searchQuery === '' || 
        prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.town.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTown = filters.town === '' || prop.town === filters.town;
      const matchesPrice = prop.price >= filters.minPrice && prop.price <= filters.maxPrice;
      const matchesBedrooms = filters.bedrooms === '' || 
        (filters.bedrooms === '3+' ? prop.bedrooms >= 3 : prop.bedrooms === parseInt(filters.bedrooms));
      const matchesType = filters.propertyType === '' || prop.type === filters.propertyType;

      return matchesSearch && matchesTown && matchesPrice && matchesBedrooms && matchesType;
    });
  }, [searchQuery, filters]);

  useEffect(() => {
    if (filters.town) {
      getNeighborhoodInsights(filters.town).then(setInsight);
    } else {
      setInsight(null);
    }
  }, [filters.town]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-emerald-600 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Home Finding <span className="text-emerald-200">Simplified.</span>
            </h1>
            <p className="text-emerald-50 text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Discover verified homes in Nairobi, Juja, Chuka and beyond. Your dream rental is just a few clicks away.
            </p>
            
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icons.Search />
              </div>
              <input 
                type="text"
                placeholder="Search location, neighborhood or property type..."
                className="w-full bg-white/95 backdrop-blur-sm border-none h-16 pl-12 pr-32 rounded-2xl text-slate-900 shadow-xl focus:ring-4 focus:ring-white/20 outline-none text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-2 bottom-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 rounded-xl font-bold transition-all shadow-md flex items-center gap-2">
                <span>Find Homes</span>
              </button>
            </div>
            
            <div className="flex justify-center gap-4 mt-6">
              {['Nairobi', 'Chuka', 'Juja'].map(location => (
                <button 
                  key={location}
                  onClick={() => setFilters(prev => ({...prev, town: location}))}
                  className="px-4 py-1.5 bg-emerald-700/50 hover:bg-emerald-700 text-emerald-50 text-xs font-bold rounded-full transition-colors border border-emerald-500/30"
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Filters & View Toggle */}
        <div className="sticky top-16 z-40 bg-white border-b border-slate-200 shadow-sm px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 gap-4">
            <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">View</span>
              <div className="flex bg-slate-100 p-1 rounded-xl">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'grid' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  <Icons.Grid />
                  Grid
                </button>
                <button 
                  onClick={() => setViewMode('map')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'map' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  <Icons.Map />
                  Map
                </button>
              </div>
            </div>
            <div className="text-sm font-medium text-slate-500">
              Found <span className="font-bold text-slate-900">{filteredProperties.length}</span> properties match your search
            </div>
          </div>
        </div>

        {/* Content Area */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-72 flex-shrink-0">
              <FilterSidebar filters={filters} setFilters={setFilters} />
              
              {insight && (
                <div className="mt-8 bg-emerald-50 border border-emerald-100 p-6 rounded-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold">AI</div>
                    <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider">{filters.town} Insight</h4>
                  </div>
                  <p className="text-sm text-emerald-800/80 italic leading-relaxed">
                    "{insight}"
                  </p>
                </div>
              )}
            </aside>

            {/* Listings / Map */}
            <div className="flex-grow">
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProperties.length > 0 ? (
                    filteredProperties.map(property => (
                      <PropertyCard 
                        key={property.id} 
                        property={property} 
                        onClick={() => setSelectedProperty(property)}
                      />
                    ))
                  ) : (
                    <div className="col-span-full py-20 text-center">
                       <div className="inline-block p-6 bg-slate-100 rounded-full mb-4">
                         <Icons.Search />
                       </div>
                       <h3 className="text-xl font-bold text-slate-900 mb-2">No matching homes found</h3>
                       <p className="text-slate-500 max-w-xs mx-auto">Try adjusting your filters or expanding your search area.</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="h-[600px] lg:h-[700px] w-full">
                  <MapView 
                    properties={filteredProperties} 
                    onMarkerClick={(id) => setSelectedProperty(MOCK_PROPERTIES.find(p => p.id === id) || null)} 
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">
            <button 
              onClick={() => setSelectedProperty(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            >
              <Icons.Close />
            </button>
            
            <div className="w-full lg:w-1/2 h-64 lg:h-auto flex-shrink-0">
              <img src={selectedProperty.imageUrl} className="w-full h-full object-cover" alt={selectedProperty.title} />
            </div>
            
            <div className="w-full lg:w-1/2 p-6 lg:p-10 overflow-y-auto">
              <div className="flex items-center gap-3 mb-4">
                {selectedProperty.isVerified && (
                  <div className="bg-emerald-100 px-3 py-1 rounded-full flex items-center gap-1.5 text-emerald-700">
                    <Icons.Verified />
                    <span className="text-xs font-bold uppercase tracking-wider">Verified</span>
                  </div>
                )}
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{selectedProperty.type}</span>
              </div>
              
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">{selectedProperty.title}</h2>
              <div className="flex items-center gap-2 text-slate-500 mb-6">
                <Icons.Location />
                <span className="text-base">{selectedProperty.location}</span>
              </div>
              
              <div className="flex gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-emerald-600">KES {selectedProperty.price.toLocaleString()}</div>
                  <div className="text-sm text-slate-400 font-medium uppercase tracking-widest">Monthly Rent</div>
                </div>
                <div className="h-12 w-px bg-slate-200" />
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-slate-800">{selectedProperty.bedrooms}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Beds</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-slate-800">{selectedProperty.bathrooms}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Baths</div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">About Property</h4>
                <p className="text-slate-600 leading-relaxed italic">
                  {selectedProperty.description}
                </p>
              </div>

              {/* Contact Form */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Inquire About This Home</h4>
                {submitSuccess ? (
                  <div className="bg-emerald-100 text-emerald-700 p-4 rounded-xl text-center font-bold animate-in zoom-in duration-300">
                    Message Sent! An agent will contact you soon.
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        required
                        type="text" 
                        placeholder="Full Name" 
                        className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                      />
                      <input 
                        required
                        type="tel" 
                        placeholder="Phone (07...)" 
                        className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                      />
                    </div>
                    <textarea 
                      placeholder="I am interested in this property..." 
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none h-24 resize-none"
                    />
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        'Send Inquiry'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">K</div>
              <span className="text-2xl font-bold tracking-tight text-white">KeHomes</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Kenya's most trusted property search platform. We connect high-quality tenants with verified landlords across the country.
            </p>
            <div className="flex gap-4">
               {/* Social Icons Placeholder */}
               {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 bg-slate-800 rounded-full hover:bg-emerald-600 transition-colors cursor-pointer" />)}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Rental Guide</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Pricing Plan</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Locations</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Nairobi Westlands</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Juja Town</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Chuka Heights</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Eldoret Hub</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          &copy; {new Date().getFullYear()} KeHomes Real Estate. All rights reserved. Made for Kenya.
        </div>
      </footer>

      {/* AI Assistant */}
      <SmartAssistant />
    </div>
  );
};

export default App;
