import { Link } from 'react-router-dom';
import { testimonials, faqs } from '../data/mockData';
import {
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  ArrowRight,
  Star,
  Quote
} from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'Hospitality Disha',
      url: 'https://hospitalitydisha.in',
      logo: 'https://hospitalitydisha.in/logo.png',
      description:
        'Hospitality and healthcare college admission consultancy providing course selection, college comparison and admission guidance.',
      sameAs: []
    })}
  </script>
  return (
    <div className="font-sans text-charcoal bg-bgLight relative">

      {/* --- WHATSAPP FLOATING WIDGET --- */}
      <a
        href="https://wa.me/916281570955" // Replace with your actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>

      {/* 1. DARK HERO SECTION WITH HIGH-VISIBILITY HOTEL BACKGROUND */}
      <section className="relative overflow-hidden pt-32 pb-40 lg:pt-40 lg:pb-48">

        {/* Luxury Hotel Background Image */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

        {/* Simple Dark Overlay (75% opacity black) - ensures text is readable but image shows through clearly */}
        <div className="absolute inset-0 bg-black/75 z-0"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gray-200 text-sm font-semibold mb-10 shadow-lg">
            📚 Complete Career Guide
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8 drop-shadow-lg">
            Build Your <span className="text-[#DEB22F]">Career in <br className="hidden md:block" /> Hospitality?</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-12 drop-shadow-md">
           Explore industry-recognized courses, top hospitality colleges, and diverse career pathways designed to help you succeed in the dynamic world of hospitality, tourism, hotels, and international opportunities
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              to="/colleges"
              className="flex items-center justify-center gap-2 bg-[#DEB22F] hover:bg-[#c49b25] text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-[#DEB22F]/20"
            >
              Explore  Colleges <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/courses"
              className="flex items-center justify-center gap-2 bg-[#DEB22F] hover:bg-[#c49b25] text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-[#DEB22F]/20"
            >
              Explore Courses <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

{/* WHY CHOOSE OUR GUIDANCE */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left Content */}
      <div>
        <span className="text-[#DEB22F] font-semibold uppercase tracking-wider">
          Student Support
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Expert Admission & Career Guidance
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          Navigate your hospitality education journey with confidence.
          Our experienced counsellors provide personalized guidance to
          help you choose the right course, compare colleges, understand
          admission requirements, and make informed career decisions.
        </p>

        <div className="mt-8 h-1 w-24 bg-[#DEB22F] rounded-full"></div>
      </div>

      {/* Right Content */}
      <div className="bg-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100">
        <div className="grid gap-4">
          {[
            "Course & College Guidance",
            "College Comparison",
            "Fee & Eligibility Guidance",
            "Admission Process Support",
            "Documentation Guidance",
            "Personal Counselling",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[#DEB22F]/15 flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#DEB22F]"></div>
              </div>

              <h3 className="text-gray-900 font-semibold text-lg">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

{/* 3. WHY CHOOSE THIS FIELD */}
<section className="relative py-24 md:py-28 bg-[#101828] overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/images/hospitality-bg.jpg"
      alt=""
      className="w-full h-full object-cover opacity-20"
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-[#101828]/85"></div>
  </div>

  {/* Decorative background glow */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-[#DEB22F]/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DEB22F]/5 rounded-full blur-3xl"></div>


  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">

      <p className="text-[#DEB22F] text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-4">
        Why Choose Us
      </p>

      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg">
        Why Choose a Career in{" "}
        <span className="text-[#DEB22F]">
          Hospitality?
        </span>
      </h2>

      <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
        A rewarding industry with global opportunities, career growth,
        and diverse career paths.
      </p>

    </div>


    {/* Feature Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

      {[
        {
          title: "Global Opportunities",
          desc: "Work in luxury hotels, cruise lines, airlines, and premium resorts anywhere in the world."
        },
        {
          title: "Rapid Career Growth",
          desc: "The hospitality sector promotes based on performance, allowing for rapid advancement to management roles."
        },
        {
          title: "Diverse Career Paths",
          desc: "Explore culinary arts, event management, human resources, and revenue management."
        },
        {
          title: "Lucrative Salaries",
          desc: "Premium brands offer excellent compensation packages, international postings, and living allowances."
        },
        {
          title: "Dynamic Environment",
          desc: "Escape the 9-to-5 desk job. Every day brings new challenges, people, and experiences."
        },
        {
          title: "Transferable Skills",
          desc: "Develop exceptional communication, leadership, and crisis management skills valued in any industry."
        }
      ].map((item, i) => (

        <div
          key={i}
          className="
            group
            relative
            bg-white
            rounded-2xl
            p-7
            md:p-8
            border
            border-gray-100
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
            overflow-hidden
          "
        >

          {/* Gold top border */}
          <div
            className="
              absolute
              top-0
              left-0
              w-full
              h-1
              bg-[#DEB22F]
              scale-x-0
              origin-left
              group-hover:scale-x-100
              transition-transform
              duration-500
            "
          ></div>


          {/* Number */}
          <div className="mb-6">

            <span
              className="
                inline-flex
                items-center
                justify-center
                w-10
                h-10
                rounded-full
                bg-[#101828]
                text-[#DEB22F]
                font-bold
                text-sm
                group-hover:bg-[#DEB22F]
                group-hover:text-[#101828]
                transition-colors
                duration-300
              "
            >
              {String(i + 1).padStart(2, "0")}
            </span>

          </div>


          {/* Title */}
          <h3
            className="
              text-xl
              md:text-2xl
              font-bold
              text-[#101828]
              mb-4
              group-hover:text-[#DEB22F]
              transition-colors
              duration-300
            "
          >
            {item.title}
          </h3>


          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {item.desc}
          </p>


          {/* Bottom accent */}
          <div className="mt-7 w-10 h-0.5 bg-[#DEB22F] group-hover:w-16 transition-all duration-300"></div>

        </div>

      ))}

    </div>


    {/* Bottom Message */}
    <div className="mt-16 text-center">

      <p className="text-white text-lg md:text-xl font-semibold">
        Build your future in an industry that takes you places.
      </p>

      <p className="mt-2 text-gray-400 text-sm md:text-base">
        Global careers. Professional growth. Endless possibilities.
      </p>

    </div>

  </div>
</section>





      {/* 4. SERVICES / HOW WE HELP PARENTS */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#DEB22F] rounded-3xl opacity-20 transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-300"></div>
              <img src="https://plus.unsplash.com/premium_photo-1682092170538-9ebcb3a09ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoZWYlMjBlZHVjYXRpb258ZW58MHx8MHx8fDA%3D" alt="Counselling Session" className="relative rounded-3xl shadow-xl object-cover h-[500px] w-full" />

              <div className="absolute -bottom-6 -left-6 bg-[#151515] text-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                <ShieldCheck className="h-10 w-10 text-[#DEB22F]" />
                <div>
                  <p className="font-bold text-lg">100% Transparent</p>
                  <p className="text-sm text-gray-400">Ethical Admission Guidance</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 lg:pl-8">
              <div>
                <h2 className="text-sm font-bold text-[#DEB22F] uppercase tracking-widest mb-3">Making the Right College Choice Easier</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight leading-tight mb-6">Making the Right College Choice Easier</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                 Choosing the right hospitality college can be confusing. Hospitality Disha helps students and parents compare courses, colleges, fees, eligibility and admission options with confidence.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                    'Course & College Guidance',
                    'College Comparison',
                    'Fee & Eligibility Guidance',
                    'Admission Process Support',
                    'Documentation Guidance',
                    'Personal Counselling'
                  ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-bgLight border border-gray-100 hover:border-[#DEB22F]/40 transition-colors">
                    <div className="bg-white p-1.5 rounded-full shadow-sm">
                      <CheckCircle2 className="text-[#DEB22F] h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold text-navy">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-24 bg-bgLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-[#DEB22F] uppercase tracking-widest">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">What Our Students Say</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 relative group hover:-translate-y-1 transition-all duration-300">
                <Quote className="h-10 w-10 text-gray-100 absolute top-6 right-6 group-hover:text-[#DEB22F]/20 transition-colors duration-300" />

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#DEB22F] text-[#DEB22F]" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm mb-8 leading-relaxed relative z-10">"{t.text}"</p>

                <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                  <div className="h-10 w-10 rounded-full bg-navy/5 flex items-center justify-center font-bold text-navy">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">{t.name}</h4>
                    <p className="text-xs text-gray-500 font-medium">{t.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border rounded-2xl transition-all duration-300 ${openFaq === i ? 'border-[#DEB22F] bg-[#DEB22F]/5 shadow-md' : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                >
                  <span className={`font-semibold text-lg ${openFaq === i ? 'text-black' : 'text-navy'}`}>
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-full transition-colors ${openFaq === i ? 'bg-[#DEB22F] text-black' : 'bg-gray-100 text-gray-500'}`}>
                    <ChevronDown className={`h-5 w-5 transform transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 opacity-100 pb-5 px-6' : 'max-h-0 opacity-0 px-6'
                    }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-200/60 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white pb-24">
        <div className="max-w-7xl mx-auto bg-[#151515] rounded-[2.5rem] relative overflow-hidden shadow-2xl border border-gray-800">

          <div className="relative z-10 px-8 py-20 md:py-24 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Confused About Your Career Path?
            </h2>
            <p className="text-gray-400 mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Talk to our expert counsellors today and get a personalized roadmap for choosing the right course and securing your college admission.
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