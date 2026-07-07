import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const WhyBookWithUs = () => {
  const reasons = [
    {
      icon: <ShieldCheck size={40} />,
      title: "Certified Repairs",
      description:
        "Your device is handled by trained and certified technicians with professional repair experience.",
    },
    {
      icon: <Clock3 size={40} />,
      title: "Fast Turnaround",
      description:
        "Most repairs are completed quickly, helping you get back to your day without unnecessary delays.",
    },
    {
      icon: <BadgeCheck size={40} />,
      title: "Transparent Pricing",
      description:
        "No hidden charges. We explain the issue and cost before any repair work begins.",
    },
    {
      icon: <MessageCircle size={40} />,
      title: "Direct WhatsApp Support",
      description:
        "Communicate directly with HYKINS through WhatsApp for updates, questions, and support.",
    },
  ];

  return (
    <section className="overflow-hidden bg-[#0B0E14] py-24 text-white">
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
            Why Choose HYKINS
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Why Book With Us?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-400">
            We make phone repairs simple, professional, and stress-free.
            From diagnosis to completion, your device is in safe hands.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group rounded-3xl border border-white/10 bg-[#11151D] p-8 transition-all duration-300 hover:border-yellow-400/40 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]"
            >
              <motion.div
                className="mb-5 text-yellow-400"
                whileHover={{
                  rotate: 8,
                  scale: 1.15,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                {reason.icon}
              </motion.div>

              <h3 className="mb-3 text-xl font-semibold transition-colors duration-300 group-hover:text-yellow-400">
                {reason.title}
              </h3>

              <p className="leading-relaxed text-gray-400">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          whileHover={{
            scale: 1.01,
          }}
          className="mt-16 rounded-3xl border border-yellow-400/20 bg-[#11151D] p-8 text-center"
        >
          <h3 className="mb-3 text-2xl font-bold">
            Trusted Repairs. Reliable Service.
          </h3>

          <p className="mx-auto max-w-3xl text-gray-400">
            Whether you're dealing with a cracked screen, charging issues,
            battery problems, water damage, or advanced motherboard faults,
            HYKINS is committed to delivering quality repairs you can trust.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyBookWithUs;