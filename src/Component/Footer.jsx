import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#080B10] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <img
              src="https://www.image2url.com/r2/default/images/1783352080327-ff26b1c7-1c75-4e0c-961c-31f2798ff96c.jpeg"
              alt="HYKINS Mobile Phone Repairs"
              className="mb-4 h-14 rounded-lg bg-white p-1"
            />

            <p className="max-w-sm text-gray-400">
              Professional phone repair services you can trust. From screen
              replacements to advanced board-level repairs, HYKINS keeps your
              devices working perfectly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-gray-400 transition hover:text-yellow-400"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-gray-400 transition hover:text-yellow-400"
              >
                About
              </Link>

              <Link
                to="/book-repair"
                className="text-gray-400 transition hover:text-yellow-400"
              >
                Book a Repair
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Contact Information</h3>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-yellow-400" />
                <a
                  href="https://wa.me/2348090648666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400"
                >
                  0809 064 8666
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-yellow-400" />
                <p>Mushin, Lagos, Nigeria</p>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-1 text-yellow-400" />
                <p>
                  Mon - Sat
                  <br />
                  9:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} HYKINS Mobile Phone Repairs.
            </p>

            <p>
              Designed & Developed by{" "}
              <a
                href="https://tim-tech.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-yellow-400 transition hover:text-yellow-300"
              >
                Timi
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
