import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const payload = { name, email, message };
    // Simulate sending — replace with real API integration if needed
    setTimeout(() => {
      console.log("Contact payload:", payload);
      setLoading(false);
      setStatus({ ok: true, msg: "Thanks — I'll get back to you soon." });
      setName("");
      setEmail("");
      setMessage("");
    }, 800);
  }

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p className="text-gray-700 max-w-2xl">
          I'm open to new opportunities and freelance work. Fill out the form below or
          email me and I'll respond within 2 business days.
        </p>
      </div>
      <div className="w-full max-w-xl px-4 mx-auto mt-6">
        <form onSubmit={handleSubmit} className="w-full" aria-label="Contact form">
          <label className="block mb-3">
            <span className="text-sm text-gray-700">Name</span>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-label="Your name"
              className="mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </label>
          <label className="block mb-3">
            <span className="text-sm text-gray-700">Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Your email"
              className="mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </label>
          <label className="block mb-4">
            <span className="text-sm text-gray-700">Message</span>
            <textarea
              name="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              aria-label="Your message"
              className="mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </label>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send message"}
            </button>
            <a
              href="mailto:hello@example.com"
              className="text-sm text-gray-600 underline"
            >
              Or email me directly
            </a>
          </div>
          {status && (
            <p
              className={`mt-3 ${status.ok ? "text-green-600" : "text-red-600"}`}
            >
              {status.msg}
            </p>
          )}
          <p className="mt-3 text-xs text-gray-500">
            I respond within 48 hours. Your message will not be shared — this site only uses messages to contact me.
          </p>
        </form>
      </div>
    </section>
  );
}
