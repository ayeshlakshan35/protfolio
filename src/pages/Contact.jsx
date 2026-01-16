import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import AnimatedBackground from "../Components/AnimatedBackground";

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
        "service_tves5n7",
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
    <main className="relative text-white min-h-screen py-16 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a0e1a 0%, #0f1724 50%, #000000 100%)'
    }}>
      <AnimatedBackground />
      <div className="relative z-10">
      <section className="max-w-6xl mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-gray-800/50 hover:border-emerald-400/50 transition-all duration-300">
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
                  className="bg-white/5 backdrop-blur-sm border border-gray-800/50 rounded px-3 py-2 text-gray-100 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                />

                <input
                  type="text"
                  name="last_name"       
                  placeholder="Last name"
                  className="bg-white/5 backdrop-blur-sm border border-gray-800/50 rounded px-3 py-2 text-gray-100 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                />

                <input
                  type="email"
                  name="from_email"             
                  placeholder="Email address"
                  required
                  className="bg-white/5 backdrop-blur-sm border border-emerald-400/50 rounded px-3 py-2 text-gray-100 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                />

                <input
                  type="tel"
                  name="phone"                  
                  placeholder="Phone number"
                  className="bg-white/5 backdrop-blur-sm border border-gray-800/50 rounded px-3 py-2 text-gray-100 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                />

                <select
                  name="service"                
                  defaultValue=""
                  required
                  className="sm:col-span-2 bg-slate-900/60 backdrop-blur-md border border-gray-600/50 rounded px-3 py-2 text-gray-100 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all [&>option]:bg-slate-800 [&>option]:text-gray-100"
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
                  className="sm:col-span-2 bg-white/5 backdrop-blur-sm border border-gray-800/50 rounded px-3 py-2 text-gray-100 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                  placeholder="Type your message here."
                />

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-emerald-400 text-black px-6 py-2 rounded-full font-medium disabled:opacity-60 hover:bg-emerald-500 transition-all duration-300 hover:scale-105"
                  >
                    {loading ? "Sending..." : "Send message"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* right side cards remain the same */}
                    {/* Right: Contact details */}
          <aside className="space-y-4">
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-gray-800/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/20 hover:border-emerald-400/50 cursor-pointer">
              <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center border border-gray-800/50 transition-all duration-300">
                {/* phone icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-400 transition-transform duration-300 hover:rotate-12">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.05.37 2.07.73 3.03a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.05-1.05a2 2 0 0 1 2.11-.45c.96.36 1.98.61 3.03.73A2 2 0 0 1 22 16.92z" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-400">Phone</div>
                <div className="font-medium">070-5049567</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-gray-800/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/20 hover:border-emerald-400/50 cursor-pointer">
              <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center border border-gray-800/50 transition-all duration-300">
                {/* mail icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 hover:scale-110">
                  <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="3" y="4" width="18" height="16" rx="2" stroke="#10b981" strokeWidth="1.2"/>
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div className="font-medium">ayeshalakshan00@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-gray-800/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/20 hover:border-emerald-400/50 cursor-pointer">
              <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center border border-gray-800/50 transition-all duration-300">
                {/* location icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 hover:scale-110">
                  <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0z" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="2.5" fill="#10b981" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-400">Address</div>
                <div className="font-medium">Savinda, Narandeniya, kamburupitiya</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
      </div>
    </main>
  );
}



























