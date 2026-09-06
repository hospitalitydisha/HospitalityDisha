import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    course: "",
    state: "",
    neetScore: "",
    other: "",
    message: "",
  });

  const [showContactMessage, setShowContactMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Google Apps Script Web App URL

    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbyuni2umYT1ZCCpTaHDIOzzuluE-85reK7qlYkBbbyZ-Jrt_T9CENs3sYcmFj7JtSodGQ/exec";



  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.studentName.trim()) {
      alert("Please enter Student Name.");
      return;
    }

    if (!formData.phone.trim()) {
      alert("Please enter Phone Number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          studentName: formData.studentName,
          parentName: formData.parentName,
          phone: formData.phone,
          email: formData.email,
          course: formData.course,
          state: formData.state,
          neetScore: formData.neetScore,
          other: formData.other,
          message: formData.message,
        }),
      });

      // Read response as text first.
      // This prevents response.json() from failing
      // when Google Apps Script returns a non-standard response.
      const responseText = await response.text();

      console.log("Google Apps Script response:", responseText);

      let result;

      try {
        result = JSON.parse(responseText);
      } catch (jsonError) {
        console.error("Invalid JSON response:", responseText);

        throw new Error(
          "Google Apps Script did not return valid JSON."
        );
      }

      if (result.success) {
        setShowContactMessage(true);

        setFormData({
          studentName: "",
          parentName: "",
          phone: "",
          email: "",
          course: "",
          state: "",
          neetScore: "",
          other: "",
          message: "",
        });
      } else {
        alert(
          result.message ||
            "Unable to submit your request. Please try again."
        );
      }
    } catch (error) {
      console.error("Submission error:", error);

      alert(
        "Something went wrong while submitting your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-bgLight py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* =====================================
              CONTACT INFORMATION
          ====================================== */}
          <div>
            <h1 className="mb-4 text-4xl font-bold text-navy">
              Talk to Our Admission Counsellors
            </h1>

            <p className="mb-12 text-gray-600">
              Have questions about Hospitality admissions? Fill out the form
              or reach out to us directly. We are here to guide you.
            </p>

            <div className="space-y-8">

              {/* PHONE */}
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
                    className="text-gray-600 transition-colors hover:text-teal"
                  >
                    +91 6281570955
                  </a>
                </div>
              </div>

              {/* EMAIL */}
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
                    className="text-gray-600 transition-colors hover:text-teal"
                  >
                    hospitalitydisha.in@gmail.com
                  </a>
                </div>
              </div>

              {/* OFFICE */}
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

              {/* WORKING HOURS */}
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


          {/* =====================================
              CONTACT FORM
          ====================================== */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">

            {showContactMessage ? (

              /* =====================================
                  SUCCESS MESSAGE
              ====================================== */
              <div className="flex min-h-[500px] flex-col items-center justify-center px-4 text-center">

                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-teal/10">
                  <CheckCircle className="h-10 w-10 text-teal" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-navy">
                  Request Submitted Successfully!
                </h3>

                <p className="mb-6 max-w-md text-gray-600">
                  Thank you for contacting Hospitality Disha.
                  Our admission counsellor will contact you shortly.
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
                  Submit Another Request
                </button>

              </div>

            ) : (

              /* =====================================
                  FORM
              ====================================== */
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                {/* STUDENT + PARENT */}
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
                      placeholder="Enter student name"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-teal"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Enter Experiance
                    </label>

                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Enter Experiance "
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-teal"
                    />
                  </div>

                </div>


                {/* PHONE + EMAIL */}
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
                      placeholder="Enter phone number"
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
                      placeholder="Enter email address"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-teal"
                    />
                  </div>

                </div>


                {/* COURSE + OTHER */}
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
                      <option value="">
                        Select Course
                      </option>

                      <option value="Bachelor of Hotel Management (BHM)">
                        Bachelor of Hotel Management (BHM)
                      </option>

                      <option value="B.Sc Hospitality">
                        B.Sc Hospitality
                      </option>

                      <option value="Diploma in Hotel Management">
                        Diploma in Hotel Management
                      </option>

                      <option value="Food Production">
                        Food Production
                      </option>

                      <option value="Bakery & Confectionery">
                        Bakery & Confectionery
                      </option>

                      <option value="Food & Beverage Service">
                        Food & Beverage Service
                      </option>

                      <option value="Front Office">
                        Front Office
                      </option>

                      <option value="Housekeeping">
                        Housekeeping
                      </option>

                      <option value="Other">
                        Other
                      </option>
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
                      placeholder="Other course"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-teal"
                    />
                  </div>

                </div>


                {/* MESSAGE */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Message
                  </label>

                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>


                {/* WHATSAPP */}
                <a
                  href="https://wa.me/916281570955"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="h-7 w-7" />
                </a>


                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-black py-3 font-medium text-white shadow-md transition-colors hover:bg-teal disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Request Counselling"}
                </button>

              </form>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
