import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqItems = [
    {
      question: "Do you have all your team in-house?",
      answer:
        "Yes, we have a fully in-house team of experienced developers, designers, and project managers working together to deliver high-quality solutions.",
    },
    {
      question: "How can I get a quote for my project?",
      answer:
        "You can contact us through our website form, email, or phone. We'll schedule a free consultation to understand your requirements and provide a detailed quote.",
    },
    {
      question: "How can I control the project?",
      answer:
        "We provide regular updates, progress reports, and use project management tools where you can track milestones, provide feedback, and communicate with the team in real-time.",
    },
    {
      question: "Who can recommend your software agency?",
      answer:
        "We have numerous satisfied clients across various industries. You can check our case studies and client testimonials on our website, or we can provide references upon request.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container1 px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      <h2 className="font-normal leading-[87%] text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[78px] mb-6 sm:mb-8 lg:mb-12">
        Faq
      </h2>
      <div className="grid gap-3 sm:gap-4 w-full md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto">
        {faqItems.map((item, index) => (
          <div key={index} className="group">
            <div
              className="flex items-center justify-between cursor-pointer border-solid border-[1px] border-[#555b60] p-3 sm:p-4 rounded-[50px] sm:rounded-[70px] lg:rounded-[100px] hover:bg-[#1a2833] transition-all duration-300"
              onClick={() => toggleFaq(index)}
            >
              <p className="font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] text-white leading-[87%] pr-2 sm:pr-4">
                {item.question}
              </p>
              <svg
                className={`transition-transform duration-500 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 ${
                  openIndex === index ? "rotate-[180deg]" : ""
                }`}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8881 21.8425L27.6569 7.8309C28.1144 7.37111 28.1144 6.62543 27.6569 6.16564C27.1995 5.70585 26.4573 5.70585 25.9998 6.16564L14 19.3324L2.00019 6.16681C1.54273 5.70702 0.800512 5.70702 0.343092 6.16681C-0.114328 6.6266 -0.114328 7.37228 0.343092 7.83203L13.1119 21.8437C13.3558 22.0887 13.6791 22.1938 13.9988 22.1774C14.3197 22.1927 14.643 22.0876 14.8881 21.8425Z"
                  fill="#0089BD"
                />
              </svg>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 sm:p-6 bg-[#1a2833] border border-[#555b60] border-t-0 rounded-b-2xl sm:rounded-b-3xl">
                <p className="font-light text-sm sm:text-base md:text-lg text-white leading-[150%] text-opacity-80">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
