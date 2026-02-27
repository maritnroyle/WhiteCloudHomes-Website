/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Features from './components/Features';
import Gallery from './components/Gallery';
import FAQs from './components/FAQs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-brand-900 selection:bg-brand-200 selection:text-brand-900">
      <Navbar onBookNow={openBookingModal} />
      <main>
        <Hero onBookNow={openBookingModal} />
        <Welcome />
        <Features />
        <Gallery onBookNow={openBookingModal} />
        <FAQs />
        <Testimonials />
      </main>
      <Footer onBookNow={openBookingModal} />
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
    </div>
  );
}
