import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  Users, 
  Compass, 
  Award, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';

export default function About() {
  return (
    <div className="font-sans text-charcoal bg-white pt-24">
      
      {/* 1. HERO SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DEB22F]/10 border border-[#DEB22F]/20 text-navy font-semibold text-sm">
                <Compass className="h-4 w-4 text-[#DEB22F]" />
                About Hospitality Disha
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-[1.15] tracking-tight">
                Your Trusted Guide in <br />
                <span className="text-[#DEB22F]">Hospitality Education</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                At Hospitality Disha, we bridge the gap between aspiring students and India’s premier Hotel Management institutions. We believe that choosing the right college is the first step toward a global, high-paying career.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Navigating NCHMCT scores, state counselling, and private college fee structures can be overwhelming for both students and parents. Our mission is to simplify this journey with 100% transparent, ethical, and personalized admission guidance.
              </p>
              
              <div className="pt-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-[#151515] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:-translate-y-1">
                  Speak with an Expert
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative group">
              {/* Decorative Background Blur */}
              <div className="absolute inset-0 bg-[#DEB22F] rounded-3xl opacity-10 blur-2xl transform translate-x-5 translate-y-5"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1512061942530-e6a4e9a5cf27?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Professional Hospitality Management" 
                  className="w-full h-[550px] object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center justify-between border border-white/50">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#DEB22F]/20 p-3 rounded-full">
                      <Award className="h-8 w-8 text-navy" />
                    </div>
                    <div>
                      <p className="font-extrabold text-navy text-xl">5+ Years</p>
                      <p className="text-sm text-gray-600 font-medium">Combined Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION SECTION */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Target className="text-[#DEB22F] h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower students with accurate information and dedicated support, helping them build successful, global careers in the hospitality and hotel management sectors. We strive to make the admission process stress-free and transparent for every family.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#DEB22F] rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Eye className="text-navy h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be India's most trusted, ethical, and sought-after educational consultancy for Hotel Management and Culinary Arts admissions, recognized for our student-first approach and unwavering commitment to educational excellence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE VALUES / WHY WE STAND OUT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-[#DEB22F] uppercase tracking-widest">Our Core Values</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">What Makes Hospitality Disha Different?</h3>
            <p className="text-gray-600 text-lg">We don't just fill forms; we shape careers. Our methodology is built on trust, transparency, and a deep understanding of the hospitality industry.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Student-First Approach', desc: 'Our college recommendations are based strictly on the student’s academic profile, career goals, and family budget. No hidden agendas.' },
              { icon: ShieldCheck, title: '100% Transparency', desc: 'From tuition fees and hostel charges to placement statistics, we provide clear, verified information so parents can make confident decisions.' },
              { icon: BookOpen, title: 'End-to-End Assistance', desc: 'We hold your hand through the entire journey: career counselling, shortlisting, NCHMCT guidance, document prep, and final admission.' }
            ].map((value, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#DEB22F]/50 hover:shadow-lg transition-all duration-300">
                <div className="mx-auto w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100">
                  <value.icon className="text-[#DEB22F] h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-navy mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE HOSPITALITY ADVANTAGE (Checklist) */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-xl border border-gray-100 flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2 space-y-8">
              <h3 className="text-3xl font-extrabold text-navy tracking-tight">Dedicated Support for Parents & Students</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We understand that sending a child to a professional college is a massive financial and emotional investment. Our counsellors ensure that you are never in the dark.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Personalized 1-on-1 career mapping sessions',
                  'Detailed breakdown of placement records & ROI',
                  'Guidance on education loans & scholarships',
                  'Campus facility & hostel quality verification',
                  'Post-admission support and mentorship'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="bg-[#DEB22F]/10 p-1 rounded-full">
                      <CheckCircle2 className="h-6 w-6 text-[#DEB22F]" />
                    </div>
                    <span className="text-navy font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <img 
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Student Counselling" 
                className="rounded-2xl shadow-lg w-full object-cover h-[400px]"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* 5. PREMIUM CTA (Matching Home Page) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto bg-[#151515] rounded-[2.5rem] relative overflow-hidden shadow-2xl border border-gray-800">
          
          <div className="relative z-10 px-8 py-20 md:py-24 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-400 mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Talk to our expert counsellors today and get a personalized roadmap for choosing the right Hotel Management college.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link to="/contact" className="bg-[#DEB22F] hover:bg-[#c49b25] text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:-translate-y-1">
                Get Free Counselling
              </Link>
               <Link to="/contact" className="bg-[#DEB22F] hover:bg-[#c49b25] text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:-translate-y-1">
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}