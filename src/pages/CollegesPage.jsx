import { useState } from 'react';
import { colleges } from '../data/mockData';
import { 
  MapPin, 
  Users, 
  Building2, 
  Search, 
  ArrowRight, 
  Compass, 
  GraduationCap, 
  ChevronDown 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CollegesPage() {
  // 1. Dual Filter State
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterCity, setFilterCity] = useState('All');
  
  // Filter Options
  const categories = ['All', 'Degree Courses', 'Diploma Courses', 'Certificate Courses', 'Postgraduate'];
  const cities = ['All', ...new Set(colleges.map(c => c.city))].sort();
  
  // 2. Cross-Filtering Logic
  const filteredColleges = colleges.filter(c => {
    const matchesCategory = filterCategory === 'All' || c.categories.includes(filterCategory);
    const matchesCity = filterCity === 'All' || c.city === filterCity;
    return matchesCategory && matchesCity;
  });

  return (
    <div className="py-24 bg-bgLight min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DEB22F]/10 border border-[#DEB22F]/20 text-navy font-semibold text-sm mb-6">
            <Compass className="h-4 w-4 text-[#DEB22F]" />
            Institution Directory
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">
            Find Your Dream <br className="hidden md:block"/>
            <span className="text-[#DEB22F]">Hospitality College</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Filter by your desired program level and location to discover the best Hotel Management institutions in the state.
          </p>
        </div>

        {/* --- NEW COMPACT FILTER INTERFACE --- */}
        <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100 mb-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            
            {/* Left Side: Course Category Buttons */}
            <div className="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-[#DEB22F]" /> Select Program Level
              </h3>
              <div className="flex gap-2 min-w-max">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setFilterCategory(category)}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                      filterCategory === category 
                        ? 'bg-navy text-white shadow-md' 
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side: Location Dropdown List */}
            <div className="w-full lg:w-64 shrink-0 border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0 lg:pl-8">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#DEB22F]" /> Choose Location
              </label>
              <div className="relative">
                <select
                  value={filterCity}
                  onChange={(e) => setFilterCity(e.target.value)}
                  className="w-full appearance-none bg-gray-50 border border-gray-200 text-navy font-bold py-3 pl-5 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DEB22F]/50 focus:border-[#DEB22F] cursor-pointer transition-all shadow-sm"
                >
                  {cities.map(city => (
                    <option key={city} value={city} className="font-medium text-gray-700">
                      {city === 'All' ? 'All Locations' : city}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-navy">
                  <ChevronDown className="h-5 w-5" />
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* --- DYNAMIC COLLEGE LISTING GRID --- */}
        
        {/* Results Counter */}
        <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
          <h2 className="text-2xl font-extrabold text-navy">
            {filterCity === 'All' ? 'All Locations' : filterCity} <span className="text-gray-400 font-medium mx-2">|</span> {filterCategory}
          </h2>
          <span className="bg-[#DEB22F]/20 text-navy font-bold px-4 py-1.5 rounded-lg text-sm inline-block w-max">
            {filteredColleges.length} {filteredColleges.length === 1 ? 'College' : 'Colleges'} Found
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 min-h-[40vh]">
          {filteredColleges.length > 0 ? (
            filteredColleges.map((college) => (
              <div 
                key={college.id} 
                className="bg-white rounded-[2rem] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group animate-fade-in-up"
              >
                {/* Image Header */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={college.img} 
                    alt={college.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm backdrop-blur-md border ${
                      college.type.includes('State') 
                        ? 'bg-[#DEB22F] text-black border-[#DEB22F]' 
                        : 'bg-white/90 text-navy border-white'
                    }`}>
                      {college.type}
                    </span>
                  </div>

                  {/* College Name overlay on image */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight drop-shadow-md">
                      {college.name}
                    </h3>
                  </div>
                </div>

                {/* College Info Body */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  
                  {/* Location & Intake stats */}
                  <div className="flex flex-wrap gap-4 mb-6 border-b border-gray-100 pb-6">
                    <div className="flex items-center text-gray-600 text-sm font-medium bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                      <MapPin className="h-4 w-4 mr-2 text-[#DEB22F]" />
                      {college.city}, {college.state}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm font-medium bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                      <Users className="h-4 w-4 mr-2 text-navy" />
                      Intake: {college.intake}
                    </div>
                  </div>

                  {/* Programs Offered */}
                  <div className="mb-8 flex-grow">
                    <h4 className="text-sm font-bold text-navy uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-[#DEB22F]" />
                      Programs Offered
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {college.programs.map((prog, idx) => (
                        <li 
                          key={idx} 
                          className="text-xs font-semibold text-navy bg-[#DEB22F]/10 border border-[#DEB22F]/20 px-3 py-1.5 rounded-md"
                        >
                          {prog}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Call to Action */}
                  <div className="mt-auto">
                    <Link 
                      to="/contact" 
                      className="flex items-center justify-center gap-2 w-full bg-navy hover:bg-[#DEB22F] text-white hover:text-black py-4 rounded-xl font-bold transition-all duration-300"
                    >
                      Request Admission Details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                </div>
              </div>
            ))
          ) : (
            
            /* Empty State if combination doesn't exist */
            <div className="col-span-full text-center py-20 bg-white rounded-[2rem] border border-gray-100 animate-fade-in-up">
              <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy mb-2">No colleges found</h3>
              <p className="text-gray-500">
                We currently don't have a record of <span className="font-bold text-navy">{filterCategory}</span> available in <span className="font-bold text-navy">{filterCity === 'All' ? 'any location' : filterCity}</span>.
              </p>
              <button 
                onClick={() => {setFilterCategory('All'); setFilterCity('All');}}
                className="mt-6 bg-gray-100 text-navy px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors"
              >
                Clear all filters
              </button>
            </div>

          )}
        </div>
      </div>
    </div>
  );
}