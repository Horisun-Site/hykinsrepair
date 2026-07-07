import { motion } from "framer-motion";

const RepairVideosShowcase = () => {
  const videos = [
    {
      title: "Screen Replacement",
      description: "Professional screen replacement service.",
      video: "/videos/screen-repair.mp4",
    },
    {
      title: "Charging Port Repair",
      description: "Fixing charging and power issues.",
      video: "/videos/charging-port.mp4",
    },
    {
      title: "Board-Level Repair",
      description: "Advanced motherboard diagnostics and repair.",
      video: "/videos/board-repair.mp4",
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
            Our Work
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Repair Videos Showcase
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-400">
            See real repair work performed by HYKINS technicians.
            From screen replacements to advanced diagnostics, we take
            pride in every repair.
          </p>
        </motion.div>

        {/* Videos */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
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
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#11151D] transition-all duration-300 hover:border-yellow-400/40 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]"
            >
              {/* Badge */}
              <div className="absolute left-4 top-4 z-20 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-black">
                Repair Video
              </div>

              {/* Video */}
              <motion.video
                controls
                preload="metadata"
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="h-72 w-full object-cover"
              >
                <source src={video.video} type="video/mp4" />
                Your browser does not support the video tag.
              </motion.video>

              {/* Content */}
              <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3,
                }}
              >
                <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-yellow-400">
                  {video.title}
                </h3>

                <p className="leading-relaxed text-gray-400">
                  {video.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
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
          }}
        >
          <p className="mx-auto max-w-2xl text-gray-400">
            Every repair is handled with precision, care, and professional
            expertise to ensure your device performs like new.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default RepairVideosShowcase;