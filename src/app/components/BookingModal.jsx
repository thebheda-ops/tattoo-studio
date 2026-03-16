"use client";

import { useState } from "react";

const services = [
  { value: "custom", label: "Custom Design" },
  { value: "realism", label: "Realism" },
  { value: "traditional", label: "Traditional" },
  { value: "neo-traditional", label: "Neo-Traditional" },
  { value: "japanese", label: "Japanese" },
  { value: "cover-up", label: "Cover-Up" },
  { value: "blackwork", label: "Blackwork" },
  { value: "watercolor", label: "Watercolor" },
];

const artists = [
  { value: "marcus", label: "Marcus Chen (Realism & Portraits)" },
  { value: "sarah", label: "Sarah Williams (Traditional & Neo-Traditional)" },
  { value: "jake", label: "Jake Morrison (Japanese & Blackwork)" },
  { value: "elena", label: "Elena Rodriguez (Watercolor & Abstract)" },
  { value: "no-preference", label: "No Preference - Any Available Artist" },
];

const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", 
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
];

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    artist: "",
    date: "",
    time: "",
    description: "",
    size: "",
    placement: "",
  });
  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const vendorWhatsApp = "15551234567";
    
    const message = `*New Tattoo Booking Request*\n\n` +
      `*Client Information:*\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n\n` +
      `*Booking Details:*\n` +
      `Service: ${services.find(s => s.value === formData.service)?.label || formData.service}\n` +
      `Artist: ${artists.find(a => a.value === formData.artist)?.label || formData.artist}\n` +
      `Date: ${formData.date}\n` +
      `Time: ${formData.time}\n\n` +
      `*Tattoo Details:*\n` +
      `Size: ${formData.size}\n` +
      `Placement: ${formData.placement}\n` +
      `Description: ${formData.description}\n\n` +
      `Please confirm this booking.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${vendorWhatsApp}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
    setFormData({
      name: "", phone: "", email: "", service: "", artist: "",
      date: "", time: "", description: "", size: "", placement: ""
    });
    setStep(1);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/90 backdrop-blur-sm p-4">
      <div className="flex min-h-full items-start justify-center pt-4 sm:pt-8 md:pt-12">
        <div className="relative bg-zinc-950 border border-zinc-800 w-full max-w-2xl shadow-2xl rounded-lg overflow-hidden">
          
          {/* Header */}
          <div className="sticky top-0 bg-zinc-950 border-b border-zinc-800 p-4 sm:p-6 flex items-center justify-between z-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider">
                Book <span className="text-[#ff3333]">Appointment</span>
              </h2>
              <p className="text-zinc-500 text-sm mt-1">Step {step} of 3</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white transition-colors bg-zinc-900 rounded-full"
              aria-label="Close"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 pb-8">
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold uppercase tracking-wider text-zinc-300">Your Information</h3>
                
                <div>
                  <label className="block text-sm uppercase tracking-widest mb-2 text-zinc-400">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#ff3333] focus:outline-none transition-colors rounded"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm uppercase tracking-widest mb-2 text-zinc-400">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#ff3333] focus:outline-none transition-colors rounded"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-widest mb-2 text-zinc-400">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#ff3333] focus:outline-none transition-colors rounded"
                      placeholder="john@email.com"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.name || !formData.phone || !formData.email}
                    className="w-full bg-[#ff3333] hover:bg-[#cc0000] disabled:bg-zinc-700 disabled:cursor-not-allowed py-4 text-lg uppercase tracking-widest font-semibold transition-colors rounded"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold uppercase tracking-wider text-zinc-300">Service & Artist</h3>
                
                <div>
                  <label className="block text-sm uppercase tracking-widest mb-2 text-zinc-400">Service Type *</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#ff3333] focus:outline-none transition-colors rounded"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>{service.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-widest mb-2 text-zinc-400">Preferred Artist</label>
                  <select
                    value={formData.artist}
                    onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                    className="w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#ff3333] focus:outline-none transition-colors rounded"
                  >
                    <option value="">Select an artist (optional)</option>
                    {artists.map((artist) => (
                      <option key={artist.value} value={artist.value}>{artist.label}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm uppercase tracking-widest mb-2 text-zinc-400">Preferred Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#ff3333] focus:outline-none transition-colors rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-widest mb-2 text-zinc-400">Preferred Time *</label>
                    <select
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#ff3333] focus:outline-none transition-colors rounded"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 border border-zinc-700 hover:border-white py-4 text-lg uppercase tracking-widest font-semibold transition-colors rounded"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.service || !formData.date || !formData.time}
                    className="flex-1 bg-[#ff3333] hover:bg-[#cc0000] disabled:bg-zinc-700 disabled:cursor-not-allowed py-4 text-lg uppercase tracking-widest font-semibold transition-colors rounded"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold uppercase tracking-wider text-zinc-300">Tattoo Details</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm uppercase tracking-widest mb-2 text-zinc-400">Tattoo Size *</label>
                    <select
                      required
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      className="w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#ff3333] focus:outline-none transition-colors rounded"
                    >
                      <option value="">Select size</option>
                      <option value="Small (under 2 inches)">Small (under 2&quot;)</option>
                      <option value="Medium (2-4 inches)">Medium (2-4&quot;)</option>
                      <option value="Large (4-6 inches)">Large (4-6&quot;)</option>
                      <option value="Extra Large (6+ inches)">Extra Large (6+&quot;)</option>
                      <option value="Full Sleeve">Full Sleeve</option>
                      <option value="Half Sleeve">Half Sleeve</option>
                      <option value="Back Piece">Back Piece</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-widest mb-2 text-zinc-400">Body Placement *</label>
                    <select
                      required
                      value={formData.placement}
                      onChange={(e) => setFormData({ ...formData, placement: e.target.value })}
                      className="w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#ff3333] focus:outline-none transition-colors rounded"
                    >
                      <option value="">Select placement</option>
                      <option value="Arm">Arm</option>
                      <option value="Leg">Leg</option>
                      <option value="Chest">Chest</option>
                      <option value="Back">Back</option>
                      <option value="Shoulder">Shoulder</option>
                      <option value="Forearm">Forearm</option>
                      <option value="Wrist">Wrist</option>
                      <option value="Ankle">Ankle</option>
                      <option value="Neck">Neck</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-widest mb-2 text-zinc-400">Tattoo Description *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#ff3333] focus:outline-none transition-colors resize-none rounded"
                    placeholder="Describe your tattoo idea in detail..."
                  />
                </div>

                <div className="bg-zinc-900/50 p-4 border border-zinc-800 rounded">
                  <p className="text-zinc-400 text-sm">
                    By clicking &quot;Send via WhatsApp&quot;, you&apos;ll be redirected to WhatsApp with your booking details pre-filled.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 border border-zinc-700 hover:border-white py-4 text-lg uppercase tracking-widest font-semibold transition-colors rounded"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={!formData.size || !formData.placement || !formData.description}
                    className="flex-1 bg-[#ff3333] hover:bg-[#cc0000] disabled:bg-zinc-700 disabled:cursor-not-allowed py-4 text-lg uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2 rounded"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.35-8.413"/>
                    </svg>
                    Send via WhatsApp
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
