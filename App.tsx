
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Certificates from './components/Certificates';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed selection:bg-teal-300 selection:text-teal-900">
      <Header />
      <main>
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <Hero />
              <Contact />
            </div>
            <div className="pt-24 lg:w-1/2 lg:py-24">
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Education />
              <Certificates />
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
