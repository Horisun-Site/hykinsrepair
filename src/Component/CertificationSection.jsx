import { motion } from "framer-motion";

const CertificationSection = () => {
  return (
    <section className="bg-[#0B0E14] py-24 text-white overflow-hidden">
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
            Professional Certification
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Certified & Qualified
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-400">
            At HYKINS, we believe professional training and continuous learning
            are essential for delivering quality repair services.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Certificate Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.03,
            }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-[#11151D] p-4"
          >
            <motion.img
              src="https://www.image2url.com/r2/default/images/1783356539028-26fdc65d-2af3-42d4-b4c2-a1dfd714f016.png"
              alt="HYKINS Professional Certification"
              className="w-full rounded-2xl"
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.4,
              }}
            />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-400"
            >
              Verified Certification
            </motion.span>

            <h3 className="mt-6 text-3xl font-bold">
              Professional Training &
              <span className="block text-yellow-400">
                Industry Knowledge
              </span>
            </h3>

            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              This certification reflects HYKINS' dedication to professional
              development and technical excellence in mobile device repair.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              From diagnostics and hardware repairs to advanced troubleshooting,
              we apply industry-standard techniques to ensure every device
              receives the highest level of care.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Certified Mobile Repair Knowledge",
                "Professional Diagnostic Skills",
                "Commitment to Industry Standards",
                "Customer-Focused Service Delivery",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  className="flex items-center gap-3"
                >
                  <span className="text-yellow-400">✓</span>
                  <p className="text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>

            {/* Bottom Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.6,
                duration: 0.7,
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="mt-8 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5"
            >
              <p className="font-semibold text-yellow-400">
                ✓ Officially Certified
              </p>

              <p className="mt-2 text-gray-300">
                HYKINS has completed professional training and certification in
                mobile device diagnostics, repair procedures, and technical
                troubleshooting.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CertificationSection;