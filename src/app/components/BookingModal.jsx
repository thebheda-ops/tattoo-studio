"use client";

import { useState, useCallback } from "react";

// ============================================
// BOOKING MODEL - Data Structures & Constants
// ============================================

/**
 * Service categories available for booking
 */
const SERVICE_TYPES = [
  {
    id: "custom",
    label: "Custom Design",
    description: "Unique designs tailored to you",
  },
  { id: "realism", label: "Realism", description: "Photo-realistic tattoos" },
  {
    id: "traditional",
    label: "Traditional",
    description: "Classic American traditional",
  },
  {
    id: "neo-traditional",
    label: "Neo-Traditional",
    description: "Modern twist on classic",
  },
  {
    id: "japanese",
    label: "Japanese",
    description: "Traditional Japanese style",
  },
  { id: "cover-up", label: "Cover-Up", description: "Hide unwanted tattoos" },
  {
    id: "blackwork",
    label: "Blackwork",
    description: "Bold black ink designs",
  },
  {
    id: "watercolor",
    label: "Watercolor",
    description: "Vibrant watercolor style",
  },
];

/**
 * Available artists with their specialties
 */
const ARTISTS = [
  { id: "marcus", name: "Marcus Chen", specialty: "Realism & Portraits" },
  {
    id: "sarah",
    name: "Sarah Williams",
    specialty: "Traditional & Neo-Traditional",
  },
  { id: "jake", name: "Jake Morrison", specialty: "Japanese & Blackwork" },
  { id: "elena", name: "Elena Rodriguez", specialty: "Watercolor & Abstract" },
  {
    id: "no-preference",
    name: "No Preference",
    specialty: "Any Available Artist",
  },
];

/**
 * Available time slots for appointments
 */
const TIME_SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

/**
 * Tattoo size options
 */
const TATTOO_SIZES = [
  { id: "small", label: 'Small (under 2")', description: "Small and detailed" },
  { id: "medium", label: 'Medium (2-4")', description: "Medium sized piece" },
  { id: "large", label: 'Large (4-6")', description: "Large and visible" },
  {
    id: "extra-large",
    label: 'Extra Large (6+")',
    description: "Very large piece",
  },
  { id: "half-sleeve", label: "Half Sleeve", description: "Half arm coverage" },
  { id: "full-sleeve", label: "Full Sleeve", description: "Full arm coverage" },
  { id: "back-piece", label: "Back Piece", description: "Full back coverage" },
];

/**
 * Body placement options
 */
const BODY_PLACEMENTS = [
  { id: "arm", label: "Arm" },
  { id: "leg", label: "Leg" },
  { id: "chest", label: "Chest" },
  { id: "back", label: "Back" },
  { id: "shoulder", label: "Shoulder" },
  { id: "forearm", label: "Forearm" },
  { id: "wrist", label: "Wrist" },
  { id: "ankle", label: "Ankle" },
  { id: "neck", label: "Neck" },
  { id: "other", label: "Other" },
];

/**
 * Form steps for the booking process
 */
const FORM_STEPS = { CLIENT_INFO: 1, BOOKING_DETAILS: 2, TATTOO_DETAILS: 3 };

/**
 * Default empty booking data
 */
const createEmptyBooking = () => ({
  client: { name: "", phone: "", email: "" },
  booking: { service: "", artist: "", date: "", time: "" },
  tattoo: { size: "", placement: "", description: "" },
});

/**
 * Validation rules for booking form
 */
const validateClientInfo = (client) => {
  const errors = [];
  if (!client.name.trim()) errors.push("Name is required");
  if (!client.phone.trim()) errors.push("Phone is required");
  else if (!/^[\d\s\-+()]{7,20}$/.test(client.phone)) {
    errors.push("Invalid phone format");
  }
  if (!client.email.trim()) errors.push("Email is required");
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(client.email)) {
    errors.push("Invalid email format");
  }
  return errors;
};

