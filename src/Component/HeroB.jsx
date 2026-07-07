import React from "react";
import { motion } from "framer-motion";

const HeroB = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0E14] text-white">
      {/* Animated Background Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles */}
      <motion.div
        className="absolute left-20 top-32 h-3 w-3 rounded-full bg-yellow-400"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute right-20 top-40 h-4 w-4 rounded-full bg-yellow-400/60"
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-32 left-1/4 h-2 w-2 rounded-full bg-yellow-400/70"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <div className="mx-auto flex min-h-[75vh] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
        {/* Main Content Float */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Tag */}
          <motion.p
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mb-4 uppercase tracking-[0.3em] text-yellow-400"
          >
            Book a Repair
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="max-w-4xl text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
          >
            Get Your Device
            <motion.span
              className="block text-yellow-400"
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
            >
              Fixed Professionally
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="mt-6 max-w-2xl text-lg text-gray-300"
          >
            Tell us about your device and the issue you're experiencing.
            We'll review your request and guide you through the repair
            process.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            {[
              "Certified Repairs",
              "Fast Turnaround",
              "Honest Diagnosis",
            ].map((item, index) => (
              <motion.span
                key={index}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                }}
                className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-400"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
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
              className="rounded-full border border-white/20 px-8 py-4 font-semibold hover:border-yellow-400 hover:text-yellow-400"
            >
              WhatsApp Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroB;