import React, { useState } from 'react';
import { Dumbbell, Globe2, Users2, Utensils, Brain, ChevronDown, ChevronUp } from 'lucide-react';

const coachingPackages = [
  {
    icon: <Globe2 className="w-8 h-8" />,
    title: "Ireland Coaching",
    description: "Comprehensive coaching package including personalized training & nutrition, weekly video check-ins, unlimited WhatsApp support, and access to private community.",
    price: "€300/month"
  },
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "International Coaching",
    description: "Premium coaching for international clients with all standard features plus early access to new coaching resources & digital products.",
    price: "€350/month"
  }
];

const specializedServices = [
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Fat Loss Program",
    description: "Structured approach to sustainable fat loss with personalized nutrition and training protocols.",
    details: "Our specialized fat loss program includes:\n• Customized nutrition plan based on your metabolism\n• Progressive training protocols\n• Weekly adjustments based on progress\n• Body composition tracking\n• Supplement recommendations (if needed)\n• Lifestyle and habit optimization"
  },
  {
    icon: <Users2 className="w-8 h-8" />,
    title: "Body Recomposition",
    description: "Specialized program focusing on simultaneous fat loss and muscle gain with expert form analysis.",
    details: "The body recomposition program features:\n• Precise calorie and macro calculations\n• Periodized strength training\n• Recovery optimization strategies\n• Progress photos and measurements\n• Body fat percentage tracking\n• Performance metrics monitoring"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Form Analysis",
    description: "Expert movement assessment and correction for optimal training efficiency and injury prevention.",
    details: "Our comprehensive form analysis includes:\n• Video movement assessment\n• Exercise technique correction\n• Mobility screening\n• Injury prevention strategies\n• Progressive form development\n• Custom exercise modifications"
  }
];

const ServiceCard = ({ service, isCoaching = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-black p-8 rounded-2xl border border-gold/20 hover:border-gold/40 transition-all duration-300">
      <div className="text-gold mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
      <p className="text-gray-400 mb-4">{service.description}</p>
      
      {isCoaching ? (
        <>
          <p className="text-gold font-semibold">{service.price}</p>
          <p className="text-sm text-gray-400 mt-2">
            Flexible payment options available weekly or bi-weekly
          </p>
        </>
      ) : (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
        >
          Learn More {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      )}

      {!isCoaching && isExpanded && (
        <div className="mt-4 pt-4 border-t border-gold/20">
          {service.details.split('\n').map((detail, index) => (
            <p key={index} className="text-gray-400 mb-2">{detail}</p>
          ))}
        </div>
      )}
    </div>
  );
};

const Services = () => {
  const openChatbot = () => {
    if (window.voiceflow?.chat?.open) {
      window.voiceflow.chat.open();
    }
  };

  return (
    <section id="services" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Elite Training Solutions</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose your path to transformation with our premium coaching services
          </p>
        </div>

        {/* Coaching Packages - 2 columns */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Coaching Packages</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {coachingPackages.map((service, index) => (
              <ServiceCard key={index} service={service} isCoaching={true} />
            ))}
          </div>
        </div>

        {/* Specialized Services - 3 columns */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Specialized Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={openChatbot}
            className="inline-block px-8 py-4 bg-gold text-black font-semibold rounded-full hover:bg-gold/90 transition-colors"
          >
            Book Your Free Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;