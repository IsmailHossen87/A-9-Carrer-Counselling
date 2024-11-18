import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Inspirational = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const quotes = [
    {
      text: "Your career is a journey, not a destination. Let's walk it together.",
      author: "Career Counselor",
      animation: "fade-down", 
    },
    {
      text: "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer",
      animation: "fade-up",
    },
    {
      text: "The future depends on what you do today. Let's shape it together.",
      author: "Career Coach",
      animation: "fade-down", 
    },
    {
      text: "Dream big. Start small. Act now.",
      author: "Career Mentor",
      animation: "fade-up",
    },
    {
      text: "Your career is a reflection of your choices. Choose wisely.",
      author: "Career Advisor",
      animation: "fade-down", 
    },
    {
        text: "Dream big. Start small. Act now.",
        author: "Career Mentor",
        animation: "fade-up",
      },
  ];

  return (
    <div className="my-10">
      <h2 className="text-3xl text-center font-bold mb-8">
        Inspirational Quotes for Your Career Journey
      </h2>
      <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4">
        {quotes.map((quote, index) => (
          <div
            key={index}
            data-aos={quote.animation} 
            className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <p className="text-white text-lg font-semibold mb-4">"{quote.text}"</p>
            <p className="text-white text-sm text-up italic">- {quote.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inspirational;
