import { Search, ClipboardCheck, Wrench, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <ClipboardCheck size={38} />,
      title: "Book a Repair",
      description:
        "Fill out the repair form or contact us directly on WhatsApp.",
    },
    {
      number: "02",
      icon: <Search size={38} />,
      title: "Device Diagnosis",
      description:
        "We inspect your device and identify the exact issue before repairs begin.",
    },
    {
      number: "03",
      icon: <Wrench size={38} />,
      title: "Professional Repair",
      description:
        "Our technicians carry out the repair using quality tools and parts.",
    },
    {
      number: "04",
      icon: <CheckCircle size={38} />,
      title: "Pickup & Enjoy",
      description:
        "Your device is tested, verified, and returned ready to use.",
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
            Simple Process
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">How It Works</h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Getting your device repaired is quick, easy, and hassle-free.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="relative rounded-3xl border border-white/10 bg-[#11151D] p-8 hover:border-yellow-400/40 hover:shadow-[0_0_25px_rgba(250,204,21,0.15)]"
            >
              <motion.span
                className="absolute right-6 top-5 text-5xl font-bold text-white/5"
                whileHover={{
                  scale: 1.2,
                }}
              >
                {step.number}
              </motion.span>

              <motion.div
                className="mb-5 text-yellow-400"
                whileHover={{
                  rotate: 15,
                  scale: 1.2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
              >
                {step.icon}
              </motion.div>
              <div className="mb-6 h-1 w-16 rounded-full bg-yellow-400/40"></div>

              <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>

              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
