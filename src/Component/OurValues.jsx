import { ShieldCheck, HeartHandshake, Award } from "lucide-react";
import { motion } from "framer-motion";

const OurValues = () => {
  const values = [
    {
      icon: <ShieldCheck size={40} />,
      title: "Honest Diagnosis",
      description:
        "We believe in transparency. Every customer receives a clear explanation of the issue before any repair work begins.",
    },
    {
      icon: <Award size={40} />,
      title: "Professional Excellence",
      description:
        "From basic repairs to advanced diagnostics, we strive for the highest standards in every service we provide.",
    },
    {
      icon: <HeartHandshake size={40} />,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We are committed to delivering reliable repairs and exceptional support.",
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
            Our Values
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            What Drives HYKINS
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-400">
            Our values guide every repair, every customer interaction,
            and every decision we make.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
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
                delay: index * 0.2,
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
                {value.icon}
              </motion.div>

              <h3 className="mb-3 text-xl font-semibold transition-colors duration-300 group-hover:text-yellow-400">
                {value.title}
              </h3>

              <p className="leading-relaxed text-gray-400">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="mt-16 rounded-3xl border border-yellow-400/20 bg-[#11151D] p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white">
            More Than Repairs
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-gray-400">
            At HYKINS, we don't just fix devices. We build trust through
            honesty, professionalism, and a commitment to delivering
            exceptional service every time.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default OurValues;