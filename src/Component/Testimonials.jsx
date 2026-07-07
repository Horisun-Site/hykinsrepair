import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Samuel O.",
      review:
        "Excellent service. My iPhone screen was replaced the same day and it looks brand new.",
    },
    {
      name: "Chidinma A.",
      review:
        "Very professional and honest. They diagnosed the problem correctly and fixed it quickly.",
    },
    {
      name: "Emmanuel K.",
      review:
        "My phone stopped charging completely. HYKINS fixed it within a few hours. Highly recommended.",
    },
  ];

  return (
    <section className="bg-[#0B0E14] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 uppercase tracking-[0.3em] text-yellow-400">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Customer satisfaction is at the heart of everything we do.
          </p>
        </motion.div>

        {/* Reviews */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/10 bg-[#11151D] p-8 hover:border-yellow-400/40 hover:shadow-[0_0_25px_rgba(250,204,21,0.15)]"
            >
              {/* Stars */}
              <motion.div
                className="mb-4 flex gap-1 text-yellow-400"
                whileHover={{
                  scale: 1.1,
                }}
              >
                ★★★★★
              </motion.div>

              <p className="mb-6 text-gray-300 leading-relaxed">
                "{review.review}"
              </p>

              <div>
                <h4 className="font-semibold text-white">{review.name}</h4>
                <p className="text-sm text-gray-500">Verified Customer</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          className="mt-16 grid gap-6 text-center md:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div>
            <h3 className="text-4xl font-bold text-yellow-400">
              <AnimatedCounter end={500} suffix="+" />
            </h3>
            <p className="mt-2 text-gray-400">Devices Repaired</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">
              <AnimatedCounter end={98} suffix="%" />
            </h3>
            <p className="mt-2 text-gray-400">Customer Satisfaction</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">
              <AnimatedCounter end={6} suffix="+" />
            </h3>
            <p className="mt-2 text-gray-400">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
