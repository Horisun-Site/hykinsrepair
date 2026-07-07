import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Book a Repair", path: "/book-repair" },
  ];

  const whatsappLink =
    "https://wa.me/2348090648666?text=Hello%20HYKINS,%20I%20would%20like%20to%20book%20a%20repair.";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0E14]/90 backdrop-blur-lg"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: 2,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="rounded-xl bg-white p-1 shadow-sm"
          >
            <img
              src="https://www.image2url.com/r2/default/images/1783352080327-ff26b1c7-1c75-4e0c-961c-31f2798ff96c.jpeg"
              alt="HYKINS Mobile Phone Repairs"
              className="h-12 w-auto object-contain lg:h-14"
            />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path}>
              {({ isActive }) => (
                <motion.div
                  whileHover={{ y: -2 }}
                  className={`relative text-sm font-medium ${
                    isActive
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}

                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-2 left-0 h-[2px] w-full bg-yellow-400"
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop WhatsApp */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="hidden items-center rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black md:inline-flex"
        >
          WhatsApp Us
        </motion.a>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden border-t border-white/10 bg-[#0B0E14] md:hidden"
          >
            <nav className="flex flex-col px-6 py-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-gray-300 transition hover:text-white"
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                className="mt-4 rounded-full bg-yellow-400 px-4 py-3 text-center font-semibold text-black"
              >
                WhatsApp Us
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;