import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    studentName: '', parentName: '', phone: '', email: '', course: '', state: '', neetScore: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call since this is static frontend
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ studentName: '', parentName: '', phone: '', email: '', course: '', state: '', neetScore: '', message: '' });
    }, 500);
  };

  return (
    <div className="bg-bgLight min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-navy mb-4">Talk to Our Admission Counsellors</h1>
            <p className="text-gray-600 mb-12">Have questions about medical admissions? Fill out the form or reach out to us directly. We are here to guide you.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-teal/10 p-4 rounded-full"><Phone className="text-teal h-6 w-6" /></div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Phone</h4>
                  <p className="text-gray-600">+91 6281570955</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-teal/10 p-4 rounded-full"><Mail className="text-teal h-6 w-6" /></div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Email</h4>
                  <p className="text-gray-600">hospitalitydisha@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-teal/10 p-4 rounded-full"><MapPin className="text-teal h-6 w-6" /></div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Office</h4>
                  <p className="text-gray-600">Hyderabad, Telangana, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-teal/10 p-4 rounded-full"><Clock className="text-teal h-6 w-6" /></div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Working Hours</h4>
                  <p className="text-gray-600">Mon – Sat | 9:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-navy">Thank You!</h3>
                <p className="text-gray-600">Our counselling team will contact you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-4 text-teal hover:underline font-medium">Submit another query</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Student Name *</label>
                    <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent outline-none" value={formData.studentName} onChange={e => setFormData({...formData, studentName: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Parent Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent outline-none" value={formData.parentName} onChange={e => setFormData({...formData, parentName: e.target.value})} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent outline-none" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent outline-none" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Course</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal outline-none" value={formData.course} onChange={e => setFormData({...formData, course: e.target.value})}>
                      <option value="">Select Course</option>
                      <option value="MBBS">MBBS</option>
                      <option value="BDS">BDS</option>
                      <option value="BAMS">BAMS / BHMS</option>
                      <option value="Nursing">Nursing / BPT</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">NEET Score (Expected/Actual)</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal outline-none" value={formData.neetScore} onChange={e => setFormData({...formData, neetScore: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal outline-none resize-none" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                <button type="submit" className="w-full bg-navy hover:bg-teal text-white py-3 rounded-lg font-medium transition-colors shadow-md">
                  Request Counselling
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}