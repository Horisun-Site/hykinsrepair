import { motion } from "framer-motion";

const WhatsAppCTA = () => {
  return (
    <section className="bg-[#0B0E14] py-24 text-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border border-green-500/20 bg-gradient-to-r from-[#11151D] to-[#171B24] p-10 text-center md:p-16"
        >

          {/* Floating Glow */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-3xl bg-green-500/10 blur-3xl"
          />

          <div className="relative z-10">

            <motion.p
              className="mb-4 uppercase tracking-[0.3em] text-green-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Need Immediate Assistance?
            </motion.p>

            <motion.h2
              className="text-4xl font-bold md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Chat With HYKINS
              <span className="block text-green-400">
                On WhatsApp
              </span>
            </motion.h2>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Need a quick answer? Contact us directly on WhatsApp and
              speak with a technician about your device.
            </motion.p>

            <motion.a
              href="https://wa.me/2348090648666?text=Hello%20HYKINS,%20I%20need%20assistance%20with%20my%20device."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-full bg-green-500 px-8 py-4 font-semibold text-white shadow-lg"
              whileHover={{
                scale: 1.08,
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Chat on WhatsApp
            </motion.a>

            <motion.p
              className="mt-6 text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Available Monday - Saturday | 9:00 AM - 7:00 PM
            </motion.p>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhatsAppCTA;