"use client";

import React from "react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-6">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Your Order!
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Your order has been successfully placed and is being processed.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg mb-6 text-left">
            <h2 className="font-semibold text-gray-900 mb-2">
              What happens next?
            </h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  You&apos;ll receive a confirmation email with your order
                  details within 5 minutes
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  We&apos;ll verify your bank transfer payment within 1-2
                  business days
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  Once payment is confirmed, we&apos;ll prepare and ship your
                  order
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  You&apos;ll receive shipping confirmation with tracking
                  information
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              Important Reminders
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>
                • Please use your email address as the reference when making the
                bank transfer
              </li>
              <li>• Allow 1-2 business days for payment verification</li>
              <li>• Contact us if you have any questions about your order</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Need help? Contact us at{" "}
              <a
                href="mailto:support@charactermatters.com"
                className="text-[#853A75] hover:text-[#6a2e5d]"
              >
                support@charactermatters.com
              </a>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-[#853A75] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6a2e5d] transition-colors"
              >
                Continue Shopping
              </Link>

              <a
                href="mailto:support@charactermatters.com"
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
