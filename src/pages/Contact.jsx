import React from 'react'

export default function Contact() {
  return (
    <main className="bg-[#0f1724] text-white min-h-screen py-16">
      <section className="max-w-6xl mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left: Contact form card (spans 2 cols on large) */}
          <div className="lg:col-span-2">
            <div className="bg-[#0b0f13] p-8 rounded-md border border-gray-800 shadow-sm animate-fade-up">
              <h2 className="text-3xl font-extrabold text-emerald-400 mb-3">Let's work together</h2>
              <p className="text-gray-300 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sit illo esse commodi.</p>

              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="bg-[#0f1416] border border-gray-800 rounded px-3 py-2 text-gray-100 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                />

                <input
                  type="text"
                  placeholder="Last name"
                  className="bg-[#0f1416] border border-gray-800 rounded px-3 py-2 text-gray-100 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                />

                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-[#0f1416] border border-emerald-400 rounded px-3 py-2 text-gray-100 focus:outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone number"
                  className="bg-[#0f1416] border border-gray-800 rounded px-3 py-2 text-gray-100 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                />

                <select className="sm:col-span-2 bg-[#0f1416] border border-gray-800 rounded px-3 py-2 text-gray-200">
                  <option>Select a service</option>
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Consulting</option>
                </select>

                <textarea
                  rows={6}
                  className="sm:col-span-2 bg-[#0f1416] border border-gray-800 rounded px-3 py-2 text-gray-100"
                  placeholder="Type your message here."
                />

                <div className="sm:col-span-2">
                  <button type="submit" className="bg-emerald-400 text-black px-6 py-2 rounded-full font-medium">Send message</button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Contact details */}
          <aside className="space-y-4">
            <div className="flex items-center gap-4 bg-[#0b0f13] p-4 rounded-md border border-gray-800 shadow-sm animate-fade-up">
              <div className="w-12 h-12 bg-[#081014] rounded flex items-center justify-center border border-gray-800">
                {/* phone icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-400">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.05.37 2.07.73 3.03a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.05-1.05a2 2 0 0 1 2.11-.45c.96.36 1.98.61 3.03.73A2 2 0 0 1 22 16.92z" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-400">Phone</div>
                <div className="font-medium">(+44) 321 654 876</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#0b0f13] p-4 rounded-md border border-gray-800 shadow-sm animate-fade-up" style={{ animationDelay: '80ms' }}>
              <div className="w-12 h-12 bg-[#081014] rounded flex items-center justify-center border border-gray-800">
                {/* mail icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="3" y="4" width="18" height="16" rx="2" stroke="#10b981" strokeWidth="1.2"/>
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div className="font-medium">youremail@email.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#0b0f13] p-4 rounded-md border border-gray-800 shadow-sm animate-fade-up" style={{ animationDelay: '160ms' }}>
              <div className="w-12 h-12 bg-[#081014] rounded flex items-center justify-center border border-gray-800">
                {/* location icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0z" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="2.5" fill="#10b981" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-400">Address</div>
                <div className="font-medium">Code Corner, Tech Town 13579</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
