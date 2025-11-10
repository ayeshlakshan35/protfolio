import React from 'react'

export default function Footer() {
	return (
		<footer className="bg-[#071021] text-gray-300">
			<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
				<div className="text-sm">&copy; {new Date().getFullYear()} Ayesha Lakshan. All rights reserved.</div>

				<div className="flex items-center gap-3">
					<a href="https://github.com/ayeshlakshan35" aria-label="github" className="w-8 h-8 rounded-full border border-emerald-400 flex items-center justify-center text-emerald-400">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
							<path d="M12 .5C5.73.5.75 5.48.75 11.77c0 4.94 3.2 9.12 7.64 10.59.56.1.76-.24.76-.53 0-.26-.01-1.12-.02-2.03-3.1.67-3.75-1.49-3.75-1.49-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.55 1.18 3.17.9.1-.71.38-1.18.69-1.45-2.47-.28-5.07-1.24-5.07-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.12 1.15a10.8 10.8 0 012.84-.38c.96 0 1.94.13 2.84.38 2.17-1.45 3.12-1.15 3.12-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.29-2.6 5.24-5.08 5.51.39.34.73 1.02.73 2.06 0 1.49-.01 2.69-.01 3.06 0 .29.2.64.77.53 4.44-1.47 7.64-5.65 7.64-10.59C23.25 5.48 18.27.5 12 .5z" />
						</svg>
					</a>
					<a href="https://www.linkedin.com/in/ayesh-lakshan-217408333/" aria-label="linkedin" className="w-8 h-8 rounded-full border border-emerald-400 flex items-center justify-center text-emerald-400">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
							<path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.25h5v15H0v-15zM8 8.25h4.8v2.05h.07c.67-1.27 2.3-2.6 4.73-2.6C23.2 7.7 24 11 24 14.9V23.25h-5v-7.8c0-1.86-.03-4.25-2.59-4.25-2.6 0-3 2.05-3 4.14V23.25H8V8.25z" />
						</svg>
					</a>
					<a href="mailto:ayeshalakshan00@gmail.com" aria-label="Email" className="w-8 h-8 rounded-full border border-emerald-400 flex items-center justify-center text-emerald-400">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
							<path d="M23.44 4.83c-.77.35-1.6.59-2.47.7a4.3 4.3 0 001.88-2.38 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.14 12.14 0 013 3.15a4.28 4.28 0 001.32 5.71 4.21 4.21 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 003.99 2.97A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56c.84-.6 1.57-1.34 2.15-2.19z" />
						</svg>
					</a>
				</div>
			</div>
		</footer>
	)
}
