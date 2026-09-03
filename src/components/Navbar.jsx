"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@heroui/react";
import ThemingToggle from "./ThemingToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-orange-100 dark:border-stone-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assests/images/navlogo2.png"
              width={60}
              height={60}
              alt="PetNest"
              className="object-contain"
            />

            <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 bg-clip-text text-transparent">
              PetNest
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-medium text-stone-700 dark:text-stone-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
            >
              Home
            </Link>

            <Link
              href="/pets"
              className="font-medium text-stone-700 dark:text-stone-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
            >
              All Pets
            </Link>

            <Link
              href="/my-requests"
              className="font-medium text-stone-700 dark:text-stone-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
            >
              My Requests
            </Link>

            <Link
              href="/add-pet"
              className="font-medium text-stone-700 dark:text-stone-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
            >
              Add Pet
            </Link>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Profile Dropdown */}
            <div className="relative">
              <Button
                variant="bordered"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="border-orange-600 text-orange-600 font-semibold hover:bg-orange-600 hover:text-white dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-400 dark:hover:text-stone-950 transition-all duration-200"
              >
                Profile
                <ChevronDown
                  size={17}
                  className={`transition-transform duration-200 ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-xl border border-orange-100 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-lg overflow-hidden">
                  <Link
                    href="/dashboard"
                    className="block px-4 py-3 text-stone-700 dark:text-stone-200 hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-stone-800 dark:hover:text-orange-400 transition-colors"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Dashboard
                  </Link>

                  <button
                    className="w-full text-left px-4 py-3 text-stone-700 dark:text-stone-200 hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-stone-800 dark:hover:text-orange-400 transition-colors"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Login Button */}
            <Button
              variant="solid"
              className="bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-all duration-200"
            >
              Login
            </Button>

            {/* Theme Toggle */}
            <ThemingToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-stone-700 dark:text-stone-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-orange-100 dark:border-stone-800 bg-white dark:bg-stone-950">
          <div className="flex flex-col">
            <Link
              href="/"
              className="px-5 py-4 text-stone-700 dark:text-stone-200 hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-stone-900 dark:hover:text-orange-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/pets"
              className="px-5 py-4 text-stone-700 dark:text-stone-200 hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-stone-900 dark:hover:text-orange-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              All Pets
            </Link>

            <Link
              href="/my-requests"
              className="px-5 py-4 text-stone-700 dark:text-stone-200 hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-stone-900 dark:hover:text-orange-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              My Requests
            </Link>

            <Link
              href="/add-pet"
              className="px-5 py-4 text-stone-700 dark:text-stone-200 hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-stone-900 dark:hover:text-orange-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Add Pet
            </Link>

            {/* Mobile Profile */}
            <div className="border-t border-orange-100 dark:border-stone-800">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-stone-700 dark:text-stone-200 hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-stone-900 dark:hover:text-orange-400 transition-colors"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <span>Profile</span>

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isProfileOpen && (
                <div className="bg-orange-50/50 dark:bg-stone-900">
                  <Link
                    href="/dashboard"
                    className="block px-8 py-3 text-stone-700 dark:text-stone-200 hover:text-orange-600 dark:hover:text-orange-400"
                    onClick={() => {
                      setIsProfileOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Dashboard
                  </Link>

                  <button
                    className="w-full text-left px-8 py-3 text-stone-700 dark:text-stone-200 hover:text-orange-600 dark:hover:text-orange-400"
                    onClick={() => {
                      setIsProfileOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Login */}
            <div className="px-5 py-4">
              <Button
                className="w-full bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Button>
            </div>

            {/* Mobile Theme Toggle */}
            <div className="px-5 py-3 flex justify-end">
              <ThemingToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
