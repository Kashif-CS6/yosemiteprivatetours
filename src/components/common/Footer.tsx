"use client";

import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";
import { MdLocationOn, MdPhone } from "react-icons/md";
import HalfTemplate from "@/templates/HalfTemplate";
import ImageHandler from "../custom/ImageHandler";

export default function Footer() {
  return (
    <HalfTemplate>
      <footer className="bg-white">
        <div className="  py-10 grid grid-cols-1 md:grid-cols-4  gap-8 text-sm">
          {/* About */}
          <div>
            <h4 className="font-bold mb-4 text-[18px]">About</h4>
            <ul className="space-y-2 text-gray-500 font-[500] h-48 flex-wrap flex flex-col text-sm">
              <li>About us</li>
              <li>Quote Request</li>
              <li>Travel Agent</li>
              <li>Reviews</li>
              <li>FAQs</li>
              <li>Careers</li>
              <li>Blogs</li>
              <li>Contact Us</li>
              <li>Terms & Policy</li>
            </ul>
          </div>

          {/* Top Tours */}
          <div>
            <h4 className="font-bold mb-4 text-[18px]">Top Tours</h4>
            <ul className="space-y-2 font-[500] text-gray-500 h-40 flex-wrap flex flex-col text-sm">
              <li>1 Day Tour</li>
              <li>2 Day</li>
              <li>3 Day Adventure</li>
              <li>4 Day Package</li>
              <li>5 Days</li>
              <li>Lake Tahoe</li>
              <li>Mammoth Lakes</li>
              <li>Rafting</li>
              <li>VIP Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-[18px]">Contact us</h4>
            <div className="flex items-start gap-2 mb-3 text-sm font-[500]">
              <MdLocationOn className="text-yellow-500" size={20} />
              <p className="text-gray-500 ">
                1806 Belles Street, suite 5B
                <br />
                San Francisco, CA 94129
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-[500]">
              <MdPhone className="text-yellow-500" size={20} />
              <p className="text-gray-500">(209) 888-1141</p>
            </div>
          </div>

          {/* Payment Channels */}
          <div>
            <h4 className="font-bold mb-4 text-[18px]">Payment channels</h4>
            <div className="flex flex-wrap  w-64 items-center gap-5 -space-y-4">
              {[
                "/visa.png",
                "/mastercard.png",
                "/amex.png",
                "/jcb.png",
                "/unionpay.png",
                "/discover.png",
                "/diners.png",
                "/applepay.png",
                "/googlepay.png",
                "/paypal.png",
              ].map((src, i) => (
                <ImageHandler
                  key={i}
                  srcImage={src}
                  altImg="payment"
                  ImageWidth={30}
                  ImageHeight={30}
                  className="object-contain"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300">
          <div className="   py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            {/* Logo */}
            <ImageHandler
              srcImage="/logo.jpg"
              altImg="Logo"
              className="rounded-full w-16 h-16 object-cover"
              ImageWidth={500}
              ImageHeight={500}
            />

            <p className="text-sm font-[500] tracking-wide">
              © 2025 Yosemite Private Tours. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-lg text-gray-600">
              <FaFacebookF />
              <FaYoutube />
              <FaInstagram />
              <FaXTwitter />
              <FaTiktok />
            </div>
          </div>
        </div>
      </footer>
    </HalfTemplate>
  );
}
