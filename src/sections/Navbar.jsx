import React, { useState } from "react";
import { motion } from "motion/react";
function Navigation() {
  const navLinks = ["Home", "About", "Work", "Contact"];
  return (
    <ul className="nav-ul">
      {navLinks.map((navLink, index) => {
        return (
          <li className="nav-li">
            <a
              key={index}
              href={`#${navLink.toLowerCase()}`}
              className="nav-Link"
            >
              {navLink}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-20 bg-primary/40 fixed inset-x-0 w-full backdrop-blur-lg py-2">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white hover:cursor-pointer"
          >
            Tarek
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
