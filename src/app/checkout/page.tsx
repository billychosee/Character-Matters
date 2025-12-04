"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "../../context/CartContext";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  bankReference: string;
  transferAmount: string;
}

export default function CheckoutPage() {
  const { state, clearCart } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    bankReference: "",
    transferAmount: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Generate order ID
      const newOrderId = `ORDER-${Date.now()}-${Math.random()
        .toString(36)
        .substr(2, 9)
        .toUpperCase()}`;

      // Prepare order data for Supabase
      const orderData = {
        id: newOrderId,
        customer_email: formData.email,
        customer_name: `${formData.firstName} ${formData.lastName}`,
        customer_phone: formData.phone,
        customer_address: `${formData.address}, ${formData.city}, ${formData.postalCode}, ${formData.country}`,
        total_amount: state.total,
        status: "pending_payment",
        bank_reference: formData.bankReference,
        transfer_amount: parseFloat(formData.transferAmount),
        order_items: JSON.stringify(state.items),
      };

      // Insert order into Supabase
      const { error } = await supabase
        .from("orders")
        .insert([orderData])
        .select()
        .single();

      if (error) {
        console.error("Error creating order:", error);
        console.error("Order data sent:", orderData);
        alert("There was an error creating your order. Please try again.");
        return;
      }

      setOrderId(newOrderId);

      // Send order confirmation email
      const emailData = {
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerEmail: formData.email,
        orderId: newOrderId,
        totalAmount: state.total,
        orderItems: state.items,
        customerAddress: `${formData.address}, ${formData.city}, ${formData.postalCode}, ${formData.country}`,
      };

      try {
        console.log("📧 Preparing to send email via Resend to:", emailData.customerEmail);

        // Send email via API route (which now uses Resend)
        const emailResponse = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        });

        const emailResult = await emailResponse.json();

        if (emailResponse.ok && emailResult.success) {
          console.log("✅ Email sent successfully via Resend API");
          alert("✅ Order created and email sent successfully!");
        } else {
          console.error("❌ Email sending failed:", emailResult);
          alert("⚠️ Order created successfully! Email may not have been sent, but we'll process your order.");
        }

      } catch (emailError) {
        console.error("💥 Email API error:", emailError);
        
        // Continue with order even if email fails
        alert("⚠️ Order created successfully! Email may not have been sent, but we'll process your order.");
      }

      // Clear cart after successful order creation
      clearCart();

      // Redirect to thank you page after 2 seconds
      setTimeout(() => {
        router.push("/thank-you");
      }, 2000);
    } catch (error) {
      console.error("Error processing order:", error);
      alert("There was an error processing your order. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (state.items.length === 0 && !orderId) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 md:pt-24 py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Your cart is empty
          </h1>
          <p className="text-gray-600 mb-8">
            Add some items to your cart before proceeding to checkout.
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-[#853A75] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6a2e5d] transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 md:pt-24 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              {state.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 pb-4 border-b"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={64}
                    height={80}
                    className="w-16 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center text-lg font-semibold">
              <span className="text-gray-900">Total:</span>
              <span className="text-[#6a2e5d] font-bold text-xl">
                ${state.total.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Bank Transfer Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Bank Transfer Payment
            </h2>

            {/* Bank Details */}
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Bank Transfer Details
              </h3>
              <div className="space-y-1 text-sm text-gray-700">
                <p>
                  <strong>Bank Name:</strong> Revolut Bank
                </p>
                <p>
                  <strong>Account Name:</strong> Naome Midzi
                </p>
                <p>
                  <strong>Sort Code:</strong> SC - 230120
                </p>
                <p>
                  <strong>Account Number:</strong> 64685977
                </p>
                <p>
                  <strong>Reference:</strong> Use your email address as
                  reference
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Customer Information */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Customer Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#853A75] text-gray-900 placeholder-gray-600"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#853A75] text-gray-900 placeholder-gray-600"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#853A75] text-gray-900 placeholder-gray-600 mt-4"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#853A75] text-gray-900 placeholder-gray-600 mt-4"
                />
              </div>

              {/* Shipping Address */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Shipping Address
                </h3>
                <textarea
                  name="address"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#853A75] text-gray-900 placeholder-gray-600"
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#853A75] text-gray-900 placeholder-gray-600"
                  />
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#853A75] text-gray-900 placeholder-gray-600"
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#853A75] text-gray-900 placeholder-gray-600"
                  />
                </div>
              </div>

              {/* Payment Confirmation */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Payment Confirmation
                </h3>
                <input
                  type="text"
                  name="bankReference"
                  placeholder="Your Bank Transfer Reference/Transaction ID"
                  value={formData.bankReference}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#853A75] text-gray-900 placeholder-gray-600 mb-4"
                />
                <input
                  type="number"
                  name="transferAmount"
                  placeholder="Transfer Amount (USD)"
                  value={formData.transferAmount}
                  onChange={handleInputChange}
                  required
                  step="0.01"
                  min={state.total}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#853A75] text-gray-900 placeholder-gray-600"
                />
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#853A75] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#6a2e5d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? "Processing Order..." : "Complete Order"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
