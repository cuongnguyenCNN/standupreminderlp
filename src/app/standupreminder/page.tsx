import React from "react";

export default function LandingPage() {
  const features = [
    { icon: "⏰", title: "Timed Reminders" },
    { icon: "🧘", title: "Stretch Suggestions" },
    { icon: "🎵", title: "Custom Sounds" },
    { icon: "📊", title: "Weekly Stats" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Stand Up. Feel Better. Work Smarter.
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A smart Chrome Extension that reminds you to move, stretch, and stay
          healthy while working.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-2xl shadow-lg transition"
          >
            Install Free Extension
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
        {features.map((feat, idx) => (
          <div
            key={idx}
            className="text-center p-6 bg-white rounded-2xl shadow"
          >
            <div className="text-4xl mb-2">{feat.icon}</div>
            <h3 className="text-lg font-semibold text-gray-700">
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
        <a
          href="#"
          className="inline-block bg-gray-900 hover:bg-black text-white text-lg px-6 py-3 rounded-2xl transition"
        >
          Go Pro
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} Stand Up Reminder+. All rights reserved.
      </footer>
    </div>
  );
}
