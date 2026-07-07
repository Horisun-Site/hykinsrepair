import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long do repairs usually take?",
      answer:
        "Most repairs are completed the same day, depending on the device and the nature of the fault.",
    },
    {
      question: "Do you offer warranty on repairs?",
      answer:
        "Yes. We provide warranty coverage on eligible repairs for your peace of mind.",
    },
    {
      question: "Can I get a diagnosis before repair?",
      answer:
        "Absolutely. We inspect your device and explain the issue before any repair work begins.",
    },
    {
      question: "Do you repair water-damaged phones?",
      answer:
        "Yes. We offer professional water damage diagnostics and repair services.",
    },
    {
      question: "What devices do you repair?",
      answer:
        "We repair Apple, Samsung, Tecno, Infinix, Xiaomi, Oppo, Huawei, and many other smartphone brands.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#0B0E14] py-24 text-white">
      <div className="mx-auto max-w-4xl px-6">

        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 uppercase tracking-[0.3em] text-yellow-400">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Got Questions?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Here are answers to some of the most common questions we receive.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.01,
              }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#11151D]"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium">
                  {faq.question}
                </span>

                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/10 px-6 py-5 text-gray-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;