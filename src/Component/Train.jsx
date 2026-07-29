import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const Train = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    gender: "",
    age: "",
    state: "",
    occupation: "",
    training: "",
    experience: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
*HYKINS TRAINING REGISTRATION*

Full Name: ${formData.fullname}

Phone: ${formData.phone}

Email: ${formData.email}

Gender: ${formData.gender}

Age: ${formData.age}

State: ${formData.state}

Occupation: ${formData.occupation}

Training Type: ${formData.training}

Experience: ${formData.experience}

Reason For Joining:
${formData.reason}
`;

    window.open(
      `https://wa.me/2348090648666?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="bg-[#0B0E14] py-24 text-white">
      <div className="mx-auto max-w-4xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-14 text-center"
        >
          <p className="uppercase tracking-[0.3em] text-yellow-400">
            Training Registration Form
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Become A
            <span className="block text-yellow-400">
              Professional Phone Repair Technician
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Fill out the registration form below. Once submitted, your
            application will be sent directly to our WhatsApp where we'll
            contact you with training details.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6 rounded-3xl border border-white/10 bg-[#11151D] p-8"
        >

          <div className="grid gap-6 md:grid-cols-2">

            <Input
              icon={<User size={18} />}
              placeholder="Full Name"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
            />

            <Input
              icon={<Phone size={18} />}
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <Input
              icon={<Mail size={18} />}
              placeholder="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="rounded-xl border border-white/10 bg-[#0B0E14] p-4 outline-none"
              required
            >
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <Input
              icon={<GraduationCap size={18} />}
              placeholder="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
            />

            <Input
              icon={<MapPin size={18} />}
              placeholder="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />

            <Input
              icon={<Briefcase size={18} />}
              placeholder="Occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
            />

            <select
              name="training"
              value={formData.training}
              onChange={handleChange}
              className="rounded-xl border border-white/10 bg-[#0B0E14] p-4 outline-none"
              required
            >
              <option value="">Training Type</option>
              <option>Physical</option>
              {/* <option>Online</option> */}
            </select>

            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="rounded-xl border border-white/10 bg-[#0B0E14] p-4 outline-none md:col-span-2"
              required
            >
              <option value="">Experience Level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

          </div>

          <textarea
            rows="5"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Why do you want to join the training?"
            className="w-full rounded-xl border border-white/10 bg-[#0B0E14] p-4 outline-none"
            required
          />

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: .95,
            }}
            type="submit"
            className="w-full rounded-full bg-yellow-400 py-4 text-lg font-bold text-black"
          >
            Register Now
          </motion.button>

        </motion.form>

      </div>
    </section>
  );
};

const Input = ({ icon, ...props }) => (
  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0B0E14] px-4">
    <div className="text-yellow-400">{icon}</div>

    <input
      {...props}
      required
      className="w-full bg-transparent py-4 outline-none"
    />
  </div>
);

export default Train;