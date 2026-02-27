import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset step when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleDateChange = (name: string, date: Date | null) => {
    // Store as YYYY-MM-DD string to avoid timezone offset issues
    let value = '';
    if (date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      value = `${year}-${month}-${day}`;
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.checkIn) {
      newErrors.checkIn = 'Check-in date is required';
    } else {
      const checkInDate = new Date(formData.checkIn);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (checkInDate < today) {
        newErrors.checkIn = 'Check-in date cannot be in the past';
      }
    }
    
    if (!formData.checkOut) {
      newErrors.checkOut = 'Check-out date is required';
    } else if (formData.checkIn) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      if (checkOutDate <= checkInDate) {
        newErrors.checkOut = 'Check-out date must be after check-in date';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStep(2);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const handleConfirm = () => {
    const text = `Hi, I would like to book a stay.
Name: ${formData.name}
Gender: ${formData.gender}
Email: ${formData.email}
Phone: ${formData.phone}
Check-in: ${formatDate(formData.checkIn)}
Check-out: ${formatDate(formData.checkOut)}
Guests: ${formData.guests}
Message: ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/64226919410?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="flex items-center justify-between p-6 border-b border-brand-100">
              <div className="flex items-center gap-3">
                {step === 2 && (
                  <button
                    onClick={() => setStep(1)}
                    className="text-brand-500 hover:text-brand-900 transition-colors p-1 rounded-full hover:bg-brand-50"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                )}
                <h2 className="text-2xl font-serif text-brand-900">
                  {step === 1 ? 'Book Your Stay' : 'Confirm Details'}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="text-brand-500 hover:text-brand-900 transition-colors p-2 rounded-full hover:bg-brand-50"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              {step === 1 ? (
                <form onSubmit={handleNext} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all ${errors.name ? 'border-red-500' : 'border-brand-200'}`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-brand-700 mb-1">Gender *</label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white ${errors.gender ? 'border-red-500' : 'border-brand-200'}`}
                      >
                        <option value="" disabled>Select gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                      </select>
                      {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-700 mb-1">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-brand-200'}`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brand-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-brand-200'}`}
                        placeholder="+64 123 456 789"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="checkIn" className="block text-sm font-medium text-brand-700 mb-1">Check-in Date *</label>
                      <DatePicker
                        id="checkIn"
                        selected={formData.checkIn ? new Date(formData.checkIn + 'T00:00:00') : null}
                        onChange={(date) => handleDateChange('checkIn', date)}
                        selectsStart
                        startDate={formData.checkIn ? new Date(formData.checkIn + 'T00:00:00') : undefined}
                        endDate={formData.checkOut ? new Date(formData.checkOut + 'T00:00:00') : undefined}
                        minDate={new Date()}
                        dateFormat="dd MMM yyyy"
                        placeholderText="Select check-in date"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all ${errors.checkIn ? 'border-red-500' : 'border-brand-200'}`}
                        wrapperClassName="w-full"
                      />
                      {errors.checkIn && <p className="text-red-500 text-xs mt-1">{errors.checkIn}</p>}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="checkOut" className="block text-sm font-medium text-brand-700 mb-1">Check-out Date *</label>
                      <DatePicker
                        id="checkOut"
                        selected={formData.checkOut ? new Date(formData.checkOut + 'T00:00:00') : null}
                        onChange={(date) => handleDateChange('checkOut', date)}
                        selectsEnd
                        startDate={formData.checkIn ? new Date(formData.checkIn + 'T00:00:00') : undefined}
                        endDate={formData.checkOut ? new Date(formData.checkOut + 'T00:00:00') : undefined}
                        minDate={formData.checkIn ? new Date(formData.checkIn + 'T00:00:00') : new Date()}
                        dateFormat="dd MMM yyyy"
                        placeholderText="Select check-out date"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all ${errors.checkOut ? 'border-red-500' : 'border-brand-200'}`}
                        wrapperClassName="w-full"
                      />
                      {errors.checkOut && <p className="text-red-500 text-xs mt-1">{errors.checkOut}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-brand-700 mb-1">Number of Guests *</label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-brand-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-700 mb-1">Special Requests / Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-brand-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none"
                      placeholder="Any special requests or questions?"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-brand-800 text-white py-3 px-4 rounded-lg font-semibold uppercase tracking-wider hover:bg-brand-900 transition-colors shadow-md"
                    >
                      Review Booking
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="bg-brand-50 rounded-xl p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4 border-b border-brand-200 pb-4">
                      <div>
                        <p className="text-sm text-brand-500 uppercase tracking-wider mb-1">Check-in</p>
                        <p className="font-medium text-brand-900">{formatDate(formData.checkIn)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-brand-500 uppercase tracking-wider mb-1">Check-out</p>
                        <p className="font-medium text-brand-900">{formatDate(formData.checkOut)}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-brand-500 uppercase tracking-wider mb-1">Guest Details</p>
                        <p className="font-medium text-brand-900">{formData.name} ({formData.gender})</p>
                        <p className="text-brand-700">{formData.email}</p>
                        <p className="text-brand-700">{formData.phone}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-brand-500 uppercase tracking-wider mb-1">Number of Guests</p>
                        <p className="font-medium text-brand-900">{formData.guests} {formData.guests === '1' ? 'Guest' : 'Guests'}</p>
                      </div>

                      {formData.message && (
                        <div>
                          <p className="text-sm text-brand-500 uppercase tracking-wider mb-1">Special Requests</p>
                          <p className="text-brand-700 italic">"{formData.message}"</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleConfirm}
                      className="w-full bg-[#25D366] text-white py-3 px-4 rounded-lg font-semibold uppercase tracking-wider hover:bg-[#128C7E] transition-colors shadow-md flex items-center justify-center gap-2"
                    >
                      Confirm & Send via WhatsApp
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
