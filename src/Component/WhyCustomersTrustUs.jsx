import {
  Award,
  ShieldCheck,
  Wrench,
  Users,
} from "lucide-react";
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

const WhyCustomersTrustUs = () => {
  const trustPoints = [
    {
      icon: <Award size={40} />,
      title: "Certified Expertise",
      description:
        "HYKINS is backed by professional training and certification, ensuring every repair meets industry standards.",
    },
    {
      icon: <Wrench size={40} />,
      title: "Advanced Repair Skills",
      description:
        "From simple screen replacements to complex board-level repairs, we have the knowledge and experience to get the job done right.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Honest & Transparent Service",
      description:
        "We provide accurate diagnoses, clear explanations, and fair pricing before any repair work begins.",
    },
    {
      icon: <Users size={40} />,
      title: "Customer-Focused Approach",
      description:
        "Every customer is treated with professionalism, respect, and a commitment to delivering quality results.",
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
            Why Trust HYKINS
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Trusted by Customers,
            <span className="block text-yellow-400">
              Driven by Quality
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-400">
            We combine professional expertise, transparency, and a
            customer-first mindset to deliver repair services you can
            depend on.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {trustPoints.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group rounded-3xl border border-white/10 bg-[#11151D] p-8 hover:border-yellow-400/40 hover:shadow-[0_0_25px_rgba(250,204,21,0.15)]"
            >
              <motion.div
                className="mb-5 text-yellow-400"
                whileHover={{
                  rotate: 5,
                  scale: 1.15,
                }}
              >
                {item.icon}
              </motion.div>

              <h3 className="mb-3 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Banner */}
        <motion.div
          className="mt-16 rounded-3xl border border-yellow-400/20 bg-[#11151D] p-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-3 text-2xl font-bold">
            Your Device Is In Safe Hands
          </h3>

          <p className="mx-auto max-w-3xl text-gray-400">
            Whether it's a cracked screen, charging issue, water damage,
            or advanced motherboard fault, HYKINS is committed to
            delivering reliable repairs with attention to detail and
            customer satisfaction.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyCustomersTrustUs;