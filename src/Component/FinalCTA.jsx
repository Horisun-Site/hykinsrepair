import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="overflow-hidden bg-[#0B0E14] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          whileHover={{
            scale: 1.01,
          }}
          className="relative overflow-hidden rounded-3xl border border-yellow-400/20 bg-gradient-to-r from-[#11151D] to-[#171B24] p-10 text-center md:p-16"
        >
          {/* Glow Effect */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-3xl"
          />

          <div className="relative z-10">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-4 uppercase tracking-[0.3em] text-yellow-400"
            >
              Ready To Get Started?
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="mx-auto max-w-4xl text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              Let's Bring Your Device
              <span className="block text-yellow-400">
                Back To Life
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
            >
              Whether you need a screen replacement, charging port repair,
              battery replacement, or advanced diagnostics, HYKINS is here
              to help.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.7,
                duration: 0.8,
              }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <Link
                  to="/book-repair"
                  className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black"
                >
                  Book a Repair
                </Link>
              </motion.div>

              <motion.a
                href="https://wa.me/2348090648666?text=Hello%20HYKINS,%20I%20would%20like%20to%20book%20a%20repair."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-yellow-400 hover:text-yellow-400"
              >
                WhatsApp Us
              </motion.a>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTA;