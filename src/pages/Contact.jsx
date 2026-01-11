import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", msg: "" });

    try {
      await emailjs.sendForm(
        "service_tees5n7",
        "template_zf93qxn",
        formRef.current,
        { publicKey: "tJ8QLn07TVbtaD-BS" }
      );

      setStatus({ type: "success", msg: "Message sent successfully!" });
      formRef.current.reset();
    } catch (err) {
      setStatus({ type: "error", msg: "Failed to send. Try again." });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#0f1724] text-white min-h-screen py-16">
      <section className="max-w-6xl mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="bg-[#0b0f13] p-8 rounded-md border border-gray-800 shadow-sm">
              <h2 className="text-3xl font-extrabold text-emerald-400 mb-3">
                Let's work together
              </h2>

              {/* status message */}
              {status.msg && (
                <div
                  className={`mb-4 text-sm ${
                    status.type === "success" ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {status.msg}
                </div>
              )}

              <form
                ref={formRef}
                onSubmit={onSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <input
                  type="text"
                  name="from_name"           
                  placeholder="First name"
                  required
                  className="bg-[#0f1416] border border-gray-800 rounded px-3 py-2 text-gray-100 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                />

                <input
                  type="text"
                  name="last_name"       
                  placeholder="Last name"
                  className="bg-[#0f1416] border border-gray-800 rounded px-3 py-2 text-gray-100 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                />

                <input
                  type="email"
                  name="from_email"             
                  placeholder="Email address"
                  required
                  className="bg-[#0f1416] border border-emerald-400 rounded px-3 py-2 text-gray-100 focus:outline-none"
                />

                <input
                  type="tel"
                  name="phone"                  
                  placeholder="Phone number"
                  className="bg-[#0f1416] border border-gray-800 rounded px-3 py-2 text-gray-100 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                />

                <select
                  name="service"                
                  defaultValue=""
                  required
                  className="sm:col-span-2 bg-[#0f1416] border border-gray-800 rounded px-3 py-2 text-gray-200"
                >
                  <option value="" disabled>Select a service</option>
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Logo Design</option>
                  <option>Mobile App Development</option>
                  <option>Backend Development</option>
                  <option>Cloud & DevOps</option>
                </select>

                <textarea
                  rows={6}
                  name="message"                
                  required
                  className="sm:col-span-2 bg-[#0f1416] border border-gray-800 rounded px-3 py-2 text-gray-100"
                  placeholder="Type your message here."
                />

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-emerald-400 text-black px-6 py-2 rounded-full font-medium disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send message"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* right side cards remain the same */}
          <aside className="space-y-4">{/* ... */}</aside>
        </div>
      </section>
    </main>
  );
}
