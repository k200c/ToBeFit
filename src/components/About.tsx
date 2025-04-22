import React from 'react';
import { Award, Target, Users } from 'lucide-react';

const About = () => {
  const openChatbot = () => {
    if (window.voiceflow?.chat?.open) {
      window.voiceflow.chat.open();
    }
  };

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full max-w-sm mx-auto md:max-w-md">
            <div className="aspect-[3/4] w-full relative overflow-hidden rounded-lg bg-zinc-900">
              <img
                src="/assets/460416834_548507277531908_4590971715518903456_n.jpg"
                alt="Tobi Sanni Competition"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                width={400}
                height={533}
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold text-black p-4 rounded-lg">
              <p className="font-bold text-4xl">8+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6">
              Transform Your Life Through
              <span className="text-gold block">Elite Training</span>
            </h2>
            
            <p className="text-gray-300">
              With over 8 years dedicated to mastering fitness and helping others transform their lives, I've established myself as Ireland's leading expert in form analysis and natural bodybuilding. I've helped 70+ clients achieve their dream physique while building sustainable habits.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Award className="text-gold flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold">Certified Professional</h3>
                  <p className="text-gray-300">Image Fitness Training Certified: Level 3 Fitness Instruction, Group Instruction, and Level 4 Personal Training</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Target className="text-gold flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold">Competition Winner</h3>
                  <p className="text-gray-300">Natural bodybuilding champion with multiple first-place victories</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="text-gold flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold">Natural Approach</h3>
                  <p className="text-gray-300">Specializing in natural training methods for sustainable, long-term results</p>
                </div>
              </div>
            </div>

            <button
              onClick={openChatbot}
              className="inline-block px-8 py-4 bg-gold text-black font-semibold rounded-full hover:bg-gold/90 transition-colors mt-6"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;