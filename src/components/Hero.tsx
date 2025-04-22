import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const openChatbot = () => {
    if (window.voiceflow?.chat?.open) {
      window.voiceflow.chat.open();
    }
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          preload="auto"
        >
          <source 
            src="https://player.vimeo.com/external/517909831.hd.mp4?s=1d0e833363992d96f8699c3e363fe5fb76794877&profile_id=175" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          TRAIN WITH
          <span className="block text-gold">PURPOSE</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Build the body and life you deserve with elite personal training
        </p>
        <button
          onClick={openChatbot}
          className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-gold text-black hover:bg-gold/90 transition-colors rounded-full"
        >
          Book Your Transformation Call
          <ArrowRight className="ml-2" size={20} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 rounded-full bg-gold/50" />
      </div>
    </div>
  );
};

export default Hero;