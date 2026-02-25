/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Features from './components/Features';
import Gallery from './components/Gallery';
import FAQs from './components/FAQs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-900 selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Features />
        <Gallery />
        <FAQs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
