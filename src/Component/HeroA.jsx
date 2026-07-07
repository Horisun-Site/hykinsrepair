import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroA = () => {
  return (
    <section className="bg-[#0B0E14] text-white">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 lg:flex-row">
        {/* Left Content */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <p className="mb-4 uppercase tracking-[0.3em] text-yellow-400">
            About HYKINS
          </p>

          <motion.h1
            className="mb-6 text-5xl font-bold leading-tight md:text-6xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional Mobile
            <span className="block text-yellow-400">Phone Repair Experts</span>
          </motion.h1>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-300">
            HYKINS specializes in professional smartphone diagnostics, repairs,
            and advanced board-level solutions. We are committed to delivering
            reliable, honest, and high-quality repair services that keep your
            devices performing at their best.
          </p>

          <div className="mb-10 flex flex-wrap gap-4">
            <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-400">
              Certified Technician
            </span>

            <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-400">
              Quality Repairs
            </span>

            <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-400">
              Customer Focused
            </span>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/book-repair"
              className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Book a Repair
            </Link>

            <a
              href="https://wa.me/2348090648666"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-yellow-400 hover:text-yellow-400"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-3xl"></div>

          <div className="relative rounded-3xl border border-white/10 bg-[#11151D] p-8 shadow-2xl">
            <motion.img
              src="https://www.image2url.com/r2/default/images/1783352080327-ff26b1c7-1c75-4e0c-961c-31f2798ff96c.jpeg"
              alt="HYKINS"
              className="mx-auto h-64 w-auto rounded-xl bg-white p-3 object-contain"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroA;
