import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdmissionProcessPage() {
  const steps = [
    { num: '01', title: 'Understand Your Goals', desc: 'Discuss academic background, interests and career goals with our expert counsellors.' },
    { num: '02', title: 'Shortlist Courses', desc: 'Identify suitable medical and healthcare programs tailored to your profile.' },
    { num: '03', title: 'Explore Colleges', desc: 'Compare colleges, locations, fees, facilities and eligibility criteria.' },
    { num: '04', title: 'Application Guidance', desc: 'Understand applications, counselling procedures and gather required documents.' },
    { num: '05', title: 'Counselling & Choice Filling', desc: 'Get strategic guidance for applicable counselling rounds and preference selection.' },
    { num: '06', title: 'Admission Support', desc: 'Receive continuous assistance throughout the final admission reporting process.' },
  ];

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-navy mb-4">Your Admission Journey, Simplified</h1>
          <p className="text-gray-600">We provide end-to-end assistance from course selection to your first day at college.</p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-teal text-white font-bold text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                {step.num}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-bgLight p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-bold text-navy text-xl">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl">
            Start Your Counselling <CheckCircle className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}