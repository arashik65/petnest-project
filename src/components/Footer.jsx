"use client";

import {
  Envelope,
  LogoFacebook,
  LogoGithub,
  LogoTelegram,
} from "@gravity-ui/icons";
import { MapPin, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* PetNest */}
          <div>
            <Image
              src="/assests/images/navlogo2.png"
              alt="PetNest Logo"
              width={200}
              height={200}
            />

            <h1
              className="text-2xl font-extrabold tracking-wide pl-10
              bg-gradient-to-r from-orange-500 to-orange-400
              bg-clip-text text-transparent"
            >
              PetNest
            </h1>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Platform</h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <Link
                  href="/all-pets"
                  className="hover:text-orange-400 transition"
                >
                  All Pets
                </Link>
              </li>

              <li>
                <Link
                  href="/add-pet"
                  className="hover:text-orange-400 transition"
                >
                  Add a Pet
                </Link>
              </li>

              <li>
                <Link
                  href="/my-requests"
                  className="hover:text-orange-400 transition"
                >
                  My Requests
                </Link>
              </li>

              <li>
                <Link
                  href="/my-listings"
                  className="hover:text-orange-400 transition"
                >
                  My Listings
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Company</h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-orange-400 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/success-stories"
                  className="hover:text-orange-400 transition"
                >
                  Success Stories
                </Link>
              </li>

              <li>
                <Link
                  href="/pet-care-tips"
                  className="hover:text-orange-400 transition"
                >
                  Pet Care Tips
                </Link>
              </li>

              <li>
                <Link
                  href="/why-adopt"
                  className="hover:text-orange-400 transition"
                >
                  Why Adopt?
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Contact Information</h3>

            <div className="space-y-4 text-slate-300">
              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-orange-400" />

                <p>Dhaka, Bangladesh</p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400" />

                <p>+8801947619298</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Envelope className="w-5 h-5 text-orange-400" />

                <Link
                  href="mailto:mdashikur6398@gmail.com"
                  className="flex items-center hover:text-orange-400 transition"
                >
                  <p className="flex items-center">
                    mdashikur6398@gmail.com
                    <MdOutlineArrowOutward className="ml-1" />
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Follow Us</h3>

            <div className="flex items-center gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="w-11 h-11 rounded-full bg-slate-800
                flex items-center justify-center
                hover:bg-orange-500 transition duration-300"
              >
                <LogoFacebook className="w-5 h-5" />
              </Link>

              <Link
                href="https://twitter.com"
                target="_blank"
                className="w-11 h-11 rounded-full bg-slate-800
                flex items-center justify-center
                hover:bg-orange-500 transition duration-300"
              >
                <X className="w-5 h-5" />
              </Link>

              <Link
                href="https://telegram.org"
                target="_blank"
                className="w-11 h-11 rounded-full bg-slate-800
                flex items-center justify-center
                hover:bg-orange-500 transition duration-300"
              >
                <LogoTelegram className="w-5 h-5" />
              </Link>

              <Link
                href="https://github.com"
                target="_blank"
                className="w-11 h-11 rounded-full bg-slate-800
                flex items-center justify-center
                hover:bg-orange-500 transition duration-300"
              >
                <LogoGithub className="w-5 h-5" />
              </Link>
            </div>

            <p className="text-slate-400 mt-6 leading-relaxed">
              Join the PetNest community to discover loving pets, connect with
              caring families, and create beautiful lifelong bonds with pets.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className="border-t border-slate-800 mt-12 pt-6
          flex flex-col md:flex-row justify-between
          items-center gap-4"
        >
          <p className="text-slate-400 text-sm text-center">
            © {new Date().getFullYear()} PetNest. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-400">
            <Link
              href="/privacy-policy"
              className="hover:text-orange-400 transition"
            >
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-orange-400 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
