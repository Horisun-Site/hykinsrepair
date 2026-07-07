import { useState } from "react";

const RepairForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    brand: "",
    model: "",
    repairType: "",
    problem: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello HYKINS,

*Repair Request*

Name: ${formData.name}
Phone Number: ${formData.phone}

Device Brand: ${formData.brand}
Device Model: ${formData.model}

Repair Type: ${formData.repairType}

Problem Description:
${formData.problem}
    `;

    const whatsappUrl = `https://wa.me/2348090648666?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="repair-form"
      className="bg-[#0B0E14] py-24 text-white"
    >
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-yellow-400">
            Repair Request
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Tell Us About Your Device
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Fill out the form below and we'll prepare your repair
            request directly through WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-[#11151D] p-8 md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">
            
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-white/10 bg-[#0B0E14] px-4 py-3 outline-none transition focus:border-yellow-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="0809 000 0000"
                className="w-full rounded-xl border border-white/10 bg-[#0B0E14] px-4 py-3 outline-none transition focus:border-yellow-400"
              />
            </div>

            {/* Brand */}
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Device Brand
              </label>

              <select
                name="brand"
                required
                value={formData.brand}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#0B0E14] px-4 py-3 outline-none transition focus:border-yellow-400"
              >
                <option value="">Select Brand</option>
                <option>Apple</option>
                <option>Samsung</option>
                <option>Tecno</option>
                <option>Infinix</option>
                <option>Xiaomi</option>
                <option>Oppo</option>
                <option>Huawei</option>
                <option>Other</option>
              </select>
            </div>

            {/* Model */}
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Device Model
              </label>

              <input
                type="text"
                name="model"
                required
                value={formData.model}
                onChange={handleChange}
                placeholder="e.g. iPhone 13 Pro"
                className="w-full rounded-xl border border-white/10 bg-[#0B0E14] px-4 py-3 outline-none transition focus:border-yellow-400"
              />
            </div>

            {/* Repair Type */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-gray-300">
                Repair Type
              </label>

              <select
                name="repairType"
                required
                value={formData.repairType}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#0B0E14] px-4 py-3 outline-none transition focus:border-yellow-400"
              >
                <option value="">Select Repair Type</option>
                <option>Screen Replacement</option>
                <option>Battery Replacement</option>
                <option>Charging Port Repair</option>
                <option>Water Damage Repair</option>
                <option>Software Issue</option>
                <option>Board-Level Repair</option>
                <option>Other</option>
              </select>
            </div>

            {/* Problem */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-gray-300">
                Describe The Problem
              </label>

              <textarea
                rows="6"
                name="problem"
                required
                value={formData.problem}
                onChange={handleChange}
                placeholder="Tell us what's wrong with your device..."
                className="w-full rounded-xl border border-white/10 bg-[#0B0E14] px-4 py-3 outline-none transition focus:border-yellow-400"
              />
            </div>

          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-yellow-400 px-6 py-4 font-semibold text-black transition hover:scale-[1.01]"
          >
            Send Repair Request via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default RepairForm;