import { ShieldCheck, Clock3, Wrench, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

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

const WhyCH = () => {
  const features = [
    {
      icon: <ShieldCheck size={40} />,
      title: "90-Day Warranty",
      description:
        "Every repair comes with warranty coverage for your peace of mind.",
    },
    {
      icon: <Clock3 size={40} />,
      title: "Same-Day Repairs",
      description:
        "Most repairs are completed the same day so you can get back to work quickly.",
    },
    {
      icon: <Wrench size={40} />,
      title: "Expert Repairs",
      description:
        "From screen replacements to board-level repairs, we handle it professionally.",
    },
    {
      icon: <BadgeCheck size={40} />,
      title: "Honest Diagnosis",
      description:
        "No hidden charges. We tell you exactly what's wrong before any repair begins.",
    },
  ];

  return (
    <section className="bg-[#0B0E14] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 uppercase tracking-[0.3em] text-yellow-400">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Trusted Phone Repair Experts
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            We focus on quality repairs, transparent pricing, and customer
            satisfaction. Your device is handled with care from diagnosis to
            pickup.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/10 bg-[#11151D] p-8"
            >
              <motion.div
                className="mb-5 text-yellow-400"
                whileHover={{
                  rotate: 10,
                  scale: 1.15,
                }}
              >
                {feature.icon}
              </motion.div>

              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>

              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCH;
