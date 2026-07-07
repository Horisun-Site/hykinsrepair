import {
  Smartphone,
  Battery,
  PlugZap,
  Droplets,
  Cpu,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Services = () => {
  const services = [
    {
      icon: <Smartphone size={36} />,
      title: "Screen Replacement",
      description:
        "Cracked or damaged screens replaced with quality parts and precision.",
    },
    {
      icon: <Battery size={36} />,
      title: "Battery Replacement",
      description:
        "Restore battery life and performance with reliable replacements.",
    },
    {
      icon: <PlugZap size={36} />,
      title: "Charging Port Repair",
      description: "Fix charging issues, loose ports, and connection problems.",
    },
    {
      icon: <Droplets size={36} />,
      title: "Water Damage Recovery",
      description:
        "Professional cleaning and recovery for water-damaged devices.",
    },
    {
      icon: <Cpu size={36} />,
      title: "Board-Level Repairs",
      description:
        "Advanced diagnostics and motherboard repairs for complex faults.",
    },
    {
      icon: <Settings size={36} />,
      title: "Software Solutions",
      description:
        "System troubleshooting, updates, unlocking, and software repairs.",
    },
  ];

  return (
    <section className="bg-[#0B0E14] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 uppercase tracking-[0.3em] text-yellow-400">
            Our Services
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">What We Repair</h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            From cracked screens to motherboard repairs, HYKINS provides
            professional repair services to keep your devices working perfectly.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
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
                  rotate: 10,
                  scale: 1.2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
              >
                {service.icon}
              </motion.div>

              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>

              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
