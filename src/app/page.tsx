"use client";
import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
const faqs = [
  {
    question: "How does StandUp Reminder+ work?",
    answer:
      "It sends you gentle stand-up reminders based on a timer or inactivity, helping you move more during work hours.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes! The core version is free. You can upgrade to Pro for advanced features like custom sounds, weekly stats, and more.",
  },
  {
    question: "Will it work if I close the browser?",
    answer:
      "No. Chrome Extensions work when your browser is running. Keep your browser open to receive reminders.",
  },
  {
    question: "How do I get Pro?",
    answer:
      "Just scroll up to the Pricing section and click “Upgrade to Pro”. You’ll be redirected to a secure checkout via Stripe.",
  },
];
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? 0 : index);
  };
  return (
    <div
      id="__next"
      className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6"
    >
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-blue-600">
            StandUp Reminder+
          </Link>
          <div className="space-x-6 hidden md:flex">
            <Link href="#features" className="hover:text-blue-600 font-medium">
              Features
            </Link>
            <Link href="#pricing" className="hover:text-blue-600 font-medium">
              Pricing
            </Link>
            <Link href="#faq" className="hover:text-blue-600 font-medium">
              FAQ
            </Link>
            <Link href="#contact" className="hover:text-blue-600 font-medium">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="features" className="max-w-4xl mx-auto text-center py-16">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Stand Up. Feel Better. Work Smarter.
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600">
          A smart Chrome Extension that reminds you to move, stretch, and stay
          healthy while working.
        </p>
        <div className="mt-8">
          <Link
            href="https://chromewebstore.google.com/detail/stand-up-reminder+/jgaaeeodkgfgdonlmidadghiapmdjcgg?authuser=0&hl=vi"
            className=" text-lg px-6 py-3 rounded-2xl shadow-lg bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700 transition"
          >
            Install Free Extension
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
        {[
          { icon: "⏰", title: "Timed Reminders" },
          { icon: "🧘", title: "Stretch Suggestions" },
          { icon: "🎵", title: "Custom Sounds" },
          { icon: "📊", title: "Weekly Stats" },
        ].map((feat, idx) => (
          <div
            key={idx}
            className="text-center p-6 bg-white rounded-2xl shadow"
          >
            <div className="text-4xl mb-2">{feat.icon}</div>
            <h3 className="text-lg font-semibold text-gray-700">
              {" "}
              {feat.title}
            </h3>
          </div>
        ))}
      </section>

      {/* Benefits */}
      <section className="max-w-3xl mx-auto text-center py-12">
        <h2 className="text-2xl font-bold mb-6">Why Use Stand Up Reminder+?</h2>
        <ul className="space-y-3 text-gray-700">
          <li>✅ Boost your energy and focus</li>
          <li>✅ Reduce back pain and fatigue</li>
          <li>✅ Improve your posture and circulation</li>
          <li>✅ Stay mindful of your physical health</li>
        </ul>
      </section>

      {/* Pro Version */}
      <section className="max-w-4xl mx-auto text-center py-16 bg-white rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Upgrade to Pro 🚀</h2>
        <p className="text-gray-600 mb-6">
          Unlock premium features to take control of your health and workspace.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>✨ Dark & Custom Themes</li>
          <li>✨ Advanced Stats Dashboard</li>
          <li>✨ Fully Customizable Timers</li>
          <li>✨ Premium Sounds</li>
        </ul>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700 transition">
          Go Pro
        </button>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="max-w-5xl mx-auto py-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="border rounded-2xl shadow p-8 bg-white flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <p className="text-4xl font-bold text-blue-600 mb-4">$0</p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔️ Smart Stand-Up Reminders</li>
              <li>✔️ Gentle Notification Sounds</li>
              <li>✔️ Stretch Suggestions</li>
            </ul>
            <Link
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
            >
              Install Free
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="border-2 border-blue-600 rounded-2xl shadow-lg p-8 bg-white flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Pro</h3>
            <p className="text-4xl font-bold text-blue-700 mb-4">$5/mo</p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✨ All Free Features</li>
              <li>✨ Customizable Reminder Intervals</li>
              <li>✨ Weekly Productivity Stats</li>
              <li>✨ Dark Mode & Custom Themes</li>
              <li>✨ Premium Notification Sounds</li>
            </ul>
            <Link
              href="#"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl transition font-medium"
            >
              Upgrade to Pro
            </Link>
          </div>
        </div>
      </section>
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            ❓ Frequently Asked Questions
          </h2>
          <div className="text-left space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 bg-white shadow"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left text-lg font-semibold text-blue-600 focus:outline-none flex justify-between items-center"
                >
                  <span>{faq.question}</span>
                  <span>{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            📬 Contact Us
          </h2>
          <p className="text-gray-600 mb-8">
            Have questions, suggestions, or feedback? We’d love to hear from
            you!
          </p>

          <form
            action="https://formspree.io/f/yourFormID" // replace with real endpoint
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg"
            >
              Send Message
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            Or email us directly at{" "}
            <Link
              href="mailto:standupreminder@gmail.com"
              className="text-blue-600"
            >
              standupreminder@gmail.com
            </Link>
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="text-center mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} Stand Up Reminder+. All rights reserved.
      </footer>
    </div>
  );
}
