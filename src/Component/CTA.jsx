import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="bg-[#0B0E14] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="overflow-hidden rounded-3xl border border-yellow-400/20 bg-gradient-to-r from-[#11151D] to-[#171B24] p-10 md:p-16"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <motion.p
              className="mb-4 uppercase tracking-[0.3em] text-yellow-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready To Get Started?
            </motion.p>

            <motion.h2
              className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Need Your Phone Fixed?
            </motion.h2>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Whether it's a cracked screen, battery issue, charging problem,
              water damage, or software fault, HYKINS is ready to help.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
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
                className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-yellow-400 hover:text-yellow-400"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp Us
              </motion.a>
            </motion.div>
          </div>

          {/* Floating Glow */}
          <motion.div
            className="absolute"
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;