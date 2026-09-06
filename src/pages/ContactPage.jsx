import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
const [formData, setFormData] = useState({
studentName: '',
parentName: '',
phone: '',
email: '',
course: '',
state: '',
neetScore: '',
other: '',
message: '',
});

const [showContactMessage, setShowContactMessage] = useState(false);

const handleSubmit = (e) => {
e.preventDefault();

// Static website: no backend/API is connected yet.
setShowContactMessage(true);

};

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

return ( <div className="min-h-screen bg-bgLight py-16"> <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div className="grid gap-16 lg:grid-cols-2">

      {/* Contact Information */}
      <div>
        <h1 className="mb-4 text-4xl font-bold text-navy">
          Talk to Our Admission Counsellors
        </h1>

        <p className="mb-12 text-gray-600">
          Have questions about Hospitality admissions? Fill out the form or
          reach out to us directly. We are here to guide you.
        </p>

        <div className="space-y-8">

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-teal/10 p-4">
              <Phone className="h-6 w-6 text-teal" />
            </div>

            <div>
              <h4 className="mb-1 font-bold text-navy">
                Phone
              </h4>

              <a
                href="tel:+916281570955"
                className="text-gray-600 hover:text-teal"
              >
                +91 6281570955
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-teal/10 p-4">
              <Mail className="h-6 w-6 text-teal" />
            </div>

            <div>
              <h4 className="mb-1 font-bold text-navy">
                Email
              </h4>

              <a
                href="mailto:hospitalitydisha.in@gmail.com"
                className="text-gray-600 hover:text-teal"
              >
                hospitalitydisha.in@gmail.com
              </a>
            </div>
          </div>

          {/* Office */}
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-teal/10 p-4">
              <MapPin className="h-6 w-6 text-teal" />
            </div>

            <div>
              <h4 className="mb-1 font-bold text-navy">
                Office
              </h4>

              <p className="text-gray-600">
                Hyderabad, Telangana, India
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-teal/10 p-4">
              <Clock className="h-6 w-6 text-teal" />
            </div>

            <div>
              <h4 className="mb-1 font-bold text-navy">
                Working Hours
              </h4>

              <p className="text-gray-600">
                Mon – Sat | 9:00 AM – 7:00 PM
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Contact Form */}
      <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">

        {showContactMessage ? (
          <div className="flex min-h-[500px] flex-col items-center justify-center px-4 text-center">

            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <Phone className="h-10 w-10 text-red-500" />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-navy">
              Unable to Submit Request
            </h3>

            <p className="mb-6 max-w-md text-gray-600">
              Our online counselling request service is currently
              unavailable. Please contact our admission counsellors
              directly using the phone number or email below.
            </p>

            <div className="mb-6 space-y-3 text-center">

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Phone
                </p>

                <a
                  href="tel:+916281570955"
                  className="font-semibold text-teal hover:underline"
                >
                  +91 6281570955
                </a>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Email
                </p>

                <a
                  href="mailto:hospitalitydisha.in@gmail.com"
                  className="font-semibold text-teal hover:underline"
                >
                  hospitalitydisha.in@gmail.com
                </a>
              </div>

            </div>

            <button
              type="button"
              onClick={() => setShowContactMessage(false)}
              className="rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors hover:bg-teal"
            >
              Try Again
            </button>

          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Student + Parent */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Student Name *
                </label>

                <input
                  type="text"
                  name="studentName"
                  required
                  value={formData.studentName}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-teal"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Parent Name
                </label>

                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-teal"
                />
              </div>

            </div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-teal"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-teal"
                />
              </div>

            </div>

            {/* Course + Other */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Preferred Course
                </label>

                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-teal"
                >
                  <option value="">Select Course</option>
                  <option value="MBBS">MBBS</option>
                  <option value="BDS">BDS</option>
                  <option value="BAMS">BAMS</option>
                  <option value="BHMS">BHMS</option>
                  <option value="Nursing">Nursing</option>
                  <option value="BPT">BPT</option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="Allied Health">Allied Health</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Other
                </label>

                <input
                  type="text"
                  name="other"
                  value={formData.other}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-teal"
                />
              </div>

            </div>

            {/* Message */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Message
              </label>

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-teal"
              />
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/916281570955"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-lg transition-transform duration-300 hover:scale-110"
              aria-label="Chat on WhatsApp"
            >
              <svg
                className="h-8 w-8 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.198.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
                />
              </svg>
            </a>

            <button
              type="submit"
              className="w-full rounded-lg bg-black py-3 font-medium text-white shadow-md transition-colors hover:bg-teal"
            >
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
