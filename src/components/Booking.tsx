import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Booking = () => {
  const openChatbot = () => {
    if (window.voiceflow?.chat?.open) {
      window.voiceflow.chat.open();
    }
  };

  return (
    <section id="booking" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform
              <span className="text-gold block">Your Life?</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Book your free strategy call to discuss your goals and see how our elite coaching can help you achieve the results you deserve.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <Calendar className="text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Flexible Scheduling</h3>
                  <p className="text-gray-400">Book a time that works for you</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <Clock className="text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">30-Minute Call</h3>
                  <p className="text-gray-400">Discuss your goals and create a plan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black p-8 rounded-2xl border border-gold/20">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-white">Start Your Transformation Today</h3>
              <p className="text-gray-400">
                Take the first step towards achieving your fitness goals. Our team is ready to create a personalized plan that works for you.
              </p>
              <button
                onClick={openChatbot}
                className="inline-flex items-center px-8 py-4 bg-gold text-black font-semibold rounded-full hover:bg-gold/90 transition-colors group"
              >
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-gray-500">
                Limited spots available. Book your call now to secure your place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;