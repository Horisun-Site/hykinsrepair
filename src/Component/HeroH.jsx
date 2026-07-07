import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroH = () => {
  return (
    <section className="bg-[#0B0E14] text-white">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 lg:flex-row">
        {/* Left Content */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <p className="mb-4 uppercase tracking-[0.3em] text-yellow-400">
            Mobile Phone Repairs • Mushin, Lagos
          </p>

          <motion.h1
            className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            Your Phone,
            <span className="block text-yellow-400">Fixed Properly.</span>
          </motion.h1>

          <motion.p
            className="mb-8 max-w-xl text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          >
            Screen replacements, battery repairs, charging port fixes, software
            solutions and board-level repairs by experienced technicians.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="mb-10 flex flex-wrap gap-6 text-sm text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
          >
            <span>✓ Same-Day Repairs</span>
            <span>✓ Free Diagnosis</span>
            <span>✓ 90-Day Warranty</span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
          >
            <Link
              to="/book-repair"
              className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Book a Repair
            </Link>

            <Link
              to="/about"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-yellow-400 hover:text-yellow-400"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-yellow-400/20 blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.img
            src="https://www.image2url.com/r2/default/images/1783352080327-ff26b1c7-1c75-4e0c-961c-31f2798ff96c.jpeg"
            alt="HYKINS Mobile Phone Repairs"
            className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white p-4 shadow-2xl"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 1.5, 0, -1.5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroH;
