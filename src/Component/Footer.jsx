import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const HeroB = () => {
  return (
    <section className="overflow-hidden bg-[#0B0E14] text-white">
      <motion.div
        className="relative mx-auto flex min-h-[75vh] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl"
          />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.p
            variants={itemVariants}
            className="mb-4 uppercase tracking-[0.3em] text-yellow-400"
          >
            Book a Repair
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="max-w-4xl text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
          >
            Get Your Device
            <motion.span
              className="block text-yellow-400"
              animate={{
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Fixed Professionally
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
          >
            Tell us about your device and the issue you're experiencing. We'll
            review your request and guide you through the repair process.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <motion.span
              whileHover={{
                scale: 1.08,
                y: -3,
              }}
              className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-400"
            >
              Certified Repairs
            </motion.span>

            <motion.span
              whileHover={{
                scale: 1.08,
                y: -3,
              }}
              className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-400"
            >
              Fast Turnaround
            </motion.span>

            <motion.span
              whileHover={{
                scale: 1.08,
                y: -3,
              }}
              className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-400"
            >
              Honest Diagnosis
            </motion.span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <motion.a
              href="#repair-form"
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black shadow-lg"
            >
              Start Repair Request
            </motion.a>

            <motion.a
              href="https://wa.me/2348090648666?text=Hello%20HYKINS,%20I%20need%20help%20with%20my%20device."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-yellow-400 hover:text-yellow-400"
            >
              WhatsApp Us
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroB;