const validateBookingDetails = (booking) => {
  const errors = [];
  if (!booking.service) errors.push("Service type is required");
  if (!booking.date) errors.push("Date is required");
  if (!booking.time) errors.push("Time is required");

  // Check if date is not in the past (use local time for accurate comparison)
  if (booking.date) {
    const selectedDate = new Date(booking.date + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      errors.push("Date cannot be in the past");
    }
  }
  return errors;
};

const validateTattooDetails = (tattoo) => {
  const errors = [];
  if (!tattoo.size) errors.push("Size is required");
  if (!tattoo.placement) errors.push("Placement is required");
  if (!tattoo.description.trim()) errors.push("Description is required");
  else if (tattoo.description.trim().length < 10) {
    errors.push("Description must be at least 10 characters");
  }
  return errors;
};

// ============================================
// COMPONENT
// ============================================

export default function BookingModal({
  isOpen,
  onClose,
  whatsappNumber = "9843808299",
}) {
  // Initialize all hooks unconditionally - must be called in same order every render
  const [bookingData, setBookingData] = useState(createEmptyBooking());
  const [currentStep, setCurrentStep] = useState(FORM_STEPS.CLIENT_INFO);
  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ============================================
  // EVENT HANDLERS
  // ============================================

  /**
   * Update client information in the booking data
   */
  const updateClientInfo = useCallback((field, value) => {
    setBookingData((prev) => ({
      ...prev,
      client: { ...prev.client, [field]: value },
    }));
    // Clear errors when user starts typing
    setErrors([]);
  }, []);

  /**
   * Update booking details in the booking data
   */
  const updateBookingDetails = useCallback((field, value) => {
    setBookingData((prev) => ({
      ...prev,
      booking: { ...prev.booking, [field]: value },
    }));
    setErrors([]);
  }, []);

  /**
   * Update tattoo details in the booking data
   */
  const updateTattooDetails = useCallback((field, value) => {
    setBookingData((prev) => ({
      ...prev,
      tattoo: { ...prev.tattoo, [field]: value },
    }));
    setErrors([]);
  }, []);

  /**
   * Get minimum date (today) for date picker
   */
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  /**
   * Proceed to the next step
   */
  const goToNextStep = () => {
    let validationErrors = [];

    if (currentStep === FORM_STEPS.CLIENT_INFO) {
      validationErrors = validateClientInfo(bookingData.client);
    } else if (currentStep === FORM_STEPS.BOOKING_DETAILS) {
      validationErrors = validateBookingDetails(bookingData.booking);
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors([]);
    setCurrentStep((prev) => prev + 1);
  };

  /**
   * Go back to the previous step
   */
  const goToPrevStep = () => {
    setErrors([]);
    setCurrentStep((prev) => prev - 1);
  };

  /**
   * Generate WhatsApp message from booking data
   */
  const generateWhatsAppMessage = () => {
    const { client, booking, tattoo } = bookingData;
    const serviceLabel =
      SERVICE_TYPES.find((s) => s.id === booking.service)?.label ||
      booking.service;
    const artistLabel =
      ARTISTS.find((a) => a.id === booking.artist)?.name || booking.artist;
    const sizeLabel =
      TATTOO_SIZES.find((s) => s.id === tattoo.size)?.label || tattoo.size;
    const placementLabel =
      BODY_PLACEMENTS.find((p) => p.id === tattoo.placement)?.label ||
      tattoo.placement;

    return (
      `*NEW TATTOO BOOKING REQUEST*\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `*CLIENT INFORMATION*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 Name: ${client.name}\n` +
      `📞 Phone: ${client.phone}\n` +
      `✉️ Email: ${client.email}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `*BOOKING DETAILS*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `🎨 Service: ${serviceLabel}\n` +
      `👨‍🎨 Artist: ${artistLabel}\n` +
      `📅 Date: ${booking.date}\n` +
      `🕐 Time: ${booking.time}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `*TATTOO DETAILS*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `📏 Size: ${sizeLabel}\n` +
      `📍 Placement: ${placementLabel}\n` +
      `📝 Description: ${tattoo.description}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `*Please confirm this booking*`
    );
  };

  /**
   * Submit booking via WhatsApp
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate tattoo details before submission
    const validationErrors = validateTattooDetails(bookingData.tattoo);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const message = generateWhatsAppMessage();
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");

      // Reset form after successful submission
      setBookingData(createEmptyBooking());
      setCurrentStep(FORM_STEPS.CLIENT_INFO);
      setErrors([]);
      onClose();
    } catch (error) {
      console.error("Booking submission error:", error);
      setErrors(["Failed to submit booking. Please try again."]);
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Check if current step is valid for proceeding
   */
  const canProceed = () => {
    if (currentStep === FORM_STEPS.CLIENT_INFO) {
      return (
        bookingData.client.name &&
        bookingData.client.phone &&
        bookingData.client.email
      );
    }
    if (currentStep === FORM_STEPS.BOOKING_DETAILS) {
      return (
        bookingData.booking.service &&
        bookingData.booking.date &&
        bookingData.booking.time
      );
    }
    return true;
  };

  // ============================================
  // RENDER HELPERS
  // ============================================

  const renderErrors = () => {
    if (errors.length === 0) return null;
    return (
      <div className='bg-red-900/30 border border-red-800 p-3 rounded mb-4'>
        <ul className='text-red-400 text-sm space-y-1'>
          {errors.map((error, index) => (
            <li key={index}>• {error}</li>
          ))}
        </ul>
      </div>
    );
  };

  // ============================================
  // RENDER
  // ============================================

  // Render - use conditional rendering instead of early return to maintain hook order
  return isOpen ? (
    <div className='fixed inset-0 z-100 overflow-y-auto bg-black/90 backdrop-blur-sm p-4'>
      <div className='flex min-h-full items-start justify-center pt-4 sm:pt-8 md:pt-12'>
        <div className='relative bg-zinc-950 border border-zinc-800 w-full max-w-2xl shadow-2xl rounded-lg overflow-hidden'>
          {/* Header */}
          <div className='sticky top-0 bg-zinc-950 border-b border-zinc-800 p-4 sm:p-6 flex items-center justify-between z-10'>
            <div>
              <h2 className='text-xl sm:text-2xl font-bold uppercase tracking-wider'>
                Book <span className='text-[#ff3333]'>Appointment</span>
              </h2>
              <p className='text-zinc-500 text-sm mt-1'>
                Step {currentStep} of 3
              </p>
            </div>
            <button
              onClick={onClose}
              className='p-2 text-zinc-400 hover:text-white transition-colors bg-zinc-900 rounded-full'
              aria-label='Close modal'
              type='button'
            >
              <svg
                className='w-5 h-5 sm:w-6 sm:h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className='p-4 sm:p-6 pb-8'>
            {renderErrors()}

            {/* Step 1: Client Information */}
            {currentStep === FORM_STEPS.CLIENT_INFO && (
              <div className='space-y-6'>
                <h3 className='text-lg font-semibold uppercase tracking-wider text-zinc-300'>
                  Your Information
                </h3>

                <div>
                  <label
                    htmlFor='client-name'
                    className='block text-sm uppercase tracking-widest mb-2 text-zinc-400'
                  >
                    Full Name *
                  </label>
                  <input
                    id='client-name'
                    type='text'
                    required
                    value={bookingData.client.name}
                    onChange={(e) => updateClientInfo("name", e.target.value)}
                    className='w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#ff3333] focus:outline-none transition-colors rounded'
                    placeholder='John Doe'
                    autoComplete='name'
                  />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                  <div>
                    <label
                      htmlFor='client-phone'
                      className='block text-sm uppercase tracking-widest mb-2 text-zinc-400'
                    >
                      Phone Number *
                    </label>
                    <input
                      id='client-phone'
                      type='tel'
                      required
                      value={bookingData.client.phone}
                      onChange={(e) =>
                        updateClientInfo("phone", e.target.value)
                      }
                      className='w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#ff3333] focus:outline-none transition-colors rounded'
                      placeholder='+1 (555) 000-0000'
                      autoComplete='tel'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='client-email'
                      className='block text-sm uppercase tracking-widest mb-2 text-zinc-400'
                    >
                      Email *
                    </label>
                    <input
                      id='client-email'
                      type='email'
                      required
                      value={bookingData.client.email}
                      onChange={(e) =>
                        updateClientInfo("email", e.target.value)
                      }
                      className='w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#ff3333] focus:outline-none transition-colors rounded'
                      placeholder='john@email.com'
                      autoComplete='email'
                    />
                  </div>
                </div>

                <div className='pt-4'>
                  <button
                    type='button'
                    onClick={goToNextStep}
                    disabled={!canProceed()}
                    className='w-full bg-[#ff3333] hover:bg-[#cc0000] disabled:bg-zinc-700 disabled:cursor-not-allowed py-4 text-lg uppercase tracking-widest font-semibold transition-colors rounded'
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Booking Details */}
            {currentStep === FORM_STEPS.BOOKING_DETAILS && (
              <div className='space-y-6'>
                <h3 className='text-lg font-semibold uppercase tracking-wider text-zinc-300'>
                  Service & Artist
                </h3>

                <div>
                  <label
                    htmlFor='service-type'
                    className='block text-sm uppercase tracking-widest mb-2 text-zinc-400'
                  >
                    Service Type *
                  </label>
                  <select
                    id='service-type'
                    required
                    value={bookingData.booking.service}
                    onChange={(e) =>
                      updateBookingDetails("service", e.target.value)
                    }
                    className='w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#ff3333] focus:outline-none transition-colors rounded'
                  >
                    <option value=''>Select a service</option>
                    {SERVICE_TYPES.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.label} - {service.description}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor='artist'
                    className='block text-sm uppercase tracking-widest mb-2 text-zinc-400'
                  >
                    Preferred Artist
                  </label>
                  <select
                    id='artist'
                    value={bookingData.booking.artist}
                    onChange={(e) =>
                      updateBookingDetails("artist", e.target.value)
                    }
                    className='w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#ff3333] focus:outline-none transition-colors rounded'
                  >
                    <option value=''>Select an artist (optional)</option>
                    {ARTISTS.map((artist) => (
                      <option key={artist.id} value={artist.id}>
                        {artist.name} ({artist.specialty})
                      </option>
                    ))}
                  </select>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                  <div>
                    <label
                      htmlFor='booking-date'
                      className='block text-sm uppercase tracking-widest mb-2 text-zinc-400'
                    >
                      Preferred Date *
                    </label>
                    <input
                      id='booking-date'
                      type='date'
                      required
                      value={bookingData.booking.date}
                      min={getMinDate()}
                      onChange={(e) =>
                        updateBookingDetails("date", e.target.value)
                      }
                      className='w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#ff3333] focus:outline-none transition-colors rounded'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='booking-time'
                      className='block text-sm uppercase tracking-widest mb-2 text-zinc-400'
                    >
                      Preferred Time *
                    </label>
                    <select
                      id='booking-time'
                      required
                      value={bookingData.booking.time}
                      onChange={(e) =>
                        updateBookingDetails("time", e.target.value)
                      }
                      className='w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#ff3333] focus:outline-none transition-colors rounded'
                    >
                      <option value=''>Select time</option>
                      {TIME_SLOTS.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-3 pt-4'>
                  <button
                    type='button'
                    onClick={goToPrevStep}
                    className='flex-1 border border-zinc-700 hover:border-white py-4 text-lg uppercase tracking-widest font-semibold transition-colors rounded'
                  >
                    Back
                  </button>
                  <button
                    type='button'
                    onClick={goToNextStep}
                    disabled={!canProceed()}
                    className='flex-1 bg-[#ff3333] hover:bg-[#cc0000] disabled:bg-zinc-700 disabled:cursor-not-allowed py-4 text-lg uppercase tracking-widest font-semibold transition-colors rounded'
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Tattoo Details */}
            {currentStep === FORM_STEPS.TATTOO_DETAILS && (
              <div className='space-y-6'>
                <h3 className='text-lg font-semibold uppercase tracking-wider text-zinc-300'>
                  Tattoo Details
                </h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                  <div>
                    <label
                      htmlFor='tattoo-size'
                      className='block text-sm uppercase tracking-widest mb-2 text-zinc-400'
                    >
                      Tattoo Size *
                    </label>
                    <select
                      id='tattoo-size'
                      required
                      value={bookingData.tattoo.size}
                      onChange={(e) =>
                        updateTattooDetails("size", e.target.value)
                      }
                      className='w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#ff3333] focus:outline-none transition-colors rounded'
                    >
                      <option value=''>Select size</option>
                      {TATTOO_SIZES.map((size) => (
                        <option key={size.id} value={size.id}>
                          {size.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor='tattoo-placement'
                      className='block text-sm uppercase tracking-widest mb-2 text-zinc-400'
                    >
                      Body Placement *
                    </label>
                    <select
                      id='tattoo-placement'
                      required
                      value={bookingData.tattoo.placement}
                      onChange={(e) =>
                        updateTattooDetails("placement", e.target.value)
                      }
                      className='w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#ff3333] focus:outline-none transition-colors rounded'
                    >
                      <option value=''>Select placement</option>
                      {BODY_PLACEMENTS.map((placement) => (
                        <option key={placement.id} value={placement.id}>
                          {placement.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='tattoo-description'
                    className='block text-sm uppercase tracking-widest mb-2 text-zinc-400'
                  >
                    Tattoo Description *
                  </label>
                  <textarea
                    id='tattoo-description'
                    required
                    rows={4}
                    value={bookingData.tattoo.description}
                    onChange={(e) =>
                      updateTattooDetails("description", e.target.value)
                    }
                    className='w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#ff3333] focus:outline-none transition-colors resize-none rounded'
                    placeholder="Describe your tattoo idea in detail. Include any specific elements, colors, or styles you're looking for..."
                  />
                  <p className='text-zinc-500 text-xs mt-1'>
                    {bookingData.tattoo.description.length} / 10 minimum
                    characters
                  </p>
                </div>

                <div className='bg-zinc-900/50 p-4 border border-zinc-800 rounded'>
                  <p className='text-zinc-400 text-sm'>
                    By clicking "Send via WhatsApp", you'll be redirected to
                    WhatsApp with your booking details pre-filled.
                  </p>
                </div>

                <div className='flex flex-col sm:flex-row gap-3 pt-4'>
                  <button
                    type='button'
                    onClick={goToPrevStep}
                    className='flex-1 border border-zinc-700 hover:border-white py-4 text-lg uppercase tracking-widest font-semibold transition-colors rounded'
                  >
                    Back
                  </button>
                  <button
                    type='submit'
                    disabled={
                      isSubmitting ||
                      !bookingData.tattoo.size ||
                      !bookingData.tattoo.placement ||
                      !bookingData.tattoo.description
                    }
                    className='flex-1 bg-[#ff3333] hover:bg-[#cc0000] disabled:bg-zinc-700 disabled:cursor-not-allowed py-4 text-lg uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2 rounded'
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className='animate-spin w-5 h-5'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'
                          ></circle>
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.35-8.413' />
                        </svg>
                        Send via WhatsApp
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  ) : null;
}

// ============================================
// EXPORT DATA MODELS (for external use)
// ============================================

export { SERVICE_TYPES, ARTISTS, TIME_SLOTS, TATTOO_SIZES, BODY_PLACEMENTS };
