"use client";

import {
  Calendar,
  Phone,
  Mail,
  MapPin,
  Info,
  CheckCircle,
  X,
} from "lucide-react"; // Icons for the section
import { useState } from "react";

// Your main brand color

export default function ContactSection() {
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setShowModal(true);
  };

  return (
    <>
      {/* Modal Backdrop */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 pb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Message Sent!
                </h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 pb-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <p className="text-green-800 font-medium mb-2">
                  Thank you for reaching out!
                </p>
                <p className="text-green-700 text-sm leading-relaxed">
                  Your message has been received successfully. I will review
                  your request and respond within 24 hours during business days.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  What happens next?
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    I&apos;ll review your consultation request
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    You&apos;ll receive a response within 24 hours
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    We&apos;ll schedule your session at your convenience
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="w-full mt-6 py-3 px-4 bg-[#853A75] text-white font-semibold rounded-lg hover:bg-[#6a2e5d] transition-colors focus:outline-none focus:ring-2 focus:ring-[#853A75] focus:ring-offset-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section Content */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* === Header Section === */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              I&apos;m here to support you on your spiritual journey. Reach out
              to schedule a consultation, ask questions, or request prayer.
              Every conversation is confidential and welcomed with love.
            </p>
          </div>

          {/* === Main Content: Two-Column Cards === */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* === Left Card: Contact Information === */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full">
              {/* Header */}
              <div className="flex items-center mb-8 text-black">
                <Info className="w-6 h-6 mr-2 text-yellow-500" />
                <h3 className="text-xl font-semibold">Contact Information</h3>
              </div>

              {/* Contact Details List */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-lg text-gray-600">+44 7879 847236</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-lg text-gray-600">
                      naome@character-matters.uk
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-lg text-gray-600">
                      Corby, Northamptonshire
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Office Hours
                  </h4>
                  <p className="text-sm text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-sm text-gray-600">
                    Saturday: 10:00 AM - 2:00 PM
                  </p>
                  <p className="text-sm text-gray-600">Sunday: Available</p>
                </div>

                {/* Response Time */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Response Time
                  </h4>
                  <p className="text-sm text-gray-600">
                    I typically respond to all inquiries within 24 hours during
                    business days.
                  </p>
                </div>

                {/* Emergency Contact */}
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Emergency Pastoral Care
                  </h4>
                  <p className="text-sm text-gray-600">
                    For urgent pastoral care needs outside office hours, please
                    call and leave a detailed message.
                  </p>
                </div>
              </div>
            </div>

            {/* === Right Card: Schedule a Consultation Form === */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              {/* Header */}
              <div className="flex items-center mb-6 text-black">
                <Calendar className="w-6 h-6 mr-2 text-yellow-500" />
                <h3 className="text-xl font-semibold">
                  Schedule a consultation
                </h3>
              </div>

              <form className="space-y-4" onSubmit={handleFormSubmit}>
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput label="Full name*" placeholder="Full name" />
                  <FormInput
                    label="Email Address*"
                    placeholder="youremail@example.com"
                  />
                </div>

                {/* Row 2: Phone and Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput label="Phone Number*" placeholder="+44" />
                  <FormSelect
                    label="Service Needed*"
                    options={[
                      "Select a service",
                      "Individual Counseling",
                      "Marriage Counseling",
                      "Bible Study",
                    ]}
                  />
                </div>

                {/* Row 3: Meeting Time */}
                <FormSelect
                  label="Preferred Meeting time"
                  options={[
                    "Select time/date",
                    "Morning",
                    "Afternoon",
                    "Evening",
                  ]}
                />

                {/* Row 4: Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    placeholder="Please share briefly what you would like to discuss or a prayer request..."
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 resize-none focus:border-[#853A75] focus:ring-[#853A75] focus:ring-1 transition-colors"
                  ></textarea>
                </div>

                {/* Note Block */}
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-500 text-sm">
                  <span className="font-bold text-gray-900">Please Note:</span>{" "}
                  All communications are confidential and protected by pastoral
                  privilege. I will respond to your inquiry within 24 hours.
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 mt-4 text-lg font-semibold rounded-lg text-white bg-[#853A75] hover:bg-[#6a2e5d] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#853A75] focus:ring-offset-2 shadow-md hover:shadow-lg"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Helper component for styled text input
const FormInput = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:border-[#853A75] focus:ring-[#853A75] focus:ring-1 transition-colors"
    />
  </div>
);

// Helper component for styled select input
const FormSelect = ({
  label,
  options,
}: {
  label: string;
  options: string[];
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <select
      className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 appearance-none focus:border-[#853A75] focus:ring-[#853A75] focus:ring-1 transition-colors"
      defaultValue={options[0]}
    >
      {options.map((option, index) => (
        <option
          key={index}
          value={option}
          disabled={index === 0 && option === "Select a service"}
        >
          {option}
        </option>
      ))}
    </select>
  </div>
);
