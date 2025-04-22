import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    title: "Better Than I Ever Expected",
    quote: `"The coaching process was unreal — even better than I expected. The small gains every week were so motivating, and I kept seeing results from the start. The food plan and gym program were savage — every week was pure progress.\n\nEven when I was struggling with form in the gym, you came in, did a session with me, and showed me exactly what to do. Now, even though our time got cut short, I feel way more confident moving forward. I know hard work will pay off."`,
    image: "/assets/testLogo1 copy.png"
  },
  {
    title: "A Mindset Shift and Visible Results",
    quote: `"The coaching completely changed my mindset and lifestyle when it came to the gym and nutrition.\n\nYour attitude made the process encouraging — you pushed me just enough without overwhelming me.\n\nIt's like night and day — I feel so much more confident in myself and my ability. Even other people have noticed and commented on the change."`,
    image: "/assets/testLogo2 copy.png"
  },
  {
    title: "Confidence, Knowledge & Real Physical Changes",
    quote: `"I'm 200% more confident now. I no longer worry about what people think of me like I used to.\n\nI felt better waking up every morning — energized and healthy.\n\nThe most valuable thing I gained was belief in myself. I now know I can do it. Confidence and determination.\n\nA surprising benefit? Becoming vascular — didn't think I'd look like this at all!"`,
    image: "/assets/testLogo3 copy.png"
  },
  {
    title: "Supportive, Educational, and Life-Changing",
    quote: `"I came to you with injuries and a goal to lose weight. I just wanted to get back to the gym consistently — and I saw results.\n\nYou were always communicating and motivating me, which made the process 10 times better.\n\nLearning proper form, rest time, and focusing on quality over just lifting heavy changed everything. Once I saw results, I didn't want to stop."`,
    image: "/assets/testlogo4 copy.png"
  }
];

const transformations = [
  {
    image: "/assets/tobi_trans3.jpg",
    timeframe: "10 Weeks",
    stats: "Body Recomposition"
  },
  {
    image: "/assets/tobi_trans4.jpg",
    timeframe: "16 Weeks",
    stats: "Body Recomposition"
  },
  {
    image: "/assets/tobi_trans5.jpg",
    timeframe: "12 Weeks",
    stats: "Body Recomposition"
  },
  {
    image: "/assets/tobi_trans6.jpg",
    timeframe: "16 Weeks",
    stats: "Total Transformation"
  },
  {
    image: "/assets/tobi_trans7.jpg",
    timeframe: "12 Weeks",
    stats: "Strength Gain"
  },
  {
    image: "/assets/443277119_1168187067939999_9115024281343153145_n.jpg",
    timeframe: "12 Weeks",
    stats: "For my competition- competed in 2 shows and won the untested show as a natural"
  },
  {
    image: "/assets/461368623_4006097686290056_6789941221847517080_n.jpg",
    timeframe: "8 Weeks",
    stats: "Fat Loss"
  },
  {
    image: "/assets/464461868_17850634578319666_4637362750324412725_n.jpg",
    timeframe: "16 Weeks",
    stats: "Fat Loss"
  }
];

const Results = () => {
  const openChatbot = () => {
    if (window.voiceflow?.chat?.open) {
      window.voiceflow.chat.open();
    }
  };

  return (
    <section id="results" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Real Results, Real Stories</h2>
          <p className="text-xl text-gray-400">See what's possible with dedication and expert guidance</p>
        </div>

        {/* Transformations */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
          {transformations.map((transformation, index) => (
            <div key={index} className="relative group bg-zinc-900 rounded-2xl p-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] w-full relative overflow-hidden rounded-lg bg-zinc-900">
                  <img 
                    src={transformation.image} 
                    alt={`Client Transformation - ${transformation.stats}`}
                    className="w-full h-full object-cover"
                    loading={index < 4 ? "eager" : "lazy"}
                    width={300}
                    height={375}
                    decoding="async"
                    fetchPriority={index < 2 ? "high" : "auto"}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      console.error(`Failed to load image: ${target.src}`);
                      // Fallback image could be added here if needed
                    }}
                  />
                </div>
                <div className="flex justify-between items-center px-2">
                  <span className="text-white">{transformation.timeframe}</span>
                  <span className="text-gold font-semibold">{transformation.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800/80 transition-colors">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  ⭐ {testimonial.title}
                </h3>
                
                <div className="flex justify-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>

                <div className="text-gray-300 space-y-4">
                  {testimonial.quote.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="italic">{paragraph}</p>
                  ))}
                </div>

                <div className="flex justify-center">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-gold">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.title} Profile`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={64}
                      height={64}
                      decoding="async"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        console.error(`Failed to load image: ${target.src}`);
                        // Fallback image could be added here if needed
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={openChatbot}
            className="inline-flex items-center px-8 py-4 bg-gold text-black font-semibold rounded-full hover:bg-gold/90 transition-colors"
          >
            Start Your Transformation Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Results;