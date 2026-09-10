import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function AdmissionProcessPage() {

  const steps = [
    {
      num: '01',
      title: 'Understand Your Goals',
      desc: 'Tell us about your education, interests, career goals and preferred location.',
    },
    {
      num: '02',
      title: 'Shortlist Courses',
      desc: 'Identify suitable Hospitality and Healthcare programs tailored to your profile.',
    },
    {
      num: '03',
      title: 'Explore Colleges',
      desc: 'Compare colleges, locations, fees, facilities, and eligibility criteria.',
    },
    {
      num: '04',
      title: 'Application Guidance',
      desc: 'Understand applications, counselling procedures, and gather the required documents.',
    },
    {
      num: '05',
      title: 'Counselling & Choice Filling',
      desc: 'Get strategic guidance for applicable counselling rounds and preference selection.',
    },
    {
      num: '06',
      title: 'Admission Support',
      desc: 'Receive continuous assistance throughout the final admission and college reporting process.',
    },
  ];

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Hospitality College Admission Process | Hospitality Disha
        </title>

        <meta
          name="description"
          content="Understand the hospitality college admission process with Hospitality Disha. Get end-to-end guidance from course selection and college comparison to applications, counselling, admission and college joining."
        />

        <link
          rel="canonical"
          href="https://www.hospitalitydisha.com/admission-process"
        />
      </Helmet>

      {/* ================= PAGE ================= */}
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

        {/* ================= HERO ================= */}
        <section className="relative pt-28 pb-20">

          <div className="absolute top-10 left-10 w-40 h-40 bg-[#DEB22F]/10 rounded-full blur-3xl animate-pulse"></div>

          <div className="absolute top-20 right-10 w-56 h-56 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <span className="inline-block px-5 py-2 rounded-full bg-[#DEB22F]/10 text-[#b18c1d] font-semibold text-sm uppercase tracking-widest">
              Admission Process
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Your Admission Journey,
              <span className="block text-[#DEB22F] mt-2">
                Simplified
              </span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              We provide end-to-end assistance from course selection to
              your first day at college.
            </p>

            <div className="mt-8 flex justify-center">
              <div className="h-1 w-24 bg-[#DEB22F] rounded-full"></div>
            </div>

          </div>
        </section>

        {/* ================= TIMELINE ================= */}
        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="relative">

              {/* Desktop Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEB22F] via-teal-500 to-[#DEB22F] -translate-x-1/2 rounded-full">

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#DEB22F] rounded-full shadow-lg shadow-[#DEB22F]/40 animate-pulse"></div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#DEB22F] rounded-full shadow-lg shadow-[#DEB22F]/40 animate-pulse"></div>

              </div>

              {/* Mobile Timeline Line */}
              <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#DEB22F] via-teal-500 to-[#DEB22F]"></div>

              <div className="space-y-10 md:space-y-16">

                {steps.map((step, index) => (

                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0
                        ? 'md:flex-row'
                        : 'md:flex-row-reverse'
                    }`}
                  >

                    {/* Step Number */}
                    <div className="absolute left-0 md:static md:w-1/2 flex md:justify-center z-20">

                      <div
                        className="
                          relative
                          w-11
                          h-11
                          rounded-full
                          bg-gradient-to-br
                          from-[#DEB22F]
                          to-[#c49b25]
                          border-4
                          border-white
                          flex
                          items-center
                          justify-center
                          text-white
                          font-bold
                          text-sm
                          shadow-xl
                          shadow-[#DEB22F]/30
                          transition-all
                          duration-500
                          hover:scale-125
                          hover:rotate-6
                        "
                      >
                        {step.num}

                        <span className="absolute inset-0 rounded-full border-2 border-[#DEB22F] animate-ping opacity-20"></span>
                      </div>

                    </div>

                    {/* Content Card */}
                    <div
                      className={`
                        ml-16
                        md:ml-0
                        md:w-1/2
                        ${
                          index % 2 === 0
                            ? 'md:pr-12'
                            : 'md:pl-12'
                        }
                      `}
                    >

                      <div
                        className="
                          group
                          relative
                          bg-white
                          rounded-3xl
                          p-6
                          md:p-8
                          border
                          border-gray-100
                          shadow-md
                          hover:shadow-2xl
                          hover:-translate-y-2
                          transition-all
                          duration-500
                          overflow-hidden
                        "
                      >

                        {/* Card Accent */}
                        <div
                          className={`
                            absolute
                            top-0
                            ${
                              index % 2 === 0
                                ? 'left-0'
                                : 'right-0'
                            }
                            w-1
                            h-full
                            bg-gradient-to-b
                            from-[#DEB22F]
                            to-teal-500
                            rounded-full
                          `}
                        ></div>

                        {/* Step Label */}
                        <span className="text-xs font-bold uppercase tracking-widest text-[#DEB22F]">
                          Step {step.num}
                        </span>

                        <h3 className="mt-2 text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#b18c1d] transition-colors duration-300">
                          {step.title}
                        </h3>

                        <p className="mt-3 text-gray-600 leading-relaxed">
                          {step.desc}
                        </p>

                        {/* Bottom Progress */}
                        <div className="mt-6 h-1 w-12 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full w-0 group-hover:w-full bg-[#DEB22F] rounded-full transition-all duration-700"></div>
                        </div>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-6 py-12 md:px-12 text-center shadow-2xl">

              <div className="absolute -top-20 -left-20 w-48 h-48 bg-[#DEB22F]/20 rounded-full blur-2xl"></div>

              <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-teal-500/20 rounded-full blur-2xl"></div>

              <div className="relative">

                <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                  Ready to Start Your Journey?
                </h2>

                <p className="mt-4 text-gray-300 max-w-xl mx-auto">
                  Get personalized guidance and take the next step toward
                  your hospitality career.
                </p>

                <Link
                  to="/contact"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    mt-8
                    bg-[#DEB22F]
                    hover:bg-[#c49b25]
                    text-black
                    px-8
                    py-4
                    rounded-full
                    font-bold
                    transition-all
                    duration-300
                    shadow-lg
                    hover:shadow-[#DEB22F]/30
                    hover:-translate-y-1
                    group
                  "
                >
                  Start Your Counselling

                  <CheckCircle className="h-5 w-5" />

                  <ArrowRight
                    className="
                      h-5
                      w-5
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>

              </div>

            </div>

          </div>
        </section>

      </div>
    </>
  );
}