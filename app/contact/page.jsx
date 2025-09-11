"use client";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 7488578652",
    link: "tel:+917488578652",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "tarunkataruka22@gmail.com",
    link: "mailto:tarunkataruka22@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Bengaluru, Karnataka, India",
    link: null,
  },
];

const socials = [
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/tarun-kataruka-29494327a/",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    link: "https://github.com/Tarun-Kataruka",
  },
  {
    icon: <FaInstagram />,
    title: "Instagram",
    link: "https://www.instagram.com/tarun.kataruka/",
  },
  {
    icon: <SiLeetcode />,
    title: "LeetCode",
    link: "https://leetcode.com/u/tarun-kataruka/", 
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3, ease: "easeIn" } }}
      className="py-12"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-10 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-accent">Get in Touch</h2>
          <p className="text-white/60 max-w-xl">
            Interested in opportunities, collaborations, or just a quick chat?
            Feel free to reach out — I’d love to connect.
          </p>

          {/* Contact Info */}
          <ul className="flex flex-col md:flex-row gap-8">
            {info.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-4 bg-[#27272c] px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="text-accent text-2xl">{item.icon}</div>
                <div className="text-left">
                  <p className="text-white/60 text-sm">{item.title}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-lg font-semibold hover:underline"
                    >
                      {item.description}
                    </a>
                  ) : (
                    <h3 className="text-lg font-semibold">
                      {item.description}
                    </h3>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Socials / Links */}
          {/* Socials / Links */}
          <div className="flex gap-6 mt-6 flex-wrap justify-center">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className={`flex items-center gap-2 text-white/80 transition 
          ${
            social.title === "GitHub"
              ? "hover:text-gray-300 hover:border-gray-500"
              : ""
          }
          ${
            social.title === "Instagram"
              ? "hover:text-pink-500 hover:border-pink-500"
              : ""
          }
          ${
            social.title === "LeetCode"
              ? "hover:text-orange-400 hover:border-orange-400"
              : ""
          }
          ${
            social.title === "LinkedIn"
              ? "hover:text-blue-500 hover:border-blue-500"
              : ""
          }
        `}
                >
                  {social.icon}
                  {social.title}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
