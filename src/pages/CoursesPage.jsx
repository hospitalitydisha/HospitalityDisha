import { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/mockData';
import { 
  GraduationCap, 
  Award, 
  BadgeCheck, 
  BookOpen, 
  Clock, 
  ArrowRight,
  Compass,
  CheckCircle2
} from 'lucide-react';

export default function CoursesPage() {
  // State to track the currently selected filter
  const [activeTab, setActiveTab] = useState('All');

  // Define the exact sorting order and attach specific icons/descriptions to each category
  const categoryConfig = [
    {
      id: 'Degree Courses',
      icon: GraduationCap,
      description: 'Comprehensive 3 to 4-year undergraduate programs designed to build future hospitality leaders.'
    },
    {
      id: 'Diploma Courses',
      icon: Award,
      description: 'Intensive 1 to 1.5-year programs focusing on core operational skills and practical training.'
    },
    {
      id: 'Certificate Courses',
      icon: BadgeCheck,
      description: 'Short-term 6 to 12-month skill-based craftsmanship programs for quick industry entry.'
    },
    {
      id: 'Postgraduate',
      icon: BookOpen,
      description: 'Advanced 2-year degrees and specializations for graduates seeking upper-management roles.'
    }
  ];

  // List of tabs for the filter bar
  const tabs = ['All', 'Degree Courses', 'Diploma Courses', 'Certificate Courses', 'Postgraduate'];

  // Filter the categories based on the selected tab
  const displayedCategories = activeTab === 'All' 
    ? categoryConfig 
    : categoryConfig.filter(cat => cat.id === activeTab);

  return (
    <div className="font-sans text-charcoal bg-bgLight min-h-screen pt-24 pb-12">
      
      {/* 1. PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DEB22F]/10 border border-[#DEB22F]/20 text-navy font-semibold text-sm mb-6">
          <Compass className="h-4 w-4 text-[#DEB22F]" />
          Academic Programs
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight mb-6">
          Explore Our <span className="text-[#DEB22F]">Hotel Management</span> <br className="hidden md:block" /> Courses
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          From short-term craftsmanship certificates to comprehensive master's degrees, discover the perfect academic path to launch your global career in the hospitality industry.
        </p>
      </section>

      {/* 2. INTERACTIVE FILTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#DEB22F] text-black shadow-lg scale-105'
                  : 'bg-white text-navy border border-gray-200 hover:border-[#DEB22F] hover:text-[#DEB22F] shadow-sm'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* 3. DYNAMICALLY GROUPED COURSES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 space-y-24 min-h-[50vh]">
        {displayedCategories.map((category) => {
          // Filter courses that belong to the current category loop
          const categoryCourses = courses.filter(course => course.category === category.id);
          
          // If a category has no courses (just in case), skip rendering it
          if (categoryCourses.length === 0) return null;

          const CategoryIcon = category.icon;

          return (
            <div key={category.id} className="animate-fade-in-up">
              
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-gray-200 pb-6">
                <div className="flex items-center gap-4">
                  <div className="bg-navy p-3 rounded-xl shadow-md">
                    <CategoryIcon className="h-8 w-8 text-[#DEB22F]" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-extrabold text-navy tracking-tight">{category.id}</h2>
                    <p className="text-gray-500 text-sm mt-1">{category.description}</p>
                  </div>
                </div>
                <div className="bg-[#DEB22F]/10 text-navy font-bold px-4 py-2 rounded-lg text-sm border border-[#DEB22F]/20">
                  {categoryCourses.length} Programs Available
                </div>
              </div>

              {/* Course Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryCourses.map((course) => (
                  <div 
                    key={course.id} 
                    className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                  >
                    {/* Course Image */}
                    <div className="h-48 relative overflow-hidden">
                      <img 
                        src={course.img} 
                        alt={course.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-[#DEB22F] text-black text-xs font-extrabold px-3 py-1.5 rounded-md shadow-sm uppercase tracking-wider">
                          {course.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Course Details */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-navy mb-1">{course.name}</h3>
                      <p className="text-sm text-gray-500 mb-6 h-10 line-clamp-2 leading-relaxed">
                        {course.fullName}
                      </p>
                      
                      <div className="space-y-3 mb-8 mt-auto border-t border-gray-50 pt-4">
                        <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                          <Clock className="text-[#DEB22F] h-5 w-5 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Duration</p>
                            <p className="text-sm font-bold text-navy">{course.duration}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                          <CheckCircle2 className="text-[#DEB22F] h-5 w-5 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Eligibility</p>
                            <p className="text-sm font-bold text-navy">{course.eligibility}</p>
                          </div>
                        </div>
                      </div>
                      
                      <Link 
                        to="/contact" 
                        className="flex items-center justify-center gap-2 w-full bg-white border-2 border-gray-200 text-navy hover:border-[#DEB22F] hover:bg-[#DEB22F] hover:text-black py-3 rounded-xl font-bold transition-all duration-300"
                      >
                        Enquire Now <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          );
        })}
      </section>

      {/* 4. PREMIUM CTA SECTION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto bg-[#151515] rounded-[2.5rem] relative overflow-hidden shadow-2xl border border-gray-800">
          
          <div className="relative z-10 px-8 py-20 md:py-24 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Not sure which course is right for you?
            </h2>
            <p className="text-gray-400 mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Every student has different career goals. Speak with our expert admission counsellors to map out the perfect educational route for your future in hospitality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link 
                to="/contact" 
                className="bg-[#DEB22F] hover:bg-[#c49b25] text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                Get Free Counselling
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}