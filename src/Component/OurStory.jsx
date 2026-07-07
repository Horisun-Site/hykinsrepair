const OurStory = () => {
  return (
    <section className="bg-[#0B0E14] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left Side */}
          <div>
            <p className="mb-3 uppercase tracking-[0.3em] text-yellow-400">
              Our Story
            </p>

            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Built on Trust,
              <span className="block text-yellow-400">
                Powered by Expertise
              </span>
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              HYKINS was founded with a simple mission: to provide
              reliable, honest, and professional mobile phone repair
              services that customers can trust.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              Over the years, we have repaired a wide range of devices,
              helping customers recover from cracked screens, battery
              failures, charging issues, water damage, and complex
              motherboard faults.
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
              We believe every repair should be handled with precision,
              transparency, and genuine care. That's why our customers
              continue to trust HYKINS with their devices.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid gap-6 sm:grid-cols-2">
            
            <div className="rounded-3xl border border-white/10 bg-[#11151D] p-8">
              <h3 className="mb-2 text-4xl font-bold text-yellow-400">
                500+
              </h3>
              <p className="text-gray-400">
                Devices Successfully Repaired
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#11151D] p-8">
              <h3 className="mb-2 text-4xl font-bold text-yellow-400">
                6+
              </h3>
              <p className="text-gray-400">
                Years of Experience
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#11151D] p-8">
              <h3 className="mb-2 text-4xl font-bold text-yellow-400">
                98%
              </h3>
              <p className="text-gray-400">
                Customer Satisfaction
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#11151D] p-8">
              <h3 className="mb-2 text-4xl font-bold text-yellow-400">
                90
              </h3>
              <p className="text-gray-400">
                Days Warranty Coverage
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;